var SOCIRIS = SOCIRIS || {};

(function() {
  var I = SOCIRIS.I;

  SOCIRIS.viz = {};

  SOCIRIS.viz.screenMock = function(title, subtitle, content, opts) {
    opts = opts || {};
    return '<div class="viz-screen fi' + (opts.cls ? ' ' + opts.cls : '') + '">' +
      '<div class="viz-screen-bar">' +
        '<div class="viz-screen-dots"><span></span><span></span><span></span></div>' +
        '<div class="viz-screen-title">' + title + '</div>' +
        (opts.port ? '<div class="viz-screen-port">:' + opts.port + '</div>' : '') +
      '</div>' +
      '<div class="viz-screen-body">' + content + '</div>' +
      (subtitle ? '<div class="viz-screen-footer">' + subtitle + '</div>' : '') +
    '</div>';
  };

  SOCIRIS.viz.statRow = function(stats) {
    return '<div class="viz-stats">' + stats.map(function(s) {
      return '<div class="viz-stat"><div class="viz-stat-val ' + (s.cls || '') + '">' + s.value + '</div><div class="viz-stat-label">' + s.label + '</div></div>';
    }).join('') + '</div>';
  };

  SOCIRIS.viz.miniBar = function(label, pct, color) {
    return '<div class="viz-bar-row"><span class="viz-bar-label">' + label + '</span><div class="viz-bar-track"><div class="viz-bar-fill" style="width:' + pct + '%;background:' + color + '"></div></div><span class="viz-bar-val">' + pct + '%</span></div>';
  };

  SOCIRIS.viz.tableRow = function(cells, header) {
    var cls = header ? ' viz-tr-head' : '';
    return '<div class="viz-tr' + cls + '">' + cells.map(function(c) {
      return '<div class="viz-td">' + c + '</div>';
    }).join('') + '</div>';
  };

  SOCIRIS.viz.statusDot = function(status) {
    var colors = { online: 'var(--ok)', alert: 'var(--wr)', offline: 'var(--tm)', critical: 'var(--er)', active: 'var(--ok)', degraded: 'var(--wr)' };
    return '<span class="viz-dot" style="background:' + (colors[status] || 'var(--tm)') + '"></span>';
  };

  SOCIRIS.viz.tag = function(text, cls) {
    return '<span class="viz-tag viz-tag-' + (cls || 'default') + '">' + text + '</span>';
  };

  SOCIRIS.viz.lineChart = function(id, height) {
    return '<div class="viz-chart" style="height:' + (height || 120) + 'px"><svg viewBox="0 0 400 ' + (height || 120) + '" preserveAspectRatio="none" class="viz-chart-svg"><defs><linearGradient id="cg-' + id + '" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="var(--pri)" stop-opacity=".3"/><stop offset="100%" stop-color="var(--pri)" stop-opacity="0"/></linearGradient></defs><path d="M0,' + (height || 120) + ' L0,' + (Math.random() * 60 + 20) + ' L50,' + (Math.random() * 60 + 20) + ' L100,' + (Math.random() * 80 + 10) + ' L150,' + (Math.random() * 50 + 30) + ' L200,' + (Math.random() * 70 + 15) + ' L250,' + (Math.random() * 40 + 25) + ' L300,' + (Math.random() * 60 + 20) + ' L350,' + (Math.random() * 50 + 10) + ' L400,' + (Math.random() * 45 + 15) + ' L400,' + (height || 120) + ' Z" fill="url(#cg-' + id + ')"/><polyline points="0,' + (Math.random() * 60 + 20) + ' 50,' + (Math.random() * 60 + 20) + ' 100,' + (Math.random() * 80 + 10) + ' 150,' + (Math.random() * 50 + 30) + ' 200,' + (Math.random() * 70 + 15) + ' 250,' + (Math.random() * 40 + 25) + ' 300,' + (Math.random() * 60 + 20) + ' 350,' + (Math.random() * 50 + 10) + ' 400,' + (Math.random() * 45 + 15) + '" fill="none" stroke="var(--pri)" stroke-width="2"/></svg></div>';
  };

})();

