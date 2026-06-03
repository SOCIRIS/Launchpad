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

  SOCIRIS.pages = {};

  SOCIRIS.pages.home = {
    title: 'SOCIRIS — AI-Powered Security Intelligence Platform',
    desc: 'SOCIRIS — AI-powered autonomous security intelligence platform with context-driven threat detection, OSINT fusion, and SOAR automation.',
    render: function() {
      return '<section class="hero"><div class="hbg"></div><div class="ctn">' +
      '<div class="hb">' + I('zap') + ' AI-Native Security Intelligence Platform</div>' +
      '<h1 class="ht">Intelligent <span class="gt">Security</span><br>For a Safer Tomorrow</h1>' +
      '<p class="hs">SOCIRIS delivers context-driven threat detection, OSINT intelligence fusion, automated incident response, and enterprise-grade security operations — all powered by an AI ensemble engine.</p>' +
      '<div class="hcta"><a href="#/about" class="btn bp bl"><span>Discover SOCIRIS</span>' + I('arrow-right') + '</a><a href="#/contact" class="btn bs bl"><span>Get in Touch</span>' + I('message-circle') + '</a></div>' +
      '<div class="hstats">' +
      '<div class="sc fi"><div class="si">' + I('shield-check') + '</div><div><span class="sn">24/7</span><span class="sl">Autonomous Monitoring</span></div></div>' +
      '<div class="sc fi"><div class="si">' + I('brain') + '</div><div><span class="sn">AI-Driven</span><span class="sl">Ensemble Detection Engine</span></div></div>' +
      '<div class="sc fi"><div class="si">' + I('layers') + '</div><div><span class="sn">6 Phases</span><span class="sl">Evolutionary Architecture</span></div></div>' +
      '<div class="sc fi"><div class="si">' + I('globe') + '</div><div><span class="sn">Multi-Tenant</span><span class="sl">Enterprise Platform</span></div></div>' +
      '</div></div><div class="scr">' + I('chevron-down') + '</div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('sparkles') + ' Platform Capabilities</span><h2>Security Reimagined with <span class="gt">Artificial Intelligence</span></h2><p class="ss">Context-driven detection, OSINT fusion, and automated response — a complete security intelligence platform</p></div>' +
      '<div class="cg4">' +
      '<div class="cd fi"><div class="ci c1">' + I('eye') + '</div><h3>Smart Surveillance</h3><p>FaceNet + MTCNN facial recognition with real-time video analytics and behavior analysis</p><a href="#/platform" class="cl">Learn more ' + I('arrow-right') + '</a></div>' +
      '<div class="cd fi"><div class="ci c6">' + I('shield-alert') + '</div><h3>Threat Detection</h3><p>Ensemble AI models — LSTM (30%), SVM (20%), Isolation Forest (20%), UEBA (15%), Threat Intel (15%)</p><a href="#/technology" class="cl">Learn more ' + I('arrow-right') + '</a></div>' +
      '<div class="cd fi"><div class="ci c3">' + I('radar') + '</div><h3>OSINT Fusion</h3><p>16+ geospatial data layers, RECON toolkit, 8-agent AI swarm, and absence-as-signal detection</p><a href="#/technology" class="cl">Learn more ' + I('arrow-right') + '</a></div>' +
      '<div class="cd fi"><div class="ci c4">' + I('workflow') + '</div><h3>SOAR Automation</h3><p>5 automated response playbooks with human-in-the-loop verification gates</p><a href="#/platform" class="cl">Learn more ' + I('arrow-right') + '</a></div>' +
      '</div></div></section>' +

      '<section class="sec" style="padding-top:0"><div class="ctn"><div class="sh"><span class="slb">' + I('zap') + ' Built Different</span><h2>Why <span class="gt">SOCIRIS</span></h2></div><div class="cg2">' +
      '<div class="qc fi" onclick="location.hash=\'#/platform\'"><div class="qci c1">' + I('brain') + '</div><h3>Context-Driven Detection</h3><p>Security Context Graph with CD/CR closed loop — every alert enriched with asset, identity, and threat intel context</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '<div class="qc fi" onclick="location.hash=\'#/technology\'"><div class="qci c2">' + I('map') + '</div><h3>OSINT Intelligence Fusion</h3><p>16+ real-time geospatial layers, sanctions screening, CVE analysis, and crypto wallet tracing</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '<div class="qc fi" onclick="location.hash=\'#/solutions\'"><div class="qci c4">' + I('building-2') + '</div><h3>Enterprise Multi-Tenancy</h3><p>SOC 2, ISO 27001, GDPR compliance with schema-per-tenant isolation and RBAC</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '<div class="qc fi" onclick="location.hash=\'#/solutions\'"><div class="qci c5">' + I('puzzle') + '</div><h3>Plugin Ecosystem</h3><p>13 pre-built integrations (Splunk, CrowdStrike, Palo Alto), community detection rules, and webhook marketplace</p><span class="la">' + I('arrow-right') + '</span></div>' +
      '</div></div></section>' +

      cta('Ready to Secure Your Future?', 'Join the security intelligence revolution with SOCIRIS.', 'Discover SOCIRIS', '#/about', 'Request Demo', 'https://www.linkedin.com/company/sociris/');
    }
  };

  SOCIRIS.pages.about = {
    title: 'About SOCIRIS — AI-Powered Security Intelligence Platform',
    desc: 'Learn about SOCIRIS — the context-driven, AI-native security intelligence platform built to transform security operations.',
    render: function() {
      return ph('About', 'About <span class="gt">SOCIRIS</span>', 'Transforming Security Through Artificial Intelligence') +
      '<section class="sec"><div class="ctn"><div class="vmg">' +
      '<div class="vm"><div class="ci c1" style="margin-bottom:1.5rem">' + I('target') + '</div><h2>Our Vision</h2><p>To redefine security intelligence by making context-driven, AI-native threat detection and automated response accessible to every organization — from enterprises to individual users.</p><p>We envision a future where advanced AI-powered security is not a luxury, but a fundamental capability accessible to all.</p></div>' +
      '<div class="vm"><div class="ci c2" style="margin-bottom:1.5rem">' + I('flag') + '</div><h2>Our Mission</h2><p>To leverage cutting-edge artificial intelligence, real-time analytics, and OSINT intelligence fusion to create an autonomous security platform that delivers:</p><ul>' +
      '<li>' + I('check-circle') + ' Context-driven threat detection and prevention</li>' +
      '<li>' + I('check-circle') + ' 24/7 intelligent autonomous monitoring</li>' +
      '<li>' + I('check-circle') + ' OSINT-powered intelligence fusion</li>' +
      '<li>' + I('check-circle') + ' Automated SOAR incident response</li></ul></div>' +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('book-open') + ' Our Story</span><h2>The SOCIRIS Journey</h2><p class="ss">From concept to a full-scale security intelligence platform</p></div>' +
      '<div style="display:grid;grid-template-columns:1fr 1fr;gap:3rem;align-items:start"><div>' +
      '<h3 style="margin-bottom:1rem">Born from Innovation</h3><p>SOCIRIS (Security Operations Center Intelligent Response & Intrusion Surveillance) began as a research project in 2024. The platform has since evolved through six engineering phases into a production-grade security intelligence platform.</p>' +
      '<h3 style="margin:1.5rem 0 1rem">The Problem</h3><p>Traditional security operations face critical challenges: reactive rather than proactive detection, alert fatigue from high false-positive rates, siloed data sources, and enterprise-grade solutions that remain financially inaccessible to most organizations.</p>' +
      '<h3 style="margin:1.5rem 0 1rem">Our Solution</h3><p>SOCIRIS addresses these challenges with a context-driven approach: a Security Context Graph that enriches every alert, an ensemble AI engine for accurate detection, OSINT fusion for global intelligence, and SOAR automation for rapid response — all in a multi-tenant, enterprise-grade platform.</p>' +
      '</div><div class="tl">' +
      '<div class="ti"><div class="tm">' + I('lightbulb') + '</div><div class="td">Early 2024</div><h4>Research & Inception</h4><p>Threat detection research, AI model prototyping, and platform vision.</p></div>' +
      '<div class="ti"><div class="tm">' + I('code') + '</div><div class="td">Mid 2024</div><h4>Phase 0 — Foundation</h4><p>Modular AI engine, Next.js dashboard, Keycloak SSO, Vault secrets, event-driven plugin architecture.</p></div>' +
      '<div class="ti"><div class="tm">' + I('git-branch') + '</div><div class="td">Late 2024</div><h4>Phase 1 — Context Graph</h4><p>Security Context Graph, investigation engine, deep analysis with Ollama LLM, HITL verification gates.</p></div>' +
      '<div class="ti"><div class="tm">' + I('globe') + '</div><div class="td">Early 2025</div><h4>Phase 2 — OSINT Fusion</h4><p>16+ geospatial layers, RECON toolkit, 8-agent AI swarm, messaging-to-agent interface.</p></div>' +
      '<div class="ti"><div class="tm">' + I('building-2') + '</div><div class="td">Mid 2025</div><h4>Phase 3 — Enterprise</h4><p>Multi-tenancy, SOC 2/ISO 27001/GDPR compliance, data platform, HA/DR.</p></div>' +
      '<div class="ti"><div class="tm">' + I('file-text') + '</div><div class="td">Late 2025</div><h4>Phase 4 — Intelligence Products</h4><p>Investigation reports, executive dashboard, analyst upskilling engine, threat intel reports.</p></div>' +
      '<div class="ti"><div class="tm">' + I('rocket') + '</div><div class="td">2026</div><h4>Phase 5 — Ecosystem</h4><p>Plugin marketplace (13 integrations), GraphQL API, community hub, webhook system.</p></div>' +
      '</div></div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('heart') + ' Core Values</span><h2>What We Stand For</h2></div><div class="cg3">' +
      '<div class="vc fi"><div class="ci c6" style="margin:0 auto 1.25rem">' + I('shield') + '</div><h3>Security First</h3><p>Multi-layered defense with immutable audit trails, SSO, and Vault-managed secrets.</p></div>' +
      '<div class="vc fi"><div class="ci c1" style="margin:0 auto 1.25rem">' + I('zap') + '</div><h3>Innovation</h3><p>Ensemble AI models, context-driven detection, and OSINT fusion — continuously advancing.</p></div>' +
      '<div class="vc fi"><div class="ci c4" style="margin:0 auto 1.25rem">' + I('users') + '</div><h3>Accessibility</h3><p>From single-site to enterprise multi-tenant — security intelligence for every scale.</p></div>' +
      '<div class="vc fi"><div class="ci c2" style="margin:0 auto 1.25rem">' + I('clock') + '</div><h3>Reliability</h3><p>HA/DR architecture with automated backups and health monitoring.</p></div>' +
      '<div class="vc fi"><div class="ci c3" style="margin:0 auto 1.25rem">' + I('brain') + '</div><h3>Transparency</h3><p>Investigation replay, reasoning chain explorer, and shadow mode detection validation.</p></div>' +
      '<div class="vc fi"><div class="ci c5" style="margin:0 auto 1.25rem">' + I('globe') + '</div><h3>Global Reach</h3><p>Air-gapped deployment, edge sensor support, and multi-channel messaging interface.</p></div>' +
      '</div></div></section>' +

      cta('Ready to Experience SOCIRIS?', 'See the platform in action — request a personalized demo.', 'Request Demo', 'https://www.linkedin.com/company/sociris/', 'Contact Us', '#/contact');
    }
  };

  SOCIRIS.pages.platform = {
    title: 'Platform — SOCIRIS Security Intelligence Capabilities',
    desc: 'Explore SOCIRIS platform capabilities: smart surveillance, context-driven threat detection, OSINT fusion, SOAR automation, and more.',
    render: function() {
      return ph('Platform', 'Security <span class="gt">Capabilities</span>', 'Seven Core Components for Comprehensive Security Intelligence') +
      '<section class="sec"><div class="ctn">' +
      svc('01', I('eye'), 'Smart Surveillance', 'AI-driven monitoring with intelligent video analytics',
        'FaceNet + MTCNN facial recognition with real-time video analytics, behavior analysis, and multi-camera coordination. Dynamic ingress/egress management with biometric access control.',
        ['Computer vision & face recognition', 'Behavior analysis & tracking', 'Multi-camera coordination', 'Real-time alert generation', 'Dynamic access management'],
        ['Perimeter security monitoring', 'Crowd management & analytics', 'License plate recognition', 'Suspicious activity detection']) +
      svc('02', I('shield-alert'), 'Threat Detection Engine', 'Ensemble AI models for proactive threat identification',
        'Multi-model ensemble engine combining LSTM (30%), One-Class SVM (20%), Isolation Forest (20%), UEBA (15%), and Threat Intel (15%) for comprehensive threat detection with risk scoring on a 0-100 scale.',
        ['Ensemble AI threat detection', 'Real-time risk scoring (0-100)', 'Behavioral anomaly detection', 'Predictive threat analytics', 'Detection compression engine'],
        ['Network intrusion detection', 'Malware detection & prevention', 'Insider threat detection', 'Data exfiltration prevention']) +
      svc('03', I('radar'), 'OSINT Intelligence Fusion', '16+ geospatial data layers with AI agent swarm',
        'OpenSky flights, maritime chokepoints, USGS earthquakes, NASA FIRMS fires, NOAA space weather, conflict zones, BGP health, OFAC sanctions, CISA KEV, NVD CVE — all fused by an 8-agent AI swarm.',
        ['16+ geospatial data layers', '8-agent AI swarm architecture', 'RECON toolkit (port scan, DNS, SSL)', 'Crypto wallet tracing', 'Absence-as-signal detection'],
        ['Geopolitical risk monitoring', 'Attack surface discovery', 'Threat actor profiling', 'Sanctions screening']) +
      svc('04', I('workflow'), 'SOAR Automation', 'Automated incident response with human-in-the-loop',
        'Five automated response playbooks (unauthorized face, anomalous behavior, unauthorized access, malware, asset anomaly) with HITL verification gates for auto-execute, approval, and needs-data routing.',
        ['5 automated response playbooks', 'HITL verification gates', 'Shadow mode detection validation', 'Detection compression engine', 'Context-aware response orchestration'],
        ['Automated threat containment', 'Incident response orchestration', 'Alert triage automation', 'Evidence chain management']) +
      svc('05', I('layout-dashboard'), 'Security Context Graph', 'Context-driven enrichment for every alert',
        'Security Context Graph that enriches alerts with asset, identity, and threat intel context. Federated query layer across Wazuh, MISP, and OpenSearch. Investigation engine with narrative reasoning.',
        ['Context Graph with CD/CR loop', 'Federated query layer', 'Investigation engine + narrative reasoning', 'Deep analysis with LLM', 'Correlation ID propagation'],
        ['Alert enrichment & correlation', 'Cross-source data fusion', 'Investigation workflow automation', 'Threat hunting']) +
      svc('06', I('search'), 'Investigation & Forensics', 'Advanced investigation with evidence chains',
        'Investigation reports with evidence chains, MITRE ATT&CK mapping (20+ categories), similar incident detection, response actions, and lessons learned. Markdown + HTML export with analyst upskilling engine.',
        ['Evidence chain management', 'MITRE ATT&CK mapping', 'Investigation replay & reasoning explorer', 'Training scenarios with AI coaching', 'Skill gap analysis'],
        ['Security breach investigation', 'Insider threat analysis', 'Compliance reporting', 'Incident post-mortems']) +
      svc('07', I('bar-chart-3'), 'Executive Intelligence', 'Dashboards and reports for security leadership',
        'Executive dashboard with MTTR trend, alert coverage, detection compression rate, proactive/reactive ratio, risk posture by business unit, and ROI calculator. Threat intel reports with geopolitical analysis.',
        ['Executive dashboard & KPIs', 'MTTR/TTA trend analysis', 'ROI calculator', 'Weekly threat landscape reports', 'Compliance posture reporting'],
        ['Executive security briefings', 'Board-level reporting', 'ROI analysis', 'Compliance dashboard']) +
      '</div></section>' +
      cta('Ready to Enhance Your Security?', 'Discover how SOCIRIS can protect your organization.', 'Request Demo', 'https://www.linkedin.com/company/sociris/', 'Contact Sales', '#/contact');
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
      cpI(I('dollar-sign'), 'c5', 'Economic Impact', 'Security incidents cost businesses billions annually in losses and recovery.', '$2B+ annual losses', 'sbd') +
      cpI(I('clock'), 'c5', 'Reactive Response', 'Traditional systems only alert after incidents, with 15+ minute response times.', '15+ min response time', 'sbd') +
      cpI(I('x-circle'), 'c6', 'Accessibility Barriers', 'Enterprise-grade security remains financially inaccessible for most organizations.', 'Only 15% can afford enterprise security', 'sbd') +
      '</div><div class="cps"><div class="spH"><div class="ib ibs">' + I('check-circle') + '</div><h3>SOCIRIS Solutions</h3></div>' +
      cpI(I('brain'), 'c1', 'Context-Driven Intelligence', 'Ensemble AI with Security Context Graph for accurate, enriched threat detection.', '95%+ threat detection accuracy', 'sbs') +
      cpI(I('shield-check'), 'c4', 'Cost-Effective Protection', 'Cloud-native architecture delivers enterprise security at 60% lower cost.', '60% cost reduction', 'sbs') +
      cpI(I('zap'), 'c1', 'Proactive Prevention', 'Real-time monitoring with automated response reduces resolution time to seconds.', '<30 sec response time', 'sbs') +
      cpI(I('users'), 'c4', 'Universal Accessibility', 'Multi-tenant platform from single-site to enterprise with flexible pricing.', 'Accessible to 85%+ market', 'sbs') +
      '</div></div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('briefcase') + ' Industry Solutions</span><h2>Protecting What Matters <span class="gt">Across Every Sector</span></h2></div><div class="cg3">' +
      uc(I('landmark'), 'Government & Public Sector', 'Comprehensive security for critical infrastructure, ministries, and public facilities.', ['Ministry building perimeter security', 'Government office monitoring', 'Court house access control', 'Police station surveillance'], ['Enhanced public safety', 'Secure operations']) +
      uc(I('graduation-cap'), 'Educational Institutions', 'Student safety, campus security, and access management for schools and universities.', ['Campus perimeter monitoring', 'Student attendance tracking', 'Dormitory access control', 'Exam hall surveillance'], ['Student safety first', 'Automated attendance']) +
      uc(I('building-2'), 'Business & Corporate', 'Enterprise security for offices, commercial buildings, and operations.', ['Office building access control', 'Visitor management systems', 'Employee attendance tracking', 'Parking lot surveillance'], ['Productivity insights', 'Asset protection']) +
      uc(I('home'), 'Residential & Housing', 'Smart home security for families, housing societies, and gated communities.', ['Home perimeter monitoring', 'Smart doorbell cameras', 'Intruder detection alerts', 'Remote monitoring via mobile'], ['Family protection', 'Mobile alerts']) +
      uc(I('factory'), 'Industrial & Manufacturing', 'Heavy-duty security for factories, warehouses, and production facilities.', ['Plant perimeter security', 'Inventory theft prevention', 'Worker safety monitoring', 'Equipment tracking'], ['Asset tracking', 'Safety compliance']) +
      uc(I('heart-pulse'), 'Healthcare Facilities', 'Medical facility security for hospitals, clinics, and healthcare centers.', ['Hospital ward monitoring', 'Pharmacy access control', 'Patient area surveillance', 'Emergency room security'], ['Patient safety', 'Drug security']) +
      uc(I('shopping-bag'), 'Retail & Shopping', 'Comprehensive security for malls, stores, and retail establishments.', ['Shoplifting prevention', 'Customer behavior analytics', 'Point-of-sale monitoring', 'Parking security'], ['Theft reduction', 'Customer insights']) +
      uc(I('truck'), 'Logistics & Transportation', 'Fleet tracking and cargo security for distribution centers.', ['Warehouse surveillance', 'Vehicle fleet tracking', 'Loading dock monitoring', 'Cargo theft prevention'], ['Real-time tracking', 'Cargo security']) +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('award') + ' Key Benefits</span><h2>Why Organizations Choose <span class="gt">SOCIRIS</span></h2></div><div class="cg3">' +
      '<div class="cd fi"><div class="ci c4">' + I('trending-down') + '</div><h3>60% Cost Reduction</h3><p>Cloud-native architecture and open-source components deliver enterprise security at a fraction of traditional costs.</p></div>' +
      '<div class="cd fi"><div class="ci c2">' + I('clock') + '</div><h3>24/7 Monitoring</h3><p>Autonomous AI surveillance with automated alerts and instant threat response capabilities.</p></div>' +
      '<div class="cd fi"><div class="ci c4">' + I('shield-check') + '</div><h3>Enterprise Compliance</h3><p>SOC 2, ISO 27001, and GDPR compliance built-in with automated DSAR workflows.</p></div>' +
      '<div class="cd fi"><div class="ci c1">' + I('zap') + '</div><h3>Sub-30s Response</h3><p>Automated SOAR playbooks with HITL gates for rapid, verified threat containment.</p></div>' +
      '<div class="cd fi"><div class="ci c3">' + I('bar-chart-3') + '</div><h3>Scalable Multi-Tenant</h3><p>Schema-per-tenant isolation with RBAC. Single-site to nationwide deployment.</p></div>' +
      '<div class="cd fi"><div class="ci c5">' + I('puzzle') + '</div><h3>Plugin Ecosystem</h3><p>13 pre-built integrations (Splunk, CrowdStrike, Palo Alto) plus community detection rules.</p></div>' +
      '</div></div></section>' +

      cta('Ready to Transform Your Security?', 'Join organizations across every sector in securing operations with SOCIRIS.', 'Schedule Demo', 'https://www.linkedin.com/company/sociris/', 'Contact Sales', '#/contact');
    }
  };

  SOCIRIS.pages.technology = {
    title: 'Technology — SOCIRIS Architecture & AI Engine',
    desc: 'Explore SOCIRIS technology: modular AI engine, event-driven plugin architecture, OSINT fusion pipeline, and multi-tenant enterprise platform.',
    render: function() {
      return ph('Technology', 'Technology <span class="gt">Architecture</span>', 'The Engine Behind Intelligent Security') +
      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('server') + ' Architecture</span><h2>Platform <span class="gt">Overview</span></h2><p class="ss">25+ containerized microservices across three network tiers</p></div><div class="cg4">' +
      '<div class="cd fi" style="text-align:center"><div class="gt" style="font-size:2.5rem;font-weight:800;display:block">6</div><h3>Evolutionary Phases</h3><p>Foundation to ecosystem — each phase builds on the last</p></div>' +
      '<div class="cd fi" style="text-align:center"><div class="gt2" style="font-size:2.5rem;font-weight:800;display:block">25+</div><h3>Microservices</h3><p>Containerized services across frontend, backend, and monitoring tiers</p></div>' +
      '<div class="cd fi" style="text-align:center"><div class="gt" style="font-size:2.5rem;font-weight:800;display:block">5</div><h3>AI Models</h3><p>Weighted ensemble: LSTM, SVM, Isolation Forest, UEBA, Threat Intel</p></div>' +
      '<div class="cd fi" style="text-align:center"><div class="gt2" style="font-size:2.5rem;font-weight:800;display:block">14</div><h3>Prometheus Metrics</h3><p>Real-time monitoring of detection, investigation, and response</p></div>' +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('git-branch') + ' Evolution</span><h2>Six Phases of <span class="gt">Evolution</span></h2><p class="ss">From foundation to ecosystem — a complete security intelligence platform</p></div><div style="display:grid;gap:1.5rem">' +
      pc('p0', 'Phase 0 — Foundation', 'Modular AI engine (core/routers, models, schemas), Next.js 16 dashboard with MapLibre + CesiumJS, Keycloak SSO, Vault secrets management, event-driven plugin architecture (EventBus + 4 plugins), Alembic migrations, WebSocket bridge, resource ID scheme.', 'ai-engine', 'FastAPI', 'SQLAlchemy', 'Alembic', 'EventBus', 'Next.js', 'Keycloak', 'Vault') +
      pc('p1', 'Phase 1 — Context Graph + CD/CR', 'InvestigationEngine with TriageModel + DeepAnalysisModel (Ollama + heuristic fallback), Security Context Graph, ContextLookupService, DetectionCompressionEngine, ShadowModeTracker, HITL Verification Gate, Federated Query Layer (Wazuh + MISP + OpenSearch).', 'context-graph', 'CD/CR', 'HITL Gate', 'shadow-mode', 'federated-query', 'MITRE ATT&CK', 'Prometheus') +
      pc('p2', 'Phase 2 — OSINT Intelligence Fusion', 'OSINT Collection Pipeline (priority sources, caching, fallback), 16+ geospatial layers (flights, maritime, seismic, fires, space weather, conflict zones, BGP), RECON Toolkit (port scan, DNS, SSL, JWT, GraphQL), 8-agent AI swarm, absence-as-signal detector, messaging-to-agent interface (6 channels).', 'OSINT', 'geospatial', 'RECON', 'AI swarm', 'absence-detect', 'messaging', 'Telegram', 'Slack') +
      pc('p3', 'Phase 3 — Enterprise Platform', 'Multi-tenancy (schema-per-tenant, 5 RBAC roles, 3 plans), Compliance (SOC 2, ISO 27001, GDPR with DSAR), Data Platform (SchemaRegistry, DataCatalog, DataLineageTracker), HA/DR (BackupService, HealthMonitor), Edge Sensors + AutoScaler, Air-Gapped deployment config.', 'multi-tenant', 'RBAC', 'SOC 2', 'ISO 27001', 'GDPR', 'auto-scaler', 'air-gapped') +
      pc('p4', 'Phase 4 — Intelligence Products', 'Investigation reports (evidence chains, MITRE mapping, similar incidents, Markdown + HTML export), Executive Dashboard (MTTR trend, TTA p95, alert coverage, ROI calculator), Analyst Upskilling Engine (investigation replay, 5 training scenarios, skill gap analysis), Threat Intel Reports (weekly, CVE, geopolitical).', 'reports', 'MITRE', 'executive', 'upskilling', 'threat-actor', 'geopolitical', 'ROI') +
      pc('p5', 'Phase 5 — Ecosystem + Community', 'Plugin Marketplace (13 integrations: Splunk, CrowdStrike, Palo Alto, etc.), Webhook system (HMAC-SHA256 signed), GraphQL API (11 types, 13 queries, 6 mutations, 3 subscriptions), Community Hub (5 default detection rules with voting, OSINT feed registry).', 'marketplace', 'webhooks', 'GraphQL', 'community', '13-plugins', 'detection-rules') +
      '</div></div></section>' +

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('database') + ' Tech Stack</span><h2>Core <span class="gt">Technologies</span></h2></div><div class="cg4">' +
      '<div class="cd fi"><div class="ci c1">' + I('cpu') + '</div><h3>AI/ML</h3><p>FastAPI, TensorFlow, scikit-learn, Ollama (Qwen3), FaceNet, MTCNN, ensemble model architecture</p></div>' +
      '<div class="cd fi"><div class="ci c2">' + I('database') + '</div><h3>Data</h3><p>PostgreSQL 15, Redis 7, OpenSearch 2.11, SQLAlchemy, Alembic migrations</p></div>' +
      '<div class="cd fi"><div class="ci c3">' + I('container') + '</div><h3>Infrastructure</h3><p>Docker Compose, 3 network tiers, Prometheus, Grafana, Loki, Prometheus alerting</p></div>' +
      '<div class="cd fi"><div class="ci c4">' + I('shield') + '</div><h3>Security</h3><p>Keycloak SSO, HashiCorp Vault, Wazuh HIDS, MISP threat intel, TheHive + Cortex SOAR</p></div>' +
      '<div class="cd fi"><div class="ci c5">' + I('code') + '</div><h3>Frontend</h3><p>Next.js 16, Turbopack, Ant Design, ECharts, MapLibre GL, CesiumJS 3D, React</p></div>' +
      '<div class="cd fi"><div class="ci c6">' + I('radio') + '</div><h3>Communication</h3><p>WebSocket bridge, 6-channel messaging (Web, Slack, Telegram, Email, WhatsApp, SMS)</p></div>' +
      '</div></div></section>' +

      cta('See the Technology in Action', 'Request a live demo of the SOCIRIS platform.', 'Request Demo', 'https://www.linkedin.com/company/sociris/', 'Contact Us', '#/contact');
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

      '<section class="sec"><div class="ctn"><div class="sh"><span class="slb">' + I('help-circle') + ' FAQ</span><h2>Frequently Asked <span class="gt">Questions</span></h2></div><div style="max-width:720px;margin:0 auto">' +
      faq('What is SOCIRIS?', 'SOCIRIS is an AI-powered autonomous security intelligence platform that combines context-driven threat detection, OSINT intelligence fusion, and automated incident response in a multi-tenant enterprise platform.') +
      faq('How does the AI detection engine work?', 'SOCIRIS uses a weighted ensemble of five models: LSTM networks (30%), One-Class SVM (20%), Isolation Forest (20%), UEBA behavioral analysis (15%), and Threat Intel correlation (15%). This provides higher accuracy than any single model approach.') +
      faq('What is the Security Context Graph?', 'The Context Graph enriches every alert with asset information, identity context, and threat intelligence. It uses a CD/CR (Context-Driven/Context-Response) closed loop to ensure every detection is validated against real-world context.') +
      faq('Can SOCIRIS integrate with existing security tools?', 'Yes. SOCIRIS has 13 pre-built integrations including Splunk, CrowdStrike, Palo Alto, Azure Sentinel, Fortinet, Slack, PagerDuty, Jira, VirusTotal, and more. The plugin marketplace supports custom integrations via webhooks and the GraphQL API.') +
      faq('Is SOCIRIS suitable for small organizations?', 'Absolutely. SOCIRIS supports multi-tenant deployment with three plan tiers (Starter, Professional, Enterprise), making enterprise-grade security intelligence accessible to organizations of any size.') +
      faq('What compliance standards does SOCIRIS support?', 'SOCIRIS includes built-in compliance engines for SOC 2 (14 controls), ISO 27001 (14 controls), and GDPR (with automated DSAR workflows, right-to-erasure, and data classification).') +
      '</div></div></section>' +
      cta('Ready to Get Started?', 'Request a personalized demo of the SOCIRIS platform.', 'Request Demo', 'https://www.linkedin.com/company/sociris/', 'Send Email', 'mailto:info@sociris.com');
    }
  };
})();
