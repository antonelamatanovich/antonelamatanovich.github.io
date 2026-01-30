// get popup elements
const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');
const scrollProgress = document.getElementById('scroll-progress');

// project content data
const projectsData = {
  project1: `<p>details coming soon...</p>`,
  project2: `<p>details coming soon...</p>`,
  'uni-project1': `
    <h2 id="popup-title">insect's delegate: brumble's journey</h2>
    <p id="popup-desc">this virtual reality experience was created during the winter semester 2024, under project 3: discover space and time, a module of the expanded realities (augmented and virtual reality design) bachelor of arts study programme at darmstadt university of applied sciences.</p>
    <p>our team created an experience to educate young audiences (ages 12–16) about the vital role of insects while connecting education with storytelling and exploration.</p>
    <p><strong>team members:</strong> jacopo perilli, lara heß, mutlu yakubov, antonela matanović, himanshu dahiya</p>
    <img src="images/main image.png" alt="insect's delegate cover image" style="width:100%;border-radius:8px;object-fit:cover;margin-top:1rem;" />
    <div class="video-container" style="margin-top:1rem;aspect-ratio:16/9;">
      <iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="insect's delegate trailer" allowfullscreen style="width:100%;height:100%;border:none;"></iframe>
    </div>
  `,
  'uni-project2': `<p>details coming soon...</p>`,
  'uni-project3': `<p>details coming soon...</p>`,
  'work-project1': `
    <h2 id="popup-title">animal garden</h2>
    <p id="popup-desc">this is a placeholder for the animal garden work project. you can replace this content with details about your actual project, including descriptions, images, videos, and any other relevant information.</p>
    <p><strong>technologies used:</strong> placeholder technologies</p>
    <p><strong>duration:</strong> placeholder duration</p>
    <p><strong>role:</strong> placeholder role</p>
  `,
  cv: `
    <h2 id="popup-title" style="text-align:left;">curriculum vitae</h2>
    <div id="popup-desc">
      <!-- CV content here -->
      <!-- truncated for brevity -->
    </div>
  `
};

// open popup when clicking project or cv links
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const projectKey = link.getAttribute('data-project');
    if (!projectsData[projectKey]) return;

    popupContent.style.opacity = 0;
    popupContent.style.transform = 'scale(0.96)';
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');

    setTimeout(() => {
      popupContent.innerHTML = projectsData[projectKey];
      popupContent.style.opacity = 1;
      popupContent.style.transform = 'scale(1)';
      const focusable = popupContent.querySelector('button, a, iframe, img, p, h2, h3');
      focusable?.focus();
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

// university projects toggle functionality
const universityToggle = document.getElementById('university-toggle');
const universityProjectsList = document.getElementById('university-projects-list');
let isUniversityProjectsVisible = false;

universityToggle.addEventListener('click', (e) => {
  e.preventDefault();
  isUniversityProjectsVisible = !isUniversityProjectsVisible;
  
  if (isUniversityProjectsVisible) {
    universityProjectsList.style.display = 'block';
    universityToggle.querySelector('.plus-icon').style.transform = 'rotate(45deg)';
    universityToggle.querySelector('svg').style.transition = 'transform 0.3s ease';
  } else {
    universityProjectsList.style.display = 'none';
    universityToggle.querySelector('.plus-icon').style.transform = 'rotate(0deg)';
  }
});

// work projects toggle functionality
const workToggle = document.getElementById('work-toggle');
const workProjectsList = document.getElementById('work-projects-list');
let isWorkProjectsVisible = false;

workToggle.addEventListener('click', (e) => {
  e.preventDefault();
  isWorkProjectsVisible = !isWorkProjectsVisible;
  
  if (isWorkProjectsVisible) {
    workProjectsList.style.display = 'block';
    workToggle.querySelector('.plus-icon').style.transform = 'rotate(45deg)';
    workToggle.querySelector('svg').style.transition = 'transform 0.3s ease';
  } else {
    workProjectsList.style.display = 'none';
    workToggle.querySelector('.plus-icon').style.transform = 'rotate(0deg)';
  }
});

// scroll progress bar update
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrolled + '%';

  const header = document.getElementById('site-header');
  if (scrollTop > 10) {
    header.style.backdropFilter = 'blur(6px)';
  } else {
    header.style.backdropFilter = 'blur(4px)';
  }
});
