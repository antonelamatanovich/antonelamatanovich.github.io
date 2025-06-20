const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');

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

      <hr/>

      <div class="cv-section">
        <h3>experience</h3>
        <p>
          <strong>videoreality GmbH</strong><br/>
          exhibition support at "timeleapvr artworld – mona lisas geheimnis" (work study)<br/>
          frankfurt, hesse, germany · on-site<br/>
          <span class="date">jun 2025 - present · 1 mo</span><br/>
          interactive media and art exhibitions
        </p>

        <p>
          <strong>developer and designer intern</strong><br/>
          videoreality GmbH · full-time<br/>
          <span class="date">feb 2025 - present · 5 mos</span><br/>
          c#, unity and +3 skills
        </p>

        <p>
          <strong>student study advisor for augmented and virtual reality design</strong><br/>
          darmstadt university of applied sciences · contract<br/>
          darmstadt-dieburg, hesse, germany · hybrid<br/>
          <span class="date">apr 2025 - present · 3 mos</span>
        </p>
      </div>

      <hr/>

      <div class="cv-section">
        <h3>languages</h3>
        <p>
          bosnian / croatian / serbian – native or bilingual proficiency<br/>
          english – professional working proficiency<br/>
          german – elementary proficiency
        </p>
      </div>

      <hr/>

      <div class="cv-section">
        <h3>skills</h3>
        <p>
          <strong>Game & XR Development:</strong><br/>
          Unity · C# · Game Engines · Level Design · World Building

          <br/><br/><strong>Design & Media Production:</strong><br/>
          3D Modeling · Blender · Media Design · Visual Storytelling · Trailer Production · Video Editing

          <br/><br/><strong>Project & Team Skills:</strong><br/>
          Project Delivery · Project Management · Teamwork · Team Management · Communication · Storytelling

          <br/><br/><strong>Exhibition & Interactive Work:</strong><br/>
          Interactive Media · Art Exhibitions · Exhibit Preparation
        </p>
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

popup.addEventListener('click', e => {
  if (e.target === popup) {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popupContent.innerHTML = '';
  }
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    popup.classList.remove('active');
    popup.setAttribute('aria-hidden', 'true');
    popupContent.innerHTML = '';
  }
});
