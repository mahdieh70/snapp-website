module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pale-black": "#6b7280",
        "pale-gray": "#e5e5e5",
        "pale-green": "#63E2A7",
      },
      screens: {
        medium: "841px",
      },
      backgroundImage: {
        introduceImage: "url('/src/assets/introduceImage/super-app.jpg')",
        bannerImage: "url('/src/assets/bannerImage/intro_desktop.jpg')",
      },
    },
  },
  plugins: [],
};
