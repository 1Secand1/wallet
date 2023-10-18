import { createRouter, createWebHistory } from "vue-router";

import Authorization from "./router/Login.vue";
import Registration from "./router/Registration.vue";
import ConfirmationСode from "./router/ConfirmationСode.vue";
import Dashboard from "./router/Dashboard.vue";
import NotFound from "./router/NotFound.vue";

const routes = [
  {
    name: "login",
    path: "/login",
    component: Authorization,
    alias: "/",
  },
  {
    path: "/register",
    name: "registration",
    component: Registration,
  },
  {
    name: "confirmation",
    path: "/confirmation",
    component: ConfirmationСode,
  },
  {
    name: "dashboard",
    path: "/Dashboard",
    component: Dashboard,
  },
  {
    name: "notFound",
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  const authorization = localStorage.getItem("authorization");
  console.log(authorization);

  if (!authorization && to.name === "dashboard") {
    console.log("Вы не авторизованы");
    return { path: from.path };
  }

  return true;
});

export default router;
