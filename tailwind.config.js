
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes: ["luxury", "cupcake", "lofi", "cupcake","garden"]
  }
}

