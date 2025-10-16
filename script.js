// ---------- SHRINK HEADER ----------
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// ---------- FADE-IN SECTIONS ----------
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

faders.forEach(el => observer.observe(el));
// ---------- HAMBURGER MENU ----------
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});
