const popup = document.getElementById("project-popup");
const popupContent = document.getElementById("popup-inner-content");
const closeBtn = document.getElementById("popup-close");
const scrollProgress = document.getElementById("scroll-progress");
const navMenuButton = document.querySelector(".nav-menu-button");
const navList = document.getElementById("nav-links");

// On narrow screens the portrait follows the text and can be below the fold.
// Promote only the visible hero; all project media keep normal priority.
const heroImage = document.querySelector(".hero-portrait__image");
if (heroImage) {
  const bounds = heroImage.getBoundingClientRect();
  if (bounds.top < window.innerHeight && bounds.bottom > 0) {
    heroImage.fetchPriority = "high";
    heroImage.loading = "eager";
  }
}

const projectsData = {
  "physical-control-deck": `
<header class="case-study-header"><p class="case-study-kicker">UNIVERSITY PROJECT · PHYSICAL COMPUTING</p><h2 id="popup-title">Physical Control Deck</h2><p class="case-study-summary">An Arduino-based physical interface that translates joystick and potentiometer input into real-time object manipulation in Unity through serial communication.</p><div class="popup-meta"><span>Arduino</span><span>Unity</span><span>C#</span><span>Serial Communication</span></div></header>
<section class="case-study-section project-quick-facts"><h3>Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Date</dt><dd>Summer Semester 2026</dd></div><div><dt>Project Type</dt><dd>Individual University Project</dd></div><div><dt>Organisation</dt><dd>Darmstadt University of Applied Sciences</dd></div><div><dt>Programme</dt><dd>B.A. Augmented and Virtual Reality Design</dd></div><div><dt>Course</dt><dd>Electronics and Physical Interfaces for Game Engines</dd></div><div><dt>Hardware</dt><dd>Arduino Uno WiFi Rev2</dd></div><div><dt>Engine</dt><dd>Unity</dd></div><div><dt>Language</dt><dd>C#</dd></div></dl></section>
<section aria-label="Synchronized physical-to-virtual demonstration" class="case-study-primary-media control-deck-demo" data-sync-demo=""><h3>Physical-to-Virtual Demonstration</h3><p class="control-deck-demo-intro">Two synchronized views show the same interaction from the software and physical sides.</p><div class="control-deck-view"><h4 class="control-deck-view-label" id="control-deck-unity-title"><span>View 01</span> · Unity</h4><figure class="popup-media"><button aria-controls="control-deck-unity-video control-deck-physical-video" aria-label="Play synchronized demonstration" class="control-deck-surface" data-sync-toggle="" type="button"><video aria-describedby="control-deck-unity-caption" aria-labelledby="control-deck-unity-title" class="motion-media" data-managed-video="" data-poster="images/unity view.poster.webp" data-sync-video="master" disablepictureinpicture="" disableremoteplayback="" height="1080" id="control-deck-unity-video" muted="" playsinline="" preload="none" width="1920"><source data-src="images/unity view.mp4" type="video/mp4"/></video></button><figcaption id="control-deck-unity-caption">Virtual response and live input feedback inside the engine.</figcaption></figure></div><div class="control-deck-view"><h4 class="control-deck-view-label" id="control-deck-physical-title"><span>View 02</span> · Physical Controls</h4><figure class="popup-media"><button aria-controls="control-deck-unity-video control-deck-physical-video" aria-label="Play synchronized demonstration" class="control-deck-surface" data-sync-toggle="" type="button"><video aria-describedby="control-deck-physical-caption" aria-labelledby="control-deck-physical-title" class="motion-media" data-managed-video="" data-poster="images/controlling.poster.webp" data-sync-video="follower" disablepictureinpicture="" disableremoteplayback="" height="1080" id="control-deck-physical-video" muted="" playsinline="" preload="none" width="1920"><source data-src="images/controlling.optimized.mp4" type="video/mp4"/></video></button><figcaption id="control-deck-physical-caption">Joystick and potentiometer input during the same interaction.</figcaption></figure></div><div aria-label="Synchronized video controls" class="control-deck-controls" role="group"><button aria-label="Play synchronized demonstration" class="control-deck-control" data-sync-toggle="" type="button">Play</button><input aria-label="Seek synchronized demonstration" aria-valuetext="0:00 of 0:25" class="control-deck-timeline" data-sync-timeline="" max="1000" min="0" step="1" type="range" value="0"/><output aria-label="Playback time" class="control-deck-time" data-sync-time="">0:00 / 0:25</output><button aria-label="Restart both views from the beginning" class="control-deck-control" data-sync-restart="" type="button">Restart</button><button aria-label="Unmute Unity recording" class="control-deck-control" data-sync-mute="" type="button">Unmute</button><span aria-live="polite" class="sr-only" data-sync-status="" role="status"></span></div></section>
<section class="case-study-section case-study-info-panel"><h3 class="case-study-info-label">Context</h3><div class="case-study-info-content"><p>How can physical hardware input be reliably captured, transmitted to Unity and translated into reusable virtual interaction behavior?</p><p>I developed Physical Control Deck during the elective Electronics and Physical Interfaces for Game Engines in Summer Semester 2026 at Darmstadt University of Applied Sciences, Faculty of Media.</p><p>The individual project explores the connection between physical electronics and interactive software: a small functional prototype that lets physical controls manipulate virtual objects in Unity in real time. The exposed breadboard supports rapid iteration rather than serving as a finished consumer enclosure.</p></div></section>
<section class="case-study-section case-study-story"><h3>Visual Story</h3><div class="case-study-visual-stage"><div class="popup-gallery popup-gallery--two control-deck-hardware"><figure><img alt="Arduino Uno WiFi Rev2 connected to the physical controller prototype." decoding="async" height="1440" loading="lazy" src="images/arduino.optimized.webp" width="1920"/><figcaption>The Arduino reads the physical inputs and passes their values to Unity.</figcaption></figure><figure><img alt="Breadboard with joystick and potentiometer used as physical input controls." decoding="async" height="1440" loading="lazy" src="images/board.optimized.webp" width="1920"/><figcaption>The joystick and potentiometer provide distinct, complementary controls.</figcaption></figure></div><h4>Hardware Prototype</h4><p>An Arduino Uno WiFi Rev2 connects to a joystick module and potentiometer through a breadboard and jumper wires. The joystick provides two analog axes and one digital button; the potentiometer provides one continuous analog value. Keeping the wiring exposed made changes and debugging straightforward during development.</p>
</div><figure class="popup-media"><img alt="Complete Physical Control Deck prototype with Arduino, breadboard, joystick and potentiometer." decoding="async" height="1440" loading="lazy" src="images/circuit.optimized.webp" width="1920"/><figcaption>The complete breadboard prototype connects physical controls to the Unity interaction system.</figcaption></figure></section>
<section class="case-study-section case-study-contribution"><h3>My Contribution</h3><p>I designed and implemented the complete physical-to-virtual prototype.</p><div class="contribution-grid"><article><h4>Hardware &amp; Input</h4><p>Assembled the Arduino and breadboard circuit, connected and tested the joystick and potentiometer, and implemented Arduino input reading.</p></article><article><h4>Serial &amp; Unity Integration</h4><p>Established serial communication with Unity and implemented the C# input handling and interaction logic.</p></article><article><h4>Interaction Modes</h4><p>Implemented Move and Rotate modes, joystick-button mode switching, and independent potentiometer-controlled scaling.</p></article><article><h4>Feedback &amp; Testing</h4><p>Built runtime input and status feedback and tested the complete hardware-to-software interaction path.</p></article></div><details class="case-study-details"><summary>Design &amp; Technical Notes</summary><div class="case-study-subsection"><h4>Arduino-to-Unity Communication</h4><p>The challenge spans the full path from a physical action and its electrical signal to Arduino processing, serial transmission, C# interpretation and a visible response. The controls also need meaningful mappings: a directional joystick suits movement and rotation, while a rotary potentiometer suits continuous scale adjustment.</p><p>Physical movement begins as electrical input. Arduino reads the joystick X and Y axes, button state and potentiometer value, converts them into numerical data and sends them over the serial connection. C# inside Unity interprets those values and passes them to the interaction logic.</p><div aria-label="Physical-to-virtual signal path" class="control-deck-flow" role="list"><div class="control-deck-flow-step" role="listitem"><small>01</small><b>Physical Controls</b></div><div class="control-deck-flow-step" role="listitem"><small>02</small><b>Arduino</b></div><div class="control-deck-flow-step" role="listitem"><small>03</small><b>Serial Communication</b></div><div class="control-deck-flow-step" role="listitem"><small>04</small><b>Unity C#</b></div><div class="control-deck-flow-step" role="listitem"><small>05</small><b>Interaction Logic</b></div><div class="control-deck-flow-step" role="listitem"><small>06</small><b>Virtual Object</b></div></div>
</div><div class="case-study-subsection"><h4>Interaction System</h4><p>The joystick is mode-dependent; the potentiometer remains dedicated to scale in either mode.</p><div class="control-deck-mappings"><article><p class="control-deck-input-label">Joystick</p><h5>Move Mode</h5><p>The joystick changes the position of the selected virtual object.</p></article><article><p class="control-deck-input-label">Joystick</p><h5>Rotate Mode</h5><p>The joystick changes the rotation of the selected virtual object.</p></article><article><p class="control-deck-input-label">Joystick button</p><h5>Mode Switching</h5><p>Pressing the joystick button switches between Move and Rotate.</p></article><article><p class="control-deck-input-label">Potentiometer</p><h5>Scale</h5><p>The potentiometer continuously controls object scale independently of the active joystick mode.</p></article></div><p class="control-deck-feedback">Runtime feedback shows the connected device, active COM port, interaction mode, selected object, joystick values, potentiometer value and current action so the physical input and virtual response can be checked together.</p></div></details></section>
<section class="case-study-section case-study-result"><h3>Result</h3><p>The working proof of concept reads multiple physical inputs, transfers them over serial communication and interprets them inside Unity. It displays live input information and supports position, rotation and scale manipulation, with the joystick button switching interaction modes.</p><p>The result is a prototyping tool, not a finished consumer controller. Additional buttons, rotary controls, sliders or sensors are possible future extensions; they are not part of the implemented prototype.</p></section>
`,
  "ai-content-platform": `
<header class="case-study-header"><p class="case-study-kicker">VIDEOREALITY GMBH · INTERNAL AI TOOL</p><h2 id="popup-title">Internal AI Production Tool</h2><p class="case-study-summary">An internal full-stack application supporting AI-assisted production workflows through structured data processing, human review, validation and integrated frontend/backend tooling.</p><div class="popup-meta"><span>React</span><span>TypeScript</span><span>Python</span><span>FastAPI</span><span>AI Integration</span><span>Human-in-the-Loop</span></div></header>
<section class="case-study-section project-quick-facts"><h3>Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Project Type</dt><dd>Internal AI Production Tool</dd></div><div><dt>Organisation</dt><dd>videoreality GmbH</dd></div><div><dt>Role</dt><dd>XR Project &amp; Prototyping Assistant</dd></div><div><dt>Contribution</dt><dd>Full-Stack Development · AI Integration · Production Tooling</dd></div><div><dt>Frontend</dt><dd>React · TypeScript</dd></div><div><dt>Backend</dt><dd>Python · FastAPI</dd></div></dl></section>
<figure class="case-study-primary-media"><span class="ai-project-visual"><span class="ai-project-visual__label">ENGINEERING AREAS · ABSTRACT VIEW</span><span class="ai-project-visual__title">Full-stack.<br/>AI-assisted.<br/>Human-reviewed.</span><span class="ai-project-visual__domains"><span>React / TypeScript</span><span>Python / FastAPI</span><span>AI + Structured Data</span><span>Validation + Review</span></span></span><figcaption>Conceptual illustration · No product interface shown</figcaption></figure>
<section class="case-study-section case-study-info-panel"><h3 class="case-study-info-label">Context</h3><div class="case-study-info-content"><p>The engineering challenge was to connect multiple processing tasks through a usable interface while maintaining structured data across frontend and backend boundaries.</p><p>AI-generated content also required review and editing, supported by validation and error handling. The application needed to make human review part of working with generated content and provide checks around processed data.</p><p>The project is an internal production application developed at videoreality GmbH within a larger AI-powered interactive product ecosystem. My work focused on software supporting structured AI-assisted workflows, connecting frontend interfaces with backend services, data processing and validation.</p><p class="project-disclosure ai-confidentiality">This case study intentionally focuses on my engineering contribution. Proprietary workflows, internal data and implementation details are omitted.</p></div></section>
<section class="case-study-section"><h3>Engineering Focus</h3><figure class="ai-engineering-map"><ul aria-label="Engineering areas" class="ai-engineering-domains"><li><strong>Interface</strong><span>React / TypeScript</span></li><li><strong>API Integration</strong><span>FastAPI / REST</span></li><li><strong>Data Processing</strong><span>Python / Structured Data</span></li><li><strong>AI Integration</strong><span>LLM / API-assisted functionality</span></li><li><strong>Quality Controls</strong><span>Validation / Testing / Human Review</span></li></ul><figcaption>High-level view of the engineering areas involved. Internal system architecture and production workflows are intentionally omitted.</figcaption></figure></section>
<section class="case-study-section case-study-contribution"><h3>My Contribution</h3><div class="contribution-grid"><article><h4>Full-Stack Development</h4><p>Built and refined React/TypeScript interfaces connected to Python/FastAPI backend services.</p></article><article><h4>API &amp; Data Integration</h4><p>Worked with REST APIs, structured data and document processing across frontend and backend components.</p></article><article><h4>AI-Assisted Workflows</h4><p>Contributed to API-assisted AI functionality with interfaces for human review and editing of generated content.</p></article><article><h4>Validation &amp; Reliability</h4><p>Worked on validation, error handling, automated testing and safeguards around processed and AI-generated data.</p></article><article><h4>Production Tooling</h4><p>Developed and refined internal tooling for inspecting and editing content within an operational interface.</p></article></div><details class="case-study-details"><summary>Design &amp; Technical Notes</summary><div class="case-study-subsection"><h4>Technical Stack</h4><dl class="technical-stack-list"><div><dt>Frontend</dt><dd><span>React</span><span>TypeScript</span><span>Vite</span></dd></div><div><dt>Backend</dt><dd><span>Python</span><span>FastAPI</span><span>Pydantic</span><span>REST APIs</span></dd></div><div><dt>AI &amp; Data</dt><dd><span>LLM/API Integration</span><span>Structured Data</span><span>JSON / JSON Schema</span><span>Document/Data Processing</span></dd></div><div><dt>Engineering</dt><dd><span>Validation</span><span>Error Handling</span><span>Automated Testing</span><span>Frontend/Backend Integration</span></dd></div></dl></div></details></section>
<section class="case-study-section case-study-result"><h3>Result</h3><p>The project brought several technical tasks into a more structured internal application. It gave me practical experience building software around AI capabilities, with interfaces, data handling and quality checks supporting their use.</p><p>The work demonstrates full-stack engineering, AI integration, structured data workflows, human-in-the-loop design and attention to production reliability.</p><p class="project-disclosure">Specific implementation details and internal workflows are intentionally omitted.</p></section>
`,
  "webxr-toolkit": `
<header class="case-study-header"><p class="case-study-kicker">UNIVERSITY PROJECT · WEBXR TOOL</p><h2 id="popup-title">WebXR Spatial Prototyping Toolkit</h2><p class="case-study-summary">A lightweight browser-based XR authoring tool for creating, transforming and restoring simple spatial scenes from desktop or a headset browser.</p><div class="popup-meta"><span>Browser-Based XR</span><span>A-Frame</span><span>JavaScript</span><span>Scene Persistence</span><span>Browser-Based XR Prototype</span><span>Interactive Scene Authoring</span><span>Scene Save &amp; Load</span><span>Desktop and Controller Input</span><span>Individual Delivery</span></div></header>
<section class="case-study-section project-quick-facts"><h3>Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Date</dt><dd>Summer Semester 2026</dd></div><div><dt>Project Type</dt><dd>Individual Project</dd></div><div><dt>Organisation</dt><dd>Darmstadt University of Applied Sciences</dd></div><div><dt>Programme</dt><dd>B.A. Augmented and Virtual Reality Design</dd></div><div><dt>Course</dt><dd>Expanded Realities · WebXR</dd></div><div><dt>Platform</dt><dd>Desktop Browser · WebXR-Capable Headset Browser</dd></div><div><dt>Engine</dt><dd>A-Frame 1.7.0</dd></div><div><dt>Technologies</dt><dd>HTML · CSS · JavaScript · WebXR · LocalStorage</dd></div></dl></section>
<figure class="popup-media case-study-primary-media"><video controls="" data-managed-video="" data-poster="images/panel.optimized.webp" height="464" muted="" playsinline="" preload="none" width="832"><source data-src="images/webxr.mp4" type="video/mp4"/>Your browser does not support the video element.</video><figcaption>The complete browser-based workflow covers object creation, spatial manipulation, colour editing and scene persistence.</figcaption></figure>
<section class="case-study-section case-study-info-panel"><h3 class="case-study-info-label">Context</h3><div class="case-study-info-content"><p>Early spatial ideas can lose momentum when every small change requires moving through an engine, a build and a headset test.</p><p class="">Explore whether browser-based spatial authoring can make early XR blockouts faster and more accessible before moving into a full Unity production pipeline.</p><p>The browser offered an opportunity to make simple XR blockouts more immediate and accessible before committing to a full production pipeline.</p><p><strong>WebXR Spatial Prototyping Toolkit</strong> lets users create, transform, recolour and restore spatial scenes from a desktop or headset browser. It was developed for the WebXR elective within Augmented and Virtual Reality Design (formerly known as Expanded Realities).</p></div></section>
<section class="case-study-section case-study-story"><h3>User Journey</h3><div class="experience-journey"><article class="experience-stage"><figure class="popup-media"><img alt="Controller selecting a primitive type from the WebXR spatial toolbar" decoding="async" height="446" loading="lazy" src="images/choose a primitive.gif" width="800"/><figcaption>The spatial toolbar lets the user choose a box, sphere or cylinder through controller-ray interaction.</figcaption></figure><p class="experience-stage-number">01</p><h4>Choose a Primitive</h4><p>Select a box, sphere or cylinder from the spatial toolbar.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Controller placing a primitive object onto the WebXR scene floor" decoding="async" height="446" loading="lazy" src="images/place object.gif" width="800"/><figcaption>The selected primitive is created directly at the controller ray’s intersection with the floor.</figcaption></figure><p class="experience-stage-number">02</p><h4>Place It in the Scene</h4><p>Point at the floor and create the object at the raycast intersection.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Selected primitive objects arranged in the WebXR scene" decoding="async" height="1080" loading="lazy" src="images/spawned and manipulated objects.optimized.webp" width="1920"/><figcaption>The selection marker and arranged primitives make the current scene state immediately visible.</figcaption></figure><p class="experience-stage-number">03</p><h4>Select an Object</h4><p>Point at a created object to select it and reveal the yellow selection marker.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Controller grabbing, rotating and scaling an object in the WebXR toolkit" decoding="async" height="446" loading="lazy" src="images/transform object.gif" width="800"/><figcaption>Grab, rotate and scale modes support direct spatial editing of the selected object.</figcaption></figure><p class="experience-stage-number">04</p><h4>Transform the Object</h4><p>Move, rotate or uniformly scale the selected object through desktop or controller input.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Controller changing the colour of a selected WebXR object" decoding="async" height="446" loading="lazy" src="images/change color.gif" width="800"/><figcaption>Colour presets provide immediate visual differentiation while building a simple spatial blockout.</figcaption></figure><p class="experience-stage-number">05</p><h4>Change Its Colour</h4><p>Apply one of three colour presets to distinguish objects in the blockout.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="WebXR scene being saved, cleared and restored from browser storage" decoding="async" height="446" loading="lazy" src="images/save and reload.gif" width="800"/><figcaption>The scene is saved to browser storage, cleared and reconstructed from its serialized object data.</figcaption></figure><p class="experience-stage-number">06</p><h4>Save and Restore the Scene</h4><p>Save the object data locally, clear the visible scene and reconstruct the saved state.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="WebXR spatial help panel showing desktop and controller controls" decoding="async" height="1080" loading="lazy" src="images/help panel.optimized.webp" width="1920"/><figcaption>The spatial help panel explains creation, transformation, persistence and platform-specific controls.</figcaption></figure><p class="experience-stage-number">07</p><h4>Access Help</h4><p>Open the in-scene guide to review desktop and controller interactions.</p></article></div></section>
<section class="case-study-section case-study-contribution"><h3>My Contribution</h3><p>As an individual project, I designed and implemented the complete toolkit and its interaction flow.</p><div class="contribution-grid"><article><h4>Concept &amp; Experience Design</h4><p>Defined the spatial-authoring workflow around creation, selection, transformation, colour and persistence.</p></article><article><h4>WebXR Development</h4><p>Built the A-Frame scene, dynamic entity creation, raycasting and tracked-controller interactions.</p></article><article><h4>Interaction &amp; Interface Design</h4><p>Created the world-space toolbar, selection feedback, status messages and integrated help panel.</p></article><article><h4>Scene Persistence &amp; Testing</h4><p>Implemented JSON serialization, validation, reconstruction, browser storage and desktop fallback testing.</p></article></div><details class="case-study-details"><summary>Design &amp; Technical Notes</summary><div class="case-study-subsection"><h4>Design Decisions</h4><div class="case-study-card-grid"><article><h5>Browser Before Native Build</h5><p>A static web experience reduces the setup needed for testing early spatial ideas before committing them to a Unity project.</p></article><article><h5>A-Frame for Rapid Prototyping</h5><p>Declarative scene entities and built-in XR abstractions made it possible to focus on authoring interactions rather than low-level rendering setup.</p></article><article><h5>Spatial Interface with Desktop Fallback</h5><p>The same world-space toolbar supports controller-ray interaction in XR and mouse interaction during desktop development.</p></article><article><h5>Lightweight Local Persistence</h5><p>LocalStorage preserves a scene without requiring accounts, a backend service or a custom file format.</p></article></div></div><div class="case-study-subsection"><h4>Technical Implementation</h4><div class="case-study-card-grid"><article><h5>Dynamic Object Factory</h5><p>A shared <code>createObject()</code> function creates boxes, spheres and cylinders and restores saved entities through the same implementation path.</p></article><article><h5>Raycast Placement and Selection</h5><p>A-Frame raycasters target the placement floor and dynamically created <code>.clickable</code> entities for object creation and selection.</p></article><article><h5>Desktop and Controller Input</h5><p>Keyboard controls, controller rays, grip events and thumbstick input converge on shared movement, rotation and scaling functions.</p></article><article><h5>Controller-Relative Grabbing</h5><p>A custom A-Frame component preserves the object’s grab offset and converts controller world coordinates back into local scene coordinates.</p></article><article><h5>Scene Serialization</h5><p>Object type, position, rotation, scale and colour are converted to JSON, validated and reconstructed from browser LocalStorage.</p></article></div></div><div class="case-study-subsection"><h4>Process</h4><div class="case-study-card-grid"><article><h5>Authoring Flow</h5><p>Choose primitive → place → select → transform → recolour → save → reset → load</p></article><article><h5>Persistence Flow</h5><p>A-Frame entity → serializable scene data → JSON → LocalStorage → validated reconstruction</p></article></div></div></details></section>
<section class="case-study-section case-study-result"><h3>Result</h3><p>The completed browser-based toolkit connects object creation, selection, transformation, feedback and persistence in one coherent spatial-authoring flow.</p><p>It demonstrates how early spatial prototypes can be tested directly in a browser before moving to a heavier Unity build and headset pipeline.</p></section>
<section class="case-study-section project-links-section"><h3>Project Links</h3><div class="project-external-links"><a class="project-external-link" href="https://web-xr-projects-antonela-matanovic-3cc9f3.h-da.io" rel="noopener" target="_blank"><span>Launch WebXR Experience</span><span aria-hidden="true">↗</span></a></div></section>
`,
  "blade-of-the-dawn": `
<header class="case-study-header"><p class="case-study-kicker">UNIVERSITY PROJECT · THIRD-PERSON GAME</p><h2 id="popup-title">Blade of the Dawn</h2><p class="case-study-summary">A complete third-person action-adventure built around exploration, melee combat and connected gameplay systems.</p><div class="popup-meta"><span>Third-Person Game</span><span>Unity</span><span>C#</span><span>Enemy Behaviour</span><span>Complete Playable Game</span><span>Three Connected Scenes</span><span>Individual Delivery</span></div></header>
<section class="case-study-section project-quick-facts"><h3>Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Date</dt><dd>Summer Semester 2024</dd></div><div><dt>Project Type</dt><dd>Individual Project</dd></div><div><dt>Organisation</dt><dd>Darmstadt University of Applied Sciences</dd></div><div><dt>Programme</dt><dd>B.A. Augmented and Virtual Reality Design</dd></div><div><dt>Course</dt><dd>Expanded Realities · T2</dd></div><div><dt>Platform</dt><dd>Desktop</dd></div><div><dt>Engine</dt><dd>Unity</dd></div><div><dt>Technologies</dt><dd>C# · NavMesh · Animator · Scriptable Objects</dd></div></dl></section>
<section class="case-study-primary-media"><h3>Full Gameplay Walkthrough</h3><div class="video-container"><iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" loading="lazy" src="https://www.youtube-nocookie.com/embed/eEEXLtWiqOk" title="Blade of the Dawn full gameplay walkthrough"></iframe></div></section>
<section class="case-study-section case-study-info-panel"><h3 class="case-study-info-label">Context</h3><div class="case-study-info-content"><p>Building isolated mechanics does not reveal what happens when movement, combat, enemy behaviour, interface and progression must support one complete player journey.</p><p class="">Build a complete third-person action-adventure by connecting exploration, combat, enemy behaviour, collectibles and scene progression.</p><p>A self-contained game created an opportunity to explore those dependencies from the first scene to the final encounter.</p><p><strong>Blade of the Dawn</strong> is a third-person action-adventure set across a Japanese-inspired village and castle, connecting exploration, character encounters, collectibles and melee combat into one playable experience.</p></div></section>
<section class="case-study-section case-study-story"><h3>User Journey</h3><figure class="popup-media"><img alt="Guarded entrance to the emperor village at night" class="project-hero-image" decoding="async" height="804" loading="lazy" src="images/emperor village entrance.optimized.webp" width="1430"/><figcaption>The guarded entrance introduces the final destination and raises the visual stakes of the journey.</figcaption></figure><div class="experience-journey"><article class="experience-stage"><figure class="popup-media"><img alt="Player arriving at the forest-edge spawn point" decoding="async" height="788" loading="lazy" src="images/spawn point.png" width="1400"/><figcaption>The opening viewpoint establishes the player, camera and first route through the environment.</figcaption></figure><p class="experience-stage-number">01</p><h4>Arrive</h4><p>Begin at the forest edge and enter the first playable area.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Wide view across the lake village" decoding="async" height="807" loading="lazy" src="images/lake village.optimized.webp" width="1434"/><figcaption>The broad layout supports exploration while visible landmarks preserve orientation.</figcaption></figure><p class="experience-stage-number">02</p><h4>Explore the Village</h4><p>Navigate connected paths, buildings and landmarks.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Player meeting Miku inside a village building" decoding="async" height="796" loading="lazy" src="images/miku.png" width="796"/><figcaption>NPC encounters break up exploration and give the journey a more personal focus.</figcaption></figure><p class="experience-stage-number">03</p><h4>Meet NPCs</h4><p>Interact with characters who provide context and direction.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Glowing health potion collectible" decoding="async" height="761" loading="lazy" src="images/heal potion.png" width="1353"/><figcaption>The bright collectible silhouette remains readable inside the dark environment.</figcaption></figure><p class="experience-stage-number">04</p><h4>Collect Resources</h4><p>Find health items placed throughout the environment.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Third-person player facing an enemy guard" decoding="async" height="840" loading="lazy" src="images/player view.optimized.webp" width="1507"/><figcaption>The camera keeps the character, enemy and surrounding combat space visible.</figcaption></figure><p class="experience-stage-number">05</p><h4>Fight Enemy Guards</h4><p>Use a three-stage melee combo against patrolling enemies.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Elevated route through the emperor village" decoding="async" height="796" loading="lazy" src="images/emperor village2.optimized.webp" width="1416"/><figcaption>The elevated route and denser architecture make progression toward the finale visually clear.</figcaption></figure><p class="experience-stage-number">06</p><h4>Reach the Emperor’s Village</h4><p>Progress through connected scenes toward the final area.</p></article></div><div class="case-study-subsection"><h4>Design Decisions</h4><div class="case-study-card-grid"><article><figure class="popup-media"><img alt="Enemy guard in an active combat stance" decoding="async" height="787" loading="lazy" src="images/guard.png" width="787"/><figcaption>The guard’s stance and health feedback communicate an active combat state at a glance.</figcaption></figure><h5>Readable Combat</h5><p>A three-stage melee combo and clear enemy silhouette make attack timing and encounter distance easier to read.</p></article><article><figure class="popup-media"><img alt="Detailed architecture and props in the first village" decoding="async" height="805" loading="lazy" src="images/first village4.optimized.webp" width="1432"/><figcaption>Small environmental details make the village feel inhabited rather than purely functional.</figcaption></figure><h5>Environmental Storytelling</h5><p>Architecture, lighting and placed props suggest a lived-in settlement without interrupting play with exposition.</p></article><article><figure class="popup-media"><img alt="Stairs and framed route through the first village" decoding="async" height="808" loading="lazy" src="images/first village3.optimized.webp" width="1436"/><figcaption>The route uses elevation and framing to pull attention toward the next objective.</figcaption></figure><h5>Progression Through Space</h5><p>Paths, stairs and gateways frame the next destination and guide the player between encounters.</p></article></div></div><div class="case-study-subsection"><h4>Process &amp; Gallery</h4><h5>Environment Composition</h5><div class="popup-gallery popup-gallery--two"><figure><img alt="Layered buildings along the main village route" decoding="async" height="792" loading="lazy" src="images/first village2.optimized.webp" width="1408"/><figcaption>Layered architecture creates visual depth across the main village route.</figcaption></figure><figure><img alt="Vegetation and foreground structures framing a village path" decoding="async" height="798" loading="lazy" src="images/first village5.optimized.webp" width="1419"/><figcaption>Foreground structures and vegetation frame the playable space without blocking navigation.</figcaption></figure></div><h5>World Building</h5><div class="popup-gallery popup-gallery--single"><figure><img alt="Wide overview of the first village and forest boundary" decoding="async" height="817" loading="lazy" src="images/first village.optimized.webp" width="1452"/><figcaption>The wide view shows how buildings, paths and forest boundaries combine into one explorable environment.</figcaption></figure></div><h5>Narrative &amp; Interface</h5><div class="popup-gallery popup-gallery--two"><figure><img alt="Opening story screen describing the player mission" decoding="async" height="845" loading="lazy" src="images/story screen.optimized.webp" width="1502"/><figcaption>The story screen introduces the occupation, mission and final objective before gameplay begins.</figcaption></figure><figure><img alt="Blade of the Dawn main menu" decoding="async" height="841" loading="lazy" src="images/main menu.optimized.webp" width="1495"/><figcaption>The main menu establishes the game’s visual tone before the player enters the world.</figcaption></figure></div><h5>Character Presentation</h5><div class="popup-gallery popup-gallery--single"><figure><img alt="Miku staged inside an authored interaction space" decoding="async" height="813" loading="lazy" src="images/miku2.optimized.webp" width="813"/><figcaption>The indoor view shows how the NPC is staged within an authored interaction space.</figcaption></figure></div></div><div class="popup-gallery popup-gallery--two"><figure class="popup-media"><img alt="Health potion placed beside an optional village route" decoding="async" height="792" loading="lazy" src="images/heal potion2.optimized.webp" width="1408"/><figcaption>World placement turns recovery into a reward for exploring optional spaces.</figcaption></figure><figure class="popup-media"><img alt="Dense final settlement in the emperor village" decoding="async" height="805" loading="lazy" src="images/emperor village.optimized.webp" width="1430"/><figcaption>The final settlement adds density while retaining the game’s established visual language.</figcaption></figure><figure class="popup-media"><img alt="Landmarks and branching routes in the lake village" decoding="async" height="780" loading="lazy" src="images/lake village2.optimized.webp" width="1386"/><figcaption>Distinct structures help the player recognise routes and important areas from a distance.</figcaption></figure></div></section>
<section class="case-study-section case-study-contribution"><h3>My Contribution</h3><p>As an individual project, I designed and implemented the complete game, its systems and playable world.</p><div class="contribution-grid"><article><h4>Game Design</h4><p>Created the concept, progression structure, world layout and core gameplay loop.</p></article><article><h4>Gameplay Development</h4><p>Implemented movement, melee combat, enemy behaviour, pickups and player interaction.</p></article><article><h4>Systems Integration</h4><p>Connected scenes, UI, animation, audio, events and progression state.</p></article><article><h4>Testing &amp; Polish</h4><p>Debugged combat timing, navigation, scene flow and complete-build stability.</p></article></div><details class="case-study-details"><summary>Design &amp; Technical Notes</summary><div class="case-study-subsection"><h4>Technical Implementation</h4><div class="case-study-card-grid"><article><h5>Player &amp; Combat</h5><p>A third-person controller, Animator states and trigger-based hit detection support movement and the three-stage melee combo.</p></article><article><h5>Enemy Behaviour</h5><p>NavMesh agents move through idle, patrol, chase, attack, damage and death states.</p></article><article><h5>Pickups &amp; Events</h5><p>Scriptable Objects and Unity Events connect health pickups with gameplay, UI and audio feedback.</p></article><article><h5>Scene Progression</h5><p>Shared state and scene transitions preserve progression across three connected locations.</p></article><article><h5>Level Structure</h5><p>Landmarks, route width and environmental framing support navigation through the larger playable spaces.</p></article></div></div></details></section>
<section class="case-study-section case-study-result"><h3>Result</h3><p>The result is a complete playable game connecting player control, combat, enemy states, events, interface and progression across three scenes.</p></section>
<section class="case-study-section project-links-section"><h3>Project Links</h3><div class="project-external-links"><a class="project-external-link" href="https://github.com/antonelamatanovich/Blade-Of-The-Dawn" rel="noopener" target="_blank"><span>View GitHub Repository</span><span aria-hidden="true">↗</span></a></div></section>
`,  "retro-snake": `
<header class="case-study-header"><p class="case-study-kicker">UNIVERSITY PROJECT · SOFTWARE PROJECT</p><h2 id="popup-title">Retro Snake</h2><p class="case-study-summary">A complete desktop Snake game that established the programming foundation for my later interactive work.</p><div class="popup-meta"><span>Desktop Game</span><span>Processing</span><span>Java</span><span>Complete Desktop Game</span><span>Five Application States</span><span>Individual Delivery</span></div></header>
<section class="case-study-section project-quick-facts"><h3>Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Date</dt><dd>Winter Semester 2023/2024</dd></div><div><dt>Project Type</dt><dd>Individual Project</dd></div><div><dt>Organisation</dt><dd>Darmstadt University of Applied Sciences</dd></div><div><dt>Programme</dt><dd>B.A. Augmented and Virtual Reality Design</dd></div><div><dt>Course</dt><dd>Expanded Realities · T1</dd></div><div><dt>Platform</dt><dd>Desktop</dd></div><div><dt>Engine</dt><dd>Processing · Java Mode</dd></div><div><dt>Technologies</dt><dd>Java · Object-Oriented Programming · Game State Management</dd></div></dl></section>
<figure class="popup-media case-study-primary-media"><img alt="Retro Snake gameplay showing movement, collection and score" class="project-hero-image project-hero-image--contain" decoding="async" height="628" loading="lazy" src="images/retro snake.gif" width="800"/><figcaption>The loop combines movement, collection, growth, scoring and collision.</figcaption></figure>
<section class="case-study-section case-study-info-panel"><h3 class="case-study-info-label">Context</h3><div class="case-study-info-content"><p>My first programming challenge was not simply to make a character move, but to turn a familiar rule set into a complete and reliable application loop.</p><p class="">Recreate the classic Snake loop while learning the core programming structures behind a complete interactive application.</p><p>The clarity of Snake made it possible to focus on how input, state, feedback and replay work together.</p><p><strong>Retro Snake</strong> combines the classic arcade loop with onboarding, menus and a monochrome pixel-art presentation. The project established a practical foundation for my later work in Unity and XR.</p></div></section>
<section class="case-study-section case-study-story"><h3>User Journey</h3><div class="experience-journey"><article class="experience-stage"><figure class="popup-media"><img alt="Retro Snake menu" decoding="async" height="971" loading="lazy" src="images/start screen.png" width="971"/><figcaption>The menu introduces the application flow.</figcaption></figure><p class="experience-stage-number">01</p><h4>Start the Game</h4><p>Choose Play, Controls or Rules.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Retro Snake controls" decoding="async" height="973" loading="lazy" src="images/help screen.png" width="973"/><figcaption>The controls explain movement.</figcaption></figure><p class="experience-stage-number">02</p><h4>Move Across the Grid</h4><p>Use four-direction arrow input.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Retro Snake collecting food" decoding="async" height="628" loading="lazy" src="images/retro snake.gif" width="800"/><figcaption>The live grid makes the core loop immediate.</figcaption></figure><p class="experience-stage-number">03</p><h4>Collect Food</h4><p>Reach grid-aligned food.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Retro Snake rules" decoding="async" height="969" loading="lazy" src="images/rules screen.png" width="976"/><figcaption>The rules clarify loss conditions.</figcaption></figure><p class="experience-stage-number">04</p><h4>Avoid Collisions</h4><p>Walls or the body end the run.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Retro Snake game over" decoding="async" height="987" loading="lazy" src="images/game over.png" width="1243"/><figcaption>The final state offers retry and back navigation.</figcaption></figure><p class="experience-stage-number">05</p><h4>Replay</h4><p>Retry or return to the menu.</p></article></div></section>
<section class="case-study-section case-study-contribution"><h3>My Contribution</h3><p>As an individual project, I designed and implemented the complete game, interface and application flow.</p><div class="contribution-grid"><article><h4>Game Design</h4><p>Designed the rules and flow.</p></article><article><h4>Programming</h4><p>Built movement, growth, food, collisions and scoring.</p></article><article><h4>Interface &amp; State Flow</h4><p>Created menus, guidance and replay states.</p></article><article><h4>Testing &amp; Refinement</h4><p>Tested gameplay and reset behaviour.</p></article></div><details class="case-study-details"><summary>Design &amp; Technical Notes</summary><div class="case-study-subsection"><h4>Design Decisions</h4><div class="case-study-card-grid"><article><h5>Grid-Based Movement</h5><p>Fixed steps preserve classic Snake rhythm.</p></article><article><h5>Guided Onboarding</h5><p>Controls and rules prepare new players.</p></article><article><h5>Reliable Replay</h5><p>All gameplay values reset together.</p></article></div></div><div class="case-study-subsection"><h4>Technical Implementation</h4><div class="case-study-card-grid"><article><h5>Game Loop</h5><p>Processing handles input, updates and rendering.</p></article><article><h5>Grid Movement</h5><p>Fixed steps prevent reversal.</p></article><article><h5>Body Representation</h5><p>Coordinate arrays support following and growth.</p></article><article><h5>Collision &amp; Scoring</h5><p>Checks control pickups, score and game over.</p></article><article><h5>State Management</h5><p>One variable connects five states.</p></article><article><h5>Replay</h5><p>Reset logic restores gameplay data.</p></article></div></div></details></section>
<section class="case-study-section case-study-result"><h3>Result</h3><p>The finished application combines movement, arrays, collision detection, menus and predictable reset logic into a complete game loop.</p><p class="project-attribution">Third-party visual assets and fonts were integrated without claiming authorship.</p></section>
<section class="case-study-section project-links-section"><h3>Project Links</h3><div class="project-external-links"><a class="project-external-link" href="https://github.com/antonelamatanovich/Retro-Snake" rel="noopener" target="_blank"><span>View GitHub Repository</span><span aria-hidden="true">↗</span></a></div></section>
`,
  "discovering-barite": `
<header class="case-study-header"><p class="case-study-kicker">UNIVERSITY PROJECT · MOBILE AUGMENTED REALITY</p><h2 id="popup-title">Discovering Barite</h2><p class="case-study-summary">A place-based mobile Augmented Reality experience revealing the hidden geology and mining history of the Spatschlucht.</p><div class="popup-meta"><span>Mobile Augmented Reality</span><span>Unity</span><span>Vuforia</span><span>Android</span><span>Working Android Prototype</span><span>On-Site Validation</span><span>Guided Augmented Reality Experience</span><span>Three-Person Team Delivery</span></div></header>
<section class="case-study-section project-quick-facts"><h3>Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Date</dt><dd>Winter Semester 2025/2026</dd></div><div><dt>Project Type</dt><dd>Team Project</dd></div><div><dt>Organisation</dt><dd>Darmstadt University of Applied Sciences</dd></div><div><dt>Programme</dt><dd>B.A. Augmented and Virtual Reality Design</dd></div><div><dt>Course</dt><dd>Expanded Realities · Project 5</dd></div><div><dt>Platform</dt><dd>Android</dd></div><div><dt>Engine</dt><dd>Unity · URP</dd></div><div><dt>Technologies</dt><dd>Vuforia · Image Tracking · Clipping Shader</dd></div></dl></section>
<figure class="popup-media case-study-primary-media"><video aria-label="Discovering Barite project trailer" controls="" data-managed-video="" height="720" loop="" muted="" playsinline="" preload="none" width="1280"><source data-src="images/Discovering Barite.mp4" type="video/mp4"/>Your browser does not support the video element.</video><figcaption>On-site Augmented Reality reveals hidden geological structures.</figcaption></figure>
<section class="case-study-section case-study-info-panel"><h3 class="case-study-info-label">Context</h3><div class="case-study-info-content"><p>Visitors could walk through the Spatschlucht without ever seeing the geological and mining history hidden beneath the rock.</p><p class="">Help visitors understand hidden geological structures through a short, dependable on-site mobile Augmented Reality journey.</p><p>The site created an opportunity to use a familiar device as a window into processes that are normally invisible.</p><p><strong>Discovering Barite</strong> guides visitors through short questions before revealing the barite-bearing structure within a reconstructed rock face. Image tracking anchors the experience directly to the existing information board, keeping the digital story connected to the place.</p></div></section>
<section class="case-study-section case-study-story"><h3>User Journey</h3><div class="experience-journey"><article class="experience-stage"><figure class="popup-media"><img alt="Location of the Discovering Barite experience at the Spatschlucht" decoding="async" height="1080" loading="lazy" src="images/location.optimized.webp" width="1920"/><figcaption>The introduction situates the experience within the Spatschlucht before the on-site interaction begins.</figcaption></figure><p class="experience-stage-number">01</p><h4>Introduction</h4><p>Learn why barite matters at the Spatschlucht and what the experience will reveal.</p></article><article class="experience-stage"><figure class="popup-media"><video aria-label="Spatschlucht information board used as the Discovering Barite image target" autoplay="" class="motion-media" data-managed-video="" data-motion-key="scanning the marker" data-poster="images/scanning the marker.poster.webp" height="450" loop="" muted="" playsinline="" preload="none" width="800"><source data-src="images/scanning the marker.loop.webm" type="video/webm"/><source data-src="images/scanning the marker.loop.mp4" type="video/mp4"/></video><figcaption>The existing sign provides a recognisable and repeatable reference for positioning the virtual geology.</figcaption></figure><p class="experience-stage-number">02</p><h4>Scan the Marker</h4><p>Point the phone at the selected reference on the existing information board to establish a local Augmented Reality anchor.</p></article><article class="experience-stage"><figure class="popup-media experience-stage-media--portrait"><video aria-label="Visitor answering geological questions inside the Discovering Barite mobile Augmented Reality experience" autoplay="" class="motion-media" data-managed-video="" data-motion-key="answering questions" data-poster="images/answering questions.poster.webp" height="720" loop="" muted="" playsinline="" preload="none" width="1280"><source data-src="images/answering questions.loop.webm" type="video/webm"/><source data-src="images/answering questions.loop.mp4" type="video/mp4"/></video><figcaption>The guided questions focus attention on the site before the final geological reveal.</figcaption></figure><p class="experience-stage-number">03</p><h4>Answer the Questions</h4><p>Follow three short prompts that direct attention towards geological formation, erosion and traces of mining.</p></article><article class="experience-stage"><figure class="popup-media experience-stage-media--portrait"><video aria-label="Mobile slider slicing through a reconstructed rock face to reveal the barite layer" autoplay="" class="motion-media" data-managed-video="" data-motion-key="slicing" data-poster="images/slicing.poster.webp" height="720" loop="" muted="" playsinline="" preload="none" width="1280"><source data-src="images/slicing.loop.webm" type="video/webm"/><source data-src="images/slicing.loop.mp4" type="video/mp4"/></video><figcaption>The controlled slice transforms an invisible geological structure into a readable on-site interaction.</figcaption></figure><p class="experience-stage-number">04</p><h4>Reveal the Barite</h4><p>Move through the reconstructed rock face to reveal the barite-bearing structure hidden inside.</p></article></div></section>
<section class="case-study-section case-study-contribution"><h3>My Contribution</h3><div class="contribution-grid"><article><h4>UI &amp; Interaction Design</h4><p>Designed the question interface and flow.</p></article><article><h4>Development &amp; Integration</h4><p>Connected events, states and questions.</p></article><article><h4>Tracking &amp; Testing</h4><p>Developed and tested Vuforia anchoring.</p></article><article><h4>Experience Design</h4><p>Helped evolve the concept and storyboard.</p></article><article><h4>Project Coordination</h4><p>Supported planning and reviews.</p></article></div><details class="case-study-details"><summary>Design &amp; Technical Notes</summary><div class="case-study-subsection"><h4>Design Decisions</h4><div class="case-study-card-grid"><article><h5>Image Tracking Instead of GPS</h5><p>A local target gives repeatable offline alignment.</p></article><article><h5>Guided On-Site Interaction</h5><p>A tutorial and questions keep the visit clear.</p></article><article><h5>One Readable Rock Face</h5><p>Testing replaced two walls with one cross-section.</p></article><article><h5>Indoor Simulation for Iteration</h5><p>A scan enabled testing between visits.</p></article></div></div><div class="case-study-subsection"><h4>Technical Implementation</h4><div class="case-study-card-grid"><article><h5>Tracking &amp; Anchoring</h5><p>Vuforia recognises and anchors the target.</p></article><article><h5>Geological Slice</h5><p>A URP shader exposes the barite interior.</p></article><article><h5>Experience State Flow</h5><p>Unity manages questions, progress and UI.</p></article><article><h5>Indoor Testing</h5><p>A 3D scan supports placement checks.</p></article><article><h5>Mobile Pipeline</h5><p>The final build targets Android.</p></article></div></div></details></section>
<section class="case-study-section case-study-credits"><h3>Team &amp; Credits</h3><ul class="case-study-credit-list"><li>Antonela Matanović</li><li>Jacopo Perilli</li><li>Karam Al Sawaftah</li></ul></section>
<section class="case-study-section case-study-result"><h3>Result</h3><p>Replacing GPS with a local image target and using indoor simulation made the on-site Augmented Reality experience more dependable without losing its connection to the gorge.</p><p>A guided sequence presents the geological subject within a short visitor experience.</p></section>
<section class="case-study-section project-links-section"><h3>Project Links</h3><div class="project-external-links"><a class="project-external-link" href="https://www.youtube.com/watch?v=iN2uR1dm6d4" rel="noopener" target="_blank"><span>Watch Project Video</span><span aria-hidden="true">↗</span></a><a class="project-external-link" href="https://geo-naturpark.net" rel="noopener" target="_blank"><span>Geo-Naturpark Website</span><span aria-hidden="true">↗</span></a></div></section>
`,
  arvi: `
<header class="case-study-header"><p class="case-study-kicker">UNIVERSITY PROJECT · MIXED REALITY AI</p><h2 id="popup-title">ARVI – Autonomous Robotic Virtual Intelligence</h2><p class="case-study-summary">A fully local mixed-reality AI companion designed for students in the Augmented and Virtual Reality Design programme at Darmstadt University of Applied Sciences.</p><div class="popup-meta"><span>Mixed Reality</span><span>Meta Quest 3</span><span>Unity</span><span>Qwen 2.5</span><span>LoRA Fine-tuning</span><span>Local LLM</span><span>llama.cpp</span><span>Team Project</span></div></header>
<section class="case-study-section project-quick-facts"><h3>Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Date</dt><dd>Summer Semester 2026</dd></div><div><dt>Project Type</dt><dd>Team Project</dd></div><div><dt>Organisation</dt><dd>Darmstadt University of Applied Sciences</dd></div><div><dt>Programme</dt><dd>B.A. Augmented and Virtual Reality Design</dd></div><div><dt>Course</dt><dd>Expanded Realities · Project 6</dd></div><div><dt>Platform</dt><dd>Meta Quest 3 · Mixed Reality</dd></div><div><dt>Engine</dt><dd>Unity</dd></div><div><dt>Technologies</dt><dd>Qwen 2.5 · LoRA Fine-tuning · llama.cpp · GGUF · CustomGPT · Python · JSONL · Local LLM</dd></div></dl></section>
<figure class="popup-media case-study-primary-media"><div class="video-container"><iframe allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen="" loading="lazy" src="https://www.youtube-nocookie.com/embed/5-wy2LQBra0?autoplay=0&amp;mute=1&amp;loop=1&amp;playlist=5-wy2LQBra0&amp;controls=1&amp;playsinline=1" title="ARVI project trailer"></iframe></div><figcaption>ARVI project trailer.</figcaption></figure>
<section class="case-study-section case-study-info-panel"><h3 class="case-study-info-label">Context</h3><div class="case-study-info-content"><p>A study programme can be difficult to understand through a webpage or a brief laboratory tour, especially when new students and visitors arrive with very different questions.</p><p>The Augmented and Virtual Reality Design programme saw an opportunity to make that introduction conversational, spatial and available beyond a single open day.</p><p>ARVI was designed as a long-term mixed reality companion that welcomes visitors, supports students and represents the programme inside its own laboratory.</p><p>A consistent personality, modular knowledge base and locally deployed language model keep those conversations maintainable, private and independent from commercial cloud services.</p><p class="">The project was developed for students in the B.A. Augmented and Virtual Reality Design programme at Darmstadt University of Applied Sciences, based at Media Campus Dieburg. Its dedicated Mixed Reality laboratory supports XR teaching, demonstrations and prototyping. Visitors wear a Meta Quest headset and meet ARVI as a shared spatial companion rather than interacting with a traditional chatbot.</p></div></section>
<section class="case-study-section case-study-story"><h3>User Journey</h3><div class="experience-journey"><article class="experience-stage"><figure class="popup-media"><img alt="Prof. Dr. Frank Gabler wearing a Meta Quest headset while testing ARVI" decoding="async" height="1080" loading="lazy" src="images/arvi user testing.optimized.webp" width="1920"/><figcaption>Prof. Dr. Frank Gabler meets ARVI during the final user evaluation session.</figcaption></figure><p class="experience-stage-number">01</p><h4>Meet ARVI</h4><p>The visitor puts on a Meta Quest headset and meets a floating mixed reality assistant sharing the physical laboratory.</p></article><article class="experience-stage"><figure class="popup-media"><video aria-label="Visitor entering the mixed reality experience and approaching ARVI" autoplay="" class="motion-media" data-managed-video="" data-motion-key="user arriving" data-poster="images/user arriving.poster.webp" height="450" loop="" muted="" playsinline="" preload="none" width="800"><source data-src="images/user arriving.loop.webm" type="video/webm"/><source data-src="images/user arriving.loop.mp4" type="video/mp4"/></video><figcaption>The visitor enters the shared mixed reality space before beginning a natural conversation.</figcaption></figure><p class="experience-stage-number">02</p><h4>Ask Questions</h4><p>The visitor speaks naturally instead of navigating menus or learning commands.</p></article><article class="experience-stage"><figure class="popup-media"><video aria-label="Visitor asking ARVI questions and receiving contextual answers" autoplay="" class="motion-media" data-managed-video="" data-motion-key="ask questions" data-poster="images/ask questions.poster.webp" height="450" loop="" muted="" playsinline="" preload="none" width="800"><source data-src="images/ask questions.loop.webm" type="video/webm"/><source data-src="images/ask questions.loop.mp4" type="video/mp4"/></video><figcaption>Responses combine programme knowledge with ARVI’s consistent conversational personality.</figcaption></figure><p class="experience-stage-number">03</p><h4>Receive Contextual Answers</h4><p>ARVI responds with a consistent personality and adapts its explanations to students, visitors and project-related questions.</p></article><article class="experience-stage"><figure class="popup-media"><video aria-label="Visitor exploring information about the Augmented and Virtual Reality Design programme through ARVI" autoplay="" class="motion-media" data-managed-video="" data-motion-key="user asking questions 2" data-poster="images/user asking questions 2.poster.webp" height="450" loop="" muted="" playsinline="" preload="none" width="800"><source data-src="images/user asking questions 2.loop.webm" type="video/webm"/><source data-src="images/user asking questions 2.loop.mp4" type="video/mp4"/></video><figcaption>The same conversational interface supports broader exploration of the programme and its facilities.</figcaption></figure><p class="experience-stage-number">04</p><h4>Explore the Programme</h4><p>Students and visitors learn about the study programme, laboratories, professors and ongoing work through conversation.</p></article></div><figure class="popup-media popup-media--narrow"><img alt="ARVI project poster explaining the companion, its audience and project goals" decoding="async" height="1440" loading="lazy" src="images/arvi poster.optimized.webp" width="1080"/><figcaption>Project poster presented during the public exhibition at the Media Campus Dieburg.</figcaption></figure></section>
<section class="case-study-section case-study-contribution"><h3>My Contribution</h3><div class="contribution-grid"><article><h4>Designed</h4><p>Knowledge architecture, behavioural dataset structure and modular content separation.</p></article><article><h4>Generated</h4><p>Fine-tuning conversations using a dedicated CustomGPT workflow constrained for structured JSONL output.</p></article><article><h4>Fine-tuned</h4><p>Implemented the LoRA adaptation workflow for the Qwen 2.5 model.</p></article><article><h4>Merged &amp; Deployed</h4><p>Merged the trained adapter, generated the GGUF runtime model and validated local inference with llama.cpp.</p></article><article><h4>Documented</h4><p>Created the training workflow, deployment pipeline and technical documentation for future development.</p></article></div><details class="case-study-details"><summary>Design &amp; Technical Notes</summary><div class="case-study-subsection"><h4>Design Decisions</h4><div class="case-study-card-grid"><article><h5>Long-lasting AI Personality</h5><p>ARVI was designed as a permanent member of the study programme rather than a prototype for a single semester.</p></article><article><h5>Behaviour over Memorisation</h5><p>Knowledge comes from retrieval while personality and coaching behaviour are learned through fine-tuning.</p></article><article><h5>Local-first Architecture</h5><p>Local operation keeps the experience independent, privacy-friendly and deployable inside the university.</p></article><article><h5>Knowledge Separation</h5><p>Knowledge, prompts and behavioural training remain independent for easier maintenance.</p></article><article><h5>Mixed Reality Presence</h5><p>Meeting a floating companion inside the laboratory creates a stronger programme identity than opening a chatbot in a browser.</p></article><article><h5>Embodied Interaction</h5><p>Instead of interacting with another browser chatbot, visitors meet ARVI as a spatial companion sharing the same physical environment. The mixed reality format turns the assistant into a social presence rather than another application window.</p></article></div></div><div class="case-study-subsection"><h4>Challenges</h4><div class="case-study-card-grid"><article><h5>Behaviour and Knowledge</h5><p>Separating personality and coaching behaviour from factual information.</p></article><article><h5>Personality Consistency</h5><p>Keeping ARVI recognisable across hundreds of conversations.</p></article><article><h5>Reusable Knowledge</h5><p>Keeping updateable information out of behavioural training.</p></article><article><h5>Efficient Training</h5><p>Reducing GPU requirements through LoRA fine-tuning.</p></article><article><h5>Local Deployment</h5><p>Preparing the final model for a dependable on-site runtime.</p></article></div></div></details></section>
<section class="case-study-section case-study-credits"><h3>Team &amp; Credits</h3><ul class="case-study-credit-list"><li>Karam Alsawaftah</li><li>Jacopo Perilli</li><li>Antonela Matanović</li><li>Riccardo Liguori</li><li>Mirabella Hohenlohe Langenburg</li><li>Ivan Fesenko</li></ul></section>
<section class="case-study-section case-study-result"><h3>Result</h3><p>Successfully deployed a local mixed reality AI companion.</p><p>Created a reusable behavioural fine-tuning workflow.</p><p>Developed a modular knowledge architecture for future updates.</p><p>Presented and demonstrated ARVI during the final public exhibition.</p><p>Evaluated the experience through user testing with students and professors.</p></section>
<section class="case-study-section project-links-section"><h3>Project Links</h3><div class="project-external-links"><a class="project-external-link" href="https://youtu.be/5-wy2LQBra0?si=31sKKhfeyBfHWSOF" rel="noopener" target="_blank"><span>Watch Trailer</span><span aria-hidden="true">↗</span></a></div></section>
`,  "animal-garden": `
<header class="case-study-header"><p class="case-study-kicker">VIDEOREALITY GMBH · INTERACTIVE MEDIA INSTALLATION</p><h2 id="popup-title">Animal Garden</h2><p class="case-study-summary">A participatory installation transforming visitor drawings into animated creatures in a shared projected garden.</p><div class="popup-meta"><span>Interactive Media Installation</span><span>Unity</span><span>OpenCV</span><span>Hardware Build</span><span>Public Exhibition</span><span>Production Installation</span><span>Visitor Testing</span><span>Team Delivery</span></div></header>
<section class="case-study-section project-quick-facts"><h3>Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Date</dt><dd>February–June 2025</dd></div><div><dt>Project Type</dt><dd>Public Exhibition Installation</dd></div><div><dt>Organisation</dt><dd>videoreality GmbH · Industrial Placement</dd></div><div><dt>Role</dt><dd>XR Development Intern</dd></div><div><dt>Team</dt><dd>videoreality Production Team</dd></div><div><dt>Exhibition</dt><dd>TimeLeapVR ArtWorld</dd></div><div><dt>Platform</dt><dd>Physical Scanner · Projection</dd></div><div><dt>Engine</dt><dd>Unity</dd></div><div><dt>Technologies</dt><dd>C# · OpenCV · Unity 2D Animation</dd></div></dl></section>
<figure class="popup-media case-study-primary-media"><img alt="Visitors using Animal Garden" class="project-hero-image" decoding="async" height="1280" loading="lazy" src="images/visitor 1.optimized.webp" width="1920"/><figcaption>Visitors create, scan and discover an animal in the shared garden.</figcaption></figure>
<section class="case-study-section case-study-info-panel"><h3 class="case-study-info-label">Context</h3><div class="case-study-info-content"><p>Exhibitions often ask children to observe an artwork without giving them a way to become part of it.</p><p class="">Transform hand-coloured drawings into animated creatures through an accessible physical-digital exhibition experience.</p><p>A hands-on drawing activity created an opportunity to connect familiar paper-based play with a shared digital environment.</p><p><strong>Animal Garden</strong> invites visitors to colour a Bosch-inspired creature, scan it and watch it join an animated projected garden. The scanner and real-time application transform each individual drawing into a collective public installation.</p></div></section>
<section class="case-study-section case-study-story"><h3>User Journey</h3><div class="experience-journey"><article class="experience-stage"><figure class="popup-media"><img alt="Visitor colouring a print sheet" decoding="async" height="1280" loading="lazy" src="images/visitor coloring the print sheet.optimized.webp" width="1920"/><figcaption>Paper makes participation familiar and accessible.</figcaption></figure><p class="experience-stage-number">01</p><h4>Colour</h4><p>Choose and colour a creature.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Visitor placing the marked print sheet into the scanner" decoding="async" height="720" loading="lazy" src="images/place the marker.optimized.webp" width="1036"/><figcaption>The station creates a clear physical-digital handoff.</figcaption></figure><p class="experience-stage-number">02</p><h4>Scan</h4><p>Insert the sheet into the station.</p></article><article class="experience-stage"><figure class="popup-media popup-media--narrow"><img alt="Animal Garden print sheet with alignment markers surrounding the drawing area" decoding="async" height="3508" loading="lazy" src="images/print_sheet.png" width="2480"/><figcaption>The printed markers give the camera a reliable reference for aligning the visitor’s drawing.</figcaption></figure><p class="experience-stage-number">03</p><h4>Process</h4><p>Camera input and markers align the drawing.</p></article><article class="experience-stage"><p class="experience-stage-number">04</p><h4>Animate</h4><p>Unity maps it onto a rigged creature.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Visitors watching Animal Garden" decoding="async" height="1280" loading="lazy" src="images/visitors sitting.optimized.webp" width="1920"/><figcaption>Individual drawings become a collective scene.</figcaption></figure><p class="experience-stage-number">05</p><h4>Enter the Garden</h4><p>The animal joins the projection.</p></article></div><div class="case-study-subsection"><h4>Process &amp; Gallery</h4><h5>Character Production</h5><div class="popup-gallery popup-gallery--two"><figure><img alt="Animal cleanup" decoding="async" height="647" loading="lazy" src="images/cropping animals.optimized.webp" width="1152"/><figcaption>Source creatures were isolated for animation.</figcaption></figure><figure><img alt="Unity sprite rig" decoding="async" height="611" loading="lazy" src="images/animating animals.optimized.webp" width="1153"/><figcaption>2D rigs retain scanned textures in motion.</figcaption></figure><figure><img alt="Environment cleanup" decoding="async" height="515" loading="lazy" src="images/before and after cleanup.optimized.webp" width="1381"/><figcaption>Cleanup prepared the painting for layering.</figcaption></figure><figure><img alt="Completed scene" decoding="async" height="962" loading="lazy" src="images/finished scene.optimized.webp" width="1303"/><figcaption>The scene combines visitor textures and animated layers.</figcaption></figure></div><h5>Scanner Build</h5><div class="popup-gallery popup-gallery--two"><figure><img alt="Scanner prototype" decoding="async" height="1920" loading="lazy" src="images/prototype.optimized.webp" width="1440"/><figcaption>The prototype validated scale and placement.</figcaption></figure><figure><img alt="Scanner frame" decoding="async" height="1920" loading="lazy" src="images/building progress (2).optimized.webp" width="1440"/><figcaption>The frame established camera distance.</figcaption></figure><figure><img alt="Scanner enclosure" decoding="async" height="1920" loading="lazy" src="images/building progress (4).optimized.webp" width="1440"/><figcaption>Matte panels completed the exhibition object.</figcaption></figure></div><h5>Exhibition Testing</h5><div class="popup-gallery popup-gallery--two"><figure><img alt="Projection test" decoding="async" height="1920" loading="lazy" src="images/testing the projection.optimized.webp" width="1440"/><figcaption>Tests calibrated scale and framing.</figcaption></figure><figure><img alt="Installed station" decoding="async" height="1920" loading="lazy" src="images/exhibit place (1).optimized.webp" width="1440"/><figcaption>The final installation aligned the scanner, drawing table and shared projection for public use.</figcaption></figure></div></div></section>
<section class="case-study-section case-study-contribution"><h3>My Contribution</h3><div class="contribution-grid"><article><h4>Unity Development</h4><p>Built spawning, movement, states and recycling.</p></article><article><h4>Character Production</h4><p>Prepared, rigged and initially animated five creatures.</p></article><article><h4>Environment Production</h4><p>Prepared assets and composed the scene.</p></article><article><h4>Scanner &amp; Hardware Integration</h4><p>Helped design, build and integrate the station.</p></article><article><h4>Exhibition Deployment</h4><p>Supported installation, calibration and visitors.</p></article><article><h4>Planning &amp; Documentation</h4><p>Created workflows, milestones and handover guidance.</p></article></div><details class="case-study-details"><summary>Design &amp; Technical Notes</summary><div class="case-study-subsection"><h4>Design Decisions</h4><div class="case-study-card-grid"><article><h5>Scanner Over Touchscreen</h5><p>Paper colouring is tactile and visible.</p></article><article><h5>Preserve the Visitor’s Drawing</h5><p>Clear silhouettes keep marks recognisable.</p></article><article><h5>Shared Projection</h5><p>The large garden makes participation social.</p></article><article><h5>Continuous Exhibition Operation</h5><p>Animal recycling supports stable use.</p></article></div></div><div class="case-study-subsection"><h4>Technical Implementation</h4><div class="case-study-card-grid"><article><h5>Capture &amp; Mapping</h5><p>OpenCV and markers align dynamic textures.</p></article><article><h5>Character Pipeline</h5><p>Photoshop and Unity 2D rigs preserve artwork.</p></article><article><h5>Movement &amp; Instance Management</h5><p>Splines, waypoints, states and recycling control creatures.</p></article><article><h5>Environment</h5><p>Layered parallax assets create projection depth.</p></article><article><h5>Hardware &amp; Exhibition Integration</h5><p>Scanner, camera, PC and projection work as one system.</p></article></div></div></details></section>
<section class="case-study-section case-study-credits"><h3>Team &amp; Credits</h3><ul class="case-study-credit-list"><li>Antonela Matanović</li><li>Riccardo Liguori</li><li>Linus Steffens</li><li>Michael Gödde</li></ul></section>
<section class="case-study-section case-study-result"><h3>Result</h3><p>The Unity application, scanner, camera and projection operated together as a public installation in the exhibition space.</p><p>Simulation, calibration and handover documentation supported dependable day-to-day operation.</p></section>
<section class="case-study-section project-links-section"><h3>Project Links</h3><div class="project-external-links"><a class="project-external-link" href="https://videoreality.de/monalisasgeheimnis" rel="noopener" target="_blank"><span>View Exhibition Website</span><span aria-hidden="true">↗</span></a></div></section>
`,
  insects: `
<header class="case-study-header"><p class="case-study-kicker">UNIVERSITY PROJECT · VIRTUAL REALITY EXPERIENCE</p><h2 id="popup-title">Insect’s Delegate: Brumble’s Journey</h2><p class="case-study-summary">An educational Virtual Reality journey using scale, story and interaction to build appreciation for urban insects.</p><div class="popup-meta"><span>Virtual Reality</span><span>Unity</span><span>C#</span><span>XR Interaction Toolkit</span><span>Completed Virtual Reality Experience</span><span>User-Tested Interactions</span><span>Educational Narrative</span><span>Five-Person Team Delivery</span></div></header>
<section class="case-study-section project-quick-facts"><h3>Quick Facts</h3><dl class="quick-facts-grid"><div><dt>Date</dt><dd>Winter Semester 2024/2025</dd></div><div><dt>Project Type</dt><dd>Team Project</dd></div><div><dt>Organisation</dt><dd>Darmstadt University of Applied Sciences</dd></div><div><dt>Programme</dt><dd>B.A. Augmented and Virtual Reality Design</dd></div><div><dt>Course</dt><dd>Expanded Realities · Project 3</dd></div><div><dt>Platform</dt><dd>Virtual Reality</dd></div><div><dt>Engine</dt><dd>Unity</dd></div><div><dt>Technologies</dt><dd>C# · XR Interaction Toolkit · NavMesh · Blender</dd></div></dl></section>
<figure class="popup-media case-study-primary-media"><div class="video-container"><iframe allow="autoplay; encrypted-media; picture-in-picture; web-share" allowfullscreen="" loading="lazy" src="https://www.youtube.com/embed/hUOfJCqo2rE?autoplay=0&amp;mute=1&amp;loop=1&amp;playlist=hUOfJCqo2rE&amp;controls=1&amp;playsinline=1" title="Insect's Delegate: Brumble's Journey trailer"></iframe></div><figcaption>Brumble guides the player through urban biodiversity and pollination.</figcaption></figure>
<section class="case-study-section case-study-info-panel"><h3 class="case-study-info-label">Context</h3><div class="case-study-info-content"><p>Young audiences often know that bees matter, but rarely experience how scale, perception and habitat shape an insect’s world.</p><p class="">Teach young audiences about urban pollinators through embodied interaction, playful scale changes and a clear narrative journey.</p><p>Virtual reality offered an opportunity to turn ecological ideas into actions rather than explanations.</p><p><strong>Insect’s Delegate: Brumble’s Journey</strong> shrinks the player into a miniature city ecosystem, where exploration, guided flight and pollination make learning part of the story. The project was inspired by Senckenberg Naturmuseum Frankfurt’s <em>City Insects</em> exhibition.</p></div></section>
<section class="case-study-section case-study-story"><h3>User Journey</h3><div class="experience-journey"><article class="experience-stage"><div class="popup-gallery popup-gallery--two"><figure><img alt="City park" decoding="async" height="823" loading="lazy" src="images/city.optimized.webp" width="1463"/><figcaption>The park establishes human scale.</figcaption></figure><figure><img alt="Insect hotel task" decoding="async" height="1080" loading="lazy" src="images/insect hotel.optimized.webp" width="1920"/><figcaption>Conservation becomes a direct task.</figcaption></figure></div><p class="experience-stage-number">01</p><h4>Discover the City Park</h4><p>Explore and place insect hotels.</p></article><article class="experience-stage"><figure class="popup-media"><img alt="Miniature environment" decoding="async" height="833" loading="lazy" src="images/environment.optimized.webp" width="1481"/><figcaption>Dense foliage makes the scale change legible.</figcaption></figure><p class="experience-stage-number">02</p><h4>Enter the Miniature World</h4><p>A butterfly shrinks the player.</p></article><article class="experience-stage"><div class="popup-gallery popup-gallery--two"><figure><img alt="Brumble" decoding="async" height="829" loading="lazy" src="images/brumble.optimized.webp" width="1474"/><figcaption>Brumble anchors the narrative.</figcaption></figure><figure><img alt="Riding Brumble" decoding="async" height="1080" loading="lazy" src="images/riding brumble.optimized.webp" width="1920"/><figcaption>Guided flight introduces the world comfortably.</figcaption></figure></div><p class="experience-stage-number">03</p><h4>Meet and Ride Brumble</h4><p>Follow the bee through the landscape.</p></article><article class="experience-stage"><div class="popup-gallery popup-gallery--two"><figure><img alt="Tree climbing" decoding="async" height="1080" loading="lazy" src="images/climbing the tree.optimized.webp" width="1920"/><figcaption>Climbing returns direct control.</figcaption></figure><figure><img alt="Tree route" decoding="async" height="1080" loading="lazy" src="images/tree ladder.optimized.webp" width="1920"/><figcaption>The route guides movement upward.</figcaption></figure></div><p class="experience-stage-number">04</p><h4>Climb the Tree</h4><p>Dismount and navigate directly.</p></article><article class="experience-stage"><div class="popup-gallery popup-gallery--two"><figure><img alt="Flower field" decoding="async" height="832" loading="lazy" src="images/flowers.optimized.webp" width="1479"/><figcaption>The field establishes the task space.</figcaption></figure><figure><img alt="Bee vision" decoding="async" height="1080" loading="lazy" src="images/pollination.optimized.webp" width="1920"/><figcaption>Feedback connects perception with pollination.</figcaption></figure></div><p class="experience-stage-number">05</p><h4>Use Bee Vision and Pollinate</h4><p>Identify flower patterns and pollinate.</p></article><article class="experience-stage"><p class="experience-stage-number">06</p><h4>Return to Human Scale</h4><p>The butterfly restores the player and closes the story.</p></article></div></section>
<section class="case-study-section case-study-contribution"><h3>My Contribution</h3><div class="contribution-grid"><article><h4>Experience Design</h4><p>Shaped research, personas, story and journey.</p></article><article><h4>XR Development</h4><p>Built interaction, mounted movement and scene logic.</p></article><article><h4>Environment &amp; Visual Development</h4><p>Blocked the park, modelled props and explored shaders.</p></article><article><h4>Testing &amp; Iteration</h4><p>Refined navigation, comfort and clarity.</p></article><article><h4>Production Coordination</h4><p>Set up Jira and supported milestones and documentation.</p></article></div><details class="case-study-details"><summary>Design &amp; Technical Notes</summary><div class="case-study-subsection"><h4>Design Decisions</h4><div class="case-study-card-grid"><article><h5>Learning Through Action</h5><p>Ideas are embedded in physical tasks.</p></article><article><h5>Brumble as a Guide</h5><p>A friendly character structures the journey.</p></article><article><h5>Scale as Storytelling</h5><p>Insect scale makes the ecosystem tangible.</p></article><article><h5>Guided and Direct Movement</h5><p>Flight and hands-on tasks balance comfort and agency.</p></article></div></div><div class="case-study-subsection"><h4>Technical Implementation</h4><div class="case-study-card-grid"><article><h5>XR Interaction</h5><p>Toolkit systems support locomotion, hands and interaction.</p></article><article><h5>Mounted Movement</h5><p>Mounting and follow logic synchronise the player.</p></article><article><h5>Experience Flow</h5><p>States connect shrinking, flight, climbing and pollination.</p></article><article><h5>Navigation &amp; Testing</h5><p>NavMesh debugging and prototypes refined comfort.</p></article><article><h5>Visual Development</h5><p>Blender props and shaders support scale changes.</p></article></div></div></details></section>
<section class="case-study-section case-study-credits"><h3>Team &amp; Credits</h3><ul class="case-study-credit-list"><li>Jacopo Perilli</li><li>Lara Heß</li><li>Mutlu Yakubov</li><li>Antonela Matanović</li><li>Himanshu Dahiya</li></ul></section>
<section class="case-study-section case-study-result"><h3>Result</h3><p>The completed Virtual Reality experience embeds ecological ideas in exploration, guided flight and pollination tasks.</p><p>User testing informed more comfortable transitions between human scale, mounted movement and climbing.</p></section>
<section class="case-study-section project-links-section"><h3>Project Links</h3><div class="project-external-links"><a class="project-external-link" href="https://www.youtube.com/watch?v=hUOfJCqo2rE" rel="noopener" target="_blank"><span>Watch Project Video</span><span aria-hidden="true">↗</span></a><a class="project-external-link" href="https://museumfrankfurt.senckenberg.de/en/" rel="noopener" target="_blank"><span>Senckenberg Museum</span><span aria-hidden="true">↗</span></a></div></section>
`
};
let lastFocusedElement = null;
// Keep visited image elements for reuse without mounting unopened case studies.
const projectViews = new Map();
let activeProjectView = null;
const videoControllers = new WeakMap();
const runningVideoControllers = new Set();
const videoAutoplay = new WeakMap();
const cardMotionMedia = new Map(Array.from(document.querySelectorAll("video[data-motion-key]"), (video) => [video.dataset.motionKey, video]));
const borrowedMotionMedia = new WeakMap();

