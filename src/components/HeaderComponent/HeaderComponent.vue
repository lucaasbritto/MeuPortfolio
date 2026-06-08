<template>
  <div>
    <NavigationDrawer
      v-model:drawer="drawer"
      :drawerWidth="drawerWidth"
      :menuItems="menuItems"
    />

    <v-app-bar app class="header-bar" elevation="0">
      <v-container fluid class="header-inner pa-0">
        <v-row align="center" no-gutters class="header-row">

          <!-- Logo -->
          <v-col cols="auto" class="logo-area">
            <img :src="require('@/assets/imagens/logo.png')" alt="Lucas Britto" class="logo-img" />
            <span class="logo-name">LUCAS BRITTO</span>
          </v-col>

          <!-- Menu Desktop -->
          <v-col class="d-none d-md-flex justify-center">
            <MenuComponent :menuItems="menuItems" :activeSection="activeSection" />
          </v-col>

          <!-- Ações direita -->
          <v-col cols="auto" class="actions-area d-none d-md-flex align-center">
            <a href="https://github.com/lucaasbritto" target="_blank" class="icon-link">
              <v-icon>mdi-github</v-icon>
            </a>
            <a href="https://www.linkedin.com/in/lucaas-britto/" target="_blank" class="icon-link">
              <v-icon>mdi-linkedin</v-icon>
            </a>
            <a :href="cvUrl" download="Lucas_Brito_Machado_CV.pdf" class="btn-cv">
              Baixar CV
              <v-icon size="16">mdi-download</v-icon>
            </a>
          </v-col>

          <!-- Hamburger Mobile -->
          <v-col cols="auto" class="d-flex d-md-none ml-auto">
            <v-app-bar-nav-icon @click="toggleDrawer" color="white" />
          </v-col>

        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
import MenuComponent from '../Menu/MenuComponent.vue';
import NavigationDrawer from '../NavigationDrawer/NavigationDrawer.vue';
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useDisplay } from 'vuetify';

export default {
  name: 'HeaderComponent',
  components: { MenuComponent, NavigationDrawer },

  setup() {
    const drawer = ref(false);
    const display = useDisplay();
    const activeSection = ref('home');

    const drawerWidth = computed(() => display.mdAndUp ? 300 : 350);

    const cvUrl = '/Lucas_Britto_CV.pdf';

    const menuItems = [
      { title: 'Início',      section: 'home' },
      { title: 'Experiências', section: 'career' },
      { title: 'Tecnologias', section: 'about' },
      { title: 'Projetos',    section: 'project' },
      { title: 'Contato',     section: 'contact' },
    ];

    const onScroll = () => {
      const threshold = window.innerHeight * 0.35;
      let current = menuItems[0].section;
      for (const item of menuItems) {
        const el = document.getElementById(item.section);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= threshold) {
          current = item.section;
        }
      }
      activeSection.value = current;
    };

    onMounted(() => window.addEventListener('scroll', onScroll));
    onUnmounted(() => window.removeEventListener('scroll', onScroll));

    return { drawer, drawerWidth, menuItems, activeSection, cvUrl,
      toggleDrawer() { drawer.value = !drawer.value; }
    };
  },
};
</script>

<style lang="scss" scoped>
  @import './HeaderComponent.scss';
</style>
