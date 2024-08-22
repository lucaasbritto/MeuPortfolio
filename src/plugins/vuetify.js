import { createVuetify } from 'vuetify';
import 'vuetify/styles'; // Importe estilos do Vuetify
import '@mdi/font/css/materialdesignicons.css'

// Defina as configurações de tipografia
const myCustomTheme = {
  themes: {
    light: {
      fonts: {
        family: 'Roboto, sans-serif',
      },
      // Customizações adicionais
      typography: {
        h1: { fontSize: '1.5rem', fontWeight: 'bold' },
        h2: { fontSize: '2rem', fontWeight: 'bold' },
        h3: { fontSize: '1.75rem', fontWeight: 'bold' },
        h4: { fontSize: '1.5rem', fontWeight: 'bold' },
        h5: { fontSize: '1.25rem', fontWeight: 'bold' },
        h6: { fontSize: '1rem', fontWeight: 'bold' },
        subtitle1: { fontSize: '1rem' },
        subtitle2: { fontSize: '0.875rem' },
        body1: { fontSize: '1rem' },
        body2: { fontSize: '0.875rem' },
        caption: { fontSize: '0.75rem' },
        overline: { fontSize: '0.625rem' },
      },
    },
  },

  icons: {
    defaultSet: 'mdi', // Define o MDI como o conjunto de ícones padrão
  },
};

export default createVuetify({
  theme: myCustomTheme,
});