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
  return v.screenMock('SOCIRIS Situation Room — Console (:3002)', 'Evolved from Gen1 (:8080) — Next.js 16 + MapLibre GL + CesiumJS + ECharts + Ant Design', [
    '<div class="viz-sr-topbar">',
      '<div style="display:flex;align-items:center;gap:.5rem">',
        '<span style="font-weight:800;font-size:.6875rem;letter-spacing:.08em;color:var(--t1)">SITUATION ROOM</span>',
        '<span class="viz-sr-clock" id="sr-clock">--:--:--</span>',
      '</div>',
      '<div style="display:flex;align-items:center;gap:.75rem">',
        '<span style="font-size:.5625rem;color:var(--tm)">Karachi HQ</span>',
        '<span class="viz-sr-live">LIVE</span>',
        '<span class="viz-dash-icon" style="font-size:.75rem">&#128276;</span>',
      '</div>',
    '</div>',

    '<div class="viz-sr-ribbon">',
      v.statRow([
        { value: '847', label: 'Threats Today', cls: 'viz-c-er' },
        { value: '6', label: 'Tracked Assets', cls: 'viz-c-pri' },
        { value: '3', label: 'Active Alerts', cls: 'viz-c-wr' },
        { value: '99.7%', label: 'Coverage', cls: 'viz-c-ok' },
        { value: '23s', label: 'Avg Response', cls: 'viz-c-sec' },
        { value: '14', label: 'Investigations', cls: 'viz-c-acc' }
      ]),
    '</div>',

    '<div class="viz-sr-grid4">',

      '<div class="viz-sr-panel">',
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
          '<div class="viz-sr-group-head">&#127968; Facilities</div>',
          '<div class="viz-sr-asset-row"><span>HQ Building</span>' + v.tag('Online', 'ok') + '</div>',
        '</div>',
      '</div>',

      '<div class="viz-sr-panel viz-sr-map-panel">',
        '<div class="viz-sr-map">',
          '<div class="viz-sr-map-label">2D MAP</div>',
          '<div class="viz-sr-map-label viz-sr-map-label-right">3D GLOBE</div>',
          '<svg viewBox="0 0 400 300" class="viz-sr-map-svg">',
            '<rect width="400" height="300" fill="#080c14" rx="4"/>',
            '<line x1="0" y1="150" x2="400" y2="150" stroke="rgba(99,102,241,.06)" stroke-width=".5"/>',
            '<line x1="200" y1="0" x2="200" y2="300" stroke="rgba(99,102,241,.06)" stroke-width=".5"/>',
            '<line x1="0" y1="75" x2="400" y2="75" stroke="rgba(99,102,241,.03)" stroke-width=".5"/>',
            '<line x1="0" y1="225" x2="400" y2="225" stroke="rgba(99,102,241,.03)" stroke-width=".5"/>',
            '<line x1="100" y1="0" x2="100" y2="300" stroke="rgba(99,102,241,.03)" stroke-width=".5"/>',
            '<line x1="300" y1="0" x2="300" y2="300" stroke="rgba(99,102,241,.03)" stroke-width=".5"/>',
            '<circle cx="200" cy="150" r="60" fill="none" stroke="rgba(99,102,241,.35)" stroke-width="1.5" stroke-dasharray="4 3"/>',
            '<text x="200" y="88" text-anchor="middle" fill="rgba(99,102,241,.45)" font-size="5">HQ PERIMETER (500m)</text>',
            '<circle cx="180" cy="140" r="5" fill="var(--ok)" opacity=".8"/><circle cx="180" cy="140" r="8" fill="none" stroke="var(--ok)" stroke-width=".5" opacity=".3"/>',
            '<circle cx="220" cy="160" r="5" fill="var(--wr)" opacity=".8"/><circle cx="220" cy="160" r="10" fill="none" stroke="var(--wr)" stroke-width=".5" opacity=".3" class="viz-pulse-ring"/>',
            '<circle cx="190" cy="120" r="4" fill="var(--ok)" opacity=".8"/>',
            '<circle cx="210" cy="145" r="4" fill="var(--ok)" opacity=".8"/>',
            '<circle cx="200" cy="155" r="7" fill="var(--pri)" opacity=".12" stroke="var(--pri)" stroke-width="1"/>',
            '<circle cx="195" cy="170" r="4" fill="var(--ok)" opacity=".8"/>',
            '<circle cx="225" cy="130" r="7" fill="none" stroke="var(--er)" stroke-width="1.5" opacity=".7" class="viz-pulse-ring"/><circle cx="225" cy="130" r="3" fill="var(--er)" opacity=".5"/>',
            '<circle cx="160" cy="155" r="6" fill="none" stroke="var(--wr)" stroke-width="1.5" opacity=".7" class="viz-pulse-ring"/><circle cx="160" cy="155" r="3" fill="var(--wr)" opacity=".5"/>',
            '<circle cx="240" cy="200" r="5" fill="none" stroke="#eab308" stroke-width="1" opacity=".5" class="viz-pulse-ring"/>',
            '<text x="180" y="132" text-anchor="middle" fill="var(--t2)" font-size="4">Patrol Alpha</text>',
            '<text x="220" y="153" text-anchor="middle" fill="var(--wr)" font-size="4">Transport &#9888;</text>',
            '<text x="225" y="123" text-anchor="end" fill="var(--er)" font-size="3.5">Unknown Face</text>',
            '<text x="160" y="146" text-anchor="end" fill="var(--wr)" font-size="3.5">SSH Brute Force</text>',
            '<text x="200" y="168" text-anchor="middle" fill="var(--pri)" font-size="4">HQ Building</text>',
            '<text x="240" y="212" text-anchor="middle" fill="#eab308" font-size="3.5">DNS Tunnel</text>',
          '</svg>',
        '</div>',
      '</div>',

      '<div class="viz-sr-panel">',
        '<div class="viz-sr-panel-head">',
          '<span>Active Threats</span>',
          '<span class="viz-sr-badge" style="background:rgba(239,68,68,.15);color:var(--er)">4</span>',
        '</div>',
        '<div class="viz-sr-severity-chart">',
          '<div class="viz-sr-sev-bar"><span style="font-size:.5rem;color:var(--er)">Crit</span><div class="viz-sr-sev-fill" style="width:15%;background:var(--er)"></div></div>',
          '<div class="viz-sr-sev-bar"><span style="font-size:.5rem;color:var(--wr)">High</span><div class="viz-sr-sev-fill" style="width:35%;background:var(--wr)"></div></div>',
          '<div class="viz-sr-sev-bar"><span style="font-size:.5rem;color:#eab308">Med</span><div class="viz-sr-sev-fill" style="width:35%;background:#eab308"></div></div>',
          '<div class="viz-sr-sev-bar"><span style="font-size:.5rem;color:var(--ok)">Low</span><div class="viz-sr-sev-fill" style="width:15%;background:var(--ok)"></div></div>',
        '</div>',
        '<div class="viz-sr-threat-list">',
          '<div class="viz-sr-threat-card viz-sr-threat-critical">',
            '<div style="display:flex;justify-content:space-between;align-items:center"><span class="viz-tag viz-tag-critical">CRITICAL</span><span style="font-size:.5rem;color:var(--tm)">3m</span></div>',
            '<div style="font-size:.625rem;font-weight:600;margin-top:.25rem">Transport Bravo left authorized zone</div>',
            '<div style="font-size:.5rem;color:var(--tm)">traccar &#8226; Risk 95</div>',
            '<div class="viz-sr-risk-bar"><div class="viz-sr-risk-fill" style="width:95%;background:var(--er)"></div></div>',
          '</div>',
          '<div class="viz-sr-threat-card viz-sr-threat-high">',
            '<div style="display:flex;justify-content:space-between;align-items:center"><span class="viz-tag viz-tag-high">HIGH</span><span style="font-size:.5rem;color:var(--tm)">7m</span></div>',
            '<div style="font-size:.625rem;font-weight:600;margin-top:.25rem">Unknown face at parking entrance</div>',
            '<div style="font-size:.5rem;color:var(--tm)">face_recognition &#8226; Risk 82</div>',
            '<div class="viz-sr-risk-bar"><div class="viz-sr-risk-fill" style="width:82%;background:var(--wr)"></div></div>',
          '</div>',
          '<div class="viz-sr-threat-card">',
            '<div style="display:flex;justify-content:space-between;align-items:center"><span class="viz-tag viz-tag-medium">MED</span><span style="font-size:.5rem;color:var(--tm)">14m</span></div>',
            '<div style="font-size:.625rem;font-weight:600;margin-top:.25rem">Multiple failed SSH attempts</div>',
            '<div style="font-size:.5rem;color:var(--tm)">wazuh &#8226; Risk 60</div>',
            '<div class="viz-sr-risk-bar"><div class="viz-sr-risk-fill" style="width:60%;background:#eab308"></div></div>',
          '</div>',
          '<div class="viz-sr-threat-card">',
            '<div style="display:flex;justify-content:space-between;align-items:center"><span class="viz-tag viz-tag-medium">MED</span><span style="font-size:.5rem;color:var(--tm)">18m</span></div>',
            '<div style="font-size:.625rem;font-weight:600;margin-top:.25rem">DNS tunneling from HR laptop</div>',
            '<div style="font-size:.5rem;color:var(--tm)">zeek &#8226; Risk 55</div>',
            '<div class="viz-sr-risk-bar"><div class="viz-sr-risk-fill" style="width:55%;background:#eab308"></div></div>',
          '</div>',
        '</div>',
      '</div>',

    '</div>',

    '<div class="viz-sr-bottom-row">',

      '<div class="viz-sr-panel viz-sr-bottom-panel">',
        '<div class="viz-sr-panel-head"><span>AI Cascade</span><span class="viz-tag viz-tag-critical" style="font-size:.4375rem">PROCESSING</span></div>',
        '<div class="viz-sr-cascade-mini">',
          '<div class="viz-sr-cascade-step done"><span style="color:var(--ok)">&#10003;</span> Ingest</div>',
          '<div class="viz-sr-cascade-step done"><span style="color:var(--ok)">&#10003;</span> Context</div>',
          '<div class="viz-sr-cascade-step done"><span style="color:var(--ok)">&#10003;</span> Triage</div>',
          '<div class="viz-sr-cascade-step active"><span class="viz-dot" style="background:var(--pri)"></span> Deep AI</div>',
          '<div class="viz-sr-cascade-step"><span style="color:var(--tm)">&#9711;</span> HITL</div>',
          '<div class="viz-sr-cascade-step"><span style="color:var(--tm)">&#9711;</span> Respond</div>',
        '</div>',
      '</div>',

      '<div class="viz-sr-panel viz-sr-bottom-panel">',
        '<div class="viz-sr-panel-head"><span>Model Weights</span></div>',
        '<div class="viz-sr-model-grid">',
          '<div class="viz-sr-model-item"><span style="color:var(--pri);font-weight:700;font-size:.5625rem">30%</span><span style="font-size:.5rem;color:var(--tm)">LSTM</span></div>',
          '<div class="viz-sr-model-item"><span style="color:var(--sec);font-weight:700;font-size:.5625rem">20%</span><span style="font-size:.5rem;color:var(--tm)">SVM</span></div>',
          '<div class="viz-sr-model-item"><span style="color:var(--acc);font-weight:700;font-size:.5625rem">20%</span><span style="font-size:.5rem;color:var(--tm)">IsoForest</span></div>',
          '<div class="viz-sr-model-item"><span style="color:var(--ok);font-weight:700;font-size:.5625rem">15%</span><span style="font-size:.5rem;color:var(--tm)">UEBA</span></div>',
          '<div class="viz-sr-model-item"><span style="color:var(--wr);font-weight:700;font-size:.5625rem">15%</span><span style="font-size:.5rem;color:var(--tm)">ThreatIntel</span></div>',
        '</div>',
        v.lineChart('sr-model', 50),
      '</div>',

      '<div class="viz-sr-panel viz-sr-bottom-panel">',
        '<div class="viz-sr-panel-head"><span>SOAR Playbooks</span><span class="viz-sr-badge" style="background:rgba(16,185,129,.15);color:var(--ok)">5</span></div>',
        '<div class="viz-sr-playbook-mini">',
          '<div class="viz-sr-pb-row"><span style="font-size:.5rem">&#128994;</span><span style="font-size:.5625rem">unauthorized_face</span><span class="viz-tag viz-tag-critical" style="font-size:.375rem">T1110</span></div>',
          '<div class="viz-sr-pb-row"><span style="font-size:.5rem">&#128994;</span><span style="font-size:.5625rem">anomalous_behavior</span><span class="viz-tag viz-tag-high" style="font-size:.375rem">T1078</span></div>',
          '<div class="viz-sr-pb-row active"><span style="font-size:.5rem">&#128308;</span><span style="font-size:.5625rem;font-weight:700">unauthorized_access</span><span class="viz-tag viz-tag-critical" style="font-size:.375rem">T1110</span></div>',
          '<div class="viz-sr-pb-row"><span style="font-size:.5rem">&#128994;</span><span style="font-size:.5625rem">malware_detection</span><span class="viz-tag viz-tag-critical" style="font-size:.375rem">T1059</span></div>',
          '<div class="viz-sr-pb-row"><span style="font-size:.5rem">&#128994;</span><span style="font-size:.5625rem">asset_anomaly</span><span class="viz-tag viz-tag-medium" style="font-size:.375rem">T1078</span></div>',
        '</div>',
      '</div>',

      '<div class="viz-sr-panel viz-sr-bottom-panel">',
        '<div class="viz-sr-panel-head"><span>MITRE ATT&CK</span></div>',
        '<div class="viz-sr-mitre-mini">',
          '<div class="viz-sr-mitre-row"><div class="viz-sr-mitre-cell hit">Initial Access</div><div class="viz-sr-mitre-cell hit">Execution</div><div class="viz-sr-mitre-cell">Persistence</div></div>',
          '<div class="viz-sr-mitre-row"><div class="viz-sr-mitre-cell">Priv Esc</div><div class="viz-sr-mitre-cell hit">Defense Evasion</div><div class="viz-sr-mitre-cell">C2</div></div>',
          '<div class="viz-sr-mitre-row"><div class="viz-sr-mitre-cell">Exfiltration</div><div class="viz-sr-mitre-cell">Impact</div><div class="viz-sr-mitre-cell hit">Discovery</div></div>',
        '</div>',
        '<div style="font-size:.4375rem;color:var(--tm);margin-top:.375rem">284 techniques covered &#8226; 12 active detections</div>',
      '</div>',

      '<div class="viz-sr-panel viz-sr-bottom-panel">',
        '<div class="viz-sr-panel-head"><span>Compliance</span></div>',
        '<div class="viz-sr-compliance-mini">',
          '<div class="viz-sr-comp-row"><span style="font-size:.5rem">SOC 2 Type II</span>' + v.tag('Pass', 'ok') + '</div>',
          '<div class="viz-sr-comp-row"><span style="font-size:.5rem">ISO 27001</span>' + v.tag('Pass', 'ok') + '</div>',
          '<div class="viz-sr-comp-row"><span style="font-size:.5rem">GDPR</span>' + v.tag('Pass', 'ok') + '</div>',
          '<div class="viz-sr-comp-row"><span style="font-size:.5rem">HIPAA</span>' + v.tag('Pass', 'ok') + '</div>',
          '<div class="viz-sr-comp-row"><span style="font-size:.5rem">PCI DSS</span>' + v.tag('Review', 'high') + '</div>',
        '</div>',
      '</div>',

      '<div class="viz-sr-panel viz-sr-bottom-panel">',
        '<div class="viz-sr-panel-head"><span>System Health</span></div>',
        '<div class="viz-sr-health-mini">',
          '<div class="viz-sr-health-row">' + v.statusDot('online') + '<span style="font-size:.5rem">AI Engine</span><div class="viz-sr-health-bar"><div class="viz-sr-health-fill" style="width:67%;background:var(--ok)"></div></div><span style="font-size:.4375rem;color:var(--tm)">67%</span></div>',
          '<div class="viz-sr-health-row">' + v.statusDot('online') + '<span style="font-size:.5rem">PostgreSQL</span><div class="viz-sr-health-bar"><div class="viz-sr-health-fill" style="width:42%;background:var(--ok)"></div></div><span style="font-size:.4375rem;color:var(--tm)">42%</span></div>',
          '<div class="viz-sr-health-row">' + v.statusDot('online') + '<span style="font-size:.5rem">Redis</span><div class="viz-sr-health-bar"><div class="viz-sr-health-fill" style="width:53%;background:var(--ok)"></div></div><span style="font-size:.4375rem;color:var(--tm)">53%</span></div>',
          '<div class="viz-sr-health-row">' + v.statusDot('online') + '<span style="font-size:.5rem">Wazuh</span><div class="viz-sr-health-bar"><div class="viz-sr-health-fill" style="width:38%;background:var(--ok)"></div></div><span style="font-size:.4375rem;color:var(--tm)">38%</span></div>',
          '<div class="viz-sr-health-row">' + v.statusDot('alert') + '<span style="font-size:.5rem">Kafka</span><div class="viz-sr-health-bar"><div class="viz-sr-health-fill" style="width:89%;background:var(--wr)"></div></div><span style="font-size:.4375rem;color:var(--wr)">89%</span></div>',
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

SOCIRIS.viz.gen2Wazuh = function() {
  var v = SOCIRIS.viz;
  return v.screenMock('SOCIRIS HIDS — Wazuh Dashboard (:5601)', 'SOCIRIS-branded OpenSearch Dashboards — Security Events, MITRE, FIM, Compliance', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#0d1117,#1a1e2e);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<div style="display:flex;align-items:center;gap:.5rem">',
          '<span style="font-size:.6875rem;font-weight:800;color:#00b4d8">WAZUH</span>',
          '<span style="font-size:.5rem;color:var(--tm);background:rgba(0,180,216,.1);padding:.125rem .375rem;border-radius:.25rem">OpenSearch 2.11</span>',
        '</div>',
        '<div style="display:flex;gap:.375rem">',
          '<span class="viz-tp-module" style="background:rgba(0,180,216,.15)">Security Events</span>',
          '<span class="viz-tp-module" style="background:rgba(99,102,241,.1)">MITRE ATT&CK</span>',
          '<span class="viz-tp-module">FIM</span>',
        '</div>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '3', label: 'Agents', cls: 'viz-c-ok' },
      { value: '2.4K', label: 'Events/hr', cls: 'viz-c-pri' },
      { value: '127', label: 'Alerts 24h', cls: 'viz-c-wr' },
      { value: '284', label: 'MITRE', cls: 'viz-c-sec' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + SOCIRIS.I('activity') + ' Alert Trend (24h)</div>',
      v.lineChart('wazuh-trend', 80),
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + SOCIRIS.I('list') + ' Top Rules</div>',
      v.miniBar('Rule 5710 — Auth Failure', 78, 'var(--er)'),
      v.miniBar('Rule 553 — File Integrity', 52, 'var(--wr)'),
      v.miniBar('Rule 2902 — User Mgmt', 31, 'var(--info)'),
      v.miniBar('Rule 5715 — SSHD Error', 18, 'var(--sec)'),
      v.miniBar('Rule 86001 — Custom SOCIRIS', 12, 'var(--pri)'),
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + SOCIRIS.I('shield-check') + ' Compliance Posture</div>',
      '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.375rem">',
        '<div style="text-align:center;padding:.375rem;background:rgba(16,185,129,.04);border-radius:.375rem"><div style="font-size:.75rem;font-weight:700;color:var(--ok)">98%</div><div style="font-size:.4375rem;color:var(--tm)">PCI DSS</div></div>',
        '<div style="text-align:center;padding:.375rem;background:rgba(16,185,129,.04);border-radius:.375rem"><div style="font-size:.75rem;font-weight:700;color:var(--ok)">100%</div><div style="font-size:.4375rem;color:var(--tm)">HIPAA</div></div>',
        '<div style="text-align:center;padding:.375rem;background:rgba(16,185,129,.04);border-radius:.375rem"><div style="font-size:.75rem;font-weight:700;color:var(--ok)">99%</div><div style="font-size:.4375rem;color:var(--tm)">NIST</div></div>',
        '<div style="text-align:center;padding:.375rem;background:rgba(16,185,129,.04);border-radius:.375rem"><div style="font-size:.75rem;font-weight:700;color:var(--ok)">97%</div><div style="font-size:.4375rem;color:var(--tm)">GDPR</div></div>',
      '</div>',
    '</div>',
    '<div style="margin-top:.5rem;display:flex;flex-wrap:wrap;gap:.25rem">',
      '<span class="viz-tp-module">Security Events</span>',
      '<span class="viz-tp-module">Agent Inventory</span>',
      '<span class="viz-tp-module">MITRE ATT&CK</span>',
      '<span class="viz-tp-module">File Integrity</span>',
      '<span class="viz-tp-module">Vulnerabilities</span>',
      '<span class="viz-tp-module">PCI DSS</span>',
      '<span class="viz-tp-module">HIPAA</span>',
      '<span class="viz-tp-module">NIST 800-53</span>',
      '<span class="viz-tp-module">GDPR</span>',
      '<span class="viz-tp-module">SCA</span>',
    '</div>',
  ].join(''), { port: '5601' });
};

SOCIRIS.viz.gen2Grafana = function() {
  var v = SOCIRIS.viz;
  return v.screenMock('SOCIRIS Metrics — Grafana (:3000)', 'Dark metrics dashboards — CPU, RAM, containers, Postgres, Redis, Nginx, Loki logs', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#1a1a2e,#0d1117);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<div style="display:flex;align-items:center;gap:.5rem">',
          '<span style="font-size:.6875rem;font-weight:800;color:#f97316">GRAFANA</span>',
          '<span style="font-size:.5rem;color:var(--tm)">admin/admin</span>',
        '</div>',
        '<div style="display:flex;gap:.5rem;font-size:.5rem;color:var(--tm)">',
          '<span>14 exporters</span>',
          '<span style="color:var(--ok)">&#9679; All UP</span>',
        '</div>',
      '</div>',
    '</div>',
    '<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:.375rem;margin-bottom:.5rem">',
      '<div style="text-align:center;padding:.5rem;background:rgba(255,255,255,.02);border-radius:.375rem;border:1px solid rgba(255,255,255,.04)"><div style="font-size:1rem;font-weight:800;color:var(--ok)">24</div><div style="font-size:.4375rem;color:var(--tm)">Containers</div></div>',
      '<div style="text-align:center;padding:.5rem;background:rgba(255,255,255,.02);border-radius:.375rem;border:1px solid rgba(255,255,255,.04)"><div style="font-size:1rem;font-weight:800;color:var(--pri-l)">98.2%</div><div style="font-size:.4375rem;color:var(--tm)">Uptime</div></div>',
      '<div style="text-align:center;padding:.5rem;background:rgba(255,255,255,.02);border-radius:.375rem;border:1px solid rgba(255,255,255,.04)"><div style="font-size:1rem;font-weight:800;color:var(--sec)">1.2K</div><div style="font-size:.4375rem;color:var(--tm)">Metrics</div></div>',
      '<div style="text-align:center;padding:.5rem;background:rgba(255,255,255,.02);border-radius:.375rem;border:1px solid rgba(255,255,255,.04)"><div style="font-size:1rem;font-weight:800;color:var(--acc)">42ms</div><div style="font-size:.4375rem;color:var(--tm)">P95 Latency</div></div>',
    '</div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.375rem;margin-bottom:.375rem">',
      '<div class="viz-tp-panel"><div style="font-size:.5rem;color:var(--tm);margin-bottom:.25rem">CPU Usage (%)</div>' + v.lineChart('graf-cpu', 60) + '</div>',
      '<div class="viz-tp-panel"><div style="font-size:.5rem;color:var(--tm);margin-bottom:.25rem">Memory (GB)</div>' + v.lineChart('graf-mem', 60) + '</div>',
    '</div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.375rem">',
      '<div class="viz-tp-panel"><div style="font-size:.5rem;color:var(--tm);margin-bottom:.25rem">PostgreSQL Queries/s</div>' + v.lineChart('graf-pg', 50) + '</div>',
      '<div class="viz-tp-panel"><div style="font-size:.5rem;color:var(--tm);margin-bottom:.25rem">Redis Ops/s</div>' + v.lineChart('graf-redis', 50) + '</div>',
    '</div>',
    '<div style="margin-top:.5rem;display:flex;flex-wrap:wrap;gap:.25rem">',
      '<span class="viz-tp-module" style="background:rgba(249,115,22,.08);border-color:rgba(249,115,22,.15)">node-exporter</span>',
      '<span class="viz-tp-module" style="background:rgba(249,115,22,.08);border-color:rgba(249,115,22,.15)">cadvisor</span>',
      '<span class="viz-tp-module" style="background:rgba(249,115,22,.08);border-color:rgba(249,115,22,.15)">pg-exporter</span>',
      '<span class="viz-tp-module" style="background:rgba(249,115,22,.08);border-color:rgba(249,115,22,.15)">redis-exporter</span>',
      '<span class="viz-tp-module" style="background:rgba(249,115,22,.08);border-color:rgba(249,115,22,.15)">nginx-exporter</span>',
      '<span class="viz-tp-module" style="background:rgba(249,115,22,.08);border-color:rgba(249,115,22,.15)">promtail</span>',
      '<span class="viz-tp-module" style="background:rgba(249,115,22,.08);border-color:rgba(249,115,22,.15)">loki</span>',
    '</div>',
  ].join(''), { port: '3000' });
};

SOCIRIS.viz.gen2Traccar = function() {
  var v = SOCIRIS.viz;
  return v.screenMock('SOCIRIS GPS — Traccar (:8082)', 'Live GPS tracking — Leaflet map, geofences, device management, replay', [
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.5rem">',
      '<div style="text-align:center;padding:.375rem;background:rgba(255,255,255,.02);border-radius:.375rem;border:1px solid rgba(255,255,255,.04)"><div style="font-size:.875rem;font-weight:700;color:var(--ok)">4</div><div style="font-size:.4375rem;color:var(--tm)">Devices</div></div>',
      '<div style="text-align:center;padding:.375rem;background:rgba(255,255,255,.02);border-radius:.375rem;border:1px solid rgba(255,255,255,.04)"><div style="font-size:.875rem;font-weight:700;color:var(--pri-l)">3</div><div style="font-size:.4375rem;color:var(--tm)">Geofences</div></div>',
    '</div>',
    '<div class="viz-traccar-map" style="margin-bottom:.5rem">',
      '<svg viewBox="0 0 400 200" class="viz-traccar-svg">',
        '<rect width="400" height="200" fill="#0a0f1a" rx="4"/>',
        '<line x1="0" y1="100" x2="400" y2="100" stroke="rgba(99,102,241,.06)" stroke-width=".5"/>',
        '<line x1="200" y1="0" x2="200" y2="200" stroke="rgba(99,102,241,.06)" stroke-width=".5"/>',
        '<circle cx="200" cy="100" r="50" fill="none" stroke="rgba(16,185,129,.25)" stroke-width="1.5" stroke-dasharray="4 2"/>',
        '<text x="200" y="48" text-anchor="middle" fill="rgba(16,185,129,.35)" font-size="4">MAIN CAMPUS</text>',
        '<circle cx="160" cy="90" r="25" fill="none" stroke="rgba(6,182,212,.2)" stroke-width="1" stroke-dasharray="3 2"/>',
        '<text x="160" y="65" text-anchor="middle" fill="rgba(6,182,212,.3)" font-size="3">BLDG-A</text>',
        '<circle cx="260" cy="110" r="20" fill="none" stroke="rgba(139,92,246,.2)" stroke-width="1" stroke-dasharray="3 2"/>',
        '<text x="260" y="91" text-anchor="middle" fill="rgba(139,92,246,.3)" font-size="3">PARKING</text>',
        '<circle cx="180" cy="85" r="5" fill="var(--ok)"/><circle cx="180" cy="85" r="8" fill="none" stroke="var(--ok)" stroke-width=".5" opacity=".4" class="viz-pulse-ring"/>',
        '<circle cx="230" cy="120" r="5" fill="var(--wr)"/><circle cx="230" cy="120" r="9" fill="none" stroke="var(--wr)" stroke-width=".5" opacity=".4" class="viz-pulse-ring"/>',
        '<circle cx="170" cy="105" r="3.5" fill="var(--ok)"/>',
        '<circle cx="240" cy="85" r="3.5" fill="var(--ok)"/>',
        '<text x="180" y="77" text-anchor="middle" fill="var(--ok)" font-size="3.5">Patrol Alpha</text>',
        '<text x="230" y="112" text-anchor="middle" fill="var(--wr)" font-size="3.5">Transport &#9888;</text>',
        '<text x="170" y="113" text-anchor="middle" fill="var(--ok)" font-size="3">Guard-1</text>',
        '<text x="240" y="80" text-anchor="middle" fill="var(--ok)" font-size="3">Delivery-03</text>',
      '</svg>',
    '</div>',
    v.tableRow(['Device', 'Status', 'Speed', 'Geofence'], true),
    v.tableRow(['Patrol Alpha', v.statusDot('online') + ' Moving', '45 km/h', v.tag('Inside', 'ok')]),
    v.tableRow(['Transport Bravo', v.statusDot('alert') + ' Alert', '120 km/h', v.tag('Outside', 'critical')]),
    v.tableRow(['Guard Unit 1', v.statusDot('online') + ' Idle', '0', v.tag('Inside', 'ok')]),
    v.tableRow(['Delivery Van DV-03', v.statusDot('online') + ' Moving', '60 km/h', v.tag('Inside', 'ok')]),
    '<div style="margin-top:.5rem;display:flex;flex-wrap:wrap;gap:.25rem">',
      '<span class="viz-tp-module" style="background:rgba(16,185,129,.08);border-color:rgba(16,185,129,.15)">Live Map</span>',
      '<span class="viz-tp-module">Route Replay</span>',
      '<span class="viz-tp-module">Reports</span>',
      '<span class="viz-tp-module">Geofence Editor</span>',
    '</div>',
  ].join(''), { port: '8082' });
};

SOCIRIS.viz.gen2Shuffle = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS SOAR — Shuffle (:3001)', 'Drag-and-drop workflow automation — 5 active playbooks', [
    '<div class="viz-tp-header" style="background:#0d1117;padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<span style="font-size:.6875rem;font-weight:800;color:#7c3aed">SHUFFLE SOAR</span>',
        '<span style="font-size:.5rem;color:var(--ok)">5 active workflows</span>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-bottom:.5rem">',
      '<div class="viz-panel-head">' + I('workflow') + ' Unauthorized Access Playbook</div>',
      '<div class="viz-shuffle-canvas" style="min-height:140px">',
        '<div class="viz-shuffle-node" style="left:2%;top:8%;border-color:var(--er);min-width:80px">',
          '<div class="viz-shuffle-node-title">Trigger</div>',
          '<div class="viz-shuffle-node-body">Wazuh Alert</div>',
        '</div>',
        '<div class="viz-shuffle-node" style="left:22%;top:25%;border-color:var(--sec);min-width:80px">',
          '<div class="viz-shuffle-node-title">Enrich</div>',
          '<div class="viz-shuffle-node-body">Context Graph</div>',
        '</div>',
        '<div class="viz-shuffle-node" style="left:45%;top:8%;border-color:var(--pri);min-width:80px">',
          '<div class="viz-shuffle-node-title">AI Analysis</div>',
          '<div class="viz-shuffle-node-body">Ollama Qwen3</div>',
        '</div>',
        '<div class="viz-shuffle-node" style="left:45%;top:55%;border-color:var(--wr);min-width:80px">',
          '<div class="viz-shuffle-node-title">HITL Gate</div>',
          '<div class="viz-shuffle-node-body">Analyst Verify</div>',
        '</div>',
        '<div class="viz-shuffle-node" style="left:70%;top:8%;border-color:var(--ok);min-width:80px">',
          '<div class="viz-shuffle-node-title">Respond</div>',
          '<div class="viz-shuffle-node-body">Block + Alert</div>',
        '</div>',
        '<div class="viz-shuffle-node" style="left:70%;top:55%;border-color:var(--acc);min-width:80px">',
          '<div class="viz-shuffle-node-title">Report</div>',
          '<div class="viz-shuffle-node-body">Generate INC</div>',
        '</div>',
        '<svg class="viz-shuffle-lines" viewBox="0 0 200 100" preserveAspectRatio="none">',
          '<line x1="18" y1="18" x2="40" y2="30" stroke="var(--er)" stroke-width="1" opacity=".4"/>',
          '<line x1="60" y1="30" x2="82" y2="18" stroke="var(--sec)" stroke-width="1" opacity=".4"/>',
          '<line x1="82" y1="28" x2="82" y2="55" stroke="var(--pri)" stroke-width="1" opacity=".3"/>',
          '<line x1="82" y1="65" x2="105" y2="65" stroke="var(--wr)" stroke-width="1" opacity=".3"/>',
          '<line x1="100" y1="18" x2="140" y2="18" stroke="var(--pri)" stroke-width="1" opacity=".4"/>',
          '<line x1="140" y1="28" x2="140" y2="55" stroke="var(--ok)" stroke-width="1" opacity=".3"/>',
        '</svg>',
      '</div>',
    '</div>',
    '<div style="display:flex;flex-direction:column;gap:.375rem">',
      '<div style="display:flex;align-items:center;gap:.5rem;font-size:.5625rem;padding:.375rem .5rem;background:rgba(124,58,237,.06);border:1px solid rgba(124,58,237,.15);border-radius:.375rem">',
        '<span style="color:var(--ok)">&#9679;</span><strong>unauthorized_access</strong><span style="color:var(--tm)">T1110</span><span style="margin-left:auto;color:var(--ok)">34 runs</span>',
      '</div>',
      '<div style="display:flex;align-items:center;gap:.5rem;font-size:.5625rem;padding:.375rem .5rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);border-radius:.375rem">',
        '<span style="color:var(--ok)">&#9679;</span><strong>unauthorized_face</strong><span style="color:var(--tm)">T1110</span><span style="margin-left:auto;color:var(--tm)">12 runs</span>',
      '</div>',
      '<div style="display:flex;align-items:center;gap:.5rem;font-size:.5625rem;padding:.375rem .5rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);border-radius:.375rem">',
        '<span style="color:var(--ok)">&#9679;</span><strong>malware_detection</strong><span style="color:var(--tm)">T1059</span><span style="margin-left:auto;color:var(--tm)">8 runs</span>',
      '</div>',
      '<div style="display:flex;align-items:center;gap:.5rem;font-size:.5625rem;padding:.375rem .5rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);border-radius:.375rem">',
        '<span style="color:var(--ok)">&#9679;</span><strong>anomalous_behavior</strong><span style="color:var(--tm)">T1078</span><span style="margin-left:auto;color:var(--tm)">5 runs</span>',
      '</div>',
      '<div style="display:flex;align-items:center;gap:.5rem;font-size:.5625rem;padding:.375rem .5rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);border-radius:.375rem">',
        '<span style="color:var(--ok)">&#9679;</span><strong>asset_anomaly</strong><span style="color:var(--tm)">T1078</span><span style="margin-left:auto;color:var(--tm)">3 runs</span>',
      '</div>',
    '</div>',
  ].join(''), { port: '3001' });
};

