<template>
  <section id="home" class="home-section">

    <div class="bg-grid"></div>

    <div class="home-content">

      <!-- Esquerda: texto -->
      <div class="hero-text">

        <div class="badge animate-1">
          <span class="badge-dot"></span>
          DESENVOLVEDOR FULL STACK
        </div>

        <div class="hero-name">
          <span class="name-white">{{ typedLucas }}</span>
          <span class="name-orange">{{ typedBritto }}</span>
          <span class="name-cursor" :class="{ 'cursor-hidden': cursorHidden }">|</span>
        </div>

        <h1 class="hero-title animate-3">
          Transformo sistemas complexos<br>
          em soluções escaláveis<br>
          <span class="highlight">há mais de 9 anos.</span>
        </h1>

        <p class="hero-desc animate-4">
          Atuando em projetos corporativos de alta complexidade,
          desenvolvendo APIs, integrações e aplicações web robustas
          com foco em performance, escalabilidade e qualidade de código.
        </p>

        <div class="hero-buttons animate-5">
          <a href="#" @click.prevent="scrollTo('career')" class="btn-primary">
            <v-icon size="16">mdi-timeline-outline</v-icon>
            Ver Trajetória
          </a>
          <a href="#" @click.prevent="scrollTo('project')" class="btn-secondary">
            <v-icon size="16">mdi-rocket-launch-outline</v-icon>
            Ver Projetos
          </a>
        </div>

        <div class="hero-meta animate-6">
          <span class="meta-item">
            <v-icon size="14">mdi-map-marker-outline</v-icon>
            Salvador - BA, Brasil
          </span>
          <span class="meta-item">
            <span class="available-dot"></span>
            Disponível para novos projetos
          </span>
        </div>

      </div>

      <!-- Direita: foto + elementos visuais (desktop) -->
      <div class="hero-photo-col animate-photo">

        <NetworkBackground />
        <CodeBackground />
        <OrbitRings />

        <img
          :src="require('@/assets/imagens/config/skin_lucas.png')"
          alt="Lucas Britto"
          class="hero-photo"
        />

        <div class="float-card float-card--tl">
          <v-icon size="16" color="#FF2D20">mdi-laravel</v-icon>
          <span>Laravel</span>
        </div>
        <div class="float-card float-card--bl">
          <v-icon size="16" color="#7a86b8">mdi-language-php</v-icon>
          <span>PHP</span>
        </div>
        <div class="float-card float-card--tr">
          <v-icon size="16" color="#42b883">mdi-vuejs</v-icon>
          <span>Vue.js</span>
        </div>
        <div class="float-card float-card--br">
          <v-icon size="16" color="#DD0031">mdi-angular</v-icon>
          <span>Angular</span>
        </div>

      </div>

      <!-- Mobile: layout centralizado -->
      <div class="hero-mobile">

        <!-- Foto de rosto -->
        <div class="mobile-photo-wrap">
          <img
            :src="require('@/assets/imagens/config/perfil_lucas.png')"
            alt="Lucas Britto"
            class="mobile-photo"
          />
        </div>

        <!-- Nome -->
        <div class="mobile-name">
          <span class="name-white">{{ typedLucas }}</span>
          <span class="name-orange">{{ typedBritto }}</span>
          <span class="name-cursor" :class="{ 'cursor-hidden': cursorHidden }">|</span>
        </div>

        <!-- Badge -->
        <div class="mobile-badge">
          <span class="badge-dot"></span>
          DESENVOLVEDOR FULL STACK
        </div>

        <!-- Título -->
        <h1 class="mobile-title">
          Transformo sistemas complexos em soluções escaláveis
          <span class="highlight"> há mais de 9 anos.</span>
        </h1>

        <!-- Badges de tecnologia -->
        <div class="mobile-tech-badges">
          <span class="mobile-tech-badge">
            <v-icon size="13" color="#7a86b8">mdi-language-php</v-icon> PHP
          </span>
          <span class="mobile-tech-badge">
            <v-icon size="13" color="#FF2D20">mdi-laravel</v-icon> Laravel
          </span>
          <span class="mobile-tech-badge">
            <v-icon size="13" color="#42b883">mdi-vuejs</v-icon> Vue.js
          </span>
          <span class="mobile-tech-badge">
            <v-icon size="13" color="#DD0031">mdi-angular</v-icon> Angular
          </span>
        </div>

        <!-- Botões -->
        <div class="mobile-buttons">
          <a href="#" @click.prevent="scrollTo('career')" class="btn-primary">
            <v-icon size="15">mdi-timeline-outline</v-icon>
            Ver Trajetória
          </a>
          <a href="/Lucas_Britto_CV.pdf" download="Lucas_Brito_Machado_CV.pdf" class="btn-secondary">
            <v-icon size="15">mdi-download</v-icon>
            Baixar CV
          </a>
        </div>

        <!-- Meta -->
        <div class="mobile-meta">
          <span class="meta-item">
            <span class="available-dot"></span>
            Disponível para novos projetos
          </span>
        </div>

      </div>

    </div>

    <!-- Métricas desktop -->
    <div class="metrics-bar">
      <div class="metric-card" v-for="m in metrics" :key="m.label">
        <span class="metric-number">{{ m.display }}{{ m.suffix }}</span>
        <span class="metric-label">{{ m.label }}</span>
      </div>
    </div>

    <!-- Métricas mobile (grid 2x2) -->
    <div class="metrics-bar-mobile">
      <div class="metric-card-mobile" v-for="m in metrics" :key="'m-' + m.label">
        <span class="metric-number">{{ m.display }}{{ m.suffix }}</span>
        <span class="metric-label">{{ m.label }}</span>
      </div>
    </div>

  </section>
