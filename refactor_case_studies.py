from pathlib import Path
import re, tempfile
from bs4 import BeautifulSoup, Tag

path = Path('script.js')
source = path.read_text(encoding='utf-8')
Path(tempfile.gettempdir(), 'portfolio-case-studies-before.js').write_text(source, encoding='utf-8')
home = BeautifulSoup(Path('index.html').read_text(encoding='utf-8'), 'html.parser')

def transform(match):
    key = match[1] or match[2]
    soup = BeautifulSoup(match[3], 'html.parser')
    def tag(name, cls=None, text=None):
        node = soup.new_tag(name)
        if cls: node['class'] = cls.split()
        if text: node.string = text
        return node
    def section(title, cls=''):
        node = tag('section', 'case-study-section ' + cls)
        node.append(tag('h3', text=title))
        return node
    def named(title):
        return next((n for n in soup.find_all('section', recursive=False) if n.h3 and n.h3.get_text() == title), None)
    header = soup.header.extract()
    facts = soup.select_one('.project-quick-facts').extract()
    context = named('Context').extract()
    context.h3.extract()
    context_media = [n.extract() for n in context.find_all('figure')]
    for goal in context.select('.case-study-goal'):
        goal.select_one('.case-study-section-label').decompose()
        goal.select_one('p')['class'] = []
        goal.unwrap()
    problem = named('Problem') or named('Engineering Challenge')
    if problem:
        problem.h3.decompose()
        for goal in problem.select('.case-study-goal'):
            goal.select_one('.case-study-section-label').decompose()
            goal.select_one('p')['class'] = []
            goal.unwrap()
        # The original motivation precedes context referring back to it.
        for node in reversed(list(problem.contents)):
            context.insert(0, node.extract())
        problem.decompose()
    context['class'] = ['case-study-section', 'case-study-info-panel']
    content = tag('div', 'case-study-info-content')
    for node in list(context.contents): content.append(node.extract())
    context.append(tag('h3', 'case-study-info-label', 'Context'))
    context.append(content)
    contribution = (named('Contribution') or named('My Contribution')).extract()
    contribution.h3.string = 'My Contribution'
    contribution['class'].append('case-study-contribution')
    credits = contribution.select_one('.collaboration-credits')
    if credits:
        credits.extract()
        names = credits.select_one('.credit-list').get_text(strip=True).split(' · ')
        credits = section('Team & Credits', 'case-study-credits')
        row = tag('ul', 'case-study-credit-list')
        for name in names: row.append(tag('li', text=name))
        credits.append(row)
    bullet_list = contribution.find('ul', recursive=False)
    if bullet_list:
        grid = tag('div', 'contribution-grid')
        titles = ['Hardware & Input', 'Serial & Unity Integration', 'Interaction Modes', 'Feedback & Testing']
        for title, item in zip(titles, bullet_list.find_all('li')):
            card = tag('article'); card.append(tag('h4', text=title))
            para = tag('p')
            for node in list(item.contents): para.append(node.extract())
            card.append(para); grid.append(card)
        bullet_list.replace_with(grid)
    result = (named('Result') or named('Outcome')).extract()
    result.h3.string = 'Result'
    result['class'] = ['case-study-section', 'case-study-result']
    links = named('Project Links')
    if links: links.extract()
    primary = soup.find('figure', recursive=False)
    if primary: primary.extract()
    story = named('Implementation')
    notes = []
    if story:
        story.extract()
        story.h3.string = 'Visual Story'
        story['class'] = ['case-study-section', 'case-study-story']
        for part in list(story.select(':scope > .case-study-subsection')):
            if part.select_one('.experience-journey'):
                heading = part.find('h4', recursive=False)
                story.h3.string = heading.get_text()
                heading.decompose()
                for h in part.select('h5'): h.name = 'h4'
                part.unwrap()
            elif not part.select_one('img, video, iframe'):
                notes.append(part.extract())
        # Keep the gallery ahead of implementation explanations.
        for part in list(story.select(':scope > .case-study-subsection')):
            if part.h4 and part.h4.get_text() == 'Technical Implementation':
                notes.append(part.extract())
    else:
        story = named('Engineering Focus').extract()
        notes.append(named('Technical Stack').extract())
    if key == 'physical-control-deck':
        primary = story.select_one('[data-sync-demo]').extract()
        primary.name = 'section'
        primary['class'] = ['case-study-primary-media', 'control-deck-demo']
        primary.h4.name = 'h3'
        for h in primary.select('h5'): h.name = 'h4'
        for chapter in list(story.select('.control-deck-chapter')):
            if not chapter.select_one('img, video'):
                chapter['class'] = ['case-study-subsection']
                notes.append(chapter.extract())
            else:
                chapter['class'] = ['case-study-visual-stage']
        for figure in list(result.select('figure')): story.append(figure.extract())
    if key == 'ai-content-platform':
        primary = tag('figure', 'case-study-primary-media')
        abstract = BeautifulSoup(str(home.select_one('.ai-project-visual')), 'html.parser').span
        abstract.attrs.pop('aria-hidden', None)
        caption = abstract.select_one('.ai-project-visual__caption').extract()
        primary.append(abstract)
        primary.append(tag('figcaption', text=caption.get_text()))
    if key == 'blade-of-the-dawn':
        video = links.select_one('.project-video-block').extract()
        video['class'] = ['case-study-primary-media']
        video.name = 'section'
        video.h4.name = 'h3'
        story.h3.insert_after(primary)
        primary = video
    if key == 'retro-snake':
        clip = story.select_one('img[src="images/retro snake.gif"]').find_parent('figure').extract()
        story.h3.insert_after(primary)
        primary = clip
    for figure in context_media: story.append(figure)
    primary['class'] = list(dict.fromkeys(primary.get('class', []) + ['case-study-primary-media']))
    for video in primary.select('video:not([data-sync-video])'):
        video['controls'] = ''
        video.attrs.pop('autoplay', None)
    for iframe in primary.select('iframe'):
        iframe['src'] = iframe['src'].replace('controls=0', 'controls=1').replace('autoplay=1', 'autoplay=0')
    for stage in story.select('.experience-stage, .case-study-visual-stage, .case-study-card-grid > article'):
        media = stage.find(['figure', 'div'], recursive=False)
        if media and (media.name == 'figure' or media.select_one('img, video')):
            stage.insert(0, media.extract())
    for grid in story.select('.experience-journey--compact'):
        grid['class'].remove('experience-journey--compact')
    if notes:
        details = tag('details', 'case-study-details')
        details.append(tag('summary', text='Design & Technical Notes'))
        for note in notes:
            note.name = 'div'
            note['class'] = ['case-study-subsection']
            if note.h3: note.h3.name = 'h4'
            details.append(note)
        contribution.append(details)
    ordered = [header, facts, primary, context, story, contribution, credits, result, links]
    remaining = soup.find_all(recursive=False)
    assert not remaining, (key, str(remaining)[:200])
    return match[0][:match[0].index('`')+1] + '\n' + '\n'.join(str(n) for n in ordered if n is not None) + '\n`'

source = re.sub(r'  (?:"([^"]+)"|(\w+)): `([\s\S]*?)`', transform, source)
path.write_text(source, encoding='utf-8')
