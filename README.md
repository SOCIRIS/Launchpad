# SOCIRIS Website

**AI-Powered Intrusion Detection, Prevention & Surveillance System**

A modern, responsive landing page for SOCIRIS - showcasing our revolutionary security solution for Pakistan.

## 🚀 Quick Start

### Local Setup

1. Clone your repository (if you haven't already):
```bash
cd ~/SOCIRIS/Launchpad
```

2. Copy the website files to your repository:
```bash
# Make sure you have: index.html, style.css, and script.js
ls -la
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
git commit -m "Launch SOCIRIS website with complete design"
```

3. Push to GitHub:
```bash
git push origin main
```

4. Your site will be live at: **https://sociris.com**

> Note: DNS propagation may take a few minutes. You can also access it via: `https://[your-username].github.io/Launchpad/`

## 📁 File Structure

```
Launchpad/
├── index.html      # Main HTML structure
├── style.css       # All styling and responsive design
├── script.js       # Interactive features and animations
├── CNAME           # Custom domain configuration
└── README.md       # This file
```

## ✨ Features

### Design Features
- **Modern Dark Theme**: Professional gradient design with security-focused aesthetics
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, hover states, and scroll animations
- **Accessibility**: Keyboard navigation, reduced motion support, ARIA labels

### Interactive Elements
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Smooth Scrolling**: Animated navigation between sections
- **Active Link Highlighting**: Current section highlighted in navigation
- **Scroll-to-Top Button**: Appears after scrolling down
- **Copy-to-Clipboard**: Click email addresses to copy them
- **Parallax Effects**: Dynamic background in hero section

### Content Sections

1. **Hero Section**
   - Eye-catching headline with gradient text
   - Key statistics display
   - Call-to-action buttons

2. **About SOCIRIS**
   - Vision and mission statement
   - Core features overview
   - Uniqueness highlights

3. **Services** (4 Core Components)
   - Smart Surveillance & Access Control
   - Automated Security Audits
   - Asset Tracking & Analysis
   - Centralized Security Dashboard

4. **Solutions**
   - Problem statement
   - SOCIRIS solutions
   - Use cases for different sectors

5. **Team**
   - Team member profiles with avatars
   - Roles and expertise
   - Supervisor information

6. **Contact**
   - Contact information
   - Call-to-action for demos

## 🎨 Customization

### Colors

Edit the CSS variables in `style.css` (lines 1-22):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #06b6d4;    /* Accent color */
    --bg-dark: #0f172a;            /* Background */
    /* ... more variables */
}
```

### Content Updates

#### Update Team Member Information

In `index.html`, find the team section and edit:

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

#### Update Contact Information

Find the contact section in `index.html`:

```html
<div class="contact-item">
    <span class="contact-icon">📧</span>
    <div>
        <h4>Email</h4>
        <p>your-email@sociris.com</p>
    </div>
</div>
```

### Adding Images

To add team photos or other images:

1. Create an `images` folder:
```bash
mkdir images
```

2. Add your images to the folder

3. Replace avatar placeholders in HTML:
```html
<!-- Replace this: -->
<div class="avatar-placeholder">MAT</div>

<!-- With this: -->
<img src="images/abdullah.jpg" alt="Muhammad Abdullah Tariq">
```

4. Add CSS for image styling:
```css
.member-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

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

Replace the CTA box with:

```html
<form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" placeholder="Your Name" required>
    <input type="email" name="email" placeholder="Your Email" required>
    <textarea name="message" placeholder="Your Message" required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

Add CSS styling:

```css
.contact-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid var(--border-color);
    background: var(--bg-darker);
    color: var(--text-primary);
}
```

### SEO Optimization

The site already includes:
- Meta descriptions
- Semantic HTML structure
- Proper heading hierarchy
- Alt text placeholders

To improve further:

1. Add Open Graph tags:
```html
<meta property="og:image" content="https://sociris.com/og-image.jpg">
<meta property="og:description" content="Your description">
```

2. Create a `sitemap.xml`:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://sociris.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

3. Create a `robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://sociris.com/sitemap.xml
```

## 📱 Testing

### Browser Testing
Test on:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Responsive Testing
- Desktop: 1920x1080, 1366x768
- Tablet: 768x1024
- Mobile: 375x667, 414x896

### Performance Testing

Use Lighthouse in Chrome DevTools:
```bash
# Or use the CLI
npm install -g lighthouse
lighthouse https://sociris.com
```

## 🐛 Troubleshooting

### Site not showing on GitHub Pages

1. Check repository settings:
   - Go to Settings > Pages
   - Ensure source is set to `main` branch
   - Check if custom domain is configured correctly

2. Verify CNAME file:
```bash
cat CNAME
# Should show: sociris.com
```

3. Check DNS settings with your domain provider:
   - A record pointing to GitHub IPs
   - CNAME record for www subdomain

### Styles not loading

1. Check file paths in HTML
2. Clear browser cache (Ctrl/Cmd + Shift + R)
3. Verify CSS file is uploaded to GitHub

### Mobile menu not working

1. Check JavaScript console for errors
2. Verify script.js is loaded correctly
3. Test on different devices/browsers

## 🚀 Performance Tips

1. **Optimize images**: Use WebP format and compress
2. **Enable caching**: Add headers in GitHub Pages settings
3. **Minify CSS/JS**: Use tools like:
   ```bash
   # Install minifiers
   npm install -g csso-cli uglify-js
   
   # Minify files
   csso style.css -o style.min.css
   uglifyjs script.js -o script.min.js
   ```

4. **Use CDN**: For fonts and libraries

## 📝 Content Updates

### Regular Updates

1. **Team Section**: Add new members as project grows
2. **Services**: Update features as you develop them
3. **Statistics**: Update achievements and metrics
4. **Contact Info**: Keep email and links current

### Blog/News (Future)

To add a blog section:

1. Create a `blog` folder
2. Add markdown files for posts
3. Use Jekyll (GitHub Pages built-in) to generate blog
4. Add blog link to navigation

## 🔐 Security

The site is static (HTML/CSS/JS only), which is inherently secure. However:

1. Don't commit sensitive information (API keys, passwords)
2. Keep dependencies updated
3. Use HTTPS (GitHub Pages provides this automatically)
4. Validate any user input if you add forms

## 📞 Support

For technical issues with the website:
- **Lead**: Muhammad Abdullah Tariq (BB-6792)
- **Email**: info@sociris.com
- **GitHub**: Check repository issues

## 📄 License

Copyright © 2025 SOCIRIS Team. All rights reserved.

This project is part of a Final Year Project at ILMA University, Department of Computer Science / Software Engineering.

---

## Next Steps

1. ✅ Deploy to GitHub Pages
2. ⬜ Add team photos
3. ⬜ Set up contact form
4. ⬜ Add Google Analytics
5. ⬜ Create social media assets
6. ⬜ Set up email marketing
7. ⬜ Add demo video
8. ⬜ Create documentation section
9. ⬜ Set up blog for updates
10. ⬜ Add testimonials section

---

**Built with ❤️ by the SOCIRIS Team**

*Transforming security through AI-powered innovation*
