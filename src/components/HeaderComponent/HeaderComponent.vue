<template>
  <div>
    <!-- Navigation Drawer -->
    <NavigationDrawer
      v-model:drawer="drawer"
      :drawerWidth="drawerWidth"
      :menuItems="menuItems"
    />    

    <!-- Conteudo do Header -->
    <v-app-bar app class="header-bar">          
        <!-- Linha do Menu -->
        <v-row class="menu-row" align="center" no-gutters>
          <v-col cols="2" class="menu-toggle text-center">
            <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
          </v-col>   
          <!-- MENU NO DESKTOP -->
          <MenuComponent :menuItems="menuItems"></MenuComponent>       
        </v-row>

    </v-app-bar>
  </div>
</template>

<script>
import HeaderComponentScript from './HeaderComponent.js';

export default {
  ...HeaderComponentScript,  
}

</script>

<style lang="scss" scoped>
    @import './HeaderComponent.scss'; 
</style>
