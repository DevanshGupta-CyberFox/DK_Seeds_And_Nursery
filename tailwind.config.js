/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F5D50',
        secondary: '#A8C686',
        accent: '#F4B860',
        light: '#F5F5F0',
      },
    },
  },
  plugins: [],
}