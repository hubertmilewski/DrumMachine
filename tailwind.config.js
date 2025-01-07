/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.drum-pad': {
          'background-color': '#64748b', // bg-slate-500
          'padding-left': '2.5rem', // px-10
          'padding-right': '2.5rem',
          'padding-top': '1.25rem', // py-5
          'padding-bottom': '1.25rem',
          'box-shadow': '0 4px 6px rgba(0, 0, 0, 0.1)', // shadow-md
          'font-weight': '700', // font-bold
          'margin': '0.5rem', // m-2
        },
        '.drum-pad:active': {
          'background-color': '#94a3b8',
        },
      });
    },
  ],
}