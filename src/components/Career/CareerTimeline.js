export default {
    data() {
      return {
        eventGroups: [
          [
            { profession: 'Bacharel Ciência da Computação', company: 'UNIFACS', period: 'Fev/2014 à Nov/2017', year: '2014', details: 'Formado em Ciência da Computação em 2017 pela UNIFACS Durante o curso, adquiri uma sólida base teórica e prática em áreas como programação, sistemas operacionais, banco de dados e desenvolvimento de software. ' },
            { profession: 'Desenvolvedor PHP - FullStack', company: 'INFINITY', period: 'Dez/2016 à Set/2019', year: '2016', infoCompany: 'Empresa nacional de pequeno porte do ramo de empréstimo consignado',  details: 'Estágio em Desenvolvimento PHP e logo efetivado para CLT, criação e manutenção de sistemas internos e o site, liderança em projetos, Coordenava equipe com 3 estagiários, Criação de Robô de automação de processo, manutenção em computadores, manipulação de planilhas, suporte ao usuário, banco de dados.', technologies: 'PHP | Javascript | WebService | HTML 5 | CSS 3 | Bootstrap | MySql | jQuery | Ajax | Json | Selenium |Java | GIT' },
            { profession: 'Desenvolvedor PHP - FullStack', company: 'CLICK INTERATIVO', period: 'Set/2019 à Nov/2019', year: '2019', infoCompany: 'Empresa nacional de pequeno porte do ramo de publicidade',  details: 'Desenvolvimento e manutenção em sistemas web utilizando PHP e CodeFusion, criação e manutenção de Sites responsivos para grandes empresas e universidades, estruturação de bancos de dados.', technologies: 'PHP | Javascript | HTML | CSS | Bootstrap | MySql | CodeFusion | FlexBox | Less' },
            { profession: 'Desenvolvedor PHP - FullStack', company: 'BINOVAÇÃO', period: 'Nov/2019 à Mar/2020', year: '2019', infoCompany: 'Empresa nacional de pequeno porte do ramo do cartório.',  details: 'Um CRA (Centro de Remessa de Arquivos) com desenvolvimentos e manutenções em sistemas web para conectar o cliente final com o cartório por meio de upload de documentos e protestos de arquivos, manutenção e consultas ao banco de dados, consumo e criação de APIs RESTful.', technologies: 'PHP | Javascript | APIs RESTful | GIT | HTML | CSS | Bootstrap | MySql | Postgresql | jQuery | Json' },
          ],
          [
            { profession: 'Desenvolvedor PHP - FullStack', company: 'HIPERIDEAL', period: 'Mar 2020 à Nov 2021', year: '2020', infoCompany: 'Empresa nacional de grande porte do segmento alimenticio.', details: 'Desenvolvimento e manutenções em sistemas da empresa utilizando framework Laravel, Vue JS , Consumo e criação de APIs RESTful para conectar com E-commerce e parceiros, consulta e manutenção no banco de dados, Analise de novos sistemas para incluir na empresa.', technologies: 'PHP | Laravel | Javascript | Vue Js | APIs RESTful | GIT | HTML | CSS | Bootstrap | MySql | Oracle | jQuery | Ajax | Json' },
            { profession: 'Desenvolvedor PHP - FullStack', company: 'INFOCRAFT', period: 'Fev 2022 à Set 2022', year: '2022', infoCompany: 'Empresa nacional de médio porte do segmento educacional.', details: 'Desenvolvimento e manutenções em sistemas da empresa utilizando frameworks como Laravel, Cake PHP, Vue JS e Angular, Consumo de APIs RESTful para conectar sistema Web com aplicativo e Desktop, Scrum como metodologia ágil, consulta e manutenção no banco de dados.', technologies: 'PHP | Laravel | Angular | Javascript | Vue Js | Cake PHP | APIs RESTful | GIT | HTML | CSS | Bootstrap | MySql | jQuery | Json | Scrum | Flutter' },
            { profession: 'Desenvolvedor PHP - FullStack', company: 'CLINICARX', period: 'Dez 2022 à Jun 2023', year: '2022', infoCompany: 'Empresa nacional de grande porte do segmento farmacêutico.', details: 'Desenvolvimento e manutenções em diversos sistemas da empresa utilizando frameworks como Laravel, Cake PHP, Vue JS e Angular, Consumo de APIs RESTful, Scrum como metodologia ágil, Docker como container de desenvolvimento.', technologies: 'PHP | Laravel | Angular | Javascript | Vue Js | Cake PHP | APIs RESTful | GIT | HTML | CSS | Bootstrap | MySql | Postgresql | jQuery | Json | Less | Docker | Vuetify | Scrum | Flutter' },
            { profession: 'Desenvolvedor PHP - FullStack', company: 'QUERO PASSAGEM', period: 'Jul 2023 à Jul 2024', year: '2023', infoCompany: 'Empresa nacional de grande porte do segmento rodoviário.', details: 'Criação de Portal(CRM) utilizando Framework Laravel, Php, Angular e Vue JS, Consumo e criação de API, Scrum como metodologia Ágil, Docker como container de desenvolvimento, Git para versionamento, Figma como orientação a Layout, banco de dados Mysql, MongoDB e ElasticSearch', technologies: 'PHP | Laravel | Javascript | Vue Js | APIs RESTful | GIT | HTML | CSS | Bootstrap | MySql | Oracle | jQuery | Ajax | Json' },
          ],        
        ],
        carouselItems: [0, 1],  // Número de itens do carrossel
        dialog: false,  // Controla a visibilidade do modal
        selectedEvent: {}  // Armazena o evento selecionado para o modal
      };
    },
    methods: {
      showDetails(event) {
        this.selectedEvent = event;
        this.dialog = true;
      }
    }
  }