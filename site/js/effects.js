var SOCIRIS = SOCIRIS || {};

SOCIRIS.effects = {
  intervals: [],
  observers: [],
  styleEl: null,

  init: function() {
    SOCIRIS.effects.destroy();
    SOCIRIS.effects.injectStyles();
    SOCIRIS.effects.addFloatingGeometry();
    SOCIRIS.effects.addSectionGlows();
    SOCIRIS.effects.addHeroDataStreams();
    SOCIRIS.effects.enhanceCards();
    SOCIRIS.effects.addSectionParticles();
    SOCIRIS.effects.addObserverEffects();
    SOCIRIS.effects.addNavAmbient();
  },

  destroy: function() {
    SOCIRIS.effects.intervals.forEach(function(i) { clearInterval(i); });
    SOCIRIS.effects.intervals = [];
    SOCIRIS.effects.observers.forEach(function(o) { o.disconnect(); });
    SOCIRIS.effects.observers = [];
    document.querySelectorAll('.fx-geom, .fx-stream, .fx-section-glow, .fx-card-glow, .fx-nav-line, .fx-hex-bg, .fx-corner-decor, .fx-scanline, .fx-ripple-bg').forEach(function(el) { el.remove(); });
    if (SOCIRIS.effects.styleEl && SOCIRIS.effects.styleEl.parentNode) SOCIRIS.effects.styleEl.remove();
  },

  injectStyles: function() {
    var s = document.createElement('style');
    s.id = 'fx-styles';
    s.textContent = [
      '.fx-geom { position: absolute; pointer-events: none; opacity: .04; }',
      '.fx-geom.hex { width: 60px; height: 52px; background: var(--pri); clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%); }',
      '.fx-geom.tri { width: 0; height: 0; border-left: 25px solid transparent; border-right: 25px solid transparent; border-bottom: 43px solid var(--sec); }',
      '.fx-geom.diamond { width: 35px; height: 35px; background: var(--acc); transform: rotate(45deg); }',
      '.fx-geom.circle { width: 50px; height: 50px; border-radius: 50%; border: 2px solid var(--pri); }',
      '.fx-geom.cross { width: 30px; height: 30px; position: relative; }',
      '.fx-geom.cross::before, .fx-geom.cross::after { content: ""; position: absolute; background: var(--sec); }',
      '.fx-geom.cross::before { width: 100%; height: 2px; top: 50%; transform: translateY(-50%); }',
      '.fx-geom.cross::after { height: 100%; width: 2px; left: 50%; transform: translateX(-50%); }',
      '.fx-geom.dots { width: 40px; height: 40px; background: radial-gradient(circle, var(--pri) 1.5px, transparent 1.5px); background-size: 8px 8px; }',
      '.fx-stream { position: absolute; width: 1px; pointer-events: none; background: linear-gradient(to bottom, transparent, var(--pri), transparent); opacity: .08; }',
      '.fx-section-glow { position: absolute; border-radius: 50%; pointer-events: none; filter: blur(80px); }',
      '.fx-card-glow { position: absolute; inset: 0; border-radius: inherit; pointer-events: none; opacity: 0; transition: opacity .4s ease; background: radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(99,102,241,.08) 0%, transparent 60%); }',
      '.cd:hover .fx-card-glow, .qc:hover .fx-card-glow, .mission-card:hover .fx-card-glow, .feature-showcase-card:hover .fx-card-glow, .case-card:hover .fx-card-glow, .resource-card:hover .fx-card-glow, .integration-card:hover .fx-card-glow, .pricing-card:hover .fx-card-glow, .team-card:hover .fx-card-glow, .sdc:hover .fx-card-glow, .testimonial-card:hover .fx-card-glow, .uc:hover .fx-card-glow, .stat-card:hover .fx-card-glow { opacity: 1; }',
      '.fx-hex-bg { position: absolute; inset: 0; pointer-events: none; overflow: hidden; opacity: .015; }',
      '.fx-corner-decor { position: absolute; width: 80px; height: 80px; pointer-events: none; opacity: .08; }',
      '.fx-corner-decor.tl { top: 0; left: 0; border-top: 2px solid var(--pri); border-left: 2px solid var(--pri); }',
      '.fx-corner-decor.tr { top: 0; right: 0; border-top: 2px solid var(--sec); border-right: 2px solid var(--sec); }',
      '.fx-corner-decor.bl { bottom: 0; left: 0; border-bottom: 2px solid var(--acc); border-left: 2px solid var(--acc); }',
      '.fx-corner-decor.br { bottom: 0; right: 0; border-bottom: 2px solid var(--ok); border-right: 2px solid var(--ok); }',
      '.fx-scanline { position: absolute; inset: 0; pointer-events: none; background: repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(99,102,241,.01) 2px, rgba(99,102,241,.01) 4px); }',
      '.fx-ripple-bg { position: absolute; border-radius: 50%; pointer-events: none; border: 1px solid rgba(99,102,241,.06); animation: pulseRing 4s ease-out infinite; }',
      '@keyframes fxFloat1 { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-15px) rotate(5deg); } }',
      '@keyframes fxFloat2 { 0%, 100% { transform: translateY(0) rotate(45deg); } 50% { transform: translateY(-10px) rotate(50deg); } }',
      '@keyframes fxFloat3 { 0%, 100% { transform: translateY(0) scale(1); } 50% { transform: translateY(-8px) scale(1.05); } }',
      '@keyframes fxDataStream { 0% { transform: translateY(-100%); opacity: 0; } 10% { opacity: .08; } 90% { opacity: .08; } 100% { transform: translateY(100%); opacity: 0; } }',
      '.fx-energy-line { position: absolute; height: 1px; pointer-events: none; background: linear-gradient(90deg, transparent, var(--pri), var(--sec), transparent); animation: cyberLine 3s ease forwards; opacity: .15; }',
    ].join('\n');
    document.head.appendChild(s);
    SOCIRIS.effects.styleEl = s;
  },

  addFloatingGeometry: function() {
    var sections = document.querySelectorAll('.sec, .sec-alt, .ph, .hero, .demo-sec, .lore-section, .mission-hero');
    var shapes = ['hex', 'tri', 'diamond', 'circle', 'cross', 'dots'];
    var anims = ['fxFloat1', 'fxFloat2', 'fxFloat3'];
    sections.forEach(function(sec) {
      sec.style.position = sec.style.position || 'relative';
      sec.style.overflow = sec.style.overflow || 'hidden';
      var count = 2 + Math.floor(Math.random() * 3);
      for (var i = 0; i < count; i++) {
        var el = document.createElement('div');
        var shape = shapes[Math.floor(Math.random() * shapes.length)];
        el.className = 'fx-geom ' + shape;
        el.style.top = (10 + Math.random() * 80) + '%';
        el.style.left = (5 + Math.random() * 90) + '%';
        el.style.animation = anims[Math.floor(Math.random() * anims.length)] + ' ' + (6 + Math.random() * 8) + 's ease-in-out infinite';
        el.style.animationDelay = (-Math.random() * 5) + 's';
        sec.appendChild(el);
      }
    });
  },

  addSectionGlows: function() {
    var sections = document.querySelectorAll('.sec, .sec-alt');
    var glowColors = ['rgba(99,102,241,.04)', 'rgba(6,182,212,.03)', 'rgba(139,92,246,.03)', 'rgba(16,185,129,.03)'];
    sections.forEach(function(sec) {
      sec.style.position = sec.style.position || 'relative';
      var glow = document.createElement('div');
      glow.className = 'fx-section-glow';
      glow.style.width = (200 + Math.random() * 200) + 'px';
      glow.style.height = glow.style.width;
      glow.style.background = glowColors[Math.floor(Math.random() * glowColors.length)];
      glow.style.top = (Math.random() * 60) + '%';
      glow.style.right = '-5%';
      sec.appendChild(glow);
      if (Math.random() < 0.5) {
        var glow2 = document.createElement('div');
        glow2.className = 'fx-section-glow';
        glow2.style.width = (150 + Math.random() * 150) + 'px';
        glow2.style.height = glow2.style.width;
        glow2.style.background = glowColors[Math.floor(Math.random() * glowColors.length)];
        glow2.style.bottom = '10%';
        glow2.style.left = '-5%';
        sec.appendChild(glow2);
      }
    });
  },

  addHeroDataStreams: function() {
    var hero = document.querySelector('.hero');
    if (!hero) return;
    for (var i = 0; i < 5; i++) {
      var stream = document.createElement('div');
      stream.className = 'fx-stream';
      stream.style.left = (10 + Math.random() * 80) + '%';
      stream.style.height = (100 + Math.random() * 200) + 'px';
      stream.style.animation = 'fxDataStream ' + (4 + Math.random() * 6) + 's linear infinite';
      stream.style.animationDelay = (-Math.random() * 5) + 's';
      hero.appendChild(stream);
    }
    var scanline = document.createElement('div');
    scanline.className = 'fx-scanline';
    hero.appendChild(scanline);
    for (var c = 0; c < 4; c++) {
      var corner = document.createElement('div');
      corner.className = 'fx-corner-decor ' + ['tl', 'tr', 'bl', 'br'][c];
      var ctn = hero.querySelector('.ctn');
      if (ctn) {
        ctn.style.position = 'relative';
        ctn.appendChild(corner);
      }
    }
  },

  enhanceCards: function() {
    var cards = document.querySelectorAll('.cd, .qc, .mission-card, .feature-showcase-card, .case-card, .resource-card, .integration-card, .pricing-card, .team-card, .sdc, .testimonial-card, .uc, .stat-card');
    cards.forEach(function(card) {
      card.style.position = card.style.position || 'relative';
      card.style.overflow = card.style.overflow || 'hidden';
      var glow = document.createElement('div');
      glow.className = 'fx-card-glow';
      card.appendChild(glow);
      card.addEventListener('mousemove', function(e) {
        var rect = card.getBoundingClientRect();
        var x = ((e.clientX - rect.left) / rect.width * 100).toFixed(1);
        var y = ((e.clientY - rect.top) / rect.height * 100).toFixed(1);
        glow.style.setProperty('--mx', x + '%');
        glow.style.setProperty('--my', y + '%');
      });
    });
  },

  addSectionParticles: function() {
    var pageHeaders = document.querySelectorAll('.ph');
    pageHeaders.forEach(function(ph) {
      var ripple = document.createElement('div');
      ripple.className = 'fx-ripple-bg';
      ripple.style.width = '300px';
      ripple.style.height = '300px';
      ripple.style.top = '-50px';
      ripple.style.right = '10%';
      ph.appendChild(ripple);
      var ripple2 = document.createElement('div');
      ripple2.className = 'fx-ripple-bg';
      ripple2.style.width = '200px';
      ripple2.style.height = '200px';
      ripple2.style.bottom = '-30px';
      ripple2.style.left = '15%';
      ripple2.style.animationDelay = '1.5s';
      ph.appendChild(ripple2);
    });
  },

  addObserverEffects: function() {
    var fiElements = document.querySelectorAll('.fi');
    if (!fiElements.length || !('IntersectionObserver' in window)) return;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          var rect = entry.target.getBoundingClientRect();
          for (var i = 0; i < 6; i++) {
            setTimeout(function() {
              if (!SOCIRIS.particles.running) return;
              SOCIRIS.particles.sparkles.push({
                x: rect.left + Math.random() * rect.width,
                y: rect.top + window.scrollY + Math.random() * rect.height - window.scrollY,
                life: 1, decay: 0.015,
                size: 2 + Math.random() * 3,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.15,
                color: ['99,102,241', '6,182,212', '139,92,246', '16,185,129'][Math.floor(Math.random() * 4)]
              });
            }, i * 80);
          }
        }
      });
    }, { threshold: 0.2 });
    fiElements.forEach(function(el) { observer.observe(el); });
    SOCIRIS.effects.observers.push(observer);
  },

  addNavAmbient: function() {
    var nav = document.querySelector('nav');
    if (!nav) return;
    var line = document.createElement('div');
    line.className = 'fx-energy-line';
    line.style.bottom = '0';
    line.style.left = '0';
    line.style.width = '100%';
    line.style.opacity = '.08';
    line.style.animation = 'none';
    nav.appendChild(line);
  }
};

(function() {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', SOCIRIS.effects.init);
  else SOCIRIS.effects.init();
})();
