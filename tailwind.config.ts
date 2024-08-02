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
      clash: ['General Sans', 'sans-serif']
    }
  },
  plugins: []
};
