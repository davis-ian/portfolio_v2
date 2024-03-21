/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// Detect user's preferred scheme
const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        colors: {
          font: "##fb6f3e",
          // primary: '#1867C0',
          // secondary: '#5CBBF6',
          background: "#FFFFFF",
          // primary: "#fb6f3e",
          primary: "#181818",
          font: "#181818",
          // secondary: '#424242',
          // accent: '#82B1FF',
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
      dark: {
        colors: {
          background: "#181818",
          font: "#FFFFFF",
          primary: "#FFFFFF",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FFC107",
        },
      },
    },
  },
});
