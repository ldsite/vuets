import { createApp } from "vue";
import "@mdi/font/css/materialdesignicons.css";
import { store, router, vuetify } from "./providers";

// Настройка CSRF-токена

import App from "./index-c.vue";

// export const app = createApp(App).use(store);
export const app = createApp(App).use(router).use(store).use(vuetify);
