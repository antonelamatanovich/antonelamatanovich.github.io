// get popup elements
const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-projects-list');
const scrollProgress = document.getElementById('scroll-progress');

// store project content
const projectsData = {
  project1: `
    <h2 id="popup-title">insect's delegate: brumble's journey</h2>
    <p id="popup-desc">this virtual reality experience was created during the winter semester 2024, under Project 3: Discover Space and Time, a module of the Expanded Realities (Augmented and Virtual Reality Design) Bachelor of Arts study programme at Darmstadt University of Applied Sciences.</p>
    <p>our team created an experience to educate young audiences (ages 12-16) about the vital role of insects while connecting education with storytelling and exploration.</p>
    <p><strong>team members:</strong> Jacopo Perilli, Lara Heß, Mutlu Yakubov, Antonela Matanović, Himanshu Dahiya</p>
    <img src="images/main image.png" alt="insect's delegate cover image" />
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="insect's delegate trailer" allowfullscreen></iframe>
    </div>
  `,
  project2: `<p>details coming soon...</p>`,
  project3: `<p>details coming soon...</p>`,
  project4: `<p>details coming soon...</p>`,
  project5: `<p>details coming soon...</p>`,
  cv: `<p>cv content goes here...</p>`
};

// open popup for project buttons
document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectKey = btn.getAttribute('data-project');

    // reset style for animation
    popupContent.style.opacity = 0;
    popupContent.style.transform = 'scale(0.96)';
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');

    // insert content after short delay
    setTimeout(() => {
      popupContent.innerHTML = projectsData[projectKey] || '<p>details coming soon...</p>';
      popupContent.style.opacity = 1;
      popupContent.style.transform = 'scale(1)';
      popupContent.querySelector('button, a, iframe, img, p, h2, h3')?.focus();
    }, 100);
  });
});

// close popup function
const closePopup = () => {
  popupContent.style.opacity = 0;
  popupContent.style.transform = 'scale(0.96)';
  setTimeout(() => {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popupContent.innerHTML = '';
  }, 300);
};

// close on button click
closeBtn.addEventListener('click', closePopup);

// close on background click
popup.addEventListener('click', e => {
  if (e.target === popup) closePopup();
});

// close on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    closePopup();
  }
});

// hamburger nav toggle
navToggle.addEventListener('click', () => {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  navList.classList.toggle('active');
});

// smooth scroll on nav-project-link click (for accessibility)
document.querySelectorAll('.nav-project-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    navList.classList.remove('active');
    navToggle.setAttribute('aria-expanded', 'false');
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
    target?.focus();
  });
});

// scroll progress bar update and header style on scroll
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrolled + '%';

  const header = document.getElementById('site-header');
  if (scrollTop > 10) {
    header.style.background = 'rgba(18, 18, 18, 0.95)';
    header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.7)';
  } else {
    header.style.background = 'rgba(18, 18, 18, 0.85)';
    header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.5)';
  }
});