SOCIRIS.viz.gen2TheHive = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS Cases — TheHive (:9000)', 'Analyst case management — alert queue, tasks, observables, activity stream', [
    '<div class="viz-tp-header" style="background:#0f172a;padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<span style="font-size:.6875rem;font-weight:800;color:#38bdf8">THEHIVE</span>',
    '</div>',
    v.statRow([
      { value: '14', label: 'Open Cases', cls: 'viz-c-pri' },
      { value: '47', label: 'Alerts Queue', cls: 'viz-c-wr' },
      { value: '8', label: 'Analysts', cls: 'viz-c-ok' },
      { value: '23m', label: 'Avg TTA', cls: 'viz-c-sec' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('alert-triangle') + ' Active Cases</div>',
      v.tableRow(['Case', 'Severity', 'Assignee', 'Status'], true),
      v.tableRow(['INC-2024-1147', v.tag('Critical', 'critical'), 'Sarah A.', v.tag('Investigating', 'high')]),
      v.tableRow(['INC-2024-1146', v.tag('High', 'high'), 'Mike K.', v.tag('In Progress', 'medium')]),
      v.tableRow(['INC-2024-1145', v.tag('High', 'high'), 'John D.', v.tag('Containment', 'ok')]),
      v.tableRow(['INC-2024-1144', v.tag('Medium', 'medium'), 'Unassigned', v.tag('New', 'default')]),
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('list') + ' Recent Tasks</div>',
      '<div style="font-size:.5625rem;color:var(--t2);padding:.25rem .375rem;border-bottom:1px solid rgba(255,255,255,.03);display:flex;align-items:center;gap:.375rem"><span style="color:var(--ok)">&#10003;</span> Block source IP at firewall — Sarah A. (2m ago)</div>',
      '<div style="font-size:.5625rem;color:var(--t2);padding:.25rem .375rem;border-bottom:1px solid rgba(255,255,255,.03);display:flex;align-items:center;gap:.375rem"><span style="color:var(--ok)">&#10003;</span> Enrich observables via Cortex — Mike K. (5m ago)</div>',
      '<div style="font-size:.5625rem;color:var(--t2);padding:.25rem .375rem;display:flex;align-items:center;gap:.375rem"><span style="color:var(--pri)">&#9679;</span> Isolate affected endpoint — John D. (in progress)</div>',
    '</div>',
  ].join(''), { port: '9000' });
};