SOCIRIS.viz.gen1Dashboard = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS Dashboard — Legacy Console', 'SOCIRIS v3.0 Enhanced &bull; ILMA University FYP 2025', [
    '<div class="viz-dash-nav">',
      '<div style="display:flex;align-items:center;gap:.5rem"><span style="font-weight:800;color:var(--ok);font-size:.75rem">&#9679;</span><span style="font-size:.6875rem;font-weight:700">SOCIRIS</span></div>',
      '<div class="viz-dash-tabs">',
        '<span class="viz-dash-tab active">Dashboard</span>',
        '<span class="viz-dash-tab">HIDS</span>',
        '<span class="viz-dash-tab">Scans</span>',
        '<span class="viz-dash-tab">AI</span>',
        '<span class="viz-dash-tab">UEBA</span>',
        '<span class="viz-dash-tab">Intel</span>',
        '<span class="viz-dash-tab">Active</span>',
        '<span class="viz-dash-tab">SOAR</span>',
        '<span class="viz-dash-tab">Assets</span>',
      '</div>',
      '<div style="display:flex;gap:.5rem">',
        '<span class="viz-dash-icon">&#9790;</span>',
        '<span class="viz-dash-icon">&#9974;</span>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '847', label: 'Total Alerts', cls: 'viz-c-er' },
      { value: '12', label: 'Critical Threats', cls: 'viz-c-wr' },
      { value: '23', label: 'Unknown Faces', cls: 'viz-c-info' },
      { value: '156', label: 'Registered', cls: 'viz-c-ok' },
      { value: '284', label: 'MITRE Tech', cls: 'viz-c-pri' },
      { value: '1.2K', label: 'CVE Database', cls: 'viz-c-sec' }
    ]),
    '<div class="viz-dash-cols">',
      '<div class="viz-dash-col">',
        '<div class="viz-panel">',
          '<div class="viz-panel-head"><span class="viz-dot" style="background:var(--er)"></span> Live Camera Feed</div>',
          '<div class="viz-cam-feed">',
            '<div class="viz-cam-overlay">',
              '<div class="viz-cam-scanline"></div>',
              '<div class="viz-cam-box" style="top:30%;left:35%;width:20%;height:25%"><span class="viz-cam-label">Unknown #23</span></div>',
              '<div class="viz-cam-box viz-cam-ok" style="top:40%;left:65%;width:15%;height:20%"><span class="viz-cam-label">Ahmed K. &#10003;</span></div>',
            '</div>',
            '<div class="viz-cam-hud">',
              '<span>CAM-01 MAIN GATE</span>',
              '<span>30 FPS &#8226; 1920x1080</span>',
            '</div>',
          '</div>',
          '<div class="viz-panel" style="margin-top:.5rem">',
            '<div class="viz-panel-head">' + v.statusDot('online') + ' Access Control</div>',
            '<div class="viz-access-panel">',
              '<div class="viz-gate-status">',
                '<div class="viz-gate-indicator locked"></div>',
                '<div><div style="font-weight:700;font-size:.75rem">GATE LOCKED</div><div style="font-size:.625rem;color:var(--tm)">Last: Ahmed K. &#8226; 2m ago</div></div>',
              '</div>',
              '<div class="viz-access-counters">',
                '<div><span style="color:var(--ok);font-weight:700">24</span> <span style="font-size:.625rem;color:var(--tm)">Granted</span></div>',
                '<div><span style="color:var(--er);font-weight:700">3</span> <span style="font-size:.625rem;color:var(--tm)">Denied</span></div>',
              '</div>',
            '</div>',
          '</div>',
        '</div>',
      '</div>',
      '<div class="viz-dash-col">',
        '<div class="viz-panel">',
          '<div class="viz-panel-head">' + v.statusDot('alert') + ' Recent Alerts</div>',
          v.lineChart('g1dash', 80),
          '<div class="viz-alert-list">',
            '<div class="viz-alert-item"><span class="viz-tag viz-tag-critical">CRITICAL</span><span>Brute force detected from 192.168.1.105</span><span style="color:var(--tm)">2m</span></div>',
            '<div class="viz-alert-item"><span class="viz-tag viz-tag-high">HIGH</span><span>Unknown face at parking entrance</span><span style="color:var(--tm)">5m</span></div>',
            '<div class="viz-alert-item"><span class="viz-tag viz-tag-medium">MEDIUM</span><span>Unusual data transfer from WS-01</span><span style="color:var(--tm)">12m</span></div>',
            '<div class="viz-alert-item"><span class="viz-tag viz-tag-low">LOW</span><span>SSL certificate expiring in 7 days</span><span style="color:var(--tm)">1h</span></div>',
          '</div>',
        '</div>',
        '<div class="viz-panel" style="margin-top:.5rem">',
          '<div class="viz-panel-head">' + I('cpu') + ' AI Models Status</div>',
          '<div class="viz-model-list">',
            '<div class="viz-model-item"><span style="color:var(--ok);font-size:.625rem">&#9679; Loaded</span><span>LSTM v2.8.4</span><span style="font-size:.625rem;color:var(--tm)">94.2% acc</span></div>',
            '<div class="viz-model-item"><span style="color:var(--ok);font-size:.625rem">&#9679; Loaded</span><span>One-Class SVM</span><span style="font-size:.625rem;color:var(--tm)">91.7% acc</span></div>',
            '<div class="viz-model-item"><span style="color:var(--ok);font-size:.625rem">&#9679; Loaded</span><span>Isolation Forest</span><span style="font-size:.625rem;color:var(--tm)">89.4% acc</span></div>',
            '<div class="viz-model-item"><span style="color:var(--ok);font-size:.625rem">&#9679; Loaded</span><span>FaceNet v3.2.1</span><span style="font-size:.625rem;color:var(--tm)">97.1% acc</span></div>',
          '</div>',
        '</div>',
      '</div>',
    '</div>',
  ].join(''), { port: '8080', cls: 'viz-gen1' });
};

