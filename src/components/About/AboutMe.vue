<template>
    <v-container fluid class="pa-5 container-aboutMe">
        <div id="about" class="section">
        <v-row  class="mb-5">
          <v-col cols="12" data-aos="fade-up" data-aos-duration="1000">
            <v-card class="about-card" elevation="4">
              <v-card-title class="titleSessao">
                <span class="line-container">
                  <span class="line"></span>
                        Conheça mais sobre mim
                  <span class="line"></span>
                </span>
              </v-card-title>

              <v-card-text class="about-text">
                <p>
                  Olá! Meu nome é Lucas Britto. Sou formado em Ciência da Computação e atuo como <span class="text-destaque">Desenvolvedor PHP Full Stack </span>
                  com mais de <span class="text-destaque"> 8 anos </span> de experiência. 
                  Minha jornada profissional me proporcionou um sólido conhecimento e habilidades práticas em 
                  várias tecnologias e ferramentas.
                </p>
                <p>
                    Tenho uma experiência significativa com <span class="text-destaque">PHP e Laravel</span>, onde desenvolvi e mantive sistemas web complexos. 
                    Além dessas tecnologias, também trabalhei extensivamente com <span class="text-destaque">Vue.js e Angular</span>, 
                    criando interfaces de usuário interativas e responsivas.</p>
                <p v-bind:class="{ 'expanded': isExpanded || !isMobile }" class="about-text-truncated">
                    No que diz respeito a bancos de dados, tenho familiaridade com uma variedade de sistemas, 
                    incluindo MySQL, Oracle, MongoDB, Elasticsearch e PostgreSQL. Essa experiência me permite 
                    escolher e otimizar a melhor solução de banco de dados para cada projeto específico.
                </p>
                <p v-if="!isMobile || isExpanded">
                    Além do desenvolvimento web, minha experiência se estende a outras tecnologias importantes, 
                    como JavaScript, jQuery, Ajax, TypeScript, Docker, APIs REST, Scrum, Kanban, Git, Bootstrap, 
                    Vuetify, CSS, SaaS, Less e Selenium. Essas ferramentas e metodologias enriquecem minha abordagem 
                    ao desenvolvimento de software e à gestão de projetos.
                </p>
                <p v-if="!isMobile || isExpanded">
                    Estou sempre animado para enfrentar novos desafios e contribuir para projetos inovadores que 
                    possam fazer uma diferença significativa no mundo da tecnologia.
                </p>
                <v-btn @click="toggleExpand" class="d-md-none expand-button">
                    {{ isExpanded ? 'Ver menos' : 'Ver mais' }}
                </v-btn>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- Botão de Download do Currículo -->
        <v-row class="mb-5" justify="center">
          <v-col cols="auto" data-aos="fade-up" data-aos-duration="1000">
            <v-btn              
              dark
              :href="pdfUrl"
              download
              class="mb-4"
            >
            <v-icon left>mdi-download</v-icon>
              Download do Currículo
            </v-btn>
          </v-col>
        </v-row>
        
        <!-- Seção de Tecnologias -->        
        <v-row class="mt-5">
          <v-col
            v-for="(tech, index) in displayedTechnologies"
            :key="index"
            cols="4" sm="3" md="2"
            class="d-flex align-center justify-center"
            v-bind:class="{ 'd-none': !isTechExpanded && isMobile }"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"            
          >
            <v-card class="tech-card" elevation="8">
              <v-card-title class="text-center">
                <v-icon large>{{ tech.icon }}</v-icon>
              </v-card-title>
              <v-card-subtitle class="text-center">
                {{ tech.name }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row class="mt-5">
        <v-col cols="12" class="text-center">
          <v-btn @click="toggleTechExpand" class="d-md-none expand-button">
            {{ isTechExpanded ? 'Ver menos tecnologias' : 'Ver mais tecnologias' }}
          </v-btn>
        </v-col>
      </v-row>
    </div>
      </v-container>


</template>

<script>
import AbouteMeScript from './AboutMe.js';

export default {
    ...AbouteMeScript,
};

</script>

<style lang="scss" scoped>
    @import './AbouteMe.scss';

</style>