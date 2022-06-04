module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "3rem",
    },
    extend: {
      colors: {
        "dark-purple": "#672280",
        "light-purple": "#A626D3",
        grey: "#D5D4D8",
      },
    },
    fontFamily: {
      sans: ["Karla", "sans-serif"],
    },
    screens: {
      "2xl": "700px",
    },
  },
  plugins: [],
};
