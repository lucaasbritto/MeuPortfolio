import MenuComponent from '../Menu/MenuComponent.vue';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer.vue';

import './HeaderComponent.scss';
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';

export default {
  name: 'HeaderComponent',

  components: {
    MenuComponent,
    NavigationDrawer
  },

  setup() {
    const drawer = ref(false);
    const display = useDisplay();

    const drawerWidth = computed(() => {
      return display.mdAndUp ? 300 : 350;
    });

    // ITENS DO MENU
    const menuItems = [
      { title: 'Home' ,  section: 'home'},
      { title: 'Sobre Mim' , section: 'about'},
      { title: 'Projetos' , section: 'project'},
      { title: 'Carreira' , section: 'career' },
      { title: 'Contato' , section: 'contact' },
    ];

    return {
      drawer,
      drawerWidth,
      menuItems,
    };
  },

  data: () => ({       
  }),

  methods: {   
    toggleDrawer() {      
      this.drawer = !this.drawer;
    }
  },  
}