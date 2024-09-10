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
          <span>MENU</span>
          <!-- Close Button -->
          <v-spacer></v-spacer>
          <v-btn @click="closeDrawer" icon style="background: #000000;; font-size: 13px;">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
  
        <v-divider class="drawer-divider"></v-divider>
  
        <v-list>
          <v-list-item
            v-for="item in menuItems"
            :key="item.title"
            class="mobile-menu-item"
            @click="scrollToSection(item.section)"
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
import NavigationDrawerScript from './NavigationDrawer.js';

export default {
    ...NavigationDrawerScript,
};

</script>
  
<style lang="scss" scoped>
  @import './NavigationDrawer.scss'; 
</style>
