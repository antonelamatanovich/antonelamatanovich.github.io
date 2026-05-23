const popup = document.getElementById("project-popup");
const popupContent = document.getElementById("popup-inner-content");
const closeBtn = document.getElementById("popup-close");
const scrollProgress = document.getElementById("scroll-progress");
const navMenuButton = document.querySelector(".nav-menu-button");
const navList = document.getElementById("nav-links");

const projectsData = {
  "discovering-barite": `
    <h2 id="popup-title">discovering barite</h2>

    <div class="popup-meta">
      <span>augmented reality</span>
      <span>unity</span>
      <span>vuforia</span>
      <span>image tracking</span>
      <span>ui design</span>
      <span>project coordination</span>
    </div>

    <p>
      as part of expanded realities – project 5 at darmstadt university of applied sciences, we developed
      <strong>discovering barite</strong>, an educational mobile augmented reality experience created for the
      spatschlucht near schriesheim in collaboration with the geo-naturpark bergstraße-odenwald.
    </p>

    <p>
      the project uses augmented reality to reveal geological and historical layers shaped by roman-era barite mining —
      elements that are no longer visible in the landscape. through staged interactions, visitors reconstruct the original
      rock face and explore its interior by slicing through the virtual gorge to uncover hidden barite veins.
    </p>

    <h3>my contribution</h3>
    <ul>
      <li>implemented and tested image tracking using vuforia.</li>
      <li>worked on project coordination and production structure.</li>
      <li>designed and optimized ui layouts for the mobile ar experience.</li>
      <li>programmed interactive events and supported on-site integration.</li>
    </ul>

    <h3>team</h3>
    <p>karam sawaftah · jacopo perilli · antonela matanović</p>

    <p class="image-note">
      to add your project image, place it inside your <strong>images</strong> folder and name it
      <strong>discovering-barite.jpg</strong>. then uncomment the image line in this popup inside script.js.
    </p>

    <img src="images/discovering-barite.jpg" alt="discovering barite ar project preview" />

    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/iN2uR1dm6d4"
        title="discovering barite trailer"
        allowfullscreen>
      </iframe>
    </div>
  `,

  "animal-garden": `
    <h2 id="popup-title">animal garden</h2>

    <div class="popup-meta">
      <span>interactive installation</span>
      <span>unity</span>
      <span>c#</span>
      <span>exhibition</span>
      <span>work project</span>
    </div>

    <p>
      <strong>animal garden</strong> is an interactive media installation created together with ricci liguori for
      videoreality gmbh. it was exhibited at timeleapvr artworld – mona lisa’s geheimnis in frankfurt am main.
    </p>

    <p>
      the installation was developed in a real exhibition context and focused on creating an accessible, responsive,
      and engaging visitor experience for a public audience.
    </p>

    <h3>my contribution</h3>
    <ul>
      <li>co-created the concept and interaction structure of the installation.</li>
      <li>implemented and tested interactive behavior using unity and c#.</li>
      <li>supported refinement for exhibition use and public visitor interaction.</li>
      <li>worked on balancing playful discovery with clear interaction feedback.</li>
    </ul>

    <h3>context</h3>
    <p>
      shown as part of timeleapvr artworld – mona lisa’s geheimnis, a large-scale immersive exhibition blending
      virtual reality, ai, and interactive art experiences inspired by leonardo da vinci and hieronymus bosch.
    </p>
  `,

  insects: `
    <h2 id="popup-title">insect's delegate: brumble's journey</h2>

    <div class="popup-meta">
      <span>virtual reality</span>
      <span>unity</span>
      <span>c#</span>
      <span>interaction design</span>
      <span>university project</span>
    </div>

    <p>
      this virtual reality experience was created during winter semester 2024 in the project module
      “discover space and time” at darmstadt university of applied sciences.
    </p>

    <p>
      the experience introduces young audiences aged 12–16 to the vital role of insects through storytelling,
      exploration, and interactive learning.
    </p>

    <h3>my contribution</h3>
    <ul>
      <li>implemented core interaction systems and gameplay logic in unity using c#.</li>
      <li>designed player interaction flows supporting exploration and learning.</li>
      <li>managed scene logic, triggers, and state progression across the experience.</li>
      <li>supported project organization and team coordination.</li>
    </ul>

    <h3>team</h3>
    <p>jacopo perilli · lara heß · mutlu yakubov · antonela matanović · himanshu dahiya</p>

    <img src="images/main image.png" alt="insect's delegate cover image" />

    <div class="video-container">
      <iframe
        src="https://www.youtube.com/embed/hUOfJCqo2rE"
        title="insect's delegate trailer"
        allowfullscreen>
      </iframe>
    </div>
  `
};

let lastFocusedElement = null;

function openPopup(projectKey) {
  const content = projectsData[projectKey];

  if (!content) {
    return;
  }

  lastFocusedElement = document.activeElement;

  popupContent.innerHTML = content;
  popup.classList.add("active");
  popup.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");

  const popupTitle = popupContent.querySelector("#popup-title");

  if (popupTitle) {
    popupTitle.setAttribute("tabindex", "-1");

    setTimeout(() => {
      popupTitle.focus();
    }, 80);
  }
}

function closePopup() {
  popup.classList.remove("active");
  popup.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");

  setTimeout(() => {
    popupContent.innerHTML = "";

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }, 180);
}

document.querySelectorAll(".project-link").forEach((button) => {
  button.addEventListener("click", () => {
    const projectKey = button.dataset.project;
    openPopup(projectKey);
  });
});

closeBtn.addEventListener("click", closePopup);

popup.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopup();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && popup.classList.contains("active")) {
    closePopup();
  }
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