SOCIRIS.viz.gen2MISP = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS Threat Intel — MISP (:8090)', 'Threat intelligence platform — events, IOCs, correlation, galaxies', [
    '<div class="viz-tp-header" style="background:#1a1a2e;padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<span style="font-size:.6875rem;font-weight:800;color:#a78bfa">MISP</span>',
    '</div>',
    v.statRow([
      { value: '847K', label: 'Total IOCs', cls: 'viz-c-er' },
      { value: '2.1K', label: 'Events', cls: 'viz-c-pri' },
      { value: '12', label: 'Feeds', cls: 'viz-c-ok' },
      { value: '284', label: 'Galaxies', cls: 'viz-c-sec' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('radio') + ' Active Feeds</div>',
      '<div class="viz-feed-grid">',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.625rem">MITRE ATT&CK</div><div style="font-size:.5rem;color:var(--ok)">&#9679; Synced</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.625rem">CISA KEV</div><div style="font-size:.5rem;color:var(--ok)">&#9679; Synced</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.625rem">AlienVault OTX</div><div style="font-size:.5rem;color:var(--ok)">&#9679; Live</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.625rem">Abuse.ch</div><div style="font-size:.5rem;color:var(--ok)">&#9679; Live</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.625rem">VirusTotal</div><div style="font-size:.5rem;color:var(--ok)">&#9679; API</div></div>',
        '<div class="viz-feed-card"><div style="font-weight:700;font-size:.625rem">Custom Feeds</div><div style="font-size:.5rem;color:var(--ok)">&#9679; 6 active</div></div>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('alert-triangle') + ' Recent Events</div>',
      v.tableRow(['Event', 'Threat Level', 'IOCs', 'Date'], true),
      v.tableRow(['APT28 Campaign', v.tag('High', 'high'), '342', 'Today']),
      v.tableRow(['Ransomware Variant', v.tag('Critical', 'critical'), '89', 'Yesterday']),
      v.tableRow(['New CVE Exploit', v.tag('Medium', 'medium'), '17', '2d ago']),
    '</div>',
  ].join(''), { port: '8090' });
};

