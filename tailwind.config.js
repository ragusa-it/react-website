/** @type {import('tailwindcss').Config} */
// --- tailwind.config.js ---
// This is the configuration file for Tailwind CSS.

module.exports = {
  // Enable dark mode using a class strategy.
  // When the 'dark' class is present on the <html> element,
  // dark mode styles (e.g., `dark:bg-black`) will be applied.
  darkMode: 'class',
  
  // The 'content' array tells Tailwind which files to scan for class names.
  // This is crucial for tree-shaking (removing unused CSS) in production.
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all JS, JSX, TS, and TSX files in the src folder
    "./public/index.html" // Include HTML file for any classes used there
  ],
  theme: {
    // You can extend the default Tailwind theme here.
    // For example, you could add custom colors, fonts, or breakpoints.
    extend: {
      // Add performance-optimized animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px rgba(74, 222, 128, 0.5), 0 0 20px rgba(74, 222, 128, 0.3), 0 0 30px rgba(74, 222, 128, 0.2)',
          },
          '100%': {
            boxShadow: '0 0 10px rgba(74, 222, 128, 0.8), 0 0 40px rgba(74, 222, 128, 0.5), 0 0 60px rgba(74, 222, 128, 0.3)',
          },
        },
        glowPulse: {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(74, 222, 128, 0.8), 0 0 20px rgba(74, 222, 128, 0.5), 0 0 30px rgba(74, 222, 128, 0.3)',
          },
          '50%': {
            textShadow: '0 0 20px rgba(74, 222, 128, 1), 0 0 40px rgba(74, 222, 128, 0.8), 0 0 60px rgba(74, 222, 128, 0.5)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  // You can add Tailwind plugins here.
  plugins: [],
  // Configure safelist for dynamically generated classes
  safelist: [
    'theme-transition',
    'fancy-cursor-dot',
    'link-hover',
    'text-hover',
    'resize-hover'
  ]
}