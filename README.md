# SOCIRIS Website

**AI-Powered Intrusion Detection, Prevention & Surveillance System**

A modern, responsive landing page for SOCIRIS - showcasing our revolutionary security solution for Pakistan.

[![Live Site](https://img.shields.io/badge/Live-sociris.com-6366f1?style=for-the-badge)](https://sociris.com)
[![GitHub](https://img.shields.io/badge/GitHub-SOCIRIS-181717?style=for-the-badge&logo=github)](https://github.com/SOCIRIS)

---

## 🚀 Quick Start

### Local Setup

1. Clone your repository (if you haven't already):
```bash
cd ~/SOCIRIS/Launchpad
```

2. Verify you have all required files:
```bash
ls -lh
# You should see: index.html, style.css, script.js, CNAME, README.md
```

3. Test locally with Python's built-in server:
```bash
# Python 3
python3 -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000
```

4. Open your browser and visit: `http://localhost:8000`

### GitHub Pages Deployment

Your site is already configured for GitHub Pages with the CNAME file. To deploy:

1. Add all files to git:
```bash
git add .
```

2. Commit your changes:
```bash
git commit -m "Update SOCIRIS website"
```

3. Push to GitHub:
```bash
git push origin main
```

4. Your site will be live at: **https://sociris.com**

> **Note:** DNS propagation may take a few minutes. You can also access it via your GitHub Pages URL.

---

## 📁 File Structure

```
Launchpad/
├── index.html      # Main HTML structure (47KB)
├── style.css       # All styling and responsive design (21KB)
├── script.js       # Interactive features and animations (13KB)
├── CNAME           # Custom domain configuration
└── README.md       # This file
```

---

## ✨ Features

### Design Features
- **Modern Dark Theme**: Professional gradient design with security-focused aesthetics
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, hover states, and scroll animations
- **Accessibility**: Keyboard navigation, reduced motion support, ARIA labels
- **Performance Optimized**: Fast loading times, optimized assets

### Interactive Elements
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Animated navigation between sections
- **Active Link Highlighting**: Current section highlighted in navigation
- **Scroll-to-Top Button**: Appears after scrolling down
- **Copy-to-Clipboard**: Click email addresses to copy them
- **Parallax Effects**: Dynamic background in hero section
- **Hover Animations**: Interactive card effects throughout

---

## 📄 Content Sections

### 1. Hero Section
Eye-catching introduction with:
- Compelling headline with gradient text effects
- Key statistics (24/7 monitoring, AI-driven decisions, 4 core components)
- Call-to-action buttons (Discover More, Get Started)
- Animated background with gradient effects

### 2. About SOCIRIS
Vision and mission showcasing:
- Project inspiration and goals
- Economic accessibility focus
- Industry-wide application plans
- Autonomous AI agent capabilities
- First-of-its-kind innovation in Pakistan

### 3. Services (4 Core Components)
Detailed breakdown of security capabilities:
- **Smart Surveillance & Access Control**: AI-driven surveillance with facial recognition and dynamic access management
- **Automated Security Audits**: Portable vulnerability scanning for infrastructure protection
- **Asset Tracking & Analysis**: Real-time location tracking with movement insights
- **Centralized Security Dashboard**: Data-driven analytics and actionable intelligence

### 4. Solutions
Problem-solving approach featuring:
- Pakistan's security challenges addressed
- SOCIRIS solutions and benefits
- Use cases across 6 sectors:
  - 🏛️ Government premises and offices
  - 🎓 Educational institutions
  - 🏢 Business and corporate
  - 🏠 Residential/smart homes
  - 🏭 Industrial facilities
  - 🏥 Healthcare institutions

### 5. Technology & Architecture ⭐ NEW
Comprehensive technical capabilities showcase:

**8 Technology Layers:**
- 🧠 **AI & Machine Learning**: Ensemble threat detection, deep learning models, behavioral analysis
- 👁️ **Computer Vision**: Facial recognition, object detection, pattern analysis
- ⚡ **Real-time Data Processing**: Event streaming, big data analytics, high-performance caching
- 📊 **Monitoring & Visualization**: Real-time dashboards, log analytics, time-series metrics
- 🔒 **Security Operations**: Intrusion detection, incident management, threat intelligence, forensics
- 🔄 **Automation & Orchestration**: SOAR platform, infrastructure automation, network scanning
- ☁️ **Infrastructure & Deployment**: Container orchestration, multi-cloud support
- 📡 **IoT & Asset Tracking**: GPS tracking, device management, change detection

**Core Technical Capabilities:**
- ⚡ Real-time Processing (sub-second response)
- 📈 Horizontal Scaling (seamless growth)
- 🔐 End-to-End Encryption (military-grade)
- 🔄 High Availability (99.9% uptime)
- 🌐 API-First Design (easy integration)
- 🔍 Advanced Analytics (ML-powered)

> **Note:** Technology descriptions focus on capabilities, not specific tool implementations, maintaining competitive advantage while showcasing sophistication.

### 6. Team
Meet the innovators:
- **Muhammad Abdullah Tariq** (BB-6792) - Project Lead & CloudOps Architect
- **Muhammad Huzaifa Tariq** (BB-6864) - AI Engineer & Computer Vision Specialist
- **Yaseen Iqbal** (BB-7260) - IoT Systems Engineer
- **Muhammad Asad** (BB-7246) - Security Researcher & Backend Developer

Each profile includes:
- Role and expertise
- Bio and background
- Skill tags
- GitHub and LinkedIn links (when available)

**Academic Supervision:**
- **Supervisor:** Dr. Nabila Sehito
- **Institution:** ILMA University - Department of Computer Science / Software Engineering
- **Session:** Spring 2025

### 7. Contact
Get in touch:
- Email contact
- Website link
- Location information
- Call-to-action for demos and early access

---

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `style.css` (at the top of the file):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #06b6d4;    /* Accent color */
    --bg-dark: #0f172a;            /* Background */
    --bg-darker: #020617;          /* Darker background */
    --text-primary: #f8fafc;       /* Main text */
    /* ... more variables */
}
```

### Updating Team Information

In `index.html`, find the team section and edit each member's card:

```html
<div class="team-member">
    <div class="member-avatar">
        <div class="avatar-placeholder">MAT</div>
    </div>
    <h3>Muhammad Abdullah Tariq</h3>
    <p class="member-role">Project Lead & CloudOps Architect</p>
    <p class="member-id">BB-6792</p>
    <p class="member-bio">Your bio here...</p>
    <div class="member-expertise">
        <span class="tag">Skill 1</span>
        <span class="tag">Skill 2</span>
    </div>
</div>
```

### Adding Team Photos

1. Create an `images` folder:
```bash
mkdir images
```

2. Add your team photos to the folder (recommended: 400x400px, square format)

3. Replace avatar placeholders in HTML:
```html
<!-- Replace: -->
<div class="avatar-placeholder">MAT</div>

<!-- With: -->
<img src="images/abdullah.jpg" alt="Muhammad Abdullah Tariq">
```

4. Add CSS for image styling in `style.css`:
```css
.member-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

### Updating Contact Information

Find the contact section in `index.html`:

```html
<div class="contact-item">
    <span class="contact-icon">📧</span>
    <div>
        <h4>Email</h4>
        <p>info@sociris.com</p>  <!-- Update this -->
    </div>
</div>
```

---

## 🔧 Advanced Configuration

### Adding Google Analytics

Add before the closing `</head>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

### Adding a Contact Form

Replace the CTA box with a functional form using Formspree:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <input type="text" name="company" placeholder="Company/Organization">
    <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

Add CSS styling in `style.css`:

```css
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--border-color);
    background: var(--bg-darker);
    color: var(--text-primary);
    font-family: inherit;
}

.contact-form input:focus,
.contact-form textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}
```

### SEO Optimization

The site already includes basic SEO elements. To enhance:

1. **Update meta tags** in `index.html`:
```html
<meta name="description" content="SOCIRIS - Pakistan's first AI-powered intrusion detection, prevention & surveillance system">
<meta name="keywords" content="AI Security, Pakistan, Surveillance, IoT, Facial Recognition, Threat Detection">
```

2. **Add Open Graph tags** for social media:
```html
<meta property="og:title" content="SOCIRIS - AI-Powered Security Solutions">
<meta property="og:description" content="Revolutionizing security in Pakistan through AI">
<meta property="og:image" content="https://sociris.com/og-image.jpg">
<meta property="og:url" content="https://sociris.com">
<meta property="og:type" content="website">
```

3. **Create `sitemap.xml`** in root directory:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sociris.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

4. **Create `robots.txt`** in root directory:
```
User-agent: *
Allow: /
Sitemap: https://sociris.com/sitemap.xml
```

---

## 📱 Testing

### Browser Compatibility
Test on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Breakpoints
- **Desktop:** 1920x1080, 1366x768
- **Tablet:** 768x1024
- **Mobile:** 375x667, 414x896, 390x844

### Performance Testing

Use Chrome DevTools Lighthouse:
1. Open DevTools (F12)
2. Go to "Lighthouse" tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

**Target Scores:**
- Performance: >90
- Accessibility: >90
- Best Practices: >90
- SEO: >90

Or use CLI:
```bash
npm install -g lighthouse
lighthouse https://sociris.com --view
```

---

## 🐛 Troubleshooting

### Site Not Showing on GitHub Pages

1. **Check repository settings:**
   - Go to Settings > Pages
   - Ensure source is set to `main` branch
   - Verify custom domain is configured correctly

2. **Verify CNAME file:**
```bash
cat CNAME
# Should show: sociris.com
```

3. **Check DNS settings** with your domain provider:
   - A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - CNAME record: `www` → `[username].github.io`

4. **Wait for DNS propagation** (can take up to 24 hours)

### Styles Not Loading

1. Check file paths in HTML are correct
2. Clear browser cache: `Ctrl/Cmd + Shift + R`
3. Verify CSS file is uploaded to GitHub
4. Check browser console for errors (F12)

### Mobile Menu Not Working

1. Open browser console (F12) and check for JavaScript errors
2. Verify `script.js` is loaded correctly
3. Test on different browsers and devices
4. Ensure JavaScript is enabled in browser

### Images Not Loading

1. Verify image paths are correct
2. Check file extensions match (case-sensitive on Linux servers)
3. Ensure images are committed to repository
4. Use relative paths, not absolute paths

---

## 🚀 Performance Tips

### 1. Image Optimization
```bash
# Use WebP format for better compression
# Compress images before uploading
# Recommended dimensions:
# - Team photos: 400x400px
# - Hero images: 1920x1080px
# - Icons: 64x64px or SVG
```

### 2. Minify Assets (Production)
```bash
# Install tools
npm install -g csso-cli uglify-js html-minifier

# Minify CSS
csso style.css -o style.min.css

# Minify JavaScript
uglifyjs script.js -o script.min.js -c -m

# Minify HTML
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html
```

Then update HTML to use minified versions:
```html
<link rel="stylesheet" href="style.min.css">
<script src="script.min.js"></script>
```

### 3. Enable Caching

Add a `.htaccess` file (if using Apache):
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

### 4. Use CDN for Libraries

If adding external libraries, use CDN:
```html
<!-- Example: Font Awesome -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

---

## 📝 Content Updates

### Regular Maintenance

Update these sections as your project evolves:

1. **Statistics** in Hero section:
   - Update numbers based on actual metrics
   - Add new achievements

2. **Team Section**:
   - Add team photos when available
   - Update bios and skills
   - Add new team members

3. **Services**:
   - Update feature descriptions
   - Add new capabilities
   - Include beta/launch status

4. **Technology**:
   - Expand capability descriptions
   - Add new technology layers
   - Update as architecture evolves

5. **Contact Information**:
   - Keep email current
   - Update social media links
   - Add support channels

---

## 🔐 Security

The site is static (HTML/CSS/JS only), which is inherently secure. Best practices:

1. ✅ **Don't commit sensitive data**:
   - No API keys in code
   - No passwords or credentials
   - No private configuration

2. ✅ **Use HTTPS**:
   - GitHub Pages provides free SSL
   - Always use `https://` in links

3. ✅ **Validate user input**:
   - If adding forms, validate server-side
   - Use CSRF protection
   - Sanitize all inputs

4. ✅ **Keep dependencies updated**:
   - Regularly check for updates
   - Review security advisories

---

## 📞 Support & Contact

### For Website Issues
- **Technical Lead**: Muhammad Abdullah Tariq (BB-6792)
- **Email**: info@sociris.com
- **GitHub Issues**: [Report a bug](https://github.com/SOCIRIS/Launchpad/issues)

### For Project Inquiries
- **Website**: [sociris.com](https://sociris.com)
- **Organization**: [github.com/SOCIRIS](https://github.com/SOCIRIS)
- **Documentation**: [GitHub Wiki](https://github.com/SOCIRIS/Docs)

---

## 📄 License

Copyright © 2025 SOCIRIS Team. All rights reserved.

This project is part of a Final Year Project at ILMA University, Department of Computer Science / Software Engineering, under the supervision of Dr. Nabila Sehito.

---

## 🎯 Project Status

### Completed ✅
- [x] Website design and development
- [x] Responsive layout for all devices
- [x] Content sections (Hero, About, Services, Solutions, Technology, Team, Contact)
- [x] GitHub Pages deployment
- [x] Custom domain configuration
- [x] SEO optimization basics

### In Progress 🔄
- [ ] Team photos
- [ ] Demo video
- [ ] Contact form integration
- [ ] Google Analytics setup
- [ ] Blog section

### Planned 📋
- [ ] Testimonials section
- [ ] Case studies
- [ ] Interactive demos
- [ ] Multi-language support
- [ ] Dark/Light mode toggle

---

## 🙏 Acknowledgments

- **ILMA University** for academic support and resources
- **Dr. Nabila Sehito** for supervision and guidance
- **Open Source Community** for inspiration and tools
- **Pakistan's Security Sector** for inspiring this innovation

---

## 📚 Additional Resources

- [GitHub Organization](https://github.com/SOCIRIS)
- [Technical Documentation](https://github.com/SOCIRIS/Docs)
- [Project Repositories](https://github.com/orgs/SOCIRIS/repositories)

---

<div align="center">

**Built with ❤️ by the SOCIRIS Team**

*Transforming security through AI-powered innovation*

[![⭐ Star this repo](https://img.shields.io/github/stars/SOCIRIS/Launchpad?style=social)](https://github.com/SOCIRIS/Launchpad)

</div>
