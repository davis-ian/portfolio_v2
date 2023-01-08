// =============================================================================
// CORE
// =============================================================================
import { createRouter, createWebHistory } from "vue-router";

// =============================================================================
// MAIN
// =============================================================================
import Home2 from "@/views/Home2.vue";
import About from "@/views/About.vue";

// =============================================================================
// ROUTES
// =============================================================================
const routes = [
  { path: "/", name: "Home", component: Home2 },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
