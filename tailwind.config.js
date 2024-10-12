/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        dark: '#151717',
        light: '#DDE1F9',
        brand: '#3448C5',
        primary: '#FE2D2D',
        secondary: '#FE772D'
      },
      spacing: {
        0.25: '0.0625rem',
        7.5: '1.875rem',
        15: '3.75rem'
      },
      zIndex: {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5'
      },

      keyframes: {
        elastic: {
          '0%, 100%': {
            transform: 'scale3d(1, 1, 1)'
          },
          '30%': {
            transform: 'scale3d(0.75, 1.25, 1)'
          },
          '40%': {
            transform: 'scale3d(1.25, 0.75, 1)'
          },
          '50%': {
            transform: 'scale3d(0.85, 1.15, 1)'
          },
          '65%': {
            transform: 'scale3d(1.05, 0.95, 1)'
          },
          '75%': {
            transform: 'scale3d(0.95, 1.05, 1)'
          }
        }

      },
      animation: {
        elastic: 'elastic 3s 4s infinite both'
      }
    }
  },
  plugins: []
}
