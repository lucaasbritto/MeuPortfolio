<template>
  <v-app>
    <HeaderComponent></HeaderComponent>
    
    <v-main style="margin:0">
      <router-view></router-view>
    </v-main>

    <FooterSection></FooterSection>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import FooterSection from './components/Footer/FooterSection.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,    
    FooterSection,
  },
  
  data() {
   
  },  
};
</script>
