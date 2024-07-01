/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    fontFamily : {
      'pixel': ['Pixelify Sans', 'sans-serif']
    }
  },
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["synthwave"],
  },
  plugins: [require("daisyui")],
};
