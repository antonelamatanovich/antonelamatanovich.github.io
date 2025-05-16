document.querySelectorAll('.project-toggle').forEach(toggle => {
  const details = document.getElementById(toggle.getAttribute('aria-controls'));

  toggle.addEventListener('click', () => {
    const isOpen = details.classList.contains('open');

    // toggle klasu za stil
    toggle.classList.toggle('open', !isOpen);
    details.classList.toggle('open', !isOpen);

    // upravljanje pristupačnošću
    toggle.setAttribute('aria-expanded', String(!isOpen));

    // ukloni ili dodaj hidden atribut - ALI hidden briše animaciju,
    // stoga ga ostavljamo ali kontroliramo CSS klasama za animaciju
    if (isOpen) {
      // zatvaranje - sačekaj da animacija završi pa sakrijemo hidden
      setTimeout(() => {
        details.hidden = true;
      }, 500); // vrijeme mora odgovarati CSS transition max-height
    } else {
      // otvaranje - prvo otkrijemo element, pa pustimo animaciju
      details.hidden = false;
    }
  });
});