SOCIRIS.viz.gen1HIDS = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('HIDS — Wazuh Host Intrusion Detection', null, [
    v.statRow([
      { value: '3', label: 'Total Agents', cls: 'viz-c-pri' },
      { value: '3', label: 'Active', cls: 'viz-c-ok' },
      { value: '127', label: 'Alerts 24h', cls: 'viz-c-wr' },
      { value: '42', label: 'Events/sec', cls: 'viz-c-sec' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('shield') + ' Monitored Agents</div>',
      v.tableRow(['Agent', 'Status', 'Alerts', 'Last Event'], true),
      v.tableRow(['wazuh-manager', v.statusDot('online') + ' Active', '23', '2m ago']),
      v.tableRow(['sec-workstation-01', v.statusDot('online') + ' Active', '45', '5m ago']),
      v.tableRow(['admin-laptop', v.statusDot('online') + ' Active', '59', '1m ago']),
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('activity') + ' Alert Trends (24h)</div>',
      v.lineChart('hids-trend', 100),
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('list') + ' Top Triggered Rules</div>',
      v.miniBar('Rule 5710 — Auth Failure', 78, 'var(--er)'),
      v.miniBar('Rule 553 — File Integrity', 52, 'var(--wr)'),
      v.miniBar('Rule 2902 — User Mgmt', 31, 'var(--info)'),
      v.miniBar('Rule 5715 — SSHD Error', 18, 'var(--sec)'),
    '</div>',
  ].join(''), { port: '8080', cls: 'viz-gen1' });
};

SOCIRIS.viz.gen1AI = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('AI Engine — Model Management', null, [
    v.statRow([
      { value: '4', label: 'Active Models', cls: 'viz-c-pri' },
      { value: '93.1%', label: 'Avg Accuracy', cls: 'viz-c-ok' },
      { value: '1.2K', label: 'Predictions/hr', cls: 'viz-c-sec' },
      { value: '48K', label: 'Training Data', cls: 'viz-c-acc' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('brain') + ' Deployed Models</div>',
      '<div class="viz-model-cards">',
        '<div class="viz-model-card"><div style="font-weight:700;font-size:.75rem">LSTM v2.8.4</div><div style="font-size:.625rem;color:var(--tm)">Behavioral patterns</div><div style="font-size:.6875rem;color:var(--ok)">94.2% &#8226; 30% weight</div><div class="viz-model-bar"><div class="viz-model-fill" style="width:94%;background:var(--pri)"></div></div></div>',
        '<div class="viz-model-card"><div style="font-weight:700;font-size:.75rem">One-Class SVM</div><div style="font-size:.625rem;color:var(--tm)">Anomaly detection</div><div style="font-size:.6875rem;color:var(--ok)">91.7% &#8226; 20% weight</div><div class="viz-model-bar"><div class="viz-model-fill" style="width:91%;background:var(--sec)"></div></div></div>',
        '<div class="viz-model-card"><div style="font-weight:700;font-size:.75rem">Isolation Forest</div><div style="font-size:.625rem;color:var(--tm)">Unknown threats</div><div style="font-size:.6875rem;color:var(--ok)">89.4% &#8226; 20% weight</div><div class="viz-model-bar"><div class="viz-model-fill" style="width:89%;background:var(--acc)"></div></div></div>',
        '<div class="viz-model-card"><div style="font-weight:700;font-size:.75rem">FaceNet v3.2.1</div><div style="font-size:.625rem;color:var(--tm)">Face recognition</div><div style="font-size:.6875rem;color:var(--ok)">97.1% &#8226; Active</div><div class="viz-model-bar"><div class="viz-model-fill" style="width:97%;background:var(--ok)"></div></div></div>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('trending-up') + ' Model Accuracy (30 Days)</div>',
      v.lineChart('ai-acc', 100),
    '</div>',
  ].join(''), { port: '8080', cls: 'viz-gen1' });
};

SOCIRIS.viz.gen1UEBA = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('UEBA — User Behavior Analytics', null, [
    v.statRow([
      { value: '45', label: 'Monitored Users', cls: 'viz-c-pri' },
      { value: '8', label: 'Anomalies 24h', cls: 'viz-c-wr' },
      { value: '3', label: 'High Risk', cls: 'viz-c-er' },
      { value: '96.3%', label: 'ML Accuracy', cls: 'viz-c-ok' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('alert-triangle') + ' High Risk Users</div>',
      v.tableRow(['User', 'Risk Score', 'Anomalies', 'Status'], true),
      v.tableRow(['john.doe@company.com', '<span style="color:var(--er);font-weight:700">87</span>', '5', v.tag('Investigating', 'critical')]),
      v.tableRow(['sarah.ahmed@company.com', '<span style="color:var(--wr);font-weight:700">72</span>', '3', v.tag('Monitoring', 'high')]),
      v.tableRow(['mike.khan@company.com', '<span style="color:var(--wr);font-weight:700">65</span>', '2', v.tag('Monitoring', 'high')]),
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('scan-eye') + ' Behavior Patterns Detected</div>',
      '<div class="viz-pattern-grid">',
        '<div class="viz-pattern-card"><span style="font-size:.875rem">&#127769;</span><div style="font-weight:600;font-size:.6875rem">Off-Hours Access</div><div style="font-size:.5625rem;color:var(--er)">4 incidents</div></div>',
        '<div class="viz-pattern-card"><span style="font-size:.875rem">&#127760;</span><div style="font-weight:600;font-size:.6875rem">Unusual Location</div><div style="font-size:.5625rem;color:var(--wr)">3 incidents</div></div>',
        '<div class="viz-pattern-card"><span style="font-size:.875rem">&#128228;</span><div style="font-weight:600;font-size:.6875rem">Data Exfiltration</div><div style="font-size:.5625rem;color:var(--er)">2 incidents</div></div>',
        '<div class="viz-pattern-card"><span style="font-size:.875rem">&#128274;</span><div style="font-weight:600;font-size:.6875rem">Privilege Escalation</div><div style="font-size:.5625rem;color:var(--wr)">1 incident</div></div>',
        '<div class="viz-pattern-card"><span style="font-size:.875rem">&#10060;</span><div style="font-weight:600;font-size:.6875rem">Failed Logins</div><div style="font-size:.5625rem;color:var(--er)">7 incidents</div></div>',
        '<div class="viz-pattern-card"><span style="font-size:.875rem">&#128259;</span><div style="font-weight:600;font-size:.6875rem">Lateral Movement</div><div style="font-size:.5625rem;color:var(--wr)">1 incident</div></div>',
      '</div>',
    '</div>',
  ].join(''), { port: '8080', cls: 'viz-gen1' });
};

SOCIRIS.viz.gen1ThreatIntel = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('Threat Intelligence — OSINT Hub', null, [
    v.statRow([
      { value: '12', label: 'Active Feeds', cls: 'viz-c-pri' },
      { value: '847K', label: 'Total IOCs', cls: 'viz-c-er' },
      { value: '284', label: 'MITRE Tech', cls: 'viz-c-sec' },
      { value: '42', label: 'Critical CVEs', cls: 'viz-c-wr' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('radio') + ' Primary Feeds</div>',
      '<div class="viz-feed-grid">',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.6875rem">MISP Platform</div><div style="font-size:.5625rem;color:var(--ok)">&#9679; Synced</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.6875rem">MITRE ATT&CK</div><div style="font-size:.5625rem;color:var(--ok)">&#9679; Cached</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.6875rem">CVE Database</div><div style="font-size:.5625rem;color:var(--ok)">&#9679; 1.2K entries</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.6875rem">AlienVault OTX</div><div style="font-size:.5625rem;color:var(--ok)">&#9679; Live</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.6875rem">Abuse.ch</div><div style="font-size:.5625rem;color:var(--ok)">&#9679; Live</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.6875rem">CISA KEV</div><div style="font-size:.5625rem;color:var(--ok)">&#9679; Synced</div></div>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('layers') + ' MITRE ATT&CK Coverage</div>',
      '<div class="viz-mitre-chain">',
        '<div class="viz-mitre-node active">Initial Access</div>',
        '<div class="viz-mitre-arrow">&#8594;</div>',
        '<div class="viz-mitre-node active">Execution</div>',
        '<div class="viz-mitre-arrow">&#8594;</div>',
        '<div class="viz-mitre-node active">Persistence</div>',
        '<div class="viz-mitre-arrow">&#8594;</div>',
        '<div class="viz-mitre-node active">Priv. Escalation</div>',
        '<div class="viz-mitre-arrow">&#8594;</div>',
        '<div class="viz-mitre-node">Defense Evasion</div>',
        '<div class="viz-mitre-arrow">&#8594;</div>',
        '<div class="viz-mitre-node">C2</div>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('alert-triangle') + ' Critical CVEs</div>',
      v.tableRow(['CVE ID', 'CVSS', 'Product', 'Status'], true),
      v.tableRow(['CVE-2024-12345', '<span style="color:var(--er)">9.8</span>', 'OpenSSH 8.9', v.tag('Exploitable', 'critical')]),
      v.tableRow(['CVE-2024-11987', '<span style="color:var(--er)">9.1</span>', 'Apache HTTPD', v.tag('Patch Available', 'high')]),
      v.tableRow(['CVE-2024-10842', '<span style="color:var(--wr)">8.6</span>', 'Linux Kernel', v.tag('Monitoring', 'medium')]),
    '</div>',
  ].join(''), { port: '8080', cls: 'viz-gen1' });
};

SOCIRIS.viz.gen1SOAR = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOAR — Security Orchestration & Automation', null, [
    v.statRow([
      { value: '5', label: 'Playbooks', cls: 'viz-c-pri' },
      { value: '34', label: 'Executions 24h', cls: 'viz-c-ok' },
      { value: '94%', label: 'Success Rate', cls: 'viz-c-sec' },
      { value: '23s', label: 'Avg Response', cls: 'viz-c-acc' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('workflow') + ' Deployed Playbooks</div>',
      '<div class="viz-playbook-list">',
        '<div class="viz-playbook-item"><div><div style="font-weight:700;font-size:.6875rem">Unauthorized Face</div><div style="font-size:.5625rem;color:var(--tm)">Face recognition &#8226; HITL required</div></div><span class="viz-tag viz-tag-critical">T1110</span></div>',
        '<div class="viz-playbook-item"><div><div style="font-weight:700;font-size:.6875rem">Anomalous Behavior</div><div style="font-size:.5625rem;color:var(--tm)">UEBA trigger &#8226; Auto-execute</div></div><span class="viz-tag viz-tag-high">T1078</span></div>',
        '<div class="viz-playbook-item"><div><div style="font-weight:700;font-size:.6875rem">Unauthorized Access</div><div style="font-size:.5625rem;color:var(--tm)">Wazuh brute-force &#8226; HITL</div></div><span class="viz-tag viz-tag-high">T1110</span></div>',
        '<div class="viz-playbook-item"><div><div style="font-weight:700;font-size:.6875rem">Malware Detection</div><div style="font-size:.5625rem;color:var(--tm)">File hash match &#8226; Auto-contain</div></div><span class="viz-tag viz-tag-critical">T1059</span></div>',
        '<div class="viz-playbook-item"><div><div style="font-weight:700;font-size:.6875rem">Asset Anomaly</div><div style="font-size:.5625rem;color:var(--tm)">Traccar GPS &#8226; Notify</div></div><span class="viz-tag viz-tag-medium">T1078</span></div>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('link') + ' Connected Systems</div>',
      '<div class="viz-connected-grid">',
        '<div class="viz-connected-item">' + v.statusDot('online') + '<span>AI Engine</span></div>',
        '<div class="viz-connected-item">' + v.statusDot('online') + '<span>Wazuh HIDS</span></div>',
        '<div class="viz-connected-item">' + v.statusDot('online') + '<span>Traccar GPS</span></div>',
        '<div class="viz-connected-item">' + v.statusDot('online') + '<span>PostgreSQL</span></div>',
        '<div class="viz-connected-item">' + v.statusDot('online') + '<span>MISP</span></div>',
        '<div class="viz-connected-item">' + v.statusDot('degraded') + '<span>Slack</span></div>',
      '</div>',
    '</div>',
  ].join(''), { port: '8080', cls: 'viz-gen1' });
};

SOCIRIS.viz.gen1NetScan = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('Network Scans — Nmap + Topology', null, [
    v.statRow([
      { value: '24', label: 'Hosts Found', cls: 'viz-c-pri' },
      { value: '187', label: 'Open Ports', cls: 'viz-c-wr' },
      { value: '12m', label: 'Last Scan', cls: 'viz-c-sec' },
      { value: '7', label: 'Vulns', cls: 'viz-c-er' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('network') + ' Network Topology (D3.js Force Graph)</div>',
      '<div class="viz-topology">',
        '<svg viewBox="0 0 400 250" class="viz-topo-svg">',
          '<line x1="200" y1="125" x2="80" y2="60" stroke="var(--pri)" stroke-width="1" opacity=".3"/>',
          '<line x1="200" y1="125" x2="320" y2="60" stroke="var(--pri)" stroke-width="1" opacity=".3"/>',
          '<line x1="200" y1="125" x2="100" y2="190" stroke="var(--sec)" stroke-width="1" opacity=".3"/>',
          '<line x1="200" y1="125" x2="300" y2="190" stroke="var(--sec)" stroke-width="1" opacity=".3"/>',
          '<line x1="200" y1="125" x2="60" y2="125" stroke="var(--acc)" stroke-width="1" opacity=".3"/>',
          '<line x1="200" y1="125" x2="340" y2="125" stroke="var(--acc)" stroke-width="1" opacity=".3"/>',
          '<line x1="80" y1="60" x2="40" y2="30" stroke="var(--pri)" stroke-width=".5" opacity=".2"/>',
          '<line x1="80" y1="60" x2="120" y2="25" stroke="var(--pri)" stroke-width=".5" opacity=".2"/>',
          '<line x1="320" y1="60" x2="280" y2="25" stroke="var(--pri)" stroke-width=".5" opacity=".2"/>',
          '<line x1="320" y1="60" x2="370" y2="35" stroke="var(--pri)" stroke-width=".5" opacity=".2"/>',
          '<line x1="100" y1="190" x2="60" y2="230" stroke="var(--sec)" stroke-width=".5" opacity=".2"/>',
          '<line x1="100" y1="190" x2="140" y2="235" stroke="var(--sec)" stroke-width=".5" opacity=".2"/>',
          '<line x1="300" y1="190" x2="260" y2="235" stroke="var(--sec)" stroke-width=".5" opacity=".2"/>',
          '<line x1="300" y1="190" x2="350" y2="230" stroke="var(--sec)" stroke-width=".5" opacity=".2"/>',
          '<circle cx="200" cy="125" r="18" fill="var(--pri)" opacity=".15" stroke="var(--pri)" stroke-width="1.5"/>',
          '<text x="200" y="129" text-anchor="middle" fill="var(--pri)" font-size="8" font-weight="700">GW</text>',
          '<circle cx="80" cy="60" r="12" fill="var(--sec)" opacity=".15" stroke="var(--sec)" stroke-width="1"/>',
          '<text x="80" y="64" text-anchor="middle" fill="var(--sec)" font-size="6" font-weight="600">SW-1</text>',
          '<circle cx="320" cy="60" r="12" fill="var(--sec)" opacity=".15" stroke="var(--sec)" stroke-width="1"/>',
          '<text x="320" y="64" text-anchor="middle" fill="var(--sec)" font-size="6" font-weight="600">SW-2</text>',
          '<circle cx="100" cy="190" r="10" fill="var(--ok)" opacity=".15" stroke="var(--ok)" stroke-width="1"/>',
          '<text x="100" y="194" text-anchor="middle" fill="var(--ok)" font-size="5" font-weight="600">WS-01</text>',
          '<circle cx="300" cy="190" r="10" fill="var(--ok)" opacity=".15" stroke="var(--ok)" stroke-width="1"/>',
          '<text x="300" y="194" text-anchor="middle" fill="var(--ok)" font-size="5" font-weight="600">WS-02</text>',
          '<circle cx="60" cy="125" r="10" fill="var(--wr)" opacity=".15" stroke="var(--wr)" stroke-width="1"/>',
          '<text x="60" y="129" text-anchor="middle" fill="var(--wr)" font-size="5" font-weight="600">DB</text>',
          '<circle cx="340" cy="125" r="10" fill="var(--acc)" opacity=".15" stroke="var(--acc)" stroke-width="1"/>',
          '<text x="340" y="129" text-anchor="middle" fill="var(--acc)" font-size="5" font-weight="600">AI</text>',
          '<circle cx="40" cy="30" r="6" fill="var(--tm)" opacity=".2"/>',
          '<circle cx="120" cy="25" r="6" fill="var(--tm)" opacity=".2"/>',
          '<circle cx="280" cy="25" r="6" fill="var(--tm)" opacity=".2"/>',
          '<circle cx="370" cy="35" r="6" fill="var(--tm)" opacity=".2"/>',
          '<circle cx="60" cy="230" r="6" fill="var(--tm)" opacity=".2"/>',
          '<circle cx="140" cy="235" r="6" fill="var(--tm)" opacity=".2"/>',
          '<circle cx="260" cy="235" r="6" fill="var(--tm)" opacity=".2"/>',
          '<circle cx="350" cy="230" r="6" fill="var(--tm)" opacity=".2"/>',
        '</svg>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('list') + ' Discovered Hosts</div>',
      v.tableRow(['Host', 'IP', 'Ports', 'OS'], true),
      v.tableRow(['Gateway', '192.168.1.1', '22, 80, 443', v.tag('Linux', 'default')]),
      v.tableRow(['Switch-1', '192.168.1.10', '22, 161', v.tag('Cisco IOS', 'default')]),
      v.tableRow(['WS-01', '192.168.1.100', '22, 3389', v.tag('Ubuntu 22', 'default')]),
      v.tableRow(['AI Engine', '192.168.1.50', '8000, 5432', v.tag('Docker', 'default')]),
    '</div>',
  ].join(''), { port: '8080', cls: 'viz-gen1' });
};

SOCIRIS.viz.gen2SituationRoom = function() {
  var v = SOCIRIS.viz;
  return v.screenMock('SOCIRIS Situation Room — v2 (Next.js 16)', null, [
    '<div class="viz-sr-topbar">',
      '<div style="display:flex;align-items:center;gap:.5rem">',
        '<span style="font-weight:800;font-size:.6875rem;letter-spacing:.08em;color:var(--t1)">SITUATION ROOM</span>',
        '<span class="viz-sr-clock">14:32:07 PST</span>',
      '</div>',
      '<div style="display:flex;align-items:center;gap:.75rem">',
        '<span class="viz-sr-live">LIVE</span>',
        '<span class="viz-dash-icon" style="font-size:.75rem">&#128276;</span>',
      '</div>',
    '</div>',
    '<div class="viz-sr-grid">',
      '<div class="viz-sr-panel viz-sr-left">',
        '<div class="viz-sr-panel-head">',
          '<span>Tracked Assets</span>',
          '<span class="viz-sr-badge" style="background:rgba(99,102,241,.15);color:var(--pri-l)">6</span>',
        '</div>',
        '<div class="viz-sr-legend">',
          '<span>' + v.statusDot('online') + ' Online</span>',
          '<span>' + v.statusDot('alert') + ' Alert</span>',
          '<span>' + v.statusDot('offline') + ' Offline</span>',
        '</div>',
        '<div class="viz-sr-asset-group">',
          '<div class="viz-sr-group-head">&#128663; Vehicles</div>',
          '<div class="viz-sr-asset-row"><span>Patrol Unit Alpha</span>' + v.tag('Online', 'ok') + '</div>',
          '<div class="viz-sr-asset-row"><span>Transport Bravo</span>' + v.tag('Alert', 'high') + '</div>',
          '<div class="viz-sr-group-head">&#128100; Personnel</div>',
          '<div class="viz-sr-asset-row"><span>Guard Unit 1</span>' + v.tag('Online', 'ok') + '</div>',
          '<div class="viz-sr-group-head">&#128247; Cameras</div>',
          '<div class="viz-sr-asset-row"><span>Main Gate Camera</span>' + v.tag('Online', 'ok') + '</div>',
          '<div class="viz-sr-asset-row"><span>Parking Lot Camera</span>' + v.tag('Online', 'ok') + '</div>',
          '<div class="viz-sr-group-head">&#128202; Sensors</div>',
          '<div class="viz-sr-asset-row"><span>Perimeter North</span>' + v.tag('Online', 'ok') + '</div>',
        '</div>',
      '</div>',
      '<div class="viz-sr-panel viz-sr-center">',
        '<div class="viz-sr-map">',
          '<div class="viz-sr-map-label">2D MAP</div>',
          '<div class="viz-sr-map-label viz-sr-map-label-right">3D GLOBE</div>',
          '<svg viewBox="0 0 400 300" class="viz-sr-map-svg">',
            '<rect width="400" height="300" fill="#0a0a0a" rx="4"/>',
            '<line x1="0" y1="150" x2="400" y2="150" stroke="rgba(99,102,241,.1)" stroke-width=".5"/>',
            '<line x1="200" y1="0" x2="200" y2="300" stroke="rgba(99,102,241,.1)" stroke-width=".5"/>',
            '<line x1="0" y1="75" x2="400" y2="75" stroke="rgba(99,102,241,.05)" stroke-width=".5"/>',
            '<line x1="0" y1="225" x2="400" y2="225" stroke="rgba(99,102,241,.05)" stroke-width=".5"/>',
            '<line x1="100" y1="0" x2="100" y2="300" stroke="rgba(99,102,241,.05)" stroke-width=".5"/>',
            '<line x1="300" y1="0" x2="300" y2="300" stroke="rgba(99,102,241,.05)" stroke-width=".5"/>',
            '<circle cx="200" cy="150" r="60" fill="none" stroke="rgba(99,102,241,.4)" stroke-width="1.5" stroke-dasharray="4 3"/>',
            '<text x="200" y="88" text-anchor="middle" fill="rgba(99,102,241,.5)" font-size="5">HQ PERIMETER (500m)</text>',
            '<circle cx="180" cy="140" r="5" fill="var(--ok)" opacity=".8"/><circle cx="180" cy="140" r="8" fill="none" stroke="var(--ok)" stroke-width=".5" opacity=".4"/>',
            '<circle cx="220" cy="160" r="5" fill="var(--wr)" opacity=".8"/><circle cx="220" cy="160" r="10" fill="none" stroke="var(--wr)" stroke-width=".5" opacity=".4" class="viz-pulse-ring"/>',
            '<circle cx="190" cy="120" r="4" fill="var(--ok)" opacity=".8"/>',
            '<circle cx="210" cy="145" r="4" fill="var(--ok)" opacity=".8"/>',
            '<circle cx="200" cy="155" r="6" fill="var(--pri)" opacity=".15" stroke="var(--pri)" stroke-width="1"/>',
            '<circle cx="195" cy="170" r="4" fill="var(--ok)" opacity=".8"/>',
            '<circle cx="225" cy="130" r="6" fill="none" stroke="var(--er)" stroke-width="1.5" opacity=".8" class="viz-pulse-ring"/>',
            '<circle cx="160" cy="155" r="5" fill="none" stroke="var(--wr)" stroke-width="1.5" opacity=".8" class="viz-pulse-ring"/>',
            '<text x="180" y="132" text-anchor="middle" fill="var(--t2)" font-size="4">Patrol Alpha</text>',
            '<text x="220" y="153" text-anchor="middle" fill="var(--wr)" font-size="4">Transport Bravo &#9888;</text>',
            '<text x="225" y="125" text-anchor="end" fill="var(--er)" font-size="3.5">Unknown Face</text>',
            '<text x="160" y="148" text-anchor="end" fill="var(--wr)" font-size="3.5">SSH Brute Force</text>',
            '<text x="200" y="166" text-anchor="middle" fill="var(--pri)" font-size="4">HQ Building</text>',
          '</svg>',
        '</div>',
      '</div>',
      '<div class="viz-sr-panel viz-sr-right">',
        '<div class="viz-sr-panel-head">',
          '<span>Active Threats</span>',
          '<span class="viz-sr-badge" style="background:rgba(239,68,68,.15);color:var(--er)">3</span>',
        '</div>',
        '<div class="viz-sr-severity-chart">',
          '<div class="viz-sr-sev-bar"><span style="font-size:.5625rem;color:var(--er)">Critical</span><div class="viz-sr-sev-fill" style="width:20%;background:var(--er)"></div></div>',
          '<div class="viz-sr-sev-bar"><span style="font-size:.5625rem;color:var(--wr)">High</span><div class="viz-sr-sev-fill" style="width:40%;background:var(--wr)"></div></div>',
          '<div class="viz-sr-sev-bar"><span style="font-size:.5625rem;color:#eab308">Medium</span><div class="viz-sr-sev-fill" style="width:30%;background:#eab308"></div></div>',
          '<div class="viz-sr-sev-bar"><span style="font-size:.5625rem;color:var(--ok)">Low</span><div class="viz-sr-sev-fill" style="width:10%;background:var(--ok)"></div></div>',
        '</div>',
        '<div class="viz-sr-threat-list">',
          '<div class="viz-sr-threat-card viz-sr-threat-critical">',
            '<div style="display:flex;justify-content:space-between;align-items:center"><span class="viz-tag viz-tag-critical">CRITICAL</span><span style="font-size:.5625rem;color:var(--tm)">3m ago</span></div>',
            '<div style="font-size:.6875rem;font-weight:600;margin-top:.375rem">Transport Bravo left authorized zone</div>',
            '<div style="font-size:.5625rem;color:var(--tm)">Source: traccar &#8226; Risk: 95/100</div>',
            '<div class="viz-sr-risk-bar"><div class="viz-sr-risk-fill" style="width:95%;background:var(--er)"></div></div>',
          '</div>',
          '<div class="viz-sr-threat-card viz-sr-threat-high">',
            '<div style="display:flex;justify-content:space-between;align-items:center"><span class="viz-tag viz-tag-high">HIGH</span><span style="font-size:.5625rem;color:var(--tm)">7m ago</span></div>',
            '<div style="font-size:.6875rem;font-weight:600;margin-top:.375rem">Unknown face at parking entrance</div>',
            '<div style="font-size:.5625rem;color:var(--tm)">Source: face_recognition &#8226; Risk: 82/100</div>',
            '<div class="viz-sr-risk-bar"><div class="viz-sr-risk-fill" style="width:82%;background:var(--wr)"></div></div>',
          '</div>',
          '<div class="viz-sr-threat-card">',
            '<div style="display:flex;justify-content:space-between;align-items:center"><span class="viz-tag viz-tag-medium">MEDIUM</span><span style="font-size:.5625rem;color:var(--tm)">14m ago</span></div>',
            '<div style="font-size:.6875rem;font-weight:600;margin-top:.375rem">Multiple failed SSH attempts</div>',
            '<div style="font-size:.5625rem;color:var(--tm)">Source: wazuh &#8226; Risk: 60/100</div>',
            '<div class="viz-sr-risk-bar"><div class="viz-sr-risk-fill" style="width:60%;background:#eab308"></div></div>',
          '</div>',
        '</div>',
      '</div>',
    '</div>',
  ].join(''), { port: '3002' });
};

SOCIRIS.viz.architectureDiagram = function() {
  return '<div class="viz-arch fi">' +
    '<div class="viz-arch-title">38-Service Container Architecture &mdash; Three Network Tiers</div>' +
    '<div class="viz-arch-tiers">' +
      '<div class="viz-arch-tier">' +
        '<div class="viz-arch-tier-label" style="background:linear-gradient(135deg,rgba(99,102,241,.15),rgba(99,102,241,.05));border-color:var(--pri)">' +
          '<span style="font-weight:700;color:var(--pri-l)">Tier 1</span> Frontend &mdash; sociris-frontend' +
        '</div>' +
        '<div class="viz-arch-services">' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--pri)"></span>web-app-v2 <span class="viz-arch-port">:3002</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--sec)"></span>web-dashboard <span class="viz-arch-port">:8080</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--acc)"></span>nginx <span class="viz-arch-port">:80/443</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="viz-arch-arrow">&darr; sociris-backend</div>' +
      '<div class="viz-arch-tier">' +
        '<div class="viz-arch-tier-label" style="background:linear-gradient(135deg,rgba(6,182,212,.15),rgba(6,182,212,.05));border-color:var(--sec)">' +
          '<span style="font-weight:700;color:var(--sec)">Tier 2</span> Application &mdash; sociris-backend' +
        '</div>' +
        '<div class="viz-arch-services">' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--pri)"></span>ai-engine <span class="viz-arch-port">:8000</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--ok)"></span>postgres <span class="viz-arch-port">:5432</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--wr)"></span>redis <span class="viz-arch-port">:6379</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--acc)"></span>kafka <span class="viz-arch-port">:9092</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--sec)"></span>opensearch <span class="viz-arch-port">:9200</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--pri)"></span>keycloak <span class="viz-arch-port">:8080</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--acc)"></span>vault <span class="viz-arch-port">:8200</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--ok)"></span>grafana <span class="viz-arch-port">:3000</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--sec)"></span>prometheus <span class="viz-arch-port">:9090</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--wr)"></span>loki <span class="viz-arch-port">:3100</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="viz-arch-arrow">&darr; sociris-security</div>' +
      '<div class="viz-arch-tier">' +
        '<div class="viz-arch-tier-label" style="background:linear-gradient(135deg,rgba(16,185,129,.15),rgba(16,185,129,.05));border-color:var(--ok)">' +
          '<span style="font-weight:700;color:var(--ok)">Tier 3</span> Security &mdash; sociris-security' +
        '</div>' +
        '<div class="viz-arch-services">' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--ok)"></span>wazuh-manager <span class="viz-arch-port">:1514</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--ok)"></span>wazuh-dashboard <span class="viz-arch-port">:5601</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--pri)"></span>misp <span class="viz-arch-port">:8090</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--sec)"></span>shuffle <span class="viz-arch-port">:3001</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--acc)"></span>thehive <span class="viz-arch-port">:9000</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--wr)"></span>cortex <span class="viz-arch-port">:9001</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--pri)"></span>traccar <span class="viz-arch-port">:8082</span></div>' +
          '<div class="viz-arch-svc"><span class="viz-arch-dot" style="background:var(--ok)"></span>cassandra <span class="viz-arch-port">:9042</span></div>' +
        '</div>' +
      '</div>' +
    '</div>' +
    '<div class="viz-arch-monitoring">' +
      '<div class="viz-arch-mon-title">Monitoring &amp; Observability Layer</div>' +
      '<div class="viz-arch-mon-services">' +
        '<span class="viz-arch-mon-svc">node-exporter</span>' +
        '<span class="viz-arch-mon-svc">cadvisor</span>' +
        '<span class="viz-arch-mon-svc">pg-exporter</span>' +
        '<span class="viz-arch-mon-svc">redis-exporter</span>' +
        '<span class="viz-arch-mon-svc">nginx-exporter</span>' +
        '<span class="viz-arch-mon-svc">promtail</span>' +
        '<span class="viz-arch-mon-svc">portainer</span>' +
        '<span class="viz-arch-mon-svc">dockge</span>' +
      '</div>' +
    '</div>' +
  '</div>';
};

