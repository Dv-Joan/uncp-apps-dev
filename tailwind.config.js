/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "noto-sans": ["Noto Sans", "sans-serif"],
        "monomaniac": ["Monomaniac One"],
        "rubik" : ["Rubik Puddles", 'cursive']
      },
      borderWidth: {
        1: "1px"}
    },
  },
  
  plugins: [ require("daisyui")],
    daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
};
