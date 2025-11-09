<div align="center">

<img src="images/sociris-wide-logo-dark.jpeg" alt="SOCIRIS Logo" width="500">

# SOCIRIS Website - Updated Version

**AI-Powered Intrusion Detection, Prevention & Surveillance System**

A modern, responsive landing page for SOCIRIS - showcasing our revolutionary security solution for Pakistan.

[![Live Site](https://img.shields.io/badge/Live-sociris.com-6366f1?style=for-the-badge)](https://sociris.com)
[![GitHub](https://img.shields.io/badge/GitHub-SOCIRIS-181717?style=for-the-badge&logo=github)](https://github.com/SOCIRIS)

</div>

---

## 🎯 What's New in This Update

### ✅ Symmetric Layout Improvements

1. **Services Section** - Now features **7 core components** (up from 6)
   - Added "Digital Forensics & Investigation" as the 7th service
   - Centered 7th item for perfect symmetry
   - Updated hero stats to reflect "7 Core Security Components"

2. **Use Cases Section** - **8 items in 4x2 grid** (already symmetric)
   - Government, Education, Businesses, Residential
   - Industrial, Healthcare, Retail, Logistics
   - Perfect 4-column layout on desktop

3. **Technology Architecture** - **8 layers with card-based design**
   - Now uses attractive card/box layout instead of plain text
   - Each layer has expandable capability cards
   - Consistent hover effects and visual hierarchy
   - Added 8th layer: "Integration & APIs"
   - 4-column highlights grid for key capabilities

4. **Team Section** - **Centered layout structure**
   - Row 1: Muhammad Abdullah (centered)
   - Row 2: Yaseen (left), Huzaifa (center), Asad (right)
   - Perfect symmetry with Huzaifa prominently centered

---

## 🎨 Brand Assets

The SOCIRIS website now features our official logo in multiple formats:

### Logo Files Available:
```
images/
├── sociris-logo-dark.jpeg          # Square logo (dark theme)
├── sociris-logo-light.jpeg         # Square logo (light theme)
├── sociris-wide-logo-dark.jpeg     # Wide logo (dark theme) - Used in navbar
└── sociris-wide-logo-light.jpeg    # Wide logo (light theme)
```

### Logo Usage:
- **Navbar & Footer**: Wide logo (dark theme)
- **Favicon**: Square logo
- **Social Media**: Wide logo for Open Graph tags
- All logos optimized for web performance

---

## 🚀 Quick Start

### Local Setup

1. Navigate to your project directory:
```bash
cd ~/SOCIRIS/Launchpad
```

2. Copy the updated files to your repository

3. Test locally:
```bash
python3 -m http.server 8000
```

4. Open: `http://localhost:8000`

### GitHub Pages Deployment

```bash
git add .
git commit -m "Update to symmetric layout with enhanced tech section"
git push origin main
```

Your site will be live at: **https://sociris.com**

---

## 📁 File Structure

```
Launchpad/
├── index.html      # Updated with 7 services, 8 use cases, 8 tech layers
├── style.css       # Enhanced with card layouts and symmetric grids  
├── script.js       # Interactive features (unchanged)
├── CNAME           # Custom domain configuration
└── README.md       # This file
```

---

## ✨ Key Features

### Symmetric Design Principles
- **Services Grid**: 3x3 layout with centered 7th item
- **Use Cases Grid**: 4x2 perfect grid (8 items)
- **Technology Grid**: 2x4 architecture layers + 4-column highlights
- **Team Grid**: Centered leadership with symmetric second row

### Visual Improvements
- Card-based technology architecture (not just text!)
- Consistent hover effects across all sections
- Gradient accents and border animations
- Responsive breakpoints for mobile/tablet

---

## 📄 Content Sections

### 1. Hero Section
- Updated stats: "7 Core Security Components"
- Eye-catching gradient text effects
- Animated background

### 2. About SOCIRIS
- Vision and mission
- 4 feature cards (Economic Accessibility, Industry Coverage, AI Agent, Predictive Analytics)

### 3. Services (7 Core Components) ⭐ UPDATED
1. Smart Surveillance System
2. Access Control & Facial Recognition
3. Automated Security Audits
4. Asset Tracking & Analysis
5. Threat Intelligence & Response
6. Centralized Security Dashboard
7. **Digital Forensics & Investigation** ⭐ NEW

### 4. Solutions
- Problem/Solution comparison
- 8 use case cards in 4x2 grid:
  - Government, Education, Business, Residential
  - Industrial, Healthcare, Retail, Logistics

### 5. Technology & Architecture ⭐ COMPLETELY REDESIGNED
**8 Technology Layers in Card Format:**
1. 🤖 **Artificial Intelligence Layer**
   - Advanced Computer Vision
   - Ensemble Threat Detection
   - Intelligent Decision Engine

2. ⚡ **Real-Time Data Processing**
   - Event Streaming Platform
   - Big Data Analytics Engine
   - High-Performance Cache

3. 📊 **Monitoring & Intelligence**
   - Visualization & Reporting
   - Log Analytics Platform
   - Search & Data Discovery

4. 🔒 **Security Operations Center**
   - Intrusion Detection System
   - Incident Response Platform
   - Threat Intelligence Hub
   - Vulnerability Management
   - Digital Forensics Suite
   - Observable Analysis Engine

5. 🔄 **Automation & Orchestration**
   - Security Orchestration (SOAR)
   - Infrastructure Automation
   - Change Monitoring System

6. ☁️ **Cloud-Native Infrastructure**
   - Container Orchestration
   - Microservices Architecture
   - High Availability Design

7. 📍 **IoT & Physical Layer**
   - GPS Tracking Platform
   - Smart Sensor Network
   - Network Discovery Tools

8. 🌐 **Integration & APIs** ⭐ NEW
   - RESTful API Gateway
   - Webhook Integration
   - Multi-Protocol Support

**4 Core Technical Capabilities (Bottom Grid):**
- 🚀 Scalable by Design
- ⚡ Real-Time Processing
- 🔐 Enterprise Security
- 🌐 Cloud-Native

### 6. Team ⭐ UPDATED LAYOUT
**Row 1 (Centered):**
- Muhammad Abdullah Tariq - Project Lead

**Row 2 (Three members with Huzaifa centered):**
- Yaseen Iqbal (Left) - IoT Engineer
- Muhammad Huzaifa Tariq (Center) - AI Engineer ⭐
- Muhammad Asad (Right) - Security Researcher

### 7. Contact
- 3-column contact details
- **Social Links Section** ⭐ NEW
  - LinkedIn Company Page
  - GitHub Organization
  - Official Website
  - Interactive hover effects with brand colors
- Call-to-action box

---

## 🎨 CSS Changes Summary

### New Styles Added:
```css
/* Services - 7 items with centered last item */
.services-grid {
    grid-template-columns: repeat(3, 1fr);
}
.service-card:nth-child(7) {
    grid-column: 2 / 3; /* Center the 7th item */
}

/* Use Cases - Perfect 4x2 grid */
.use-cases-grid {
    grid-template-columns: repeat(4, 1fr);
}

/* Technology Architecture - Card-based layout */
.tech-architecture {
    grid-template-columns: repeat(2, 1fr);
}
.architecture-layer {
    /* Card styling with hover effects */
}

/* Technology Highlights - 4-column grid */
.tech-highlights {
    grid-template-columns: repeat(4, 1fr);
}

/* Team - Centered layout */
.team-member.team-lead {
    grid-column: 2 / 3; /* Abdullah centered */
}
.team-member.team-center {
    grid-column: 2 / 3; /* Huzaifa centered */
}
```

### Responsive Breakpoints:
- **Desktop (>968px)**: Full symmetric grids
- **Tablet (768-968px)**: 2-column layouts
- **Mobile (<640px)**: Single column stacks

---

## 📱 Responsive Design

All sections maintain symmetry across breakpoints:

### Desktop (1200px+)
- Services: 3x3 grid (7th centered)
- Use Cases: 4x2 grid
- Technology: 2x4 grid
- Team: 3-column with centered positions

### Tablet (768-968px)
- Services: 2-column
- Use Cases: 2x4 grid
- Technology: 1-column stacked
- Team: 2-column with centered special items

### Mobile (< 640px)
- All sections: Single column
- Maintains card styling and hover effects

---

## 🔧 Technical Details

### Grid Systems Used:
```css
/* Services: 3-column with special positioning */
display: grid;
grid-template-columns: repeat(3, 1fr);

/* Use Cases: Fixed 4-column */
display: grid;
grid-template-columns: repeat(4, 1fr);

/* Technology: 2-column architecture layers */
display: grid;
grid-template-columns: repeat(2, 1fr);

/* Highlights: 4-column even distribution */
display: grid;
grid-template-columns: repeat(4, 1fr);
```

### Card Hover Effects:
- Translate Y: -8px to -10px
- Border color transitions to primary
- Shadow glow effects
- Top border animations

---

## 🚀 Deployment Checklist

- [x] Update hero stats to "7 Core"
- [x] Add 7th service component
- [x] Ensure 8 use cases display properly
- [x] Convert technology section to cards
- [x] Add 8th technology layer
- [x] Fix team layout with centered positions
- [x] Add 4-column highlights grid
- [x] Test responsive breakpoints
- [x] Verify all hover effects work
- [x] Check mobile menu functionality

---

## 📊 Section Summary

| Section | Items | Layout | Status |
|---------|-------|--------|--------|
| Services | 7 | 3x3 (7th centered) | ✅ Symmetric |
| Use Cases | 8 | 4x2 | ✅ Symmetric |
| Technology Layers | 8 | 2x4 | ✅ Symmetric |
| Tech Highlights | 4 | 1x4 | ✅ Symmetric |
| Team | 4 | Special centered | ✅ Symmetric |

---

## 🎯 Design Philosophy

### Symmetry Principles Applied:
1. **Even Numbers**: Use 2, 4, 6, 8 for perfect grids
2. **Odd with Center**: Use 3, 5, 7 with middle item centered
3. **Responsive Balance**: Maintain visual harmony on all screens
4. **Consistent Spacing**: Uniform gaps between all grid items

### Visual Hierarchy:
- **Level 1**: Section headers with gradient labels
- **Level 2**: Card containers with borders
- **Level 3**: Capability/feature items within cards
- **Level 4**: Supporting text and icons

---

## 🐛 Known Issues & Fixes

### Issue: Use cases not showing all 8
**Fix**: Updated CSS to ensure 4-column grid at desktop breakpoint

### Issue: Technology section was text-only
**Fix**: Converted to card-based architecture with hover effects

### Issue: Team members not properly centered
**Fix**: Applied grid-column positioning for centered items

---

## 📞 Support & Contact

### For Website Issues
- **Technical Lead**: Muhammad Abdullah Tariq (BB-6792)
- **Email**: info@sociris.com

---

## 📝 Change Log

### Version 2.2 (Latest Update - Logo Integration)
- ✅ Integrated official SOCIRIS logos (square and wide formats)
- ✅ Replaced emoji logo with professional brand images
- ✅ Added favicon using square logo
- ✅ Added Open Graph and Twitter Card meta tags with logo
- ✅ Responsive logo sizing for mobile, tablet, and desktop
- ✅ Logo showcase in README with brand assets documentation

### Version 2.1 (Previous Update)
- ✅ Integrated LinkedIn Company Page
- ✅ Integrated GitHub Organization
- ✅ Added "Connect With Us" section with social cards
- ✅ Brand-specific hover effects (LinkedIn blue, GitHub dark, SOCIRIS cyan)
- ✅ Responsive social grid (3-column desktop, 2-column tablet, 1-column mobile)

### Version 2.0 (Previous Update)
- ✅ Added 7th service component (Digital Forensics)
- ✅ Redesigned Technology Architecture with cards
- ✅ Added 8th technology layer (Integration & APIs)
- ✅ Fixed team layout for perfect symmetry
- ✅ Ensured all 8 use cases display in 4x2 grid
- ✅ Added 4-column highlights grid
- ✅ Enhanced hover effects across all cards
- ✅ Improved responsive breakpoints

### Version 1.0 (Original)
- Initial website launch
- 6 services, basic layout
- Text-based technology section

---

## 🙏 Acknowledgments

- **ILMA University** for academic support
- **Dr. Nabila Sehito** for supervision
- **Design Inspiration**: Modern SaaS landing pages

---

<div align="center">

**Built with ❤️ by the SOCIRIS Team**

*Transforming security through AI-powered innovation*

**Now with Perfect Symmetry! 🎯**

</div>
