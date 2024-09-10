<template>
    <v-container fluid class="pa-5 containerProject">
        
        <!-- Seção de Projetos -->
        <v-row id="project" class="section mt-5">
            <v-col cols="12">
                <v-card-title class="titleSessao">
                    <span class="line-container">
                    <span class="line"></span>
                        Meus Projetos
                    <span class="line"></span>
                    </span>
                </v-card-title>
            </v-col>
    
            <v-col
            v-for="(project, index) in projects"
            :key="index"
            cols="12" sm="6" md="4"
            class="d-flex justify-center mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            >
            <v-card class="project-card" hover>
                <v-img
                    :src="project.image"
                    height="200px"
                    class="white--text align-end project-image"
                    @click="openProjectModal(project)"
                >
                    <v-card-title class="project-card-title">
                        {{ project.title }}
                    </v-card-title>
                </v-img>

                <v-card-text class="project-card-description" @click="openProjectModal(project)">
                    <span v-if="isExpanded(project)">{{ project.description }}</span>
                    <span v-else>{{ truncateText(project.description) }}</span>            
                </v-card-text>

                <!-- Tags de Tecnologias -->
                <div class="tech-chip-group">
                    <v-chip-group class="">
                        <v-chip
                        v-for="(tech, index) in project.technologies"
                        :key="index"
                        class="tech-chip"
                        >
                        {{ tech }}
                        </v-chip>
                    </v-chip-group>
                </div>

                <v-card-actions class="d-flex justify-center">
                    <v-btn
                    v-if="project.linkgit"
                    :href="project.linkgit"
                    target="_blank"
                    class="project-btn ml-2"
                    >
                    <v-icon right>mdi-github</v-icon>
                    GitHub              
                    </v-btn>

                    <v-btn
                    v-if="project.link"
                    :href="project.link"
                    target="_blank"
                    class="project-btn"
                    >
                    <v-icon right>mdi-link</v-icon>
                    Ver Projeto              
                    </v-btn>
                </v-card-actions>
            </v-card>
            </v-col>
        </v-row>
        

        <!-- Modal para Imagem Grande -->
        <v-dialog v-model="largeImageDialog" max-width="90vw" scrollable>
            <v-img :src="selectedLargeImage" max-width="100%" />
        </v-dialog>


        <!-- Modal para Detalhes do Projeto -->
        <v-dialog v-model="projectDialog" max-width="80vw" >
            <v-card class="project-modal-card">
                <div class="carrouselDetalls">
                    <CarouselComponent :slides="selectedProject.galery" :carouselSize="carouselSize" >
                        <template v-slot:default="{ slide }">
                            <img :src="slide.image" :alt="slide.alt" class="carousel-image" @click="openLargeImageModal(slide.image)">
                        </template>
                    </CarouselComponent>
                </div>
                <v-card-title class="modal-project-title">{{ selectedProject.title }}</v-card-title>
                <v-card-subtitle class="modal-project-description">{{ selectedProject.description }}</v-card-subtitle>
                
                <v-card-text class="modal-project-technologies">                
                    <v-chip
                        v-for="tech in selectedProject.technologies"
                        :key="tech"
                        class="tech-chip"
                        color="primary"
                        text-color="white"
                    >
                        {{ tech }}
                    </v-chip>
                </v-card-text>

                <v-card-actions>
                    <v-btn text  class="project-btn" @click="projectDialog = false">Fechar</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
  
<script>
  import ProjecsSectionScript from './ProjectsSection.js';

    export default {
        ...ProjecsSectionScript,
    };
  
</script>
  
<style lang="scss" scoped>
  @import './ProjectsSection.scss';
  
</style>
  