</template>

<script>
import NetworkBackground from './NetworkBackground.vue';
import CodeBackground    from './CodeBackground.vue';
import OrbitRings        from './OrbitRings.vue';

export default {
  name: 'HomeComponent',
  components: { NetworkBackground, CodeBackground, OrbitRings },

  data() {
    return {
      typedLucas:   '',
      typedBritto:  '',
      cursorHidden: false,
      metrics: [
        { target: 9,  suffix: '+', display: 0, label: 'Anos de experiência'   },
        { target: 10, suffix: '+', display: 0, label: 'Empresas atendidas'     },
        { target: 15, suffix: '+', display: 0, label: 'Tecnologias utilizadas' },
        { target: 20, suffix: '+', display: 0, label: 'Projetos entregues'     },
      ],
    };
  },

  mounted() {
    this.typewriterName();
    this.animateCounters();
  },

  methods: {
    scrollTo(section) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },

    typewriterName() {
      const lucas = 'LUCAS ';
      const britto = 'BRITTO';
      const speed = 80;

      setTimeout(() => {
        let i = 0;
        const timerLucas = setInterval(() => {
          this.typedLucas = lucas.slice(0, ++i);
          if (i >= lucas.length) {
            clearInterval(timerLucas);
            let j = 0;
            const timerBritto = setInterval(() => {
              this.typedBritto = britto.slice(0, ++j);
              if (j >= britto.length) {
                clearInterval(timerBritto);
                setTimeout(() => this.startCursorBlink(), 400);
              }
            }, speed);
          }
        }, speed);
      }, 300);
    },

    startCursorBlink() {
      let blinks = 0;
      const timer = setInterval(() => {
        this.cursorHidden = !this.cursorHidden;
        if (++blinks >= 6) {
          clearInterval(timer);
          this.cursorHidden = true;
        }
      }, 400);
    },

    animateCounters() {
      const duration = 1800;
      const delay = 600;
      this.metrics.forEach((metric, i) => {
        setTimeout(() => {
          let current = 0;
          const stepTime = Math.floor(duration / metric.target);
          const timer = setInterval(() => {
            current++;
            metric.display = current;
            if (current >= metric.target) clearInterval(timer);
          }, stepTime);
        }, delay + i * 150);
      });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './HomeComponent.scss';
</style>
