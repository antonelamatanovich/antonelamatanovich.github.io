// popup elements
const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');

// projects data
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
  cv: `<p>cv details coming soon...</p>`
};

// open popup function
const openPopup = (key) => {
  popupContent.style.opacity = 0;
  popupContent.style.transform = 'scale(0.96)';
  popup.classList.add('active');
  popup.setAttribute('aria-hidden', 'false');

  setTimeout(() => {
    popupContent.innerHTML = projectsData[key] || '<p>details coming soon...</p>';
    popupContent.style.opacity = 1;
    popupContent.style.transform = 'scale(1)';
    // focus first focusable element inside popup
    const firstFocusable = popupContent.querySelector('button, a, iframe, img, p, h2, h3');
    if(firstFocusable) firstFocusable.focus();
  }, 100);
};

// attach click listeners for all project links
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const key = link.getAttribute('data-project');
    openPopup(key);
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

// close popup on close button click
closeBtn.addEventListener('click', closePopup);

// close popup on background click
popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});

// close popup on Escape key press
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    closePopup();
  }
});

// scroll progress bar
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrolled + '%';

  const header = document.getElementById('site-header');
  if (scrollTop > 10) {
    header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.7)';
  } else {
    header.style.boxShadow = 'none';
  }
});
