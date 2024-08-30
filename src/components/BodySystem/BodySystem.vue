<template>
    <div class="body_system">
        <CarouselComponent :slides="slides">
            <template v-slot:default="{ slide }">
                <img :src="slide.image" :alt="slide.alt" class="carousel-image">
            </template>
        </CarouselComponent>
    
        <InfoCarousel></InfoCarousel>

    </div>
</template>


<script>
import './BodySystem.scss';
import './BodySystem_mobile.scss';

import CarouselComponent from '../Carousel/CarouselComponent.vue';
import InfoCarousel from '../InfoCarousel/InfoCarousel.vue';
import BodySystemScript from './BodySystem.js';

export default {
  components: {    
    CarouselComponent,
    InfoCarousel
  },
  ...BodySystemScript,
  
}
</script>

<style>
 
</style>