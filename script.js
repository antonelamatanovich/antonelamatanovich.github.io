// lowercase popup data
const projectsData = {
  project1: `
    <h2>insect's delegate</h2>
    <p>virtual reality experience made @ h_da, winter 2024. team: jacopo perilli, lara heß, mutlu yakubov, antonela matanović, himanshu dahiya.</p>
    <img src="images/main image.png" alt="insect's delegate image" />
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="insect's delegate trailer" allowfullscreen></iframe>
    </div>
  `,
  project2: `<h2>blade of the dawn</h2><p>coming soon</p>`,
  project3: `<h2>coralis</h2><p>coming soon</p>`,
  project4: `<h2>vr home</h2><p>coming soon</p>`,
  project5: `<h2>tuzla 360°</h2><p>coming soon</p>`,
  cv: `<h2>cv</h2><p>available upon request or downloadable here soon.</p>`
};

// open popup
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const key = link.getAttribute('data-project');
    const popup = document.getElementById('project-popup');
    const content = document.getElementById('popup-inner-content');
    content.innerHTML = projectsData[key] || '<p>details coming soon</p>';
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');
  });
});

// close popup
document.getElementById('popup-close').addEventListener('click', () => {
  const popup = document.getElementById('project-popup');
  const content = document.getElementById('popup-inner-content');
  popup.classList.remove('active');
  popup.setAttribute('aria-hidden', 'true');
  content.innerHTML = '';
});

document.getElementById('project-popup').addEventListener('click', e => {
  if (e.target.id === 'project-popup') {
    document.getElementById('popup-close').click();
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.getElementById('popup-close').click();
  }
});

// scroll progress bar
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('scroll-progress').style.width = scrollPercent + '%';

  const header = document.getElementById('site-header');
  if (scrollTop > 10) {
    header.style.background = 'rgba(18, 18, 18, 0.95)';
    header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.7)';
  } else {
    header.style.background = 'rgba(18, 18, 18, 0.85)';
    header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.5)';
  }
});
