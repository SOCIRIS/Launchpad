var SOCIRIS = SOCIRIS || {};

SOCIRIS.theme = {
  TK: 'sociris-theme',

  get: function() {
    return document.documentElement.getAttribute('data-theme') || 'dark';
  },

  set: function(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem(SOCIRIS.theme.TK, t); } catch(e) {}

    var n = document.getElementById('logo-img');
    var f = document.getElementById('footer-logo');
    var fs = document.getElementById('footer-shield');
    if (n) n.src = 'site/images/sociris-logo-' + (t === 'light' ? 'light' : 'dark') + '.jpeg';
    if (f) f.src = 'site/images/sociris-wide-logo-' + (t === 'light' ? 'light' : 'dark') + '.jpeg';
    if (fs) fs.src = 'site/images/sociris-logo-' + (t === 'light' ? 'light' : 'dark') + '.jpeg';
    var heroLogo = document.getElementById('hero-center-logo');
    if (heroLogo) heroLogo.src = 'site/images/sociris-logo-' + (t === 'light' ? 'light' : 'dark') + '.jpeg';
    var loreLogo = document.getElementById('lore-logo');
    if (loreLogo) loreLogo.src = 'site/images/sociris-logo-' + (t === 'light' ? 'light' : 'dark') + '.jpeg';
    SOCIRIS.theme.refreshIcons();
  },

  refreshIcons: function() {
    if (window.lucide) window.lucide.createIcons();
  }
};
