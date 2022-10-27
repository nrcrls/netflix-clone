/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('./src/assets/sample_banner.jpg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-textshadow'),
    require('tailwind-scrollbar')
  ],
}
