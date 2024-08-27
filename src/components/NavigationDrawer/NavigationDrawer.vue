<template>
    <v-navigation-drawer
      v-model="localDrawer"
      :width="drawerWidth"
      temporary
      app
      class="mobile-menu"
    >
      <v-card flat>
        <v-card-title class="drawer-header">
          <!-- Title -->
          <span class="headline">MENU</span>
          <!-- Close Button -->
          <v-spacer></v-spacer>
          <v-btn @click="closeDrawer" icon style="background: #a60404; font-size: 13px;">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
  
        <v-divider class="drawer-divider"></v-divider>
  
        <v-card flat class="drawer-footer">
          <v-card-actions class="drawer-footer-actions">
            <!-- Login Button -->
            <v-btn @click="login" class="drawer-footer-button primary" style="border: 1px solid white;">Entrar</v-btn>
            
            <!-- Register Button -->
            <v-btn @click="register" class="drawer-footer-button">Registre-se</v-btn>
          </v-card-actions>
          <!-- User Info and Orders -->
          <v-list class="drawer-footer-list">
            <v-list-item
              @click="viewOrders"
              class="drawer-footer-list-item"
            >              
              <v-list-item-content> 
                <v-list-item-title>
                  Seja Bem Vindo(a), Fulano
                </v-list-item-title> 
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              @click="viewOrders"
              class="drawer-footer-list-item"
            >              
              <v-list-item-content class="drawer-footer-list-item-content">
                <v-list-item-title>
                  <v-icon>mdi-format-list-bulleted</v-icon>
                    Meus Pedidos
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
  
        <v-list>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            class="mobile-menu-item"
            @click="closeDrawer"
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
  </template>
  
  <script>
  import './NavigationDrawer_mobile.scss';
  
  export default {
    name: 'NavigationDrawer',
    props: {
      drawer: Boolean,
      drawerWidth: Number,
      menuItems: Array
    },
    data() {
      return {
        localDrawer: this.drawer
      };
    },
    watch: {
      drawer(newValue) {
        this.localDrawer = newValue;
      },
      localDrawer(newValue) {
        this.$emit('update:drawer', newValue);
      }
    },
    methods: {
      login() {
        // Implement login functionality
      },
      register() {
        // Implement register functionality
      },
      viewOrders() {
        // Implement view orders functionality
      },
      closeDrawer() {
        this.localDrawer = false;
      }
    }
  }
  </script>
  
  <style scoped>  
  
  </style>