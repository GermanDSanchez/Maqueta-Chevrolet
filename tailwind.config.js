/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'text-color-header': '#808080',
        'text-color-contact': '#6E6E6E',
        'text-color-title': '#262626',
        'line-color': '#b3b3b3',
        'hover-footer': '#cd9834'
      },
      fontFamily: {
        'roboto': ['Roboto', 'Helvetica'],
        'louis': ['Louis', 'Tahoma']
      }
    },
  },
  plugins: [],
}

