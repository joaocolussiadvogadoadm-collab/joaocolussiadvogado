const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
const navLinks = document.querySelectorAll('.site-nav a');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.classList.toggle('open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const sections = document.querySelectorAll('.section-reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => observer.observe(section));

const parallaxItems = document.querySelectorAll('[data-parallax]');
const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (parallaxItems.length && !reduceMotionQuery.matches) {
  let ticking = false;

  const updateParallax = () => {
    const viewportCenter = window.innerHeight / 2;

    parallaxItems.forEach((item) => {
      const rect = item.getBoundingClientRect();
      const itemCenter = rect.top + rect.height / 2;
      const speed = Number(item.getAttribute('data-parallax-speed') || 0.15);

      // Deslocamento vertical limitado para manter o efeito elegante e legível.
      const offset = (viewportCenter - itemCenter) * speed;
      const clamped = Math.max(-22, Math.min(22, offset));

      item.style.setProperty('--parallax-y', `${clamped}px`);
    });

    ticking = false;
  };

  const requestTick = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateParallax);
      ticking = true;
    }
  };

  updateParallax();
  window.addEventListener('scroll', requestTick, { passive: true });
  window.addEventListener('resize', requestTick);
}

const year = document.getElementById('year');
if (year) {
  year.textContent = String(new Date().getFullYear());
}
