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
    <div id="popup-desc" style="text-align:left;">
      
      <div style="border-bottom: 1px solid #333; margin: 1.5rem 0; padding-bottom: 0.5rem;">
        <h3 style="margin:0;color:#eaeaea;font-size:1.2rem;">work experience</h3>
      </div>
      
      <div style="margin-bottom:2.5rem; padding: 1rem; border-left: 3px solid #555; background: rgba(255,255,255,0.02);">
        <h4 style="color:#fff;font-size:1.1rem;margin-bottom:0.5rem;"><a href="https://videoreality.de/" target="_blank" rel="noopener" style="color:#fff;text-decoration:none;border-bottom:1px solid transparent;transition:border-bottom-color 0.2s ease;" onmouseover="this.style.borderBottomColor='#fff'" onmouseout="this.style.borderBottomColor='transparent'">videoreality GmbH</a></h4>
        <p style="margin:0;color:#ccc;font-size:0.85rem;opacity:0.8;">Frankfurt am Main</p>
        <p style="margin:0.8rem 0 0.3rem 0;"><strong style="color:#eaeaea;">XR Project & Prototyping Assistant (Working Student)</strong></p>
        <p style="margin:0.3rem 0 1rem 0;color:#888;font-size:0.9rem;">Aug 2025 – Present · Hybrid</p>
        <ul style="margin:0.5rem 0;padding-left:1.5rem;color:#ddd;">
          <li style="margin-bottom:0.3rem;">Exhibition support for TimeLeapVR Artworld – Mona Lisa's Geheimnis, an interactive mixed-media XR exhibition</li>
          <li style="margin-bottom:0.3rem;">On-site operation, supervision, and maintenance of immersive installations</li>
          <li style="margin-bottom:0.3rem;">Testing, setup, and iteration of interactive XR systems for public audiences</li>
          <li style="margin-bottom:0.3rem;">Collaboration with artists, developers, and exhibition teams in a live production environment</li>
        </ul>
      </div>

      <div style="margin-bottom:2.5rem; padding: 1rem; border-left: 3px solid #555; background: rgba(255,255,255,0.02);">
        <h4 style="color:#fff;font-size:1.1rem;margin-bottom:0.5rem;"><a href="https://videoreality.de/" target="_blank" rel="noopener" style="color:#fff;text-decoration:none;border-bottom:1px solid transparent;transition:border-bottom-color 0.2s ease;" onmouseover="this.style.borderBottomColor='#fff'" onmouseout="this.style.borderBottomColor='transparent'">videoreality GmbH</a></h4>
        <p style="margin:0;color:#ccc;font-size:0.85rem;opacity:0.8;">Frankfurt am Main</p>
        <p style="margin:0.8rem 0 0.3rem 0;"><strong style="color:#eaeaea;">XR Developer & Designer Intern</strong></p>
        <p style="margin:0.3rem 0 1rem 0;color:#888;font-size:0.9rem;">Feb 2025 – Jun 2025 · On-site</p>
        <ul style="margin:0.5rem 0;padding-left:1.5rem;color:#ddd;">
          <li style="margin-bottom:0.3rem;">Development of interactive XR exhibition content as part of the Expanded Realities (B.A.) practice phase</li>
          <li style="margin-bottom:0.3rem;">Co-creator of <strong style="color:#eaeaea;">"Animal Garden"</strong>, an interactive digital installation exhibited at TimeLeapVR Artworld – Mona Lisa's Geheimnis</li>
          <li style="margin-bottom:0.3rem;">Implementation of real-time interactions using Unity (C#)</li>
          <li style="margin-bottom:0.3rem;">Prototyping, testing, and refinement of immersive experiences for exhibition use</li>
        </ul>
      </div>

      <div style="margin-bottom:2.5rem; padding: 1rem; border-left: 3px solid #555; background: rgba(255,255,255,0.02);">
        <h4 style="color:#fff;font-size:1.1rem;margin-bottom:0.5rem;"><a href="https://h-da.de/" target="_blank" rel="noopener" style="color:#fff;text-decoration:none;border-bottom:1px solid transparent;transition:border-bottom-color 0.2s ease;" onmouseover="this.style.borderBottomColor='#fff'" onmouseout="this.style.borderBottomColor='transparent'">Darmstadt University of Applied Sciences (h_da)</a></h4>
        <p style="margin:0;color:#ccc;font-size:0.85rem;opacity:0.8;">Darmstadt / Dieburg</p>
        <p style="margin:0.8rem 0 0.3rem 0;"><strong style="color:#eaeaea;">Student Study Advisor — <a href="https://mediencampus.h-da.de/studieren/studienangebot/bachelor/augmented-and-virtual-reality-design/profile" target="_blank" rel="noopener" style="color:#eaeaea;text-decoration:none;border-bottom:1px solid transparent;transition:border-bottom-color 0.2s ease;" onmouseover="this.style.borderBottomColor='#eaeaea'" onmouseout="this.style.borderBottomColor='transparent'">Augmented & Virtual Reality Design</a></strong></p>
        <p style="margin:0.3rem 0 1rem 0;color:#888;font-size:0.9rem;">Apr 2025 – Present · Hybrid</p>
        <ul style="margin:0.5rem 0;padding-left:1.5rem;color:#ddd;">
          <li style="margin-bottom:0.3rem;">Academic advising and peer support for students in the XR design program</li>
          <li style="margin-bottom:0.3rem;">Guidance on curriculum structure, study planning, and program-specific requirements</li>
          <li style="margin-bottom:0.3rem;">Support of teaching- and study-related services within the department</li>
        </ul>
      </div>

      <div style="border-bottom: 1px solid #333; margin: 2rem 0 1.5rem 0; padding-bottom: 0.5rem;">
        <h3 style="margin:0;color:#eaeaea;font-size:1.2rem;">education</h3>
      </div>
      
      <div style="margin-bottom:2.5rem; padding: 1rem; border-left: 3px solid #666; background: rgba(255,255,255,0.03);">
        <h4 style="color:#fff;font-size:1.1rem;margin-bottom:0.5rem;"><a href="https://h-da.de/" target="_blank" rel="noopener" style="color:#fff;text-decoration:none;border-bottom:1px solid transparent;transition:border-bottom-color 0.2s ease;" onmouseover="this.style.borderBottomColor='#fff'" onmouseout="this.style.borderBottomColor='transparent'">Darmstadt University of Applied Sciences (h_da)</a></h4>
        <p style="margin:0;color:#ccc;font-size:0.85rem;opacity:0.8;">Dieburg</p>
        <p style="margin:0.8rem 0 0.3rem 0;"><strong style="color:#eaeaea;">Bachelor of Arts (B.A.) — Expanded Realities</strong></p>
        <p style="margin:0.3rem 0 0.3rem 0;"><strong style="color:#ddd;"><a href="https://mediencampus.h-da.de/studieren/studienangebot/bachelor/augmented-and-virtual-reality-design/profile" target="_blank" rel="noopener" style="color:#ddd;text-decoration:none;border-bottom:1px solid transparent;transition:border-bottom-color 0.2s ease;" onmouseover="this.style.borderBottomColor='#ddd'" onmouseout="this.style.borderBottomColor='transparent'">Augmented & Virtual Reality Design</a></strong></p>
        <p style="margin:0.3rem 0 1rem 0;color:#888;font-size:0.9rem;">Oct 2023 – Feb 2027</p>
        <ul style="margin:0.5rem 0;padding-left:1.5rem;color:#ddd;">
          <li style="margin-bottom:0.3rem;">Interdisciplinary, project-based XR program taught in English</li>
          <li style="margin-bottom:0.3rem;">Focus on XR design and development, immersive storytelling, interaction design, and real-time 3D</li>
          <li style="margin-bottom:0.3rem;">Strong emphasis on practice through studio projects, an internship semester, and collaboration with real clients</li>
          <li style="margin-bottom:0.3rem;">Hands-on work with industry-standard XR hardware and software, including VR/AR labs, motion capture, and usability testing facilities</li>
        </ul>
      </div>

      <div style="margin-bottom:2rem; padding: 1rem; border-left: 3px solid #666; background: rgba(255,255,255,0.03);">
        <h4 style="color:#fff;font-size:1.1rem;margin-bottom:0.5rem;">Katolički Školski Centar Opća Gimnazija "Sveti Franjo"</h4>
        <p style="margin:0;color:#ccc;font-size:0.85rem;opacity:0.8;">Tuzla</p>
        <p style="margin:0.8rem 0 0.3rem 0;"><strong style="color:#eaeaea;">High School Diploma</strong></p>
        <p style="margin:0.3rem 0 1rem 0;color:#888;font-size:0.9rem;">Sep 2019 – Jun 2023</p>
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

// personal projects toggle functionality
const personalToggle = document.getElementById('personal-toggle');
const personalProjectsList = document.getElementById('personal-projects-list');
let isPersonalProjectsVisible = false;

personalToggle.addEventListener('click', (e) => {
  e.preventDefault();
  isPersonalProjectsVisible = !isPersonalProjectsVisible;
  
  if (isPersonalProjectsVisible) {
    personalProjectsList.style.display = 'block';
    personalToggle.querySelector('.plus-icon').style.transform = 'rotate(45deg)';
    personalToggle.querySelector('svg').style.transition = 'transform 0.3s ease';
  } else {
    personalProjectsList.style.display = 'none';
    personalToggle.querySelector('.plus-icon').style.transform = 'rotate(0deg)';
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
