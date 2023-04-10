/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
    themes: [
    ],
    daisyui: {
      themes: [
        {
          dottie: {
            "primary": "#EB7302",
            "secondary": "#ffdf61",
            "accent": "#1A4E97",
            "neutral": "#d9f99d",
            "base-100": "#fff",
            "info": "#8BE8FD",
            "success": "#52FA7C",
            "warning": "#F1FA89",
            "error": "#FF5757",
          },
          },],
          },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
