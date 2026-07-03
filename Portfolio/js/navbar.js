/* =========================================================
   NAVBAR.JS — sticky nav, hamburger menu, active-link tracking
   ========================================================= */

(function () {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('main section[id]');

  // ---- Sticky navbar shadow on scroll ----
  function handleNavbarScroll() {
    if (window.scrollY > 12) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // ---- Hamburger toggle ----
  hamburger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // ---- Close mobile menu when a link is clicked ----
  links.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ---- Highlight active nav link based on scroll position ----
  function setActiveLink() {
    let currentSection = sections[0];
    const scrollPos = window.scrollY + window.innerHeight * 0.35;

    sections.forEach((section) => {
      if (section.offsetTop <= scrollPos) {
        currentSection = section;
      }
    });

    links.forEach((link) => {
      link.classList.toggle(
        'active',
        link.dataset.section === currentSection.id
      );
    });
  }

  window.addEventListener('scroll', () => {
    handleNavbarScroll();
    setActiveLink();
  });

  document.addEventListener('DOMContentLoaded', () => {
    handleNavbarScroll();
    setActiveLink();
  });
})();
