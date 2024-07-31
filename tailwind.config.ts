/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: 'url("/images/hero.jpeg")'
      }
    },
    fontFamily: {
      clash: ['Clash Display', 'sans-serif']
    }
  },
  plugins: []
};
