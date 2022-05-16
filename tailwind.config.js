/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'darken-40': 'rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'palms-small': 'url(/images/palms-small.jpg)',
        'palms-medium': 'url(/images/palms-medium.jpg)',
        'palms-large': 'url(/images/palms-large.jpg)',
        'palms-huge': 'url(/images/palms-huge.jpg)',
        'water-small': 'url(/images/water-small.jpg)',
        'water-medium': 'url(/images/water-medium.jpg)',
        'water-large': 'url(/images/water-large.jpg)',
        'water-huge': 'url(/images/water-huge.jpg)',
      },
      maxWidth: {
        80: '80%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
          borderRadius: theme('borderRadius.DEFAULT'),
        },
        '.btn-primary': {
          color: theme('colors.slate.50'),
          backgroundColor: theme('colors.sky.700'),
        },
        '.btn-primary-inverted': {
          backgroundColor: theme('colors.slate.50'),
          color: theme('colors.sky.700'),
        },
      });
    }),
  ],
};
