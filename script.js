// get popup elements
const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');

// store project content
const projectsData = {
  project1: `...`, // full HTML content here
  project2: `...`,
  project3: `...`,
  project4: `...`,
  project5: `...`,
  cv: `...`
};

// open popup
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
    }, 100);
  });
});

// close popup
const closePopup = () => {
  popupContent.style.opacity = 0;
  popupContent.style.transform = 'scale(0.96)';
  setTimeout(() => {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popupContent.innerHTML = '';
  }, 200); // match css transition time
};

// close on button click
closeBtn.addEventListener('click', closePopup);

// close on background click
popup.addEventListener('click', e => {
  if (e.target === popup) closePopup();
});

// close on escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    closePopup();
  }
});
