var SOCIRIS = SOCIRIS || {};

SOCIRIS.particles = {
  canvas: null,
  ctx: null,
  particles: [],
  shootingStars: [],
  nebulaClouds: [],
  mouse: { x: null, y: null },
  raf: null,
  running: false,
  time: 0,
  clicks: [],

  init: function() {
    SOCIRIS.particles.destroy();
    SOCIRIS.particles.canvas = document.createElement('canvas');
    SOCIRIS.particles.canvas.id = 'particle-canvas';
    SOCIRIS.particles.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:.7';
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
    });
    document.addEventListener('click', function(e) {
      for (var i = 0; i < 12; i++) {
        var angle = (Math.PI * 2 / 12) * i;
        var speed = 2 + Math.random() * 3;
        SOCIRIS.particles.clicks.push({
          x: e.clientX, y: e.clientY,
          vx: Math.cos(angle) * speed, vy: Math.sin(angle) * speed,
          life: 1, decay: 0.02 + Math.random() * 0.02,
          r: 1 + Math.random() * 2,
          color: ['99,102,241', '6,182,212', '139,92,246', '236,72,153', '16,185,129'][Math.floor(Math.random() * 5)]
        });
      }
    });
    SOCIRIS.particles.shootingStarInterval = setInterval(function() {
      if (Math.random() < 0.4) SOCIRIS.particles.addShootingStar();
    }, 2000);
  },

  destroy: function() {
    SOCIRIS.particles.running = false;
    if (SOCIRIS.particles.raf) cancelAnimationFrame(SOCIRIS.particles.raf);
    if (SOCIRIS.particles.shootingStarInterval) clearInterval(SOCIRIS.particles.shootingStarInterval);
    if (SOCIRIS.particles.canvas && SOCIRIS.particles.canvas.parentNode) {
      SOCIRIS.particles.canvas.parentNode.removeChild(SOCIRIS.particles.canvas);
    }
    SOCIRIS.particles.particles = [];
    SOCIRIS.particles.shootingStars = [];
    SOCIRIS.particles.nebulaClouds = [];
    SOCIRIS.particles.clicks = [];
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
    SOCIRIS.particles.shootingStars.push({
      x: Math.random() * w * 0.7,
      y: Math.random() * h * 0.3,
      len: 40 + Math.random() * 80,
      speed: 6 + Math.random() * 8,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      life: 1,
      decay: 0.015 + Math.random() * 0.01
    });
  },

  create: function() {
    var w = SOCIRIS.particles.canvas.width;
    var h = SOCIRIS.particles.canvas.height;
    var count = Math.min(Math.floor((w * h) / 3000), 500);
    var colors = [
      'rgba(99, 102, 241, ',
      'rgba(6, 182, 212, ',
      'rgba(139, 92, 246, ',
      'rgba(16, 185, 129, ',
      'rgba(236, 72, 153, ',
      'rgba(59, 130, 246, ',
      'rgba(168, 85, 247, ',
      'rgba(14, 165, 233, '
    ];
    SOCIRIS.particles.particles = [];
    for (var i = 0; i < count; i++) {
      var ci = Math.floor(Math.random() * colors.length);
      var depth = Math.random();
      SOCIRIS.particles.particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * (0.2 + depth * 0.5),
        vy: (Math.random() - 0.5) * (0.2 + depth * 0.5),
        r: 0.3 + depth * 2.5,
        color: colors[ci],
        alpha: 0.15 + depth * 0.45,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 0.005 + Math.random() * 0.025,
        depth: depth,
        twinkle: Math.random() < 0.15,
        twinkleSpeed: 0.03 + Math.random() * 0.04
      });
    }
    SOCIRIS.particles.nebulaClouds = [];
    for (var n = 0; n < 4; n++) {
      SOCIRIS.particles.nebulaClouds.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 100 + Math.random() * 200,
        color: ['99,102,241', '6,182,212', '139,92,246', '236,72,153'][n],
        alpha: 0.02 + Math.random() * 0.02,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1
      });
    }
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

    for (var n = 0; n < SOCIRIS.particles.nebulaClouds.length; n++) {
      var nc = SOCIRIS.particles.nebulaClouds[n];
      nc.x += nc.vx;
      nc.y += nc.vy;
      if (nc.x < -nc.r) nc.x = w + nc.r;
      if (nc.x > w + nc.r) nc.x = -nc.r;
      if (nc.y < -nc.r) nc.y = h + nc.r;
      if (nc.y > h + nc.r) nc.y = -nc.r;
      var grad = ctx.createRadialGradient(nc.x, nc.y, 0, nc.x, nc.y, nc.r);
      grad.addColorStop(0, 'rgba(' + nc.color + ',' + nc.alpha + ')');
      grad.addColorStop(1, 'rgba(' + nc.color + ',0)');
      ctx.fillStyle = grad;
      ctx.fillRect(nc.x - nc.r, nc.y - nc.r, nc.r * 2, nc.r * 2);
    }

    var connDist = 100;
    var mouseRadius = 200;

    for (var i = 0; i < ps.length; i++) {
      var p = ps[i];
      p.pulse += p.pulseSpeed;

      if (p.twinkle) {
        p.alpha = 0.1 + Math.abs(Math.sin(p.pulse * p.twinkleSpeed * 10)) * 0.6;
      }
      var alpha = p.alpha + Math.sin(p.pulse) * 0.12;

      if (mouse.x !== null) {
        var dx = mouse.x - p.x;
        var dy = mouse.y - p.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < mouseRadius) {
          var force = (1 - dist / mouseRadius) * 0.00008;
          p.vx += dx * force;
          p.vy += dy * force;
        }
      }

      p.vx *= 0.999;
      p.vy *= 0.999;
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -10) p.x = w + 10;
      if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10;
      if (p.y > h + 10) p.y = -10;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + Math.max(0, alpha) + ')';
      ctx.fill();

      if (p.depth > 0.5) {
        for (var j = i + 1; j < ps.length; j++) {
          var p2 = ps[j];
          if (p2.depth < 0.4) continue;
          var ddx = p.x - p2.x;
          var ddy = p.y - p2.y;
          var d = ddx * ddx + ddy * ddy;
          if (d < connDist * connDist) {
            var lineAlpha = (1 - Math.sqrt(d) / connDist) * 0.12 * Math.min(p.depth, p2.depth);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.color + lineAlpha + ')';
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }

      if (mouse.x !== null && p.depth > 0.3) {
        var mdx = p.x - mouse.x;
        var mdy = p.y - mouse.y;
        var md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 180) {
          var ml = (1 - md / 180) * 0.18;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = p.color + ml + ')';
          ctx.lineWidth = 0.4;
          ctx.stroke();
        }
      }
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
      sGrad.addColorStop(0, 'rgba(255,255,255,0)');
      sGrad.addColorStop(1, 'rgba(255,255,255,' + ss.life * 0.8 + ')');
      ctx.beginPath();
      ctx.moveTo(tailX, tailY);
      ctx.lineTo(ss.x, ss.y);
      ctx.strokeStyle = sGrad;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.beginPath();
      ctx.arc(ss.x, ss.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255,255,255,' + ss.life + ')';
      ctx.fill();
    }

    for (var c = SOCIRIS.particles.clicks.length - 1; c >= 0; c--) {
      var cp = SOCIRIS.particles.clicks[c];
      cp.x += cp.vx;
      cp.y += cp.vy;
      cp.vx *= 0.96;
      cp.vy *= 0.96;
      cp.life -= cp.decay;
      if (cp.life <= 0) { SOCIRIS.particles.clicks.splice(c, 1); continue; }
      ctx.beginPath();
      ctx.arc(cp.x, cp.y, cp.r * cp.life, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + cp.color + ',' + cp.life + ')';
      ctx.fill();
    }

    SOCIRIS.particles.raf = requestAnimationFrame(SOCIRIS.particles.animate);
  }
};
