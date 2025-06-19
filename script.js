const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');

const projectsData = {
  project1: `
    <h2>insect's delegate: brumble's journey</h2>
    <p>this virtual reality experience was created during the winter semester 2024, under project 3: discover space and time, a module of the expanded realities (augmented and virtual reality design) bachelor of arts study programme at darmstadt university of applied sciences.</p>
    <p>our team created an experience to educate young audiences (ages 12-16) about the vital role of insects while connecting education with storytelling and exploration.</p>
    <p><strong>team members:</strong> Jacopo Perilli, Lara Heß, Mutlu Yakubov, Antonela Matanović, Himanshu Dahiya</p>
    <img src="images/main image.png" alt="Insect's Delegate Cover Image" />
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="Insect's Delegate Trailer" allowfullscreen></iframe>
    </div>
  `,
  project2: `
    <h2>blade of the dawn</h2>
    <p>3d rpg game currently in development.</p>
    <img src="images/blade-of-the-dawn-cover.jpg" alt="Blade of the Dawn Cover" />
  `,
  project3: `
    <h2>coralis</h2>
    <p>virtual reality experience exploring underwater worlds.</p>
    <img src="images/coralis-cover.jpg" alt="Coralis Cover" />
  `,
  project4: `
    <h2>vr home</h2>
    <p>virtual reality experience designed for home environments.</p>
    <img src="images/vr-home-cover.jpg" alt="VR Home Cover" />
  `,
  project5: `
    <h2>tuzla 360°</h2>
    <p>360° video capturing the city of Tuzla and its surroundings.</p>
    <img src="images/tuzla-360-cover.jpg" alt="Tuzla 360° Cover" />
  `,
  cv: `
    <h2>curriculum vitae</h2>
    <div class="cv-grid">
      <div class="cv-section">
        <h3>education</h3>
        <p><strong>secondary education</strong><br/><span class="date">2016 - 2020</span><br/>High School of Commerce, Tuzla, Bosnia and Herzegovina</p>
        <p><strong>bachelor of arts</strong><br/><span class="date">2023 - present</span><br/>Augmented and Virtual Reality Design, Darmstadt University of Applied Sciences, Germany</p>
      </div>
      <div class="cv-section">
        <h3>languages</h3>
        <p>Bosnian (native)<br/>English (C1)<br/>German (B2)<br/>Croatian (native)</p>
      </div>
      <div class="cv-section">
        <h3>experience</h3>
        <p><strong>intern</strong><br/><span class="date">July 2024 - Oct 2024</span><br/>VR Project at Darmstadt University of Applied Sciences</p>
        <p><strong>freelance designer</strong><br/><span class="date">2021 - 2023</span><br/>Various 3D and VR design projects</p>
      </div>
      <div class="cv-section">
        <h3>skills</h3>
        <p>Unity 3D, C#, Blender, Adobe Photoshop, Adobe Premiere, XR Interaction Toolkit, Meta Quest 2 & 3 Development</p>
      </div>
    </div>
  `
};

document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectKey = btn.getAttribute('data-project');
    popupContent.innerHTML = projectsData[projectKey] || '<p>details coming soon...</p>';
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');
  });
});

closeBtn.addEventListener('click', () => {
  popup.classList.remove('active');
  popup.setAttribute('aria-hidden', 'true');
  popupContent.innerHTML = '';
});

// close popup when clicking outside the content
popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popupContent.innerHTML = '';
  }
});

// close popup on Escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popupContent.innerHTML = '';
  }
});
