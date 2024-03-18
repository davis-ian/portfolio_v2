// =============================================================================
// CORE
// =============================================================================
import { createRouter, createWebHistory } from "vue-router";

// =============================================================================
// MAIN
// =============================================================================
import Home from "@/views/Home.vue";
import ProjectDetails from "@/views/ProjectDetails.vue";
import PageNotFound from "@/views/PageNotFound.vue";
// import About from "@/views/About.vue";

// =============================================================================
// ROUTES
// =============================================================================
const routes = [
  { path: "/", name: "Home", component: Home },
  // { path: "/about", name: "About", component: About },
  { path: "/details/:name", name: "ProjectDetails", component: ProjectDetails },
  { path: "/:pathMatch(.*)*", name: "PageNotFound", component: PageNotFound },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPostion) {
    // if (savedPostion) {
    //   return savedPostion;
    // } else {
    //   return { top: 0 };
    // }
    return { top: 0 };
  },
});

export default router;
