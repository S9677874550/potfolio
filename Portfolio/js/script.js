/* =========================================================
   SCRIPT.JS — preloader, typing effect, dark mode toggle,
   contact form validation, footer year
   ========================================================= */

(function () {
  // ---- Preloader ----
  // Hides as soon as the DOM is parsed (don't wait on slow/blocked
  // external assets like fonts or icon CDNs). A hard-timeout fallback
  // guarantees it's removed even if something goes wrong.
  const preloader = document.getElementById('preloader');

  function hidePreloader() {
    if (preloader && !preloader.classList.contains('loaded')) {
      preloader.classList.add('loaded');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      setTimeout(hidePreloader, 400);
    });
  } else {
    setTimeout(hidePreloader, 400);
  }

  // Safety net: never let the preloader block the page for more than 2.5s
  setTimeout(hidePreloader, 2500);

  // ---- Typing text effect in hero ----
  const typingTarget = document.getElementById('typingText');
  const phrases = ['web', 'browser', 'cloud', 'screen', 'internet'];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeLoop() {
    if (!typingTarget) return;
    const current = phrases[phraseIndex];

    if (!isDeleting) {
      typingTarget.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        setTimeout(typeLoop, 1400);
        return;
      }
    } else {
      typingTarget.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }
    }

    const speed = isDeleting ? 50 : 110;
    setTimeout(typeLoop, speed);
  }

  typeLoop();

  // ---- Dark / Light mode toggle ----
  // Note: theme state is kept in a JS variable (not localStorage),
  // per artifact/runtime constraints. It resets on page reload.
  const themeToggle = document.getElementById('themeToggle');
  let isDarkMode = false;

  function applyTheme() {
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeToggle.innerHTML = isDarkMode
      ? '<i class="fa-solid fa-sun"></i>'
      : '<i class="fa-solid fa-moon"></i>';
  }

  themeToggle.addEventListener('click', () => {
    isDarkMode = !isDarkMode;
    applyTheme();
  });

  // ---- Contact form validation ----
  const form = document.getElementById('contactForm');
  const nameInput = document.getElementById('nameInput');
  const emailInput = document.getElementById('emailInput');
  const messageInput = document.getElementById('messageInput');
  const formSuccess = document.getElementById('formSuccess');

  function showError(input, errorId, message) {
    input.classList.add('invalid');
    document.getElementById(errorId).textContent = message;
  }

  function clearError(input, errorId) {
    input.classList.remove('invalid');
    document.getElementById(errorId).textContent = '';
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;

      if (nameInput.value.trim().length < 2) {
        showError(nameInput, 'nameError', 'Please enter your name.');
        valid = false;
      } else {
        clearError(nameInput, 'nameError');
      }

      if (!isValidEmail(emailInput.value.trim())) {
        showError(emailInput, 'emailError', 'Please enter a valid email.');
        valid = false;
      } else {
        clearError(emailInput, 'emailError');
      }

      if (messageInput.value.trim().length < 10) {
        showError(messageInput, 'messageError', 'Message should be at least 10 characters.');
        valid = false;
      } else {
        clearError(messageInput, 'messageError');
      }

      if (valid) {
        formSuccess.classList.add('show');
        form.reset();
        setTimeout(() => formSuccess.classList.remove('show'), 5000);
      }
    });
  }

  // ---- Footer year ----
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
