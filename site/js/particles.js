var SOCIRIS = SOCIRIS || {};

SOCIRIS.particles = {
  canvas: null,
  ctx: null,
  particles: [],
  shootingStars: [],
  nebulaClouds: [],
  auroraWaves: [],
  fireflies: [],
  orbitalRings: [],
  trailDots: [],
  constellationNodes: [],
  mouse: { x: null, y: null },
  raf: null,
  running: false,
  time: 0,
  clicks: [],
  mouseTrail: [],
  sparkles: [],

  init: function() {
    SOCIRIS.particles.destroy();
    SOCIRIS.particles.canvas = document.createElement('canvas');
    SOCIRIS.particles.canvas.id = 'particle-canvas';
    SOCIRIS.particles.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:.8';
    document.body.prepend(SOCIRIS.particles.canvas);
    SOCIRIS.particles.ctx = SOCIRIS.particles.canvas.getContext('2d');
    SOCIRIS.particles.resize();
    SOCIRIS.particles.create();
    SOCIRIS.particles.running = true;
    SOCIRIS.particles.time = 0;
    SOCIRIS.particles.animate();
    window.addEventListener('resize', SOCIRIS.particles.resize);
    window.addEventListener('mousemove', function(e) {
      SOCIRIS.particles.mouse.x = e.clientX;
      SOCIRIS.particles.mouse.y = e.clientY;
      SOCIRIS.particles.mouseTrail.push({ x: e.clientX, y: e.clientY, life: 1 });
      if (SOCIRIS.particles.mouseTrail.length > 30) SOCIRIS.particles.mouseTrail.shift();
    });
    document.addEventListener('click', function(e) {
      for (var i = 0; i < 18; i++) {
        var angle = (Math.PI * 2 / 18) * i + Math.random() * 0.3;
        var speed = 2 + Math.random() * 5;
        SOCIRIS.particles.clicks.push({
          x: e.clientX, y: e.clientY,
          vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          life: 1, decay: 0.015 + Math.random() * 0.015,
          r: 1.5 + Math.random() * 3,
          color: ['99,102,241', '6,182,212', '139,92,246', '236,72,153', '16,185,129', '59,130,246', '14,165,233'][Math.floor(Math.random() * 7)]
        });
      }
      for (var j = 0; j < 8; j++) {
        SOCIRIS.particles.sparkles.push({
          x: e.clientX + (Math.random() - 0.5) * 40,
          y: e.clientY + (Math.random() - 0.5) * 40,
          life: 1, decay: 0.02 + Math.random() * 0.02,
          size: 2 + Math.random() * 4,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.2,
          color: ['255,215,0', '99,102,241', '6,182,212', '236,72,153'][Math.floor(Math.random() * 4)]
        });
      }
    });
    SOCIRIS.particles.shootingStarInterval = setInterval(function() {
      if (Math.random() < 0.6) SOCIRIS.particles.addShootingStar();
    }, 1500);
    SOCIRIS.particles.sparkleInterval = setInterval(function() {
      if (Math.random() < 0.3) {
        var w = SOCIRIS.particles.canvas.width;
        var h = SOCIRIS.particles.canvas.height;
        SOCIRIS.particles.sparkles.push({
          x: Math.random() * w, y: Math.random() * h,
          life: 1, decay: 0.008 + Math.random() * 0.01,
          size: 1.5 + Math.random() * 3,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.15,
          color: ['255,255,255', '99,102,241', '6,182,212', '139,92,246', '16,185,129'][Math.floor(Math.random() * 5)]
        });
      }
    }, 300);
  },

  destroy: function() {
    SOCIRIS.particles.running = false;
    if (SOCIRIS.particles.raf) cancelAnimationFrame(SOCIRIS.particles.raf);
    if (SOCIRIS.particles.shootingStarInterval) clearInterval(SOCIRIS.particles.shootingStarInterval);
    if (SOCIRIS.particles.sparkleInterval) clearInterval(SOCIRIS.particles.sparkleInterval);
    if (SOCIRIS.particles.canvas && SOCIRIS.particles.canvas.parentNode) {
      SOCIRIS.particles.canvas.parentNode.removeChild(SOCIRIS.particles.canvas);
    }
    SOCIRIS.particles.particles = [];
    SOCIRIS.particles.shootingStars = [];
    SOCIRIS.particles.nebulaClouds = [];
    SOCIRIS.particles.auroraWaves = [];
    SOCIRIS.particles.fireflies = [];
    SOCIRIS.particles.orbitalRings = [];
    SOCIRIS.particles.trailDots = [];
    SOCIRIS.particles.constellationNodes = [];
    SOCIRIS.particles.clicks = [];
    SOCIRIS.particles.mouseTrail = [];
    SOCIRIS.particles.sparkles = [];
    SOCIRIS.particles.canvas = null;
    SOCIRIS.particles.ctx = null;
  },

  resize: function() {
    if (!SOCIRIS.particles.canvas) return;
    SOCIRIS.particles.canvas.width = window.innerWidth;
    SOCIRIS.particles.canvas.height = window.innerHeight;
  },

  addShootingStar: function() {
    var w = SOCIRIS.particles.canvas.width;
    var h = SOCIRIS.particles.canvas.height;
    var colors = ['255,255,255', '99,102,241', '6,182,212', '139,92,246'];
    SOCIRIS.particles.shootingStars.push({
      x: Math.random() * w * 0.8,
      y: Math.random() * h * 0.3,
      len: 60 + Math.random() * 120,
      speed: 8 + Math.random() * 12,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.4,
      life: 1,
      decay: 0.01 + Math.random() * 0.012,
      color: colors[Math.floor(Math.random() * colors.length)],
      width: 1 + Math.random() * 2
    });
  },

  create: function() {
    var w = SOCIRIS.particles.canvas.width;
    var h = SOCIRIS.particles.canvas.height;
    var count = Math.min(Math.floor((w * h) / 1500), 800);
    var colors = [
      'rgba(99, 102, 241, ',
      'rgba(6, 182, 212, ',
      'rgba(139, 92, 246, ',
      'rgba(16, 185, 129, ',
      'rgba(236, 72, 153, ',
      'rgba(59, 130, 246, ',
      'rgba(168, 85, 247, ',
      'rgba(14, 165, 233, ',
      'rgba(245, 158, 11, ',
      'rgba(244, 114, 182, '
    ];
    SOCIRIS.particles.particles = [];
    for (var i = 0; i < count; i++) {
      var ci = Math.floor(Math.random() * colors.length);
      var depth = Math.random();
      SOCIRIS.particles.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * (0.3 + depth * 0.7),
        vy: (Math.random() - 0.5) * (0.3 + depth * 0.7),
        r: 0.3 + depth * 3,
        color: colors[ci],
        alpha: 0.15 + depth * 0.5,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.03,
        depth: depth,
        twinkle: Math.random() < 0.25,
        twinkleSpeed: 0.03 + Math.random() * 0.05,
        hasGlow: depth > 0.7 && Math.random() < 0.4,
        orbitR: Math.random() < 0.1 ? 10 + Math.random() * 30 : 0,
        orbitAngle: Math.random() * Math.PI * 2,
        orbitSpeed: (Math.random() - 0.5) * 0.02,
        originX: 0, originY: 0
      });
      if (SOCIRIS.particles.particles[SOCIRIS.particles.particles.length - 1].orbitR) {
        SOCIRIS.particles.particles[SOCIRIS.particles.particles.length - 1].originX = Math.random() * w;
        SOCIRIS.particles.particles[SOCIRIS.particles.particles.length - 1].originY = Math.random() * h;
      }
    }

    SOCIRIS.particles.nebulaClouds = [];
    var nebulaColors = ['99,102,241', '6,182,212', '139,92,246', '236,72,153', '16,185,129', '59,130,246'];
    for (var n = 0; n < 8; n++) {
      SOCIRIS.particles.nebulaClouds.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 120 + Math.random() * 300,
        color: nebulaColors[n % nebulaColors.length],
        alpha: 0.015 + Math.random() * 0.025,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.003 + Math.random() * 0.005
      });
    }

    SOCIRIS.particles.auroraWaves = [];
    for (var a = 0; a < 3; a++) {
      SOCIRIS.particles.auroraWaves.push({
        y: h * 0.2 + Math.random() * h * 0.6,
        amplitude: 30 + Math.random() * 60,
        frequency: 0.002 + Math.random() * 0.003,
        speed: 0.01 + Math.random() * 0.015,
        offset: Math.random() * Math.PI * 2,
        color: ['99,102,241', '6,182,212', '139,92,246'][a],
        alpha: 0.02 + Math.random() * 0.015,
        width: 80 + Math.random() * 120
      });
    }

    SOCIRIS.particles.fireflies = [];
    for (var f = 0; f < 20; f++) {
      SOCIRIS.particles.fireflies.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: 2 + Math.random() * 3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.02 + Math.random() * 0.03,
        color: ['255,215,0', '16,185,129', '6,182,212', '99,102,241'][Math.floor(Math.random() * 4)],
        trail: []
      });
    }

    SOCIRIS.particles.constellationNodes = [];
    var nodeCount = 6 + Math.floor(Math.random() * 4);
    for (var cn = 0; cn < nodeCount; cn++) {
      SOCIRIS.particles.constellationNodes.push({
        x: 100 + Math.random() * (w - 200),
        y: 100 + Math.random() * (h - 200),
        r: 3,
        pulse: Math.random() * Math.PI * 2,
        connections: []
      });
    }
    for (var cn1 = 0; cn1 < SOCIRIS.particles.constellationNodes.length; cn1++) {
      for (var cn2 = cn1 + 1; cn2 < SOCIRIS.particles.constellationNodes.length; cn2++) {
        var dx = SOCIRIS.particles.constellationNodes[cn1].x - SOCIRIS.particles.constellationNodes[cn2].x;
        var dy = SOCIRIS.particles.constellationNodes[cn1].y - SOCIRIS.particles.constellationNodes[cn2].y;
        if (Math.sqrt(dx * dx + dy * dy) < 400 && Math.random() < 0.6) {
          SOCIRIS.particles.constellationNodes[cn1].connections.push(cn2);
        }
      }
    }
  },

  drawSparkle: function(ctx, x, y, size, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.beginPath();
    for (var i = 0; i < 4; i++) {
      var angle = (Math.PI / 2) * i;
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
    }
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.3);
    ctx.lineTo(0, size * 0.3);
    ctx.moveTo(-size * 0.3, 0);
    ctx.lineTo(size * 0.3, 0);
    ctx.stroke();
    ctx.restore();
  },

  animate: function() {
    if (!SOCIRIS.particles.running || !SOCIRIS.particles.ctx) return;
    var ctx = SOCIRIS.particles.ctx;
    var w = SOCIRIS.particles.canvas.width;
    var h = SOCIRIS.particles.canvas.height;
    var ps = SOCIRIS.particles.particles;
    var mouse = SOCIRIS.particles.mouse;
    SOCIRIS.particles.time++;

    ctx.clearRect(0, 0, w, h);

    for (var aw = 0; aw < SOCIRIS.particles.auroraWaves.length; aw++) {
      var aurora = SOCIRIS.particles.auroraWaves[aw];
      aurora.offset += aurora.speed;
      ctx.beginPath();
      ctx.moveTo(0, aurora.y);
      for (var ax = 0; ax <= w; ax += 4) {
        var ay = aurora.y + Math.sin(ax * aurora.frequency + aurora.offset) * aurora.amplitude
               + Math.sin(ax * aurora.frequency * 0.5 + aurora.offset * 0.7) * aurora.amplitude * 0.5;
        ctx.lineTo(ax, ay);
      }
      ctx.lineTo(w, aurora.y + aurora.width);
      for (var ax2 = w; ax2 >= 0; ax2 -= 4) {
        var ay2 = aurora.y + aurora.width + Math.sin(ax2 * aurora.frequency + aurora.offset + 1) * aurora.amplitude * 0.3;
        ctx.lineTo(ax2, ay2);
      }
      ctx.closePath();
      var aGrad = ctx.createLinearGradient(0, aurora.y - aurora.amplitude, 0, aurora.y + aurora.width);
      aGrad.addColorStop(0, 'rgba(' + aurora.color + ',0)');
      aGrad.addColorStop(0.3, 'rgba(' + aurora.color + ',' + aurora.alpha + ')');
      aGrad.addColorStop(0.7, 'rgba(' + aurora.color + ',' + aurora.alpha * 0.6 + ')');
      aGrad.addColorStop(1, 'rgba(' + aurora.color + ',0)');
      ctx.fillStyle = aGrad;
      ctx.fill();
    }

    for (var n = 0; n < SOCIRIS.particles.nebulaClouds.length; n++) {
      var nc = SOCIRIS.particles.nebulaClouds[n];
      nc.x += nc.vx;
      nc.y += nc.vy;
      nc.pulse += nc.pulseSpeed;
      if (nc.x < -nc.r) nc.x = w + nc.r;
      if (nc.x > w + nc.r) nc.x = -nc.r;
      if (nc.y < -nc.r) nc.y = h + nc.r;
      if (nc.y > h + nc.r) nc.y = -nc.r;
      var nebulaAlpha = nc.alpha + Math.sin(nc.pulse) * 0.008;
      var grad = ctx.createRadialGradient(nc.x, nc.y, 0, nc.x, nc.y, nc.r);
      grad.addColorStop(0, 'rgba(' + nc.color + ',' + Math.max(0, nebulaAlpha) + ')');
      grad.addColorStop(0.4, 'rgba(' + nc.color + ',' + Math.max(0, nebulaAlpha * 0.5) + ')');
      grad.addColorStop(1, 'rgba(' + nc.color + ',0)');
      ctx.fillStyle = grad;
      ctx.fillRect(nc.x - nc.r, nc.y - nc.r, nc.r * 2, nc.r * 2);
    }

    for (var ci = 0; ci < SOCIRIS.particles.constellationNodes.length; ci++) {
      var cnode = SOCIRIS.particles.constellationNodes[ci];
      cnode.pulse += 0.015;
      for (var cc = 0; cc < cnode.connections.length; cc++) {
        var target = SOCIRIS.particles.constellationNodes[cnode.connections[cc]];
        var cAlpha = 0.08 + Math.sin(cnode.pulse) * 0.04;
        ctx.beginPath();
        ctx.moveTo(cnode.x, cnode.y);
        ctx.lineTo(target.x, target.y);
        ctx.strokeStyle = 'rgba(99,102,241,' + cAlpha + ')';
        ctx.lineWidth = 0.8;
        ctx.stroke();
        var midX = (cnode.x + target.x) / 2;
        var midY = (cnode.y + target.y) / 2;
        var dotPos = (SOCIRIS.particles.time * 0.5 + cc * 100) % 100 / 100;
        var dx = cnode.x + (target.x - cnode.x) * dotPos;
        var dy = cnode.y + (target.y - cnode.y) * dotPos;
        ctx.beginPath();
        ctx.arc(dx, dy, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(99,102,241,0.4)';
        ctx.fill();
      }
      ctx.beginPath();
      ctx.arc(cnode.x, cnode.y, cnode.r + Math.sin(cnode.pulse) * 1, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99,102,241,0.25)';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cnode.x, cnode.y, cnode.r * 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99,102,241,0.03)';
      ctx.fill();
    }

    var connDist = 120;
    var mouseRadius = 250;

    for (var i = 0; i < ps.length; i++) {
      var p = ps[i];
      p.pulse += p.pulseSpeed;

      if (p.orbitR) {
        p.orbitAngle += p.orbitSpeed;
        p.x = p.originX + Math.cos(p.orbitAngle) * p.orbitR;
        p.y = p.originY + Math.sin(p.orbitAngle) * p.orbitR;
      }

      if (p.twinkle) {
        p.alpha = 0.1 + Math.abs(Math.sin(p.pulse * p.twinkleSpeed * 10)) * 0.7;
      }
      var alpha = p.alpha + Math.sin(p.pulse) * 0.15;

      if (mouse.x !== null) {
        var mdx = mouse.x - p.x;
        var mdy = mouse.y - p.y;
        var mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mdist < mouseRadius) {
          var force = (1 - mdist / mouseRadius) * 0.00012;
          p.vx += mdx * force;
          p.vy += mdy * force;
          alpha += (1 - mdist / mouseRadius) * 0.2;
        }
      }

      if (!p.orbitR) {
        p.vx *= 0.998;
        p.vy *= 0.998;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;
      }

      if (p.hasGlow) {
        var glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
        glowGrad.addColorStop(0, p.color + (Math.max(0, alpha) * 0.3) + ')');
        glowGrad.addColorStop(1, p.color + '0)');
        ctx.fillStyle = glowGrad;
        ctx.fillRect(p.x - p.r * 4, p.y - p.r * 4, p.r * 8, p.r * 8);
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.max(0, alpha) + ')';
      ctx.fill();

      if (p.depth > 0.45) {
        for (var j = i + 1; j < ps.length; j++) {
          var p2 = ps[j];
          if (p2.depth < 0.35) continue;
          var ddx = p.x - p2.x;
          var ddy = p.y - p2.y;
          var d = ddx * ddx + ddy * ddy;
          if (d < connDist * connDist) {
            var lineAlpha = (1 - Math.sqrt(d) / connDist) * 0.15 * Math.min(p.depth, p2.depth);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color + lineAlpha + ')';
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      if (mouse.x !== null && p.depth > 0.3) {
        var mx = p.x - mouse.x;
        var my = p.y - mouse.y;
        var mm = Math.sqrt(mx * mx + my * my);
        if (mm < 200) {
          var ml = (1 - mm / 200) * 0.22;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = p.color + ml + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    for (var fi = 0; fi < SOCIRIS.particles.fireflies.length; fi++) {
      var ff = SOCIRIS.particles.fireflies[fi];
      ff.phase += ff.speed;
      ff.x += ff.vx + Math.sin(ff.phase * 1.3) * 0.3;
      ff.y += ff.vy + Math.cos(ff.phase) * 0.3;
      if (ff.x < 0) ff.x = w;
      if (ff.x > w) ff.x = 0;
      if (ff.y < 0) ff.y = h;
      if (ff.y > h) ff.y = 0;
      ff.trail.push({ x: ff.x, y: ff.y });
      if (ff.trail.length > 15) ff.trail.shift();
      var ffAlpha = 0.3 + Math.sin(ff.phase) * 0.3;
      for (var ft = 0; ft < ff.trail.length - 1; ft++) {
        var trailAlpha = (ft / ff.trail.length) * ffAlpha * 0.3;
        ctx.beginPath();
        ctx.arc(ff.trail[ft].x, ff.trail[ft].y, ff.r * (ft / ff.trail.length) * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + ff.color + ',' + trailAlpha + ')';
        ctx.fill();
      }
      var ffGlow = ctx.createRadialGradient(ff.x, ff.y, 0, ff.x, ff.y, ff.r * 6);
      ffGlow.addColorStop(0, 'rgba(' + ff.color + ',' + (ffAlpha * 0.3) + ')');
      ffGlow.addColorStop(0.5, 'rgba(' + ff.color + ',' + (ffAlpha * 0.1) + ')');
      ffGlow.addColorStop(1, 'rgba(' + ff.color + ',0)');
      ctx.fillStyle = ffGlow;
      ctx.fillRect(ff.x - ff.r * 6, ff.y - ff.r * 6, ff.r * 12, ff.r * 12);
      ctx.beginPath();
      ctx.arc(ff.x, ff.y, ff.r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + ff.color + ',' + ffAlpha + ')';
      ctx.fill();
    }

    for (var s = SOCIRIS.particles.shootingStars.length - 1; s >= 0; s--) {
      var ss = SOCIRIS.particles.shootingStars[s];
      ss.x += Math.cos(ss.angle) * ss.speed;
      ss.y += Math.sin(ss.angle) * ss.speed;
      ss.life -= ss.decay;
      if (ss.life <= 0) { SOCIRIS.particles.shootingStars.splice(s, 1); continue; }
      var tailX = ss.x - Math.cos(ss.angle) * ss.len * ss.life;
      var tailY = ss.y - Math.sin(ss.angle) * ss.len * ss.life;
      var sGrad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
      sGrad.addColorStop(0, 'rgba(' + ss.color + ',0)');
      sGrad.addColorStop(0.7, 'rgba(' + ss.color + ',' + ss.life * 0.4 + ')');
      sGrad.addColorStop(1, 'rgba(255,255,255,' + ss.life * 0.9 + ')');
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(ss.x, ss.y);
      ctx.strokeStyle = sGrad;
      ctx.lineWidth = ss.width;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(ss.x, ss.y, ss.width + 1, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + ss.life * 0.8 + ')';
      ctx.fill();
      ctx.beginPath();
      ctx.arc(ss.x, ss.y, ss.width * 3, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + ss.color + ',' + ss.life * 0.2 + ')';
      ctx.fill();
    }

    for (var mt = SOCIRIS.particles.mouseTrail.length - 1; mt >= 0; mt--) {
      var tp = SOCIRIS.particles.mouseTrail[mt];
      tp.life -= 0.04;
      if (tp.life <= 0) { SOCIRIS.particles.mouseTrail.splice(mt, 1); continue; }
      ctx.beginPath();
      ctx.arc(tp.x, tp.y, 2 * tp.life, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(99,102,241,' + tp.life * 0.3 + ')';
      ctx.fill();
    }

    for (var c = SOCIRIS.particles.clicks.length - 1; c >= 0; c--) {
      var cp = SOCIRIS.particles.clicks[c];
      cp.x += cp.vx;
      cp.y += cp.vy;
      cp.vy += 0.05;
      cp.vx *= 0.97;
      cp.vy *= 0.97;
      cp.life -= cp.decay;
      if (cp.life <= 0) { SOCIRIS.particles.clicks.splice(c, 1); continue; }
      ctx.beginPath();
      ctx.arc(cp.x, cp.y, cp.r * cp.life, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + cp.color + ',' + cp.life + ')';
      ctx.fill();
      if (cp.life > 0.5) {
        ctx.beginPath();
        ctx.arc(cp.x, cp.y, cp.r * cp.life * 2.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + cp.color + ',' + cp.life * 0.15 + ')';
        ctx.fill();
      }
    }

    for (var sp = SOCIRIS.particles.sparkles.length - 1; sp >= 0; sp--) {
      var sk = SOCIRIS.particles.sparkles[sp];
      sk.life -= sk.decay;
      sk.rotation += sk.rotSpeed;
      if (sk.life <= 0) { SOCIRIS.particles.sparkles.splice(sp, 1); continue; }
      ctx.save();
      ctx.globalAlpha = sk.life;
      ctx.strokeStyle = 'rgba(' + sk.color + ',' + sk.life + ')';
      ctx.fillStyle = 'rgba(' + sk.color + ',' + sk.life * 0.5 + ')';
      SOCIRIS.particles.drawSparkle(ctx, sk.x, sk.y, sk.size * sk.life, sk.rotation);
      ctx.restore();
    }

    SOCIRIS.particles.raf = requestAnimationFrame(SOCIRIS.particles.animate);
  }
};
