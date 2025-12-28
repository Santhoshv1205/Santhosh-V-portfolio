/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {extend: {
  colors: {
    base: "#0b1020",
    neonBlue: "#7dd3fc",
    neonPurple: "#c4b5fd",
    neonPink: "#fbcfe8",
  },
},

  },
  plugins: [],
};