SOCIRIS.viz.dataFlowDiagram = function() {
  var v = SOCIRIS.viz;
  return '<div class="viz-flow fi">' +
    '<div class="viz-flow-title">End-to-End Data Flow &mdash; Event-Driven Pipeline</div>' +
    '<div class="viz-flow-steps">' +
      '<div class="viz-flow-step viz-flow-step-source">' +
        '<div class="viz-flow-step-head">Data Sources</div>' +
        '<div class="viz-flow-nodes">' +
          '<div class="viz-flow-node" style="border-color:var(--ok)"><span style="color:var(--ok)">&#9679;</span> Wazuh Agents</div>' +
          '<div class="viz-flow-node" style="border-color:var(--pri)"><span style="color:var(--pri)">&#9679;</span> CCTV Feeds</div>' +
          '<div class="viz-flow-node" style="border-color:var(--sec)"><span style="color:var(--sec)">&#9679;</span> Network Taps</div>' +
          '<div class="viz-flow-node" style="border-color:var(--acc)"><span style="color:var(--acc)">&#9679;</span> OSINT Sources</div>' +
          '<div class="viz-flow-node" style="border-color:var(--wr)"><span style="color:var(--wr)">&#9679;</span> GPS Traccar</div>' +
          '<div class="viz-flow-node" style="border-color:var(--ok)"><span style="color:var(--ok)">&#9679;</span> Face Recognition</div>' +
        '</div>' +
      '</div>' +
      '<div class="viz-flow-connector"><div class="viz-flow-connector-line"></div><div class="viz-flow-connector-arrow">&#9660;</div></div>' +
      '<div class="viz-flow-step viz-flow-step-bus">' +
        '<div class="viz-flow-step-head">Event Bus</div>' +
        '<div class="viz-flow-nodes">' +
          '<div class="viz-flow-node" style="border-color:var(--pri);background:rgba(99,102,241,.08)"><span style="color:var(--pri)">&#9679;</span> Kafka / NATS</div>' +
          '<div class="viz-flow-node" style="border-color:var(--sec);background:rgba(6,182,212,.08)"><span style="color:var(--sec)">&#9679;</span> WebSocket Bridge</div>' +
        '</div>' +
      '</div>' +
      '<div class="viz-flow-connector"><div class="viz-flow-connector-line"></div><div class="viz-flow-connector-arrow">&#9660;</div></div>' +
      '<div class="viz-flow-step viz-flow-step-ai">' +
        '<div class="viz-flow-step-head">AI Cascade + Context Graph</div>' +
        '<div class="viz-flow-nodes">' +
          '<div class="viz-flow-node" style="border-color:var(--ok);background:rgba(16,185,129,.08)"><span style="color:var(--ok)">&#9679;</span> Triage Model (<100ms)</div>' +
          '<div class="viz-flow-node" style="border-color:var(--pri);background:rgba(99,102,241,.08)"><span style="color:var(--pri)">&#9679;</span> Deep Analysis (Ollama)</div>' +
          '<div class="viz-flow-node" style="border-color:var(--acc);background:rgba(139,92,246,.08)"><span style="color:var(--acc)">&#9679;</span> Context Graph (Neo4j)</div>' +
          '<div class="viz-flow-node" style="border-color:var(--wr);background:rgba(245,158,11,.08)"><span style="color:var(--wr)">&#9679;</span> HITL Verification Gate</div>' +
        '</div>' +
      '</div>' +
      '<div class="viz-flow-connector"><div class="viz-flow-connector-line"></div><div class="viz-flow-connector-arrow">&#9660;</div></div>' +
      '<div class="viz-flow-step viz-flow-step-response">' +
        '<div class="viz-flow-step-head">Response &amp; Output</div>' +
        '<div class="viz-flow-nodes">' +
          '<div class="viz-flow-node" style="border-color:var(--er);background:rgba(239,68,68,.08)"><span style="color:var(--er)">&#9679;</span> SOAR Playbook</div>' +
          '<div class="viz-flow-node" style="border-color:var(--sec);background:rgba(6,182,212,.08)"><span style="color:var(--sec)">&#9679;</span> Investigation Report</div>' +
          '<div class="viz-flow-node" style="border-color:var(--ok);background:rgba(16,185,129,.08)"><span style="color:var(--ok)">&#9679;</span> Executive Dashboard</div>' +
          '<div class="viz-flow-node" style="border-color:var(--pri);background:rgba(99,102,241,.08)"><span style="color:var(--pri)">&#9679;</span> 6-Channel Notify</div>' +
        '</div>' +
      '</div>' +
    '</div>' +
  '</div>';
};

