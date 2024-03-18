/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

const app = createApp(App);
// =============================================================================
// FONT AWESOME CORE
// =============================================================================
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// =============================================================================
// FONT AWESOME ICONS
// =============================================================================

/* import specific icons */
import {
  faUserSecret,
  faBars,
  faXmark,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUserSecret,
  faBars,
  faXmark,
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight
);

// =============================================================================
// FONT AWESOME CONFIG
// =============================================================================
app.component("font-awesome-icon", FontAwesomeIcon);

// Plugins
import { registerPlugins } from "@/plugins";

registerPlugins(app);

app.mount("#app");
