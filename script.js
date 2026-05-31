const popup = document.getElementById("project-popup");
const popupContent = document.getElementById("popup-inner-content");
const closeBtn = document.getElementById("popup-close");
const scrollProgress = document.getElementById("scroll-progress");
const navMenuButton = document.querySelector(".nav-menu-button");
const navList = document.getElementById("nav-links");

const projectsData = {
  "discovering-barite": `
    <h2 id="popup-title">Discovering Barite</h2>

    <div class="popup-meta">
      <span>Augmented Reality</span>
      <span>Unity</span>
      <span>Vuforia</span>
      <span>Image Tracking</span>
      <span>UI Design</span>
      <span>Project Coordination</span>
    </div>

    <p>
      As part of Expanded Realities – Project 5 at Darmstadt University of Applied Sciences, we developed
      <strong>Discovering Barite</strong>, an educational mobile augmented reality experience created for the
      Spatschlucht near Schriesheim in collaboration with the Geo-Naturpark Bergstraße-Odenwald.
    </p>

    <p>
      The project uses augmented reality to reveal geological and historical layers shaped by Roman-era barite mining —
      elements no longer visible in the landscape. Through staged interactions, visitors reconstruct the original
      rock face and explore its interior by slicing through the virtual gorge to uncover hidden barite veins.
    </p>

    <h3>My contribution</h3>
    <ul>
      <li>Implemented and tested image tracking using Vuforia.</li>
      <li>Worked on project coordination and production structure.</li>
      <li>Designed and optimised UI layouts for the mobile AR experience.</li>
      <li>Programmed interactive events and supported on-site integration.</li>
    </ul>

    <h3>Team</h3>
    <p>Karam Sawaftah · Jacopo Perilli · Antonela Matanović</p>

    <img src="images/discovering-barite.jpg" alt="Discovering Barite AR project preview" />

    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/iN2uR1dm6d4"
        title="Discovering Barite trailer"
        allowfullscreen>
      </iframe>
    </div>
  `,

  "animal-garden": `
    <h2 id="popup-title">Animal Garden</h2>

    <div class="popup-meta">
      <span>Interactive Installation</span>
      <span>Unity</span>
      <span>C#</span>
      <span>Hardware Build</span>
      <span>Exhibition</span>
      <span>Work Project</span>
    </div>

    <a href="https://videoreality.de/monalisasgeheimnis" target="_blank" rel="noopener" class="popup-context-banner">
      <img src="images/TimeLeapVR ArtWorld Logo 1380px.png" alt="TimeLeapVR ArtWorld logo" class="popup-context-logo" />
      <div>
        <p class="popup-context-title">TimeLeapVR ArtWorld — Mona Lisa's Geheimnis <span class="popup-context-link-hint">↗</span></p>
        <p class="popup-context-desc">
          A large-scale immersive exhibition at The Squaire, Frankfurt Airport, blending VR, AI, and interactive art
          around the worlds of Leonardo da Vinci and Hieronymus Bosch. Six themed rooms across 600+ m²,
          running from April 2025.
        </p>
      </div>
    </a>

    <h3>About the installation</h3>

    <p>
      <strong>Animal Garden</strong> is an interactive media installation I co-created with Riccardo Liguori
      for videoreality GmbH during my internship semester. It lived in Room 4 of the exhibition — the
      immersive Bosch-world — as a hands-on creative station for visitors of all ages.
    </p>

    <p>
      Visitors would pick up a printed outline of a fantastical creature from Hieronymus Bosch's
      <em>Garden of Earthly Delights</em>, colour it however they wanted, then place it onto a scanner surface.
      The system automatically detected and cut out the coloured creature, imported it as a live asset into a
      Unity scene, and projected it onto a large wall — making their drawing appear as a moving, animated part
      of a growing digital garden alongside all other visitors' contributions. The collage updated in real time,
      with older creatures gradually fading out to make room for new ones.
    </p>

    <div class="popup-image-grid">
      <img src="images/visitors sitting.JPG" alt="Visitors at the Animal Garden colouring station" />
      <img src="images/visitor coloring the print sheet.JPG" alt="Visitor colouring a creature print sheet" />
    </div>
    <div class="popup-image-grid">
      <img src="images/visitor 1.JPG" alt="Visitor with finished drawing" />
      <img src="images/visitor 2.JPG" alt="Visitors engaging with the installation" />
    </div>

    <h3>Building the scanner</h3>

    <p>
      One of the core challenges was translating physical drawings into clean digital assets in real time —
      reliably, with minimal staff intervention, across a full exhibition day. Riccardo and I designed and
      built a custom scanner kiosk from scratch to solve this.
    </p>

    <p>
      The kiosk is a self-contained wooden housing with a backlit scanning surface at table height and a
      downward-facing camera mounted inside the top section. When a visitor places their coloured sheet on
      the surface, the camera captures the image. Custom software built in Unity and integrated with a
      machine-vision pipeline automatically detects the printed registration markers on each sheet,
      isolates the coloured drawing, removes the background, and exports a transparent PNG — which is
      then immediately loaded into the live projection scene. No staff input needed.
    </p>

    <div class="popup-image-grid">
      <img src="images/building progress (1).jpg" alt="Scanner kiosk — early wooden frame" />
      <img src="images/building progress (2).jpg" alt="Scanner kiosk — frame with shelving" />
    </div>
    <div class="popup-image-grid">
      <img src="images/building progress (3).jpg" alt="Scanner kiosk — hardware integration" />
      <img src="images/building progress (4).jpg" alt="Scanner kiosk — finished black housing" />
    </div>
    <div class="popup-image-grid">
      <img src="images/prototype.jpg" alt="Early prototype of the scanner station" />
      <img src="images/testing the projection.jpg" alt="Testing the live projection in the exhibition space" />
    </div>

    <p>
      The frame was built from timber, then clad in black-painted MDF panels for the final exhibition finish.
      We went through several prototypes to get the camera angle, diffusion, and registration accuracy right
      before opening. The kiosk had to be fully self-explanatory — place sheet, wait, see it appear on the wall.
    </p>

    <h3>The projection scene</h3>

    <p>
      The live Unity scene ran on a dedicated PC and received incoming creature assets as they were processed.
      Each new creature enters the garden with a short entrance animation, wanders for a set duration, then
      gently fades out as newer contributions replace it. The background is a stylised interpretation of
      Bosch's painting, keeping the visual language of the exhibition consistent.
    </p>

    <img src="images/scene view.png" alt="Unity scene view of the Animal Garden projection" />
    <img src="images/exhibit place (1).jpg" alt="Animal Garden installation in the exhibition space" />

    <h3>My contribution</h3>
    <ul>
      <li>Co-created the concept and interaction structure with Riccardo Liguori.</li>
      <li>Designed and built the physical scanner kiosk hardware.</li>
      <li>Developed the camera capture, image processing, and asset pipeline in Unity / C#.</li>
      <li>Built the live projection scene including asset import, animation, and timed fade logic.</li>
      <li>Iterated through multiple hardware prototypes for reliable, unsupervised operation.</li>
      <li>Supported testing, calibration, and refinement across the full exhibition run.</li>
    </ul>

    <h3>Credits</h3>
    <p>
      Concept and realisation: Antonela Matanović, Riccardo Liguori<br>
      Technical support: Linus Steffens<br>
      Exhibition: <a href="https://videoreality.de/monalisasgeheimnis" target="_blank" rel="noopener">TimeLeapVR ArtWorld – Mona Lisa's Geheimnis</a>, videoreality GmbH, 2025
    </p>
  `,

  insects: `
    <h2 id="popup-title">Insect's Delegate: Brumble's Journey</h2>

    <div class="popup-meta">
      <span>Virtual Reality</span>
      <span>Unity</span>
      <span>C#</span>
      <span>Interaction Design</span>
      <span>University Project</span>
    </div>

    <p>
      This virtual reality experience was created during Winter Semester 2024 in the project module
      "Discover Space and Time" at Darmstadt University of Applied Sciences.
    </p>

    <p>
      The experience introduces young audiences aged 12–16 to the vital role of insects through storytelling,
      exploration, and interactive learning.
    </p>

    <h3>My contribution</h3>
    <ul>
      <li>Implemented core interaction systems and gameplay logic in Unity using C#.</li>
      <li>Designed player interaction flows supporting exploration and learning.</li>
      <li>Managed scene logic, triggers, and state progression across the experience.</li>
      <li>Supported project organisation and team coordination.</li>
    </ul>

    <h3>Team</h3>
    <p>Jacopo Perilli · Lara Heß · Mutlu Yakubov · Antonela Matanović · Himanshu Dahiya</p>

    <img src="images/main image.png" alt="Insect's Delegate cover image" />

    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/hUOfJCqo2rE"
        title="Insect's Delegate trailer"
        allowfullscreen>
      </iframe>
    </div>
  `
};

let lastFocusedElement = null;

function openPopup(projectKey) {
  const content = projectsData[projectKey];
  if (!content) return;
  lastFocusedElement = document.activeElement;
  popupContent.innerHTML = content;
  popup.classList.add("active");
  popup.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  const popupTitle = popupContent.querySelector("#popup-title");
  if (popupTitle) {
    popupTitle.setAttribute("tabindex", "-1");
    setTimeout(() => popupTitle.focus(), 80);
  }
}

function closePopup() {
  popup.classList.remove("active");
  popup.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  setTimeout(() => {
    popupContent.innerHTML = "";
    if (lastFocusedElement) lastFocusedElement.focus();
  }, 180);
}

document.querySelectorAll(".project-link").forEach((button) => {
  button.addEventListener("click", () => openPopup(button.dataset.project));
});

closeBtn.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
  if (event.target === popup) closePopup();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && popup.classList.contains("active")) closePopup();
});

navMenuButton.addEventListener("click", () => {
  const isOpen = navList.classList.toggle("open");
  navMenuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navList.classList.remove("open");
    navMenuButton.setAttribute("aria-expanded", "false");
  });
});

function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateScrollProgress, { passive: true });
window.addEventListener("resize", updateScrollProgress);
updateScrollProgress();