import { ref, onMounted, onUnmounted, computed } from 'vue';

export default {
    name: 'AboutMe',
    setup() {
        const isExpanded = ref(false);
        const isTechExpanded = ref(false);
        const isMobile = ref(window.matchMedia('(max-width: 959px)').matches);

        const handleResize = () => {
            isMobile.value = window.matchMedia('(max-width: 959px)').matches;
        };

        onMounted(() => {
            window.addEventListener('resize', handleResize);
        });

        onUnmounted(() => {
            window.removeEventListener('resize', handleResize);
        });

        const pdfUrl = new URL('@/assets/doc/Lucas_Brito_Machado_CV.pdf', import.meta.url).href;

        const technologies = [
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
        ];

        const displayedTechnologies = computed(() => {
            return isMobile.value && !isTechExpanded.value ? technologies.slice(0, 12) : technologies;
        });

        const toggleExpand = () => {
            isExpanded.value = !isExpanded.value;
        };

        const toggleTechExpand = () => {
            isTechExpanded.value = !isTechExpanded.value;
        };

        return { 
            isExpanded,
            isTechExpanded,
            isMobile,
            displayedTechnologies,
            toggleExpand,
            toggleTechExpand,
            pdfUrl
        };
    }
}