var SOCIRIS = SOCIRIS || {};

SOCIRIS.theme = {
  TK: 'sociris-theme',

  get: function() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  },

  set: function(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(SOCIRIS.theme.TK, t); } catch(e) {}

    var suffix = t === 'light' ? 'light' : 'dark';
    var logoIds = ['logo-img', 'footer-logo', 'footer-shield', 'hero-center-logo', 'lore-logo', 'about-lore-logo', 'pricing-logo'];
    logoIds.forEach(function(id) {
      var el = document.getElementById(id);
      if (el) {
        if (id === 'footer-logo') {
          el.src = 'site/images/sociris-wide-logo-' + suffix + '.jpeg';
        } else {
          el.src = 'site/images/sociris-logo-' + suffix + '.jpeg';
        }
      }
    });
    document.querySelectorAll('[data-theme-logo]').forEach(function(el) {
      el.src = 'site/images/sociris-logo-' + suffix + '.jpeg';
    });
    document.querySelectorAll('[data-theme-wide-logo]').forEach(function(el) {
      el.src = 'site/images/sociris-wide-logo-' + suffix + '.jpeg';
    });
    SOCIRIS.theme.refreshIcons();
  },

  refreshIcons: function() {
    if (window.lucide) window.lucide.createIcons();
  }
};
