# 📄 Page Templates for SOCIRIS Website

## Quick Copy-Paste Templates

Use these templates to quickly create your remaining pages. Each follows the same structure as `index.html` with customized content sections.

---

## 🏢 about.html Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Copy <head> section from index.html -->
    <!-- Update title and description -->
    <title>About SOCIRIS - AI-Powered Security Platform | Pakistan</title>
    <meta name="description" content="Learn about SOCIRIS - Pakistan's first AI-powered autonomous security platform revolutionizing intrusion detection and surveillance.">
</head>
<body>
    <!-- Copy navbar from index.html -->
    
    <!-- Page Hero -->
    <section class="page-hero">
        <div class="container">
            <nav class="breadcrumb">
                <a href="index.html">Home</a>
                <span>/</span>
                <span>About</span>
            </nav>
            <h1>About <span class="gradient-text">SOCIRIS</span></h1>
            <p class="subtitle">Transforming Security Through Artificial Intelligence</p>
        </div>
    </section>

    <!-- Vision & Mission -->
    <section class="vision-mission">
        <div class="container">
            <div class="content-grid">
                <div class="vision-card">
                    <div class="icon"><i data-lucide="target"></i></div>
                    <h2>Our Vision</h2>
                    <p>To redefine security in Pakistan by making intrusion detection, prevention, and surveillance systems both commercial and accessible for everyone—from enterprises to individual users.</p>
                </div>
                <div class="mission-card">
                    <div class="icon"><i data-lucide="flag"></i></div>
                    <h2>Our Mission</h2>
                    <p>Leverage cutting-edge AI and IoT technologies to create an autonomous security platform that protects what matters most—making Pakistan safer, one installation at a time.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Story Section -->
    <section class="our-story">
        <div class="container">
            <div class="section-header">
                <h2>The SOCIRIS Story</h2>
                <p>Born from a Final Year Project at ILMA University, SOCIRIS represents Pakistan's first AI-powered autonomous security platform. What started as an academic pursuit has evolved into a comprehensive solution addressing the nation's critical security challenges.</p>
            </div>
            
            <div class="timeline">
                <div class="timeline-item">
                    <div class="date">2024</div>
                    <h3>Project Inception</h3>
                    <p>Research and development begins at ILMA University</p>
                </div>
                <div class="timeline-item">
                    <div class="date">2025</div>
                    <h3>MVP Development</h3>
                    <p>Core AI engine and IoT integration completed</p>
                </div>
                <div class="timeline-item">
                    <div class="date">Future</div>
                    <h3>National Deployment</h3>
                    <p>Scaling across Pakistan's critical infrastructure</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Values -->
    <section class="values">
        <div class="container">
            <h2 class="text-center">Our Core Values</h2>
            <div class="values-grid">
                <div class="value-card">
                    <i data-lucide="shield"></i>
                    <h3>Security First</h3>
                    <p>Uncompromising protection through multiple layers of defense</p>
                </div>
                <div class="value-card">
                    <i data-lucide="zap"></i>
                    <h3>Innovation</h3>
                    <p>Continuous advancement through AI and emerging technologies</p>
                </div>
                <div class="value-card">
                    <i data-lucide="users"></i>
                    <h3>Accessibility</h3>
                    <p>Security solutions for everyone, from enterprises to homes</p>
                </div>
                <div class="value-card">
                    <i data-lucide="heart"></i>
                    <h3>Reliability</h3>
                    <p>99.9% uptime with autonomous failover systems</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Copy CTA section from index.html -->
    <!-- Copy footer from index.html -->
    <!-- Copy scripts from index.html -->
