/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '639px'},     // Écran extra-petit (max-width: 639px)
        'tablette': {'min': '640px', 'max': '767px'},  // Écran petit (min-width: 640px, max-width: 767px)
        'desktop': {'min': '768px', 'max': '1023px'}, // Écran moyen (min-width: 768px, max-width: 1023px)
        'ecranLarge': {'min': '1024px', 'max': '1279px'},// Écran large (min-width: 1024px, max-width: 1279px)
        'ecranTresLarge': {'min': '1280px'},               // Écran extra-large (min-width: 1280px)
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        main: {

          "primary": "#008037",

          "secondary": "#2E59A6",

          "accent": "#378BC8",

          "neutral": "#41BEEA",

          "base-100": "#1d232a",

          "info": "#3abff8",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
}

