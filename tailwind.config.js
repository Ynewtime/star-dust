const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  theme: {
    extend: {
      colors: {
        custom: {
          primary: '#1890ff',
        },
      },
      fontFamily: {
        han: ['Source Han Serif', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  variants: {},
  plugins: [],
  purge: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
};
