// get popup elements
const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');
const scrollProgress = document.getElementById('scroll-progress');

// project content data
const projectsData = {
  project1: `
    <h2 id="popup-title">insect's delegate: brumble's journey</h2>
    <p id="popup-desc">this virtual reality experience was created during the winter semester 2024, under project 3: discover space and time, a module of the expanded realities (augmented and virtual reality design) bachelor of arts study programme at darmstadt university of applied sciences.</p>
    <p>our team created an experience to educate young audiences (ages 12–16) about the vital role of insects while connecting education with storytelling and exploration.</p>
    <p><strong>team members:</strong> jacopo perilli, lara heß, mutlu yakubov, antonela matanović, himanshu dahiya</p>
    <img src="images/main image.png" alt="insect's delegate cover image" style="width:100%;border-radius:8px;object-fit:cover;margin-top:1rem;" />
    <div class="video-container" style="margin-top:1rem;aspect-ratio:16/9;">
      <iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="insect's delegate trailer" allowfullscreen style="width:100%;height:100%;border:none;"></iframe>
    </div>
  `,
  project2: `<p>details coming soon...</p>`,
  project3: `<p>details coming soon...</p>`,
  project4: `<p>details coming soon...</p>`,
  project5: `<p>details coming soon...</p>`,
  cv: `
    <h2 id="popup-title">curriculum vitae</h2>
    <div id="popup-desc">
      <h3>experience</h3>
      <ul>
        <li>
          <strong>videoreality gmbh</strong><br>
          <em>developer and designer intern</em><br>
          feb 2025 – jun 2025 · 5 mos<br>
          frankfurt, hesse, germany · on-site<br>
          <em>exhibition support at "timeleapvr artworld – mona lisas geheimnis"</em>
        </li>
        <li style="margin-top:1rem;">
          <strong>videoreality gmbh</strong><br>
          <em>work study – interactive media and art exhibitions</em><br>
          jun 2025 – present · 2 mos<br>
          frankfurt, hesse, germany · on-site
        </li>
        <li style="margin-top:1rem;">
          <strong>darmstadt university of applied sciences</strong><br>
          <em>student study advisor – augmented and virtual reality design</em><br>
          apr 2025 – present · 4 mos<br>
          darmstadt-dieburg, hesse, germany · hybrid
        </li>
      </ul>

      <h3 style="margin-top:2rem;">education</h3>
      <ul>
        <li>
          <strong>darmstadt university of applied sciences</strong><br>
          <em>bachelor of arts – expanded realities (ar & vr design)</em><br>
          oct 2023 – feb 2027
        </li>
        <li style="margin-top:1rem;">
          <strong>katolički školski centar opća gimnazija “sveti franjo” tuzla</strong><br>
          <em>high school diploma</em><br>
          sep 2019 – jun 2023
        </li>
      </ul>
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
