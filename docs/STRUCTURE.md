# SOCIRIS Website - Complete Rebuild

## 🎉 What's New

This is a **complete redesign** of the SOCIRIS website with:

✅ **Multi-page structure** - No more endless scrolling  
✅ **Light/Dark mode toggle** - Automatic theme switching with localStorage persistence  
✅ **Professional icons** - Lucide icons instead of emojis  
✅ **Mobile-first responsive** - Perfect on all devices  
✅ **Better SEO** - Comprehensive meta tags, structured data, Open Graph  
✅ **Modern UI/UX** - Smooth animations, better navigation, accessible design  
✅ **Performance optimized** - Lazy loading, optimized assets  

---

## 📁 Project Structure

```
sociris-website/
├── index.html                 # Home page
├── about.html                 # About SOCIRIS
├── services.html              # 7 Core Services
├── solutions.html             # Solutions & Use Cases
├── technology.html            # Tech Architecture
├── team.html                  # Team Profiles
├── contact.html               # Contact Information
├── css/
│   └── style.css             # Main stylesheet with theme support
├── js/
│   ├── theme-toggle.js       # Theme switcher
│   └── script.js             # Main JavaScript
├── images/
│   ├── sociris-logo-dark.jpeg
│   ├── sociris-logo-light.jpeg
│   ├── sociris-wide-logo-dark.jpeg
│   └── sociris-wide-logo-light.jpeg
└── CNAME                      # Domain configuration
```

---

## 🚀 Quick Start

### 1. Download All Files

You can download individual files or use this command to get everything:

```bash
# Navigate to your SOCIRIS directory
cd ~/SOCIRIS/Launchpad

# Backup current files
mkdir -p BACKUP_$(date +%Y%m%d)
cp -r *.html *.css *.js images/ BACKUP_$(date +%Y%m%d)/ 2>/dev/null || true

# Copy new files (you'll need to download them first)
# Place downloaded files in appropriate directories
```

### 2. Test Locally

```bash
# Simple Python server
python3 -m http.server 8000

# Or use PHP
php -S localhost:8000

# Or use Node.js http-server
npx http-server -p 8000
```

Visit: `http://localhost:8000`

### 3. Deploy to GitHub Pages

```bash
# Add all new files
git add .

# Commit changes
git commit -m "Complete website redesign with multi-page structure and theme toggle"

# Push to GitHub
git push origin main
```

Your site will be live at `https://sociris.com` in a few minutes!

---

## 🎨 Theme System

### How It Works

The website now supports both **light** and **dark** themes:

- **Default**: Follows system preference
- **Toggle**: Click the sun/moon icon in navigation
- **Persistence**: Theme choice saved to localStorage
- **Automatic**: Switches logos and colors seamlessly

### Theme Variables

All theme colors are defined in CSS custom properties in `css/style.css`:

```css
:root {
    /* Dark theme (default) */
    --bg-primary: #0f172a;
    --text-primary: #f8fafc;
    /* ... */
}

[data-theme="light"] {
    /* Light theme overrides */
    --bg-primary: #ffffff;
    --text-primary: #0f172a;
    /* ... */
}
```

---

## 📱 Mobile Responsiveness

### Breakpoints

- **Desktop**: 969px+
- **Tablet**: 640px - 968px
- **Mobile**: < 640px
- **Small Mobile**: < 375px

### Mobile Features

- Hamburger menu with smooth animation
- Touch-friendly buttons (min 44px)
- Optimized typography scaling
- Collapsible sections
- Bottom navigation consideration

---

## 🔍 SEO Improvements

### What's Included

1. **Meta Tags**
   - Proper title, description, keywords
   - Open Graph for social sharing
   - Twitter Cards
   - Canonical URLs

2. **Structured Data**
   - Organization schema
   - Contact information
   - Social profiles

3. **Performance**
   - Optimized images
   - Lazy loading
   - Efficient CSS/JS

4. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Focus indicators
   - Screen reader support

---

## 🛠️ Customization

### Changing Colors

Edit `css/style.css`:

```css
:root {
    --primary-color: #6366f1;  /* Main brand color */
    --secondary-color: #06b6d4; /* Secondary accent */
    /* ... */
}
```

### Adding New Pages

1. Copy `index.html` as template
2. Update navigation links
3. Change content sections
4. Keep footer and scripts

### Modifying Team Profiles

Edit `team.html` and update team member information.

---

## 🔗 Important Links

### Update These Links

1. **Request Demo Button**
   - Currently: `https://www.linkedin.com/company/sociris/`
   - Alternative: `mailto:info@sociris.com`

2. **Social Links**
   - LinkedIn: `https://www.linkedin.com/company/sociris/`
   - GitHub: `https://github.com/SOCIRIS`
   - Email: `info@sociris.com`

3. **Team Profiles**
   - Muhammad Abdullah: Update with your profiles
   - Other team members: Add their details

---

## 📊 Analytics Integration

### Google Analytics (Optional)

Add before closing `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🐛 Troubleshooting

### Theme Not Switching

- Check browser console for errors
- Clear localStorage: `localStorage.clear()`
- Ensure `theme-toggle.js` is loaded

### Icons Not Showing

- Verify Lucide CDN is accessible
- Check `lucide.createIcons()` is called
- Look for network errors in console

### Mobile Menu Stuck

- Check `mobile-menu-toggle` ID exists
- Verify JavaScript is loaded
- Clear browser cache

### Images Not Loading

- Check file paths in HTML
- Verify images exist in `images/` folder
- Check file permissions

---

## 📝 Content Updates

### Homepage (`index.html`)
- Hero section with 4 stats
- Features overview (4 cards)
- Quick links to other pages
- CTA section

### About (`about.html`)
- Vision and mission
- Team intro
- Company values
- Key achievements

### Services (`services.html`)
- 7 core components
- Detailed descriptions
- Feature lists
- Tech details

### Solutions (`solutions.html`)
- Problem/solution comparison
- 8 industry use cases
- Benefits overview
- Customer stories

### Technology (`technology.html`)
- 8-layer architecture
- Tech stack details
- Integration capabilities
- Performance metrics

### Team (`team.html`)
- Leadership profiles
- Engineering team
- Academic supervision
- Contact details

### Contact (`contact.html`)
- Contact form
- Email/phone
- Office location
- Social media links

---

## 🎯 Next Steps

1. **Download Files**: Get all HTML, CSS, and JS files
2. **Replace Images**: Add proper team photos
3. **Update Content**: Customize text for your needs
4. **Test Locally**: Check all pages and links
5. **Deploy**: Push to GitHub Pages
6. **Monitor**: Check Google Analytics and Search Console

---

## 💡 Tips & Best Practices

### Performance
- Use WebP images when possible
- Minify CSS/JS for production
- Enable gzip compression
- Use CDN for assets

### SEO
- Update meta descriptions for each page
- Add alt text to all images
- Create XML sitemap
- Submit to Google Search Console

### Maintenance
- Keep dependencies updated
- Test on multiple devices
- Monitor broken links
- Regular content updates

---

## 📧 Support

For questions or issues:
- **Email**: muhammad.atx@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/matx104/
- **GitHub**: https://github.com/matx104

---

## 📜 License

© 2025 SOCIRIS. All rights reserved.

A Final Year Project at ILMA University, Karachi, Pakistan.

---

**Built with ❤️ by Muhammad Abdullah Tariq**

Last Updated: November 18, 2025
Version: 2.0.0
