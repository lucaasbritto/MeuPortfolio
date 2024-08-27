<template>
  <v-app>
    <InfoBar></InfoBar>
    <HeaderComponent></HeaderComponent>
    <v-main style="margin-top: 100px;">
      <CarouselComponent></CarouselComponent>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import InfoBar from './components/InfoBar/InfoBar.vue';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import CarouselComponent from './components/Carousel/CarouselComponent.vue';

export default {
  name: 'App',
  components: {
    InfoBar,
    HeaderComponent,
    CarouselComponent,
  },

  data: () => ({

  }),
}
</script>
