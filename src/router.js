import { createRouter, createWebHistory } from "vue-router";

import authAuthorizationForm from "./router/Login.vue";
import authRegistrationForm from "./router/Registration.vue";
import authConfirmationСodeForm from "./router/ConfirmationСode.vue";
import Dashboard from "./router/Dashboard.vue";

const routes = [
  { path: "/login", component: authAuthorizationForm, alias: "/" },
  { path: "/register", component: authRegistrationForm },
  { path: "/confirmation", component: authConfirmationСodeForm },
  { path: "/Dashboard", component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
