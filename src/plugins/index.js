/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader";
import vuetify from "./vuetify";
import pinia from "../store";
import router from "../router";
import Vue3Marquee from "vue3-marquee";
import { createMetaManager } from "vue-meta";

export function registerPlugins(app) {
  loadFonts();
  app
    .use(vuetify)
    .use(router)
    .use(pinia)
    .use(Vue3Marquee)
    .use(createMetaManager());
}
