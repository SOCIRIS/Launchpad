var SOCIRIS = SOCIRIS || {};

(function() {
  function init() {
    var stored = null;
    try { stored = localStorage.getItem(SOCIRIS.theme.TK); } catch(e) {}
    var theme = stored || (window.matchMedia('(prefers-color-scheme:light)').matches ? 'light' : 'dark');
    SOCIRIS.theme.set(theme);

    var nb = document.getElementById('navbar'), btt = document.getElementById('btt'), ticking = false;
    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          if (window.pageYOffset > 80) nb.classList.add('sc');
          else nb.classList.remove('sc');
          if (window.pageYOffset > 500) btt.classList.add('vis');
          else btt.classList.remove('vis');
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    var mt = document.getElementById('mt'), nm = document.getElementById('nm');
    mt.addEventListener('click', function() {
      mt.classList.toggle('on');
      nm.classList.toggle('on');
      document.body.style.overflow = nm.classList.contains('on') ? 'hidden' : '';
    });
    nm.querySelectorAll('.nl, .nd-item').forEach(function(l) {
      l.addEventListener('click', function() {
        mt.classList.remove('on');
        nm.classList.remove('on');
        document.body.style.overflow = '';
      });
    });
    nm.querySelectorAll('.nd > a.nl').forEach(function(d) {
      d.addEventListener('click', function(e) {
        if (window.innerWidth <= 968) {
          e.preventDefault();
          d.parentElement.classList.toggle('on');
        }
      });
    });
    document.addEventListener('click', function(e) {
      if (!mt.contains(e.target) && !nm.contains(e.target)) {
        mt.classList.remove('on');
        nm.classList.remove('on');
        document.body.style.overflow = '';
      }
    });

    document.getElementById('tt').addEventListener('click', function() {
      var c = SOCIRIS.theme.get();
      SOCIRIS.theme.set(c === 'light' ? 'dark' : 'light');
      var btn = document.getElementById('tt');
      var ic = btn.querySelector('[data-lucide]');
      if (ic) ic.setAttribute('data-lucide', SOCIRIS.theme.get() === 'light' ? 'moon' : 'sun');
      SOCIRIS.theme.refreshIcons();
    });

    btt.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('hashchange', SOCIRIS.router.handle);
    SOCIRIS.router.handle();
    SOCIRIS.particles.init();
    SOCIRIS.demo.initScrollIndicator();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
