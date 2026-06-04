var SOCIRIS = SOCIRIS || {};

SOCIRIS.I = function(n) { return '<i data-lucide="' + n + '"></i>'; };

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

SOCIRIS.dashCard = function(cls, label, value, change, changeDir) {
  return '<div class="dash-card dc-' + cls + ' fi"><div class="dc-label">' + label + '</div><div class="dc-value" data-count="' + value + '" data-suffix="' + (value === '99.7' ? '%' : value === '847' ? '' : value === '23' ? 's' : value === '1.2' ? 'K' : '') + '">' + value + '</div><div class="dc-change dc-' + changeDir + '">' + SOCIRIS.I(changeDir === 'up' ? 'trending-up' : 'trending-down') + ' ' + change + '</div></div>';
};

SOCIRIS.ringChart = function(value, color, label) {
  var r = 48; var circ = 2 * Math.PI * r;
  return '<div class="stat-ring fi" data-value="' + value + '"><svg width="120" height="120" viewBox="0 0 120 120"><circle class="stat-ring-bg" cx="60" cy="60" r="' + r + '"/><circle class="stat-ring-fill" cx="60" cy="60" r="' + r + '" stroke="' + color + '" style="stroke-dasharray:' + circ + ';stroke-dashoffset:' + circ + '"/></svg><div class="stat-ring-label"><div class="stat-ring-value">0%</div><div class="stat-ring-text">' + label + '</div></div></div>';
};

SOCIRIS.missionCard = function(icon, cls, title, desc) {
  return '<div class="mission-card fi"><div class="mc-icon ' + cls + '">' + icon + '</div><h3>' + title + '</h3><p>' + desc + '</p></div>';
};

SOCIRIS.codeBlock = function(lang, lines) {
  var code = lines.map(function(l, i) { return '<div><span class="code-line-num">' + (i + 1) + '</span>' + l + '</div>'; }).join('');
  return '<div class="code-block fi"><span class="code-lang">' + lang + '</span>' + code + '</div>';
};

SOCIRIS.archFlow = function(nodes) {
  var I = SOCIRIS.I;
  return '<div class="arch-flow">' + nodes.map(function(n, i) {
    var nodeHtml = '<div class="arch-node ' + (n.cls || '') + '">' + (n.icon ? I(n.icon) + ' ' : '') + n.label + '</div>';
    if (i < nodes.length - 1) nodeHtml += '<span class="arch-arrow">' + I('arrow-right') + '</span>';
    return nodeHtml;
  }).join('') + '</div>';
};

SOCIRIS.impactCard = function(value, cls, label) {
  return '<div class="impact-card fi"><div class="impact-value ' + cls + '">' + value + '</div><div class="impact-label">' + label + '</div></div>';
};

SOCIRIS.threatMarker = function(top, left, sev) {
  return '<div class="threat-marker ' + sev + '" style="top:' + top + '%;left:' + left + '%"></div>';
};

SOCIRIS.pricingCard = function(name, price, period, desc, features, featured) {
  var I = SOCIRIS.I;
  return '<div class="pricing-card' + (featured ? ' featured' : '') + ' fi"><h3 class="pricing-name">' + name + '</h3><div class="pricing-price' + (featured ? ' gt' : '') + '">' + price + '<span>' + period + '</span></div><p class="pricing-desc">' + desc + '</p><ul class="pricing-features">' + features.map(function(f) { return '<li>' + I('check') + ' ' + f + '</li>'; }).join('') + '</ul><button class="btn ' + (featured ? 'bp' : 'bs') + '" style="width:100%;margin-top:1.5rem" onclick="this.textContent=\'Coming Soon\';this.style.opacity=\'.6\'">' + (featured ? 'Get Started' : 'Contact Us') + '</button></div>';
};

SOCIRIS.testimonial = function(text, name, role, avatar) {
  return '<div class="testimonial-card fi"><p class="testimonial-text">' + text + '</p><div class="testimonial-author"><div class="testimonial-avatar">' + avatar + '</div><div><div class="testimonial-name">' + name + '</div><div class="testimonial-role">' + role + '</div></div></div></div>';
};

SOCIRIS.caseStudy = function(icon, cls, title, desc, metrics, tags) {
  var I = SOCIRIS.I;
  var metricsHtml = metrics.map(function(m) { return '<div class="case-metric-item"><div class="case-metric-value ' + m.cls + '">' + m.value + '</div><div class="case-metric-label">' + m.label + '</div></div>'; }).join('');
  return '<div class="case-card fi"><div class="ci ' + cls + '">' + icon + '</div><h3 style="margin-bottom:.5rem">' + title + '</h3><p style="font-size:.875rem">' + desc + '</p><div class="case-metric">' + metricsHtml + '</div><div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1rem">' + tags.map(function(t) { return '<span style="padding:.25rem .625rem;border-radius:9999px;background:rgba(99,102,241,.08);font-size:.6875rem;font-weight:600;color:var(--pri-l)">' + t + '</span>'; }).join('') + '</div></div>';
};

