/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#6366f1',
          DEFAULT: '#4f46e5',
          dark: '#4338ca',
        },
        accent: {
          light: '#06b6d4',
          DEFAULT: '#0891b2',
          dark: '#0e7490',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
