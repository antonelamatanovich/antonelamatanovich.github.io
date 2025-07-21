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
    <h2 id="popup-title" style="text-align:left;">curriculum vitae</h2>
    <div id="popup-desc">
      <h3 style="font-size:1.3rem;">experience</h3>
      
      <div style="margin-top:1rem;">
        <div>
          <div><strong>videoreality gmbh</strong></div>
          <div style="margin-left:1rem;border-left:2px solid #999;padding-left:1rem;">
            <div><em>developer and designer intern</em></div>
            <div>feb 2025 – jun 2025 · 5 mos</div>
            <div>frankfurt, hesse, germany · on-site</div>
            <div style="margin-bottom:1rem;">exhibition support at "timeleapvr artworld – mona lisas geheimnis"</div>

            <div><em>work study – interactive media and art exhibitions</em></div>
            <div>jun 2025 – present · 2 mos</div>
            <div>frankfurt, hesse, germany · on-site</div>
          </div>
        </div>
      </div>

      <div style="margin-top:2rem;">
        <div><strong>darmstadt university of applied sciences</strong></div>
        <div style="margin-left:1rem;">
          <div><em>student study advisor – augmented and virtual reality design</em></div>
          <div>apr 2025 – present · 4 mos</div>
          <div>darmstadt-dieburg, hesse, germany · hybrid</div>
        </div>
      </div>

      <h3 style="margin-top:2rem;font-size:1.3rem;">education</h3>

      <div style="margin-top:1rem;">
        <div><strong>darmstadt university of applied sciences</strong></div>
        <div style="margin-left:1rem;">
          <div><em>bachelor of arts – expanded realities (ar & vr design)</em></div>
          <div>oct 2023 – feb 2027</div>
        </div>
      </div>

      <div style="margin-top:1rem;">
        <div><strong>katolički školski centar opća gimnazija “sveti franjo” tuzla</strong></div>
        <div style="margin-left:1rem;">
          <div><em>high school diploma</em></div>
          <div>sep 2019 – jun 2023</div>
        </div>
      </div>
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
