<template>    
    <v-row class="d-flex pa-0 ma-0 row-infoCarousel">

        <!-- Desktop View -->
        <v-col
          v-for="(item, index) in slides"
          :key="index"
          cols="12" sm="6" md="3"
          class="d-none d-md-flex my-card-col justify-center"
        >          
            <v-card class="d-flex pa-4">
                <div  class="d-flex align-center justify-center">
                    <v-icon class="mr-2 icon_infoCarousel" large>{{ item.icon }}</v-icon>
                    <div class="d-flex flex-column align-center justify-center">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.description }}</p>
                    </div>
                </div>
            </v-card>
        </v-col>
      
  
        <!-- Mobile View -->      
        <v-col cols="12" class="d-md-none pa-0 ma-0 col-mobile-view">
            <CarouselComponent 
                :slides="slides" 
                :carouselSize="carouselSize" 
                :carouselInterval="2000"
                >
                <template v-slot:default="{ slide }">
                    <v-card class="d-flex pa-4 text-center justify-center" >
                        <div  class="d-flex align-center justify-center">
                            <v-icon class="mr-2 icon_infoCarousel" large >{{ slide.icon }}</v-icon>
                                <div class="d-flex flex-column justify-center">
                                    <h3>{{ slide.title }}</h3>
                                    <p>{{ slide.description }}</p>
                                </div>
                        </div>
                    </v-card>
                </template>
            </CarouselComponent>          
        </v-col>
    </v-row>
  </template>
  
<script>
    import './InfoCarousel.scss';
    import CarouselComponent from '../Carousel/CarouselComponent.vue';  
    import InfoCarouselScript from './InfoCarousel.js';

    export default {
        components: {
            CarouselComponent
        },

        ...InfoCarouselScript,        
    };
</script>
  
<style scoped>
  
</style>