SOCIRIS.viz.gen2Keycloak = function() {
  var v = SOCIRIS.viz;
  return v.screenMock('SOCIRIS Identity — Keycloak (:8080)', 'SSO / OIDC / SAML identity provider — login, admin console', [
    '<div style="display:flex;justify-content:center;padding:1.5rem">',
      '<div style="width:280px;background:#09090b;border:1px solid rgba(255,255,255,.06);border-radius:1rem;padding:2rem;text-align:center">',
        '<div style="width:48px;height:48px;border-radius:50%;background:var(--g1);margin:0 auto 1rem;display:flex;align-items:center;justify-content:center;font-weight:800;color:#fff;font-size:1.25rem">S</div>',
        '<h3 style="font-size:.9375rem;font-weight:700;color:var(--t1);margin-bottom:.5rem">Sign in to SOCIRIS</h3>',
        '<p style="font-size:.6875rem;color:var(--tm);margin-bottom:1.25rem">Use your organization credentials</p>',
        '<div style="margin-bottom:.75rem"><input style="width:100%;padding:.5rem .75rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:.5rem;color:var(--t1);font-size:.8125rem;outline:none" placeholder="Username or email" readonly></div>',
        '<div style="margin-bottom:1rem"><input style="width:100%;padding:.5rem .75rem;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:.5rem;color:var(--t1);font-size:.8125rem;outline:none" type="password" placeholder="Password" readonly></div>',
        '<button style="width:100%;padding:.625rem;background:var(--g1);color:#fff;border:none;border-radius:.5rem;font-weight:700;font-size:.8125rem;cursor:pointer">Sign In</button>',
        '<div style="margin-top:1rem;display:flex;align-items:center;justify-content:center;gap:.5rem"><span class="viz-dot" style="background:var(--er);animation:simPulse 2s infinite"></span><span style="font-size:.5625rem;color:var(--tm)">Secured by Keycloak SSO</span></div>',
      '</div>',
    '</div>',
    '<div style="text-align:center;font-size:.5625rem;color:var(--tm)">Realms: sociris &#8226; Clients: sociris-ai-engine, web-app-v2 &#8226; Users: 45 &#8226; Roles: 5</div>',
  ].join(''), { port: '8080' });
};

