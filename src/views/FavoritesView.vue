<template>
  <div class="container">
      <div class="favorites">
        <CharactersGenshin :api="favoritos" :redirect-to-page="redirectToPage" :name="msg"/>
        <div v-if="favoritos.length === 0">
          <img src="../assets/images/qiqi.webp" width="240px">
          <h3>Você ainda não tem nenhum personagem favorito :(</h3>
        </div>
      </div>
      <FooterShared/>
  </div>
</template>

<script>
import CharactersGenshin from '@/components/CharactersGenshin.vue'
import FooterShared from '@/components/shared/FooterShared.vue'
import { redirectToPage } from '@/utils/Pages'
import ApiCharacters from '../api/characters'
import { getItem } from '@/utils/LocalStorage/index'

export default {
  name: 'FavoritesView',
  data () {
    return {
      msg: 'Favoritos',
      favoritos: [],
      ApiCharacters,
      redirectToPage
    }
  },
  components: {
    CharactersGenshin,
    FooterShared
  },
  beforeMount () {
    const savedNames = getItem('Favs')
    this.favoritos = ApiCharacters.filter(item => savedNames.includes(item.name))
  }
}
</script>

<style lang="scss" scoped>
.container{
  flex-direction: column;
  display: flex;
}
.favorites{
  h3{
    font-weight: 500;
  }
  img{
    padding-top: 50px;
  }
}
</style>
