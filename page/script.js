// ==========================================================================
// Piyush Upreti — Portfolio Interactions
// ==========================================================================

(() => {
  const navWrap = document.getElementById('navWrap');
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const themeToggle = document.getElementById('themeToggle');
  const progressBar = document.getElementById('progressBar');
  const yearEl = document.getElementById('year');
  const typedRoleEl = document.getElementById('typedRole');

  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- Theme (light/dark) ----
  const THEME_KEY = 'pu-theme';
  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', initialTheme);

  themeToggle?.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem(THEME_KEY, next);
  });

  // ---- Mobile nav toggle ----
  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.classList.toggle('is-active', isOpen);
  });

  navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  // ---- Sticky nav background + scroll progress ----
  const onScroll = () => {
    const scrollY = window.scrollY;
    navWrap?.classList.toggle('scrolled', scrollY > 12);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
    if (progressBar) progressBar.style.width = `${pct}%`;
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- Scroll-spy for active nav link ----
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-link');

  const spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navAnchors.forEach((a) => {
          a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
  );
  sections.forEach((s) => spyObserver.observe(s));

  // ---- Reveal on scroll ----
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

  // ---- Typed role effect ----
  const roles = [
    'Software Developer',
    'Data Engineer',
    'Backend Systems Builder',
    'AI & Automation Enthusiast',
  ];
  let roleIndex = 0;
  let charIndex = roles[0].length;
  let deleting = false;

  const typeLoop = () => {
    if (!typedRoleEl) return;
    const current = roles[roleIndex];

    if (!deleting) {
      charIndex++;
      if (charIndex > current.length) {
        deleting = true;
        setTimeout(typeLoop, 1600);
        return;
      }
    } else {
      charIndex--;
      if (charIndex < 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        charIndex = 0;
      }
    }

    typedRoleEl.textContent = roles[roleIndex].slice(0, charIndex);
    setTimeout(typeLoop, deleting ? 40 : 70);
  };
  setTimeout(typeLoop, 1800);
})();
