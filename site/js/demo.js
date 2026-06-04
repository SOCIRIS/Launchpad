var SOCIRIS = SOCIRIS || {};

SOCIRIS.demo = {
  _intervals: [],

  destroy: function() {
    SOCIRIS.demo._intervals.forEach(function(id) { clearInterval(id); });
    SOCIRIS.demo._intervals = [];
  },

  counters: function() {
    var els = document.querySelectorAll('[data-count]');
    els.forEach(function(el) {
      var target = parseFloat(el.getAttribute('data-count'));
      var suffix = el.getAttribute('data-suffix') || '';
      var prefix = el.getAttribute('data-prefix') || '';
      var isFloat = String(target).indexOf('.') !== -1;
      var dur = 2000;
      var startTime = null;
      function step(ts) {
        if (!startTime) startTime = ts;
        var p = Math.min((ts - startTime) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        var cur = isFloat ? (eased * target).toFixed(1) : Math.floor(eased * target);
        el.textContent = prefix + (isFloat ? cur : Number(cur).toLocaleString()) + suffix;
        if (p < 1) requestAnimationFrame(step);
        else el.textContent = prefix + (isFloat ? target : Number(target).toLocaleString()) + suffix;
      }
      requestAnimationFrame(step);
    });
  },

  threatFeed: function(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var threats = [
      { sev: 'critical', title: 'Brute Force Attack — SSH', src: '185.234.72.x (Moscow, RU)', asset: 'prod-web-03', technique: 'T1110.001', time: '2s ago' },
      { sev: 'high', title: 'Suspicious PowerShell Execution', src: 'WS-FINANCE-12', asset: 'Finance Workstation', technique: 'T1059.001', time: '14s ago' },
      { sev: 'medium', title: 'Anomalous Data Transfer — 2.4GB', src: 'db-cluster-01 → 45.33.x.x', asset: 'Database Cluster', technique: 'T1048', time: '28s ago' },
      { sev: 'critical', title: 'Ransomware Indicator — .locky Extension', src: 'EMAIL-SRV-02', asset: 'Mail Server', technique: 'T1486', time: '45s ago' },
      { sev: 'low', title: 'New Device on Network — IoT Thermostat', src: '192.168.1.147', asset: 'Building Management', technique: 'T1133', time: '1m ago' },
      { sev: 'high', title: 'Credential Dumping — LSASS Access', src: 'DC-01 (Domain Controller)', asset: 'Active Directory', technique: 'T1003.001', time: '2m ago' },
      { sev: 'medium', title: 'Port Scan Detected — 4,500 Ports', src: '203.0.113.x (Beijing, CN)', asset: 'Perimeter Firewall', technique: 'T1046', time: '3m ago' },
      { sev: 'critical', title: 'Unauthorized Face — Restricted Zone B', src: 'Camera-07 (Server Room)', asset: 'Physical Security', technique: 'T1200', time: '4m ago' },
      { sev: 'low', title: 'Certificate Expiring — api.sociris.io', src: 'TLS Monitor', asset: 'API Gateway', technique: '', time: '5m ago' },
      { sev: 'high', title: 'Data Exfiltration via DNS Tunnel', src: 'HR-LAPTOP-05', asset: 'HR Network Segment', technique: 'T1071.004', time: '6m ago' },
      { sev: 'medium', title: 'Privilege Escalation — admin group modified', src: 'helpdesk-user-03', asset: 'Identity Provider', technique: 'T1098', time: '8m ago' },
      { sev: 'critical', title: 'C2 Beacon Detected — Cobalt Strike', src: '10.0.5.22 → 91.234.x.x', asset: 'Internal Network', technique: 'T1071.001', time: '10m ago' },
    ];
    var idx = 0;
    function addAlert() {
      var t = threats[idx % threats.length];
      var item = document.createElement('div');
      item.className = 'alert-item';
      item.innerHTML = '<div class="alert-severity ' + t.sev + '"></div>' +
        '<div class="alert-body"><div class="alert-title">' + t.title + '</div><div class="alert-meta"><span>' + t.src + '</span>' +
        (t.technique ? '<span class="tag tag-' + (t.sev === 'critical' ? 'critical' : 'info') + '">' + t.technique + '</span>' : '') +
        '</div></div><div class="alert-time">' + t.time + '</div>';
      container.insertBefore(item, container.firstChild);
      if (container.children.length > 20) container.removeChild(container.lastChild);
      idx++;
    }
    for (var i = 0; i < 5; i++) { addAlert(); }
    var id = setInterval(addAlert, 3000);
    SOCIRIS.demo._intervals.push(id);
  },

  metrics: function() {
    var bars = document.querySelectorAll('.metric-fill[data-width]');
    setTimeout(function() {
      bars.forEach(function(bar) { bar.style.width = bar.getAttribute('data-width'); });
    }, 500);
  },

  ringCharts: function() {
    var rings = document.querySelectorAll('.stat-ring[data-value]');
    rings.forEach(function(ring) {
      var val = parseInt(ring.getAttribute('data-value'), 10);
      var circle = ring.querySelector('.stat-ring-fill');
      var label = ring.querySelector('.stat-ring-value');
      if (!circle) return;
      var r = parseFloat(circle.getAttribute('r'));
      var circ = 2 * Math.PI * r;
      circle.style.strokeDasharray = circ;
      circle.style.strokeDashoffset = circ;
      setTimeout(function() {
        circle.style.strokeDashoffset = circ - (val / 100) * circ;
        if (label) label.textContent = val + '%';
      }, 500);
    });
  },

  investigation: function(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var steps = [
      { icon: SOCIRIS.I('zap'), title: 'Alert Received', desc: 'Brute force SSH attack detected on prod-web-03', state: 'done' },
      { icon: SOCIRIS.I('database'), title: 'Context Graph Lookup', desc: 'Asset: Crown jewel | Owner: Platform Team | Blast radius: 6 services', state: 'done' },
      { icon: SOCIRIS.I('brain'), title: 'AI Triage — Lightweight Model', desc: 'Verdict: SUSPICIOUS (confidence: 72%) — Escalating to deep analysis', state: 'done' },
      { icon: SOCIRIS.I('microscope'), title: 'Deep Analysis — Heavy Model', desc: 'Pattern matches Incident #891. Source IP linked to APT29 infrastructure. 3 other hosts affected.', state: 'active' },
      { icon: SOCIRIS.I('user-check'), title: 'HITL Verification Gate', desc: 'Awaiting analyst approval for automated response...', state: 'pending' },
      { icon: SOCIRIS.I('shield'), title: 'Response Execution', desc: 'Block source /24 at firewall + isolate affected hosts', state: 'pending' },
    ];
    function renderSteps() {
      var html = '';
      steps.forEach(function(s) {
        html += '<div class="inv-step"><div class="inv-step-icon ' + s.state + '">' + s.icon + '</div><div class="inv-step-content"><h4>' + s.title + '</h4><p>' + s.desc + '</p></div></div>';
      });
      container.innerHTML = html;
      if (window.lucide) window.lucide.createIcons();
    }
    renderSteps();
    var id = setInterval(function() {
      var activeIdx = -1;
      for (var i = 0; i < steps.length; i++) { if (steps[i].state === 'active') { activeIdx = i; break; } }
      if (activeIdx >= 0) {
        steps[activeIdx].state = 'done';
        if (activeIdx + 1 < steps.length) steps[activeIdx + 1].state = 'active';
      }
      renderSteps();
      if (activeIdx === steps.length - 1) {
        clearInterval(id);
        SOCIRIS.demo._intervals = SOCIRIS.demo._intervals.filter(function(x) { return x !== id; });
      }
    }, 2500);
    SOCIRIS.demo._intervals.push(id);
  },

  soarPlaybook: function(btn, playbookId) {
    var pb = document.getElementById(playbookId);
    if (!pb) return;
    btn.disabled = true;
    btn.textContent = 'Executing...';
    pb.classList.add('executing');
    var fills = pb.querySelectorAll('.sp-step-fill');
    var i = 0;
    var id = setInterval(function() {
      if (i < fills.length) { fills[i].style.width = '100%'; i++; }
      else {
        clearInterval(id);
        pb.classList.remove('executing');
        pb.classList.add('completed');
        btn.textContent = 'Completed';
        btn.style.background = 'rgba(16, 185, 129, .1)';
        btn.style.color = 'var(--ok)';
        SOCIRIS.demo._intervals = SOCIRIS.demo._intervals.filter(function(x) { return x !== id; });
      }
    }, 800);
    SOCIRIS.demo._intervals.push(id);
  },

  initChart: function(canvasId, type, data, options) {
    if (!window.Chart) return;
    var canvas = document.getElementById(canvasId);
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var theme = SOCIRIS.theme.get();
    var textColor = theme === 'light' ? '#475569' : '#94a3b8';
    var gridColor = theme === 'light' ? 'rgba(0,0,0,.06)' : 'rgba(255,255,255,.06)';
    var defaultOpts = {
      responsive: true,
      maintainAspectRatio: true,
      plugins: { legend: { labels: { color: textColor, font: { family: 'Inter', size: 12 } } } },
      scales: {
        x: { ticks: { color: textColor, font: { family: 'Inter', size: 11 } }, grid: { color: gridColor } },
        y: { ticks: { color: textColor, font: { family: 'Inter', size: 11 } }, grid: { color: gridColor } }
      }
    };
    new Chart(ctx, { type: type, data: data, options: Object.assign(defaultOpts, options || {}) });
  },

  initDemoPage: function() {
    SOCIRIS.demo.destroy();
    SOCIRIS.demo.counters();
    SOCIRIS.demo.threatFeed('threat-feed');
    SOCIRIS.demo.metrics();
    SOCIRIS.demo.ringCharts();
    SOCIRIS.demo.investigation('investigation-steps');
  },

  initTabFilter: function(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var btns = container.querySelectorAll('.tab-filter-btn');
    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        btns.forEach(function(b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        var cards = document.querySelectorAll('[data-category]');
        cards.forEach(function(card) {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
            card.style.animation = 'fadeIn .3s ease';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  },

  initScrollIndicator: function() {
    var bar = document.querySelector('.scroll-indicator');
    if (!bar) return;
    window.addEventListener('scroll', function() {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = progress + '%';
    });
  }
};
