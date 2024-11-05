/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      desktop: { "max": "1920px" }, // до 1920px (включительно)
      desktoppoint: {"max": "1250px"},
      minidesktop: { "max": "1100px" },
      laptop: { "max": "1030px" },
      minilaptop: {"max": "920px"}, // до 1030px (включительно)
      maxpad: {"max": "700px"},
      pad: { "max": "550px" },
      mobile: { "max": "400px" },
    },
    extend: {
      spacing: {},
      backgroundImage: {
        "main-page": "url('/src/images/Figures.png')",
        "map-button": "url('/src/images/Navigation1.png')",
        "discord-button": "url('/src/images/bd2.svg')",
        "road-map": "url('/src/images/RoudMap.png')",
        "road-table": "url('/src/images/Sub_Container.png')",
        "icon-table": "url('/src/images/Icon_Container.png')",
        icon_table_first: "url('/src/images/Icon_Table.png')",
        cta_section: "url('/src/images/CTA_Section.png')",
        sreen_news: "url('/src/images/screen_news.png')",
      },
    },
  },
  plugins: [],
};
