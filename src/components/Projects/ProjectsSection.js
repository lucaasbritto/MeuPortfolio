export default {
  name: 'ProjectsSection',

  data() {
    return {
      visible:         false,
      activeTab:       'all',
      modalOpen:       false,
      modalSlide:      0,
      selectedProject: {},

      tabs: [
        { key: 'all',          label: 'Todos',                  count: 6 },
        { key: 'professional', label: 'Projetos Profissionais', count: 3 },
        { key: 'case',         label: 'Cases Técnicos',         count: 3 },
      ],

      projects: [
        /* ===== PROFISSIONAIS ===== */
        {
          type: 'professional',
          title: 'API Futebol',
          status: 'Online',
          statusType: 'live',
          description: 'Estatísticas do Campeonato Brasileiro com layout personalizado por clube, tabela, artilheiros e próximos jogos.',
          fullDescription: 'Plataforma de estatísticas do Campeonato Brasileiro. Tabela de classificação, informações sobre times, jogos, resultados, artilheiros e assistências. Layout personalizado com as cores do clube escolhido.',
          image: require('@/assets/imagens/projetos/futebol/imagem_capa.png'),
          galery: [
            { image: require('@/assets/imagens/projetos/futebol/imagem_capa.png') },
            { image: require('@/assets/imagens/projetos/futebol/imagem_1.png') },
            { image: require('@/assets/imagens/projetos/futebol/imagem_2.png') },
            { image: require('@/assets/imagens/projetos/futebol/imagem_3.png') },
          ],
          highlights: ['Tabela de classificação em tempo real', 'Artilheiros e assistências', 'Layout por clube com cores personalizadas'],
          link: 'https://lucasbritto.com/football/',
          linkgit: 'https://github.com/lucaasbritto/Campeonato-back',
          technologies: ['Laravel', 'Vue.js', 'Vuetify', 'API Football', 'Swagger', 'MySQL'],
        },
        {
          type: 'professional',
          title: 'Portfólio Lucas Britto',
          status: 'Online',
          statusType: 'live',
          description: 'Portfólio pessoal com design system premium, animações de entrada, seção de experiência interativa e contato.',
          fullDescription: 'Portfólio pessoal desenvolvido com Vue.js e design system próprio, apresentando projetos, carreira e stack técnica com visual premium inspirado em SaaS moderno.',
          image: require('@/assets/imagens/projetos/portfolio/imagem_capa.png'),
          galery: [
            { image: require('@/assets/imagens/projetos/portfolio/imagem_capa.png') },
            { image: require('@/assets/imagens/projetos/portfolio/imagem_1.png') },
            { image: require('@/assets/imagens/projetos/portfolio/imagem_2.png') },
          ],
          highlights: ['Design system próprio', 'Animações com IntersectionObserver', 'Responsivo e performático'],
          link: 'https://github.com/lucaasbritto/MeuPortfolio',
          linkgit: 'https://github.com/lucaasbritto/MeuPortfolio',
          technologies: ['Vue.js', 'Vuetify', 'SCSS'],
        },
        {
          type: 'professional',
          title: 'Sistema de Gestão Comercial',
          status: 'Em Desenvolvimento',
          statusType: 'dev',
          description: 'Plataforma web para gestão de clientes, contratos de crédito consignado e controle de equipe com funil de vendas e métricas em tempo real.',
          fullDescription: 'Plataforma web para gestão de clientes, contratos de crédito consignado e controle de equipe. O sistema permite acompanhar todo o funil de vendas — da prospecção à efetivação do contrato — com controle de ponto eletrônico e dashboard de métricas em tempo real.',
          image: require('@/assets/imagens/projetos/expertise/imagem_capa.png'),
          galery: [
            { image: require('@/assets/imagens/projetos/expertise/imagem_capa.png') },
            { image: require('@/assets/imagens/projetos/expertise/imagem_1.png') },
            { image: require('@/assets/imagens/projetos/expertise/imagem_2.png') },
            { image: require('@/assets/imagens/projetos/expertise/imagem_3.png') },
          ],
          highlights: ['Funil de vendas completo', 'Controle de ponto eletrônico', 'Dashboard de métricas em tempo real', 'Gestão de contratos consignados'],
          link: '',
          linkgit: '',
          technologies: ['Laravel','Vue.js', 'TypeScript', 'Quasar', 'Pinia',  'MySQL', 'Docker', 'JWT', 'REST API', 'NGINX'],
        },

        /* ===== CASES ===== */
        {
          type: 'case',
          title: 'Sistema de Gestão de Tarefas',
          status: 'Offline',
          statusType: 'offline',
          description: 'Plataforma web para gerenciamento de tarefas e equipes com suporte a múltiplas empresas, filtros avançados e notificações automáticas.',
          fullDescription: 'Plataforma web para gerenciamento de tarefas e equipes com suporte a múltiplas empresas. O sistema permite criar, acompanhar e priorizar demandas — com filtros avançados, exportação de relatórios e notificações automáticas por e-mail ao criar ou concluir uma tarefa.',
          image: require('@/assets/imagens/projetos/smartleader/imagem_capa.png'),
          galery: [
            { image: require('@/assets/imagens/projetos/smartleader/imagem_capa.png') },
            { image: require('@/assets/imagens/projetos/smartleader/imagem_1.png') },
            { image: require('@/assets/imagens/projetos/smartleader/imagem_2.png') },
            { image: require('@/assets/imagens/projetos/smartleader/imagem_3.png') },
          ],
          highlights: ['Multitenancy — suporte a múltiplas empresas', 'Notificações automáticas por e-mail', 'Filtros avançados e exportação de relatórios', 'Filas para processamento assíncrono'],
          link: '',
          linkgit: 'https://github.com/lucaasbritto/smartleader',
          technologies: ['Laravel','Vue.js', 'Vuex', 'Quasar', 'MySQL', 'Docker', 'JWT', 'REST API', 'Filas'],
        },
        {
          type: 'case',
          title: 'Plataforma de Notícias',
          status: 'Online',
          statusType: 'live',
          description: 'Plataforma web para publicação e gerenciamento de notícias do mercado financeiro com filtros, paginação e área administrativa.',
          fullDescription: 'Plataforma web para publicação e gerenciamento de notícias do mercado financeiro. O sistema permite criar, editar e organizar notícias por categorias, com filtros, paginação e área administrativa protegida por autenticação.',
          image: require('@/assets/imagens/projetos/investidor/imagem_capa.png'),
          galery: [
            { image: require('@/assets/imagens/projetos/investidor/imagem_capa.png') },
            { image: require('@/assets/imagens/projetos/investidor/imagem_1.png') },
            { image: require('@/assets/imagens/projetos/investidor/imagem_2.png') },
            { image: require('@/assets/imagens/projetos/investidor/imagem_3.png') },
          ],
          highlights: ['Criação e edição de notícias', 'Organização por categorias', 'Filtros e paginação', 'Área administrativa com autenticação'],
          link: 'https://lucasbritto.com/investidor/login',
          linkgit: 'https://github.com/lucaasbritto/investidor',
          technologies: ['Laravel','Vue.js', 'Quasar', 'Pinia', 'Vue Router', 'MySQL', 'Docker', 'JWT', 'REST API'],
        },
        {
          type: 'case',
          title: 'Sistema de Gestão de Viagens Corporativas',
          status: 'Offline',
          statusType: 'offline',
          description: 'Plataforma web para solicitação e acompanhamento de viagens corporativas com painel administrativo e notificações automáticas.',
          fullDescription: 'Plataforma web para solicitação e acompanhamento de viagens corporativas com painel administrativo. O sistema permite que colaboradores criem e monitorem pedidos de viagem enquanto gestores aprovam ou cancelam solicitações — com notificações automáticas por e-mail a cada mudança de status e controle de acesso baseado em perfil.',
          image: require('@/assets/imagens/projetos/onfly/imagem_capa.png'),
          galery: [
            { image: require('@/assets/imagens/projetos/onfly/imagem_capa.png') },
            { image: require('@/assets/imagens/projetos/onfly/imagem_1.png') },
            { image: require('@/assets/imagens/projetos/onfly/imagem_2.png') },
            { image: require('@/assets/imagens/projetos/onfly/imagem_3.png') },
          ],
          highlights: ['Solicitação e acompanhamento de viagens', 'Aprovação e cancelamento por gestores', 'Notificações automáticas por e-mail', 'Controle de acesso baseado em perfil'],
          link: '',
          linkgit: 'https://github.com/lucaasbritto/onfly',
          technologies: ['Laravel', 'Vue.js', 'Pinia', 'Axios', 'MySQL', 'JWT', 'REST API', 'Docker', 'Nginx', 'PHPUnit'],
        },
      ],
    };
  },

  computed: {
    filteredProjects() {
      if (this.activeTab === 'all') return this.projects;
      return this.projects.filter(p => p.type === this.activeTab);
    },
  },

  mounted() {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { this.visible = true; obs.disconnect(); } },
      { threshold: 0.08, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(this.$el);
  },

  methods: {
    openModal(p) {
      this.selectedProject = p;
      this.modalSlide = 0;
      this.modalOpen = true;
      document.body.style.overflow = 'hidden';
    },
    closeModal() {
      this.modalOpen = false;
      document.body.style.overflow = '';
    },
  },
};