// The same clip may appear in a card and its case study. Move its buffered player
// between those locations instead of making a second request (even with no cache).
function borrowCardMedia(view) {
  const borrowed = [];
  view.querySelectorAll("video[data-motion-key]").forEach((placeholder) => {
    const player = cardMotionMedia.get(placeholder.dataset.motionKey);
    if (!player || !player.isConnected) return;
    const home = document.createComment("Shared card media");
    const label = player.getAttribute("aria-label");
    const classes = player.className;
    player.replaceWith(home);
    placeholder.replaceWith(player);
    home.replaceWith(placeholder);
    if (player.poster) placeholder.poster = player.poster;
    player.setAttribute("aria-label", placeholder.getAttribute("aria-label"));
    player.className = placeholder.className;
    borrowed.push({ player, placeholder, label, classes });
  });
  borrowedMotionMedia.set(view, borrowed);
}

function returnCardMedia(view) {
  (borrowedMotionMedia.get(view) || []).forEach(({ player, placeholder, label, classes }) => {
    const modalPosition = document.createComment("Shared case-study media");
    player.replaceWith(modalPosition);
    placeholder.replaceWith(player);
    modalPosition.replaceWith(placeholder);
    player.setAttribute("aria-label", label);
    player.className = classes;
  });
  borrowedMotionMedia.delete(view);
}

