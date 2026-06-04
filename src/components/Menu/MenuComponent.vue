<template>
  <nav class="menu-nav">
    <a
      v-for="item in menuItems"
      :key="item.section"
      class="menu-link"
      :class="{ active: activeSection === item.section }"
      @click.prevent="scrollToSection(item.section)"
      href="#"
    >
      {{ item.title }}
    </a>
  </nav>
</template>

<script>
export default {
  name: 'MenuComponent',

  props: {
    menuItems: { type: Array, required: true },
    activeSection: { type: String, default: 'home' },
  },

  methods: {
    scrollToSection(section) {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    },
  },
};
</script>

<style lang="scss" scoped>
  @import './MenuComponent.scss';
</style>
