/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'sans-serif'],
        body: ['"Nunito Sans"', 'sans-serif'],
        heading: ['"Fira Sans"', 'sans-serif'],
        nav: ['Yantramanav', 'sans-serif'],
        accent: ['Yantramanav', 'sans-serif'],
      },
      colors: {
        navy: {
          900: '#1D2F40',
          800: '#2C4258',
          700: '#3D5A75',
        },
        gold: {
          400: '#f0c040',
          500: '#d4a012',
        },
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 1.25rem))' }, // Account for gap
        }
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
