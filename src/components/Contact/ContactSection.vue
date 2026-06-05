<template>
  <div class="contact-wrapper">
    <section id="contact" class="contact-section">

      <div class="contact-bg-glow"></div>
      <div class="contact-bg-glow-2"></div>

      <!-- Cabeçalho -->
      <div class="contact-header" :class="{ 'is-visible': visible }">
        <p class="contact-label">CONTATO</p>
        <h2 class="contact-title">Vamos construir algo<br><span class="highlight">extraordinário juntos.</span></h2>
        <p class="contact-subtitle">
          Aberto a novas oportunidades, projetos desafiadores e parcerias estratégicas.
        </p>
      </div>

      <!-- Layout principal -->
      <div class="contact-layout">

        <!-- Esquerda: perfil -->
        <div class="contact-profile-card" :class="{ 'is-visible': visible }">

          <!-- Layer 1: gradient mesh de fundo -->
          <div class="pc-mesh"></div>

          <!-- Layer 2: rede tecnológica animada -->
          <NetworkBackground class="pc-network" />

          <!-- Layer 3: iluminação lateral esquerda -->
          <div class="pc-light-left"></div>

          <!-- Layer 4: borda superior luminosa -->
          <div class="pc-top-line"></div>

          <!-- Foto -->
          <div class="profile-photo-wrap">
            <img :src="photoUrl" alt="Lucas Britto" class="profile-photo" />
          </div>

          <div class="profile-info">
            <h3 class="profile-name">Lucas Britto</h3>
            <p class="profile-role">Desenvolvedor Full Stack Sênior</p>

            <p class="profile-bio">
              Especialista em Laravel e Vue.js com mais de 9 anos desenvolvendo
              sistemas corporativos, APIs REST e soluções escaláveis.
            </p>

            <!-- Stack principal -->
            <div class="profile-stack">
              <span v-for="s in stack" :key="s" class="stack-badge">{{ s }}</span>
            </div>

            <div class="profile-meta">
              <div class="profile-location">
                <v-icon size="12" color="rgba(255,108,42,0.7)">mdi-map-marker-outline</v-icon>
                <span>Salvador, BA — Brasil</span>
              </div>
              <div class="profile-available">
                <span class="available-dot"></span>
                Disponível para projetos
              </div>
            </div>
          </div>
        </div>

        <!-- Direita: links -->
        <div class="contact-links" :class="{ 'is-visible': visible }">

          <a
            v-for="(link, i) in links"
            :key="link.label"
            :href="link.href"
            :target="link.external ? '_blank' : undefined"
            class="contact-link-card"
            :style="{ animationDelay: visible ? `${0.4 + i * 0.08}s` : '0s' }"
          >
            <div class="link-icon-wrap">
              <v-icon size="19" color="#ff6c2a">{{ link.icon }}</v-icon>
            </div>
            <div class="link-info">
              <span class="link-label">{{ link.label }}</span>
              <span class="link-value">{{ link.value }}</span>
            </div>
            <v-icon size="15" class="link-arrow">mdi-arrow-top-right</v-icon>
          </a>

          <!-- Divisor -->
          <div class="contact-divider"></div>

          <!-- CTA único -->
          <a href="/Lucas_Britto_CV.pdf" download="Lucas_Brito_Machado_CV.pdf" class="cta-cv">
            <v-icon size="16">mdi-download</v-icon>
            Baixar Currículo
          </a>

        </div>

      </div>


    </section>
  </div>
</template>

<script>
import NetworkBackground from '../HomeComponent/NetworkBackground.vue';

export default {
  name: 'ContactSection',
  components: { NetworkBackground },

  data() {
    return {
      visible: false,
      photoUrl: require('@/assets/imagens/config/skin_lucas.png'),
      stack: ['PHP','Laravel', 'Vue.js', 'Angular', 'APIs REST'],
      links: [
        { label: 'E-mail',    icon: 'mdi-email-outline',    href: 'mailto:mister.britto@hotmail.com', value: 'mister.britto@hotmail.com', external: false },
        { label: 'LinkedIn',  icon: 'mdi-linkedin',          href: 'https://www.linkedin.com/in/lucaas-britto/', value: '/lucaas-britto', external: true },
        { label: 'GitHub',    icon: 'mdi-github',            href: 'https://github.com/lucaasbritto', value: '/lucaasbritto', external: true },
        { label: 'WhatsApp',  icon: 'mdi-whatsapp',          href: 'https://wa.me/5571991126031',     value: '+55 71 9 9112-6031', external: true },
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
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    observer.observe(this.$el);
  },
};
</script>

<style lang="scss">
  @import './ContactSection.scss';
</style>