</body>
</html>
```

---

## 🛡️ services.html Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Copy <head> from index.html -->
    <title>Services - 7 Core Security Components | SOCIRIS</title>
    <meta name="description" content="Explore SOCIRIS's 7 core security components including Smart Surveillance, Access Control, Threat Detection, and more.">
</head>
<body>
    <!-- Copy navbar -->
    
    <section class="page-hero">
        <div class="container">
            <nav class="breadcrumb">
                <a href="index.html">Home</a>
                <span>/</span>
                <span>Services</span>
            </nav>
            <h1>Our <span class="gradient-text">Services</span></h1>
            <p class="subtitle">Seven Core Components for Comprehensive Security</p>
        </div>
    </section>

    <!-- Services Grid -->
    <section class="services-section">
        <div class="container">
            <div class="services-grid">
                <!-- Service 1 -->
                <div class="service-card" id="surveillance">
                    <div class="service-number">01</div>
                    <div class="service-icon"><i data-lucide="eye"></i></div>
                    <h3>Smart Surveillance System</h3>
                    <p>AI-driven surveillance with computer vision and intelligent video analytics to monitor entry/exit points and detect security threats in real-time.</p>
                    
                    <h4>Key Features</h4>
                    <ul>
                        <li><i data-lucide="check"></i> Computer vision & object detection</li>
                        <li><i data-lucide="check"></i> Intelligent video analytics</li>
                        <li><i data-lucide="check"></i> Behavior analysis & tracking</li>
                        <li><i data-lucide="check"></i> 24/7 automated monitoring</li>
                    </ul>
                    
                    <h4>Use Cases</h4>
                    <ul>
                        <li>Perimeter security monitoring</li>
                        <li>Crowd management</li>
                        <li>License plate recognition</li>
                        <li>Suspicious activity detection</li>
                    </ul>
                </div>

                <!-- Service 2 -->
                <div class="service-card" id="access-control">
                    <div class="service-number">02</div>
                    <div class="service-icon"><i data-lucide="fingerprint"></i></div>
                    <h3>Access Control & Facial Recognition</h3>
                    <p>Advanced biometric access control with facial recognition to verify identities and regulate access dynamically with autonomous door management.</p>
                    
                    <h4>Key Features</h4>
                    <ul>
                        <li><i data-lucide="check"></i> Facial recognition & verification</li>
                        <li><i data-lucide="check"></i> Dynamic ingress/egress management</li>
                        <li><i data-lucide="check"></i> Automated door locking/unlocking</li>
                        <li><i data-lucide="check"></i> Multi-factor authentication</li>
                    </ul>
                </div>

                <!-- Continue for Services 3-7 -->
                <!-- Use same structure -->
            </div>
        </div>
    </section>

    <!-- Copy footer & scripts -->
</body>
</html>
```

---

## 💡 solutions.html Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <title>Solutions & Use Cases | SOCIRIS</title>
    <meta name="description" content="Discover how SOCIRIS solves real-world security challenges across 8+ industries in Pakistan.">
</head>
<body>
    <!-- Copy navbar -->
    
    <section class="page-hero">
        <div class="container">
            <nav class="breadcrumb">
                <a href="index.html">Home</a>
                <span>/</span>
                <span>Solutions</span>
            </nav>
            <h1>Security <span class="gradient-text">Solutions</span></h1>
            <p class="subtitle">Addressing Pakistan's Critical Security Challenges</p>
        </div>
    </section>

    <!-- Problem & Solution -->
    <section class="problem-solution">
        <div class="container">
            <div class="comparison-grid">
                <div class="problem-side">
                    <h2><i data-lucide="alert-circle"></i> The Problem</h2>
                    <div class="problem-list">
                        <div class="problem-item">
                            <h4>Security Infrastructure Gaps</h4>
                            <p>Many critical areas rely on outdated surveillance methods, leading to vulnerabilities</p>
                        </div>
                        <!-- Add more problems -->
                    </div>
                </div>
                
                <div class="solution-side">
                    <h2><i data-lucide="check-circle"></i> Our Solution</h2>
                    <div class="solution-list">
                        <div class="solution-item">
                            <h4>Proactive Threat Detection</h4>
                            <p>AI-driven monitoring detects and mitigates threats before they escalate</p>
                        </div>
                        <!-- Add more solutions -->
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Use Cases -->
    <section class="use-cases">
        <div class="container">
            <h2 class="text-center">Industries We Serve</h2>
            <div class="use-cases-grid">
                <div class="use-case-card">
                    <div class="icon"><i data-lucide="building"></i></div>
                    <h3>Government</h3>
                    <p>Secure premises, offices, and critical infrastructure</p>
                    <ul>
                        <li>Ministry buildings</li>
                        <li>Police stations</li>
                        <li>Court houses</li>
                    </ul>
                </div>
                
                <!-- Add 7 more use cases -->
            </div>
        </div>
    </section>

    <!-- Copy footer & scripts -->
