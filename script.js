// popup elements
const popup = document.getElementById('project-popup');
const popupContent = document.getElementById('popup-inner-content');
const closeBtn = document.getElementById('popup-close');
const main = document.querySelector('main');
const navToggle = document.getElementById('nav-toggle');
const navList = document.querySelector('.nav-list');
const scrollProgress = document.getElementById('scroll-progress');

const projectsData = {
  project1: `
    <h2 id="popup-title">insect's delegate: brumble's journey</h2>
    <div id="popup-desc">
      <p>this virtual reality experience was created during the winter semester 2024, under Project 3: Discover Space and Time, a module of the Expanded Realities (Augmented and Virtual Reality Design) Bachelor of Arts study programme at Darmstadt University of Applied Sciences.</p>
      <p>our team created an experience to educate young audiences (ages 12-16) about the vital role of insects while connecting education with storytelling and exploration.</p>
      <p><strong>team members:</strong> Jacopo Perilli, Lara Heß, Mutlu Yakubov, Antonela Matanović, Himanshu Dahiya</p>
      <img src="images/main image.png" alt="insect's delegate cover image" />
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/hUOfJCqo2rE" title="insect's delegate trailer" allowfullscreen></iframe>
      </div>
    </div>
  `,
  // ... other projects omitted for brevity
};

// open popup with animation and focus trap
document.querySelectorAll('.project-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const projectKey = btn.getAttribute('data-project');
    
    // populate content first, for focus trap
    popupContent.innerHTML = projectsData[projectKey] || '<p>details coming soon...</p>';

    // show popup
    popup.classList.add('active');
    popup.setAttribute('aria-hidden', 'false');

    // blur background
    main.style.filter = 'blur(4px)';
    document.body.style.overflow = 'hidden';

    // animate popup content
    popupContent.style.opacity = 0;
    popupContent.style.transform = 'scale(0.96)';
    setTimeout(() => {
      popupContent.style.transition = 'opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
      popupContent.style.opacity = 1;
      popupContent.style.transform = 'scale(1)';
    }, 50);

    // focus popup for accessibility
    closeBtn.focus();

    // trap focus inside popup
    trapFocus(popup);
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
    main.style.filter = '';
    document.body.style.overflow = '';
  }, 300);
};

// close on button click
closeBtn.addEventListener('click', closePopup);

// close on background click
popup.addEventListener('click', e => {
  if (e.target === popup) closePopup();
});

// close on escape key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && popup.classList.contains('active')) {
    closePopup();
  }
});

// trap focus helper function for popup
function trapFocus(element) {
  const focusableElements = element.querySelectorAll('a[href], button:not([disabled]), textarea, input, select, iframe');
  const firstFocusable = focusableElements[0];
  const lastFocusable = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', function(e) {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    }
  });
}

// smooth scroll for nav links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.focus({preventScroll:true});
      window.scrollTo({
        top: target.offsetTop - 60, // offset for sticky header
        behavior: 'smooth',
      });
      target.focus();
    }
    // close mobile nav on click
    if (navToggle.getAttribute('aria-expanded') === 'true') {
      toggleNav();
    }
  });
});

// sticky nav toggle for mobile
navToggle.addEventListener('click', toggleNav);

function toggleNav() {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', !expanded);
  navList.classList.toggle('active');
}

// scroll progress bar update
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

// keyboard focus styles for buttons and links (optional enhancement)
document.querySelectorAll('button, a').forEach(el => {
  el.addEventListener('focus', () => {
    el.classList.add('focus-visible');
  });
  el.addEventListener('blur', () => {
    el.classList.remove('focus-visible');
  });
});