SOCIRIS.viz.gen2Cortex = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS Enrichment — Cortex (:9001)', 'Observable analyzer/responder — DNS, IP, URL, hash, domain enrichment', [
    '<div class="viz-tp-header" style="background:#0f172a;padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<span style="font-size:.6875rem;font-weight:800;color:#f472b6">CORTEX</span>',
    '</div>',
    v.statRow([
      { value: '18', label: 'Analyzers', cls: 'viz-c-pri' },
      { value: '4', label: 'Responders', cls: 'viz-c-ok' },
      { value: '142', label: 'Jobs Today', cls: 'viz-c-sec' },
      { value: '2.3s', label: 'Avg Time', cls: 'viz-c-acc' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('search') + ' Recent Analysis Jobs</div>',
      v.tableRow(['Observable', 'Type', 'Analyzer', 'Result'], true),
      v.tableRow(['185.234.72.x', v.tag('IP', 'default'), 'VirusTotal', v.tag('Malicious', 'critical')]),
      v.tableRow(['91.234.x.x', v.tag('IP', 'default'), 'AbuseDB', v.tag('Malicious', 'critical')]),
      v.tableRow(['a3f2b8...sha256', v.tag('Hash', 'default'), 'HybridAnalysis', v.tag('Malicious', 'critical')]),
      v.tableRow(['api.sociris.io', v.tag('Domain', 'default'), 'DNS', v.tag('Clean', 'ok')]),
      v.tableRow(['10.0.5.22', v.tag('IP', 'default'), 'Shodan', v.tag('Suspicious', 'high')]),
    '</div>',
    '<div style="margin-top:.5rem;display:flex;flex-wrap:wrap;gap:.25rem">',
      '<span class="viz-tp-module" style="background:rgba(244,114,182,.08);border-color:rgba(244,114,182,.15)">VirusTotal</span>',
      '<span class="viz-tp-module" style="background:rgba(244,114,182,.08);border-color:rgba(244,114,182,.15)">Shodan</span>',
      '<span class="viz-tp-module" style="background:rgba(244,114,182,.08);border-color:rgba(244,114,182,.15)">AbuseDB</span>',
      '<span class="viz-tp-module" style="background:rgba(244,114,182,.08);border-color:rgba(244,114,182,.15)">HybridAnalysis</span>',
       '<span class="viz-tp-module">PassiveTotal</span>',
       '<span class="viz-tp-module">DNS</span>',
     '</div>',
   ].join(''), { port: '9001' });
};

