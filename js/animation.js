/* =========================================================
   ANIMATION.JS — scroll-reveal, animated counters,
   skill-bar fills, scroll-to-top button
   ========================================================= */

(function () {
  // ---- Scroll-reveal using IntersectionObserver ----
  const animatedEls = document.querySelectorAll('[data-animate]');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedEls.forEach((el) => revealObserver.observe(el));

  // ---- Animated achievement counters ----
  const counters = document.querySelectorAll('.counter-num');

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.round(eased * target);
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = target;
      }
    }
    requestAnimationFrame(tick);
  }

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  counters.forEach((el) => counterObserver.observe(el));

  // ---- Skill progress bar fill on scroll ----
  const skillBars = document.querySelectorAll('.skill-bar-fill');

  const skillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          fill.style.width = fill.dataset.width + '%';
          skillObserver.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 }
  );

  skillBars.forEach((bar) => skillObserver.observe(bar));

  // ---- Scroll-to-top button ----
  const scrollTopBtn = document.getElementById('scrollTopBtn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 480) {
      scrollTopBtn.classList.add('show');
    } else {
      scrollTopBtn.classList.remove('show');
    }
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // ---- Project filtering ----
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      projectCards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !matches);
      });
    });
  });
})();
