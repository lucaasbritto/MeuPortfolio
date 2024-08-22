<template>
  <v-app>
    <InfoBar></InfoBar>
    <HeaderComponent></HeaderComponent>
    <v-main style="margin-top: 100px;">
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import InfoBar from './components/InfoBar/InfoBar.vue';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';

export default {
  name: 'App',
  components: {
    InfoBar,
    HeaderComponent
  },

  data: () => ({

  }),
}
</script>
