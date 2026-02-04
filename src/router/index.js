import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Studio from "../pages/Studio.vue";
import Services from "../pages/Services.vue";
import CasClients from "../pages/CasClients.vue";
import Contact from "../pages/Contact.vue";
import Agence from "../pages/Agence.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/services", name: "services", component: Services },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/cas-clients", name: "cas-clients", component: CasClients },
    { path: "/studio", name: "studio", component: Studio },
    { path: "/agence", name: "agence", component: Agence },
    // on ajoutera les autres pages ensuite
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
