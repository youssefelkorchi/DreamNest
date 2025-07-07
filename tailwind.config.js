/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-purple': '#E6E6FA',
        'soft-beige': '#F5F5DC',
        'sage-green': '#9DC183',
        'warm-purple': '#D8BFD8',
        'deep-sage': '#7BA05B',
      },
      fontFamily: {
        'handwritten': ['Quicksand', 'cursive'],
        'body': ['Poppins', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};