const popup = document.getElementById("project-popup");
const popupContent = document.getElementById("popup-inner-content");
const closeBtn = document.getElementById("popup-close");
const scrollProgress = document.getElementById("scroll-progress");
const navMenuButton = document.querySelector(".nav-menu-button");
const navList = document.getElementById("nav-links");

const projectsData = {
  "blade-of-the-dawn": `
    <img class="project-hero-image" onerror="this.hidden=true" src="images/blade-hero.jpg" alt="Blade of the Dawn Japanese-inspired game environment" />
    <h2 id="popup-title">Blade of the Dawn</h2>
    <div class="popup-meta"><span>Third-Person Game</span><span>Unity</span><span>C#</span><span>Gameplay Systems</span><span>Enemy AI</span><span>Individual Project</span></div>
    <section class="project-quick-facts" aria-labelledby="blade-facts-title"><h3 id="blade-facts-title">Quick Facts</h3><dl class="quick-facts-grid">
      <div><dt>University</dt><dd>Darmstadt University of Applied Sciences (h_da), Germany</dd></div><div><dt>Faculty</dt><dd>Faculty of Media</dd></div>
      <div><dt>Study Programme</dt><dd>Bachelor of Arts (B.A.) &ndash; Expanded Realities</dd></div><div><dt>Course</dt><dd>ER-T2 &ndash; Technology in Expanded Realities</dd></div>
      <div><dt>Semester</dt><dd>Summer Semester 2024</dd></div><div><dt>Project Type</dt><dd>Individual Final Project</dd></div><div><dt>Engine</dt><dd>Unity 2022.3 LTS</dd></div><div><dt>Language</dt><dd>C#</dd></div>
    </dl></section>
    <h3>Overview</h3><p><strong>Blade of the Dawn</strong> is a third-person 3D action-adventure game developed as the individual final project for ER-T2. Players explore a Japanese-inspired village and castle, interact with NPCs, collect items, fight enemy guards, and progress towards a final boss. Multiple gameplay systems form one complete playable experience.</p>
    <h3>Video</h3><!-- TODO: add the Gameplay Walkthrough when the YouTube URL is available. --><p class="project-media-note">Gameplay walkthrough coming soon.</p>
    <h3>Gallery</h3><div class="popup-image-grid"><img onerror="this.hidden=true" src="images/blade-01.jpg" alt="Blade of the Dawn third-person gameplay" /><img onerror="this.hidden=true" src="images/blade-02.jpg" alt="Exploration in Blade of the Dawn" /><img onerror="this.hidden=true" src="images/blade-03.jpg" alt="Boss encounter in Blade of the Dawn" /><img onerror="this.hidden=true" src="images/blade-04.jpg" alt="Blade of the Dawn gameplay UI and environment" /></div>
    <h3>Technical Highlights</h3><p>A third-person character controller supports a three-stage melee combo through Animator integration and trigger-based hit detection. NavMesh enemies use idle, patrol, chase, attack, damage, and death states. Collectible and health pickups use Scriptable Objects and Unity Events for communication across combat, UI, audio, and three connected scenes.</p>
    <h3>My Contribution</h3><p>This was an individual project. I created the game concept and gameplay structure and implemented the complete experience in Unity and C#, including the player controller, combat, enemy AI, interactions, collectibles, scene progression, UI, animation and audio integration, testing, and refinement.</p>
    <h3>Challenges</h3><p>The main challenges were integrating independent systems into one stable experience, synchronising animation with hit detection and combat timing, coordinating AI states with NavMesh navigation, and keeping communication between UI, collectibles, combat, and scenes reusable.</p>
    <h3>What I Learned</h3><p>The project strengthened my Unity gameplay programming, component-based architecture, object-oriented programming, NavMesh, Animator state machines, event-driven systems, Scriptable Objects, scene management, and UI and audio integration skills while completing a full game rather than an isolated prototype.</p>
    <h3>Project Links</h3><div class="project-external-links"><a href="https://github.com/antonelamatanovich/Blade-Of-The-Dawn" target="_blank" rel="noopener" class="project-external-link">GitHub &nearr;</a><!-- TODO: add Gameplay Walkthrough URL. --></div>  `,

  "discovering-barite": `
    <img class="project-hero-image project-hero-image--contain" src="images/third person view.png" alt="Visitor using the Discovering Barite mobile AR experience at the Spatschlucht" />
    <h2 id="popup-title">Discovering Barite</h2>
    <div class="popup-meta"><span>Mobile Augmented Reality</span><span>Unity</span><span>Vuforia</span><span>Image Tracking</span><span>Spatial Interaction</span><span>University Team Project</span></div>

    <section class="project-quick-facts" aria-labelledby="barite-facts-title"><h3 id="barite-facts-title">Quick Facts</h3><dl class="quick-facts-grid">
      <div><dt>University</dt><dd>Darmstadt University of Applied Sciences (h_da), Germany</dd></div><div><dt>Faculty</dt><dd>Faculty of Media</dd></div><div><dt>Study Programme</dt><dd>Bachelor of Arts (B.A.) &ndash; Expanded Realities</dd></div><div><dt>Course</dt><dd>Project 5</dd></div><div><dt>Semester</dt><dd>Winter Semester 2025/26</dd></div><div><dt>Project Type</dt><dd>University Team Project</dd></div><div><dt>Project Partner</dt><dd>Geo-Naturpark Bergstra&szlig;e-Odenwald</dd></div><div><dt>Location</dt><dd>Spatschlucht near Schriesheim, Germany</dd></div><div><dt>Format</dt><dd>Place-Based Mobile AR Experience</dd></div><div><dt>Engine</dt><dd>Unity 6.2</dd></div><div><dt>Tracking</dt><dd>Vuforia 11.4.4</dd></div><div><dt>Render Pipeline</dt><dd>Universal Render Pipeline (URP)</dd></div>
    </dl></section>

    <h3>Overview</h3>
    <p><strong>Discovering Barite</strong> is a place-based mobile augmented reality experience developed during Project 5 at Darmstadt University of Applied Sciences in collaboration with Geo-Naturpark Bergstra&szlig;e-Odenwald.</p>
    <p>Designed for the Spatschlucht near Schriesheim, the project uses the real gorge as the physical context for exploring geological processes and the site&rsquo;s history of barite mining.</p>
    <p>Through digital storytelling, spatial interaction and geological interpretation, visitors reconstruct and look inside structures no longer directly visible. The central concept is to reveal the hidden structure of the landscape, including mineral layers and barite veins shaped by geology and mining history.</p>

    <h3>Experience Journey</h3>
    <div class="experience-journey">
      <section class="experience-stage"><p class="experience-stage-label">Stage 1</p><h4>Arriving at the Spatschlucht</h4><p>Visitors arrive at the real geological site, where the natural gorge provides the physical context. A mobile device becomes a viewing tool for hidden information while the experience introduces the location and its history of barite extraction.</p><div class="popup-image-grid"><img src="images/location.png" alt="Information sign marking the Spatschlucht geological site" /><img src="images/gorge.jpg" alt="Natural rock walls and pathway inside the Spatschlucht" /></div></section>
      <section class="experience-stage"><p class="experience-stage-label">Stage 2</p><h4>Aligning the digital reconstruction</h4><p>Image-based tracking aligns a readable virtual rock face with the physical gorge. This replaced an earlier setup that placed content between two opposing tracked walls, giving visitors a clearer spatial reference and a more stable, understandable phone-based view.</p><div class="popup-image-grid popup-image-grid--single"><img class="gallery-image--contain" src="images/first person view.png" alt="First-person phone view of the augmented rock structure" /></div></section>
      <section class="experience-stage"><p class="experience-stage-label">Stage 3</p><h4>Revealing the hidden layers</h4><p>A guided UI slider moves a slicing plane through the virtual rock. As the adapted cross-section shader hides the outer geometry, internal mineral layers and barite veins appear step by step, helping visitors explore how the structure formed and how mining changed the landscape.</p></section>
    </div>

    <h3>Video</h3><div class="video-container"><iframe src="https://www.youtube.com/embed/iN2uR1dm6d4" title="Discovering Barite project trailer" allowfullscreen></iframe></div>

    <h3>Gallery</h3><div class="popup-image-grid">
      <img src="images/location.png" alt="Information sign and surrounding landscape at the Spatschlucht" /><img src="images/gorge.jpg" alt="Rock walls and forest floor inside the Spatschlucht" /><img class="gallery-image--contain" src="images/first person view.png" alt="First-person mobile AR view with navigation and geological content" /><img class="gallery-image--contain" src="images/third person view.png" alt="Visitor viewing the augmented reconstruction through a mobile phone" /><img src="images/third person.jpg" alt="On-site third-person view of the Discovering Barite experience" />
    </div>

    <h3>Technical Highlights</h3>
    <p>The final mobile AR implementation uses Unity 6.2, Vuforia 11.4.4 and the Universal Render Pipeline. Image-based tracking aligns a 3D reconstruction of the gorge with the site, while UI events connect the guided experience logic to the geological cross-section interaction.</p>
    <p>A cross-section shader found during development was adapted and customised for geological visualisation. Its clipping plane hides outer virtual geometry, and a UI slider moves the plane through the model so visitors can reveal barite veins in real time.</p>
    <p>Because terrain, weather and accessibility made repeated location testing difficult, the team created a 1:1 spatial simulation based on a 3D scan of the gorge. This repeatable indoor environment supported faster iteration before on-site validation, alongside mobile performance optimisation. The project initially used Unity 2022.3, AR Foundation and ARCore before moving to the final Unity 6.2, Vuforia and URP setup.</p>

    <h3>My Contribution</h3><ul><li>I developed and tested the image-tracking system.</li><li>I designed and optimised the mobile UI layout.</li><li>I integrated game events and interaction logic with UI elements.</li><li>I contributed programming work across the mobile AR experience.</li><li>I supported project management and team coordination.</li><li>I took part in prototype testing and on-site validation.</li><li>I helped refine the interaction from a technically driven setup into a clearer user journey.</li></ul>

    <h3>Challenges</h3>
    <ul><li><strong>Tracking and alignment:</strong> Limited connectivity and unreliable GPS precision led the team towards image-based tracking, with careful alignment between the reconstruction and physical gorge.</li><li><strong>Limited on-site testing:</strong> Terrain, weather and travel constraints led to the repeatable indoor 3D simulation.</li><li><strong>Mobile performance:</strong> Geometry, rendering and cross-section effects needed to remain usable on a mobile device.</li><li><strong>Render pipeline transition:</strong> Moving from the Standard Render Pipeline to URP required existing materials and systems to be adjusted.</li><li><strong>Project recovery:</strong> A late-stage project-file failure required the application to be rebuilt from a stable foundation under significant time pressure.</li></ul>

    <h3>What I Learned</h3>
    <p>I developed experience in mobile AR interaction design, Vuforia tracking, spatial alignment and calibration, real-location interaction design, shader adaptation, UI event integration, Unity and URP workflows, and mobile optimisation. The project also strengthened my iterative indoor and on-site testing, external-partner collaboration, coordination and recovery under time pressure, and ability to translate complex geological content into accessible spatial interaction.</p>

    <h3>Team</h3><p>Antonela Matanovi&#263; &middot; Jacopo Perilli &middot; Karam Al Sawaftah</p>

    <h3>Project Links</h3><div class="project-external-links"><a href="https://www.youtube.com/watch?v=iN2uR1dm6d4" target="_blank" rel="noopener" class="project-external-link">Watch Project Video &nearr;</a><a href="https://geo-naturpark.net" target="_blank" rel="noopener" class="project-external-link" aria-label="Project Partner: Geo-Naturpark Bergstraße-Odenwald">Geo-Naturpark Bergstra&szlig;e-Odenwald &nearr;</a></div>  `,

  "animal-garden": `
    <img class="project-hero-image" src="images/exhibit place (1).jpg" alt="Animal Garden installed in the TimeLeapVR ArtWorld exhibition" />
    <h2 id="popup-title">Animal Garden</h2><div class="popup-meta"><span>Interactive Installation</span><span>Unity</span><span>C#</span><span>Hardware Build</span><span>Exhibition</span><span>Work Project</span></div>
    <section class="project-quick-facts" aria-labelledby="animal-facts-title"><h3 id="animal-facts-title">Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Company</dt><dd>videoreality GmbH</dd></div><div><dt>Context</dt><dd>TimeLeapVR ArtWorld &ndash; Mona Lisa's Geheimnis</dd></div><div><dt>Location</dt><dd>Frankfurt am Main, Germany</dd></div><div><dt>Year</dt><dd>2025</dd></div><div><dt>Project Type</dt><dd>Interactive Exhibition Installation</dd></div><div><dt>My Role</dt><dd>Co-Creator, XR Developer and Designer</dd></div><div><dt>Engine</dt><dd>Unity</dd></div><div><dt>Language</dt><dd>C#</dd></div></dl></section>
    <h3>Overview</h3><p><strong>Animal Garden</strong> is an interactive installation co-created with Riccardo Liguori for videoreality GmbH and exhibited at TimeLeapVR ArtWorld. Visitors colour a printed creature; a custom scanner captures and processes it before Unity imports it into a live projected digital garden, where it animates alongside other contributions.</p>
    <h3>Gallery</h3><div class="popup-image-grid">
    <img src="images/visitors sitting.JPG" alt="Visitors at the Animal Garden colouring station" /><img src="images/visitor coloring the print sheet.JPG" alt="Visitor colouring a creature sheet" /><img src="images/visitor 1.JPG" alt="Visitor presenting a completed creature drawing" /><img src="images/visitor 2.JPG" alt="Visitors engaging with Animal Garden" />
    <img src="images/building progress (1).jpg" alt="Early scanner kiosk frame" /><img src="images/building progress (2).jpg" alt="Scanner kiosk during construction" /><img src="images/building progress (3).jpg" alt="Scanner kiosk hardware integration" /><img src="images/building progress (4).jpg" alt="Finished scanner kiosk housing" />
    <img src="images/prototype.jpg" alt="Early scanner prototype" /><img src="images/testing the projection.jpg" alt="Testing the live projection" /><img src="images/scene view.png" alt="Unity scene view of the digital garden" /></div>
    <h3>Technical Highlights</h3><p>The custom kiosk combines camera capture with an image-processing pipeline that detects registration markers, removes the background, and exports transparent PNG assets. Unity imports them at runtime into a live projection scene with animation and timed fade logic. Hardware prototypes refined camera position, lighting, recognition, and exhibition reliability.</p>
    <h3>My Contribution</h3><ul><li>I co-created the concept and interaction structure with Riccardo Liguori.</li><li>I designed and built the scanner kiosk.</li><li>I developed the capture, image-processing, and asset pipeline in Unity and C#.</li><li>I built the live projection scene.</li><li>I iterated through hardware prototypes and supported testing, calibration, maintenance, and refinement.</li></ul>
    <h3>Challenges</h3><p>The installation needed to convert drawings into clean assets in real time without continuous staff input. Reliable positioning, lighting, marker recognition, hardware integration, and stability were essential during exhibition operation.</p>
    <h3>What I Learned</h3><p>The project developed my interactive installation, physical computing, hardware prototyping, computer-vision integration, and Unity runtime asset workflow skills, alongside public-exhibition design, iterative testing, collaboration, and production reliability.</p>
    <h3>Credits</h3><p>Concept and realisation: Antonela Matanovi&#263;, Riccardo Liguori<br />Technical support: Linus Steffens<br />Exhibition: TimeLeapVR ArtWorld &ndash; Mona Lisa's Geheimnis, videoreality GmbH, 2025</p>
    <h3>Project Links</h3><div class="project-external-links"><a href="https://videoreality.de/monalisasgeheimnis" target="_blank" rel="noopener" class="project-external-link">Exhibition Website &nearr;</a></div>  `,

  insects: `
    <img class="project-hero-image project-hero-image--contain" src="images/main image.png" alt="Brumble the bee flying through the colourful flower environment in Insect’s Delegate" />
    <h2 id="popup-title">Insect&rsquo;s Delegate: Brumble&rsquo;s Journey</h2>
    <div class="popup-meta"><span>Virtual Reality</span><span>Unity</span><span>C#</span><span>Educational Experience</span><span>Interaction Design</span><span>University Team Project</span></div>
    <section class="project-quick-facts" aria-labelledby="insects-facts-title"><h3 id="insects-facts-title">Quick Facts</h3><dl class="quick-facts-grid">
      <div><dt>University</dt><dd>Darmstadt University of Applied Sciences (h_da), Germany</dd></div><div><dt>Faculty</dt><dd>Faculty of Media</dd></div><div><dt>Study Programme</dt><dd>Bachelor of Arts (B.A.) &ndash; Expanded Realities</dd></div><div><dt>Course</dt><dd>Project 3 &ndash; Discover Space and Time: Hidden Ventures Beyond the Spotlight</dd></div><div><dt>Semester</dt><dd>Winter Semester 2024</dd></div><div><dt>Project Type</dt><dd>University Team Project</dd></div><div><dt>Target Audience</dt><dd>Ages 12&ndash;16</dd></div><div><dt>Format</dt><dd>Virtual Reality Experience</dd></div><div><dt>Engine</dt><dd>Unity</dd></div><div><dt>Language</dt><dd>C#</dd></div>
    </dl></section>
    <h3>Overview</h3>
    <p><strong>Insect&rsquo;s Delegate: Brumble&rsquo;s Journey</strong> is an educational virtual reality experience developed during the third semester as part of Project 3: Discover Space and Time &ndash; Hidden Ventures Beyond the Spotlight.</p>
    <p>Inspired by the exhibition <em>City Insects: Frankfurt&rsquo;s Tiny Helpers</em> at the Senckenberg Naturmuseum Frankfurt, the project was created by a team of five to educate and inspire young audiences aged 12&ndash;16 about the vital role insects play in ecosystems.</p>
    <p>Environmental storytelling, guided exploration, interactive tasks and voice-acted dialogue take users from a city park at human scale into a colourful world seen from an insect&rsquo;s perspective.</p>
    <h3>Experience Journey</h3>
    <div class="experience-journey">
      <section class="experience-stage"><p class="experience-stage-label">Stage 1</p><h4>Supporting insects in the city</h4><p>The experience begins in a city park, where users discover and place insect hotels. These small wooden structures provide nesting and shelter spaces for different insect species, introducing a practical way to support insects in urban environments.</p><div class="popup-image-grid"><img src="images/city.png" alt="Stylised city park environment at the beginning of the VR experience" /><img src="images/insect hotel.jpg" alt="Player placing an insect hotel onto a tree in the city park" /></div></section>
      <section class="experience-stage"><p class="experience-stage-label">Stage 2</p><h4>Entering Brumble&rsquo;s world</h4><p>After the insect hotels are placed, a butterfly shrinks the user. The transition changes their perspective and introduces Brumble, a friendly bee and guide, among oversized flowers, branches and plants.</p><div class="popup-image-grid"><img src="images/brumble.png" alt="Brumble the bee surrounded by oversized flowers" /><img src="images/environment.png" alt="Colourful oversized flower environment seen from an insect’s perspective" /><img src="images/flowers.png" alt="Dense flower landscape inside the VR experience" /></div></section>
      <section class="experience-stage"><p class="experience-stage-label">Stage 3</p><h4>Pollination journey</h4><p>Brumble guides the user through a bee-inspired UV visualisation that reveals flowers ready for pollination. Users complete pollination tasks that help flowers flourish before the butterfly restores them to human size, connecting the adventure back to insect conservation and ecosystem awareness.</p><div class="popup-image-grid"><img src="images/riding brumble.jpg" alt="Player travelling through the flower environment with Brumble" /><img src="images/pollination.jpg" alt="Bee-inspired UV vision used during the pollination interaction" /></div></section>
    </div>
    <h3>Video</h3><div class="video-container"><iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="Insect’s Delegate: Brumble’s Journey project trailer" allowfullscreen></iframe></div>
    <h3>Gallery</h3><div class="popup-image-grid">
      <img src="images/city.png" alt="Stylised city and park environment where the experience begins" /><img src="images/insect hotel.jpg" alt="Player interacting with an insect hotel attached to a tree" /><img src="images/climbing the tree.jpg" alt="First-person climbing interaction on the side of a tree" /><img src="images/tree ladder.jpg" alt="Ladder-like climbing route leading into the oversized flower environment" /><img src="images/brumble.png" alt="Brumble the bee flying among colourful oversized flowers" /><img src="images/environment.png" alt="Large-scale flower and plant environment from the insect perspective" /><img src="images/flowers.png" alt="Path surrounded by dense colourful flowers and foliage" /><img src="images/riding brumble.jpg" alt="Close view of Brumble during the guided journey" /><img src="images/pollination.jpg" alt="Pollination interaction shown through a bee-inspired UV visual effect" />
    </div>
    <h3>Technical Highlights</h3><p>Built in Unity, the first-person VR flow uses C# gameplay logic, environmental triggers and state progression to support the scale transition, Brumble&rsquo;s guided character progression, insect hotel placement, climbing and environmental navigation, pollination interactions, bee-inspired UV visualisation, voice-acted dialogue and the overall scene sequence.</p>
    <h3>My Contribution</h3><ul><li>I implemented core interaction systems and gameplay logic in Unity using C#.</li><li>I designed player interaction flows supporting exploration and educational progression.</li><li>I managed scene logic, triggers and state progression across the experience.</li><li>I supported project organisation and team coordination.</li><li>I contributed to integrating narrative, interaction and learning goals into one coherent player journey.</li><li>I supported testing and refinement of the VR experience.</li></ul>
    <h3>Challenges</h3><p>The team needed to balance learning, story and playful exploration while keeping the guided experience clear for young audiences aged 12&ndash;16.</p><ul><li>Designing understandable and engaging interactions for the target audience.</li><li>Coordinating triggers and state progression across the journey.</li><li>Communicating the scale transition without disorienting the user.</li><li>Presenting insect perception and pollination clearly without overstating scientific accuracy.</li><li>Integrating individual contributions into one consistent experience.</li></ul>
    <h3>What I Learned</h3><p>I strengthened my VR interaction design, Unity gameplay and scene logic, trigger- and state-based progression, environmental storytelling and educational experience design skills. The project also developed my ability to connect learning goals with interaction, design for a specific audience, test clarity in an immersive environment, and contribute to team organisation and coordination.</p>
    <h3>Team</h3><p>Jacopo Perilli &middot; Lara He&szlig; &middot; Mutlu Yakubov &middot; Antonela Matanovi&#263; &middot; Himanshu Dahiya</p>
    <h3>Project Links</h3><div class="project-external-links"><a href="https://www.youtube.com/watch?v=hUOfJCqo2rE" target="_blank" rel="noopener" class="project-external-link">Watch Project Video &nearr;</a><a href="https://museumfrankfurt.senckenberg.de/en/" target="_blank" rel="noopener" class="project-external-link" aria-label="Exhibition Inspiration: Senckenberg Naturmuseum Frankfurt">Senckenberg Naturmuseum Frankfurt &nearr;</a></div>  `
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

const categoryButtons = document.querySelectorAll(".project-category-button");
const projectRows = document.querySelectorAll(".project-row[data-category]");
const projectEmptyState = document.getElementById("project-empty-state");

function filterProjects(category) {
  categoryButtons.forEach((button) => {
    const isActive = button.dataset.categoryFilter === category;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  let visibleProjects = 0;
  projectRows.forEach((row) => {
    const isVisible = row.dataset.category === category;
    row.classList.toggle("project-row--hidden", !isVisible);
    row.setAttribute("aria-hidden", String(!isVisible));
    if (isVisible) visibleProjects += 1;
  });

  projectEmptyState.hidden = visibleProjects > 0;
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => filterProjects(button.dataset.categoryFilter));
});

filterProjects("university");
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