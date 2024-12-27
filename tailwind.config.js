/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        keyframes: {
          vibrate: {
            '0%': { transform: 'rotate(7deg)' },
            '100%': { transform: 'rotate(0deg)' },
          },
        },
        animation: {
          vibrate: 'vibrate 100ms ease-in-out 7',
        },
        backgroundImage: {
          'freepik-background': "url('https://img.freepik.com/free-vector/hand-drawn-rainbow-glitter-background_23-2149693883.jpg?t=st=1735039275~exp=1735042875~hmac=4e2472b277bd3b393548f41b9e10797203d6e84daeb667281d1d11f60c1561f1&w=996')",
        },
        fontFamily: {
        'butterfly-kids': ['Butterfly Kids', 'cursive'],
      },
      },
    },
  plugins: [],
}