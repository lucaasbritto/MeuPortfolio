<template>
  <div class="tech-section-wrapper">
    <section id="about" class="tech-section">

      <!-- Rede tecnológica animada (reutilizada da Home) -->
      <NetworkBackground class="tech-network" />

      <!-- Gradiente radial de fundo -->
      <div class="tech-bg-glow"></div>

      <!-- Cabeçalho -->
      <div class="tech-header" :class="{ 'is-visible': visible }">
        <p class="tech-label">STACK TÉCNICA</p>
        <h2 class="tech-title">Tecnologias <span class="highlight">&</span> Especialidades</h2>
        <p class="tech-subtitle">
          Tecnologias utilizadas ao longo de mais de 9 anos desenvolvendo sistemas corporativos, integrações e soluções escaláveis.
        </p>
      </div>

      <!-- Especialidades -->
      <div class="specialties" :class="{ 'is-visible': visible }">
        <div class="specialty-item" v-for="s in specialties" :key="s">
          <span class="specialty-check">✓</span>
          <span>{{ s }}</span>
        </div>
      </div>

      <!-- Divisor -->
      <div class="tech-divider" :class="{ 'is-visible': visible }"></div>

      <!-- Cards -->
      <div class="tech-grid">
        <div
          class="tech-card"
          v-for="(cat, i) in categories"
          :key="cat.title"
          :class="{ 'is-visible': visible }"
          :style="{ transitionDelay: visible ? `${420 + i * 70}ms` : '0ms' }"
        >
          <div class="tech-card-header">
            <div class="tech-card-icon">
              <v-icon size="18" color="#ff6c2a">{{ cat.icon }}</v-icon>
            </div>
            <h3 class="tech-card-title">{{ cat.title }}</h3>
          </div>
          <div class="tech-badges">
            <span
              v-for="item in cat.items"
              :key="item"
              class="tech-badge"
              :class="{ 'tech-badge--highlight': highlighted.includes(item) }"
            >{{ item }}</span>
          </div>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import NetworkBackground from '../HomeComponent/NetworkBackground.vue';

export default {
  name: 'AboutMe',
  components: { NetworkBackground },

  data() {
    return {
      visible: false,
      highlighted: ['PHP', 'Laravel', 'Vue.js', 'Angular', 'PostgreSQL', 'MySQL', 'Docker', 'APIs RESTful'],

      specialties: [
        'Sistemas Corporativos',
        'APIs REST e Integrações',
        'Arquitetura de Software',
        'Desenvolvimento Full Stack',
        'Automação e IA',
      ],

      categories: [
        {
          title: 'Linguagens & Frameworks',
          icon: 'mdi-code-braces',
          items: ['PHP', 'Laravel', 'CakePHP', 'JavaScript', 'Vue.js', 'Angular', 'React', 'TypeScript', 'jQuery', 'Python', 'Flutter'],
        },
        {
          title: 'Frontend & UI',
          icon: 'mdi-palette-outline',
          items: ['Bootstrap', 'Vuetify', 'Quasar', 'Tailwind CSS'],
        },
        {
          title: 'Bancos de Dados',
          icon: 'mdi-database-outline',
          items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'Neo4j', 'Elasticsearch', 'SQLite'],
        },
        {
          title: 'Arquitetura & Integrações',
          icon: 'mdi-hexagon-multiple-outline',
          items: ['APIs RESTful', 'SOAP', 'Microserviços', 'Kafka', 'Redis'],
        },
        {
          title: 'Engenharia de Software',
          icon: 'mdi-layers-outline',
          items: ['SOLID', 'Clean Architecture', 'Design Patterns', 'Clean Code', 'Modelagem de Dados'],
        },
        {
          title: 'DevOps & Infraestrutura',
          icon: 'mdi-server-network',
          items: ['Docker', 'Git', 'GitLab', 'CI/CD', 'Swagger', 'Azure', 'AWS'],
        },
        {
          title: 'Testes Automatizados',
          icon: 'mdi-test-tube',
          items: ['PHPUnit', 'Playwright', 'Selenium', 'Vitest'],
        },
        {
          title: 'Inteligência Artificial & Automação',
          icon: 'mdi-brain',
          items: ['n8n', 'Chatbots', 'OpenAI', 'Claude', 'Cursor', 'Supabase'],
        },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible = true;
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
    );
    observer.observe(this.$el);
  },
};
</script>

<style lang="scss">
  @import './AbouteMe.scss';
</style>
