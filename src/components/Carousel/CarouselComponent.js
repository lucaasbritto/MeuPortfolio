export default {
    name: 'CarouselComponent',
    data() {
      return {
        currentIndex: 0,
      }
    },
    props: {
      slides: {
        type: Array,
        required: true
      },
      carouselSize: {
        type: Object,
        default: () => ({
          width: '100%',
          height: '500px' // Tamanho padrao de 500px
        })
      },
      carouselInterval: {
        type: Number,
        default: 4000 // Valor padrão de 4 segundos
      }
    },
    methods: {
      prevSlide() {
        this.currentIndex = (this.currentIndex > 0) ? this.currentIndex - 1 : this.slides.length - 1;
      },
      nextSlide() {
        this.currentIndex = (this.currentIndex < this.slides.length - 1) ? this.currentIndex + 1 : 0;
      }
    }
  };