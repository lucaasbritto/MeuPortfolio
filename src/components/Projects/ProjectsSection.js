import CarouselComponent from '../Carousel/CarouselComponent.vue';
export default {
  components: {    
      CarouselComponent,
  },

  data() {
    return {
      projects: [          
        {
          title: 'Pagamento com API Asaas',
          description: 'Aplicação web integrada com a API do Asaas, uma plataforma de pagamentos que oferece soluções completas para gerenciamento financeiro. O sistema foi desenvolvido para automatizar e simplificar processos de pagamento e cobrança, permitindo a criação e gestão de clientes, geração de cobranças, e recebimento de pagamentos por diferentes métodos, incluindo boleto bancário, cartão de crédito e QR Codes para pagamentos via Pix.',
          image:require('@/assets/imagens/projetos/asaas/imagem_capa.png'),
          galery: [
              { image: require('@/assets/imagens/projetos/asaas/imagem_capa.png'), },
              { image: require('@/assets/imagens/projetos/asaas/imagem_1.png'), },
              { image: require('@/assets/imagens/projetos/asaas/imagem_2.png'), },
          ],
          link: 'https://github.com/lucaasbritto/Pagamento-api-asaas-back',
          linkgit: 'https://github.com/lucaasbritto/Pagamento-api-asaas-back', 
          technologies: ['PHP', 'Laravel', 'API Asaas', 'Vue Js', 'VuetiFy', 'CSS']
        },
        {
          title: 'Portfólio Lucas Britto',
          description: 'Projeto criado para apresentar meus trabalhos e habilidades aos visitantes interessados em conhecer mais sobre mim.',
          image:require('@/assets/imagens/projetos/portfolio/imagem_capa.png'),
          galery: [
              { image: require('@/assets/imagens/projetos/portfolio/imagem_capa.png'), },
              { image: require('@/assets/imagens/projetos/portfolio/imagem_1.png'), },
              { image: require('@/assets/imagens/projetos/portfolio/imagem_2.png'), },
          ],
          link: 'https://github.com/lucaasbritto/MeuPortfolio',
          linkgit: 'https://github.com/lucaasbritto/MeuPortfolio',
          technologies: ['Vue Js', 'Vuetify', 'Sass']
        },
        {
          title: 'Carteira Digital',
          description: 'Este projeto é uma aplicação web desenvolvida com Laravel e Vue.js que simula a funcionalidade de uma carteira financeira digital. O sistema permite que usuários realizem transferências de dinheiro, consultem a cotação do dólar via uma API externa e visualizem o histórico de transações. A interface foi projetada para ser intuitiva e fácil de usar, oferecendo uma experiência de usuário fluida e responsiva.',
          image: require('@/assets/imagens/projetos/carteira_digital/imagem_capa.png'),
          galery: [
              { image: require('@/assets/imagens/projetos/carteira_digital/imagem_capa.png'), },
              { image: require('@/assets/imagens/projetos/carteira_digital/imagem_1.png'), },
              { image: require('@/assets/imagens/projetos/carteira_digital/imagem_2.png'), },
          ],
          link: 'https://github.com/lucaasbritto/Carteira-digital-back',
          linkgit: 'https://github.com/lucaasbritto/Carteira-digital-back',
          technologies: ['Laravel', 'Vue.js', 'Vuetify', 'MySql', 'CSS', 'API Rest']
        },          
        {
          title: 'Carnê Financeiro',
          description: 'API fornece funcionalidades para criar e recuperar carnês de pagamento. Os carnês podem ser divididos em parcelas com base nos parâmetros fornecidos, e a API pode recuperar parcelas de um carnê existente.',
          image:require('@/assets/imagens/projetos/carne_financeiro/imagem_capa.png'),
          galery: [
              { image: require('@/assets/imagens/projetos/carne_financeiro/imagem_capa.png'), },
              { image: require('@/assets/imagens/projetos/carne_financeiro/imagem_1.png'), },
              { image: require('@/assets/imagens/projetos/carne_financeiro/imagem_2.png'), },
          ],
          link: 'https://github.com/lucaasbritto/carne-financeiro-back',
          linkgit: 'https://github.com/lucaasbritto/carne-financeiro-back',
          technologies: ['PHP', 'Laravel', 'MySQL', 'Vue Js','Vuetify']
        },
        {
          title: 'Plano de Férias',
          description: 'O Gerenciador de Planos de Férias é uma aplicação robusta projetada para simplificar o planejamento e o gerenciamento das suas férias. Este sistema intuitivo oferece uma gama completa de funcionalidades para criar, editar, excluir e visualizar planos de férias de maneira eficiente. Além disso, a aplicação permite o download dos planos em formato PDF, facilitando o acesso e compartilhamento das informações.',
          image:require('@/assets/imagens/projetos/plano_ferias/imagem_capa.png'),
          galery: [
              { image: require('@/assets/imagens/projetos/plano_ferias/imagem_capa.png'), },
              { image: require('@/assets/imagens/projetos/plano_ferias/imagem_1.png'), },
              { image: require('@/assets/imagens/projetos/plano_ferias/imagem_2.png'), },
          ],
          link: 'https://github.com/lucaasbritto/Plano-ferias-back',
          linkgit: 'https://github.com/lucaasbritto/Plano-ferias-back',
          technologies: ['PHP', 'Laravel', 'Sanctum', 'MySQL', 'Vue Js', 'Vuetify']
        },          
        {
          title: 'Site da Skorpion (Em Construção)',
          description: 'Em desenvolvimento em breve disponivel...',
          image: require('@/assets/imagens/projetos/skorpion/imagem_capa.jpg'),
          galery: [
              { image: require('@/assets/imagens/projetos/skorpion/imagem_capa.jpg'), },
          ],
          link: '',
          linkgit: '',  
          technologies: ['Em Desenvolvimento...']
        },
      ],
      
      carouselSize: {
        width: '100%', 
        height: '250px !important'
      },

      imageDialog: false,
      largeImageDialog: false,
      selectedImage: '',        
      projectDialog: false,      
      selectedProject: {}
    };
  },

  methods: {
    truncateText(text, maxLength = 140) {
      if (text.length <= maxLength) return text;
      return text.slice(0, maxLength) + '...';
    },

    openProjectModal(project) {
      this.selectedProject = project;
      this.projectDialog = true;
    },
  
    openLargeImageModal(image) {
      this.selectedLargeImage = image;
      this.largeImageDialog = true;
    },
    
    isExpanded(project) {
      return this.selectedProject === project && this.projectDialog;
    },

    toggleExpand(project) {
      if (this.selectedProject === project) {
        this.projectDialog = !this.projectDialog;
      } else {
        this.openProjectModal(project);
      }
    }
  }
}