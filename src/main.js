import { createApp } from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import router from './router';
import '@mdi/font/css/materialdesignicons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Carregar fontes personalizadas
loadFonts();

const app = createApp(App);

// Use o Vuetify, o Router
app.use(vuetify);
app.use(router);

//Animação
AOS.init({
  duration: 1000,
  easing: 'ease-in-out', 
  once: true,
});

app.mount('#app');