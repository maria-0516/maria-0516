/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slower': 'spin 3s linear infinite',
        'spin-slower-reserve': "reverse spin 3s linear infinite",
        marquee: 'marquee var(--marquee-duration) linear infinite',
      },
      keyframes: {
        marquee: {
          '100%': { transform: 'translateY(-50%)' },
        }
      },
  
    },
  },
  plugins: [],
}