</body>
</html>
```

---

## 🔧 technology.html Template

```html
<section class="tech-stack">
    <div class="container">
        <h2>8-Layer Technology Architecture</h2>
        
        <div class="tech-layers">
            <!-- Layer 1 -->
            <div class="tech-layer">
                <div class="layer-header">
                    <i data-lucide="brain"></i>
                    <h3>Artificial Intelligence Layer</h3>
                </div>
                <div class="layer-content">
                    <div class="tech-item">
                        <h4>Advanced Computer Vision</h4>
                        <p>Real-time facial recognition, object detection, and behavioral analysis using deep learning models</p>
                        <div class="tech-tags">
                            <span>TensorFlow</span>
                            <span>PyTorch</span>
                            <span>OpenCV</span>
                        </div>
                    </div>
                    <!-- Add more items -->
                </div>
            </div>
            
            <!-- Continue for 8 layers -->
        </div>
    </div>
</section>
```

---

## 👥 team.html Template

```html
<section class="team-page">
    <div class="container">
        <!-- Leadership -->
        <div class="team-section">
            <h2>Project Leadership</h2>
            <div class="team-grid">
                <div class="team-member featured">
                    <div class="member-image">
                        <img src="images/team/abdullah.jpg" alt="Muhammad Abdullah Tariq">
                    </div>
                    <div class="member-info">
                        <h3>Muhammad Abdullah Tariq</h3>
                        <p class="role">Project Lead & CloudOps Architect</p>
                        <p class="id">Student ID: BB-6792</p>
                        
                        <div class="bio">
                            <p>Lead CloudOps Manager with 6+ years of DevSecOps experience managing multi-cloud environments across AWS, GCP, and Azure. Achieved 75% cloud cost reduction while maintaining 99.9% uptime.</p>
                            
                            <h4>Expertise</h4>
                            <div class="expertise-tags">
                                <span>Cloud Security</span>
                                <span>DevOps</span>
                                <span>AI/ML</span>
                                <span>Kubernetes</span>
                                <span>CI/CD</span>
                            </div>
                            
                            <h4>Certifications</h4>
                            <ul>
                                <li>CISSP Associate (ISC2)</li>
                                <li>CCSP (ISC2)</li>
                                <li>AWS Solutions Architect</li>
                            </ul>
                            
                            <h4>Education</h4>
                            <ul>
                                <li>Bachelor of Science - Cybersecurity, ILMA University (2021-2026)</li>
                                <li>Diploma in AI Operations (RQF Level 6), EduQual UK</li>
                            </ul>
                        </div>
                        
                        <div class="social-links">
                            <a href="https://www.linkedin.com/in/matx104/" target="_blank">
                                <i data-lucide="linkedin"></i> LinkedIn
                            </a>
                            <a href="https://github.com/matx104" target="_blank">
                                <i data-lucide="github"></i> GitHub
                            </a>
                            <a href="https://www.credly.com/users/matx104" target="_blank">
                                <i data-lucide="award"></i> Credly
                            </a>
                            <a href="https://roadmap.sh/u/matx104" target="_blank">
                                <i data-lucide="map"></i> Roadmap.sh
                            </a>
                            <a href="https://ko-fi.com/matx104" target="_blank">
                                <i data-lucide="coffee"></i> Ko-fi
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Engineering Team -->
        <div class="team-section">
            <h2>Engineering Team</h2>
            <div class="team-grid">
                <!-- Team Member 2 -->
                <div class="team-member">
                    <div class="member-image">
                        <div class="avatar-placeholder">YI</div>
                    </div>
                    <div class="member-info">
                        <h3>Yaseen Iqbal</h3>
                        <p class="role">IoT Systems Engineer</p>
                        <p class="id">BB-7260</p>
                        <p class="bio">Specializes in IoT integration, sensor networks, and real-time asset tracking systems.</p>
                        <div class="expertise-tags">
                            <span>IoT</span>
                            <span>Hardware</span>
                            <span>Embedded Systems</span>
                        </div>
                    </div>
                </div>

                <!-- Add more team members -->
            </div>
        </div>

        <!-- Academic Supervision -->
        <div class="supervision-section">
            <h2>Academic Supervision</h2>
            <div class="supervisor-card">
                <p><strong>Supervisor:</strong> Dr. Nabila Sehito</p>
                <p><strong>Institution:</strong> ILMA University</p>
                <p><strong>Department:</strong> Computer Science / Software Engineering</p>
                <p><strong>Session:</strong> Spring 2025</p>
            </div>
        </div>
    </div>
