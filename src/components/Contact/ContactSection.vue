<template>
  <v-container fluid class="contact-container">
    <v-row id="contact" class="section align-center">
      <!-- Título -->
      <v-col cols="12" class="text-center" data-aos="fade-up" data-aos-duration="1000">
        <v-card-title class="titleSessao">
          <span class="line-container">
            <span class="line"></span>
              Contato
            <span class="line"></span>
          </span>
        </v-card-title>
      </v-col>

      <!-- Lado Esquerdo -->
      <v-col cols="12" sm="6" md="6" class="contact-info" data-aos="fade-up" data-aos-duration="1000">
        <v-card class="contact-card" outlined>
          <v-card-title class="title">Entre em Contato</v-card-title>
          <v-card-subtitle class="info">
            <v-list class="info-list">
              <v-list-item class="contact-item">                
                <v-list-item-content>
                  <v-list-item-title>
                    <v-list-item-icon class="icon">
                      <v-icon>mdi-email</v-icon>
                    </v-list-item-icon>
                    <a :href="`mailto:${email}`">{{ email }}</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="contact-item">                
                <v-list-item-content>
                  <v-list-item-title>
                    <v-list-item-icon class="icon">
                      <v-icon>mdi-linkedin</v-icon>
                    </v-list-item-icon>
                    <a :href="linkedin" target="_blank">/lucaas-britto</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item class="contact-item">                
                <v-list-item-content>
                  <v-list-item-title>
                    <v-list-item-icon class="icon">
                      <v-icon>mdi-github</v-icon>
                    </v-list-item-icon>
                    <a :href="github" target="_blank">/lucaasbritto</a>
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <!-- Adicionando Localização -->
              <v-list-item class="contact-item">                
                <v-list-item-content>                  
                  <v-list-item-title>
                      <v-list-item-icon class="icon">
                        <v-icon>mdi-map-marker</v-icon>
                      </v-list-item-icon>
                  <span>Salvador, Bahia</span>
                </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card-subtitle>
        </v-card>
      </v-col>

      <!-- Lado Direito -->
      <v-col cols="12" sm="6" md="6" class="photo-container">
        <v-img :src="photoUrl" class="photo" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ContactSectionScript from './ContactSection.js';

export default {
    ...ContactSectionScript,
};
</script>

<style lang="scss" scoped>
  @import './ContactSection.scss';

</style>
