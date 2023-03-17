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
        small: "601px",
        medium: "841px",
        large: "1001px",
      },
      backgroundImage: {
        introduceImage: "url('/src/assets/introduceImage/super-app.jpg')",
        bannerImage: "url('/src/assets/bannerImage/intro_desktop.jpg')",
        taxiServicesBanner:
          "url('/src/assets/bannerImage/taxiServicesBanner.jpg')",
        taxiServicesAdvantages: "url('/src/assets/taxiAdvantagesImage/2.jpg')",
        bikeServicesBanner: "url('/src/assets/bannerImage/1-1.jpg')",
        bikeAdvantagesImage:
          "url('/src/assets/taxiAdvantagesImage/bikeImage.jpg')",
        pickupServicesBanner: "url('/src/assets/bannerImage/pickupBanner.jpg')",
        pickupServicesAdvantages:
          "url('/src/assets/taxiAdvantagesImage/pickupImage.jpg')",
        aboutUsBannerImage:
          "url('/src/assets/bannerImage/about-intro--mobile.jpg')",
      },
    },
  },
  plugins: [],
};
