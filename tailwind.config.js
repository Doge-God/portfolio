/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-mono' : ["'Roboto Mono'",'monospace'],
        'raleway' : ["'Raleway'",'sans-serif']
      },

      colors: {
        'ui-pastel-blue' : '#b0b8e8',
        'ui-pastel-pink' : '#e7b0b8',
        'ui-back-space-blue' : '#202231'
      }
    },
  },
  plugins: [],
}