SOCIRIS.viz.thirdPartyConsole = function(name, port, description, content) {
  var v = SOCIRIS.viz;
  return '<div class="viz-tp-card fi">' +
    v.screenMock(name, description, content, { port: port }) +
  '</div>';
};

SOCIRIS.viz.grafanaMock = function() {
  var v = SOCIRIS.viz;
  return v.thirdPartyConsole('Grafana', '3000', 'Metrics &amp; monitoring dashboards', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#1a1a2e,#16213e);padding:.375rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<span style="font-size:.6875rem;font-weight:700;color:#f97316">Grafana</span>',
        '<span style="font-size:.5625rem;color:var(--tm)">admin/admin</span>',
      '</div>',
    '</div>',
    '<div class="viz-tp-grid">',
      '<div class="viz-tp-panel"><div style="font-size:.5625rem;color:var(--tm);margin-bottom:.25rem">CPU Usage</div>' + v.lineChart('grafana1', 60) + '</div>',
      '<div class="viz-tp-panel"><div style="font-size:.5625rem;color:var(--tm);margin-bottom:.25rem">Memory</div>' + v.lineChart('grafana2', 60) + '</div>',
    '</div>',
    '<div class="viz-tp-row">',
      '<div class="viz-tp-stat"><span style="color:var(--ok);font-weight:700">98.2%</span><span style="font-size:.5625rem;color:var(--tm)">Uptime</span></div>',
      '<div class="viz-tp-stat"><span style="color:var(--pri-l);font-weight:700">24</span><span style="font-size:.5625rem;color:var(--tm)">Containers</span></div>',
      '<div class="viz-tp-stat"><span style="color:var(--sec);font-weight:700">14</span><span style="font-size:.5625rem;color:var(--tm)">Metrics</span></div>',
    '</div>',
  ].join(''));
};

