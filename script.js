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
    <h3>Project Links</h3><div class="project-external-links"><a href="https://github.com/antonelamatanovich/Blade-Of-The-Dawn" target="_blank" rel="noopener" class="project-external-link">github &nearr;</a><!-- TODO: add Gameplay Walkthrough URL. --></div>  `,

  "retro-snake": `
    <h2 id="popup-title">Retro Snake</h2>
    <div class="popup-meta"><span>Desktop Game</span><span>Processing</span><span>Java</span><span>Game Programming</span><span>Individual Final Project</span><span>University Project</span></div>
    <section class="project-quick-facts" aria-labelledby="retro-snake-facts-title"><h3 id="retro-snake-facts-title">Quick Facts</h3><dl class="quick-facts-grid">
      <div><dt>University</dt><dd>Darmstadt University of Applied Sciences (h_da), Germany</dd></div><div><dt>Faculty</dt><dd>Faculty of Media</dd></div><div><dt>Study Programme</dt><dd>Bachelor of Arts (B.A.) &ndash; Expanded Realities</dd></div><div><dt>Course</dt><dd>ER-T1 &ndash; Fundamentals of Technology in Expanded Realities</dd></div><div><dt>Semester</dt><dd>Winter Semester 2023/2024</dd></div><div><dt>Project Type</dt><dd>Individual Final Project</dd></div><div><dt>Format</dt><dd>Desktop Arcade Game</dd></div><div><dt>Framework</dt><dd>Processing &ndash; Java Mode</dd></div><div><dt>Language</dt><dd>Java / Processing</dd></div>
    </dl></section>
    <h3>Overview</h3><p><strong>Retro Snake</strong> is a desktop recreation of the classic Snake arcade game, developed with Processing in Java mode as the final project for ER-T1 &ndash; Fundamentals of Technology in Expanded Realities.</p><p>The project combines grid-based movement, collectible spawning, scoring, collision detection, screen navigation and replay functionality within a monochrome pixel-art presentation inspired by early arcade games. As my first complete programming project, it established a foundation for my later work in Unity, XR and interactive application development.</p>
    <h3>Gameplay Preview</h3><figure class="popup-media popup-media--contained"><img src="images/retro snake.gif" alt="Retro Snake gameplay showing the snake moving across the grid, collecting food and increasing the score" class="popup-image popup-image--contained" /><figcaption>Core gameplay with grid-based movement, food collection, snake growth and score tracking.</figcaption></figure>
    <h3>Gameplay</h3><p>The player guides a snake across a grid-based playfield, collecting food to grow while avoiding the window boundaries and the snake&rsquo;s own body. Each collected item adds one body segment, awards five points and generates new food at a random grid-aligned position. A collision ends the run and opens the Game Over screen, where the player can retry or return to the main menu.</p>
    <h3>Technical Highlights</h3><ul><li><strong>Real-Time Game Loop:</strong> Processing&rsquo;s <code>setup()</code> and <code>draw()</code> lifecycle provides continuous updates and rendering with keyboard-driven movement.</li><li><strong>Grid-Based Movement:</strong> Fixed 20-pixel steps support four directions while preventing immediate reversal.</li><li><strong>Snake Body Representation:</strong> Coordinate arrays let segments follow previous head positions and grow after collection.</li><li><strong>Food and Scoring:</strong> Random grid-aligned food, pickup detection, five points per item and respawning.</li><li><strong>Collision Detection:</strong> Wall and self-collisions transition to Game Over.</li><li><strong>Screen-State Management:</strong> A shared state variable creates a lightweight finite-state flow across Main Menu, Controls, Rules, Gameplay and Game Over.</li><li><strong>Replay and Reset:</strong> Restarting resets position, length, direction, food and score.</li></ul>
    <h3>Interface &amp; Game States</h3><p>Beyond the core gameplay loop, the application includes a complete menu, onboarding and game-over flow built within the same Processing sketch.</p>
    <div class="popup-gallery popup-gallery--four">
      <figure><img src="images/start screen.png" loading="lazy" alt="Retro Snake main menu with Play, Controls and Rules buttons beneath a rotating pixel spiral" /><figcaption>Main menu with animated visual branding and mouse-based navigation.</figcaption></figure>
      <figure><img src="images/help screen.png" loading="lazy" alt="Retro Snake controls screen showing the arrow keys used to control the snake" /><figcaption>Controls screen introducing the four-direction keyboard input.</figcaption></figure>
      <figure><img src="images/rules screen.png" loading="lazy" alt="Retro Snake rules screen explaining food collection, growth and wall or self-collision" /><figcaption>Rules screen explaining the objective and the main loss conditions.</figcaption></figure>
      <figure><img src="images/game over.png" loading="lazy" alt="Retro Snake Game Over screen with a pixel-art skull, Retry button and Back navigation" /><figcaption>Game-over state providing retry and back-navigation options after a collision.</figcaption></figure>
    </div>
    <h3>My Contribution</h3><p>This was an individual project.</p><ul><li>I designed the complete game structure and interaction flow.</li><li>I programmed the gameplay in Processing using Java mode.</li><li>I implemented grid-based movement, snake growth, food spawning, wall and self-collision detection, and scoring.</li><li>I developed the menu, instructions, rules and Game Over screens.</li><li>I implemented replay and reset functionality.</li><li>I structured the project across responsibility-based Processing tabs.</li><li>I integrated the monochrome visual assets, font and interface presentation without claiming authorship of third-party assets.</li><li>I tested and refined the complete desktop application.</li></ul>
    <h3>Challenges</h3><p>As an early programming project, the meaningful challenges included representing a growing moving body with coordinate arrays, ensuring each segment followed the correct previous position, preventing immediate reversal, and detecting wall and self-collisions reliably. I also had to reset every gameplay variable on restart and manage several application screens without a framework, combining gameplay, menus and replay while learning how real-time update and rendering loops work.</p>
    <h3>What I Learned</h3><p>I learned how Processing&rsquo;s <code>setup()</code> and <code>draw()</code> lifecycle supports real-time keyboard and mouse input, and gained experience with classes, objects, arrays and responsibility-based tabs. Building the complete application developed my understanding of grid movement, collision detection, scoring, application states, menu and Game Over flows, reusable reset logic, and loading fonts and raster images. It established the programming foundation for my later Unity, XR and interactive development work.</p>
    <h3>Controls</h3><dl class="project-controls"><div><dt>Right Arrow</dt><dd>Move right</dd></div><div><dt>Down Arrow</dt><dd>Move down</dd></div><div><dt>Left Arrow</dt><dd>Move left</dd></div><div><dt>Up Arrow</dt><dd>Move up</dd></div><div><dt>Mouse</dt><dd>Play, Controls, Rules, Retry, Back and Main Menu buttons</dd></div></dl><p>The snake cannot immediately reverse into the opposite direction.</p>
    <h3>Future Improvements</h3><ul><li>Persistent high-score system</li><li>Dynamic speed and difficulty progression</li><li>Preventing food from spawning on the snake</li><li>Pause functionality and WASD controls</li><li>Keyboard-accessible menus and improved button feedback</li><li>Dynamic snake-body storage</li><li>Replacing remaining third-party visual assets with original or clearly licensed artwork</li></ul>
    <h3>Project Links</h3><div class="project-external-links"><a href="https://github.com/antonelamatanovich/Retro-Snake" target="_blank" rel="noopener" class="project-external-link">GitHub Repository &nearr;</a></div>
  `,
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
    <h2 id="popup-title">Animal Garden</h2><div class="popup-meta"><span>Interactive Installation</span><span>Unity</span><span>C#</span><span>Hardware Build</span><span>Exhibition</span><span>Work Project</span></div>
    <section class="project-quick-facts" aria-labelledby="animal-facts-title"><h3 id="animal-facts-title">Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Company</dt><dd>videoreality GmbH</dd></div><div><dt>Employment Context</dt><dd>Fourth-Semester Internship</dd></div><div><dt>Context</dt><dd>TimeLeapVR ArtWorld &ndash; Mona Lisa's Geheimnis</dd></div><div><dt>Location</dt><dd>Frankfurt am Main, Germany</dd></div><div><dt>Year</dt><dd>2025</dd></div><div><dt>Project Type</dt><dd>Interactive Exhibition Installation</dd></div><div><dt>My Role</dt><dd>Co-Creator, XR Developer and Designer</dd></div><div><dt>Engine</dt><dd>Unity</dd></div><div><dt>Language</dt><dd>C#</dd></div></dl></section>
    <h3>Overview</h3><p><strong>Animal Garden</strong> is an interactive installation co-created with Riccardo Liguori for videoreality GmbH during my fourth-semester internship and exhibited at TimeLeapVR ArtWorld. Visitors colour a printed creature; a custom scanner captures and processes it before Unity imports it into a live projected digital garden, where it animates alongside other contributions.</p>
    <figure class="popup-media popup-media--contained"><img src="images/visitor 1.JPG" alt="Two visitors using the Animal Garden drawing table while the animated digital environment is projected behind the installation" /><figcaption>Animal Garden in use as part of the public TimeLeapVR ArtWorld exhibition experience.</figcaption></figure>
    <h3>Main Exhibition Experience</h3><p>The finished installation combined a physical drawing station, a custom scanner enclosure and a projected digital world used by visitors during the exhibition.</p>
    <div class="popup-gallery popup-gallery--two">
      <figure><img src="images/visitors sitting.JPG" loading="lazy" alt="Visitors seated at the Animal Garden drawing station in front of the projected digital environment" /><figcaption>The public setup connected the hands-on drawing activity with the shared projected garden.</figcaption></figure>
      <figure><img src="images/visitor coloring the print sheet.JPG" loading="lazy" alt="A visitor colouring an Animal Garden creature sheet on the exhibition table" /><figcaption>Printed templates provided the physical starting point for each visitor-created creature.</figcaption></figure>
      <figure><img src="images/exhibit place (1).jpg" loading="lazy" alt="Animal Garden scanner kiosk, drawing table and projection installed in the exhibition space" /><figcaption>The completed installation brought the scanner, workspace and projection together in one exhibition area.</figcaption></figure>
    </div>
    <h3>Technical Highlights</h3><p>The custom kiosk combines camera capture with an image-processing pipeline that detects registration markers, removes the background, and exports transparent PNG assets. Unity imports them at runtime into a live projection scene with animation and timed fade logic. Hardware prototypes refined camera position, lighting, recognition, and exhibition reliability.</p>
    <h3>Physical Prototype &amp; Construction</h3><p>The scanner kiosk was developed through several physical construction stages, from the initial wooden frame to the enclosed and calibrated exhibition unit.</p>
    <div class="popup-gallery popup-gallery--two">
      <figure><img src="images/building progress (1).jpg" loading="lazy" alt="Initial wooden frame of the Animal Garden scanner kiosk during construction" /><figcaption>The first structural build established the kiosk dimensions and internal layout.</figcaption></figure>
      <figure><img src="images/building progress (3).jpg" loading="lazy" alt="Animal Garden kiosk frame with internal supports and scanner components being fitted" /><figcaption>Internal supports were added to position the camera, lighting and scanning surface reliably.</figcaption></figure>
      <figure><img src="images/building progress (4).jpg" loading="lazy" alt="Enclosed Animal Garden scanner kiosk during the later construction stage" /><figcaption>The enclosed prototype prepared the physical system for calibration and exhibition use.</figcaption></figure>
    </div>
    <h3>System Testing &amp; Installation</h3><p>Projection, runtime behaviour and the physical-digital setup were tested together before public operation.</p>
    <div class="popup-gallery popup-gallery--two">
      <figure><img src="images/testing the projection.jpg" loading="lazy" alt="Team members testing the Animal Garden projection and scanner setup in the exhibition space" /><figcaption>Projection and alignment testing validated the relationship between the physical station and digital garden.</figcaption></figure>
      <figure><img src="images/scene view.png" loading="lazy" alt="Unity scene view of the Animal Garden environment with animated creature characters" /><figcaption>The Unity scene supported runtime testing of imported creatures, animation and timed content behaviour.</figcaption></figure>
    </div>
    <h3>My Contribution</h3><ul><li>I co-created the concept and interaction structure with Riccardo Liguori.</li><li>I designed and built the scanner kiosk.</li><li>I developed the capture, image-processing, and asset pipeline in Unity and C#.</li><li>I built the live projection scene.</li><li>I iterated through hardware prototypes and supported testing, calibration, maintenance, and refinement.</li></ul>
    <h3>Challenges</h3><p>The installation needed to convert drawings into clean assets in real time without continuous staff input. Reliable positioning, lighting, marker recognition, hardware integration, and stability were essential during exhibition operation.</p>
    <h3>What I Learned</h3><p>The project developed my interactive installation, physical computing, hardware prototyping, computer-vision integration, and Unity runtime asset workflow skills, alongside public-exhibition design, iterative testing, collaboration, and production reliability.</p>
    <h3>Credits</h3><p>Concept and realisation: Antonela Matanovi&#263;, Riccardo Liguori<br />Technical support: Linus Steffens<br />Exhibition: TimeLeapVR ArtWorld &ndash; Mona Lisa's Geheimnis, videoreality GmbH, 2025</p>
    <h3>Project Links</h3><div class="project-external-links"><a href="https://videoreality.de/monalisasgeheimnis" target="_blank" rel="noopener" class="project-external-link">Exhibition Website &nearr;</a></div>  `,

  insects: `
    <h2 id="popup-title">Insect&rsquo;s Delegate: Brumble&rsquo;s Journey</h2>
    <div class="popup-meta"><span>Virtual Reality</span><span>Unity</span><span>C#</span><span>Educational Experience</span><span>Interaction Design</span><span>University Team Project</span></div>
    <section class="project-quick-facts" aria-labelledby="insects-facts-title"><h3 id="insects-facts-title">Quick Facts</h3><dl class="quick-facts-grid">
      <div><dt>University</dt><dd>Darmstadt University of Applied Sciences (h_da), Germany</dd></div><div><dt>Faculty</dt><dd>Faculty of Media</dd></div><div><dt>Study Programme</dt><dd>Bachelor of Arts (B.A.) &ndash; Expanded Realities</dd></div><div><dt>Course</dt><dd>Project 3 &ndash; Discover Space and Time: Hidden Ventures Beyond the Spotlight</dd></div><div><dt>Semester</dt><dd>Winter Semester 2024</dd></div><div><dt>Project Type</dt><dd>University Team Project</dd></div><div><dt>Target Audience</dt><dd>Ages 12&ndash;16</dd></div><div><dt>Format</dt><dd>Virtual Reality Experience</dd></div><div><dt>Engine</dt><dd>Unity</dd></div><div><dt>Language</dt><dd>C#</dd></div>
    </dl></section>
    <h3>Overview</h3>
    <p><strong>Insect&rsquo;s Delegate: Brumble&rsquo;s Journey</strong> is an educational virtual reality narrative created for audiences aged 12&ndash;16. Inspired by the Senckenberg Naturmuseum Frankfurt exhibition <em>City Insects: Frankfurt&rsquo;s Tiny Helpers</em>, the experience combines storytelling, exploration and hands-on learning to introduce the ecological importance of insects without presenting itself as a museum application.</p>
    <p>The journey begins at human scale in a city park, where players discover how insect hotels can support urban habitats. A butterfly then shrinks them into a miniature world, where Brumble the bee becomes their guide through flight, climbing and pollination interactions supported by voice-acted dialogue.</p>
    <p>After learning how bees perceive flowers and completing the pollination task, the player returns to human scale. The complete arc connects practical conservation ideas with a playful perspective designed to build appreciation for pollinators and their role in healthy ecosystems.</p>
    <figure class="popup-media popup-media--contained"><img src="images/main image.png" alt="Brumble the bee flying through the colourful insect-scale flower environment in Insect&rsquo;s Delegate" /><figcaption>Brumble guides the player through the miniature pollinator world.</figcaption></figure>
    <h3>Experience Journey</h3>
    <div class="experience-journey">
      <section class="experience-stage"><p class="experience-stage-label">Stage 1</p><h4>Discovering the Hidden World</h4><p>The player explores a city park and places insect hotels inspired by the exhibition research, learning how these structures provide shelter in urban environments. Completing the task triggers a magical encounter with a butterfly, which reduces the player to insect scale and reveals the hidden world around them.</p><div class="popup-gallery popup-gallery--two"><figure><img src="images/city.png" loading="lazy" alt="Stylised city park environment at the beginning of the VR experience" /><figcaption>The opening establishes a familiar human-scale setting before the perspective changes.</figcaption></figure><figure><img src="images/insect hotel.jpg" loading="lazy" alt="Player placing an insect hotel onto a tree in the city park" /><figcaption>Placing insect hotels turns the first conservation lesson into an interactive task.</figcaption></figure></div></section>
      <section class="experience-stage"><p class="experience-stage-label">Stage 2</p><h4>Meeting Brumble</h4><p>At insect scale, the player meets Brumble and mounts the bee for a guided flight through the miniature environment. After dismounting, they climb a tree, discover a bee-inspired UV view of flowers and complete the pollination task through interactive gameplay.</p><div class="popup-gallery popup-gallery--two"><figure><img src="images/brumble.png" loading="lazy" alt="Brumble the bee surrounded by oversized colourful flowers" /><figcaption>Brumble provides a friendly narrative guide through the insect-scale world.</figcaption></figure><figure><img src="images/riding brumble.jpg" loading="lazy" alt="First-person view of the player riding Brumble through the flower environment" /><figcaption>The mounted flight links guided movement with environmental storytelling.</figcaption></figure><figure><img src="images/environment.png" loading="lazy" alt="Oversized flower and plant environment viewed from an insect-scale perspective" /><figcaption>Large plants and dense foliage make the player&rsquo;s reduced scale immediately legible.</figcaption></figure><figure><img src="images/climbing the tree.jpg" loading="lazy" alt="First-person view of the player climbing the bark of a tree after dismounting" /><figcaption>Climbing shifts the journey from guided travel back to direct physical interaction.</figcaption></figure><figure><img src="images/tree ladder.jpg" loading="lazy" alt="Ladder-like route leading upward through the tree in the miniature environment" /><figcaption>The tree route structures navigation towards the pollination sequence.</figcaption></figure><figure><img src="images/flowers.png" loading="lazy" alt="Dense colourful flowers in the miniature environment before the pollination task" /><figcaption>The flower landscape establishes the setting and targets for the final gameplay task.</figcaption></figure><figure><img src="images/pollination.jpg" loading="lazy" alt="Flower highlighted through the bee-inspired UV visualisation during pollination" /><figcaption>Bee-inspired vision helps the player identify flower patterns relevant to pollination.</figcaption></figure></div></section>
      <section class="experience-stage"><p class="experience-stage-label">Stage 3</p><h4>Returning Home</h4><p>Once the pollination task is complete, the butterfly restores the player to human scale. Returning to the city park closes the narrative loop and reinforces how pollinators support ecosystems, encouraging players to view insects and urban conservation with greater appreciation.</p></section>
    </div>
    <h3>Video</h3><div class="video-container"><iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="Insect’s Delegate: Brumble’s Journey project trailer" allowfullscreen></iframe></div>
    <h3>Technical Highlights</h3>
    <p>The experience was developed in Unity and C# with the XR Interaction Toolkit. VR locomotion and interaction systems support movement at human and insect scale, direct environmental interaction, hand animation and transitions between guided and player-controlled sequences.</p>
    <ul><li><strong>Mounted movement:</strong> A player-mounting system, bee movement logic and coroutine-based follow behaviour synchronise the player with Brumble during flight and return control after dismounting.</li><li><strong>Experience flow:</strong> Scene management, environmental triggers and state progression connect insect-hotel placement, the shrinking transition, guided flight, tree climbing, UV-inspired bee vision and pollination.</li><li><strong>Navigation and iteration:</strong> NavMesh debugging supported Brumble&rsquo;s movement, while rapid prototypes and user testing informed interaction comfort, clarity and polish.</li><li><strong>Visual development:</strong> Blender supported environmental prop production, alongside Unity shader experimentation for the insect-scale world and bee-inspired flower visualisation.</li><li><strong>Production workflow:</strong> Jira was used for task organisation, milestone planning and coordination across design, development, documentation and testing.</li></ul>
    <h3>My Contribution</h3>
    <p>I contributed across experience design, technical development, environment design and production. The final experience was a collaborative team achievement; the responsibilities below describe my documented individual work within that shared production.</p>
    <h4>Experience Design</h4><ul><li>Researched the museum exhibition and analysed its themes through design-thinking and semantic-analysis methods.</li><li>Contributed to the educational concept, personas and complete user journey.</li><li>Developed story material, dialogue and gameplay-flow planning connecting conservation learning with interactive tasks.</li></ul>
    <h4>Technical Development</h4><ul><li>Developed VR functionality in Unity and C# using the XR Interaction Toolkit, including locomotion and hand-animation integration.</li><li>Implemented and refined the bee-riding and player-mounting flow, movement synchronisation and coroutine-based follow behaviour.</li><li>Prototyped the shrinking transition and contributed scene-management and interaction logic.</li><li>Debugged NavMesh behaviour and Brumble&rsquo;s movement, then polished interactions through iteration and testing.</li></ul>
    <h4>Environment Design</h4><ul><li>Created the human-scale city-park blockout and contributed to level-layout planning.</li><li>Modelled environmental props including benches, street lamps, park signs and rubbish bins.</li><li>Explored shader approaches supporting the project&rsquo;s visual and interaction goals.</li></ul>
    <h4>Production</h4><ul><li>Set up Jira and supported task organisation, production planning and milestone presentations.</li><li>Contributed project documentation and coordinated the team&rsquo;s Medium development-blog workflow.</li></ul>
    <h3>Challenges</h3>
    <p>The central production challenge was shaping educational material into gameplay that remained engaging for a young audience. The team had to balance a clear narrative with player agency, combine several interaction modes into one understandable flow and maintain comfortable locomotion while moving between human scale, mounted flight and direct climbing.</p>
    <p>Interdisciplinary collaboration required design, writing, environment work and programming to evolve together rather than as isolated tasks. Rapid prototypes and user testing exposed assumptions about comfort and interaction clarity, making iteration and production coordination essential to the final experience.</p>
    <h3>What I Learned</h3>
    <p>This project reinforced that educational VR works best when learning is embedded in intuitive actions rather than separated into explanation. Prototyping core transitions and movement early made it easier to evaluate the experience as a complete journey, while user testing provided evidence that challenged design assumptions and directed interaction polish.</p>
    <p>I also learned that production planning is as important as implementation in an interdisciplinary XR project. Clear task ownership, milestones and documentation helped the team connect narrative, visual design, programming and educational goals into a more coherent result.</p>
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