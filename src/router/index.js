import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    // on ajoutera les autres pages ensuite
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
