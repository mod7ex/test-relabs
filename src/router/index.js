import { createRouter, createWebHistory } from "vue-router";

const routes = [
      {
            path: "/",
            name: "Home",
            component: () => import("../views/Home.vue"),
      },

      {
            path: "/login",
            name: "Login",
            component: () => import("../views/auth/Login.vue"),
      },

      {
            path: "/shop",
            name: "Shop",
            component: () => import("../views/Shop.vue"),
      },
];

const router = createRouter({
      history: createWebHistory(process.env.BASE_URL),
      routes,
});

export default router;
