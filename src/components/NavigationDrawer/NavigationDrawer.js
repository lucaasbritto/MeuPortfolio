export default {
    name: 'NavigationDrawer',
    props: {
      drawer: Boolean,
      drawerWidth: Number,
      menuItems: Array
    },

    data() {      
      return {
        localDrawer: this.drawer
      };
    },

    watch: {
      drawer(newValue) {
        this.localDrawer = newValue;
      },
      localDrawer(newValue) {
        this.$emit('update:drawer', newValue);
      }
    },

    methods: {      
        closeDrawer() {    
            this.localDrawer = false;
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
                this.localDrawer = false;
            }
        },
    }    
  }