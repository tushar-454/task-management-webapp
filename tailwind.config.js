/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        froly: {
          50: '#fff1f2',
          100: '#ffe4e7',
          200: '#ffccd3',
          300: '#fea3b0',
          400: '#fd6e86',
          500: '#f73c60',
          600: '#e41a4b',
          700: '#c10f3f',
          800: '#a1103b',
          900: '#8a1139',
          950: '#4d041b',
        },
        sun: {
          50: '#fff9eb',
          100: '#feeec7',
          200: '#fddc8a',
          300: '#fcc34d',
          400: '#fbae2a',
          500: '#f5890b',
          600: '#d96406',
          700: '#b44409',
          800: '#92340e',
          900: '#782c0f',
          950: '#451403',
        },
      },
    },
  },
  plugins: [],
};
