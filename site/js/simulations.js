var SOCIRIS = SOCIRIS || {};

SOCIRIS.sim = {
  _intervals: [],
  destroy: function() {
    SOCIRIS.sim._intervals.forEach(function(id) { clearInterval(id); clearTimeout(id); });
    SOCIRIS.sim._intervals = [];
  }
};

SOCIRIS.sim.cascade = function(containerId) {
  var c = document.getElementById(containerId);
  if (!c) return;
  var I = SOCIRIS.I;
  var alerts = [
    { type: 'SSH Brute Force', source: '185.234.72.x', asset: 'prod-web-03', ip: '10.0.1.15' },
    { type: 'Unknown Face Detected', source: 'Camera-07', asset: 'Server Room', ip: '192.168.1.47' },
    { type: 'Data Exfiltration', source: 'db-cluster-01', asset: 'Finance DB', ip: '10.0.2.30' },
    { type: 'Malware C2 Beacon', source: 'HR-Laptop-05', asset: 'HR Network', ip: '10.0.5.22' },
    { type: 'Privilege Escalation', source: 'helpdesk-03', asset: 'Active Directory', ip: '10.0.1.50' }
  ];
  var steps = [
    { name: 'Alert Ingestion', icon: 'radio', duration: 800 },
    { name: 'Context Lookup', icon: 'database', duration: 1200 },
    { name: 'Triage Model', icon: 'zap', duration: 1000 },
    { name: 'Deep Analysis', icon: 'brain', duration: 2000 },
    { name: 'HITL Gate', icon: 'user-check', duration: 1500 },
    { name: 'Response', icon: 'shield', duration: 1000 }
  ];
  var verdicts = ['BENIGN', 'SUSPICIOUS', 'MALICIOUS', 'MALICIOUS', 'MALICIOUS'];
  var confidences = [12, 72, 95, 97, 88];
  var currentAlert = 0;
  var running = false;

  function render() {
    c.innerHTML =
      '<div class="sim-cascade">' +
        '<div class="sim-cascade-header">' +
          '<div class="sim-cascade-title">' + I('activity') + ' AI Cascade Simulator</div>' +
          '<div class="sim-cascade-controls">' +
            '<button class="sim-btn sim-btn-pri" id="sim-cascade-run">' + I('play') + ' Run Simulation</button>' +
            '<button class="sim-btn sim-btn-sec" id="sim-cascade-next">' + I('skip-forward') + ' Next Alert</button>' +
          '</div>' +
        '</div>' +
        '<div class="sim-cascade-alert" id="sim-cascade-alert">' +
          '<div class="sim-cascade-alert-icon"><span class="live-dot"></span></div>' +
          '<div><div class="sim-cascade-alert-type" id="sim-alert-type">Click "Run Simulation" to start</div><div class="sim-cascade-alert-meta" id="sim-alert-meta">Select an alert to investigate through the AI cascade</div></div>' +
        '</div>' +
        '<div class="sim-cascade-pipeline" id="sim-cascade-pipeline">' +
          steps.map(function(s, i) {
            return '<div class="sim-cascade-step" id="sim-step-' + i + '">' +
              '<div class="sim-cascade-step-icon">' + I(s.icon) + '</div>' +
              '<div class="sim-cascade-step-info"><div class="sim-cascade-step-name">' + s.name + '</div><div class="sim-cascade-step-status" id="sim-step-status-' + i + '">Waiting</div></div>' +
              '<div class="sim-cascade-step-progress"><div class="sim-cascade-step-bar" id="sim-step-bar-' + i + '"></div></div>' +
            '</div>';
          }).join('') +
        '</div>' +
        '<div class="sim-cascade-output" id="sim-cascade-output">' +
          '<div class="sim-cascade-verdict" id="sim-verdict">--</div>' +
          '<div class="sim-cascade-confidence" id="sim-confidence"></div>' +
          '<div class="sim-cascade-narrative" id="sim-narrative"></div>' +
        '</div>' +
      '</div>';

    document.getElementById('sim-cascade-run').addEventListener('click', function() { runCascade(); });
    document.getElementById('sim-cascade-next').addEventListener('click', function() { nextAlert(); });
    if (window.lucide) window.lucide.createIcons();
  }

  function nextAlert() {
    currentAlert = (currentAlert + 1) % alerts.length;
    var a = alerts[currentAlert];
    var typeEl = document.getElementById('sim-alert-type');
    var metaEl = document.getElementById('sim-alert-meta');
    if (typeEl) typeEl.textContent = a.type;
    if (metaEl) metaEl.textContent = 'Source: ' + a.source + ' | Asset: ' + a.asset + ' | IP: ' + a.ip;
    resetSteps();
  }

  function resetSteps() {
    steps.forEach(function(s, i) {
      var step = document.getElementById('sim-step-' + i);
      var status = document.getElementById('sim-step-status-' + i);
      var bar = document.getElementById('sim-step-bar-' + i);
      if (step) { step.className = 'sim-cascade-step'; }
      if (status) { status.textContent = 'Waiting'; status.style.color = 'var(--tm)'; }
      if (bar) { bar.style.width = '0%'; }
    });
    var verdict = document.getElementById('sim-verdict');
    var conf = document.getElementById('sim-confidence');
    var narr = document.getElementById('sim-narrative');
    if (verdict) { verdict.textContent = '--'; verdict.className = 'sim-cascade-verdict'; }
    if (conf) conf.innerHTML = '';
    if (narr) narr.textContent = '';
  }

  function runCascade() {
    if (running) return;
    running = true;
    resetSteps();
    var alert = alerts[currentAlert];
    var typeEl = document.getElementById('sim-alert-type');
    var metaEl = document.getElementById('sim-alert-meta');
    if (typeEl) typeEl.textContent = alert.type;
    if (metaEl) metaEl.textContent = 'Source: ' + alert.source + ' | Asset: ' + alert.asset + ' | IP: ' + alert.ip;

    var stepDetails = [
      { status: 'Ingesting alert...', log: 'Received ' + alert.type + ' from ' + alert.source },
      { status: 'Querying Context Graph...', log: 'Asset ' + alert.asset + ' found | Owner: Platform Team | Blast radius: 6 services | 3 past incidents' },
      { status: 'Running triage...', log: 'Lightweight model: confidence ' + Math.round(confidences[currentAlert] * 0.6) + '% — Escalating to deep analysis' },
      { status: 'Deep analysis (Ollama Qwen3)...', log: 'Pattern matches Incident #' + (880 + currentAlert) + '. Source linked to known threat actor. Narrative generated.' },
      { status: 'Awaiting human verification...', log: 'Confidence: ' + confidences[currentAlert] + '% — ' + (confidences[currentAlert] > 95 ? 'Auto-execute threshold met' : 'Analyst approval required') },
      { status: 'Executing response...', log: confidences[currentAlert] > 95 ? 'Auto-blocked source /24 at firewall + isolated affected hosts' : 'Analyst approved — Blocking source + notifying SOC team' }
    ];

    var i = 0;
    function processStep() {
      if (i >= steps.length) {
        running = false;
        showVerdict();
        return;
      }
      var step = document.getElementById('sim-step-' + i);
      var status = document.getElementById('sim-step-status-' + i);
      var bar = document.getElementById('sim-step-bar-' + i);
      if (step) step.className = 'sim-cascade-step active';
      if (status) { status.textContent = stepDetails[i].status; status.style.color = 'var(--pri-l)'; }

      var progress = 0;
      var dur = steps[i].duration;
      var interval = 30;
      var tid = setInterval(function() {
        progress += (interval / dur) * 100;
        if (bar) bar.style.width = Math.min(progress, 100) + '%';
        if (progress >= 100) {
          clearInterval(tid);
          if (step) step.className = 'sim-cascade-step done';
          if (status) { status.textContent = stepDetails[i].log; status.style.color = 'var(--ok)'; }
          i++;
          var timeout = setTimeout(processStep, 400);
          SOCIRIS.sim._intervals.push(timeout);
        }
      }, interval);
      SOCIRIS.sim._intervals.push(tid);
    }
    processStep();
  }

  function showVerdict() {
    var verdict = document.getElementById('sim-verdict');
    var conf = document.getElementById('sim-confidence');
    var narr = document.getElementById('sim-narrative');
    var v = verdicts[currentAlert];
    var cf = confidences[currentAlert];
    var colors = { BENIGN: 'var(--ok)', SUSPICIOUS: 'var(--wr)', MALICIOUS: 'var(--er)' };
    if (verdict) {
      verdict.textContent = v;
      verdict.className = 'sim-cascade-verdict sim-verdict-' + v.toLowerCase();
      verdict.style.color = colors[v];
    }
    if (conf) {
      conf.innerHTML = '<div class="sim-conf-bar"><div class="sim-conf-fill" style="width:' + cf + '%;background:' + colors[v] + '"></div></div><span style="font-size:.75rem;color:' + colors[v] + ';font-weight:700">' + cf + '% confidence</span>';
    }
    var narratives = [
      'Rule: triage_score < 0.3. No context matches. Closing as benign noise.',
      'Insufficient confidence for auto-response. Escalating to SOC analyst for manual review with full context chain.',
      'High-confidence malicious pattern detected. Auto-executing SOAR playbook: block-source-' + alerts[currentAlert].ip + '. Isolating affected asset ' + alerts[currentAlert].asset + '.',
      'Critical threat confirmed. Auto-contained in <100ms. Evidence chain preserved. Investigation report INC-' + (2024 + currentAlert) + '-' + (1140 + currentAlert) + ' generated.',
      'Known attack pattern matched. Executing response playbook. Notifying SOC team via Slack + PagerDuty. MITRE ATT&CK: T1078 mapped.'
    ];
    if (narr) narr.textContent = narratives[currentAlert];
  }

  render();
};

