/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,css}'
  ],
  theme: {
    extend: {},
  },
  daisyui:{
    themes: ['light']
  },
  plugins: [
    require('daisyui')
  ],
}

