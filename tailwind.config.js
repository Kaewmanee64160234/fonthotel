/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}",
    "node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      blue_button: {
        light: "#AFD3E2",
        DEFAULT: "#AFD3E2",
        dark: "#AFD3E2",
      },
      brown_button: {
        light: "#906843",
        DEFAULT: "#906843",
        dark: "#906843",
      },
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
