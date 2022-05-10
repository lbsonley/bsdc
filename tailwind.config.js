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
      },
      maxWidth: {
        80: '80%',
      },
    },
  },
  plugins: [],
};
