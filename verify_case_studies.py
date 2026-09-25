from pathlib import Path
import re, tempfile, json
from collections import Counter
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright

root = Path.cwd()
out = Path(tempfile.gettempdir()) / 'portfolio-case-study-review'
out.mkdir(exist_ok=True)
def projects(s):
    return {m[1] or m[2]: BeautifulSoup(m[3], 'html.parser') for m in re.finditer(r'  (?:"([^"]+)"|(\w+)): `([\s\S]*?)`', s)}
old = projects(Path(tempfile.gettempdir(), 'portfolio-case-studies-before.js').read_text(encoding='utf-8'))
new = projects(Path('script.js').read_text(encoding='utf-8'))
for key, b in new.items():
    a = old[key]
    for selector, attr in [('img','src'), ('source','data-src'), ('a','href')]:
        assert Counter(n.get(attr) for n in a.select(selector)) == Counter(n.get(attr) for n in b.select(selector)), (key, selector)
    for n in b.select('img, source, video[data-poster]'):
        path = n.get('src') or n.get('data-src') or n.get('data-poster')
        if path: assert Path(path).exists(), (key, path)
    assert a.header.get_text() == b.header.get_text(), key
    assert a.select_one('.quick-facts-grid').get_text() == b.select_one('.quick-facts-grid').get_text(), key
    oldtext = Counter(n.get_text(' ',strip=True) for n in a.select('p, li, figcaption') if not n.select('p,li') and n.get('class') not in [['credit-list__item'], ['case-study-section-label']])
    newtext = Counter(n.get_text(' ',strip=True) for n in b.select('p, li, figcaption') if not n.select('p,li'))
    assert not (oldtext - newtext), (key, oldtext - newtext)
    children = b.find_all(recursive=False)
    assert 'project-quick-facts' in children[1]['class']
    assert 'case-study-primary-media' in children[2]['class']
    assert 'case-study-info-panel' in children[3]['class']
    assert not any(n.get_text() in ['Problem', 'Engineering Challenge', 'Outcome', 'Contribution'] for n in b.select('h3'))
    assert b.select_one('.case-study-contribution .contribution-grid')
    if b.select_one('.project-links-section'): assert children[-1] == b.select_one('.project-links-section')
    if a.select_one('.credit-list'):
        assert a.select_one('.credit-list').get_text().split(' \u00b7 ') == [n.get_text() for n in b.select('.case-study-credit-list li')]
print('Source preservation and structure: 9/9 passed')

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page(viewport={'width':1440, 'height':1000}, reduced_motion='reduce')
    errors = []
    page.on('pageerror', lambda e: errors.append(str(e)))
    page.goto('http://127.0.0.1:8765', wait_until='networkidle')
    for width in [1440, 390, 320]:
        page.set_viewport_size({'width':width, 'height':1000 if width==1440 else 844})
        for key in new:
            page.locator(f'button[data-project="{key}"]').first.click()
            page.locator('#project-popup.active').wait_for()
            content = page.locator('#popup-inner-content')
            assert content.locator('.case-study-info-panel').count() == 1
            assert content.locator('.case-study-contribution').count() == 1
            assert content.locator('.case-study-result').count() == 1
            page.locator('.case-study-primary-media').scroll_into_view_if_needed()
            page.screenshot(path=str(out / f'{key}-{width}-primary.png'))
            for target in ['.case-study-info-panel', '.case-study-contribution', '.case-study-credits', '.case-study-result']:
                if content.locator(target).count():
                    content.locator(target).scroll_into_view_if_needed()
                    if width != 320: page.screenshot(path=str(out / f'{key}-{width}-{target[1:]}.png'))
            if content.locator('details').get_attribute('open') is not None:
                content.locator('summary').click()
            content.locator('summary').click()
            assert content.locator('details').get_attribute('open') is not None
            overflow = page.locator('.popup-content').evaluate('(e) => ({scroll:e.scrollWidth, client:e.clientWidth})')
            assert overflow['scroll'] <= overflow['client'] + 1, (key, width, overflow)
            if key == 'physical-control-deck':
                content.locator('.control-deck-controls [data-sync-toggle]').click()
                page.wait_for_function('document.getElementById("control-deck-unity-video").currentTime > 0.1')
                content.locator('.control-deck-controls [data-sync-toggle]').click()
                times = content.locator('[data-sync-video]').evaluate_all('(videos) => videos.map(v=>v.currentTime)')
                assert abs(times[0] - times[1]) < .3, times
            page.keyboard.press('Escape')
            assert not page.locator('#project-popup').evaluate('(e)=>e.classList.contains("active")')
        print(f'Browser: 9/9 passed at {width}px (layout, details, close, synchronized player)')
    assert not errors, errors
    browser.close()
print('Screenshots: ' + str(out))