SOCIRIS.sim.terminal = function(containerId) {
  var c = document.getElementById(containerId);
  if (!c) return;
  var I = SOCIRIS.I;

  var scripts = [
    { cmd: '$ curl -s http://localhost:8000/api/v3/health | jq', lines: ['{', '  "status": "healthy",', '  "version": "3.0.0",', '  "uptime": "14d 6h 32m",', '  "models_loaded": 4,', '  "active_connections": 23', '}'], prompt: true },
    { cmd: '$ sociris threat list --severity critical --limit 3', lines: ['[', '  {"id": "THREAT-847", "type": "brute_force", "source": "185.234.72.x",', '   "asset": "prod-web-03", "confidence": 0.95, "status": "active"},', '  {"id": "THREAT-846", "type": "malware_c2", "source": "91.234.x.x",', '   "asset": "hr-laptop-05", "confidence": 0.97, "status": "contained"},', '  {"id": "THREAT-845", "type": "data_exfil", "source": "10.0.2.30",', '   "asset": "db-cluster-01", "confidence": 0.82, "status": "investigating"}', ']'], prompt: true },
    { cmd: '$ sociris investigate THREAT-847 --cascade', lines: ['[CASCADE] Step 1/6: Alert ingested from Wazuh manager', '[CASCADE] Step 2/6: Context Graph lookup — 3 related incidents found', '[CASCADE] Step 3/6: Triage model — confidence: 72%, escalating', '[CASCADE] Step 4/6: Deep analysis (Ollama Qwen3) — MALICIOUS (95%)', '[CASCADE] Step 5/6: HITL gate — confidence > 95%, auto-execute', '[CASCADE] Step 6/6: Executing playbook block-source-185.234.72.0/24', '', 'Verdict: MALICIOUS | Confidence: 95% | Response: auto-contained', 'Investigation report: INC-2024-1147 saved'], prompt: true },
    { cmd: '$ sociris context-graph query --asset prod-web-03 --depth 3', lines: ['Querying Security Context Graph (Neo4j)...', '', 'Node: prod-web-03 (Production Web Server)', '  ├─ Owner: Platform Team (Jira: PLAT-123)', '  ├─ Classification: Crown Jewel', '  ├─ Blast Radius: 6 dependent services', '  ├─ SOPs: INCIDENT-RESPONSE-WEB-01', '  ├─ Past Incidents: 3 (last 30 days)', '  ├─ Vulnerabilities: 2 (CVE-2024-12345, CVE-2024-10842)', '  └─ Network Segment: DMZ-Production (10.0.1.0/24)', '', 'Related Nodes: [redis-cache-01, api-gateway, cdn-proxy, auth-svc, billing-svc, logging-svc]'], prompt: true },
    { cmd: '$ sociris soar playbook list', lines: ['5 playbooks loaded:', '', '  1. unauthorized_face    [ACTIVE]  Trigger: Face Recognition  HITL: required', '  2. anomalous_behavior   [ACTIVE]  Trigger: UEBA             HITL: auto (>95%)', '  3. unauthorized_access  [ACTIVE]  Trigger: Wazuh             HITL: required', '  4. malware_detection    [ACTIVE]  Trigger: File Hash         HITL: auto (>95%)', '  5. asset_anomaly        [ACTIVE]  Trigger: Traccar GPS       HITL: notify', '', 'Use "sociris soar execute <playbook> --alert <id>" to run'], prompt: true }
  ];

  var currentScript = 0;
  var termLines = [];
  var typing = false;

  function render() {
    c.innerHTML =
      '<div class="sim-terminal">' +
        '<div class="sim-terminal-bar">' +
          '<div class="sim-terminal-dots"><span></span><span></span><span></span></div>' +
          '<span class="sim-terminal-title">SOCIRIS Terminal — Interactive</span>' +
          '<div class="sim-terminal-btns">' +
            '<button class="sim-btn sim-btn-xs" id="sim-term-prev">' + I('chevron-left') + '</button>' +
            '<span class="sim-term-counter" id="sim-term-counter">1/' + scripts.length + '</span>' +
            '<button class="sim-btn sim-btn-xs" id="sim-term-next">' + I('chevron-right') + '</button>' +
          '</div>' +
        '</div>' +
        '<div class="sim-terminal-body" id="sim-term-body">' +
          '<div class="sim-term-line sim-term-welcome">SOCIRIS Security Intelligence CLI v3.0 — Type commands or use arrows to browse</div>' +
        '</div>' +
      '</div>';

    document.getElementById('sim-term-next').addEventListener('click', function() { nextScript(); });
    document.getElementById('sim-term-prev').addEventListener('click', function() { prevScript(); });
    if (window.lucide) window.lucide.createIcons();
  }

  function typeScript(scriptIdx) {
    if (typing) return;
    typing = true;
    var body = document.getElementById('sim-term-body');
    if (!body) return;
    var script = scripts[scriptIdx];
    var counter = document.getElementById('sim-term-counter');
    if (counter) counter.textContent = (scriptIdx + 1) + '/' + scripts.length;

    var cmdLine = document.createElement('div');
    cmdLine.className = 'sim-term-line sim-term-cmd';
    cmdLine.textContent = script.cmd;
    body.appendChild(cmdLine);
    body.scrollTop = body.scrollHeight;

    var lineIdx = 0;
    function typeLine() {
      if (lineIdx >= script.lines.length) {
        typing = false;
        var blankLine = document.createElement('div');
        blankLine.className = 'sim-term-line';
        blankLine.innerHTML = '&nbsp;';
        body.appendChild(blankLine);
        body.scrollTop = body.scrollHeight;
        return;
      }
      var line = document.createElement('div');
      line.className = 'sim-term-line sim-term-output';
      line.textContent = script.lines[lineIdx];
      line.style.opacity = '0';
      body.appendChild(line);

      var tid = setTimeout(function() {
        line.style.opacity = '1';
        body.scrollTop = body.scrollHeight;
        lineIdx++;
        var tid2 = setTimeout(typeLine, 60);
        SOCIRIS.sim._intervals.push(tid2);
      }, 40);
      SOCIRIS.sim._intervals.push(tid);
    }
    var startTid = setTimeout(typeLine, 300);
    SOCIRIS.sim._intervals.push(startTid);
  }

  function nextScript() {
    if (typing) return;
    currentScript = (currentScript + 1) % scripts.length;
    typeScript(currentScript);
  }
  function prevScript() {
    if (typing) return;
    currentScript = (currentScript - 1 + scripts.length) % scripts.length;
    typeScript(currentScript);
  }

  render();
  var initTid = setTimeout(function() { typeScript(0); }, 800);
  SOCIRIS.sim._intervals.push(initTid);
};

