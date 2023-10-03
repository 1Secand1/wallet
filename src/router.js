import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import authAuthorizationForm from "./components/AuthLoginForm.vue";
import authRegistrationForm from "./components/AuthRegistrationForm.vue";
import authConfirmationСodeForm from "./components/AuthConfirmationСodeForm.vue";

const routes = [
  { path: "/login", component: authAuthorizationForm, alias: "/" },
  { path: "/register", component: authRegistrationForm },
  { path: "/confirmation", component: authConfirmationСodeForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
