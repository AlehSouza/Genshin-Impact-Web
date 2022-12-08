<template>
  <div>
    <div class="container-about-genshin">
      <div class="subcontainer-about-genshin">
        <img src="../assets/images/genshin_Impact_logo.png" width="250px"/>
        <br>
        <p style="width: 50vw; color: white">
          Genshin Impact é um jogo eletrônico RPG de ação gratuito desenvolvido e publicado pela miHoYo. O jogo apresenta um ambiente de mundo aberto de fantasia e sistema de batalha baseado em ação usando Pontos de energia elemental e troca de personagem, e usa a monetização de jogo gacha para os jogadores obterem novos personagens, armas e outros recursos...
        </p>
        <br>
        <iframe width="50%" height="608" src="https://www.youtube.com/embed/lMdsrZ1otlA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <br>
      </div>
    </div>
    <footer-shared/>
  </div>
</template>

<script>
import FooterShared from '@/components/shared/FooterShared.vue'
export default {
  components: {
    FooterShared
  },
  data () {
    return {
      FooterShareditle: 'Sobre Genshin Impact'
    }
  }
}
</script>

<style lang="scss" scoped>
.container-about-genshin {
  width: 100vw;
  background-image: url('../assets/backgrounds/bg_lumine_xiangling.webp');
  background-size: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}
.subcontainer-about-genshin {
  width: 100%;
  height: 100%;
  padding: 50px 0px;
  background-color: rgba(0, 0, 0, 0.8);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  img {
    filter:invert(1)
  }
}
</style>