SOCIRIS.sim.networkTopo = function(containerId) {
  var c = document.getElementById(containerId);
  if (!c) return;
  var I = SOCIRIS.I;

  var nodes = [
    { id: 'internet', label: 'Internet', type: 'cloud', x: 50, y: 12, status: 'active', info: 'External network. 247 blocked connections today.', cls: 'er' },
    { id: 'fw', label: 'Palo Alto FW', type: 'firewall', x: 50, y: 28, status: 'active', info: 'NGFW. 2,341 rules. Last policy update: 2h ago.', cls: 'wr' },
    { id: 'switch1', label: 'Core Switch', type: 'switch', x: 25, y: 44, status: 'active', info: 'Cisco Catalyst 9300. 48 ports. VLANs: 10, 20, 30.', cls: 'pri' },
    { id: 'switch2', label: 'DMZ Switch', type: 'switch', x: 75, y: 44, status: 'active', info: 'DMZ network segment. Isolated from production.', cls: 'sec' },
    { id: 'ai', label: 'AI Engine', type: 'server', x: 15, y: 62, status: 'active', info: 'FastAPI :8000. 4 AI models loaded. 23 active connections. CPU: 67%', cls: 'ok' },
    { id: 'db', label: 'PostgreSQL', type: 'database', x: 35, y: 62, status: 'active', info: 'PostgreSQL 15. 847K threat records. 142 active queries. Replication: healthy.', cls: 'acc' },
    { id: 'redis', label: 'Redis Cache', type: 'database', x: 55, y: 62, status: 'active', info: 'Redis 7. Cache hit rate: 94.2%. Memory: 2.1GB/4GB. 1.2K ops/sec.', cls: 'sec' },
    { id: 'wazuh', label: 'Wazuh Manager', type: 'shield', x: 75, y: 62, status: 'alert', info: '3 agents connected. 127 alerts/24h. Rule: 5710 triggered 78 times.', cls: 'wr' },
    { id: 'ws1', label: 'Web Server 01', type: 'server', x: 10, y: 82, status: 'active', info: 'Ubuntu 22.04. Nginx 1.24. Uptime: 14d. SSL: valid.', cls: 'ok' },
    { id: 'ws2', label: 'Web Server 02', type: 'server', x: 30, y: 82, status: 'alert', info: 'WARNING: Brute force detected from 185.234.72.x. 4,500 failed SSH attempts.', cls: 'er' },
    { id: 'cam', label: 'Camera-07', type: 'camera', x: 55, y: 82, status: 'active', info: 'FaceNet active. 156 faces registered. Last detection: Ahmed K. (2m ago).', cls: 'ok' },
    { id: 'traccar', label: 'Traccar GPS', type: 'gps', x: 78, y: 82, status: 'alert', info: 'ALERT: Transport Bravo left geofence. Speed: 120 km/h. Outside HQ perimeter.', cls: 'er' }
  ];

  var edges = [
    ['internet', 'fw'], ['fw', 'switch1'], ['fw', 'switch2'],
    ['switch1', 'ai'], ['switch1', 'db'], ['switch1', 'redis'],
    ['switch2', 'wazuh'], ['switch2', 'redis'],
    ['ai', 'ws1'], ['ai', 'ws2'], ['wazuh', 'cam'], ['wazuh', 'traccar']
  ];

  function render() {
    var nodeMap = {};
    nodes.forEach(function(n) { nodeMap[n.id] = n; });

    var edgeSvg = edges.map(function(e) {
      var a = nodeMap[e[0]], b = nodeMap[e[1]];
      return '<line x1="' + a.x + '%" y1="' + a.y + '%" x2="' + b.x + '%" y2="' + b.y + '%" class="sim-topo-edge"' +
        (a.status === 'alert' || b.status === 'alert' ? ' style="stroke:rgba(239,68,68,.2);stroke-dasharray:4 2"' : '') + '/>';
    }).join('');

    var nodeSvg = nodes.map(function(n) {
      var colors = { ok: 'var(--ok)', er: 'var(--er)', wr: 'var(--wr)', pri: 'var(--pri-l)', sec: 'var(--sec)', acc: 'var(--acc)' };
      var fill = colors[n.cls] || 'var(--pri-l)';
      return '<g class="sim-topo-node" data-id="' + n.id + '" style="cursor:pointer">' +
        (n.status === 'alert' ? '<circle cx="' + n.x + '%" cy="' + n.y + '%" r="22" fill="none" stroke="' + fill + '" stroke-width="1" opacity=".3" class="sim-pulse"/>' : '') +
        '<circle cx="' + n.x + '%" cy="' + n.y + '%" r="16" fill="rgba(0,0,0,.6)" stroke="' + fill + '" stroke-width="1.5"/>' +
        '<text x="' + n.x + '%" y="' + (n.y + 1) + '%" text-anchor="middle" fill="' + fill + '" font-size="7" font-weight="700" font-family="Inter">' + n.label.substring(0, 6) + '</text>' +
        '<text x="' + n.x + '%" y="' + (n.y + 5) + '%" text-anchor="middle" fill="var(--tm)" font-size="4.5" font-family="Inter">' + n.label.substring(0, 14) + '</text>' +
      '</g>';
    }).join('');

    c.innerHTML =
      '<div class="sim-topo">' +
        '<div class="sim-topo-header">' +
          '<span class="sim-topo-title">' + I('network') + ' Network Topology — Interactive</span>' +
          '<span class="sim-topo-hint">Click any node to inspect</span>' +
        '</div>' +
        '<div class="sim-topo-canvas">' +
          '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" class="sim-topo-svg" id="sim-topo-svg">' +
            edgeSvg + nodeSvg +
          '</svg>' +
        '</div>' +
        '<div class="sim-topo-detail" id="sim-topo-detail">' +
          '<div class="sim-topo-detail-placeholder">Select a node to view details</div>' +
        '</div>' +
      '</div>';

    document.querySelectorAll('.sim-topo-node').forEach(function(el) {
      el.addEventListener('click', function() {
        var id = el.getAttribute('data-id');
        selectNode(id);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function selectNode(id) {
    var node = nodes.filter(function(n) { return n.id === id; })[0];
    if (!node) return;
    var detail = document.getElementById('sim-topo-detail');
    if (!detail) return;
    var statusColors = { active: 'var(--ok)', alert: 'var(--er)' };
    var statusLabel = node.status === 'alert' ? 'ALERT' : 'ONLINE';
    detail.innerHTML =
      '<div class="sim-topo-detail-card">' +
        '<div class="sim-topo-detail-head">' +
          '<span style="color:' + (node.cls === 'ok' ? 'var(--ok)' : node.cls === 'er' ? 'var(--er)' : node.cls === 'wr' ? 'var(--wr)' : 'var(--pri-l)') + ';font-size:1.25rem">' + I(node.type) + '</span>' +
          '<div><div style="font-weight:700">' + node.label + '</div>' +
          '<div style="font-size:.6875rem;display:flex;align-items:center;gap:.25rem"><span style="width:6px;height:6px;border-radius:50%;background:' + statusColors[node.status] + '"></span> ' + statusLabel + '</div></div>' +
        '</div>' +
        '<p style="font-size:.8125rem;color:var(--t2);line-height:1.5">' + node.info + '</p>' +
      '</div>';
    if (window.lucide) window.lucide.createIcons();
  }

  render();
};

SOCIRIS.sim.threatMap = function(containerId) {
  var c = document.getElementById(containerId);
  if (!c) return;
  var I = SOCIRIS.I;

  var threats = [
    { x: 24, y: 35, sev: 'critical', label: 'Moscow, RU', desc: 'APT29 C2 infrastructure. 12 connections blocked.', count: 847 },
    { x: 72, y: 30, sev: 'critical', label: 'Beijing, CN', desc: 'APT41 port scanning. 4,500 ports scanned.', count: 632 },
    { x: 48, y: 42, sev: 'high', label: 'Karachi, PK', desc: 'SOCIRIS HQ — monitoring 25+ services.', count: 0 },
    { x: 52, y: 28, sev: 'high', label: 'Tehran, IR', desc: 'Brute force SSH attempts. 3 hosts targeted.', count: 421 },
    { x: 14, y: 30, sev: 'medium', label: 'New York, US', desc: 'Anomalous DNS tunneling detected.', count: 156 },
    { x: 82, y: 55, sev: 'critical', label: 'Pyongyang, KP', desc: 'Lazarus Group infrastructure. Crypto wallet tracing active.', count: 289 },
    { x: 42, y: 68, sev: 'medium', label: 'Lagos, NG', desc: 'BEC campaign targeting finance dept.', count: 98 },
    { x: 30, y: 62, sev: 'high', label: 'São Paulo, BR', desc: 'Banking trojan distribution. 2 endpoints affected.', count: 234 },
    { x: 65, y: 72, sev: 'low', label: 'Sydney, AU', desc: 'Certificate expiring. Non-critical.', count: 12 },
    { x: 78, y: 25, sev: 'medium', label: 'Tokyo, JP', desc: 'Credential stuffing attack on API gateway.', count: 178 }
  ];

  function render() {
    var threatDots = threats.map(function(t, i) {
      var colors = { critical: 'var(--er)', high: 'var(--wr)', medium: '#eab308', low: 'var(--ok)' };
      var color = colors[t.sev];
      var pulse = (t.sev === 'critical' || t.sev === 'high') ? '<circle cx="' + t.x + '%" cy="' + t.y + '%" r="8" fill="none" stroke="' + color + '" stroke-width="1" opacity=".3" class="sim-pulse"/>' : '';
      return pulse +
        '<circle cx="' + t.x + '%" cy="' + t.y + '%" r="4" fill="' + color + '" opacity=".8" class="sim-map-dot" data-idx="' + i + '" style="cursor:pointer"/>' +
        '<text x="' + t.x + '%" y="' + (t.y - 2) + '%" text-anchor="middle" fill="' + color + '" font-size="3" font-family="Inter" opacity=".8">' + t.label + '</text>';
    }).join('');

    c.innerHTML =
      '<div class="sim-map">' +
        '<div class="sim-map-header">' +
          '<span class="sim-map-title">' + I('globe') + ' Global Threat Intelligence — Interactive</span>' +
          '<div class="sim-map-legend">' +
            '<span><span style="width:6px;height:6px;border-radius:50%;background:var(--er);display:inline-block"></span> Critical</span>' +
            '<span><span style="width:6px;height:6px;border-radius:50%;background:var(--wr);display:inline-block"></span> High</span>' +
            '<span><span style="width:6px;height:6px;border-radius:50%;background:#eab308;display:inline-block"></span> Medium</span>' +
            '<span><span style="width:6px;height:6px;border-radius:50%;background:var(--ok);display:inline-block"></span> Low</span>' +
          '</div>' +
        '</div>' +
        '<div class="sim-map-canvas">' +
          '<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" class="sim-map-svg">' +
            '<rect width="100" height="100" fill="rgba(0,0,0,.3)" rx="2"/>' +
            '<line x1="0" y1="50" x2="100" y2="50" stroke="rgba(99,102,241,.06)" stroke-width=".3"/>' +
            '<line x1="50" y1="0" x2="50" y2="100" stroke="rgba(99,102,241,.06)" stroke-width=".3"/>' +
            threatDots +
          '</svg>' +
        '</div>' +
        '<div class="sim-map-detail" id="sim-map-detail">' +
          '<div class="sim-map-detail-placeholder">Hover or click a threat marker to view details</div>' +
        '</div>' +
      '</div>';

    document.querySelectorAll('.sim-map-dot').forEach(function(el) {
      el.addEventListener('click', function() {
        var idx = parseInt(el.getAttribute('data-idx'));
        showDetail(idx);
      });
      el.addEventListener('mouseenter', function() {
        var idx = parseInt(el.getAttribute('data-idx'));
        showDetail(idx);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function showDetail(idx) {
    var t = threats[idx];
    if (!t) return;
    var detail = document.getElementById('sim-map-detail');
    if (!detail) return;
    var sevColors = { critical: 'var(--er)', high: 'var(--wr)', medium: '#eab308', low: 'var(--ok)' };
    detail.innerHTML =
      '<div class="sim-map-detail-card">' +
        '<div style="display:flex;justify-content:space-between;align-items:center">' +
          '<span style="font-weight:700;font-size:.875rem">' + t.label + '</span>' +
          '<span style="font-size:.5625rem;font-weight:700;text-transform:uppercase;color:' + sevColors[t.sev] + ';padding:.125rem .5rem;border-radius:.25rem;background:rgba(255,255,255,.05)">' + t.sev + '</span>' +
        '</div>' +
        '<p style="font-size:.8125rem;color:var(--t2);margin-top:.5rem;line-height:1.5">' + t.desc + '</p>' +
        (t.count > 0 ? '<div style="margin-top:.5rem;font-size:.75rem;color:var(--tm)">Threats attributed: <strong style="color:var(--t1)">' + t.count.toLocaleString() + '</strong></div>' : '') +
      '</div>';
  }

  render();
};

SOCIRIS.sim.soarBuilder = function(containerId) {
  var c = document.getElementById(containerId);
  if (!c) return;
  var I = SOCIRIS.I;

  var playbooks = {
    'Unauthorized Face': {
      trigger: 'Face Recognition',
      mitre: 'T1110',
      steps: [
        { name: 'Detect Unknown Face', type: 'detect', auto: true },
        { name: 'Enrich with Context Graph', type: 'enrich', auto: true },
        { name: 'Run AI Triage', type: 'ai', auto: true },
        { name: 'Alert Security Team', type: 'notify', auto: true },
        { name: 'Analyst Verifies', type: 'hitl', auto: false },
        { name: 'Lock Access Point', type: 'respond', auto: false },
        { name: 'Generate Report', type: 'report', auto: true }
      ]
    },
    'Brute Force SSH': {
      trigger: 'Wazuh HIDS',
      mitre: 'T1110.001',
      steps: [
        { name: 'SSH Failure Threshold', type: 'detect', auto: true },
        { name: 'Lookup Source IP Reputation', type: 'enrich', auto: true },
        { name: 'Deep AI Analysis', type: 'ai', auto: true },
        { name: 'Block Source at Firewall', type: 'respond', auto: false },
        { name: 'Analyst Reviews Block', type: 'hitl', auto: false },
        { name: 'Isolate Affected Host', type: 'respond', auto: false },
        { name: 'Notify SOC via Slack', type: 'notify', auto: true }
      ]
    },
    'Malware Detection': {
      trigger: 'File Hash Match',
      mitre: 'T1059',
      steps: [
        { name: 'Hash Match in DB', type: 'detect', auto: true },
        { name: 'Query Threat Intel', type: 'enrich', auto: true },
        { name: 'AI Severity Assessment', type: 'ai', auto: true },
        { name: 'Quarantine File', type: 'respond', auto: true },
        { name: 'Isolate Endpoint', type: 'respond', auto: true },
        { name: 'Generate IOC Report', type: 'report', auto: true }
      ]
    }
  };

  var currentPB = 'Unauthorized Face';
  var selectedSteps = {};

  function render() {
    var pb = playbooks[currentPB];
    var typeIcons = { detect: 'scan-eye', enrich: 'database', ai: 'brain', hitl: 'user-check', respond: 'shield', notify: 'bell', report: 'file-text' };
    var typeColors = { detect: 'var(--pri-l)', enrich: 'var(--sec)', ai: 'var(--acc)', hitl: 'var(--wr)', respond: 'var(--er)', notify: 'var(--ok)', report: 'var(--tm)' };

    var stepsHtml = pb.steps.map(function(s, i) {
      var selected = selectedSteps[i] !== false;
      return '<div class="sim-soar-step' + (selected ? ' selected' : ' disabled') + '" data-idx="' + i + '">' +
        '<div class="sim-soar-step-num">' + (i + 1) + '</div>' +
        '<div class="sim-soar-step-icon" style="color:' + typeColors[s.type] + '">' + I(typeIcons[s.type]) + '</div>' +
        '<div class="sim-soar-step-info"><div class="sim-soar-step-name">' + s.name + '</div>' +
        '<div class="sim-soar-step-tags">' +
          '<span class="sim-soar-tag" style="background:rgba(255,255,255,.05)">' + s.type + '</span>' +
          (s.auto ? '<span class="sim-soar-tag" style="background:rgba(16,185,129,.1);color:var(--ok)">auto</span>' : '<span class="sim-soar-tag" style="background:rgba(245,158,11,.1);color:var(--wr)">manual</span>') +
        '</div></div>' +
        '<div class="sim-soar-step-toggle">' + (selected ? I('check-circle') : I('circle')) + '</div>' +
      '</div>';
    }).join('');

    var pbTabs = Object.keys(playbooks).map(function(name) {
      return '<button class="sim-btn sim-btn-xs' + (name === currentPB ? ' sim-btn-active' : '') + '" data-pb="' + name + '">' + name + '</button>';
    }).join('');

    c.innerHTML =
      '<div class="sim-soar">' +
        '<div class="sim-soar-header">' +
          '<span class="sim-soar-title">' + I('workflow') + ' SOAR Playbook Builder — Interactive</span>' +
          '<div class="sim-soar-tabs" id="sim-soar-tabs">' + pbTabs + '</div>' +
        '</div>' +
        '<div class="sim-soar-meta">' +
          '<span>Trigger: <strong>' + pb.trigger + '</strong></span>' +
          '<span>MITRE: <strong style="color:var(--pri-l)">' + pb.mitre + '</strong></span>' +
          '<span>Steps: <strong>' + pb.steps.length + '</strong></span>' +
        '</div>' +
        '<div class="sim-soar-pipeline" id="sim-soar-pipeline">' +
          stepsHtml +
        '</div>' +
        '<div class="sim-soar-actions">' +
          '<button class="sim-btn sim-btn-pri" id="sim-soar-run">' + I('play') + ' Execute Playbook</button>' +
          '<button class="sim-btn sim-btn-sec" id="sim-soar-reset">' + I('refresh-cw') + ' Reset</button>' +
        '</div>' +
        '<div class="sim-soar-output" id="sim-soar-output"></div>' +
      '</div>';

    document.querySelectorAll('#sim-soar-tabs .sim-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        currentPB = btn.getAttribute('data-pb');
        selectedSteps = {};
        render();
      });
    });

    document.querySelectorAll('.sim-soar-step').forEach(function(el) {
      el.addEventListener('click', function() {
        var idx = parseInt(el.getAttribute('data-idx'));
        selectedSteps[idx] = selectedSteps[idx] === false ? true : false;
        render();
      });
    });

    var runBtn = document.getElementById('sim-soar-run');
    if (runBtn) runBtn.addEventListener('click', function() { runPlaybook(); });
    var resetBtn = document.getElementById('sim-soar-reset');
    if (resetBtn) resetBtn.addEventListener('click', function() { selectedSteps = {}; render(); });

    if (window.lucide) window.lucide.createIcons();
  }

  function runPlaybook() {
    var pb = playbooks[currentPB];
    var output = document.getElementById('sim-soar-output');
    if (!output) return;
    output.innerHTML = '<div class="sim-soar-log">Executing ' + currentPB + ' playbook...</div>';
    var log = output.querySelector('.sim-soar-log');
    var i = 0;
    function execStep() {
      if (i >= pb.steps.length) {
        log.innerHTML += '<div class="sim-soar-log-line sim-soar-log-done">' + I('check-circle') + ' Playbook completed successfully</div>';
        if (window.lucide) window.lucide.createIcons();
        return;
      }
      var step = pb.steps[i];
      var enabled = selectedSteps[i] !== false;
      if (enabled) {
        log.innerHTML += '<div class="sim-soar-log-line">' + I('check') + ' [' + (i + 1) + '/' + pb.steps.length + '] ' + step.name + ' — ' + (step.auto ? 'auto-executed' : 'manual approval granted') + '</div>';
      } else {
        log.innerHTML += '<div class="sim-soar-log-line sim-soar-log-skip">' + I('minus') + ' [' + (i + 1) + '/' + pb.steps.length + '] ' + step.name + ' — SKIPPED</div>';
      }
      output.scrollTop = output.scrollHeight;
      if (window.lucide) window.lucide.createIcons();
      i++;
      var tid = setTimeout(execStep, 600);
      SOCIRIS.sim._intervals.push(tid);
    }
    var tid = setTimeout(execStep, 300);
    SOCIRIS.sim._intervals.push(tid);
  }

  render();
};

SOCIRIS.sim.archExplorer = function(containerId) {
  var c = document.getElementById(containerId);
  if (!c) return;
  var I = SOCIRIS.I;

  var tiers = [
    { name: 'Frontend', color: 'var(--pri)', services: [
      { name: 'web-app-v2', port: ':3002', tech: 'Next.js 16 / React 19', desc: 'Situation Room with MapLibre map, CesiumJS 3D globe, ECharts, Ant Design. Keycloak OIDC auth.' },
      { name: 'web-dashboard', port: ':8080', tech: 'Chart.js / FontAwesome', desc: 'Legacy multi-page dashboard: Dashboard, HIDS, Scans, AI, UEBA, Intel, Active, SOAR, Assets.' },
      { name: 'nginx', port: ':80/443', tech: 'Nginx reverse proxy', desc: 'TLS termination, rate limiting, static asset serving, reverse proxy to backend services.' }
    ]},
    { name: 'Application', color: 'var(--sec)', services: [
      { name: 'ai-engine', port: ':8000', tech: 'FastAPI + SQLAlchemy', desc: '18 API routers: health, auth, face, threats, soar, assets, scans, wazuh, analytics, reports, websocket, demo. Ensemble AI cascade with Ollama Qwen3.' },
      { name: 'postgres', port: ':5432', tech: 'PostgreSQL 15 + Apache AGE', desc: 'Primary database. Schema-per-tenant isolation. PostGIS for geospatial. Patroni HA. 847K threat records.' },
      { name: 'redis', port: ':6379', tech: 'Redis 7', desc: 'Session cache, pub/sub for WebSocket bridge, rate limiting, AI query caching. 94% cache hit rate.' },
      { name: 'opensearch', port: ':9200', tech: 'OpenSearch 2.11', desc: 'Log analytics, alert storage, full-text search, federated queries across security data.' },
      { name: 'keycloak', port: ':8080', tech: 'Keycloak SSO', desc: 'Identity provider. OIDC/SAML auth. Realms, clients, users, roles. SOCIRIS-themed login.' },
      { name: 'vault', port: ':8200', tech: 'HashiCorp Vault', desc: 'Secrets management. Database credentials, API keys, encryption keys. Auto-unseal configured.' },
      { name: 'grafana', port: ':3000', tech: 'Grafana + Loki + Prometheus', desc: 'Monitoring dashboards. CPU, RAM, container metrics, log panels. 14 Prometheus exporters.' },
      { name: 'kafka', port: ':9092', tech: 'Apache Kafka', desc: 'Event streaming bus. All microservices publish/subscribe. WebSocket bridge for real-time UI updates.' }
    ]},
    { name: 'Security', color: 'var(--ok)', services: [
      { name: 'wazuh', port: ':1514/:5601', tech: 'Wazuh Manager + Dashboard', desc: 'HIDS with 3 agents. Security Events, MITRE ATT&CK mapping, File Integrity, Vulnerability Detection, PCI/HIPAA/NIST compliance.' },
      { name: 'misp', port: ':8090', tech: 'MISP Threat Intel', desc: 'Threat intelligence platform. Events, attributes/IOCs, correlation graphs, galaxies, sharing feeds.' },
      { name: 'shuffle', port: ':3001', tech: 'Shuffle SOAR', desc: 'Drag-and-drop workflow canvas. 5 playbooks: unauthorized_face, anomalous_behavior, unauthorized_access, malware_detection, asset_anomaly.' },
      { name: 'thehive', port: ':9000', tech: 'TheHive Case Management', desc: 'Analyst case board. Alert queue, tasks, observables, severity/TLP tags, activity stream.' },
      { name: 'cortex', port: ':9001', tech: 'Cortex Analyzer', desc: 'Observable enrichment engine. Analyzers for DNS, IP, URL, hash, domain. Job results for TheHive.' },
      { name: 'traccar', port: ':8082', tech: 'Traccar GPS Server', desc: 'GPS tracking with Leaflet map. Live device markers, geofences, device sidebar, replay/reporting.' },
      { name: 'cassandra', port: ':9042', tech: 'Apache Cassandra', desc: 'Distributed storage for MISP data and large-scale event archival. Tunable consistency.' }
    ]}
  ];

  var expandedService = null;

  function render() {
    c.innerHTML =
      '<div class="sim-arch">' +
        '<div class="sim-arch-header">' +
          '<span class="sim-arch-title">' + I('server') + ' Architecture Explorer — Interactive</span>' +
          '<span class="sim-arch-hint">Click any service to expand details</span>' +
        '</div>' +
        tiers.map(function(tier) {
          return '<div class="sim-arch-tier">' +
            '<div class="sim-arch-tier-head" style="border-left:3px solid ' + tier.color + '">' + tier.name + ' Tier</div>' +
            '<div class="sim-arch-tier-services">' +
              tier.services.map(function(svc) {
                var isExpanded = expandedService === tier.name + '/' + svc.name;
                return '<div class="sim-arch-svc' + (isExpanded ? ' sim-arch-svc-expanded' : '') + '" data-tier="' + tier.name + '" data-svc="' + svc.name + '">' +
                  '<div class="sim-arch-svc-head">' +
                    '<span class="sim-arch-svc-dot" style="background:' + tier.color + '"></span>' +
                    '<span class="sim-arch-svc-name">' + svc.name + '</span>' +
                    '<span class="sim-arch-svc-port">' + svc.port + '</span>' +
                    '<span class="sim-arch-svc-expand">' + (isExpanded ? I('chevron-up') : I('chevron-down')) + '</span>' +
                  '</div>' +
                  (isExpanded ? '<div class="sim-arch-svc-detail"><div class="sim-arch-svc-tech">' + svc.tech + '</div><p>' + svc.desc + '</p></div>' : '') +
                '</div>';
              }).join('') +
            '</div>' +
          '</div>';
        }).join('') +
      '</div>';

    document.querySelectorAll('.sim-arch-svc').forEach(function(el) {
      el.addEventListener('click', function() {
        var key = el.getAttribute('data-tier') + '/' + el.getAttribute('data-svc');
        expandedService = expandedService === key ? null : key;
        render();
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  render();
};
