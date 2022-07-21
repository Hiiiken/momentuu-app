// ./tailwind.config.js
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'p': '#E37871',
        's': '#152E58',
        't': '#474D57',
        'h': '#1E1E1E',
        'lt': '#9AA5B8',
        'acc-1': '#F6F4FC',
        'acc-2': '#F0F6FB',
        'lg-1': '#D7DBE2',
        'lg-2': '#EFF1F4',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Cabin', 'sans-serif'],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}