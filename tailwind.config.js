module.exports = {
  plugins: [require("daisyui")],
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bright-green": "#82FF77",
        "bright-green-light": "#F2FFF2",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
