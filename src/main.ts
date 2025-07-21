import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router/index.mjs';
import { vuetify } from './plugins/vuetify.mjs';
import '@mdi/font/css/materialdesignicons.css';

const app = createApp(App);
app.use(router);
app.use(vuetify);
app.mount('#app');
