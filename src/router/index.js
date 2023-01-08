// =============================================================================
// CORE
// =============================================================================
import { createRouter, createWebHistory } from "vue-router";

// =============================================================================
// MAIN
// =============================================================================
import Home from "@/Views/Home.vue";
import About from "@/Views/About.vue";

// =============================================================================
// ROUTES
// =============================================================================
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
