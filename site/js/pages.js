var SOCIRIS = SOCIRIS || {};

(function() {
  var I = SOCIRIS.I;
  var ph = SOCIRIS.ph;
  var cta = SOCIRIS.cta;
  var svc = SOCIRIS.svc;
  var cpI = SOCIRIS.cpI;
  var uc = SOCIRIS.uc;
  var pc = SOCIRIS.pc;
  var faq = SOCIRIS.faq;
  var dashCard = SOCIRIS.dashCard;
  var ringChart = SOCIRIS.ringChart;
  var missionCard = SOCIRIS.missionCard;
  var codeBlock = SOCIRIS.codeBlock;
  var archFlow = SOCIRIS.archFlow;
  var impactCard = SOCIRIS.impactCard;
  var tm = SOCIRIS.threatMarker;

  SOCIRIS.pages = {};

  SOCIRIS.pages.home = {
    title: 'SOCIRIS — AI-Powered Security Intelligence Platform',
    desc: 'SOCIRIS — AI-powered autonomous security intelligence platform with context-driven threat detection, OSINT fusion, and SOAR automation.',
    render: function() {
      return '<section class="hero"><div class="hbg"></div><div class="ctn">' +
      '<div class="hb">' + I('zap') + ' AI-Native Security Intelligence Platform</div>' +
      '<h1 class="ht">Intelligent <span class="gt">Security</span><br>For a Safer Tomorrow</h1>' +
      '<p class="hs">SOCIRIS delivers context-driven threat detection, OSINT intelligence fusion, automated incident response, and enterprise-grade security operations — all powered by an AI ensemble engine with a Security Context Graph that remembers.</p>' +
      '<div class="hcta"><a href="#/demo" class="btn bp bl"><span>Live Demo</span>' + I('play') + '</a><a href="#/about" class="btn bs bl"><span>Discover SOCIRIS</span>' + I('arrow-right') + '</a></div>' +
      '<div class="hstats">' +
      '<div class="sc fi stagger-1"><div class="si">' + I('shield-check') + '</div><div><span class="sn">24/7</span><span class="sl">Autonomous Monitoring</span></div></div>' +
      '<div class="sc fi stagger-2"><div class="si">' + I('brain') + '</div><div><span class="sn">95%+</span><span class="sl">Detection Accuracy</span></div></div>' +
      '<div class="sc fi stagger-3"><div class="si">' + I('layers') + '</div><div><span class="sn">25+</span><span class="sl">Microservices</span></div></div>' +
      '<div class="sc fi stagger-4"><div class="si">' + I('globe') + '</div><div><span class="sn">16+</span><span class="sl">OSINT Data Layers</span></div></div>' +
      '</div></div>' +
      '<div class="hero-logo-container"><div class="hero-logo-orbit"><div class="hero-logo-orbit-dot"></div></div><div class="hero-logo-orbit"></div><img src="site/images/sociris-logo-dark.jpeg" alt="SOCIRIS" class="hero-logo-center" id="hero-center-logo"></div>' +
      '<div class="scr">' + I('chevron-down') + '</div></section>' +

      '<section class="stats-marquee"><div class="stats-marquee-track">' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt">847</div><div class="stats-marquee-label">Threats Detected Today</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt2">23s</div><div class="stats-marquee-label">Avg Response Time</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt">99.7%</div><div class="stats-marquee-label">Alert Coverage</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt2">93%</div><div class="stats-marquee-label">MTTR Reduction</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt">25+</div><div class="stats-marquee-label">Microservices</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt2">5</div><div class="stats-marquee-label">AI Models</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt">13</div><div class="stats-marquee-label">Integrations</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt2">16+</div><div class="stats-marquee-label">OSINT Layers</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt">8</div><div class="stats-marquee-label">AI Swarm Agents</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt2">6</div><div class="stats-marquee-label">Evolution Phases</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt">847</div><div class="stats-marquee-label">Threats Detected Today</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt2">23s</div><div class="stats-marquee-label">Avg Response Time</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt">99.7%</div><div class="stats-marquee-label">Alert Coverage</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt2">93%</div><div class="stats-marquee-label">MTTR Reduction</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt">25+</div><div class="stats-marquee-label">Microservices</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt2">5</div><div class="stats-marquee-label">AI Models</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt">13</div><div class="stats-marquee-label">Integrations</div></div>' +
      '<div class="stats-marquee-item"><div class="stats-marquee-value gt2">16+</div><div class="stats-marquee-label">OSINT Layers</div></div>' +
      '</div></section>' +

      '<section class="sec lore-section"><div class="ctn"><div class="sh"><span class="slb">' + I('sparkles') + ' The Name</span><h2>What Does <span class="gt text-glow">SOCIRIS</span> Mean?</h2><p class="ss">The story behind the name — a convergence of ancient mythology and modern security engineering</p></div>' +
      '<div class="lore-grid">' +
      '<div class="lore-visual"><div class="lore-logo-ring">' +
      '<img src="site/images/sociris-logo-dark.jpeg" alt="SOCIRIS" class="lore-logo-img" id="lore-logo">' +
      '<div class="lore-letter" style="top:-10px;left:50%;transform:translateX(-50%)" title="Security">S</div>' +
      '<div class="lore-letter" style="top:20%;right:-10px" title="Operations">O</div>' +
      '<div class="lore-letter" style="bottom:20%;right:-10px" title="Center">C</div>' +
      '<div class="lore-letter" style="bottom:-10px;left:50%;transform:translateX(-50%)" title="Intelligent">I</div>' +
      '<div class="lore-letter" style="bottom:20%;left:-10px" title="Response">R</div>' +
      '<div class="lore-letter" style="top:20%;left:-10px" title="Surveillance">S</div>' +
      '</div></div>' +
      '<div>' +
      '<h3 style="margin-bottom:1rem">Security Operations Center —<br><span class="gt">Intelligent Response & Intrusion Surveillance</span></h3>' +
      '<p>Every letter of SOCIRIS carries deliberate engineering intent. The name is both a technical acronym and a creative resonance with <strong style="color:var(--pri-l)">Osiris</strong>, the ancient Egyptian deity of resurrection, protection, and the afterlife — the ultimate guardian who judges and protects.</p>' +
      '<p>Like Osiris who saw all and judged with wisdom, SOCIRIS monitors everything, understands context, and responds with intelligent precision. The platform doesn\'t just detect — it <em>remembers</em>, <em>reasons</em>, and <em>evolves</em>.</p>' +
      '<div class="lore-breakdown">' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt">S</div><div class="lore-letter-meaning"><strong>Security</strong><br>Multi-layered defense with hash-chained audit trails</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt2">O</div><div class="lore-letter-meaning"><strong>Operations</strong><br>24/7 autonomous SOC operations with CD/CR loop</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt3">C</div><div class="lore-letter-meaning"><strong>Center</strong><br>Centralized intelligence with Security Context Graph</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt">I</div><div class="lore-letter-meaning"><strong>Intelligent</strong><br>AI cascade: triage → deep analysis → HITL verification</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt2">R</div><div class="lore-letter-meaning"><strong>Response</strong><br>5 SOAR playbooks with human-in-the-loop gates</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt3">S</div><div class="lore-letter-meaning"><strong>Surveillance</strong><br>FaceNet + MTCNN + GPS + CCTV + OSINT fusion</div></div>' +
      '</div></div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('sparkles') + ' Platform Capabilities</span><h2>Security Reimagined with <span class="gt">Artificial Intelligence</span></h2><p class="ss">Context-driven detection, OSINT fusion, and automated response — a complete security intelligence platform</p></div>' +
      '<div class="feature-showcase">' +
      '<div class="feature-showcase-card fi"><div class="fsc-header"><div class="fsc-icon c1">' + I('eye') + '</div><div><h3>Smart Surveillance</h3><div class="fsc-stat c1">' + I('camera') + ' Real-Time</div></div></div><p>FaceNet + MTCNN facial recognition with real-time video analytics, multi-camera coordination, behavior analysis, and biometric access control across all perimeters. Traccar GPS integration for asset tracking.</p><div class="tech-badge-grid">' + ['FaceNet', 'MTCNN', 'Traccar GPS', 'Computer Vision', 'Biometrics'].map(function(t) { return '<span class="tech-badge">' + I('cpu') + ' ' + t + '</span>'; }).join('') + '</div></div>' +
      '<div class="feature-showcase-card fi"><div class="fsc-header"><div class="fsc-icon c6">' + I('shield-alert') + '</div><div><h3>Threat Detection</h3><div class="fsc-stat c6">' + I('brain') + ' AI Ensemble</div></div></div><p>Ensemble AI models — LSTM (30%), SVM (20%), Isolation Forest (20%), UEBA (15%), Threat Intel (15%) with AI cascade architecture: lightweight triage filters 70% noise in <100ms, then deep analysis with Ollama Qwen3.</p><div class="tech-badge-grid">' + ['LSTM', 'SVM', 'Isolation Forest', 'UEBA', 'Ollama', 'Qwen3'].map(function(t) { return '<span class="tech-badge">' + I('cpu') + ' ' + t + '</span>'; }).join('') + '</div></div>' +
      '<div class="feature-showcase-card fi"><div class="fsc-header"><div class="fsc-icon c2">' + I('radar') + '</div><div><h3>OSINT Fusion</h3><div class="fsc-stat c2">' + I('globe') + ' 16+ Layers</div></div></div><p>16+ geospatial data layers, RECON toolkit, 8-agent AI swarm, crypto wallet tracing, absence-as-signal intelligence, OpenSky ADS-B flights, maritime AIS, seismic monitoring, conflict zone tracking, and more.</p><div class="tech-badge-grid">' + ['OpenSky', 'AIS Maritime', 'USGS', 'NASA FIRMS', 'NOAA', 'BGP'].map(function(t) { return '<span class="tech-badge">' + I('globe') + ' ' + t + '</span>'; }).join('') + '</div></div>' +
      '<div class="feature-showcase-card fi"><div class="fsc-header"><div class="fsc-icon c4">' + I('workflow') + '</div><div><h3>SOAR Automation</h3><div class="fsc-stat c4">' + I('zap') + ' 5 Playbooks</div></div></div><p>5 automated response playbooks with HITL verification gates: confidence >95% auto-execute, 70-95% one-click approval, <70% needs-data. Shuffle + TheHive + Cortex integration for full orchestration.</p><div class="tech-badge-grid">' + ['Shuffle', 'TheHive', 'Cortex', 'HITL', 'Shadow Mode', 'CD/CR'].map(function(t) { return '<span class="tech-badge">' + I('shield') + ' ' + t + '</span>'; }).join('') + '</div></div>' +
      '<div class="feature-showcase-card fi"><div class="fsc-header"><div class="fsc-icon c3">' + I('database') + '</div><div><h3>Context Graph</h3><div class="fsc-stat c3">' + I('git-branch') + ' Neo4j / AGE</div></div></div><p>Security Context Graph that enriches every alert with asset topology, ownership, blast radius, SOPs, investigation history, behavioral baselines, and temporal context. Federated queries across Wazuh, MISP, and OpenSearch.</p><div class="tech-badge-grid">' + ['Neo4j', 'Apache AGE', 'Wazuh', 'MISP', 'OpenSearch', 'PostgreSQL'].map(function(t) { return '<span class="tech-badge">' + I('database') + ' ' + t + '</span>'; }).join('') + '</div></div>' +
      '<div class="feature-showcase-card fi"><div class="fsc-header"><div class="fsc-icon c5">' + I('building-2') + '</div><div><h3>Enterprise Multi-Tenancy</h3><div class="fsc-stat c5">' + I('users') + ' SOC 2 / ISO 27001</div></div></div><p>Schema-per-tenant isolation, 5-role RBAC, white-label branding for MSSPs. Built-in compliance engines for SOC 2, ISO 27001, GDPR with automated DSAR workflows, right-to-erasure, and evidence collection.</p><div class="tech-badge-grid">' + ['SOC 2', 'ISO 27001', 'GDPR', 'RBAC', 'DSAR', 'Multi-Tenant'].map(function(t) { return '<span class="tech-badge">' + I('lock') + ' ' + t + '</span>'; }).join('') + '</div></div>' +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><div class="section-icon-row">' +
      '<div class="section-icon-item">' + I('activity') + '</div><div class="section-icon-item">' + I('bar-chart-3') + '</div><div class="section-icon-item">' + I('trending-up') + '</div><div class="section-icon-item">' + I('pie-chart') + '</div><div class="section-icon-item">' + I('target') + '</div>' +
      '</div><span class="slb">' + I('bar-chart-3') + ' Real-Time Metrics</span><h2>Platform <span class="gt">Performance</span></h2><p class="ss">Live operational metrics from the SOCIRIS security intelligence engine</p></div>' +
      '<div class="cg5">' +
      '<div class="cd fi stagger-1" style="text-align:center"><div class="number-highlight gt" data-count="847" data-suffix="">0</div><h3>Threats Detected</h3><p>Last 24 hours across all tenants</p></div>' +
      '<div class="cd fi stagger-2" style="text-align:center"><div class="number-highlight gt2" data-count="23" data-suffix="s">0</div><h3>Avg Response Time</h3><p>From alert to containment</p></div>' +
      '<div class="cd fi stagger-3" style="text-align:center"><div class="number-highlight gt" data-count="99" data-suffix=".7%">0</div><h3>Alert Coverage</h3><p>100% SLA target</p></div>' +
      '<div class="cd fi stagger-4" style="text-align:center"><div class="number-highlight gt2" data-count="93" data-suffix="%">0</div><h3>MTTR Reduction</h3><p>Faster resolution via AI</p></div>' +
      '<div class="cd fi stagger-5" style="text-align:center"><div class="number-highlight gt" data-count="6" data-suffix="phases">0</div><h3>Evolution Phases</h3><p>Foundation to ecosystem</p></div>' +
      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('zap') + ' Built Different</span><h2>Why <span class="gt">SOCIRIS</span></h2></div><div class="cg2">' +
      '<div class="qc fi hover-lift" onclick="location.hash=\'#/platform\'"><div class="qci c1">' + I('brain') + '</div><h3>Context-Driven Detection</h3><p>Security Context Graph with CD/CR closed loop — every alert enriched with asset, identity, and threat intel context. Not a score. A reasoning chain with narrative explanations.</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '<div class="qc fi hover-lift" onclick="location.hash=\'#/technology\'"><div class="qci c2">' + I('map') + '</div><h3>OSINT Intelligence Fusion</h3><p>16+ real-time geospatial layers, sanctions screening, CVE analysis, crypto wallet tracing, and absence-as-signal detection fused by 8-agent AI swarm.</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '<div class="qc fi hover-lift" onclick="location.hash=\'#/solutions\'"><div class="qci c4">' + I('building-2') + '</div><h3>Enterprise Multi-Tenancy</h3><p>SOC 2, ISO 27001, GDPR compliance with schema-per-tenant isolation, RBAC, and white-label branding for MSSPs worldwide.</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '<div class="qc fi hover-lift" onclick="location.hash=\'#/solutions\'"><div class="qci c5">' + I('puzzle') + '</div><h3>Plugin Ecosystem</h3><p>13 pre-built integrations (Splunk, CrowdStrike, Palo Alto), community detection rules, webhook marketplace, and GraphQL API for custom workflows.</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '<div class="qc fi hover-lift" onclick="location.hash=\'#/technology\'"><div class="qci c3">' + I('shield') + '</div><h3>Deployment Freedom</h3><p>SaaS cloud, self-hosted Docker/K8s, air-gapped for government/defense with local LLM via Ollama, or edge sensors for remote sites. Your data, your choice.</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '<div class="qc fi hover-lift" onclick="location.hash=\'#/platform\'"><div class="qci c6">' + I('users') + '</div><h3>Analyst Empowerment</h3><p>Investigation replay, reasoning chain explorer, AI coaching scenarios, skill gap analysis — junior analysts operate at senior levels within months.</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('git-compare') + ' Competitive Edge</span><h2>How SOCIRIS <span class="gt">Compares</span></h2></div>' +
      '<div class="comparison-grid">' +
      '<div class="comp-card fi"><h3>Traditional SIEM/SOAR</h3><div class="comp-price" style="color:var(--tm)">Legacy</div><ul class="comp-features">' +
      '<li>' + I('x') + ' Rules decay, manual tuning required</li>' +
      '<li>' + I('x') + ' No organizational memory</li>' +
      '<li>' + I('x') + ' Detection-only or response-only</li>' +
      '<li>' + I('x') + ' No OSINT fusion capability</li>' +
      '<li>' + I('x') + ' No physical security integration</li>' +
      '<li>' + I('x') + ' Cloud-dependent, no air-gap</li>' +
      '<li>' + I('x') + ' No context-driven reasoning</li>' +
      '</ul></div>' +
      '<div class="comp-card featured fi"><h3>SOCIRIS</h3><div class="comp-price gt">Complete<span>/platform</span></div><ul class="comp-features">' +
      '<li>' + I('check') + ' CD/CR auto-generates detections</li>' +
      '<li>' + I('check') + ' Security Context Graph persists knowledge</li>' +
      '<li>' + I('check') + ' Unified reasoning loop (detect→respond)</li>' +
      '<li>' + I('check') + ' 16+ OSINT data layers fused by AI swarm</li>' +
      '<li>' + I('check') + ' Face recognition + GPS + CCTV</li>' +
      '<li>' + I('check') + ' SaaS + Self-hosted + Air-gapped + Edge</li>' +
      '<li>' + I('check') + ' Narrative reasoning with HITL gates</li>' +
      '</ul></div>' +
      '<div class="comp-card fi"><h3>Point Solutions</h3><div class="comp-price" style="color:var(--tm)">Partial</div><ul class="comp-features">' +
      '<li>' + I('x') + ' Dashboard only (no detection/response)</li>' +
      '<li>' + I('x') + ' No SOAR automation playbooks</li>' +
      '<li>' + I('x') + ' No ML/AI ensemble engine</li>' +
      '<li>' + I('x') + ' SaaS-only, US-focused data residency</li>' +
      '<li>' + I('x') + ' No compliance automation</li>' +
      '<li>' + I('x') + ' No multi-tenancy support</li>' +
      '<li>' + I('x') + ' No analyst upskilling tools</li>' +
      '</ul></div>' +
      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('globe') + ' Global Reach</span><h2>Trusted by Organizations <span class="gt">Worldwide</span></h2><p class="ss">From Karachi to the world — securing governments, enterprises, and communities</p></div>' +
      '<div class="cg4">' +
      '<div class="cd fi hover-lift" style="text-align:center"><div class="ci c1">' + I('landmark') + '</div><h3>Government</h3><p>Air-gapped deployments for ministries, courts, and defense with local LLM</p></div>' +
      '<div class="cd fi hover-lift" style="text-align:center"><div class="ci c2">' + I('graduation-cap') + '</div><h3>Education</h3><p>Campus security with face recognition attendance and exam integrity</p></div>' +
      '<div class="cd fi hover-lift" style="text-align:center"><div class="ci c3">' + I('building-2') + '</div><h3>Enterprise</h3><p>Multi-tenant corporate security with RBAC, compliance, and white-label</p></div>' +
      '<div class="cd fi hover-lift" style="text-align:center"><div class="ci c4">' + I('heart-pulse') + '</div><h3>Healthcare</h3><p>Hospital ward monitoring, pharmacy access control, patient safety</p></div>' +
      '<div class="cd fi hover-lift" style="text-align:center"><div class="ci c5">' + I('factory') + '</div><h3>Industrial</h3><p>Plant perimeter security, worker safety, GPS asset tracking, IoT</p></div>' +
      '<div class="cd fi hover-lift" style="text-align:center"><div class="ci c6">' + I('shopping-bag') + '</div><h3>Retail</h3><p>AI-powered shoplifting prevention, customer analytics, POS monitoring</p></div>' +
      '<div class="cd fi hover-lift" style="text-align:center"><div class="ci c7">' + I('truck') + '</div><h3>Logistics</h3><p>Fleet tracking via Traccar, cargo security, warehouse surveillance</p></div>' +
      '<div class="cd fi hover-lift" style="text-align:center"><div class="ci c8">' + I('home') + '</div><h3>Residential</h3><p>Smart home security, gated communities, intruder detection alerts</p></div>' +
      '</div></div></section>' +

      cta('Ready to Secure Your Future?', 'Join the security intelligence revolution with SOCIRIS.', 'Live Demo', '#/demo', 'Request Demo', 'https://www.linkedin.com/company/sociris/');
    },
    init: function() {
      SOCIRIS.demo.destroy();
      SOCIRIS.demo.counters();
    }
  };

  SOCIRIS.pages.about = {
    title: 'About SOCIRIS — AI-Powered Security Intelligence Platform',
    desc: 'Learn about SOCIRIS — the context-driven, AI-native security intelligence platform built to transform security operations.',
    render: function() {
      return ph('About', 'About <span class="gt">SOCIRIS</span>', 'Transforming Security Through Artificial Intelligence') +
      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('sparkles') + ' The Origin</span><h2>The Legend of <span class="gt">SOCIRIS</span></h2><p class="ss">Where ancient mythology meets cutting-edge security engineering</p></div>' +
      '<div class="lore-grid">' +
      '<div class="lore-visual"><div class="lore-logo-ring">' +
      '<img src="site/images/sociris-logo-dark.jpeg" alt="SOCIRIS" class="lore-logo-img" id="lore-logo">' +
      '<div class="lore-letter" style="top:-10px;left:50%;transform:translateX(-50%)">S</div>' +
      '<div class="lore-letter" style="top:20%;right:-10px">O</div>' +
      '<div class="lore-letter" style="bottom:20%;right:-10px">C</div>' +
      '<div class="lore-letter" style="bottom:-10px;left:50%;transform:translateX(-50%)">I</div>' +
      '<div class="lore-letter" style="bottom:20%;left:-10px">R</div>' +
      '<div class="lore-letter" style="top:20%;left:-10px">S</div>' +
      '</div></div>' +
      '<div>' +
      '<p style="font-size:1.125rem;line-height:1.8"><strong style="color:var(--pri-l)">SOCIRIS</strong> — <em>Security Operations Center: Intelligent Response & Intrusion Surveillance</em> — is more than an acronym. It is a philosophy inspired by <strong style="color:var(--sec)">Osiris</strong>, the ancient Egyptian god of the afterlife, resurrection, and judgment.</p>' +
      '<p>In Egyptian mythology, Osiris was the ultimate guardian: he saw all transgressions, remembered every deed, and judged with perfect wisdom. SOCIRIS embodies this spirit — an AI-powered sentinel that monitors everything, remembers organizational context, reasons about threats, and responds with precision.</p>' +
      '<p>Like Osiris who was reborn, SOCIRIS continuously evolves through its <strong style="color:var(--pri-l)">CD/CR closed loop</strong> — every investigation makes the platform sharper, every response makes detection better. The Security Context Graph is its memory, the AI cascade is its judgment, and the SOAR playbooks are its swift action.</p>' +
      '<div class="lore-breakdown">' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt">S</div><div class="lore-letter-meaning"><strong>Security</strong><br>Multi-layered defense</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt2">O</div><div class="lore-letter-meaning"><strong>Operations</strong><br>24/7 autonomous SOC</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt3">C</div><div class="lore-letter-meaning"><strong>Center</strong><br>Centralized intelligence</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt">I</div><div class="lore-letter-meaning"><strong>Intelligent</strong><br>AI cascade reasoning</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt2">R</div><div class="lore-letter-meaning"><strong>Response</strong><br>Automated SOAR</div></div>' +
      '<div class="lore-letter-card fi"><div class="lore-letter-char gt3">S</div><div class="lore-letter-meaning"><strong>Surveillance</strong><br>Omni-sensor monitoring</div></div>' +
      '</div></div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="vmg">' +
      '<div class="vm fi"><div class="ci c1" style="margin-bottom:1.5rem">' + I('target') + '</div><h2>Our Vision</h2><p>To redefine security intelligence by making context-driven, AI-native threat detection and automated response accessible to every organization — from enterprises to individual users.</p><p>We envision a future where advanced AI-powered security is not a luxury, but a fundamental capability accessible to all, regardless of budget or technical expertise.</p></div>' +
      '<div class="vm fi"><div class="ci c2" style="margin-bottom:1.5rem">' + I('flag') + '</div><h2>Our Mission</h2><p>To leverage cutting-edge artificial intelligence, real-time analytics, and OSINT intelligence fusion to create an autonomous security platform that delivers:</p><ul>' +
      '<li>' + I('check-circle') + ' Context-driven threat detection with narrative reasoning</li>' +
      '<li>' + I('check-circle') + ' 24/7 intelligent autonomous monitoring with CD/CR loop</li>' +
      '<li>' + I('check-circle') + ' OSINT-powered intelligence fusion (16+ data layers)</li>' +
      '<li>' + I('check-circle') + ' Automated SOAR incident response with HITL gates</li>' +
      '<li>' + I('check-circle') + ' Enterprise compliance (SOC 2, ISO 27001, GDPR)</li></ul></div>' +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('book-open') + ' Our Story</span><h2>The SOCIRIS Journey</h2><p class="ss">From a research project to a full-scale security intelligence platform</p></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start"><div>' +
      '<h3 style="margin-bottom:1rem">' + I('lightbulb') + ' Born from Innovation</h3><p>SOCIRIS began as a research project in 2024. The platform has since evolved through six engineering phases into a production-grade security intelligence platform with 25+ containerized microservices.</p>' +
      '<h3 style="margin:1.5rem 0 1rem">' + I('alert-triangle') + ' The Problem</h3><p>Traditional security operations face critical challenges: reactive rather than proactive detection, alert fatigue from high false-positive rates, siloed data sources, and enterprise-grade solutions that remain financially inaccessible to most organizations. 70% of organizations cannot afford enterprise security.</p>' +
      '<h3 style="margin:1.5rem 0 1rem">' + I('rocket') + ' Our Solution</h3><p>SOCIRIS addresses these with a context-driven approach: a Security Context Graph that enriches every alert with organizational memory, an ensemble AI engine for accurate detection, OSINT fusion for global intelligence, SOAR automation for rapid response, and multi-tenant enterprise architecture — all deployable SaaS, self-hosted, or air-gapped.</p>' +
      '<h3 style="margin:1.5rem 0 1rem">' + I('map-pin') + ' Built in Karachi</h3><p>SOCIRIS is proudly engineered in Karachi, Pakistan — a city rapidly emerging as a hub for cybersecurity innovation in South Asia. Our team combines deep security expertise with cutting-edge AI research to deliver a platform that competes globally.</p>' +
      '</div><div class="tl">' +
      '<div class="ti"><div class="tm">' + I('lightbulb') + '</div><div class="td">Early 2024</div><h4>Research & Inception</h4><p>Threat detection research, AI model prototyping with LSTM/SVM/Isolation Forest, and platform vision.</p></div>' +
      '<div class="ti"><div class="tm">' + I('code') + '</div><div class="td">Mid 2024</div><h4>Phase 0 — Foundation Refactor</h4><p>Modular FastAPI engine (routers + services), Next.js 16 dashboard with MapLibre + CesiumJS, Keycloak SSO, Vault secrets, event-driven plugin architecture.</p></div>' +
      '<div class="ti"><div class="tm">' + I('git-branch') + '</div><div class="td">Late 2024</div><h4>Phase 1 — Context Graph + CD/CR</h4><p>Security Context Graph (Neo4j/AGE), InvestigationEngine, AI cascade (triage → deep → HITL), DetectionCompressionEngine, ShadowModeTracker, federated queries.</p></div>' +
      '<div class="ti"><div class="tm">' + I('globe') + '</div><div class="td">Early 2025</div><h4>Phase 2 — OSINT Intelligence Fusion</h4><p>16+ geospatial layers (flights, maritime, seismic, fires, space weather, conflict zones), RECON toolkit, 8-agent AI swarm, absence-as-signal, messaging interface.</p></div>' +
      '<div class="ti"><div class="tm">' + I('building-2') + '</div><div class="td">Mid 2025</div><h4>Phase 3 — Enterprise Platform</h4><p>Multi-tenancy (schema-per-tenant, RBAC), SOC 2/ISO 27001/GDPR compliance engines, data platform, HA/DR, edge sensors, air-gapped deployment.</p></div>' +
      '<div class="ti"><div class="tm">' + I('file-text') + '</div><div class="td">Late 2025</div><h4>Phase 4 — Intelligence Products</h4><p>Investigation reports, executive dashboard, analyst upskilling engine, threat intel reports, ROI calculator.</p></div>' +
      '<div class="ti"><div class="tm">' + I('rocket') + '</div><div class="td">2026</div><h4>Phase 5 — Ecosystem + Community</h4><p>Plugin marketplace (13 integrations), GraphQL API, community hub, webhook system, Python/Go SDKs.</p></div>' +
      '</div></div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('heart') + ' Core Values</span><h2>What We Stand For</h2></div><div class="cg3">' +
      '<div class="vc fi hover-lift"><div class="ci c6" style="margin:0 auto 1.25rem">' + I('shield') + '</div><h3>Security First</h3><p>Multi-layered defense with immutable audit trails (hash-chained), SSO via Keycloak, Vault-managed secrets, and WORM archival.</p></div>' +
      '<div class="vc fi hover-lift"><div class="ci c1" style="margin:0 auto 1.25rem">' + I('zap') + '</div><h3>Innovation</h3><p>Ensemble AI cascade (triage → deep → HITL), context-driven detection, and OSINT fusion — continuously advancing the state of the art.</p></div>' +
      '<div class="vc fi hover-lift"><div class="ci c4" style="margin:0 auto 1.25rem">' + I('users') + '</div><h3>Accessibility</h3><p>From single-site to enterprise multi-tenant. SaaS, self-hosted, air-gapped, and edge sensor deployment — security for every scale.</p></div>' +
      '<div class="vc fi hover-lift"><div class="ci c2" style="margin:0 auto 1.25rem">' + I('clock') + '</div><h3>Reliability</h3><p>HA/DR with Patroni, automated backups, health monitoring, RTO &lt; 15min, RPO &lt; 5min targets.</p></div>' +
      '<div class="vc fi hover-lift"><div class="ci c3" style="margin:0 auto 1.25rem">' + I('brain') + '</div><h3>Transparency</h3><p>Narrative reasoning chains, investigation replay, reasoning explorer, and shadow mode detection validation — every AI decision explainable.</p></div>' +
      '<div class="vc fi hover-lift"><div class="ci c5" style="margin:0 auto 1.25rem">' + I('globe') + '</div><h3>Global Reach</h3><p>Air-gapped deployment for government/defense, edge sensors for remote sites, and multi-channel messaging (6 channels).</p></div>' +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('award') + ' Platform Scale</span><h2>Built for <span class="gt">Enterprise</span></h2></div>' +
      '<div class="cg4">' +
      '<div class="cd fi" style="text-align:center"><div class="number-highlight gt" data-count="25" data-suffix="+">0</div><h3>Microservices</h3><p>Containerized across 3 network tiers</p></div>' +
      '<div class="cd fi" style="text-align:center"><div class="number-highlight gt2" data-count="5" data-suffix="">0</div><h3>AI Models</h3><p>Weighted ensemble with cascade architecture</p></div>' +
      '<div class="cd fi" style="text-align:center"><div class="number-highlight gt" data-count="13" data-suffix="">0</div><h3>Integrations</h3><p>Pre-built connectors in marketplace</p></div>' +
      '<div class="cd fi" style="text-align:center"><div class="number-highlight gt2" data-count="3" data-suffix="">0</div><h3>Deployment Models</h3><p>SaaS, Self-hosted, Air-gapped</p></div>' +
      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('code') + ' Tech Stack</span><h2>Powered by <span class="gt">Modern Technology</span></h2></div>' +
      '<div class="tech-badge-grid" style="justify-content:center">' +
      ['FastAPI', 'Next.js 16', 'PostgreSQL', 'Redis', 'OpenSearch', 'Neo4j', 'Docker', 'Kubernetes', 'Kafka', 'Keycloak', 'Vault', 'Wazuh', 'MISP', 'TheHive', 'Ollama', 'TensorFlow', 'scikit-learn', 'FaceNet', 'MTCNN', 'MapLibre', 'CesiumJS', 'GraphQL', 'Prometheus', 'Grafana', 'Terraform'].map(function(t) { return '<span class="tech-badge">' + I('cpu') + ' ' + t + '</span>'; }).join('') +
      '</div></div></section>' +

      cta('Ready to Experience SOCIRIS?', 'See the platform in action — request a personalized demo.', 'Live Demo', '#/demo', 'Contact Us', '#/contact');
    },
    init: function() {
      SOCIRIS.demo.destroy();
      SOCIRIS.demo.counters();
    }
  };

  SOCIRIS.pages.mission = {
    title: 'Mission — SOCIRIS Security Intelligence',
    desc: 'Our mission: make context-driven, AI-native security intelligence accessible to every organization worldwide.',
    render: function() {
      return '<section class="mission-hero"><div class="ctn" style="position:relative;z-index:1">' +
      '<nav class="bc"><a href="#/">Home</a><span>/</span><span>Mission</span></nav>' +
      '<div class="hb">' + I('compass') + ' Our Mission</div>' +
      '<h1 style="max-width:800px">Making <span class="gt">Security Intelligence</span><br>Accessible to Every Organization</h1>' +
      '<p class="hs" style="max-width:700px">We believe that advanced, AI-powered security should not be a luxury reserved for Fortune 500 companies. SOCIRIS is building the platform that makes enterprise-grade security intelligence available to organizations of every size, in every industry, across every deployment model.</p>' +
      '</div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('target') + ' The Challenge</span><h2>The Security <span class="gt">Crisis</span></h2><p class="ss">The global cybersecurity landscape is failing organizations of every size</p></div>' +
      '<div class="impact-grid">' +
      impactCard('$10.5T', 'gt', 'Annual cost of cybercrime by 2025') +
      impactCard('70%', 'gt2', 'Organizations that cannot afford enterprise security') +
      impactCard('277', 'gt', 'Days average breach detection time') +
      impactCard('15min+', 'gt2', 'Traditional incident response time') +
      impactCard('85%', 'gt', 'Alerts that are false positives') +
      impactCard('$4.45M', 'gt2', 'Average cost of a data breach') +
      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="mission-quote"><p>Every organization deserves the same security intelligence capabilities that the largest enterprises have. The gap between what exists and what is needed is not a technology problem — it is an accessibility problem. SOCIRIS exists to close that gap.</p><cite>SOCIRIS Founding Vision, 2024</cite></div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('compass') + ' Strategic Pillars</span><h2>Six Pillars of <span class="gt">Our Mission</span></h2></div>' +
      '<div class="mission-grid">' +
      missionCard(I('brain'), 'c1', 'AI-Native Intelligence', 'Replace static rules with a reasoning engine. Every alert is investigated by an AI cascade (triage → deep analysis → HITL verification), producing narrative reasoning chains — not just numeric scores. The Security Context Graph gives the AI organizational memory that improves with every investigation.') +
      missionCard(I('globe'), 'c2', 'Universal OSINT Fusion', 'Democratize access to open-source intelligence. 16+ real-time geospatial data layers (flights, maritime, seismic, fires, space weather, conflict zones, BGP health), sanctions screening, CVE analysis, and crypto tracing — all fused by an 8-agent AI swarm and accessible via a Situation Room dashboard.') +
      missionCard(I('shield'), 'c4', 'Autonomous Response', 'Close the loop from detection to response in seconds, not minutes. Five automated SOAR playbooks with human-in-the-loop verification gates ensure that auto-response never executes without proper oversight. Shadow mode validates new detections before they go live.') +
      missionCard(I('building-2'), 'c5', 'Enterprise Architecture', 'Multi-tenant platform with schema-per-tenant isolation, RBAC, and white-label branding. Built-in compliance engines for SOC 2, ISO 27001, and GDPR with automated evidence collection and DSAR workflows. HA/DR with RTO < 15min targets.') +
      missionCard(I('lock'), 'c6', 'Deployment Freedom', 'No vendor lock-in. Deploy SOCIRIS as SaaS, self-hosted via Docker Compose or Helm chart, air-gapped for government/defense (with local LLM via Ollama), or as edge sensors for remote sites. Your data, your infrastructure, your choice.') +
      missionCard(I('users'), 'c3', 'Analyst Empowerment', 'SOCIRIS does not replace analysts — it amplifies them. Investigation replay, reasoning chain explorer, training scenarios with AI coaching, and skill gap analysis help junior analysts operate at senior levels within months.') +
      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('heart') + ' Design Principles</span><h2>Four Principles That <span class="gt">Guide Everything</span></h2></div>' +
      '<div class="principle-list">' +
      '<div class="principle-item fi"><div class="principle-num">01</div><div><h4>Accuracy</h4><p>AI verdict correctness rate targeting >95%. Every detection is validated against the Security Context Graph before action. Detection compression engine eliminates noise while preserving signal.</p></div></div>' +
      '<div class="principle-item fi"><div class="principle-num">02</div><div><h4>Consistency</h4><p>Same alert produces the same verdict regardless of which analyst or model handles it. The CD/CR loop and narrative reasoning engine ensure reproducible, auditable investigations every time.</p></div></div>' +
      '<div class="principle-item fi"><div class="principle-num">03</div><div><h4>Transparency</h4><p>Full reasoning chain attached to every action. Investigation replay, evidence chains with timestamps, MITRE ATT&CK mapping, and shadow mode detection validation — every AI decision is explainable and auditable.</p></div></div>' +
      '<div class="principle-item fi"><div class="principle-num">04</div><div><h4>Adaptability</h4><p>Self-improving via CD/CR. Detection compression engine identifies recurring patterns and auto-generates rules. Detection health monitor tracks rule decay. The platform gets sharper with every investigation.</p></div></div>' +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('target') + ' Target Impact</span><h2>What Success <span class="gt">Looks Like</span></h2></div>' +
      '<div class="impact-grid">' +
      impactCard('100%', 'gt', 'Alert coverage — every alert investigated') +
      impactCard('<30s', 'gt2', 'Mean time to containment') +
      impactCard('93%+', 'gt', 'MTTR reduction over baseline') +
      impactCard('60%', 'gt2', 'Cost reduction vs traditional solutions') +
      impactCard('85%+', 'gt', 'Market accessibility expansion') +
      impactCard('24h', 'gt2', 'Time from deploy to operational') +
      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('globe') + ' Global Reach</span><h2>Security Without <span class="gt">Borders</span></h2></div>' +
      '<div class="cg3">' +
      '<div class="cd fi"><div class="ci c1">' + I('cloud') + '</div><h3>SaaS Cloud</h3><p>Fully managed SOCIRIS Cloud with web signup, usage-based pricing, and auto-scaling. Ideal for organizations that want zero infrastructure management.</p></div>' +
      '<div class="cd fi"><div class="ci c2">' + I('server') + '</div><h3>Self-Hosted</h3><p>Docker Compose or Kubernetes/Helm chart for on-premises deployment. Full control over data, infrastructure, and configuration. Includes CasaOS one-click install.</p></div>' +
      '<div class="cd fi"><div class="ci c6">' + I('lock') + '</div><h3>Air-Gapped</h3><p>Local LLM via Ollama, offline threat intel feeds (MITRE, CVE, CISA KEV cached), and no external dependencies. Opens government and defense contracts that cloud tools cannot serve.</p></div>' +
      '<div class="cd fi"><div class="ci c3">' + I('radio') + '</div><h3>Edge Sensors</h3><p>Lightweight Go binary for remote sites. Collects Wazuh agent data, network telemetry, and face recognition. Operates autonomously if connection to central SOC is lost.</p></div>' +
      '<div class="cd fi"><div class="ci c4">' + I('building-2') + '</div><h3>MSSP Model</h3><p>One central console receiving data from distributed sensors across customer sites. White-label branding, per-tenant configuration, and data residency controls.</p></div>' +
      '<div class="cd fi"><div class="ci c5">' + I('shield') + '</div><h3>Hybrid</h3><p>Combine any deployment model. Edge sensors feeding a self-hosted central SOC, with optional cloud analytics. The architecture adapts to your requirements.</p></div>' +
      '</div></div></section>' +

      cta('Join the Mission', 'Help us make security intelligence accessible to every organization.', 'Request Demo', 'https://www.linkedin.com/company/sociris/', 'Get in Touch', '#/contact');
    },
    init: function() {
      SOCIRIS.demo.destroy();
      SOCIRIS.demo.counters();
    }
  };

  SOCIRIS.pages.demo = {
    title: 'Live Demo — SOCIRIS Security Intelligence Platform',
    desc: 'Interactive demonstration of the SOCIRIS platform: real-time threat feed, investigation engine, SOAR playbooks, and security metrics.',
    render: function() {
      return '<section class="ph" style="background:linear-gradient(135deg,var(--bg2),rgba(99,102,241,.05),var(--bg2))"><div class="ctn" style="position:relative;z-index:1">' +
      '<nav class="bc"><a href="#/">Home</a><span>/</span><span>Demo</span></nav>' +
      '<div class="hb"><span class="live-dot"></span> Interactive Demo</div>' +
      '<h1>SOCIRIS <span class="gt">Situation Room</span></h1>' +
      '<p class="hs" style="max-width:700px;margin-bottom:0">Interactive simulation of the SOCIRIS security intelligence platform with real-time threat detection, AI investigation, and SOAR automation.</p>' +
      '</div></section>' +

      '<section class="demo-sec"><div class="ctn">' +
      '<div class="dash-grid">' +
      dashCard('pri', 'Threats Detected', '847', '+12% today', 'up') +
      dashCard('sec', 'Avg Response Time', '23', '-34% this week', 'up') +
      dashCard('ok', 'Alert Coverage', '99.7', '+0.3% target', 'up') +
      dashCard('wr', 'Active Investigations', '14', '-8 vs yesterday', 'down') +
      '</div></div></section>' +

      '<section class="sec" style="padding-top:0"><div class="ctn"><div class="demo-grid">' +
      '<div class="demo-main">' +

      '<div class="demo-panel"><div class="demo-panel-header"><h4><span class="live-dot"></span> Real-Time Threat Feed</h4><span class="tag tag-critical">LIVE</span></div><div class="demo-panel-body"><div class="alert-feed" id="threat-feed"></div></div></div>' +

      '<div class="demo-panel"><div class="demo-panel-header"><h4>' + I('brain') + ' AI Investigation Engine</h4><span class="tag tag-info">AI CASCADE</span></div><div class="demo-panel-body"><div id="investigation-steps"></div></div></div>' +

      '<div class="demo-panel"><div class="demo-panel-header"><h4>' + I('map') + ' Geospatial Situation Room</h4><span class="tag tag-info">MAP VIEW</span></div><div class="demo-panel-body"><div class="world-map-container" style="min-height:280px">' +
      '<div class="map-overlay"></div>' +
      '<svg style="position:absolute;inset:0;width:100%;height:100%;opacity:.08" viewBox="0 0 1000 500"><path d="M150,120 L200,100 L250,130 L300,90 L350,120 L400,80 L450,110 L500,70 L550,100 L600,60 L650,90 L700,50 L750,80 L800,40 L850,70" stroke="var(--pri)" fill="none" stroke-width="1"/><path d="M100,200 L200,220 L300,190 L400,210 L500,180 L600,200 L700,170 L800,190 L900,160" stroke="var(--sec)" fill="none" stroke-width="1"/><path d="M120,300 L220,280 L320,310 L420,290 L520,300 L620,270 L720,290 L820,260" stroke="var(--acc)" fill="none" stroke-width="1"/></svg>' +
      tm(18, 22, 'critical') +
      tm(35, 48, 'high') +
      tm(52, 32, 'critical') +
      tm(68, 55, 'medium') +
      tm(75, 25, 'high') +
      tm(28, 68, 'low') +
      tm(82, 42, 'critical') +
      tm(45, 75, 'medium') +
      tm(15, 45, 'high') +
      tm(60, 15, 'low') +
      '<div style="position:absolute;bottom:1rem;left:1rem;display:flex;gap:.75rem;flex-wrap:wrap">' +
      '<span style="display:flex;align-items:center;gap:.375rem;font-size:.75rem;color:var(--t2)"><span style="width:8px;height:8px;border-radius:50%;background:var(--er)"></span> Critical</span>' +
      '<span style="display:flex;align-items:center;gap:.375rem;font-size:.75rem;color:var(--t2)"><span style="width:8px;height:8px;border-radius:50%;background:var(--wr)"></span> High</span>' +
      '<span style="display:flex;align-items:center;gap:.375rem;font-size:.75rem;color:var(--t2)"><span style="width:8px;height:8px;border-radius:50%;background:var(--info)"></span> Medium</span>' +
      '<span style="display:flex;align-items:center;gap:.375rem;font-size:.75rem;color:var(--t2)"><span style="width:8px;height:8px;border-radius:50%;background:var(--ok)"></span> Low</span>' +
      '</div></div></div></div>' +

      '</div><div class="demo-sidebar">' +

      '<div class="demo-panel"><div class="demo-panel-header"><h4>' + I('pie-chart') + ' Detection Accuracy</h4></div><div class="demo-panel-body" style="text-align:center">' +
      ringChart(95, 'var(--ok)', 'Accuracy') +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-top:1.25rem">' +
      '<div><div style="font-size:1.25rem;font-weight:700;color:var(--t1)">30%</div><div style="font-size:.75rem;color:var(--tm)">LSTM</div></div>' +
      '<div><div style="font-size:1.25rem;font-weight:700;color:var(--t1)">20%</div><div style="font-size:.75rem;color:var(--tm)">SVM</div></div>' +
      '<div><div style="font-size:1.25rem;font-weight:700;color:var(--t1)">20%</div><div style="font-size:.75rem;color:var(--tm)">Isolation Forest</div></div>' +
      '<div><div style="font-size:1.25rem;font-weight:700;color:var(--t1)">15%</div><div style="font-size:.75rem;color:var(--tm)">UEBA</div></div>' +
      '</div></div></div>' +

      '<div class="demo-panel"><div class="demo-panel-header"><h4>' + I('activity') + ' Alert Distribution</h4></div><div class="demo-panel-body">' +
      '<div style="margin-bottom:1rem"><div style="display:flex;justify-content:space-between;margin-bottom:.375rem"><span style="font-size:.8125rem">Critical</span><span style="font-size:.8125rem;color:var(--er)">12%</span></div><div class="metric-bar"><div class="metric-fill" data-width="12%" style="background:var(--er)"></div></div></div>' +
      '<div style="margin-bottom:1rem"><div style="display:flex;justify-content:space-between;margin-bottom:.375rem"><span style="font-size:.8125rem">High</span><span style="font-size:.8125rem;color:var(--wr)">28%</span></div><div class="metric-bar"><div class="metric-fill" data-width="28%" style="background:var(--wr)"></div></div></div>' +
      '<div style="margin-bottom:1rem"><div style="display:flex;justify-content:space-between;margin-bottom:.375rem"><span style="font-size:.8125rem">Medium</span><span style="font-size:.8125rem;color:var(--info)">45%</span></div><div class="metric-bar"><div class="metric-fill" data-width="45%" style="background:var(--info)"></div></div></div>' +
      '<div><div style="display:flex;justify-content:space-between;margin-bottom:.375rem"><span style="font-size:.8125rem">Low</span><span style="font-size:.8125rem;color:var(--ok)">15%</span></div><div class="metric-bar"><div class="metric-fill" data-width="15%" style="background:var(--ok)"></div></div></div>' +
      '</div></div>' +

      '<div class="demo-panel"><div class="demo-panel-header"><h4>' + I('workflow') + ' SOAR Playbook</h4></div><div class="demo-panel-body">' +
      '<div class="soar-playbook" id="playbook-unauth-access"><div class="sp-header"><div><h4 style="margin:0;font-size:.875rem">Unauthorized Access Response</h4><p style="margin:.25rem 0 0;font-size:.75rem;color:var(--tm)">Triggered by brute force detection</p></div><span class="tag tag-critical">ACTIVE</span></div><div class="sp-steps"><div class="sp-step"><div class="sp-step-fill"></div></div><div class="sp-step"><div class="sp-step-fill"></div></div><div class="sp-step"><div class="sp-step-fill"></div></div><div class="sp-step"><div class="sp-step-fill"></div></div><div class="sp-step"><div class="sp-step-fill"></div></div></div></div>' +
      '<button class="btn btn-success btn-sm" style="width:100%;margin-top:.75rem" onclick="SOCIRIS.demo.soarPlaybook(this,\'playbook-unauth-access\')">Execute Playbook</button>' +
      '</div></div>' +

      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('code') + ' Investigation Output</span><h2>Narrative <span class="gt">Reasoning</span></h2><p class="ss">SOCIRIS replaces numeric-only scores with structured investigation narratives</p></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:2rem">' +
      '<div class="cd fi" style="border-color:rgba(239,68,68,.2)"><h4 style="color:var(--tm);margin-bottom:.75rem">' + I('x-circle') + ' Before: Numeric Score</h4>' +
      codeBlock('json', [
        '<span class="code-comment">// Traditional SIEM output</span>',
        '{',
        '  <span class="code-key">"risk_score"</span>: <span class="code-num">85</span>,',
        '  <span class="code-key">"threat_level"</span>: <span class="code-str">"HIGH"</span>,',
        '  <span class="code-key">"source_ip"</span>: <span class="code-str">"185.234.72.x"</span>',
        '}',
        '<span class="code-comment">// No context, no reasoning, no memory</span>',
      ]) +
      '</div>' +
      '<div class="cd fi" style="border-color:rgba(16,185,129,.2)"><h4 style="color:var(--ok);margin-bottom:.75rem">' + I('check-circle') + ' After: SOCIRIS Narrative</h4>' +
      codeBlock('markdown', [
        '<span class="code-key">Investigation #1247:</span>',
        '<span class="code-key">CONTEXT:</span> <span class="code-str">prod-web-03 (crown jewel,</span>',
        '  <span class="code-str">Platform team, blast: 6 services)</span>',
        '<span class="code-key">EVIDENCE:</span> <span class="code-str">Failed SSH from 185.x.x.x</span>',
        '  <span class="code-str">+ Port 22 opened in last scan</span>',
        '  <span class="code-str">+ 3 hosts in same subnet targeted</span>',
        '<span class="code-key">SIMILAR:</span> <span class="code-str">Incident #891 (2 weeks ago)</span>',
        '<span class="code-key">VERDICT:</span> <span style="color:var(--er)">Brute force probe (95% conf)</span>',
        '<span class="code-key">RECOMMEND:</span> <span class="code-str">Block /24 + check subnet</span>',
      ]) +
      '</div></div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('git-branch') + ' CD/CR Loop</span><h2>The <span class="gt">Self-Improving</span> Pipeline</h2></div>' +
      '<div class="timeline-h">' +
      '<div class="timeline-h-step fi"><div class="th-dot">' + I('alert-circle') + '</div><div class="th-label">Detect</div><div class="th-text">Alert arrives from Wazuh, MISP, or OSINT</div></div>' +
      '<div class="timeline-h-step fi"><div class="th-dot sec">' + I('database') + '</div><div class="th-label">Context</div><div class="th-text">Context Graph lookup: asset, owner, blast radius</div></div>' +
      '<div class="timeline-h-step fi"><div class="th-dot">' + I('brain') + '</div><div class="th-label">Investigate</div><div class="th-text">AI cascade: triage → deep analysis → verdict</div></div>' +
      '<div class="timeline-h-step fi"><div class="th-dot sec">' + I('user-check') + '</div><div class="th-label">Verify</div><div class="th-text">HITL gate: auto-execute, approve, or request data</div></div>' +
      '<div class="timeline-h-step fi"><div class="th-dot ok">' + I('shield-check') + '</div><div class="th-label">Respond</div><div class="th-text">SOAR playbook executes verified response</div></div>' +
      '<div class="timeline-h-step fi"><div class="th-dot ok">' + I('repeat') + '</div><div class="th-label">Learn</div><div class="th-text">Outcome → Context Graph → Better detection</div></div>' +
      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('network') + ' Security Context Graph</span><h2>Organizational <span class="gt">Memory</span></h2></div>' +
      '<div class="graph-container" style="min-height:320px">' +
      '<svg class="graph-svg" viewBox="0 0 600 320">' +
      '<line x1="100" y1="80" x2="250" y2="60"/>' +
      '<line x1="100" y1="80" x2="200" y2="180"/>' +
      '<line x1="250" y1="60" x2="400" y2="80"/>' +
      '<line x1="250" y1="60" x2="300" y2="180"/>' +
      '<line x1="400" y1="80" x2="500" y2="160"/>' +
      '<line x1="200" y1="180" x2="300" y2="180"/>' +
      '<line x1="300" y1="180" x2="500" y2="160"/>' +
      '<line x1="200" y1="180" x2="150" y2="270"/>' +
      '<line x1="300" y1="180" x2="350" y2="270"/>' +
      '<line x1="500" y1="160" x2="480" y2="260"/>' +
      '</svg>' +
      '<div class="graph-node" style="top:50px;left:70px;width:60px;height:60px;font-size:.625rem;text-align:center;line-height:1.2;padding:4px">' + I('server') + '<br>prod-web-03</div>' +
      '<div class="graph-node" style="top:30px;left:220px;width:60px;height:60px;font-size:.625rem;text-align:center;line-height:1.2;padding:4px;border-color:var(--er)">' + I('alert-triangle') + '<br>Incident #891</div>' +
      '<div class="graph-node" style="top:50px;left:370px;width:60px;height:60px;font-size:.625rem;text-align:center;line-height:1.2;padding:4px;border-color:var(--sec)">' + I('users') + '<br>Platform Team</div>' +
      '<div class="graph-node" style="top:150px;left:170px;width:60px;height:60px;font-size:.625rem;text-align:center;line-height:1.2;padding:4px;border-color:var(--ok)">' + I('database') + '<br>DB Cluster</div>' +
      '<div class="graph-node" style="top:150px;left:270px;width:60px;height:60px;font-size:.625rem;text-align:center;line-height:1.2;padding:4px">' + I('shield') + '<br>SOP: Brute Force</div>' +
      '<div class="graph-node" style="top:130px;left:470px;width:60px;height:60px;font-size:.625rem;text-align:center;line-height:1.2;padding:4px;border-color:var(--wr)">' + I('map-pin') + '<br>185.x.x.x (RU)</div>' +
      '<div class="graph-node" style="top:245px;left:120px;width:56px;height:56px;font-size:.5625rem;text-align:center;line-height:1.2;padding:4px;border-color:var(--acc)">' + I('lock') + '<br>Firewall Rule</div>' +
      '<div class="graph-node" style="top:245px;left:320px;width:56px;height:56px;font-size:.5625rem;text-align:center;line-height:1.2;padding:4px">' + I('file-text') + '<br>Runbook #7</div>' +
      '<div class="graph-node" style="top:235px;left:450px;width:56px;height:56px;font-size:.5625rem;text-align:center;line-height:1.2;padding:4px;border-color:var(--er)">' + I('zap') + '<br>APT29 IoC</div>' +
      '</div></div></section>' +

      cta('See the Full Platform', 'Request a personalized demonstration of all SOCIRIS capabilities.', 'Request Demo', 'https://www.linkedin.com/company/sociris/', 'Contact Sales', '#/contact');
    },
    init: function() {
      SOCIRIS.demo.initDemoPage();
    }
  };

  SOCIRIS.pages.platform = {
    title: 'Platform — SOCIRIS Security Intelligence Capabilities',
    desc: 'Explore SOCIRIS platform capabilities: smart surveillance, context-driven threat detection, OSINT fusion, SOAR automation, and more.',
    render: function() {
      return ph('Platform', 'Security <span class="gt">Capabilities</span>', 'Seven Core Components for Comprehensive Security Intelligence') +
      '<section class="sec"><div class="ctn">' +
      svc('01', I('eye'), 'Smart Surveillance', 'AI-driven monitoring with intelligent video analytics',
        'FaceNet + MTCNN facial recognition with real-time video analytics, behavior analysis, and multi-camera coordination. Dynamic ingress/egress management with biometric access control. Traccar GPS integration for asset tracking.',
        ['Computer vision & face recognition (FaceNet + MTCNN)', 'Behavior analysis & crowd monitoring', 'Multi-camera coordination & tracking', 'Real-time alert generation with confidence scoring', 'Dynamic access management & biometric control', 'Traccar GPS asset tracking integration'],
        ['Perimeter security monitoring', 'Crowd management & analytics', 'License plate recognition', 'Suspicious activity detection']) +
      svc('02', I('shield-alert'), 'Threat Detection Engine', 'Ensemble AI models with cascade architecture',
        'Multi-model ensemble engine combining LSTM (30%), One-Class SVM (20%), Isolation Forest (20%), UEBA (15%), and Threat Intel (15%). AI cascade: lightweight triage model filters 70% of noise, then heavy model performs deep analysis. Detection compression engine auto-generates Wazuh rules from recurring patterns.',
        ['Ensemble AI cascade (triage → deep → HITL)', 'Real-time risk scoring (0-100) with narrative reasoning', 'Behavioral anomaly detection (UEBA)', 'Detection compression engine', 'Shadow mode detection validation', 'Detection health monitor (rule decay tracking)'],
        ['Network intrusion detection', 'Malware detection & prevention', 'Insider threat detection', 'Data exfiltration prevention']) +
      svc('03', I('radar'), 'OSINT Intelligence Fusion', '16+ geospatial data layers with AI agent swarm',
        'OpenSky flights, maritime AIS (39 ports + 10 chokepoints), USGS earthquakes, NASA FIRMS fires, NOAA space weather, 13+ conflict zones, BGP health, OFAC sanctions, CISA KEV, NVD CVE, crypto wallet tracing, absence-as-signal detection — all fused by an 8-agent AI swarm.',
        ['16+ geospatial data layers (toggleable)', '8-agent AI swarm architecture', 'RECON toolkit (port scan, DNS, SSL, JWT)', 'Crypto wallet tracing (BTC + ETH + OFAC)', 'Absence-as-signal detection', 'Attack surface discovery (26 passive sources)'],
        ['Geopolitical risk monitoring', 'Attack surface management', 'Threat actor profiling', 'Sanctions screening (OFAC SDN)']) +
      svc('04', I('workflow'), 'SOAR Automation', 'Automated incident response with human-in-the-loop',
        'Five automated response playbooks (unauthorized face, anomalous behavior, unauthorized access, malware, asset anomaly) with HITL verification gates: confidence >95% auto-execute, 70-95% one-click approval, <70% needs-data. Shuffle + TheHive + Cortex integration.',
        ['5 automated response playbooks', 'HITL verification gates (3 tiers)', 'Shadow mode detection validation', 'Shuffle + TheHive + Cortex integration', 'Context-aware response orchestration', 'Smart source fallback on failure'],
        ['Automated threat containment', 'Incident response orchestration', 'Alert triage automation', 'Evidence chain management']) +
      svc('05', I('layout-dashboard'), 'Security Context Graph', 'Organizational memory for every alert',
        'Security Context Graph (Neo4j or PostgreSQL + Apache AGE) that enriches alerts with asset topology, ownership, blast radius, SOPs, investigation history, behavioral baselines, and temporal context. Federated query layer across Wazuh, MISP, and OpenSearch.',
        ['Context Graph with CD/CR closed loop', 'Federated query layer (Wazuh + MISP + OpenSearch)', 'Investigation engine + narrative reasoning', 'AI cascade (triage → deep → HITL)', 'Content-hash cache for AI queries', 'Correlation ID propagation across services'],
        ['Alert enrichment & correlation', 'Cross-source data fusion', 'Investigation workflow automation', 'Threat hunting & forensics']) +
      svc('06', I('search'), 'Investigation & Forensics', 'Advanced investigation with evidence chains',
        'Investigation reports with evidence chains, MITRE ATT&CK mapping (20+ categories), similar incident detection from Context Graph, response actions, and lessons learned. Markdown + HTML export. Analyst upskilling engine with investigation replay and AI coaching.',
        ['Evidence chain management with timestamps', 'MITRE ATT&CK technique mapping', 'Investigation replay & reasoning explorer', 'Training scenarios with AI coaching', 'Skill gap analysis per analyst', 'Markdown + HTML + PDF export'],
        ['Security breach investigation', 'Insider threat analysis', 'Compliance reporting', 'Incident post-mortems']) +
      svc('07', I('bar-chart-3'), 'Executive Intelligence', 'Dashboards and reports for security leadership',
        'Executive dashboard with MTTR trend, TTA p95, alert coverage, detection compression rate, proactive/reactive ratio, risk posture by business unit, and ROI calculator. Weekly threat landscape reports. SOC 2/ISO 27001/GDPR compliance posture.',
        ['Executive dashboard & KPIs', 'MTTR/TTA trend analysis (p95 < 5s)', 'ROI calculator for management', 'Weekly threat landscape reports', 'Compliance posture reporting', 'Board-level security briefings'],
        ['Executive security briefings', 'Board-level reporting', 'ROI analysis & justification', 'Compliance dashboard']) +
      '</div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('git-branch') + ' Data Flow</span><h2>End-to-End <span class="gt">Pipeline</span></h2></div>' +
      '<div style="display:flex;flex-direction:column;gap:1.5rem;max-width:900px;margin:0 auto">' +
      '<div>' + archFlow([{ icon: 'radio', label: 'Wazuh Agent' }, { icon: 'wifi', label: 'Network Tap' }, { icon: 'camera', label: 'CCTV Feed' }, { icon: 'globe', label: 'OSINT Source' }]) + '</div>' +
      '<div style="text-align:center;color:var(--tm)">' + I('arrow-down') + '</div>' +
      '<div>' + archFlow([{ icon: 'database', label: 'Kafka Event Bus' }]) + '</div>' +
      '<div style="text-align:center;color:var(--tm)">' + I('arrow-down') + '</div>' +
      '<div>' + archFlow([{ icon: 'brain', label: 'AI Cascade' }, { icon: 'git-branch', label: 'Context Graph' }, { icon: 'shield', label: 'HITL Gate' }]) + '</div>' +
      '<div style="text-align:center;color:var(--tm)">' + I('arrow-down') + '</div>' +
      '<div>' + archFlow([{ icon: 'zap', label: 'SOAR Playbook' }, { icon: 'file-text', label: 'Investigation Report' }, { icon: 'bar-chart-3', label: 'Executive Dashboard', cls: 'success' }]) + '</div>' +
      '</div></div></section>' +

      cta('Ready to Enhance Your Security?', 'Discover how SOCIRIS can protect your organization.', 'Live Demo', '#/demo', 'Contact Sales', '#/contact');
    }
  };

  SOCIRIS.pages.solutions = {
    title: 'Solutions — SOCIRIS Security for Every Industry',
    desc: 'Discover how SOCIRIS addresses security challenges across government, education, business, healthcare, and more.',
    render: function() {
      return ph('Solutions', 'Security <span class="gt">Solutions</span>', 'Comprehensive Protection Across Every Sector') +
      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('target') + ' The Challenge</span><h2>From Security Gaps to <span class="gt">Complete Protection</span></h2><p class="ss">SOCIRIS transforms vulnerabilities into opportunities for AI-powered protection</p></div>' +
      '<div class="cpg"><div class="cps"><div class="spH"><div class="ib ibd">' + I('alert-circle') + '</div><h3>Current Problems</h3></div>' +
      cpI(I('alert-triangle'), 'c6', 'Outdated Infrastructure', 'Legacy systems with no AI capabilities lead to reactive security.', '70% of surveillance is passive', 'sbd') +
      cpI(I('dollar-sign'), 'c5', 'Economic Impact', 'Security incidents cost businesses $10.5 trillion annually in losses and recovery.', '$10.5T annual cybercrime cost', 'sbd') +
      cpI(I('clock'), 'c5', 'Reactive Response', 'Traditional systems only alert after incidents, with 277-day average detection time.', '277 days avg detection time', 'sbd') +
      cpI(I('x-circle'), 'c6', 'Accessibility Barriers', 'Enterprise-grade security remains financially inaccessible for 70% of organizations.', '70% cannot afford enterprise security', 'sbd') +
      '</div><div class="cps"><div class="spH"><div class="ib ibs">' + I('check-circle') + '</div><h3>SOCIRIS Solutions</h3></div>' +
      cpI(I('brain'), 'c1', 'Context-Driven Intelligence', 'Ensemble AI with Security Context Graph for accurate, enriched threat detection with narrative reasoning.', '95%+ threat detection accuracy', 'sbs') +
      cpI(I('shield-check'), 'c4', 'Cost-Effective Protection', 'Cloud-native architecture delivers enterprise security at 60% lower cost than traditional solutions.', '60% cost reduction', 'sbs') +
      cpI(I('zap'), 'c1', 'Proactive Prevention', 'Real-time monitoring with automated SOAR response reduces containment time from days to seconds.', '<30 sec response time', 'sbs') +
      cpI(I('users'), 'c4', 'Universal Accessibility', 'Multi-tenant platform from single-site to enterprise with flexible pricing and 4 deployment models.', '4 deployment models', 'sbs') +
      '</div></div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('briefcase') + ' Industry Solutions</span><h2>Protecting What Matters <span class="gt">Across Every Sector</span></h2></div><div class="cg3">' +
      uc(I('landmark'), 'Government & Public Sector', 'Comprehensive security for critical infrastructure, ministries, and public facilities with air-gapped deployment.', ['Ministry building perimeter security', 'Government office monitoring & access control', 'Court house biometric access management', 'Police station surveillance & evidence chain'], ['Air-gapped deployment', 'SOC 2 compliance']) +
      uc(I('graduation-cap'), 'Educational Institutions', 'Student safety, campus security, and access management for schools and universities.', ['Campus perimeter monitoring', 'Student attendance tracking (face recognition)', 'Dormitory access control', 'Exam hall surveillance & integrity'], ['Student safety first', 'Automated attendance']) +
      uc(I('building-2'), 'Business & Corporate', 'Enterprise security for offices, commercial buildings, and operations with multi-tenant architecture.', ['Office building access control', 'Visitor management systems', 'Employee attendance tracking', 'Parking lot surveillance & analytics'], ['Multi-tenant RBAC', 'Productivity insights']) +
      uc(I('home'), 'Residential & Housing', 'Smart home security for families, housing societies, and gated communities.', ['Home perimeter monitoring', 'Smart doorbell cameras', 'Intruder detection alerts', 'Remote monitoring via mobile app'], ['Family protection', 'Mobile alerts']) +
      uc(I('factory'), 'Industrial & Manufacturing', 'Heavy-duty security for factories, warehouses, and production facilities with IoT integration.', ['Plant perimeter security', 'Inventory theft prevention', 'Worker safety monitoring', 'Equipment tracking (GPS + BLE)'], ['Asset tracking', 'Safety compliance']) +
      uc(I('heart-pulse'), 'Healthcare Facilities', 'Medical facility security for hospitals, clinics, and healthcare centers with HIPAA-aware workflows.', ['Hospital ward monitoring', 'Pharmacy access control', 'Patient area surveillance', 'Emergency room security'], ['Patient safety', 'Drug security']) +
      uc(I('shopping-bag'), 'Retail & Shopping', 'Comprehensive security for malls, stores, and retail establishments with behavior analytics.', ['Shoplifting prevention (AI-powered)', 'Customer behavior analytics', 'Point-of-sale monitoring', 'Parking security & vehicle tracking'], ['Theft reduction', 'Customer insights']) +
      uc(I('truck'), 'Logistics & Transportation', 'Fleet tracking and cargo security for distribution centers with GPS integration.', ['Warehouse surveillance', 'Vehicle fleet tracking (Traccar)', 'Loading dock monitoring', 'Cargo theft prevention'], ['Real-time tracking', 'Cargo security']) +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('award') + ' Key Benefits</span><h2>Why Organizations Choose <span class="gt">SOCIRIS</span></h2></div><div class="cg3">' +
      '<div class="cd fi"><div class="ci c4">' + I('trending-down') + '</div><h3>60% Cost Reduction</h3><p>Cloud-native architecture and open-source components deliver enterprise security at a fraction of traditional costs. Open-source core keeps vendor lock-in at zero.</p></div>' +
      '<div class="cd fi"><div class="ci c2">' + I('clock') + '</div><h3>24/7 Autonomous Monitoring</h3><p>AI cascade with CD/CR loop provides continuous surveillance. Autonomous operation with HITL gates for verified response — no analyst required at 3 AM.</p></div>' +
      '<div class="cd fi"><div class="ci c4">' + I('shield-check') + '</div><h3>Enterprise Compliance</h3><p>SOC 2 (14 controls), ISO 27001 (14 controls), and GDPR compliance built-in with automated DSAR workflows, right-to-erasure, and evidence collection.</p></div>' +
      '<div class="cd fi"><div class="ci c1">' + I('zap') + '</div><h3>Sub-30s Response</h3><p>Automated SOAR playbooks with HITL gates for rapid, verified threat containment. AI cascade triages 70% of noise in <100ms.</p></div>' +
      '<div class="cd fi"><div class="ci c3">' + I('bar-chart-3') + '</div><h3>Scalable Multi-Tenant</h3><p>Schema-per-tenant isolation with 5-role RBAC. White-label branding for MSSPs. Single-site to nationwide deployment with data residency controls.</p></div>' +
      '<div class="cd fi"><div class="ci c5">' + I('puzzle') + '</div><h3>Plugin Ecosystem</h3><p>13 pre-built integrations (Splunk, CrowdStrike, Palo Alto, Azure Sentinel) plus community detection rules, webhook marketplace, and GraphQL API.</p></div>' +
      '</div></div></section>' +

      cta('Ready to Transform Your Security?', 'Join organizations across every sector in securing operations with SOCIRIS.', 'Live Demo', '#/demo', 'Contact Sales', '#/contact');
    }
  };

  SOCIRIS.pages.technology = {
    title: 'Technology — SOCIRIS Architecture & AI Engine',
    desc: 'Explore SOCIRIS technology: modular AI engine, event-driven plugin architecture, OSINT fusion pipeline, and multi-tenant enterprise platform.',
    render: function() {
      return ph('Technology', 'Technology <span class="gt">Architecture</span>', 'The Engine Behind Intelligent Security') +
      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('server') + ' Architecture</span><h2>Platform <span class="gt">Overview</span></h2><p class="ss">25+ containerized microservices across three network tiers</p></div><div class="cg4">' +
      '<div class="cd fi" style="text-align:center"><div class="gt" style="font-size:2.5rem;font-weight:800;display:block" data-count="6" data-suffix="">0</div><h3>Evolutionary Phases</h3><p>Foundation to ecosystem — each phase builds on the last</p></div>' +
      '<div class="cd fi" style="text-align:center"><div class="gt2" style="font-size:2.5rem;font-weight:800;display:block" data-count="25" data-suffix="+">0</div><h3>Microservices</h3><p>Containerized services across frontend, backend, and monitoring tiers</p></div>' +
      '<div class="cd fi" style="text-align:center"><div class="gt" style="font-size:2.5rem;font-weight:800;display:block" data-count="5" data-suffix="">0</div><h3>AI Models</h3><p>Weighted ensemble: LSTM, SVM, Isolation Forest, UEBA, Threat Intel</p></div>' +
      '<div class="cd fi" style="text-align:center"><div class="gt2" style="font-size:2.5rem;font-weight:800;display:block" data-count="14" data-suffix="">0</div><h3>Prometheus Metrics</h3><p>Real-time monitoring of detection, investigation, and response</p></div>' +
      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('git-branch') + ' Evolution</span><h2>Six Phases of <span class="gt">Evolution</span></h2><p class="ss">From foundation to ecosystem — a complete security intelligence platform</p></div><div style="display:grid;gap:1.5rem">' +
      pc('p0', 'Phase 0 — Foundation', 'Modular AI engine (core/routers, models, schemas), Next.js 16 dashboard with MapLibre + CesiumJS, Keycloak SSO, Vault secrets management, event-driven plugin architecture (EventBus + 4 plugins), Alembic migrations, WebSocket bridge, resource ID scheme.', 'ai-engine', 'FastAPI', 'SQLAlchemy', 'Alembic', 'EventBus', 'Next.js', 'Keycloak', 'Vault') +
      pc('p1', 'Phase 1 — Context Graph + CD/CR', 'InvestigationEngine with TriageModel + DeepAnalysisModel (Ollama + heuristic fallback), Security Context Graph, ContextLookupService, DetectionCompressionEngine, ShadowModeTracker, HITL Verification Gate, Federated Query Layer (Wazuh + MISP + OpenSearch).', 'context-graph', 'CD/CR', 'HITL Gate', 'shadow-mode', 'federated-query', 'MITRE ATT&CK', 'Prometheus') +
      pc('p2', 'Phase 2 — OSINT Intelligence Fusion', 'OSINT Collection Pipeline (priority sources, caching, fallback), 16+ geospatial layers (flights, maritime, seismic, fires, space weather, conflict zones, BGP), RECON Toolkit (port scan, DNS, SSL, JWT, GraphQL), 8-agent AI swarm, absence-as-signal detector, messaging-to-agent interface (6 channels).', 'OSINT', 'geospatial', 'RECON', 'AI swarm', 'absence-detect', 'messaging', 'Telegram', 'Slack') +
      pc('p3', 'Phase 3 — Enterprise Platform', 'Multi-tenancy (schema-per-tenant, 5 RBAC roles, 3 plans), Compliance (SOC 2, ISO 27001, GDPR with DSAR), Data Platform (SchemaRegistry, DataCatalog, DataLineageTracker), HA/DR (BackupService, HealthMonitor), Edge Sensors + AutoScaler, Air-Gapped deployment config.', 'multi-tenant', 'RBAC', 'SOC 2', 'ISO 27001', 'GDPR', 'auto-scaler', 'air-gapped') +
      pc('p4', 'Phase 4 — Intelligence Products', 'Investigation reports (evidence chains, MITRE mapping, similar incidents, Markdown + HTML export), Executive Dashboard (MTTR trend, TTA p95, alert coverage, ROI calculator), Analyst Upskilling Engine (investigation replay, 5 training scenarios, skill gap analysis), Threat Intel Reports (weekly, CVE, geopolitical).', 'reports', 'MITRE', 'executive', 'upskilling', 'threat-actor', 'geopolitical', 'ROI') +
      pc('p5', 'Phase 5 — Ecosystem + Community', 'Plugin Marketplace (13 integrations: Splunk, CrowdStrike, Palo Alto, etc.), Webhook system (HMAC-SHA256 signed), GraphQL API (11 types, 13 queries, 6 mutations, 3 subscriptions), Community Hub (5 default detection rules with voting, OSINT feed registry).', 'marketplace', 'webhooks', 'GraphQL', 'community', '13-plugins', 'detection-rules') +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('database') + ' Tech Stack</span><h2>Core <span class="gt">Technologies</span></h2></div><div class="cg4">' +
      '<div class="cd fi"><div class="ci c1">' + I('cpu') + '</div><h3>AI/ML</h3><p>FastAPI, TensorFlow, scikit-learn, Ollama (Qwen3 1.7b + 30b MoE), FaceNet, MTCNN, ensemble cascade architecture</p></div>' +
      '<div class="cd fi"><div class="ci c2">' + I('database') + '</div><h3>Data</h3><p>PostgreSQL 15 + Apache AGE, Redis 7, OpenSearch 2.11, Neo4j, SQLAlchemy, Alembic, PostGIS, Patroni HA</p></div>' +
      '<div class="cd fi"><div class="ci c3">' + I('container') + '</div><h3>Infrastructure</h3><p>Docker Compose, 3 network tiers, Prometheus, Grafana, Loki, Kafka/NATS, K8s/Helm, KEDA autoscaling</p></div>' +
      '<div class="cd fi"><div class="ci c4">' + I('shield') + '</div><h3>Security</h3><p>Keycloak SSO/SAML/OIDC, HashiCorp Vault, Wazuh HIDS, MISP threat intel, TheHive + Cortex SOAR</p></div>' +
      '<div class="cd fi"><div class="ci c5">' + I('code') + '</div><h3>Frontend</h3><p>Next.js 16, Turbopack, Ant Design/MUI, ECharts, MapLibre GL, CesiumJS 3D globe, React TypeScript</p></div>' +
      '<div class="cd fi"><div class="ci c6">' + I('radio') + '</div><h3>Communication</h3><p>Kafka event streaming, WebSocket bridge, 6-channel messaging (Web, Slack, Telegram, Email, WhatsApp, SMS)</p></div>' +
      '<div class="cd fi"><div class="ci c7">' + I('scan') + '</div><h3>OSINT</h3><p>OpenSky ADS-B, AIS maritime, USGS seismic, NASA FIRMS, NOAA SWPC, N2YO satellite, BGP monitoring</p></div>' +
      '<div class="cd fi"><div class="ci c8">' + I('test-tubes') + '</div><h3>Quality</h3><p>GitHub Actions CI/CD, ruff + mypy + eslint, testcontainers-python, Trivy + Bandit security scans, pre-commit hooks</p></div>' +
      '</div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('network') + ' Integration Map</span><h2>13 Pre-Built <span class="gt">Integrations</span></h2></div>' +
      '<div class="cg4">' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">Splunk</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">SIEM Forwarding</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">CrowdStrike</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">EDR Integration</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">Palo Alto</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Firewall Automation</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">Azure Sentinel</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Cloud SIEM</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">Fortinet</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Network Security</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">Slack</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Alert Notifications</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">PagerDuty</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Incident Escalation</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">Jira</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Ticket Management</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">VirusTotal</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Malware Analysis</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">Telegram</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Agent Interface</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">WhatsApp</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Agent Interface</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">Nuclei</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">Vuln Scanning</p></div>' +
      '<div class="cd fi" style="text-align:center;padding:1.25rem"><h4 style="margin-bottom:.25rem">OpenSanctions</h4><p style="margin:0;font-size:.75rem;color:var(--tm)">OFAC SDN Screening</p></div>' +
      '</div></div></section>' +

      cta('See the Technology in Action', 'Request a live demo of the SOCIRIS platform.', 'Live Demo', '#/demo', 'Contact Us', '#/contact');
    },
    init: function() {
      SOCIRIS.demo.destroy();
      SOCIRIS.demo.counters();
    }
  };

  SOCIRIS.pages.contact = {
    title: 'Contact SOCIRIS — Get in Touch',
    desc: 'Contact the SOCIRIS team for demos, partnerships, or security consulting inquiries.',
    render: function() {
      return ph('Contact', 'Get in <span class="gt">Touch</span>', 'We\'d love to hear from you') +
      '<section class="sec"><div class="ctn"><div class="ctg"><div class="cim">' +
      '<div class="cmt"><div class="ci c1" style="min-width:40px;width:40px;height:40px;margin:0;border-radius:.75rem">' + I('mail') + '</div><div><h4 style="margin-bottom:.25rem">Email</h4><p style="margin:0;font-size:.9375rem"><a href="mailto:info@sociris.com" style="color:var(--pri-l)">info@sociris.com</a></p></div></div>' +
      '<div class="cmt"><div class="ci c2" style="min-width:40px;width:40px;height:40px;margin:0;border-radius:.75rem">' + I('map-pin') + '</div><div><h4 style="margin-bottom:.25rem">Location</h4><p style="margin:0;font-size:.9375rem">Karachi, Pakistan</p></div></div>' +
      '<div class="cmt"><div class="ci c3" style="min-width:40px;width:40px;height:40px;margin:0;border-radius:.75rem">' + I('linkedin') + '</div><div><h4 style="margin-bottom:.25rem">LinkedIn</h4><p style="margin:0;font-size:.9375rem"><a href="https://www.linkedin.com/company/sociris/" target="_blank" style="color:var(--pri-l)">/company/sociris</a></p></div></div>' +
      '<div class="cmt"><div class="ci c4" style="min-width:40px;width:40px;height:40px;margin:0;border-radius:.75rem">' + I('github') + '</div><div><h4 style="margin-bottom:.25rem">GitHub</h4><p style="margin:0;font-size:.9375rem"><a href="https://github.com/SOCIRIS" target="_blank" style="color:var(--pri-l)">github.com/SOCIRIS</a></p></div></div>' +
      '</div><div class="cfm"><h3 style="margin-bottom:1.5rem">Send a Message</h3>' +
      '<div class="fr"><div class="fg"><label>First Name</label><input type="text" placeholder="John"></div><div class="fg"><label>Last Name</label><input type="text" placeholder="Doe"></div></div>' +
      '<div class="fr"><div class="fg"><label>Email</label><input type="email" placeholder="john@example.com"></div><div class="fg"><label>Organization</label><input type="text" placeholder="Acme Corp"></div></div>' +
      '<div class="fg"><label>Subject</label><select><option>Request a Demo</option><option>Partnership Inquiry</option><option>Security Consulting</option><option>General Inquiry</option></select></div>' +
      '<div class="fg"><label>Message</label><textarea placeholder="Tell us about your security needs..."></textarea></div>' +
      '<button class="btn bp" style="width:100%" onclick="this.textContent=\'Message Sent!\';this.style.background=\'#10b981\';setTimeout(function(){this.textContent=\'Send Message\';this.style.background=\'\'}.bind(this),2500)">Send Message</button>' +
      '</div></div></div></section>' +

      '<section class="sec sec-alt"><div class="ctn"><div class="sh"><span class="slb">' + I('help-circle') + ' FAQ</span><h2>Frequently Asked <span class="gt">Questions</span></h2></div><div style="max-width:720px;margin:0 auto">' +
      faq('What is SOCIRIS?', 'SOCIRIS is an AI-powered autonomous security intelligence platform that combines context-driven threat detection, OSINT intelligence fusion, and automated incident response in a multi-tenant enterprise platform deployable as SaaS, self-hosted, or air-gapped.') +
      faq('How does the AI detection engine work?', 'SOCIRIS uses an AI cascade: a lightweight triage model filters ~70% of noise in <100ms, then a heavy analysis model (Ollama Qwen3) performs deep investigation. The ensemble combines LSTM (30%), One-Class SVM (20%), Isolation Forest (20%), UEBA (15%), and Threat Intel (15%).') +
      faq('What is the Security Context Graph?', 'The Context Graph is a persistent knowledge graph (Neo4j or PostgreSQL + Apache AGE) that enriches every alert with asset topology, ownership, blast radius, SOPs, investigation history, behavioral baselines, and temporal context. It uses a CD/CR closed loop to continuously improve detection quality.') +
      faq('Can SOCIRIS integrate with existing security tools?', 'Yes. SOCIRIS has 13 pre-built integrations including Splunk, CrowdStrike, Palo Alto, Azure Sentinel, Fortinet, Slack, PagerDuty, Jira, VirusTotal, and more. The event-driven plugin architecture makes new integrations ~60 lines of code. GraphQL API and webhooks available.') +
      faq('Is SOCIRIS suitable for small organizations?', 'Absolutely. SOCIRIS supports multi-tenant deployment with flexible pricing, making enterprise-grade security intelligence accessible to organizations of any size. Deploy as SaaS (zero infrastructure), self-hosted (Docker Compose), or air-gapped.') +
      faq('What compliance standards does SOCIRIS support?', 'SOCIRIS includes built-in compliance engines for SOC 2 (14 controls with automated evidence collection), ISO 27001 (14 controls with risk assessment), and GDPR (automated DSAR workflows, right-to-erasure, data classification, retention policies).') +
      faq('How does the HITL verification gate work?', 'The Human-in-the-Loop gate ensures no auto-response executes without proper oversight: confidence >95% auto-executes (configurable per playbook), 70-95% requires one-click analyst approval, <70% presents as "need more data" with specific questions. This is critical for commercial trust.') +
      faq('What is the CD/CR closed loop?', 'Continuous Detection/Continuous Response transforms the linear pipeline into a self-improving loop: alert → context lookup → AI investigation → HITL verification → response execution → outcome recorded → pattern detection → new rule auto-generated → shadow mode validation → promoted to active detection. The platform gets sharper with every investigation.') +
      '</div></div></section>' +
      cta('Ready to Get Started?', 'Request a personalized demo of the SOCIRIS platform.', 'Request Demo', 'https://www.linkedin.com/company/sociris/', 'Send Email', 'mailto:info@sociris.com');
    }
  };
})();
