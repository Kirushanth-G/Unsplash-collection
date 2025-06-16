/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'be-vietnam': ['Be Vietnam Pro', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'pt-sans': ['PT Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
