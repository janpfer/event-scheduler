/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `app.vue`,
    ],
    options: {
      safelist: [/(from|via|to|border|bg|text)-(.*)-(\\d{1}0{1,2})/],
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
