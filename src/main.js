import { createApp } from "vue";
import router from "./router";

import App from "./App.vue";
import Authenticator from "./Authenticator.vue";
// createApp(App).mount("#app");  

createApp(Authenticator)
.use(router)
.mount("#app");
