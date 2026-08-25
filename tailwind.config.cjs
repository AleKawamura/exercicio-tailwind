const plugin = require('tailwindcss/plugin');

module.exports = {
    darkMode: 'class',
    content: [
        "./pages/**/*.{html,php,js,jsx,ts,tsx,vue}",
        "./src/**/*.{html,js,jsx,ts,tsx,php,vue}",
        "./backend/**/*.{html,js,jsx,ts,tsx,php,vue}",
        "./src/API/**/*.{js,php}",
        "./src/PHP/**/*.{php,js}",
        "./style/**/*.{css,html,php,js}",
        "./**/*.php"
    ],
    safelist: [
        'size-8', 'size-10', 'size-12',
        'no-scrollbar',
        'prose', 'prose-invert', 'dark:prose-invert',
        'bg-primary/10', 'bg-background-dark/50'
    ],
    theme: {
        extend: {
            colors: {
                primary: '#0d59f2',
                'background-light': '#f5f6f8',
                'background-dark': '#101622',
                // semantic colors used across the app
                success: '#10B981',
                warning: '#F59E0B',
            },
            fontFamily: {
                display: ['Lexend', 'sans-serif'],
            },
            borderRadius: {
                DEFAULT: '0.25rem',
                lg: '0.5rem',
                xl: '0.75rem',
                full: '9999px',
            },
        },
    },
    plugins: [
        // custom utilities for fixed footer across pages
        plugin(function ({ addBase, addUtilities }) {
            addBase({
                ':root': {
                    '--footer-height': '72px'
                }
            });
            addUtilities({
                '.content-padding-for-footer': {
                    'padding-bottom': 'var(--footer-height) !important'
                },
                '.fixed-footer': {
                    position: 'fixed',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    'z-index': '40'
                },
                '.fixed-footer .footer-inner': {
                    'max-width': '1440px',
                    margin: '0 auto'
                }
            }, { variants: ['responsive'] });
        }),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries')
    ],
}