/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#0a1628',
          800: '#111d35',
          700: '#1a2d4d',
        },
        gold: {
          400: '#f0c040',
          500: '#d4a012',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
