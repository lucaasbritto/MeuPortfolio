<template>
  <div class="projects-wrapper">
    <section id="project" class="projects-section">

      <div class="projects-bg-glow"></div>

      <!-- Cabeçalho -->
      <div class="projects-header" :class="{ 'is-visible': visible }">
        <p class="projects-label">PROJETOS & CASES</p>
        <h2 class="projects-title">Projetos e Arquiteturas <span class="highlight">Desenvolvidas</span></h2>
        <p class="projects-subtitle">
          Soluções desenvolvidas para clientes reais e projetos criados para demonstrar
          arquitetura, integrações e boas práticas de desenvolvimento.
        </p>
      </div>

      <!-- Filtros/Tabs -->
      <div class="projects-tabs" :class="{ 'is-visible': visible }">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="projects-tab"
          :class="{ active: activeTab === tab.key }"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
          <span class="tab-count">{{ tab.count }}</span>
        </button>
      </div>

      <!-- Grid de projetos -->
      <transition name="grid-fade" mode="out-in">
        <div class="projects-grid" :key="activeTab">
          <div
            class="project-card"
            v-for="(p, i) in filteredProjects"
            :key="p.title"
            :class="{ 'is-visible': visible }"
            :style="{ animationDelay: `${i * 70}ms` }"
            @click="openModal(p)"
          >
            <!-- Screenshot -->
            <div class="project-card-image">
              <img :src="p.image" :alt="p.title" />
              <div class="project-card-overlay">
                <v-icon size="20" color="white">mdi-eye-outline</v-icon>
              </div>
              <!-- Badge de categoria -->
              <span v-if="p.type === 'professional'" class="project-cat-badge project-cat-badge--professional">
                Profissional
              </span>
              <span v-if="p.type === 'case'" class="project-cat-badge project-cat-badge--case">
                Case Técnico
              </span>
              <!-- Status -->
              <span class="project-status" :class="`project-status--${p.statusType}`">
                <span v-if="p.statusType === 'live'" class="project-status-dot"></span>
                {{ p.status }}
              </span>
            </div>

            <!-- Info -->
            <div class="project-card-body">
              <h3 class="project-card-title">{{ p.title }}</h3>
              <p class="project-card-desc">{{ p.description }}</p>
              <div class="project-tech-badges">
                <span
                  v-for="(t, ti) in p.technologies"
                  :key="t"
                  class="project-badge"
                  :class="{ 'project-badge--hidden': ti >= 4 }"
                >{{ t }}</span>
                <span v-if="p.technologies.length > 4" class="project-badge-more">
                  +{{ p.technologies.length - 4 }}
                </span>
              </div>
              <div class="project-card-cta">Ver detalhes <span class="project-card-cta-arrow">→</span></div>
            </div>
          </div>
        </div>
      </transition>

      <!-- Modal -->
      <transition name="modal-fade">
        <div v-if="modalOpen" class="proj-modal-overlay" @click.self="closeModal">
          <div class="proj-modal">
            <button class="proj-modal-close" @click="closeModal">
              <v-icon size="18">mdi-close</v-icon>
            </button>

            <!-- Imagens -->
            <div class="proj-modal-images" v-if="selectedProject.galery">
              <img
                v-for="(g, i) in selectedProject.galery"
                :key="i"
                :src="g.image"
                :alt="selectedProject.title"
                class="proj-modal-img"
                :class="{ active: modalSlide === i }"
              />
              <div class="proj-modal-nav" v-if="selectedProject.galery.length > 1">
                <button class="proj-modal-nav-btn" @click="modalSlide = Math.max(0, modalSlide - 1)">
                  <v-icon size="18">mdi-chevron-left</v-icon>
                </button>
                <div class="proj-modal-dots">
                  <span
                    v-for="(_, i) in selectedProject.galery"
                    :key="i"
                    :class="{ active: modalSlide === i }"
                    @click="modalSlide = i"
                  ></span>
                </div>
                <button class="proj-modal-nav-btn" @click="modalSlide = Math.min(selectedProject.galery.length - 1, modalSlide + 1)">
                  <v-icon size="18">mdi-chevron-right</v-icon>
                </button>
              </div>
            </div>

            <!-- Body -->
            <div class="proj-modal-body">
              <div class="proj-modal-meta">
                <span class="project-cat-badge" :class="`project-cat-badge--${selectedProject.type}`">
                  {{ selectedProject.type === 'professional' ? 'Profissional' : 'Case Técnico' }}
                </span>
                <span class="project-status" :class="`project-status--${selectedProject.statusType}`" style="position:static;">
                  {{ selectedProject.status }}
                </span>
              </div>
              <h2 class="proj-modal-title">{{ selectedProject.title }}</h2>
              <p class="proj-modal-desc">{{ selectedProject.fullDescription || selectedProject.description }}</p>

              <!-- Highlights se existir -->
              <div v-if="selectedProject.highlights" class="proj-modal-highlights">
                <span v-for="h in selectedProject.highlights" :key="h" class="proj-modal-highlight">
                  <v-icon size="11" color="#ff6c2a">mdi-check</v-icon>
                  {{ h }}
                </span>
              </div>

              <div class="project-tech-badges" style="flex-wrap:wrap; gap:6px;">
                <span v-for="t in selectedProject.technologies" :key="t" class="project-badge">{{ t }}</span>
              </div>

              <div class="proj-modal-actions">
                <a v-if="selectedProject.link && selectedProject.link !== selectedProject.linkgit" :href="selectedProject.link" target="_blank" class="proj-modal-btn proj-modal-btn--primary">
                  <v-icon size="15">mdi-open-in-new</v-icon> Acessar Projeto
                </a>
                <a v-if="selectedProject.linkgit" :href="selectedProject.linkgit" target="_blank" class="proj-modal-btn proj-modal-btn--ghost">
                  <v-icon size="15">mdi-github</v-icon> Código Fonte
                </a>
                <span v-if="!selectedProject.linkgit && !selectedProject.link" class="proj-modal-private">
                  <v-icon size="13">mdi-lock-outline</v-icon> Código Privado
                </span>
              </div>
            </div>
          </div>
        </div>
      </transition>

    </section>
  </div>
</template>

<script>
import ProjectsSectionJs from './ProjectsSection.js';
export default ProjectsSectionJs;
</script>

<style lang="scss">
  @import './ProjectsSection.scss';
</style>