SOCIRIS.viz.gen2Prometheus = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS Metrics Collector — Prometheus (:9090)', 'Scrape targets, TSDB, PromQL queries, alerts, service discovery', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#1a0a2e,#0d1117);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<div style="display:flex;align-items:center;gap:.5rem">',
          '<span style="font-size:.6875rem;font-weight:800;color:#e8524a">PROMETHEUS</span>',
          '<span style="font-size:.5rem;color:var(--tm)">v2.48.0</span>',
        '</div>',
        '<div style="display:flex;gap:.5rem;font-size:.5rem;color:var(--tm)">',
          '<span>TSDB: 2.4 GB</span>',
          '<span style="color:var(--ok)">&#9679; 14 targets UP</span>',
        '</div>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '14', label: 'Targets', cls: 'viz-c-ok' },
      { value: '48.2K', label: 'Active Series', cls: 'viz-c-pri' },
      { value: '1.2M', label: 'Samples/s', cls: 'viz-c-sec' },
      { value: '6', label: 'Alert Rules', cls: 'viz-c-wr' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('target') + ' Scrape Targets</div>',
      v.tableRow(['Target', 'Endpoint', 'Status', 'Last Scrape'], true),
      v.tableRow(['sociris-ai-engine', ':8000/metrics', v.statusDot('online') + ' UP', '0.8s ago']),
      v.tableRow(['sociris-web-app', ':3002/metrics', v.statusDot('online') + ' UP', '1.2s ago']),
      v.tableRow(['wazuh-manager', ':5500/metrics', v.statusDot('online') + ' UP', '0.5s ago']),
      v.tableRow(['postgres-db', ':5432/metrics', v.statusDot('online') + ' UP', '2.1s ago']),
      v.tableRow(['redis-cache', ':6379/metrics', v.statusDot('online') + ' UP', '0.3s ago']),
      v.tableRow(['nginx-proxy', ':9113/metrics', v.statusDot('online') + ' UP', '1.0s ago']),
      v.tableRow(['node-exporter', ':9100/metrics', v.statusDot('online') + ' UP', '0.4s ago']),
      v.tableRow(['cadvisor', ':8080/metrics', v.statusDot('online') + ' UP', '1.5s ago']),
      v.tableRow(['loki', ':3100/metrics', v.statusDot('online') + ' UP', '0.9s ago']),
      v.tableRow(['grafana', ':3000/metrics', v.statusDot('online') + ' UP', '0.7s ago']),
    '</div>',
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('code') + ' PromQL Query</div>',
      '<div style="background:rgba(255,255,255,.03);padding:.5rem;border-radius:.375rem;font-family:monospace;font-size:.5625rem;color:var(--pri-l)">rate(http_requests_total{job="sociris-ai-engine"}[5m])</div>',
      '<div style="margin-top:.25rem;font-size:.5rem;color:var(--tm)">Result: 3 series, 120 samples returned in 12ms</div>',
    '</div>',
  ].join(''), { port: '9090' });
};

SOCIRIS.viz.gen2Redis = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS Cache — Redis Commander (:8081)', 'In-memory cache — keys, memory, pub/sub, AI model response cache', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#1a0a0a,#0d1117);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<span style="font-size:.6875rem;font-weight:800;color:#dc382d">REDIS</span>',
        '<span style="font-size:.5rem;color:var(--ok)">&#9679; Connected — db0</span>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '1,247', label: 'Keys', cls: 'viz-c-er' },
      { value: '128', label: 'MB Used', cls: 'viz-c-pri' },
      { value: '2.4K', label: 'Ops/s', cls: 'viz-c-ok' },
      { value: '99.8%', label: 'Hit Rate', cls: 'viz-c-sec' }
    ]),
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.375rem;margin-top:.5rem">',
      '<div class="viz-panel">',
        '<div class="viz-panel-head">' + I('database') + ' Key Distribution</div>',
        v.miniBar('ai:responses:*', 62, 'var(--pri)'),
        v.miniBar('ai:models:*', 24, 'var(--sec)'),
        v.miniBar('session:*', 28, 'var(--acc)'),
        v.miniBar('threat:cache:*', 15, 'var(--er)'),
        v.miniBar('geofence:*', 8, 'var(--ok)'),
      '</div>',
      '<div class="viz-panel">',
        '<div class="viz-panel-head">' + I('activity') + ' Memory Usage</div>',
        v.lineChart('redis-mem', 70),
        '<div style="font-size:.5rem;color:var(--tm);margin-top:.25rem">Peak: 142 MB / Max: 512 MB</div>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.375rem">',
      '<div class="viz-panel-head">' + I('terminal') + ' CLI</div>',
      '<div style="background:rgba(255,255,255,.02);padding:.375rem .5rem;border-radius:.375rem;font-family:monospace;font-size:.5rem;color:var(--ok)">127.0.0.1:6379> GET ai:responses:latest<br>"{\'model\':\'qwen3\',\'verdict\':\'threat\',\'confidence\':0.94}"<br><br>127.0.0.1:6379> TTL ai:responses:latest<br>(integer) 347<br><br>127.0.0.1:6379> PUBSUB CHANNELS<br>1) "sociris:alerts"<br>2) "sociris:ai:cascade"</div>',
    '</div>',
  ].join(''), { port: '8081' });
};

SOCIRIS.viz.gen2Portainer = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS Containers — Portainer (:9443)', 'Docker management — stacks, containers, images, volumes, networks', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#0d2137,#0d1117);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<span style="font-size:.6875rem;font-weight:800;color:#41b6e6">PORTAINER</span>',
        '<span style="font-size:.5rem;color:var(--ok)">Environment: local-docker</span>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '24', label: 'Containers', cls: 'viz-c-pri' },
      { value: '3', label: 'Stacks', cls: 'viz-c-ok' },
      { value: '12', label: 'Images', cls: 'viz-c-sec' },
      { value: '5', label: 'Networks', cls: 'viz-c-acc' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('box') + ' Stack: sociris-platform</div>',
      v.tableRow(['Container', 'Image', 'Status', 'CPU / RAM'], true),
      v.tableRow(['sociris-ai-engine', 'sociris/ai:latest', v.statusDot('online') + ' Running', '12% / 1.2 GB']),
      v.tableRow(['sociris-web-app', 'sociris/web:latest', v.statusDot('online') + ' Running', '3% / 256 MB']),
      v.tableRow(['sociris-ollama', 'ollama/ollama:latest', v.statusDot('online') + ' Running', '45% / 6.4 GB']),
      v.tableRow(['wazuh-manager', 'wazuh/wazuh:4.7', v.statusDot('online') + ' Running', '8% / 512 MB']),
      v.tableRow(['wazuh-dashboard', 'wazuh/dashboard:4.7', v.statusDot('online') + ' Running', '5% / 384 MB']),
      v.tableRow(['shuffle-orborus', 'shuffle/shuffle:latest', v.statusDot('online') + ' Running', '6% / 256 MB']),
      v.tableRow(['postgres-db', 'postgres:15-alpine', v.statusDot('online') + ' Running', '2% / 128 MB']),
      v.tableRow(['redis-cache', 'redis:7-alpine', v.statusDot('online') + ' Running', '1% / 64 MB']),
      v.tableRow(['grafana', 'grafana/grafana:10.2', v.statusDot('online') + ' Running', '4% / 192 MB']),
      v.tableRow(['prometheus', 'prom/prometheus:latest', v.statusDot('online') + ' Running', '3% / 256 MB']),
      v.tableRow(['loki', 'grafana/loki:latest', v.statusDot('online') + ' Running', '2% / 128 MB']),
      v.tableRow(['thehive', 'strangebee/thehive:5.2', v.statusDot('online') + ' Running', '7% / 320 MB']),
      v.tableRow(['cortex', 'strangebee/cortex:latest', v.statusDot('online') + ' Running', '4% / 192 MB']),
      v.tableRow(['misp-core', 'harvarditsecurity/misp:latest', v.statusDot('online') + ' Running', '9% / 448 MB']),
      v.tableRow(['keycloak', 'quay.io/keycloak:22', v.statusDot('online') + ' Running', '5% / 256 MB']),
      v.tableRow(['traccar', 'traccar/traccar:latest', v.statusDot('online') + ' Running', '2% / 128 MB']),
      v.tableRow(['nginx-proxy', 'nginx:alpine', v.statusDot('online') + ' Running', '1% / 32 MB']),
      v.tableRow(['portainer-agent', 'portainer/agent:latest', v.statusDot('online') + ' Running', '1% / 48 MB']),
    '</div>',
    '<div style="margin-top:.375rem;display:flex;flex-wrap:wrap;gap:.25rem">',
      '<span class="viz-tp-module" style="background:rgba(65,182,230,.08);border-color:rgba(65,182,230,.15)">sociris-platform</span>',
      '<span class="viz-tp-module">monitoring</span>',
      '<span class="viz-tp-module">threat-intel</span>',
    '</div>',
  ].join(''), { port: '9443' });
};

