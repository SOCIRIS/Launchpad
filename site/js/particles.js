var SOCIRIS = SOCIRIS || {};

SOCIRIS.particles = {
  canvas: null,
  ctx: null,
  particles: [],
  mouse: { x: null, y: null },
  raf: null,
  running: false,

  init: function() {
    SOCIRIS.particles.destroy();
    SOCIRIS.particles.canvas = document.createElement('canvas');
    SOCIRIS.particles.canvas.id = 'particle-canvas';
    SOCIRIS.particles.canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;opacity:.6';
    document.body.prepend(SOCIRIS.particles.canvas);
    SOCIRIS.particles.ctx = SOCIRIS.particles.canvas.getContext('2d');
    SOCIRIS.particles.resize();
    SOCIRIS.particles.create();
    SOCIRIS.particles.running = true;
    SOCIRIS.particles.animate();
    window.addEventListener('resize', SOCIRIS.particles.resize);
    window.addEventListener('mousemove', function(e) {
      SOCIRIS.particles.mouse.x = e.clientX;
      SOCIRIS.particles.mouse.y = e.clientY;
    });
  },

  destroy: function() {
    SOCIRIS.particles.running = false;
    if (SOCIRIS.particles.raf) cancelAnimationFrame(SOCIRIS.particles.raf);
    if (SOCIRIS.particles.canvas && SOCIRIS.particles.canvas.parentNode) {
      SOCIRIS.particles.canvas.parentNode.removeChild(SOCIRIS.particles.canvas);
    }
    SOCIRIS.particles.particles = [];
    SOCIRIS.particles.canvas = null;
    SOCIRIS.particles.ctx = null;
  },

  resize: function() {
    if (!SOCIRIS.particles.canvas) return;
    SOCIRIS.particles.canvas.width = window.innerWidth;
    SOCIRIS.particles.canvas.height = window.innerHeight;
  },

  create: function() {
    var count = Math.min(Math.floor((window.innerWidth * window.innerHeight) / 6000), 200);
    var colors = [
      'rgba(99, 102, 241, ',
      'rgba(6, 182, 212, ',
      'rgba(139, 92, 246, ',
      'rgba(16, 185, 129, ',
      'rgba(236, 72, 153, ',
      'rgba(59, 130, 246, '
    ];
    SOCIRIS.particles.particles = [];
    for (var i = 0; i < count; i++) {
      var ci = Math.floor(Math.random() * colors.length);
      SOCIRIS.particles.particles.push({
        x: Math.random() * SOCIRIS.particles.canvas.width,
        y: Math.random() * SOCIRIS.particles.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 2 + 0.5,
        color: colors[ci],
        alpha: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.005
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
    var connDist = 120;

    ctx.clearRect(0, 0, w, h);

    for (var i = 0; i < ps.length; i++) {
      var p = ps[i];
      p.pulse += p.pulseSpeed;
      var alpha = p.alpha + Math.sin(p.pulse) * 0.15;

      if (mouse.x !== null) {
        var dx = mouse.x - p.x;
        var dy = mouse.y - p.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          p.vx += dx * 0.00004;
          p.vy += dy * 0.00004;
        }
      }

      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color + alpha + ')';
      ctx.fill();

      for (var j = i + 1; j < ps.length; j++) {
        var p2 = ps[j];
        var ddx = p.x - p2.x;
        var ddy = p.y - p2.y;
        var d = ddx * ddx + ddy * ddy;
        if (d < connDist * connDist) {
          var lineAlpha = (1 - Math.sqrt(d) / connDist) * 0.15;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = p.color + lineAlpha + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      if (mouse.x !== null) {
        var mdx = p.x - mouse.x;
        var mdy = p.y - mouse.y;
        var md = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < 180) {
          var ml = (1 - md / 180) * 0.2;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = p.color + ml + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    SOCIRIS.particles.raf = requestAnimationFrame(SOCIRIS.particles.animate);
  }
};
