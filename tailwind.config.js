/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors: {
        primaryRed: "#ff014f",
        blackDeep:"#16181c",
        blackMid:"#1c1b1b",
        blackLight:"#212428",
        grayLight:"#c4cfde",
        grayDeep:"#6e7b8c"
      },
    },
  },
  plugins: [],
}