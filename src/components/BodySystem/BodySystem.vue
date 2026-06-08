<template>
    <div class="body_system">      
      <HomeComponent/>
      <CareerTimeline/>
      <AboutMe/>
      <ProjectsSection/>
      <ContactSection/>    
    </div>
</template>


<script>
import BodySystemScript from './BodySystem.js';

export default {
  ...BodySystemScript,  
}
</script>

<style lang="scss" scoped>
    @import './BodySystem.scss'; 
</style>