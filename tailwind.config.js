/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        "image":"url('/src/Media/pexels.jpg')",
        "imagetwo":"url('/src/Media/vertical.jpg')"
      },
    },
  },
  plugins: [],
}