// Source URLs stay in data-src until a clip is near its own scrolling viewport.
// Loading metadata and playing are separate: autoplay must not override deferral.
function createVideoController(container, scrollRoot = null) {
  const states = Array.from(container.querySelectorAll("video[data-managed-video]:not([data-sync-video])"), (video) => ({
    video,
    automatic: videoAutoplay.has(video) ? videoAutoplay.get(video) : video.hasAttribute("autoplay"),
    loaded: false,
    visible: false,
    near: false,
    resume: false
  }));
  let running = false;
  let prepareObserver;
  let playbackObserver;

  function prepare(state) {
    // Another controller may have prepared this shared player while it was borrowed.
    if (state.video.querySelector("source[src]")) state.loaded = true;
    if (state.loaded || !running || document.hidden) return;
    const video = state.video;
    video.autoplay = false;
    if (video.dataset.poster) video.poster = video.dataset.poster;
    video.querySelectorAll("source[data-src]").forEach((source) => {
      source.src = source.dataset.src;
    });
    state.loaded = true;
    video.preload = "metadata";
    video.load();
  }

  function updatePlayback(state) {
    const video = state.video;
    const shouldPlay = running && state.visible && !document.hidden;
    if (!shouldPlay) {
      if (!video.paused) state.resume = true;
      video.autoplay = false;
      video.preload = running && state.near && !document.hidden ? "metadata" : "none";
      video.pause();
      return;
    }
    prepare(state);
    video.preload = "metadata";
    video.autoplay = state.automatic;
    if (state.automatic || state.resume) {
      if (state.automatic) video.muted = true;
      const play = video.play();
      if (play) play.catch(() => {}); // The native poster remains if autoplay is denied.
    }
  }

  function measure(state) {
    const box = state.video.getBoundingClientRect();
    const root = scrollRoot ? scrollRoot.getBoundingClientRect() : {
      top: 0, left: 0, bottom: window.innerHeight, right: window.innerWidth
    };
    const displayed = state.video.isConnected && box.width > 0 && box.height > 0;
    const horizontal = box.right > root.left && box.left < root.right;
    state.visible = displayed && horizontal && box.bottom > root.top && box.top < root.bottom;
    state.near = displayed && horizontal && box.bottom > root.top - 160 && box.top < root.bottom + 160;
  }

  const controller = {
    sync() {
      if (!running) return;
      states.forEach((state) => {
        measure(state);
        if (state.near) prepare(state);
        updatePlayback(state);
      });
    },
    start() {
      if (running) return;
      running = true;
      runningVideoControllers.add(controller);
      if ("IntersectionObserver" in window) {
        prepareObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const state = states.find((item) => item.video === entry.target);
            state.near = entry.isIntersecting;
            if (state.near) prepare(state);
            updatePlayback(state);
          });
        }, { root: scrollRoot, rootMargin: "160px 0px" });
        playbackObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            const state = states.find((item) => item.video === entry.target);
            state.visible = entry.isIntersecting && entry.intersectionRect.width > 0 && entry.intersectionRect.height > 0;
            updatePlayback(state);
          });
        }, { root: scrollRoot });
        states.forEach(({ video }) => {
          prepareObserver.observe(video);
          playbackObserver.observe(video);
        });
      } else {
        (scrollRoot || window).addEventListener("scroll", controller.sync, { passive: true });
      }
      window.addEventListener("resize", controller.sync);
      controller.sync(); // No observer round-trip before loading an opened, visible clip.
    },
    stop() {
      running = false;
      prepareObserver?.disconnect();
      playbackObserver?.disconnect();
      (scrollRoot || window).removeEventListener("scroll", controller.sync);
      window.removeEventListener("resize", controller.sync);
      runningVideoControllers.delete(controller);
      states.forEach((state) => {
        state.visible = false;
        state.near = false;
        state.resume = false;
        state.video.autoplay = false;
        state.video.preload = "none";
        state.video.pause();
      });
    }
  };
  states.forEach((state) => {
    videoAutoplay.set(state.video, state.automatic);
    state.video.muted = state.video.defaultMuted;
    state.video.autoplay = false;
    state.video.addEventListener("pause", () => {
      if (running && state.visible && !document.hidden) state.resume = false;
    });
  });
  return controller;
}