SOCIRIS.viz.wazuhMock = function() {
  var v = SOCIRIS.viz;
  return v.thirdPartyConsole('Wazuh Dashboard', '5601', 'OpenSearch security suite &mdash; SIEM, FIM, compliance', [
    '<div class="viz-tp-header" style="background:#1e1e2e;padding:.375rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<span style="font-size:.6875rem;font-weight:700;color:#00b4d8">Wazuh / OpenSearch</span>',
    '</div>',
    v.statRow([
      { value: '3', label: 'Agents', cls: 'viz-c-ok' },
      { value: '2.4K', label: 'Events/hr', cls: 'viz-c-pri' },
      { value: '284', label: 'MITRE', cls: 'viz-c-sec' },
      { value: '99.9%', label: 'Compliance', cls: 'viz-c-ok' }
    ]),
    '<div class="viz-tp-modules">',
      '<span class="viz-tp-module">Security Events</span>',
      '<span class="viz-tp-module">Agent Inventory</span>',
      '<span class="viz-tp-module">MITRE ATT&CK</span>',
      '<span class="viz-tp-module">File Integrity</span>',
      '<span class="viz-tp-module">Vulnerabilities</span>',
      '<span class="viz-tp-module">PCI DSS</span>',
      '<span class="viz-tp-module">HIPAA</span>',
      '<span class="viz-tp-module">NIST 800-53</span>',
    '</div>',
  ].join(''));
};

