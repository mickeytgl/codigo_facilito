const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  theme: {
    fontSize: {
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "4.5rem"
    },
    extend: {
      width: {
        sm: "200px"
      },
      colors: {
        green: {
          ...colors.green,
          "200": "#c6f7e2",
          "500": "#1bbc9b",
          "600": "#117964"
        },
        gray: {
          "100": "#f0f4f8",
          "200": "#eeeeee",
          "300": "#e0e0e0",
          "400": "#bdbdbd",
          "500": "#9e9e9e",
          "600": "#757575",
          "700": "#616161",
          "800": "#424242",
          "900": "#212121"
        }
      }
    }
  },
  variants: {},
  plugins: []
};
