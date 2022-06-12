let plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    borderRadius: {
      none: "0",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      // DEFAULT: "4px",
      md: "0.375rem",
      lg: "0.5rem",
      full: "9999px",
      large: "12px",
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "50%": "50%",
      16: "4rem",
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      // Add a `third` variant, ie. `third:pb-0`
      addVariant("third", "&:nth-child(3)");
    }),
  ],
};
