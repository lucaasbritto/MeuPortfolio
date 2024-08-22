<template>
  <div>
    <!-- Navigation Drawer -->
    <v-navigation-drawer
      v-model="drawer"
      :width="drawerWidth"
      temporary
      app
      class="mobile-menu"
    >    
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          class="mobile-menu-item"
          @click="drawer = false"
        >
          <v-list-item-content>
            <v-list-item-title>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- Conteudo do Header -->
    <v-app-bar class="header-bar">    
        
        <!-- Linha do Header -->
        <v-row class="header-row" no-gutters>

          <!-- Coluna Icon Menu -->
          <v-col cols="2" class="menu-toggle">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          </v-col>

          <!-- Coluna Logomarca -->
          <v-col cols="8" md="2" order="1" class="logo-container">        
            <v-img 
              src="@/assets/logo.png"
              alt="Logo"
              class="logo"
              contain 
            ></v-img>  
          </v-col>

          <!-- Coluna Pesquisar -->
          <v-col cols="12" md="8" order="3" order-md="2" class="search-container">          
            <v-text-field
              class="search-input "
              :loading="loading"
              append-inner-icon="mdi-magnify"
              density="compact"
              label="Pesquisar produto"
              variant="solo"
              hide-details
              single-line
              @click:append-inner="onClick"
            ></v-text-field>
          </v-col>

          <!-- Coluna Carrinho -->
          <v-col cols="2" md="2" order="2" order-md="3" class="cart-container">          
            <v-btn icon>
              <v-badge :content="1" floating color="info">
                <v-icon class="cart-icon" size="x-large">mdi-cart</v-icon> 
              </v-badge>
            </v-btn>
          </v-col>

        </v-row>
      
        <!-- Linha do Menu -->
        <v-row class="menu-row" align="center" no-gutters>
          <!-- MENU NO DESKTOP -->
          <MenuComponent :menuItems="menuItems"></MenuComponent>       
        </v-row>

    </v-app-bar>
  </div>
</template>

<script>
import MenuComponent from '../Menu/MenuComponent.vue';

import './HeaderComponent.scss';
import './HeaderComponent_mobile.scss';
import './HeaderComponent_tablet.scss';
import { ref, computed } from 'vue';
import { useDisplay } from 'vuetify';

export default {
  name: 'HeaderComponent',

  components: {
    MenuComponent
  },

  setup() {
    const drawer = ref(false);
    const display = useDisplay();

    const drawerWidth = computed(() => {
      return display.mdAndUp ? 240 : 300;
    });

    // ITENS DO MENU
    const menuItems = [
      { title: 'Home' },
      { title: 'About' },
      { title: 'Contact' },
      { title: 'Product' },
    ];

    const handleItemClick = (item) => {
      console.log('Item clicked:', item);
      // Adicione a lógica que deve ser executada quando um item do menu é clicado
    };

    return {
      drawer,
      drawerWidth,
      menuItems,
      handleItemClick
    };
  },

  data: () => ({
    loaded: false,
    loading: false,      
  }),

  methods: {
    // Função pesquisar produto
    onClick () {
      this.loading = true

      setTimeout(() => {
        this.loading = false
        this.loaded = true
      }, 2000)
    },
  },  
}

</script>
