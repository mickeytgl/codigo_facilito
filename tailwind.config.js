const { colors } = require("tailwindcss/defaultTheme");
module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        green: {
          ...colors.green,
          "200": "#c6f7e2",
          "500": "#1bbc9b",
          "600": "#117964"
        },
        gray: {
          "100": "#f5f5f5",
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
