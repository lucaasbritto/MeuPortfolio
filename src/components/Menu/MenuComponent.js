export default {
  name: 'MenuComponent',
  
  props: {
    menuItems: {
      type: Array,
      required: true
    },
  },

  data() {
    return {
      hover: null
    };
  },

  methods: {
    handleClick(item) {
      this.$emit('item-click', item);
    },
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId);
      if (element) {
        const menuHeight = 60; 
        const offsetPosition = element.offsetTop - menuHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    },
    updateActiveMenu() {
      const sections = document.querySelectorAll('.section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      sections.forEach(section => {
        const sectionId = section.getAttribute('id');
        const menuItem = this.menuItems.find(item => item.section === sectionId);
        
        if (menuItem) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            this.hover = menuItem.title;
          } else {
            if (this.hover === menuItem.title) {
              this.hover = null;
            }
          }
        }
      });
    },
    mounted() {
      window.addEventListener('scroll', this.updateActiveMenu);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.updateActiveMenu);
    }
  },
  mounted() {
    // Atualiza o menu ao rolar a página
    window.addEventListener('scroll', this.updateActiveMenu);
  },
  beforeDestroy() {
    // Remove o listener ao destruir o componente
    window.removeEventListener('scroll', this.updateActiveMenu);
  }

};
