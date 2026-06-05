<template>
  <div class="career-wrapper">
    <section id="career" class="career-section">

      <!-- Fundo decorativo -->
      <div class="career-bg-glow"></div>

      <!-- Cabeçalho -->
      <div class="career-header" :class="{ 'is-visible': visible }">
        <p class="career-label">EXPERIÊNCIA</p>
        <h2 class="career-title">Minha Jornada <span class="highlight">Profissional</span></h2>
        <p class="career-subtitle">
          Atuando em sistemas críticos, integrações complexas
          e aplicações corporativas de alta performance.
        </p>
      </div>

      <!-- Timeline horizontal visual -->
      <div class="career-timeline" :class="{ 'is-visible': visible }">
        <div class="timeline-track">
          <span class="timeline-year-start">2016</span>
          <div class="timeline-line" ref="timelineLine">
            <div class="timeline-progress" :style="{ transform: `scaleX(${lineProgress})` }"></div>
            <div
              v-for="dot in timelineDots"
              :key="dot.label"
              class="timeline-dot"
              :class="dot.cls"
              :data-label="dot.label"
            ></div>
          </div>
          <span class="timeline-year-end">2026</span>
        </div>
        <p class="timeline-caption">9+ anos construindo sistemas corporativos, APIs, integrações e soluções escaláveis.</p>
      </div>

      <!-- Cards principais -->
      <div class="career-grid">
        <div
          class="career-card"
          v-for="(exp, i) in mainExperiences"
          :key="exp.company"
          :class="{ 'is-visible': visible, 'career-card--current': exp.current, 'career-card--last': exp.last, 'career-card--mobile-hidden': i >= 3 }"
          :style="{ animationDelay: visible ? `${200 + i * 150}ms` : '0ms' }"
        >
          <!-- Topo: logo + empresa + cargo -->
          <div class="career-card-top">
            <!-- Logo -->
            <div class="career-logo-wrap">
              <img v-if="exp.logo" :src="exp.logo" :alt="exp.company" class="career-logo" />
              <span v-else class="career-logo-fallback">{{ exp.company.charAt(0) }}</span>
            </div>

            <div class="career-card-info">
              <div class="career-company-row">
                <h3 class="career-company">{{ exp.company }}</h3>
                <span v-if="exp.last" class="career-last-banner">
                  <v-icon size="10">mdi-star-outline</v-icon>
                  Última
                </span>
              </div>
              <p class="career-role">{{ exp.role }}</p>
              <div class="career-meta">
                <span class="career-period">
                  <v-icon size="11" color="rgba(255,108,42,0.7)">mdi-calendar-outline</v-icon>
                  {{ exp.period }}
                </span>
                <span class="career-segment-badge">
                  <v-icon size="11">mdi-domain</v-icon>
                  {{ exp.segment }}
                </span>
              </div>
            </div>
          </div>

          <!-- Conquistas -->
          <div class="career-achievements">
            <p class="career-achievements-label">Principais Conquistas</p>
            <ul class="career-highlights">
              <li v-for="h in exp.highlights" :key="h">{{ h }}</li>
            </ul>
          </div>

          <!-- Tecnologias: 5 visíveis, restantes aparecem no hover -->
          <div class="career-tech-badges">
            <span
              v-for="(t, ti) in exp.tech"
              :key="t"
              class="career-badge career-badge--highlight"
              :class="{ 'career-badge--hidden': ti >= 5 }"
            >{{ t }}</span>
            <span v-if="exp.tech.length > 5" class="career-badge-more">
              +{{ exp.tech.length - 5 }} tecnologias
            </span>
          </div>
        </div>
      </div>

      <!-- Accordion experiências anteriores -->
      <div class="career-older" :class="{ 'is-visible': visible }">
        <button class="career-older-btn" @click="showOlder = !showOlder">
          <v-icon size="16">{{ showOlder ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          {{ showOlder ? 'Ocultar experiências anteriores' : 'Ver experiências anteriores' }}
        </button>

        <transition name="career-expand">
          <div v-if="showOlder" class="career-grid career-grid--older">
            <!-- No mobile: exibe também os cards ocultos do grid principal -->
            <div
              class="career-card career-card--compact is-visible"
              v-for="exp in mobileHiddenExperiences"
              :key="'hidden-' + exp.company"
            >
              <div class="career-card-top">
                <div class="career-logo-wrap">
                  <img v-if="exp.logo" :src="exp.logo" :alt="exp.company" class="career-logo" />
                  <span v-else class="career-logo-fallback">{{ exp.company.charAt(0) }}</span>
                </div>
                <div class="career-card-info">
                  <h3 class="career-company">{{ exp.company }}</h3>
                  <p class="career-role">{{ exp.role }}</p>
                  <div class="career-meta">
                    <span class="career-period">
                      <v-icon size="11" color="rgba(255,108,42,0.7)">mdi-calendar-outline</v-icon>
                      {{ exp.period }}
                    </span>
                    <span class="career-segment-badge">
                      <v-icon size="11">mdi-domain</v-icon>
                      {{ exp.segment }}
                    </span>
                  </div>
                </div>
              </div>
              <ul class="career-highlights">
                <li v-for="h in exp.highlights" :key="h">{{ h }}</li>
              </ul>
              <div class="career-tech-badges">
                <span
                  v-for="(t, ti) in exp.tech"
                  :key="t"
                  class="career-badge career-badge--highlight"
                  :class="{ 'career-badge--hidden': ti >= 5 }"
                >{{ t }}</span>
              </div>
            </div>

            <div
              class="career-card career-card--compact is-visible"
              v-for="exp in olderExperiences"
              :key="exp.company"
            >
              <div class="career-card-top">
                <div class="career-logo-wrap">
                  <img v-if="exp.logo" :src="exp.logo" :alt="exp.company" class="career-logo" />
                  <span v-else class="career-logo-fallback">{{ exp.company.charAt(0) }}</span>
                </div>
                <div class="career-card-info">
                  <h3 class="career-company">{{ exp.company }}</h3>
                  <p class="career-role">{{ exp.role }}</p>
                  <div class="career-meta">
                    <span class="career-period">
                      <v-icon size="11" color="rgba(255,108,42,0.7)">mdi-calendar-outline</v-icon>
                      {{ exp.period }}
                    </span>
                    <span class="career-segment-badge">
                      <v-icon size="11">mdi-domain</v-icon>
                      {{ exp.segment }}
                    </span>
                  </div>
                </div>
              </div>
              <p class="career-summary">{{ exp.summary }}</p>
              <div class="career-tech-badges">
                <span
                  v-for="(t, ti) in exp.tech"
                  :key="t"
                  class="career-badge career-badge--highlight"
                  :class="{ 'career-badge--hidden': ti >= 5 }"
                >{{ t }}</span>
                <span v-if="exp.tech.length > 5" class="career-badge-more">
                  +{{ exp.tech.length - 5 }} tecnologias
                </span>
              </div>
            </div>
          </div>
        </transition>
      </div>

    </section>
  </div>
</template>

<script>
export default {
  name: 'CareerTimeline',

  data() {
    return {
      visible: false,
      showOlder: false,
      lineProgress: 0,
      techHighlighted: ['PHP', 'Laravel', 'Vue.js', 'Angular', 'PostgreSQL', 'MySQL', 'Docker', 'APIs RESTful'],

      timelineDots: [
        { cls: 'tl-d1', label: '2016' },
        { cls: 'tl-d2', label: '2020' },
        { cls: 'tl-d3', label: '2022' },
        { cls: 'tl-d4', label: '2024' },
        { cls: 'tl-d5', label: '2025' },
      ],

      mainExperiences: [
        {
          company: 'Smartleader',
          role: 'Desenvolvedor Full Stack',
          period: 'Jul 2025 – Abr 2026',
          year: '2025',
          segment: 'Gestão Corporativa',
          current: false,
          last: true,
          logo: require('@/assets/imagens/empresas/smartleader.svg'),
          highlights: [
            'Time SWAT — resolução de incidentes críticos em produção',
            'Automação de processos com IA e n8n',
            'Arquitetura com filas Kafka e Redis para alta performance',
          ],
          tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Redis', 'Docker',  'Git', 'APIs RESTful', 'n8n', 'Python', 'Playwright'],
        },
        {
          company: 'MPMG',
          role: 'Desenvolvedor Full Stack',
          period: 'Abr 2024 – Jul 2025',
          year: '2024',
          segment: 'Governo',
          current: false,
          logo: require('@/assets/imagens/empresas/mpmg.png'),
          highlights: [
            'Modernização de sistema governamental crítico',
            'Refatoração de arquitetura e integrações complexas',
            'Elasticsearch, Neo4j e MongoDB em ambiente corporativo',
          ],
          tech: ['Laravel', 'Vue.js', 'MongoDB', 'Elasticsearch','Neo4j', 'Docker', 'CI/CD', 'Kafka','GitLab'],
        },
        {
          company: 'Quero Passagem',
          role: 'Desenvolvedor Full Stack',
          period: 'Jul 2023 – Jul 2024',
          year: '2023',
          segment: 'Mobilidade',
          current: false,
          logo: require('@/assets/imagens/empresas/queropassagem.png'),
          highlights: [
            'CRM corporativo construído do zero',
            'Integrações de pagamento e APIs de transporte',
            'Otimização de consultas SQL e melhoria de performance',
          ],
          tech: ['Laravel', 'Angular', 'TypeScript', 'PostgreSQL', 'Docker', 'Flutter', 'GitLab', 'Apis RESTful'],
        },
        {
          company: 'Clinicarx',
          role: 'Desenvolvedor Full Stack',
          period: 'Dez 2022 – Jun 2023',
          year: '2022',
          segment: 'Farmacêutico',
          current: false,
          logo: require('@/assets/imagens/empresas/clinicarx.png'),
          highlights: [
            'Múltiplos sistemas farmacêuticos em produção',
            'Integrações RESTful com plataformas regulatórias',
            'Flutter para aplicação mobile integrada',
          ],
          tech: ['Laravel', 'Vue.js', 'Angular', 'PostgreSQL', 'MySQL','Docker', 'Flutter'],
        },
        {
          company: 'Infocraft',
          role: 'Desenvolvedor Full Stack',
          period: 'Fev 2022 – Set 2022',
          year: '2022',
          segment: 'Educação',
          current: false,
          logo: require('@/assets/imagens/empresas/infocraft.png'),
          highlights: [
            'Sistema educacional multissistema em produção',
            'Integração web, mobile e desktop via API',
            'Entrega ágil com Scrum e documentação técnica',
          ],
          tech: ['Laravel', 'Livewire', 'Angular', 'MySQL', 'PostgreSQL', 'Flutter', 'Tailwind CSS','Git'],
        },
        {
          company: 'Hiperideal',
          role: 'Desenvolvedor Full Stack',
          period: 'Mar 2020 – Nov 2021',
          year: '2020',
          segment: 'Alimentício',
          current: false,
          logo: require('@/assets/imagens/empresas/hiperideal.webp'),
          highlights: [
            'Desenvolvimento de sistemas internos com Laravel e Vue.js',
            'APIs RESTful para integração com e-commerce e parceiros',
            'Análise e implantação de novos sistemas corporativos',
          ],
          tech: ['Laravel', 'Vue.js', 'Angular','MySQL', 'Oracle', 'APIs RESTful', 'VTex', 'Vuetify','Ajax'],
        },
      ],

      olderExperiences: [
        {
          company: 'Binovação',
          role: 'Desenvolvedor Full Stack',
          period: 'Nov 2019 – Mar 2020',
          year: '2019',
          segment: 'Cartório / Jurídico',
          logo: require('@/assets/imagens/empresas/binovacao.png'),
          summary: 'Sistema de remessa de arquivos entre clientes e cartórios. Consumo e criação de APIs RESTful, upload de documentos e protestos.',
          tech: ['PHP', 'APIs RESTful', 'MySQL', 'PostgreSQL', 'SOAP', 'Bootstrap', 'jQuery'],
        },
        {
          company: 'Click Interativo',
          role: 'Desenvolvedor Full Stack',
          period: 'Set 2019 – Nov 2019',
          year: '2019',
          segment: 'Publicidade',
          logo: require('@/assets/imagens/empresas/clickinterativo.png'),
          summary: 'Desenvolvimento e manutenção de sites responsivos para grandes empresas e universidades.',
          tech: ['PHP', 'ColdFusion', 'MySQL', 'Bootstrap', 'Flexbox', 'jQuery', 'Less'],
        },
        {
          company: 'Infinity',
          role: 'Desenvolvedor Full Stack',
          period: 'Dez 2016 – Set 2019',
          year: '2016',
          segment: 'Empréstimo Consignado',
          summary: 'Primeiro emprego como desenvolvedor. Criação de sistemas internos, liderança de equipe, automação de processos, Criação de robôs e suporte técnico.',
          tech: ['PHP', 'JavaScript', 'MySQL', 'jQuery', 'Selenium', 'Bootstrap', 'Java', 'Ajax', 'Git', 'Sqlite', 'APIs RESTful'],
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
          this.startScrollProgress();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    );
    observer.observe(this.$el);
  },

  computed: {
    mobileHiddenExperiences() {
      return window.innerWidth < 600 ? this.mainExperiences.slice(3) : [];
    },
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this._onScroll);
  },

  methods: {
    startScrollProgress() {
      this._onScroll = () => {
        const el = this.$el;
        const rect = el.getBoundingClientRect();
        const raw = 1 - (rect.bottom - window.innerHeight * 0.3) / (rect.height * 0.7);
        this.lineProgress = Math.min(1, Math.max(0, raw));
      };
      window.addEventListener('scroll', this._onScroll, { passive: true });
      this._onScroll();
    },
  },
};
</script>

<style lang="scss">
  @import './CareerTimeline.scss';
</style>
