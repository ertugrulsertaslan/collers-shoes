/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "light-xxl-combined":
          "0 0 15px 0 rgba(255, 255, 255, 0.07), 0 25px 50px -12px rgba(255, 255, 255, 0.25)",
        "dark-xxl-combined":
          "0 0 15px 0 rgba(0, 0, 0, 0.07), 0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        "custom-sectionGrowbtn":
          "0 0 4px 0 rgba(0, 0, 0, 0.07), 0 4px 6px -1px rgba(0, 0, 0, 0.10)",
      },
      scale: {
        300: "2.6",
      },
      colors: {
        menuTextColor: "#78350F",
        menuBackGroundColor: "#fffcec",
        sectionCollectibleBoxColor: "#FBBF24",
        SectionTheBestBgColor: "#0F172A",
        sectionWhyBgColor: "#fffcf2",
        SectionBecauseColor: "#FDE68A",
        sectionBecauseTextColor: "#475569",
        sectionShoesColColor: "#E2E8F0",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      fontSize: {
        "custom-lg": "1.5rem",
        custom: [
          "20px",
          {
            lineHeight: "24px",
          },
        ],
        customTitle: [
          "56px",
          {
            lineHeight: "61px",
          },
        ],
      },
      lineHeight: {
        "custom-lg": "1.5rem",
      },
      width: {
        "94p": "22rem",
        "96p": "23rem",
      },
      height: {
        100: "423px",
      },
      borderRadius: {
        "6xl": "50px",
      },
      spacing: {
        18: "4.5rem",
        34: "8.5rem",
        54: "13.7rem",
        66: "17rem",
        68: "17.5rem",
        78: "19.2rem",
        80: "20.5rem",
        82: "22.1rem",
        94: "23rem",
        102: "27rem",
        112: "38rem",
        120: "45rem",
        122: "46rem",
        130: "60rem",
        132: "61rem",
        140: "66rem",
      },
    },
  },
  plugins: [],
};
