import HomeComponent from '../HomeComponent/HomeComponent.vue';
import AboutMe from '../About/AboutMe.vue';
import ProjectsSection from '../Projects/ProjectsSection.vue';
import CareerTimeline from '../Career/CareerTimeline.vue';
import ContactSection from '../Contact/ContactSection.vue';

export default {
    name: 'BodySystem',  
    
    components: {
      HomeComponent,
      ProjectsSection,
      CareerTimeline,
      ContactSection,
      AboutMe,
    },
  
    data() {
      return {
          slides: [
              { image: 'https://via.placeholder.com/1200x800?text=Slide+1', alt: 'Slide 1' },
              { image: 'https://via.placeholder.com/1200x800?text=Slide+2', alt: 'Slide 2' },
              { image: 'https://via.placeholder.com/1200x800?text=Slide+3', alt: 'Slide 3' },
          ],
          technologies: [
            { name: 'PHP', icon: 'mdi-language-php' },
            { name: 'Laravel', icon: 'mdi-laravel' },
            { name: 'CakePHP', icon: 'mdi-cake' },
            { name: 'API Rest', icon: 'mdi-api' },
            { name: 'Vue.js', icon: 'mdi-vuejs' },
            { name: 'Angular', icon: 'mdi-angular' },            
            { name: 'JavaScript', icon: 'mdi-language-javascript' },
            { name: 'jQuery', icon: 'mdi-jquery' },
            { name: 'TypeScript', icon: 'mdi-language-typescript' },
            { name: 'MySQL', icon: 'mdi-database' },
            { name: 'MongoDB', icon: 'mdi-database' },
            { name: 'ElasticSearch', icon: 'mdi-database-search' },
            { name: 'PostgreSQL', icon: 'mdi-database' },
            { name: 'Oracle', icon: 'mdi-database' },
            { name: 'HTML5', icon: 'mdi-language-html5' },
            { name: 'CSS3', icon: 'mdi-language-css3' },
            { name: 'Bootstrap', icon: 'mdi-bootstrap' },
            { name: 'Vuetify', icon: 'mdi-vuetify' },
            { name: 'Docker', icon: 'mdi-docker' },
            { name: 'Scrum', icon: 'mdi-timeline-text-outline' },
            { name: 'Kanban', icon: 'mdi-timeline-text-outline' },
            { name: 'Git', icon: 'mdi-git' },            
            { name: 'Flutter', icon: 'mdi-cellphone' },             
            { name: 'Selenium', icon: 'mdi-web' }, 
            
            
            
          ],
          
      };
    }
  }