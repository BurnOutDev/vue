import { createRouter, createWebHistory } from "vue-router";
import Registration from "./pages/registration.vue";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "registration",
      component: Registration,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: () => import("./pages/dashboard.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log({ to, from });
  next();
});
