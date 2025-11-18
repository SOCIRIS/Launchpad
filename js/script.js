// SOCIRIS - Main JavaScript
(function() {
    'use strict';

    // ===== Mobile Menu Toggle =====
    class MobileMenu {
        constructor() {
            this.toggle = document.getElementById('mobile-menu-toggle');
            this.menu = document.getElementById('nav-menu');
            this.links = document.querySelectorAll('.nav-link');
            
            if (this.toggle && this.menu) {
                this.init();
            }
        }

        init() {
            // Toggle menu
            this.toggle.addEventListener('click', () => {
                this.toggleMenu();
            });

            // Close menu when clicking links
            this.links.forEach(link => {
                link.addEventListener('click', () => {
                    this.closeMenu();
                });
            });

            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!this.toggle.contains(e.target) && !this.menu.contains(e.target)) {
                    this.closeMenu();
                }
            });

            // Close menu on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape') {
                    this.closeMenu();
                }
            });
        }

        toggleMenu() {
            this.toggle.classList.toggle('active');
            this.menu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (this.menu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        }

        closeMenu() {
            this.toggle.classList.remove('active');
            this.menu.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // ===== Navbar Scroll Effect =====
    class NavbarScroll {
        constructor() {
            this.navbar = document.getElementById('navbar');
            if (this.navbar) {
                this.init();
            }
        }

        init() {
            let lastScroll = 0;
            
            window.addEventListener('scroll', () => {
                const currentScroll = window.pageYOffset;
                
                // Add scrolled class when scrolling down
                if (currentScroll > 100) {
                    this.navbar.classList.add('scrolled');
                } else {
                    this.navbar.classList.remove('scrolled');
                }
                
                lastScroll = currentScroll;
            });
        }
    }

    // ===== Smooth Scrolling =====
    class SmoothScroll {
        constructor() {
            this.init();
        }

        init() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    const href = anchor.getAttribute('href');
                    
                    // Skip if it's just "#"
                    if (href === '#') {
                        e.preventDefault();
                        return;
                    }
                    
                    const target = document.querySelector(href);
                    
                    if (target) {
                        e.preventDefault();
                        const offsetTop = target.offsetTop - 80;
                        
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                });
            });
        }
    }

    // ===== Active Nav Link Highlighting =====
    class ActiveNavLink {
        constructor() {
            this.sections = document.querySelectorAll('section[id]');
            this.navLinks = document.querySelectorAll('.nav-link');
            
            if (this.sections.length > 0) {
                this.init();
            }
        }

        init() {
            window.addEventListener('scroll', () => {
                this.highlightNavLink();
            });
        }

        highlightNavLink() {
            const scrollY = window.pageYOffset;
            
            this.sections.forEach(section => {
                const sectionHeight = section.offsetHeight;
                const sectionTop = section.offsetTop - 100;
                const sectionId = section.getAttribute('id');
                const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
                
                if (navLink && scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    this.navLinks.forEach(link => link.classList.remove('active'));
                    navLink.classList.add('active');
                }
            });
        }
    }

    // ===== Intersection Observer for Animations =====
    class ScrollAnimations {
        constructor() {
            this.init();
        }

        init() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Observe elements with fade-in class
            const animatedElements = document.querySelectorAll('.fade-in');
            animatedElements.forEach(el => observer.observe(el));

            // Add fade-in class to specific elements
            const elementsToAnimate = document.querySelectorAll(`
                .feature-card,
                .quick-link-card,
                .stat-card,
                .service-card,
                .use-case,
                .team-member,
                .problem-item,
                .solution-item,
                .tech-layer,
                .capability
            `);

            elementsToAnimate.forEach((el, index) => {
                el.classList.add('fade-in');
                el.style.transitionDelay = `${index * 0.05}s`;
                observer.observe(el);
            });
        }
    }

    // ===== Back to Top Button =====
    class BackToTop {
        constructor() {
            this.button = document.getElementById('back-to-top');
            if (this.button) {
                this.init();
            }
        }

        init() {
            // Show/hide button on scroll
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 500) {
                    this.button.classList.add('visible');
                } else {
                    this.button.classList.remove('visible');
                }
            });

            // Scroll to top on click
            this.button.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }
    }

    // ===== Hero Parallax Effect =====
    class HeroParallax {
        constructor() {
            this.hero = document.querySelector('.hero-background');
            if (this.hero) {
                this.init();
            }
        }

        init() {
            window.addEventListener('scroll', () => {
                const scrolled = window.pageYOffset;
                this.hero.style.transform = `translateY(${scrolled * 0.5}px)`;
            });
        }
    }

    // ===== Copy Email to Clipboard =====
    class EmailCopy {
        constructor() {
            this.init();
        }

        init() {
            const emailElements = document.querySelectorAll('[href^="mailto:"]');
            
            emailElements.forEach(element => {
                // Add click handler for copying
                element.addEventListener('click', (e) => {
                    if (e.shiftKey) {
                        e.preventDefault();
                        const email = element.getAttribute('href').replace('mailto:', '');
                        this.copyToClipboard(email, element);
                    }
                });

                // Add tooltip
                element.title = 'Click to email | Shift+Click to copy';
            });
        }

        copyToClipboard(text, element) {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(text).then(() => {
                    this.showCopiedFeedback(element);
                }).catch(err => {
                    console.error('Failed to copy:', err);
                });
            } else {
                // Fallback for older browsers
                const textarea = document.createElement('textarea');
                textarea.value = text;
                textarea.style.position = 'fixed';
                textarea.style.opacity = '0';
                document.body.appendChild(textarea);
                textarea.select();
                
                try {
                    document.execCommand('copy');
                    this.showCopiedFeedback(element);
                } catch (err) {
                    console.error('Failed to copy:', err);
                }
                
                document.body.removeChild(textarea);
            }
        }

        showCopiedFeedback(element) {
            const originalText = element.textContent;
            element.textContent = 'Copied!';
            element.style.color = 'var(--success)';
            
            setTimeout(() => {
                element.textContent = originalText;
                element.style.color = '';
            }, 2000);
        }
    }

    // ===== External Links Handler =====
    class ExternalLinks {
        constructor() {
            this.init();
        }

        init() {
            document.querySelectorAll('a[href^="http"]').forEach(link => {
                const url = new URL(link.href);
                
                // Only add target="_blank" for external links
                if (url.hostname !== window.location.hostname) {
                    link.setAttribute('target', '_blank');
                    link.setAttribute('rel', 'noopener noreferrer');
                }
            });
        }
    }

    // ===== Form Validation (if needed) =====
    class FormValidation {
        constructor() {
            this.forms = document.querySelectorAll('form[data-validate]');
            if (this.forms.length > 0) {
                this.init();
            }
        }

        init() {
            this.forms.forEach(form => {
                form.addEventListener('submit', (e) => {
                    if (!this.validateForm(form)) {
                        e.preventDefault();
                    }
                });
            });
        }

        validateForm(form) {
            let isValid = true;
            const inputs = form.querySelectorAll('[required]');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    this.showError(input, 'This field is required');
                    isValid = false;
                } else if (input.type === 'email' && !this.validateEmail(input.value)) {
                    this.showError(input, 'Please enter a valid email');
                    isValid = false;
                } else {
                    this.clearError(input);
                }
            });
            
            return isValid;
        }

        validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(email);
        }

        showError(input, message) {
            const errorElement = input.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = message;
            }
            input.classList.add('error');
        }

        clearError(input) {
            const errorElement = input.parentElement.querySelector('.error-message');
            if (errorElement) {
                errorElement.textContent = '';
            }
            input.classList.remove('error');
        }
    }

    // ===== Performance Monitoring =====
    class PerformanceMonitor {
        constructor() {
            if ('performance' in window) {
                this.init();
            }
        }

        init() {
            window.addEventListener('load', () => {
                const perfData = window.performance.timing;
                const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
                
                console.log(`%c⚡ SOCIRIS Performance`, 'color: #6366f1; font-size: 16px; font-weight: bold;');
                console.log(`Page loaded in ${pageLoadTime}ms`);
                
                // Report to analytics if available
                if (window.gtag) {
                    window.gtag('event', 'timing_complete', {
                        name: 'load',
                        value: pageLoadTime,
                        event_category: 'Performance'
                    });
                }
            });
        }
    }

    // ===== Console Branding =====
    class ConsoleBranding {
        constructor() {
            this.init();
        }

        init() {
            console.log('%c🛡️ SOCIRIS', 'color: #6366f1; font-size: 24px; font-weight: bold;');
            console.log('%cTransforming security through AI-powered innovation', 'color: #94a3b8; font-size: 14px;');
            console.log('%cInterested in joining our team? Contact us at info@sociris.com', 'color: #cbd5e1; font-size: 12px;');
            console.log('%c\nDeveloped with ❤️ by the SOCIRIS Team', 'color: #8b5cf6; font-size: 12px;');
        }
    }

    // ===== Initialize All Features =====
    class App {
        constructor() {
            this.init();
        }

        init() {
            // Initialize all features
            new MobileMenu();
            new NavbarScroll();
            new SmoothScroll();
            new ActiveNavLink();
            new ScrollAnimations();
            new BackToTop();
            new HeroParallax();
            new EmailCopy();
            new ExternalLinks();
            new FormValidation();
            new PerformanceMonitor();
            new ConsoleBranding();

            // Initialize Lucide icons
            if (window.lucide) {
                window.lucide.createIcons();
            }

            // Add loaded class to body
            document.body.classList.add('loaded');
        }
    }

    // Initialize app when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new App();
        });
    } else {
        new App();
    }

    // Expose utilities globally
    window.SOCIRIS = window.SOCIRIS || {};
    window.SOCIRIS.version = '2.0.0';
    window.SOCIRIS.initialized = true;

})();
