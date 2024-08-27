<template>
  <v-carousel
    :items-per-slide="1"
    hide-delimiters
    cycle
    interval="5000" 
    class="my-carousel"
  >
    <v-carousel-item
      v-for="(slide, index) in slides"
      :key="index"
    >
      <img :src="slide.image" :alt="slide.alt" class="carousel-image">
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import './CarouselComponent.scss';
import './CarouselComponent_mobile.scss';

export default {
  name: 'CarouselComponent',
  data() {
    return {
      slides: [
        { image: 'https://via.placeholder.com/1200x800?text=Slide+1', alt: 'Slide 1' },
        { image: 'https://via.placeholder.com/1200x800?text=Slide+2', alt: 'Slide 2' },
        { image: 'https://via.placeholder.com/1200x800?text=Slide+3', alt: 'Slide 3' },
      ],
    };
  },
};
</script>

<style scoped>

</style>
