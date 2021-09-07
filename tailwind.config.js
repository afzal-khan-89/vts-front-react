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
        'nav-left-1':'#381111',
        'warmGray-50':'#FAFAF9',
        'warmGray-100':'#F5F5F4',
        'warmGray-200':'#E7E5E4',
        'warmGray-300':'#D6D3D1',
        'warmGray-400':'#A8A29E',

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
