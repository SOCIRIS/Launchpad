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

    var cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow && window.innerWidth > 768) {
      document.addEventListener('mousemove', function(e) {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
        cursorGlow.classList.remove('hidden');
      });
      document.addEventListener('mouseleave', function() {
        cursorGlow.classList.add('hidden');
      });
    }

    document.addEventListener('mousemove', function(e) {
      document.querySelectorAll('.tilt-3d').forEach(function(card) {
        var rect = card.getBoundingClientRect();
        var x = e.clientX - rect.left;
        var y = e.clientY - rect.top;
        if (x < 0 || x > rect.width || y < 0 || y > rect.height) return;
        var rotateY = ((x / rect.width) - .5) * 8;
        var rotateX = -((y / rect.height) - .5) * 8;
        card.style.transform = 'perspective(800px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(1.02)';
      });
      document.querySelectorAll('.tilt-3d').forEach(function(card) {
        card.addEventListener('mouseleave', function() {
          card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)';
        });
      });
    }, { passive: true });

    document.querySelectorAll('.magnetic-btn, .btn.bp, .btn.bs').forEach(function(btn) {
      btn.addEventListener('mousemove', function(e) {
        var rect = btn.getBoundingClientRect();
        var x = e.clientX - rect.left - rect.width / 2;
        var y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * .15) + 'px, ' + (y * .15) + 'px)';
      });
      btn.addEventListener('mouseleave', function() {
        btn.style.transform = '';
      });
      btn.addEventListener('click', function(e) {
        var ripple = document.createElement('span');
        ripple.style.cssText = 'position:absolute;border-radius:50%;background:rgba(255,255,255,.3);transform:scale(0);animation:rippleAnim .6s ease;pointer-events:none;width:100px;height:100px;left:' + (e.clientX - btn.getBoundingClientRect().left - 50) + 'px;top:' + (e.clientY - btn.getBoundingClientRect().top - 50) + 'px';
        btn.appendChild(ripple);
        setTimeout(function() { ripple.remove(); }, 600);
      });
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
