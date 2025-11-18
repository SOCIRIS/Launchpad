// Theme Toggle Script for SOCIRIS
(function() {
    'use strict';

    const THEME_KEY = 'sociris-theme';
    const LIGHT_THEME = 'light';
    const DARK_THEME = 'dark';

    class ThemeToggle {
        constructor() {
            this.theme = this.getStoredTheme() || this.getPreferredTheme();
            this.init();
        }

        init() {
            // Set initial theme
            this.setTheme(this.theme, false);

            // Setup toggle button
            this.setupToggleButton();

            // Listen for system theme changes
            this.setupMediaQuery();
        }

        getStoredTheme() {
            try {
                return localStorage.getItem(THEME_KEY);
            } catch (e) {
                console.warn('localStorage not available:', e);
                return null;
            }
        }

        getPreferredTheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                return LIGHT_THEME;
            }
            return DARK_THEME;
        }

        setTheme(theme, save = true) {
            // Update HTML attribute
            document.documentElement.setAttribute('data-theme', theme);
            this.theme = theme;

            // Save to localStorage
            if (save) {
                try {
                    localStorage.setItem(THEME_KEY, theme);
                } catch (e) {
                    console.warn('Could not save theme to localStorage:', e);
                }
            }

            // Update toggle button icon
            this.updateToggleIcon();

            // Update logo
            this.updateLogo();

            // Dispatch custom event
            window.dispatchEvent(new CustomEvent('themeChange', { detail: { theme } }));
        }

        updateToggleIcon() {
            const themeToggle = document.getElementById('theme-toggle');
            if (!themeToggle) return;

            const icon = themeToggle.querySelector('[data-lucide]');
            if (!icon) return;

            // Update icon
            if (this.theme === LIGHT_THEME) {
                icon.setAttribute('data-lucide', 'moon');
            } else {
                icon.setAttribute('data-lucide', 'sun');
            }

            // Reinitialize Lucide icons
            if (window.lucide) {
                window.lucide.createIcons();
            }
        }

        updateLogo() {
            // Update navbar logo
            const navLogo = document.getElementById('logo-image');
            if (navLogo) {
                if (this.theme === LIGHT_THEME) {
                    navLogo.src = 'images/sociris-logo-light.jpeg';
                } else {
                    navLogo.src = 'images/sociris-logo-dark.jpeg';
                }
            }

            // Update footer logo
            const footerLogo = document.getElementById('footer-logo');
            if (footerLogo) {
                if (this.theme === LIGHT_THEME) {
                    footerLogo.src = 'images/sociris-logo-light.jpeg';
                } else {
                    footerLogo.src = 'images/sociris-logo-dark.jpeg';
                }
            }
        }

        toggleTheme() {
            const newTheme = this.theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
            this.setTheme(newTheme);
        }

        setupToggleButton() {
            const themeToggle = document.getElementById('theme-toggle');
            if (!themeToggle) return;

            themeToggle.addEventListener('click', () => {
                this.toggleTheme();
            });
        }

        setupMediaQuery() {
            // Only respond to system theme changes if user hasn't set a preference
            if (!this.getStoredTheme()) {
                const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
                
                // Modern browsers
                if (mediaQuery.addEventListener) {
                    mediaQuery.addEventListener('change', (e) => {
                        const newTheme = e.matches ? LIGHT_THEME : DARK_THEME;
                        this.setTheme(newTheme, false);
                    });
                }
                // Legacy browsers
                else if (mediaQuery.addListener) {
                    mediaQuery.addListener((e) => {
                        const newTheme = e.matches ? LIGHT_THEME : DARK_THEME;
                        this.setTheme(newTheme, false);
                    });
                }
            }
        }
    }

    // Initialize theme toggle when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            window.themeToggle = new ThemeToggle();
        });
    } else {
        window.themeToggle = new ThemeToggle();
    }

    // Expose theme utilities globally
    window.SOCIRIS = window.SOCIRIS || {};
    window.SOCIRIS.theme = {
        get current() {
            return document.documentElement.getAttribute('data-theme') || DARK_THEME;
        },
        set(theme) {
            if (window.themeToggle) {
                window.themeToggle.setTheme(theme);
            }
        },
        toggle() {
            if (window.themeToggle) {
                window.themeToggle.toggleTheme();
            }
        }
    };

})();
