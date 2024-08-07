/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./src/**/*.js",
    "./**/*.html"
  ],
  theme: {
    extend: {
      colors: {
        'main-sky-blue': '#5AA9E6',
        'sky-blue-darker': '#59a0d6',
        'main-white-ish': '#F7F7F7',
        'active-gray-ish': '#e8e8e8',
        'gray-dark': '#a4a3a3',
      }
    },
  },
  plugins: [],
}

