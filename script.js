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

        <p>
          <strong>darmstadt university of applied sciences</strong><br/>
          bachelor of arts - ba, expanded realities (augmented and virtual reality design)<br/>
          <span class="date">oct 2023 - feb 2027</span><br/>
          project delivery, trailer production and +14 skills
        </p>

        <p>
          <strong>katolički školski centar opća gimnazija “sveti franjo” tuzla</strong><br/>
          high school diploma<br/>
          <span class="date">sep 2019 - jun 2023</span>
        </p>
      </div>

      <div class="cv-section">
        <h3>experience</h3>

        <div class="experience-item">
          <p><strong>videoreality GmbH</strong> · 5 mos<br/>
          frankfurt, hesse, germany · on-site</p>

          <ul class="experience-details">
            <li>
              <strong>exhibition support at "timeleapvr artworld – mona lisas geheimnis"</strong><br/>
              work study<br/>
              <span class="date">jun 2025 - present · 1 mo</span>
              <div class="icon-text">
                <svg aria-hidden="true" focusable="false" width="16" height="16" fill="currentColor" viewBox="0 0 16 16" style="margin-right:5px;">
                  <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0Zm3.865 6.615-4.716 4.716a.75.75 0 0 1-1.06-1.06l4.716-4.716a.75.75 0 1 1 1.06 1.06Z"/>
                </svg>
                <span>interactive media and art exhibitions</span>
              </div>
            </li>

            <li>
              <strong>developer and designer intern</strong><br/>
              full-time<br/>
              <span class="date">feb 2025 - present · 5 mos</span>
            </li>
          </ul>
        </div>

        <p>
          <strong>student study advisor for augmented and virtual reality design</strong><br/>
          darmstadt university of applied sciences · contract<br/>
          darmstadt-dieburg, hesse, germany · hybrid<br/>
          <span class="date">apr 2025 - present · 3 mos</span>
        </p>

      </div>

      <div class="cv-section">
        <h3>languages</h3>
        <p>bosnian (native)<br/>english (c1)<br/>german (b2)<br/>croatian (native)</p>
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
