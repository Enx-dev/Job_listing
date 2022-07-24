/** @type {import('tailwindcss').Config} */
module.exports = {
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  theme: {
    extend: {
      colors: {
        DesaturatedDarkCyan: "hsl(180, 29%, 50%)",
        primaryBackground: "hsl(180, 52%, 90%)",
        primaryFilter: "hsl(180, 31%, 95%)",
        primaryGrayishCyan: "hsl(180, 8%, 52%)",
        primaryDarkGrayishCyan: "hsl(180, 14%, 20%)",
        heroImgMobile: "hsl(180, 29%, 50%)",
        heroImgDesktop: "hsl(180, 29%, 50%)",
      },
      backgroundImage: {
        heroImgMobile: "url('/public/images/bg-header-mobile.svg')",
        heroImgDesktop: "url('/public/images/bg-header-desktop.svg')",
      },
    },
  },
  plugins: [],
};
