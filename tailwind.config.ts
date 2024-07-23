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
      lato: ['Lato', 'sans-serif'],
      space: ['Space Grotesk', 'sans-serif']
    }
  },
  plugins: []
};
