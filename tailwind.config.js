module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors: {
        Dark_cyan: 'hsl(158, 36%, 37%)',
        Cream: 'hsl(30, 38%, 92%)',
        Very_dark_blue: 'hsl(212, 21%, 14%)',
        Dark_grayish_blue: 'hsl(228, 12%, 48%)',
        White: 'hsl(0, 0%, 100%)'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        Fraunces: ['Fraunces', 'sans-serif']
      },
      letterSpacing: {
        mostWider: '.5rem'
      },

    },
  },
  plugins: [],
}
