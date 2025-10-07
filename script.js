// Mobile nav
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => {
    const exp = hamburger.getAttribute('aria-expanded') === 'true' || false;
    hamburger.setAttribute('aria-expanded', String(!exp));
    nav.classList.toggle('open');
  });
}

// Sticky header shadow
const header = document.querySelector('[data-sticky]') || document.querySelector('.site-header');
const addShadow = () => header && (header.style.boxShadow = window.scrollY > 6 ? 'var(--shadow)' : 'none');
addShadow();
window.addEventListener('scroll', addShadow, { passive: true });

// Intersection animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      observer.unobserve(e.target);
    }
  });
},{threshold:0.1});

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));

// Current year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();

// Handle optional data-delay on animations
const delayed = document.querySelectorAll('[data-delay]');
delayed.forEach(el => {
  const ms = Number(el.getAttribute('data-delay')) || 0;
  el.style.transitionDelay = ms + 'ms';
});