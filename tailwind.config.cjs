/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  // corePlugins: {
  //   preflight: false,
  // },
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['poppins', 'Inter', 'ui-sans-serif', 'sans-serif'],
        title: ['roboto', 'Inter', ...defaultTheme.fontFamily.sans],
        dancing: [
          'Dancing Script Variable',
          'Inter',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
    },
  },
  plugins: [],
};
