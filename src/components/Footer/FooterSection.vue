<template>
    <div>
      <v-footer class="footer" >
        <v-container>
          <v-row class="align-center justify-center">
            <v-col class="text-center">
              <span class="copyright-text">
                Copyright © {{ currentYear }} <span class="nameInFooter">Lucas Britto</span>. Todos os direitos reservados.
              </span>
            </v-col>
          </v-row>
        </v-container>
      </v-footer> 
    </div>  
</template>
  
<script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear()
      };
    }
  };
</script>
  
<style lang="scss" scoped>
    @import './FooterSection.scss'; 
</style>
  