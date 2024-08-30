<template>
  <v-app>
    <InfoBar></InfoBar>
    <HeaderComponent></HeaderComponent>
    <v-main>
      <BodySystem></BodySystem>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import InfoBar from './components/InfoBar/InfoBar.vue';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import BodySystem from './components/BodySystem/BodySystem.vue';

export default {
  name: 'App',
  components: {
    InfoBar,
    HeaderComponent,
    BodySystem,
  },
  data() {
   
  },  
};
</script>
