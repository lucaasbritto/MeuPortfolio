<template>
  <v-carousel
    v-model="currentIndex" 
    :items-per-slide="1"
    hide-delimiters
    cycle
    :interval="carouselInterval"
    :style="{ width: carouselSize.width, height: carouselSize.height }"
    class="my-carousel"
    :show-arrows="false"
  >
    <v-carousel-item
      v-for="(slide, index) in slides"
      :key="index"
    >
      <!-- Receber o valor dinamicamente -->
      <slot :slide="slide">
          <div class="default-content">
            {{ slide }}
          </div>
      </slot>      
    </v-carousel-item>

    <v-btn
      class="carousel-nav carousel-prev"
      @click="prevSlide"
      icon
      small
    >
      <v-icon>mdi-chevron-left</v-icon>
    </v-btn>

    <v-btn
      class="carousel-nav carousel-next"
      @click="nextSlide"
      icon
      small
    >
      <v-icon>mdi-chevron-right</v-icon>
    </v-btn>
  </v-carousel>
</template>

<script>
import './CarouselComponent.scss';
import './CarouselComponent_mobile.scss';
import CarouselComponentScript from './CarouselComponent.js';

    export default {
      ...CarouselComponentScript,        
    };
</script>

<style scoped>

</style>
