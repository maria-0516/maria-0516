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
          marquee: 'marquee 100s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateY(0%)' },
            '100%': { transform: 'translateY(-100%)' },
          }
        },
    
      },
    },
    plugins: [],
}