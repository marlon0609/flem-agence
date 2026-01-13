import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Studio from "../pages/Studio.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/studio", name: "studio", component: Studio },
    // on ajoutera les autres pages ensuite
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
