/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['Futura', 'sans-serif'],
        gilroy: ['Gilroy', 'sans-serif'],
      },
       fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"], // now `font-sans` = Poppins
      },
    },
  },
  plugins: [],
};
