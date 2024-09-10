<template>
    <v-container fluid fill-height class="pa-0 ma-0">
        <v-row
          id="home"
          class="section home-background"
          align="center"
          justify="center"
        >
        <v-col
            cols="12"
            class="d-flex flex-column align-center justify-center text-center colAvatar"
          >
          <v-avatar             
              class="avatarProfile mb-4"
            >
              <img :src="require('@/assets/imagens/config/perfil_lucas.png')" alt="Imagem de Perfil">
            </v-avatar>

            <div>
              <h1 class="title">Lucas <span>Britto </span></h1>
              <span class="line-container">
                  <span class="lineTitleHome"></span>
                  <h2 class="subtitle">Desenvolvedor PHP - Full Stack <span class="cursor"></span></h2>
                  <span class="lineTitleHome"></span>
                </span>
              
            </div>
          </v-col>
        </v-row>
      </v-container>

</template>
<script>


export default {
  name: 'HomeComponent',

}
</script>

<style lang="scss" scoped>
    @import './HomeComponent.scss';


</style>