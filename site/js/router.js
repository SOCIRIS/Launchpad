var SOCIRIS = SOCIRIS || {};

SOCIRIS.router = {
  curPage: null,

  handle: function() {
    var hash = window.location.hash || '#/';
    var route = hash.replace('#/', '').replace('#', '').split('/')[0] || 'home';
    if (!SOCIRIS.pages[route]) route = 'home';

    var app = document.getElementById('app');
    if (!app) return;

    window.scrollTo({ top: 0, behavior: 'instant' });
    var pg = SOCIRIS.pages[route];
    if (!pg || typeof pg.render !== 'function') return;

    SOCIRIS.router.curPage = route;
    app.innerHTML = '<div class="page-in">' + pg.render() + '</div>';

    if (typeof pg.init === 'function') pg.init();
    SOCIRIS.router.updateNav(route);
    SOCIRIS.theme.refreshIcons();
    SOCIRIS.router.observeFade();

    document.title = pg.title || 'SOCIRIS';
    var md = document.querySelector('meta[name="description"]');
    if (md && pg.desc) md.setAttribute('content', pg.desc);
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
  }
};
