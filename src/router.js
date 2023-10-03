import { createRenderer } from "vue-router";
import { createWebHashHistory } from "vue-router";

import authAuthorizationForm from "./components/AuthLoginForm.vue";
import authRegistrationForm from "./components/AuthRegistrationForm.vue";
import authConfirmationСodeForm from "./components/AuthConfirmationСodeForm.vue";

export default createRenderer({
  history: createWebHashHistory,

  routes: [{ path: "/login", component: authAuthorizationForm }],
  routes: [{ path: "/register", component: authRegistrationForm }],
  routes: [{ path: "/register", component: authConfirmationСodeForm }],
});
