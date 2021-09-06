module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1/9': '11.11%',
        '2/9': '22.22%',
        '3/9': '33.33%',
        '4/9': '44.44%',
        '5/9': '55.55%',
        '6/9': '66.66%',
        '7/9': '77.77%',
      },
      colors: {
        'nav-left': '#262626',
      },
      zIndex: {
        '10000': 10000,
      },
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