document.addEventListener("visibilitychange", () => {
  runningVideoControllers.forEach((controller) => controller.sync());
});
const cardVideos = createVideoController(document);
cardVideos.start();

// This pair has one transport and one visibility boundary. It must not also be
// driven independently by createVideoController. Each cached view owns one instance.
const synchronizedVideoControllers = new WeakMap();

function createSynchronizedDemo(demo, scrollRoot) {
  const master = demo.querySelector('[data-sync-video="master"]');
  const follower = demo.querySelector('[data-sync-video="follower"]');
  const videos = [master, follower];
  const toggles = Array.from(demo.querySelectorAll('[data-sync-toggle]'));
  const playButton = demo.querySelector('.control-deck-controls [data-sync-toggle]');
  const timeline = demo.querySelector('[data-sync-timeline]');
  const time = demo.querySelector('[data-sync-time]');
  const status = demo.querySelector('[data-sync-status]');
  const mute = demo.querySelector('[data-sync-mute]');
  const driftTolerance = 0.08;
  let active = false;
  let requested = false;
  let phase = 'paused';
  let operation = null;
  let timer = null;
  let observer;
  let preparationObserver;
  let scrubbing = false;
  let resumeAfterScrub = false;

  const duration = () => Number.isFinite(master.duration) ? master.duration : 25.2;
  const progress = () => Math.min(1, Math.max(0, master.currentTime / duration()));
  const clock = (seconds) => `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
  function render(preview = null) {
    const position = preview === null ? progress() : preview;
    if (!scrubbing) timeline.value = String(Math.round(position * 1000));
    const current = clock(position * duration());
    time.textContent = `${current} / ${clock(duration())}`;
    timeline.setAttribute('aria-valuetext', `${current} of ${clock(duration())}`);
    const busy = phase === 'preparing' || phase === 'seeking';
    playButton.textContent = busy ? 'Loading…' : requested ? 'Pause' : phase === 'ended' ? 'Replay' : phase === 'error' ? 'Retry' : 'Play';
    toggles.forEach((button) => {
      button.setAttribute('aria-label', requested || busy ? 'Pause synchronized demonstration' : 'Play synchronized demonstration');
      button.setAttribute('aria-pressed', String(requested));
    });
    demo.setAttribute('aria-busy', String(busy));
    mute.textContent = master.muted ? 'Unmute' : 'Mute';
    mute.setAttribute('aria-label', master.muted ? 'Unmute Unity recording' : 'Mute Unity recording');
  }

  function cancelWork() {
    operation?.abort();
    operation = null;
    clearInterval(timer);
    timer = null;
  }
  function pauseTogether() {
    cancelWork();
    requested = false;
    scrubbing = false;
    phase = progress() >= 1 ? 'ended' : 'paused';
    videos.forEach((video) => video.pause());
    status.textContent = '';
    render();
  }
  function hydrate(preload = 'metadata') {
    if (!active || document.hidden) return;
    videos.forEach((video) => {
      video.preload = preload;
      if (video.querySelector('source[src]')) return;
      video.poster = video.dataset.poster;
      video.querySelectorAll('source[data-src]').forEach((source) => { source.src = source.dataset.src; });
      video.load();
    });
  }

  // Every pending wait is cancelled on pause, a newer seek, modal close or tab hide.
  function waitFor(test, signal) {
    return new Promise((resolve, reject) => {
      const events = ['loadedmetadata', 'loadeddata', 'canplay', 'canplaythrough', 'progress', 'seeked', 'error'];
      let timeout;
      const cleanup = () => {
        clearTimeout(timeout);
        videos.forEach((video) => events.forEach((event) => video.removeEventListener(event, check)));
        signal.removeEventListener('abort', check);
      };
      const check = () => {
        const error = videos.find((video) => video.error)?.error;
        if (signal.aborted || error) {
          cleanup();
          reject(signal.aborted ? new DOMException('Playback cancelled', 'AbortError') : new Error(error.message || 'Media unavailable'));
        } else if (test()) {
          cleanup();
          resolve();
        }
      };
      videos.forEach((video) => events.forEach((event) => video.addEventListener(event, check)));
      signal.addEventListener('abort', check);
      timeout = setTimeout(() => { cleanup(); reject(new Error('Media readiness timed out')); }, 30000);
      check();
    });
  }
  const metadataReady = () => videos.every((video) => Number.isFinite(video.duration) && video.duration > 0);
  const buffered = () => videos.every((video) => {
    if (video.readyState < 3 || video.seeking) return false;
    const needed = Math.min(video.duration, video.currentTime + 0.65);
    for (let i = 0; i < video.buffered.length; i++) {
      if (video.buffered.start(i) <= video.currentTime + 0.02 && video.buffered.end(i) >= needed - 0.02) return true;
    }
    return false;
  });
  async function align(position, signal) {
    videos.forEach((video) => {
      const target = position * video.duration;
      if (Math.abs(video.currentTime - target) > 0.002) video.currentTime = target;
    });
    await waitFor(() => videos.every((video) => !video.seeking && video.readyState >= 2), signal);
  }
  function fail(error, signal) {
    if (signal.aborted) return;
    pauseTogether();
    phase = 'error';
    status.textContent = 'Both views are paused. Unable to start the demonstration; please try again.';
    render();
  }
  function begin(nextPhase, shouldPlay) {
    cancelWork();
    operation = new AbortController();
    phase = nextPhase;
    requested = shouldPlay;
    videos.forEach((video) => video.pause());
    hydrate('auto');
    status.textContent = 'Preparing both synchronized views.';
    render();
    return operation.signal;
  }

  function finish() {
    if (phase === 'ended') return;
    pauseTogether();
    phase = 'ended';
    videos.forEach((video) => { if (Number.isFinite(video.duration)) video.currentTime = video.duration; });
    status.textContent = 'Demonstration completed.';
    render(1);
  }
  function tick() {
    if (!active || !requested || phase !== 'playing') return;
    const target = progress() * follower.duration;
    // No per-frame seeking: small differences are allowed to play naturally.
    if (!master.seeking && !follower.seeking && videos.every((video) => video.readyState >= 3) && Math.abs(follower.currentTime - target) > driftTolerance) {
      follower.currentTime = target;
    }
    render();
  }
  async function playTogether(position = null) {
    if (!active || document.hidden) return;
    const signal = begin('preparing', true);
    try {
      await waitFor(metadataReady, signal);
      const start = position === null ? (progress() >= 0.999 ? 0 : progress()) : position;
      await align(start, signal);
      await waitFor(buffered, signal);
      if (signal.aborted) return;
      follower.playbackRate = master.playbackRate * follower.duration / master.duration;
      phase = 'starting';
      await Promise.all(videos.map((video) => video.play()));
      if (signal.aborted) return;
      operation = null;
      phase = 'playing';
      status.textContent = '';
      timer = setInterval(tick, 200);
      render();
    } catch (error) { fail(error, signal); }
  }
  async function seekTogether(position, resume = false) {
    if (!active || document.hidden) return;
    const signal = begin('seeking', resume);
    try {
      await waitFor(metadataReady, signal);
      await align(position, signal);
      if (signal.aborted) return;
      operation = null;
      requested = false;
      phase = position >= 1 ? 'ended' : 'paused';
      status.textContent = '';
      render(position);
      if (resume && position < 1) playTogether(position);
    } catch (error) { fail(error, signal); }
  }
  function startScrub() {
    if (scrubbing) return;
    resumeAfterScrub = requested;
    pauseTogether();
    scrubbing = true;
    phase = 'scrubbing';
  }
  function endScrub() {
    if (!scrubbing) return;
    const position = Number(timeline.value) / 1000;
    scrubbing = false;
    seekTogether(position, resumeAfterScrub);
  }

  toggles.forEach((button) => button.addEventListener('click', () => {
    if (requested || operation || scrubbing) pauseTogether();
    else playTogether();
  }));
  timeline.addEventListener('pointerdown', startScrub);
  timeline.addEventListener('input', () => {
    const value = timeline.value; // Keep keyboard input when pausing updates the controls.
    startScrub();
    timeline.value = value;
    render(Number(value) / 1000);
  });
  timeline.addEventListener('change', endScrub);
  timeline.addEventListener('pointercancel', endScrub);
  timeline.addEventListener('blur', endScrub);
  demo.querySelector('[data-sync-restart]').addEventListener('click', () => { scrubbing = false; seekTogether(0); });
  mute.addEventListener('click', () => { master.muted = !master.muted; follower.muted = true; render(); });
  videos.forEach((video) => {
    video.muted = true;
    video.addEventListener('loadedmetadata', () => render());
    video.addEventListener('waiting', () => {
      if (requested && (phase === 'playing' || phase === 'starting')) playTogether(progress());
    });
    video.addEventListener('pause', () => {
      if (phase === 'playing' && requested && video.paused) pauseTogether();
    });
    video.addEventListener('play', () => { if (!active || !requested) video.pause(); });
    video.addEventListener('ended', () => {
      if (active && (master.ended || master.duration - master.currentTime < driftTolerance)) finish();
    });
    video.addEventListener('error', () => {
      if (!active) return;
      pauseTogether();
      phase = 'error';
      status.textContent = 'A recording could not be loaded. Please try again.';
      render();
    });
  });

  const controller = {
    sync() {
      if (!active) return;
      const box = demo.getBoundingClientRect();
      const root = scrollRoot.getBoundingClientRect();
      const visible = demo.isConnected && box.bottom > root.top && box.top < root.bottom;
      const near = box.bottom > root.top - 160 && box.top < root.bottom + 160;
      if (document.hidden || !visible) {
        if (requested || operation || scrubbing) pauseTogether();
        videos.forEach((video) => { video.preload = 'none'; });
      }
      if (!document.hidden && near && !requested && !operation) hydrate();
    },
    start() {
      if (active) return;
      active = true;
      pauseTogether();
      runningVideoControllers.add(controller);
      if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(controller.sync, { root: scrollRoot });
        preparationObserver = new IntersectionObserver(controller.sync, { root: scrollRoot, rootMargin: '160px 0px' });
        observer.observe(demo);
        preparationObserver.observe(demo);
      } else scrollRoot.addEventListener('scroll', controller.sync, { passive: true });
      window.addEventListener('resize', controller.sync);
      controller.sync();
    },
    stop() {
      active = false;
      pauseTogether();
      videos.forEach((video) => { video.preload = 'none'; });
      observer?.disconnect();
      preparationObserver?.disconnect();
      scrollRoot.removeEventListener('scroll', controller.sync);
      window.removeEventListener('resize', controller.sync);
      runningVideoControllers.delete(controller);
    }
  };
  render();
  return controller;
}

function openPopup(projectKey) {
  const content = projectsData[projectKey];
  if (!content) return;
  lastFocusedElement = document.activeElement;
  cardVideos.stop(); // Cards are covered by the modal, even if geometrically in view.
  let view = projectViews.get(projectKey);
  if (!view) {
    view = document.createElement("div");
    view.innerHTML = content;
    projectViews.set(projectKey, view);
  }
  activeProjectView = view;
  popupContent.replaceChildren(view);
  borrowCardMedia(view);
  popup.classList.add("active");
  popup.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
  const scroller = popup.querySelector(".popup-content");
  scroller.scrollTop = 0;
  view.querySelectorAll("iframe[data-src]").forEach((frame) => {
    frame.src = frame.dataset.src;
    delete frame.dataset.src;
  });
  // Only images actually in the opened viewport need immediate loading.
  const viewport = scroller.getBoundingClientRect();
  view.querySelectorAll("img").forEach((img) => {
    const bounds = img.getBoundingClientRect();
    img.loading = bounds.top < viewport.bottom && bounds.bottom > viewport.top ? "eager" : "lazy";
  });
  if (!videoControllers.has(view)) {
    videoControllers.set(view, createVideoController(view, scroller));
  }
  videoControllers.get(view).start();
  const synchronizedDemo = view.querySelector("[data-sync-demo]");
  if (synchronizedDemo) {
    if (!synchronizedVideoControllers.has(view)) {
      synchronizedVideoControllers.set(view, createSynchronizedDemo(synchronizedDemo, scroller));
    }
    synchronizedVideoControllers.get(view).start();
  }
  const popupTitle = popupContent.querySelector("#popup-title");
  if (popupTitle) {
    popupTitle.setAttribute("tabindex", "-1");
    popupTitle.focus({ preventScroll: true });
  }
}

function closePopup() {
  if (!popup.classList.contains("active")) return;
  if (activeProjectView) {
    synchronizedVideoControllers.get(activeProjectView)?.stop();
    videoControllers.get(activeProjectView)?.stop();
    activeProjectView.querySelectorAll("video").forEach((video) => video.pause());
    // Unload embedded players so audio and network activity stop on close.
    activeProjectView.querySelectorAll("iframe").forEach((frame) => {
      frame.dataset.src = frame.getAttribute("src");
      frame.removeAttribute("src");
    });
    returnCardMedia(activeProjectView);
    activeProjectView.remove();
    activeProjectView = null;
  }
  popup.classList.remove("active");
  popup.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
  cardVideos.start();
  if (lastFocusedElement) lastFocusedElement.focus({ preventScroll: true });
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

  if (projectEmptyState) projectEmptyState.hidden = visibleProjects > 0;
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => filterProjects(button.dataset.categoryFilter));
});

filterProjects("university");
document.querySelectorAll(".project-trigger, .project-link").forEach((button) => {
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