SOCIRIS.viz.gen2Loki = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS Logs — Loki + Promtail (:3100)', 'Log aggregation — LogQL queries, label index, stream discovery', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#0d1a2e,#0d1117);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<span style="font-size:.6875rem;font-weight:800;color:#f5a623">LOKI</span>',
        '<span style="font-size:.5rem;color:var(--ok)">Ingest: 4.2K logs/s</span>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '14', label: 'Streams', cls: 'viz-c-er' },
      { value: '847K', label: 'Entries/hr', cls: 'viz-c-pri' },
      { value: '3.1', label: 'GB Total', cls: 'viz-c-sec' },
      { value: '28', label: 'Labels', cls: 'viz-c-ok' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('search') + ' LogQL Query</div>',
      '<div style="background:rgba(255,255,255,.03);padding:.375rem .5rem;border-radius:.375rem;font-family:monospace;font-size:.5rem;color:var(--acc)">{job="sociris-ai-engine"} |= "error" | json | level="ERROR"</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.375rem">',
      '<div class="viz-panel-head">' + I('list') + ' Log Streams</div>',
      v.tableRow(['Stream', 'Labels', 'Rate'], true),
      v.tableRow(['sociris-ai-engine', 'level=INFO, ver=v3', '1.2K/s']),
      v.tableRow(['sociris-web-app', 'level=INFO, env=prod', '800/s']),
      v.tableRow(['wazuh-manager', 'type=alert, sev=medium', '340/s']),
      v.tableRow(['shuffle-soar', 'action=execute, status=ok', '120/s']),
      v.tableRow(['nginx-proxy', 'method=GET, code=200', '1.8K/s']),
      v.tableRow(['postgres-db', 'query=SELECT, db=sociris', '45/s']),
      v.tableRow(['keycloak', 'event=LOGIN, realm=sociris', '12/s']),
    '</div>',
    '<div class="viz-panel" style="margin-top:.375rem">',
      '<div class="viz-panel-head">' + I('file-text') + ' Recent Log Entries</div>',
      '<div style="background:rgba(255,255,255,.02);padding:.375rem .5rem;border-radius:.375rem;font-family:monospace;font-size:.4375rem;line-height:1.6">',
        '<div style="color:var(--ok)">2024-12-15T10:23:41Z [INFO] ai-engine: Cascade verdict=threat confidence=0.94 model=qwen3 alert_id=ALT-1147</div>',
        '<div style="color:var(--wr)">2024-12-15T10:23:39Z [WARN] wazuh: Rule 5710 fired — 3rd auth failure from 185.234.72.x</div>',
        '<div style="color:var(--ok)">2024-12-15T10:23:38Z [INFO] shuffle: Playbook unauthorized_access triggered, run_id=PLB-482</div>',
        '<div style="color:var(--pri-l)">2024-12-15T10:23:35Z [DEBUG] traccar: Device Patrol Alpha update lat=40.7128 lng=-74.006</div>',
        '<div style="color:var(--ok)">2024-12-15T10:23:33Z [INFO] keycloak: User sarah.analyst logged in from 10.0.1.42</div>',
      '</div>',
    '</div>',
  ].join(''), { port: '3100' });
};

SOCIRIS.viz.gen2Ollama = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS LLM — Ollama (:11434)', 'Local LLM inference — model management, GPU stats, inference logs', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#0d1117,#1a2e0d);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<span style="font-size:.6875rem;font-weight:800;color:#4ade80">OLLAMA</span>',
        '<span style="font-size:.5rem;color:var(--ok)">&#9679; CUDA Available</span>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '5', label: 'Models', cls: 'viz-c-ok' },
      { value: '8', label: 'GPU GB', cls: 'viz-c-pri' },
      { value: '47ms', label: 'Avg TTFT', cls: 'viz-c-sec' },
      { value: '1.2K', label: 'Inferences/hr', cls: 'viz-c-acc' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('cpu') + ' Loaded Models</div>',
      v.tableRow(['Model', 'Size', 'Quant', 'GPU', 'Status'], true),
      v.tableRow(['qwen3:8b', '4.7 GB', 'Q4_K_M', v.tag('Loaded', 'ok'), v.statusDot('online') + ' Active']),
      v.tableRow(['llama3.1:8b', '4.5 GB', 'Q4_K_M', v.tag('Loaded', 'ok'), v.statusDot('online') + ' Standby']),
      v.tableRow(['mistral:7b', '4.1 GB', 'Q4_0', v.tag('Cached', 'default'), v.statusDot('idle') + ' Idle']),
      v.tableRow(['gemma2:9b', '5.2 GB', 'Q4_K_M', v.tag('Available', 'default'), v.statusDot('idle') + ' Cold']),
      v.tableRow(['nomic-embed', '274 MB', 'F16', v.tag('Loaded', 'ok'), v.statusDot('online') + ' Active']),
    '</div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.375rem;margin-top:.375rem">',
      '<div class="viz-panel">',
        '<div class="viz-panel-head">GPU Memory</div>',
        v.miniBar('VRAM Used', 72, 'var(--sec)'),
        v.miniBar('Model Weights', 58, 'var(--pri)'),
        v.miniBar('KV Cache', 14, 'var(--acc)'),
        '<div style="font-size:.4375rem;color:var(--tm);margin-top:.25rem">NVIDIA RTX 4060 — 8 GB VRAM</div>',
      '</div>',
      '<div class="viz-panel">',
        '<div class="viz-panel-head">Inference Rate</div>',
        v.lineChart('ollama-rate', 60),
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.375rem">',
      '<div class="viz-panel-head">' + I('terminal') + ' Recent Inferences</div>',
      '<div style="font-size:.5rem;color:var(--t2);padding:.25rem .375rem;border-bottom:1px solid rgba(255,255,255,.03)">qwen3:8b &rarr; "Analyze alert ALT-1147..." &rarr; 34 tokens, 847ms</div>',
      '<div style="font-size:.5rem;color:var(--t2);padding:.25rem .375rem;border-bottom:1px solid rgba(255,255,255,.03)">qwen3:8b &rarr; "Enrich context for 185.234..." &rarr; 52 tokens, 1.2s</div>',
      '<div style="font-size:.5rem;color:var(--t2);padding:.25rem .375rem">nomic-embed &rarr; "Embed: unauthorized access pattern..." &rarr; 768d, 23ms</div>',
    '</div>',
  ].join(''), { port: '11434' });
};

SOCIRIS.viz.gen2MLflow = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS ML — MLflow (:5000)', 'AI model experiment tracking — runs, metrics, artifacts, model registry', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#0d1117,#1a1a2e);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<span style="font-size:.6875rem;font-weight:800;color:#0198e1">MLFLOW</span>',
        '<span style="font-size:.5rem;color:var(--tm)">Tracking URI: http://mlflow:5000</span>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '5', label: 'Experiments', cls: 'viz-c-pri' },
      { value: '47', label: 'Runs', cls: 'viz-c-ok' },
      { value: '3', label: 'Registered', cls: 'viz-c-sec' },
      { value: '94.2%', label: 'Best F1', cls: 'viz-c-acc' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('flask-conical') + ' Experiment: threat-detection-cascade</div>',
      v.tableRow(['Run', 'Model', 'Precision', 'Recall', 'F1', 'Status'], true),
      v.tableRow(['Run #47', 'qwen3-8b-finetuned', '0.952', '0.938', v.tag('0.942', 'ok'), v.tag('Production', 'ok')]),
      v.tableRow(['Run #46', 'qwen3-8b-finetuned', '0.948', '0.931', v.tag('0.939', 'default'), v.tag('Staging', 'default')]),
      v.tableRow(['Run #45', 'llama3.1-8b-ft', '0.931', '0.927', v.tag('0.929', 'default'), v.tag('Archived', 'default')]),
      v.tableRow(['Run #44', 'mistral-7b-ft', '0.912', '0.921', v.tag('0.916', 'default'), v.tag('Archived', 'default')]),
      v.tableRow(['Run #43', 'gemma2-9b-ft', '0.908', '0.915', v.tag('0.911', 'default'), v.tag('Archived', 'default')]),
    '</div>',
    '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.375rem;margin-top:.375rem">',
      '<div class="viz-panel">',
        '<div class="viz-panel-head">F1 Score Over Runs</div>',
        v.lineChart('mlflow-f1', 60),
      '</div>',
      '<div class="viz-panel">',
        '<div class="viz-panel-head">Loss Curve (Latest)</div>',
        v.lineChart('mlflow-loss', 60),
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.375rem">',
      '<div class="viz-panel-head">' + I('box') + ' Model Registry</div>',
      '<div style="display:flex;flex-wrap:wrap;gap:.375rem">',
        '<div style="flex:1;min-width:120px;padding:.375rem;background:rgba(16,185,129,.04);border:1px solid rgba(16,185,129,.12);border-radius:.375rem"><div style="font-size:.5625rem;font-weight:700;color:var(--ok)">Production</div><div style="font-size:.5rem;color:var(--tm)">qwen3-8b-ft v3</div></div>',
        '<div style="flex:1;min-width:120px;padding:.375rem;background:rgba(99,102,241,.04);border:1px solid rgba(99,102,241,.12);border-radius:.375rem"><div style="font-size:.5625rem;font-weight:700;color:var(--pri)">Staging</div><div style="font-size:.5rem;color:var(--tm)">qwen3-8b-ft v2</div></div>',
        '<div style="flex:1;min-width:120px;padding:.375rem;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:.375rem"><div style="font-size:.5625rem;font-weight:700;color:var(--tm)">Archived</div><div style="font-size:.5rem;color:var(--tm)">4 versions</div></div>',
      '</div>',
    '</div>',
  ].join(''), { port: '5000' });
};