SOCIRIS.resourceItem = function(type, typeBg, title, desc, date) {
  var I = SOCIRIS.I;
  return '<div class="resource-card fi"><span class="resource-type" style="background:' + typeBg + '">' + I('file-text') + ' ' + type + '</span><h4 style="margin-bottom:.5rem">' + title + '</h4><p style="font-size:.875rem;margin-bottom:auto">' + desc + '</p><div style="display:flex;justify-content:space-between;align-items:center;margin-top:1rem"><span style="font-size:.75rem;color:var(--tm)">' + date + '</span><span style="font-size:.875rem;font-weight:600;color:var(--pri-l);display:flex;align-items:center;gap:.25rem">' + I('arrow-right') + ' Read</span></div></div>';
};

SOCIRIS.sectionHeader = function(icon, label, title, subtitle) {
  return '<div class="sh"><span class="slb">' + SOCIRIS.I(icon) + ' ' + label + '</span><h2>' + title + '</h2>' + (subtitle ? '<p class="ss">' + subtitle + '</p>' : '') + '</div>';
};

SOCIRIS.trustBadge = function(icon, text) {
  return '<div class="trust-badge">' + SOCIRIS.I(icon) + ' ' + text + '</div>';
};

SOCIRIS.loreLetterCards = function() {
  return '<div class="lore-breakdown">' +
    '<div class="lore-letter-card fi"><div class="lore-letter-char gt">S</div><div class="lore-letter-meaning"><strong>Security</strong><br>Multi-layered defense with hash-chained audit trails</div></div>' +
    '<div class="lore-letter-card fi"><div class="lore-letter-char gt2">O</div><div class="lore-letter-meaning"><strong>Operations</strong><br>24/7 autonomous SOC operations with CD/CR loop</div></div>' +
    '<div class="lore-letter-card fi"><div class="lore-letter-char gt3">C</div><div class="lore-letter-meaning"><strong>Center</strong><br>Centralized intelligence with Security Context Graph</div></div>' +
    '<div class="lore-letter-card fi"><div class="lore-letter-char gt">I</div><div class="lore-letter-meaning"><strong>Intelligent</strong><br>AI cascade: triage → deep analysis → HITL verification</div></div>' +
    '<div class="lore-letter-card fi"><div class="lore-letter-char gt2">R</div><div class="lore-letter-meaning"><strong>Response</strong><br>5 SOAR playbooks with human-in-the-loop gates</div></div>' +
    '<div class="lore-letter-card fi"><div class="lore-letter-char gt3">S</div><div class="lore-letter-meaning"><strong>Surveillance</strong><br>FaceNet + MTCNN + GPS + CCTV + OSINT fusion</div></div>' +
    '</div>';
};

SOCIRIS.loreVisual = function(id) {
  return '<div class="lore-visual"><div class="lore-logo-ring">' +
    '<img src="site/images/sociris-logo-dark.jpeg" alt="SOCIRIS" class="lore-logo-img" id="' + (id || 'lore-logo') + '">' +
    '<div class="lore-letter" style="top:-10px;left:50%;transform:translateX(-50%)" title="Security">S</div>' +
    '<div class="lore-letter" style="top:20%;right:-10px" title="Operations">O</div>' +
    '<div class="lore-letter" style="bottom:20%;right:-10px" title="Center">C</div>' +
    '<div class="lore-letter" style="bottom:-10px;left:50%;transform:translateX(-50%)" title="Intelligent">I</div>' +
    '<div class="lore-letter" style="bottom:20%;left:-10px" title="Response">R</div>' +
    '<div class="lore-letter" style="top:20%;left:-10px" title="Surveillance">S</div>' +
    '</div></div>';
};

SOCIRIS.dualMeaning = function() {
  return '<div class="lore-dual">' +
    '<div class="lore-dual-card soc-card fi">' +
    '<div class="lore-dual-title gt">SOC</div>' +
    '<div class="lore-dual-subtitle">Security Operations Center</div>' +
    '<div class="lore-dual-desc">The nerve center of modern cybersecurity defense — where analysts, processes, and technology converge to detect, investigate, and respond to threats across the entire digital attack surface.</div>' +
    '</div>' +
    '<div class="lore-dual-card iris-card fi">' +
    '<div class="lore-dual-title gt2">IRIS</div>' +
    '<div class="lore-dual-subtitle">The Eye That Sees All</div>' +
    '<div class="lore-dual-desc">The iris is the part of the eye that controls light and focus — it determines what we see, how clearly we see it, and adapts instantaneously to any environment. Like the human iris, SOCIRIS adapts, focuses, and brings clarity to chaos.</div>' +
    '</div>' +
    '</div>';
};
