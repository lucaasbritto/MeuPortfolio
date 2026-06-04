import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importe estilos do Vuetify
import '@mdi/font/css/materialdesignicons.css'

// Defina as configurações de tipografia
const myCustomTheme = {
  defaultTheme: 'dark',
  themes: {
    dark: {
      dark: true,
      colors: {
        background: '#080808',
        surface:    '#0f0f0f',
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
  },
};

export default createVuetify({
  theme: myCustomTheme,
});