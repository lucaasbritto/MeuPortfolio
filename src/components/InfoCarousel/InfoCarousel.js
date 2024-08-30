export default {    
    data() {
      return {
        slides: [
          { icon: 'mdi-truck', title: 'Frete Grátis', description: 'Todo o Brasil' },
          { icon: 'mdi-package-variant', title: 'Embalagem Discreta', description: 'Protege sua privacidade' },
          { icon: 'mdi-credit-card', title: 'Aceitamos Cartões', description: 'Várias bandeiras' },
          { icon: 'mdi-tag', title: 'Desconto de 10%', description: 'Em todos os produtos' },
        ],
        carouselSize: {
            width: '100%', 
            height: '80px !important'
        },
        currentIndex: 0,
        itemsPerView: 2
      };
    }
  };