<template>
  <v-container fluid class="pa-5 containerCareer">

    <!-- Seção de Linha do Tempo Horizontal -->
    <v-row id="career" class="section mt-5">
      <v-col cols="12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <v-card-title class="titleSessao">
          <span class="line-container">
            <span class="line"></span>
              Minha Trajetória
            <span class="line"></span>
          </span>
        </v-card-title>
        <!-- Texto informativo -->
        <v-card-subtitle class="info-text">
          Para mais detalhes, clique no card
        </v-card-subtitle>
      </v-col>

      <v-col cols="12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <!-- Carrossel Horizontal -->
        <v-carousel
          hide-delimiters
          show-arrows
          show-indicators
          height="500px" 
          class="timeline-carousel"          
        >
          <v-carousel-item
            v-for="(item, index) in carouselItems"
            :key="index"
          >
            <div class="timeline-wrapper">
              <!-- Linha do Tempo Horizontal -->
              <div class="timeline-line"></div>

              <div class="timeline-content">
                <!-- Contêiner de Cards -->
                <div class="timeline-cards-container">
                  <div
                    v-for="(event, idx) in eventGroups[index]"
                    :key="idx"
                    class="timeline-card-wrapper"
                    :style="{ left: `${(70 / (eventGroups[index].length - 1)) * idx}%` }"
                    data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200"
                    @click="showDetails(event)"
                  >
                    <div class="timeline-dot">
                      <!-- Exibindo o ano no ponto -->
                      <div class="timeline-year">{{ event.year }}</div>
                    </div>
                    <div class="timeline-card" :class="{ 'above-line': idx % 2 === 0, 'below-line': idx % 2 !== 0 }">
                      <h3>{{ event.profession }}</h3>
                      <p><strong>{{ event.company }}</strong></p>
                      <p>{{ event.period }}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>

    <!-- Modal de Detalhes -->
    <v-dialog v-model="dialog"  max-width="900px">
      <v-card class='modalCareer'>
        <v-card-title>
          <span class="titleSessao">{{ selectedEvent.profession }}</span>
        </v-card-title>
        <v-card-subtitle>
          <strong>{{ selectedEvent.company }} - {{ selectedEvent.period }}</strong>
        </v-card-subtitle>
        <v-card-text>
          <p>{{ selectedEvent.infoCompany }}</p> 
        </v-card-text>
        <v-card-text>
          <p>{{ selectedEvent.details }}</p> 
        </v-card-text>
        <v-card-text>
          <p>{{ selectedEvent.technologies }}</p> 
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="dialog = false">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import CareerTimelineScript from './CareerTimeline.js';

export default {
    ...CareerTimelineScript,
};
</script>

<style lang="scss" scoped>
  @import './CareerTimeline.scss';

</style>
