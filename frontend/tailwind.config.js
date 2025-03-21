/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Junge": "Junge",
        "Montserrat": "Montserrat"
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
      },
      animation: {
        slideUp: 'slideUp 14s linear infinite', 
      },
    },
  },
  plugins: [
    daisyui,
  ],
}

