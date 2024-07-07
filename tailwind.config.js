/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
        mulish: ["Mulish"],
        ubuntu: ["Ubuntu"],
        playwrite: ["Playwrite"],
      },
    },
  },
  plugins: [],
};
