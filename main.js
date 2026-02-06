// ================= HAMBURGER + NAV =================
const hamburger = document.getElementById('hamburgerBtn');
const navMenu = document.querySelector('.nav-menu');
const dropdownParents = document.querySelectorAll('.has-dropdown');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });
}

dropdownParents.forEach(item => {
  item.addEventListener('click', (e) => {
    if (window.innerWidth <= 768) {
      e.stopPropagation();
      item.classList.toggle('open');
    }
  });
});

// ================= THEME HANDLER =================
const themeSwitch = document.getElementById('themeSwitch');
const htmlEl = document.documentElement;
const knobIcon = themeSwitch.querySelector('i');

function updateThemeToggle(){
  if (htmlEl.classList.contains('light-theme')) {
    knobIcon.classList.remove('fa-sun');
    knobIcon.classList.add('fa-moon');
  } else {
    knobIcon.classList.remove('fa-moon');
    knobIcon.classList.add('fa-sun');
  }
}

themeSwitch.addEventListener('click', () => {
  htmlEl.classList.toggle('light-theme');
  updateThemeToggle();
});

// set icon awal saat load
updateThemeToggle();



// ================= BACK TO TOP =================
const backToTop = document.getElementById('backToTop');

if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.style.display = window.scrollY > 400 ? 'block' : 'none';
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ================= MAP (LEAFLET) =================
if (document.getElementById('map')) {
  const map = L.map('map').setView([-6.2, 106.0], 8);
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);
}