SOCIRIS.viz.shuffleMock = function() {
  var v = SOCIRIS.viz;
  return v.thirdPartyConsole('Shuffle SOAR', '3001', 'Drag-and-drop workflow automation', [
    '<div class="viz-tp-header" style="background:#0d1117;padding:.375rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<span style="font-size:.6875rem;font-weight:700;color:#7c3aed">Shuffle</span>',
    '</div>',
    '<div class="viz-shuffle-canvas">',
      '<div class="viz-shuffle-node" style="left:5%;top:10%;border-color:var(--er)">',
        '<div class="viz-shuffle-node-title">Trigger</div>',
        '<div class="viz-shuffle-node-body">Face Alert</div>',
      '</div>',
      '<div class="viz-shuffle-node" style="left:35%;top:25%;border-color:var(--pri)">',
        '<div class="viz-shuffle-node-title">AI Analysis</div>',
        '<div class="viz-shuffle-node-body">Enrich Context</div>',
      '</div>',
      '<div class="viz-shuffle-node" style="left:65%;top:10%;border-color:var(--wr)">',
        '<div class="viz-shuffle-node-title">HITL Gate</div>',
        '<div class="viz-shuffle-node-body">Verify</div>',
      '</div>',
      '<div class="viz-shuffle-node" style="left:65%;top:55%;border-color:var(--ok)">',
        '<div class="viz-shuffle-node-title">Action</div>',
        '<div class="viz-shuffle-node-body">Block + Alert</div>',
      '</div>',
      '<svg class="viz-shuffle-lines" viewBox="0 0 200 100" preserveAspectRatio="none">',
        '<line x1="30" y1="20" x2="70" y2="30" stroke="var(--er)" stroke-width="1" opacity=".4"/>',
        '<line x1="130" y1="20" x2="130" y2="55" stroke="var(--wr)" stroke-width="1" opacity=".4"/>',
        '<line x1="70" y1="30" x2="130" y2="20" stroke="var(--pri)" stroke-width="1" opacity=".4"/>',
      '</svg>',
    '</div>',
  ].join(''));
};

