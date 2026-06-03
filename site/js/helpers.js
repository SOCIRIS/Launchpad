var SOCIRIS = SOCIRIS || {};

SOCIRIS.I = function(n) {
  return '<i data-lucide="' + n + '"></i>';
};

SOCIRIS.ph = function(bc, t, st) {
  return '<section class="ph"><div class="ctn"><nav class="bc"><a href="#/">Home</a><span>/</span><span>' + bc + '</span></nav><h1>' + t + '</h1><p class="hs" style="margin-bottom:0">' + st + '</p></div></section>';
};

SOCIRIS.cta = function(t, s, b1, l1, b2, l2) {
  var I = SOCIRIS.I;
  var c1 = l1.charAt(0) === '#' ?
    '<a href="' + l1 + '" class="btn bp bl"><span>' + b1 + '</span>' + I('arrow-right') + '</a>' :
    '<a href="' + l1 + '" target="_blank" class="btn bp bl"><span>' + b1 + '</span>' + I('external-link') + '</a>';
  var c2 = l2.charAt(0) === '#' ?
    '<a href="' + l2 + '" class="btn bs bl"><span>' + b2 + '</span>' + I('mail') + '</a>' :
    '<a href="' + l2 + '" class="btn bs bl"><span>' + b2 + '</span>' + I('mail') + '</a>';
  return '<section class="cta"><div class="ctn"><div class="ctaw"><div class="ctat"><h2>' + t + '</h2><p>' + s + '</p></div><div class="ctaa">' + c1 + c2 + '</div></div></div></section>';
};

SOCIRIS.svc = function(n, ic, t, tag, desc, feat, uses) {
  var I = SOCIRIS.I;
  return '<div class="sdc fi"><div class="sn2">' + n + '</div><div class="shd"><div class="ci c1">' + ic + '</div><div><h2 style="margin-bottom:.25rem">' + t + '</h2><p class="stg">' + tag + '</p></div></div><p>' + desc + '</p><div class="sfg"><div class="fl"><h4>' + I('check-circle') + ' Key Features</h4><ul>' + feat.map(function(f) { return '<li>' + I('check') + ' ' + f + '</li>'; }).join('') + '</ul></div><div class="fl"><h4>' + I('target') + ' Use Cases</h4><ul>' + uses.map(function(u) { return '<li>' + I('check') + ' ' + u + '</li>'; }).join('') + '</ul></div></div></div>';
};

SOCIRIS.cpI = function(ic, cls, t, d, s, bc) {
  var I = SOCIRIS.I;
  return '<div class="cpi"><div class="ci ' + cls + '">' + ic + '</div><div><h4 style="margin-bottom:.25rem">' + t + '</h4><p style="font-size:.9375rem">' + d + '</p><div class="sb ' + bc + '">' + I(bc === 'sbs' ? 'trending-up' : 'trending-down') + ' ' + s + '</div></div></div>';
};

SOCIRIS.uc = function(ic, t, d, feat, ben) {
  var I = SOCIRIS.I;
  return '<div class="uc fi"><div class="uci">' + ic + '</div><h3 style="margin-bottom:.5rem">' + t + '</h3><p style="margin-bottom:1rem">' + d + '</p><h4 style="margin-bottom:.75rem">Key Applications</h4><ul class="ucf">' + feat.map(function(f) { return '<li>' + I('check') + ' ' + f + '</li>'; }).join('') + '</ul><div class="ucb">' + ben.map(function(b) { return '<div class="bt">' + I('shield') + ' ' + b + '</div>'; }).join('') + '</div></div>';
};

SOCIRIS.pc = function(cls, badge, t, desc) {
  var I = SOCIRIS.I;
  var tags = Array.prototype.slice.call(arguments, 4);
  return '<div class="cd fi"><span class="pb ' + cls + '">' + badge + '</span><h3 style="margin-bottom:.75rem">' + t + '</h3><p style="margin-bottom:1rem">' + desc + '</p><div style="display:flex;flex-wrap:wrap;gap:.5rem">' + tags.map(function(tg) { return '<span style="padding:.25rem .75rem;border-radius:9999px;background:rgba(99,102,241,.08);border:1px solid rgba(99,102,241,.15);font-size:.75rem;font-weight:500;color:var(--pri-l)">' + tg + '</span>'; }).join('') + '</div></div>';
};

SOCIRIS.faq = function(q, a) {
  var I = SOCIRIS.I;
  return '<div class="tc" onclick="this.classList.toggle(\'open\')"><h4>' + q + ' <span style="transition:transform .3s">' + I('chevron-down') + '</span></h4><p>' + a + '</p></div>';
};
