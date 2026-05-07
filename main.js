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

document.querySelector('.search-box').addEventListener('submit', function(e) {
  e.preventDefault();
  const keyword = this.querySelector('input').value;

  console.log('Cari:', keyword);

  // bisa arahkan ke:
  // - filter berita
  // - redirect halaman search
});

const tags = document.querySelectorAll('.popular-tags .tag');
const input = document.querySelector('.search-box input');

tags.forEach(tag => {
  tag.addEventListener('click', () => {
    input.value = tag.textContent;
    input.focus();
  });
});

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    showSlide(index);
  });
});

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

const prevBtn = document.querySelector('.slider-arrow.prev');
const nextBtn = document.querySelector('.slider-arrow.next');

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide(index);
});

function showSlide(i) {
  document.querySelector('.slides').style.transform = `translateX(-${i * 100}%)`;

  dots.forEach(d => d.classList.remove('active'));
  dots[i].classList.add('active');
}

  const hamburger = document.getElementById('hamburgerBtn');
  const navMenu = document.querySelector('.nav-menu');
  const dropdownParents = document.querySelectorAll('.has-dropdown');

  // Toggle main menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
  });

// Toggle dropdown on mobile & tablet
  dropdownParents.forEach(item => {
    item.addEventListener('click', (e) => {
      // Mengubah 768 menjadi 1024 agar sinkron dengan media query CSS
      if (window.innerWidth <= 1024) { 
        e.stopPropagation();
        
        // Opsional: Tutup menu lain jika satu menu sedang dibuka
        dropdownParents.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('open');
          }
        });

        item.classList.toggle('open');
      }
    });
  });