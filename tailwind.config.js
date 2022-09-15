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
        'ui-pastel-purple' : '#beb0e8',
        'ui-pastel-pink' : '#f2bde8',
        'ui-back-space-blue' : '#202231',
        'ui-back-frost-blue' : '#4a5284',
        'ui-back-dark-blue' : '#252946'
      }
    },
  },
  plugins: [],
}
