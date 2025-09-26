/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'z-red': {
          600: '#E6465C'
        }
      },
      fontFamily:{
        'plusjakartasans': '"Plus Jakarta Sans", sans-serif',
        'merry': '"Merriweather", serif'
      },
      colors:{
        'mi-blue': {
          1: '#E3F6FD',
          2: '#047CBB',
          3: '#053075',
          4: '#021C53',
          5: '#00397C'
        }
      },
      fontSize: {
        'xsm': ['.8125rem', {
          lineHeight: '1rem',
        }],
        'xxs': ['.6875rem', {
          lineHeight: '1rem',
        }],
        'md': ['16px', {
          lineHeight: '1rem',
        }],
      },
      lineHeight: {
        'leading-half': '0.5rem',
      }
    },
  },
  plugins: [],
}

