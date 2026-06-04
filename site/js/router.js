var SOCIRIS = SOCIRIS || {};

SOCIRIS.router = {
  curPage: null,

  handle: function() {
    var hash = window.location.hash || '#/';
    var route = hash.replace('#/', '').replace('#', '').split('/')[0] || 'home';
    if (!SOCIRIS.pages[route]) route = 'home';

    var app = document.getElementById('app');
    if (!app) return;

    SOCIRIS.demo.destroy();

    var loader = document.getElementById('page-loader');
    if (loader) loader.classList.add('active');

    window.scrollTo({ top: 0, behavior: 'instant' });
    var pg = SOCIRIS.pages[route];
    if (!pg || typeof pg.render !== 'function') return;

    SOCIRIS.router.curPage = route;
    app.innerHTML = '<div class="page-in">' + pg.render() + '</div>';

    if (typeof pg.init === 'function') pg.init();
    SOCIRIS.router.updateNav(route);
    SOCIRIS.theme.refreshIcons();
    SOCIRIS.router.observeFade();
    SOCIRIS.router.initGSAP();

    document.title = pg.title || 'SOCIRIS';
    var md = document.querySelector('meta[name="description"]');
    if (md && pg.desc) md.setAttribute('content', pg.desc);

    setTimeout(function() {
      if (loader) loader.classList.remove('active');
    }, 300);
  },

  updateNav: function(r) {
    document.querySelectorAll('.nl').forEach(function(l) {
      var h = (l.getAttribute('href') || '').replace('#/', '').replace('#', '') || 'home';
      if (h === r) l.classList.add('ac');
      else l.classList.remove('ac');
    });
  },

  observeFade: function() {
    var els = document.querySelectorAll('.fi');
    if (!els.length) return;
    var obs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          e.target.classList.add('vis');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .1, rootMargin: '0px 0px -40px 0px' });
    els.forEach(function(el) { obs.observe(el); });
  },

  initGSAP: function() {
    if (!window.gsap || !window.ScrollTrigger) return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.gsap-fade').forEach(function(el) {
      gsap.from(el, {
        opacity: 0, y: 40, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    gsap.utils.toArray('.gsap-slide-left').forEach(function(el) {
      gsap.from(el, {
        opacity: 0, x: -60, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });

    gsap.utils.toArray('.gsap-slide-right').forEach(function(el) {
      gsap.from(el, {
        opacity: 0, x: 60, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });

    gsap.utils.toArray('.gsap-scale').forEach(function(el) {
      gsap.from(el, {
        opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.2)',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });

    gsap.utils.toArray('.parallax-bg').forEach(function(el) {
      gsap.to(el, {
        yPercent: -20, ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true }
      });
    });

    gsap.utils.toArray('.gsap-pop').forEach(function(el) {
      gsap.from(el, {
        opacity: 0, scale: .8, duration: .6, ease: 'back.out(1.4)',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });

    gsap.utils.toArray('.gsap-rotate').forEach(function(el) {
      gsap.from(el, {
        opacity: 0, rotation: -5, duration: .8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });

    gsap.utils.toArray('.gsap-clip').forEach(function(el) {
      gsap.from(el, {
        clipPath: 'inset(100% 0 0 0)', duration: .8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });
  }
};
