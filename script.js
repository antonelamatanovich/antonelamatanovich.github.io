// get popup elements
const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');

// data for each project, stored as html strings
const projectsData = {
  project1: `
    <h2>insect's delegate: brumble's journey</h2>
    <p>this virtual reality experience was created during the winter semester 2024, under project 3: discover space and time, a module of the expanded realities (augmented and virtual reality design) bachelor of arts study programme at darmstadt university of applied sciences.</p>
    <p>our team created an experience to educate young audiences (ages 12-16) about the vital role of insects while connecting education with storytelling and exploration.</p>
    <p><strong>team members:</strong> jacopo perilli, lara heß, mutlu yakubov, antonela matanović, himanshu dahiya</p>
    <img src="images/main image.png" alt="insect's delegate cover image" />
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="insect's delegate trailer" allowfullscreen></iframe>
    </div>
  `,
  project2: `
    <h2>blade of the dawn</h2>
    <p>3d rpg game currently in development.</p>
    <img src="images/blade-of-the-dawn-cover.jpg" alt="blade of the dawn cover" />
  `,
  project3: `
    <h2>coralis</h2>
    <p>virtual reality experience exploring underwater worlds.</p>
    <img src="images/coralis-cover.jpg" alt="coralis cover" />
  `,
  project4: `
    <h2>vr home</h2>
    <p>virtual reality experience designed for home environments.</p>
    <img src="images/vr-home-cover.jpg" alt="vr home cover" />
  `,
  project5: `
    <h2>tuzla 360°</h2>
    <p>360° video capturing the city of tuzla and its surroundings.</p>
    <img src="images/tuzla-360-cover.jpg" alt="tuzla 360° cover" />
  `,
  cv: `
    <h2>curriculum vitae</h2>
    <div class="cv-grid">
      <div class="cv-section">
        <h3>education</h3>
        <p><strong>secondary education</strong><br/><span class="date">2016 - 2020</span><br/>high school of commerce, tuzla, bosnia and herzegovina</p>
        <p><strong>bachelor of arts</strong><br/><span class="date">2023 - present</span><br/>augmented and virtual reality design, darmstadt university of applied sciences, germany</p>
      </div>
      <div class="cv-section">
        <h3>languages</h3>
        <p>bosnian (native)<br/>english (c1)<br/>german (b2)<br/>croatian (native)</p>
      </div>
      <div class="cv-section">
        <h3>experience</h3>
        <p><strong>intern</strong><br/><span class="date">july 2024 - oct 2024</span><br/>vr project at darmstadt university of applied sciences</p>
        <p><strong>freelance designer</strong><br/><span class="date">2021 - 2023</span><br/>various 3d and vr design projects</p>
      </div>
      <div class="cv-section">
        <h3>skills</h3>
        <p>unity 3d, c#, blender, adobe photoshop, adobe premiere, xr interaction toolkit, meta quest 2 & 3 development</p>
      </div>
    </div>
  `
};

// add event listeners to project buttons to open popup with relevant content
document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectKey = btn.getAttribute('data-project');
    popupContent.innerHTML = projectsData[projectKey] || '<p>details coming soon...</p>';
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');
  });
});

// close popup when close button clicked
closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  popup.setAttribute('aria-hidden', 'true');
  popupContent.innerHTML = '';
});

// close popup when clicking outside the popup content area
popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popupContent.innerHTML = '';
  }
});

// close popup on pressing escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popupContent.innerHTML = '';
  }
});
