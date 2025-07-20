// get popup elements
const popup = document.createElement('div');
popup.id = 'project-popup';
popup.className = 'popup-overlay';
popup.setAttribute('aria-hidden', 'true');
popup.setAttribute('role', 'dialog');
popup.setAttribute('aria-modal', 'true');
popup.setAttribute('aria-labelledby', 'popup-title');
popup.setAttribute('aria-describedby', 'popup-desc');
popup.style.display = 'none';

const popupContent = document.createElement('div');
popupContent.className = 'popup-content';
popupContent.setAttribute('role', 'document');

const closeBtn = document.createElement('button');
closeBtn.id = 'popup-close';
closeBtn.setAttribute('aria-label', 'close project details');
closeBtn.innerHTML = '&times;';

popupContent.appendChild(closeBtn);
popup.appendChild(popupContent);
document.body.appendChild(popup);

// store project and cv content
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
  cv: `<p>cv content will be here soon.</p>`
};

// open popup function
function openPopup(key) {
  popupContent.style.opacity = 0;
  popupContent.style.transform = 'scale(0.96)';
  popup.style.display = 'flex';
  popup.classList.add('active');
  popup.setAttribute('aria-hidden', 'false');

  setTimeout(() => {
    popupContent.innerHTML = '';
    popupContent.appendChild(closeBtn); // keep close button
    const contentWrapper = document.createElement('div');
    contentWrapper.innerHTML = projectsData[key] || '<p>details coming soon...</p>';
    popupContent.appendChild(contentWrapper);
    popupContent.style.opacity = 1;
    popupContent.style.transform = 'scale(1)';
    // focus first focusable element inside popup
    const focusable = popupContent.querySelector('button, a, iframe, input, textarea');
    if (focusable) focusable.focus();
  }, 100);
}

// close popup function
function closePopup() {
  popupContent.style.opacity = 0;
  popupContent.style.transform = 'scale(0.96)';
  setTimeout(() => {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popup.style.display = 'none';
    popupContent.innerHTML = '';
    popupContent.appendChild(closeBtn);
  }, 300);
}

// event listeners for popup close
closeBtn.addEventListener('click', closePopup);
popup.addEventListener('click', (e) => {
  if (e.target === popup) closePopup();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    closePopup();
  }
});

// handle nav links smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
    target?.focus();
  });
});

// handle project links and cv link popup
document.querySelectorAll('.project-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const text = link.textContent.trim().toLowerCase();
    // match project keys by text content
    if (text.includes("insect's delegate")) openPopup('project1');
    else if (text.includes('blade of the dawn')) openPopup('project2');
    else if (text.includes('coralis')) openPopup('project3');
    else if (text.includes('vr home')) openPopup('project4');
    else if (text.includes('tuzla 360°')) openPopup('project5');
    else if (text.includes('view cv')) openPopup('cv');
    else openPopup('cv'); // default fallback
  });
});

// scroll progress bar logic
const scrollProgress = document.getElementById('scroll-progress');
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