SOCIRIS.viz.traccarMock = function() {
  var v = SOCIRIS.viz;
  return v.thirdPartyConsole('Traccar', '8082', 'GPS tracking server &mdash; Leaflet map, geofences, device management', [
    '<div class="viz-traccar-map">',
      '<svg viewBox="0 0 300 150" class="viz-traccar-svg">',
        '<rect width="300" height="150" fill="#1a2332" rx="4"/>',
        '<line x1="0" y1="75" x2="300" y2="75" stroke="rgba(99,102,241,.08)" stroke-width=".5"/>',
        '<line x1="150" y1="0" x2="150" y2="150" stroke="rgba(99,102,241,.08)" stroke-width=".5"/>',
        '<circle cx="150" cy="75" r="35" fill="none" stroke="rgba(16,185,129,.3)" stroke-width="1.5" stroke-dasharray="3 2"/>',
        '<circle cx="130" cy="65" r="4" fill="var(--ok)"/><circle cx="130" cy="65" r="7" fill="none" stroke="var(--ok)" stroke-width=".5" opacity=".4" class="viz-pulse-ring"/>',
        '<circle cx="170" cy="80" r="4" fill="var(--wr)"/><circle cx="170" cy="80" r="7" fill="none" stroke="var(--wr)" stroke-width=".5" opacity=".4" class="viz-pulse-ring"/>',
        '<circle cx="140" cy="90" r="3" fill="var(--ok)"/>',
        '<text x="130" y="57" text-anchor="middle" fill="var(--ok)" font-size="3.5">Patrol Alpha</text>',
        '<text x="170" y="72" text-anchor="middle" fill="var(--wr)" font-size="3.5">Transport &#9888;</text>',
        '<text x="140" y="98" text-anchor="middle" fill="var(--ok)" font-size="3">Guard-1</text>',
      '</svg>',
    '</div>',
    '<div class="viz-traccar-devices">',
      '<div class="viz-traccar-dev">' + v.statusDot('online') + '<span>Patrol Alpha</span><span style="font-size:.5625rem;color:var(--ok)">Moving</span></div>',
      '<div class="viz-traccar-dev">' + v.statusDot('alert') + '<span>Transport Bravo</span><span style="font-size:.5625rem;color:var(--wr)">Speed: 120</span></div>',
      '<div class="viz-traccar-dev">' + v.statusDot('online') + '<span>Guard Unit 1</span><span style="font-size:.5625rem;color:var(--ok)">Stationary</span></div>',
    '</div>',
  ].join(''));
};

SOCIRIS.viz.apiEngineMock = function() {
  var v = SOCIRIS.viz;
  return v.thirdPartyConsole('AI Engine API', '8000', 'FastAPI Swagger UI &mdash; 18 router groups', [
    '<div class="viz-api-header">',
      '<span style="font-size:.6875rem;font-weight:700;color:var(--ok)">FastAPI</span>',
      '<span style="font-size:.5625rem;color:var(--tm)">v3.0 &bull; 18 routers</span>',
    '</div>',
    '<div class="viz-api-routers">',
      '<span class="viz-api-route">/health</span>',
      '<span class="viz-api-route">/auth</span>',
      '<span class="viz-api-route">/face</span>',
      '<span class="viz-api-route">/threats</span>',
      '<span class="viz-api-route">/threat_intel</span>',
      '<span class="viz-api-route">/soar</span>',
      '<span class="viz-api-route">/assets</span>',
      '<span class="viz-api-route">/scans</span>',
      '<span class="viz-api-route">/wazuh</span>',
      '<span class="viz-api-route">/analytics</span>',
      '<span class="viz-api-route">/reports</span>',
      '<span class="viz-api-route">/notifications</span>',
      '<span class="viz-api-route">/tickets</span>',
      '<span class="viz-api-route">/models</span>',
      '<span class="viz-api-route">/integrations</span>',
      '<span class="viz-api-route">/websocket</span>',
      '<span class="viz-api-route">/demo</span>',
      '<span class="viz-api-route">/context-graph</span>',
    '</div>',
    '<div class="viz-api-response">',
      '<div style="font-size:.5625rem;color:var(--ok)">GET /api/v3/threats</div>',
      '<div class="viz-api-code">{"total": 847, "threats": [...], "page": 1}</div>',
    '</div>',
  ].join(''));
};
