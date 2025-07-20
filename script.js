// get popup elements
const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');

// store project content
const projectsData = {
  project1: `
    <h2>insect's delegate: brumble's journey</h2>
    <p>this virtual reality experience was created during the winter semester 2024, under Project 3: Discover Space and Time, a module of the Expanded Realities (Augmented and Virtual Reality Design) Bachelor of Arts study programme at Darmstadt University of Applied Sciences.</p>
    <p>our team created an experience to educate young audiences (ages 12-16) about the vital role of insects while connecting education with storytelling and exploration.</p>
    <p><strong>team members:</strong> Jacopo Perilli, Lara Heß, Mutlu Yakubov, Antonela Matanović, Himanshu Dahiya</p>
    <img src="images/main image.png" alt="insect's delegate cover image" />
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="insect's delegate trailer" allowfullscreen></iframe>
    </div>
  `,
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