</section>
```

---

## 📞 contact.html Template

```html
<section class="contact-page">
    <div class="container">
        <div class="contact-grid">
            <!-- Contact Info -->
            <div class="contact-info">
                <h2>Get in Touch</h2>
                <p>Have questions about SOCIRIS? Want to schedule a demo? We'd love to hear from you.</p>
                
                <div class="contact-methods">
                    <div class="contact-method">
                        <i data-lucide="mail"></i>
                        <div>
                            <h4>Email</h4>
                            <a href="mailto:info@sociris.com">info@sociris.com</a>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <i data-lucide="map-pin"></i>
                        <div>
                            <h4>Location</h4>
                            <p>Karachi, Pakistan</p>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <i data-lucide="linkedin"></i>
                        <div>
                            <h4>LinkedIn</h4>
                            <a href="https://www.linkedin.com/company/sociris/" target="_blank">Follow us</a>
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <i data-lucide="github"></i>
                        <div>
                            <h4>GitHub</h4>
                            <a href="https://github.com/SOCIRIS" target="_blank">View repos</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Contact Form -->
            <div class="contact-form-wrapper">
                <form class="contact-form" data-validate>
                    <div class="form-group">
                        <label for="name">Full Name *</label>
                        <input type="text" id="name" name="name" required>
                        <span class="error-message"></span>
                    </div>
                    
                    <div class="form-group">
                        <label for="email">Email Address *</label>
                        <input type="email" id="email" name="email" required>
                        <span class="error-message"></span>
                    </div>
                    
                    <div class="form-group">
                        <label for="organization">Organization</label>
                        <input type="text" id="organization" name="organization">
                    </div>
                    
                    <div class="form-group">
                        <label for="message">Message *</label>
                        <textarea id="message" name="message" rows="6" required></textarea>
                        <span class="error-message"></span>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-lg">
                        <span>Send Message</span>
                        <i data-lucide="send"></i>
                    </button>
                </form>
            </div>
        </div>
    </div>
</section>
```

---

## 🎨 Additional CSS Needed

Add to `css/style.css`:

```css
/* Page Hero */
.page-hero {
    padding: 8rem 0 4rem;
    background: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
}

.breadcrumb {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.875rem;
    color: var(--text-muted);
}

.breadcrumb a:hover {
    color: var(--primary-color);
}

/* Services Page */
.services-section {
    padding: 4rem 0;
}

.service-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xl);
    padding: 2.5rem;
    margin-bottom: 2rem;
}

.service-number {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--gradient-primary);
    color: white;
    border-radius: var(--radius-md);
    font-weight: 700;
    margin-bottom: 1rem;
}

.service-card ul {
    list-style: none;
    padding: 0;
}

.service-card ul li {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0;
}

.service-card ul li i {
    width: 16px;
    height: 16px;
    stroke: var(--success);
}

/* Team Page */
.team-member.featured {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 2rem;
    padding: 2rem;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-xl);
}

.member-image img {
    width: 100%;
    border-radius: var(--radius-lg);
}

.avatar-placeholder {
    width: 120px;
    height: 120px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 800;
    color: white;
}

.expertise-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin: 1rem 0;
}

.expertise-tags span {
    padding: 0.25rem 0.75rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    font-size: 0.875rem;
}

/* Contact Form */
.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-primary);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.875rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-family: inherit;
    transition: border-color var(--transition-base);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

.error-message {
    display: block;
    color: var(--danger);
    font-size: 0.875rem;
    margin-top: 0.25rem;
}

/* Responsive */
@media (max-width: 768px) {
    .team-member.featured {
        grid-template-columns: 1fr;
    }
    
    .contact-grid {
        grid-template-columns: 1fr;
    }
}
```

---

## ✅ Quick Setup Checklist

1. [ ] Copy template HTML
2. [ ] Update page-specific content
3. [ ] Add CSS styles above
4. [ ] Test all links
5. [ ] Verify mobile responsiveness
6. [ ] Check theme toggle
7. [ ] Test forms (if applicable)
8. [ ] Deploy!

---

**Need help? Contact: muhammad.atx@gmail.com**
