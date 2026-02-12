// ================= THEME HANDLER =================
const themeSwitch = document.getElementById("themeSwitch");
const htmlEl = document.documentElement;
const knobIcon = themeSwitch.querySelector("i");

function updateThemeToggle() {
  if (htmlEl.classList.contains("light-theme")) {
    knobIcon.classList.remove("fa-sun");
    knobIcon.classList.add("fa-moon");
  } else {
    knobIcon.classList.remove("fa-moon");
    knobIcon.classList.add("fa-sun");
  }
}

themeSwitch.addEventListener("click", () => {
  htmlEl.classList.toggle("light-theme");
  updateThemeToggle();
});

// set icon awal saat load
updateThemeToggle();

// ================= BACK TO TOP =================
const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 400 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

const topbar = document.querySelector(".topbar");
const header = document.querySelector("header");

const TOPBAR_HEIGHT = 36; // samakan dengan tinggi topbar kamu (px)

window.addEventListener("scroll", () => {
  const y = window.scrollY;
  const topbarHeight = topbar.offsetHeight;

  if (y <= 10) {
    topbar.classList.remove("hide");
    header.style.top = topbarHeight + "px";
  } else {
    topbar.classList.add("hide");
    header.style.top = "0px";
  }
});


  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownParents = document.querySelectorAll('.has-dropdown');

  // Toggle main menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

  // Toggle dropdown on mobile
  dropdownParents.forEach(item => {
    item.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        item.classList.toggle('open');
      }
    });
  });