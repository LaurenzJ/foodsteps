/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green': '#a9bc93'
      }
    },
    fontFamily: {
      'btn': ['Inter'],
      'h1': ['Inter'],
      'sans': 'Hoefler Text'
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
