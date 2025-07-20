// get popup elements
const popup = document.getElementById('project-popup');
const popupContent = popup.querySelector('.popup-content');
const closeBtn = document.getElementById('popup-close');
const popupInnerContent = document.getElementById('popup-inner-content');

// store project content
const projectsData = {
  project1: `
    <div class="popup-inner-wrapper">
      <h2 id="popup-title">insect's delegate: brumble's journey</h2>
      <p id="popup-desc">this virtual reality experience was created during the winter semester 2024, under Project 3: Discover Space and Time, a module of the Expanded Realities (Augmented and Virtual Reality Design) Bachelor of Arts study programme at Darmstadt University of Applied Sciences.</p>
      <p>our team created an experience to educate young audiences (ages 12-16) about the vital role of insects while connecting education with storytelling and exploration.</p>
      <p><strong>team members:</strong> Jacopo Perilli, Lara Heß, Mutlu Yakubov, Antonela Matanović, Himanshu Dahiya</p>
      <img src="images/main image.png" alt="insect's delegate cover image" />
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="insect's delegate trailer" allowfullscreen></iframe>
      </div>
    </div>
  `,
  project2: `<div class="popup-inner-wrapper"><h2 id="popup-title">blade of the dawn</h2><p id="popup-desc">project details coming soon...</p></div>`,
  project3: `<div class="popup-inner-wrapper"><h2 id="popup-title">coralis</h2><p id="popup-desc">project details coming soon...</p></div>`,
  project4: `<div class="popup-inner-wrapper"><h2 id="popup-title">vr home</h2><p id="popup-desc">project details coming soon...</p></div>`,
  project5: `<div class="popup-inner-wrapper"><h2 id="popup-title">tuzla 360°</h2><p id="popup-desc">project details coming soon...</p></div>`,
  cv: `
    <div class="popup-inner-wrapper">
      <h2 id="popup-title">curriculum vitae</h2>
      <p id="popup-desc">download or view my cv here.<br />(replace this content with your actual CV details or embed a pdf viewer.)</p>
      <p><a href="your-cv.pdf" target="_blank" rel="noopener" style="color:#bbb; border-bottom:1.5px solid #bbb;">download pdf</a></p>
    </div>
  `
};

// open popup function
const openPopup = (key) => {
  popupContent.style.opacity = 0;
  popupContent.style.transform = 'scale(0.96)';
  popup.classList.add('active');
  popup.setAttribute('aria-hidden', 'false');

  setTimeout(() => {
    popupInnerContent.innerHTML = projectsData[key] || '<p>details coming soon...</p>';
    popupContent.style.opacity = 1;
    popupContent.style.transform = 'scale(1)';
    // focus first focusable element if exists
    const focusable = popupContent.querySelector('button, a, iframe, img, p, h2, h3');
    focusable?.focus();
  }, 100);
};

// open popup on project link click
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
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
    popupInnerContent.innerHTML = '';
  }, 300);
};

// close on close button click
closeBtn.addEventListener('click', closePopup);

// close on background click
popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});

// close on escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    closePopup();
  }
});

// scroll progress bar update
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrolled + '%';

  const header = document.getElementById('site-header');
  if (scrollTop > 10) {
    header.style.background = 'rgba(13, 13, 13, 0.7)';
    header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.7)';
  } else {
    header.style.background = 'rgba(13, 13, 13, 0.5)';
    header.style.boxShadow = 'none';
  }
});
