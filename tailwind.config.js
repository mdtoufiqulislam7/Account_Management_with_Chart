/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-pink': {
          '0%, 100%': { backgroundColor: '#fbcfe8' }, // Lighter pink
          '50%': { backgroundColor: '#fdf2f8' }, // Darker pink
        },
      },
      animation: {
        'fade-pink': 'fade-pink 10s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}