SOCIRIS.viz.gen2NetBox = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS IPAM — NetBox (:8001)', 'Infrastructure management — sites, devices, IPs, VLANs, circuits', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#0d1117,#1e0d17);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<span style="font-size:.6875rem;font-weight:800;color:#ce0814">NETBOX</span>',
        '<span style="font-size:.5rem;color:var(--ok)">DCIM + IPAM</span>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '2', label: 'Sites', cls: 'viz-c-pri' },
      { value: '14', label: 'Devices', cls: 'viz-c-ok' },
      { value: '6', label: 'VLANs', cls: 'viz-c-sec' },
      { value: '348', label: 'IPs', cls: 'viz-c-acc' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('map-pin') + ' Sites</div>',
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.375rem">',
        '<div style="padding:.375rem;background:rgba(99,102,241,.04);border:1px solid rgba(99,102,241,.12);border-radius:.375rem"><div style="font-size:.5625rem;font-weight:700;color:var(--pri)">HQ — Primary</div><div style="font-size:.5rem;color:var(--tm)">12 devices &bull; 2 VLANs &bull; 192.168.0.0/16</div></div>',
        '<div style="padding:.375rem;background:rgba(16,185,129,.04);border:1px solid rgba(16,185,129,.12);border-radius:.375rem"><div style="font-size:.5625rem;font-weight:700;color:var(--ok)">DC — Cloud</div><div style="font-size:.5rem;color:var(--tm)">2 devices &bull; 4 VLANs &bull; 10.0.0.0/8</div></div>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.375rem">',
      '<div class="viz-panel-head">' + I('server') + ' Device Inventory</div>',
      v.tableRow(['Device', 'Role', 'Site', 'IP Address', 'Status'], true),
      v.tableRow(['sociris-hq-srv01', 'Server', 'HQ', '192.168.1.10', v.tag('Active', 'ok')]),
      v.tableRow(['sociris-hq-srv02', 'Server', 'HQ', '192.168.1.11', v.tag('Active', 'ok')]),
      v.tableRow(['sociris-ai-gpu01', 'GPU Server', 'HQ', '192.168.1.20', v.tag('Active', 'ok')]),
      v.tableRow(['edge-router-01', 'Router', 'HQ', '192.168.1.1', v.tag('Active', 'ok')]),
      v.tableRow(['core-switch-01', 'Switch', 'HQ', '192.168.1.2', v.tag('Active', 'ok')]),
      v.tableRow(['ap-indoor-01', 'Wireless AP', 'HQ', '192.168.1.50', v.tag('Active', 'ok')]),
      v.tableRow(['cam-perimeter-01', 'Camera', 'HQ', '192.168.2.100', v.tag('Active', 'ok')]),
      v.tableRow(['cam-parking-02', 'Camera', 'HQ', '192.168.2.101', v.tag('Active', 'ok')]),
      v.tableRow(['sensor-gps-01', 'GPS Tracker', 'HQ', '10.0.5.22', v.tag('Active', 'ok')]),
      v.tableRow(['cloud-proxy-01', 'Load Balancer', 'DC', '10.0.0.5', v.tag('Active', 'ok')]),
    '</div>',
    '<div class="viz-panel" style="margin-top:.375rem">',
      '<div class="viz-panel-head">' + I('network') + ' VLANs</div>',
      v.tableRow(['VLAN', 'Name', 'Prefix', 'Devices'], true),
      v.tableRow(['100', 'Management', '192.168.1.0/24', '8']),
      v.tableRow(['200', 'Cameras', '192.168.2.0/24', '4']),
      v.tableRow(['300', 'IoT / Sensors', '192.168.3.0/24', '6']),
      v.tableRow(['400', 'DMZ', '10.0.4.0/24', '2']),
      v.tableRow(['500', 'VPN Clients', '10.0.5.0/24', '12']),
      v.tableRow(['600', 'GPU Cluster', '192.168.1.16/28', '2']),
    '</div>',
  ].join(''), { port: '8001' });
};

SOCIRIS.viz.gen2Nginx = function() {
  var v = SOCIRIS.viz;
  var I = SOCIRIS.I;
  return v.screenMock('SOCIRIS Proxy — Nginx (:8099)', 'Reverse proxy & load balancer — upstream status, SSL, access logs, rate limiting', [
    '<div class="viz-tp-header" style="background:linear-gradient(135deg,#0d1a0d,#0d1117);padding:.5rem .75rem;border-radius:.375rem;margin-bottom:.5rem">',
      '<div style="display:flex;justify-content:space-between;align-items:center">',
        '<span style="font-size:.6875rem;font-weight:800;color:#4dc629">NGINX</span>',
        '<span style="font-size:.5rem;color:var(--ok)">SSL: Let\'s Encrypt &bull; A+ rating</span>',
      '</div>',
    '</div>',
    v.statRow([
      { value: '8', label: 'Upstreams', cls: 'viz-c-ok' },
      { value: '4.2K', label: 'Req/s', cls: 'viz-c-pri' },
      { value: '99.8%', label: 'Success', cls: 'viz-c-sec' },
      { value: '12ms', label: 'Avg Latency', cls: 'viz-c-acc' }
    ]),
    '<div class="viz-panel" style="margin-top:.5rem">',
      '<div class="viz-panel-head">' + I('arrow-right-left') + ' Upstream Servers</div>',
      v.tableRow(['Upstream', 'Backend', 'Weight', 'Fails', 'Status'], true),
      v.tableRow(['/api/v3/*', 'ai-engine:8000', '5', '0', v.tag('UP', 'ok')]),
      v.tableRow(['/app/*', 'web-app:3002', '3', '0', v.tag('UP', 'ok')]),
      v.tableRow(['/dashboard/*', 'wazuh:5601', '2', '0', v.tag('UP', 'ok')]),
      v.tableRow(['/grafana/*', 'grafana:3000', '2', '0', v.tag('UP', 'ok')]),
      v.tableRow(['/soar/*', 'shuffle:3001', '1', '0', v.tag('UP', 'ok')]),
      v.tableRow(['/cases/*', 'thehive:9000', '1', '0', v.tag('UP', 'ok')]),
      v.tableRow(['/threats/*', 'misp:8090', '1', '0', v.tag('UP', 'ok')]),
      v.tableRow(['/auth/*', 'keycloak:8080', '2', '0', v.tag('UP', 'ok')]),
    '</div>',
    '<div class="viz-panel" style="margin-top:.375rem">',
      '<div class="viz-panel-head">' + I('shield') + ' Security Headers</div>',
      '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:.25rem">',
        '<div style="text-align:center;padding:.25rem;background:rgba(16,185,129,.04);border-radius:.25rem"><div style="font-size:.5rem;font-weight:700;color:var(--ok)">HSTS</div><div style="font-size:.4375rem;color:var(--tm)">max-age=31536000</div></div>',
        '<div style="text-align:center;padding:.25rem;background:rgba(16,185,129,.04);border-radius:.25rem"><div style="font-size:.5rem;font-weight:700;color:var(--ok)">CSP</div><div style="font-size:.4375rem;color:var(--tm)">default-src self</div></div>',
        '<div style="text-align:center;padding:.25rem;background:rgba(16,185,129,.04);border-radius:.25rem"><div style="font-size:.5rem;font-weight:700;color:var(--ok)">X-Frame</div><div style="font-size:.4375rem;color:var(--tm)">DENY</div></div>',
      '</div>',
    '</div>',
    '<div class="viz-panel" style="margin-top:.375rem">',
      '<div class="viz-panel-head">' + I('activity') + ' Rate Limiting</div>',
      v.miniBar('/api/v3/threats — 100/min', 68, 'var(--wr)'),
      v.miniBar('/api/v3/enrich — 50/min', 34, 'var(--ok)'),
      v.miniBar('/auth/token — 10/min', 12, 'var(--ok)'),
      v.miniBar('/api/v3/cascade — 30/min', 45, 'var(--sec)'),
    '</div>',
  ].join(''), { port: '8099' });
};
