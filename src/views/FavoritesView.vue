<template>
  <div class="container">
      <CharactersGenshin :api="favoritos" :redirect-to-page="redirectToPage" :name="msg"/>
  </div>
</template>

<script>
import CharactersGenshin from '@/components/CharactersGenshin.vue'
import ApiCharacters from '@/api/index'
import { getItem } from '@/utils/LocalStorage/index'

export default {
  name: 'FavoritesView',
  data () {
    return {
      msg: 'Favoritos',
      favoritos: [],
      ApiCharacters
    }
  },
  components: {
    CharactersGenshin
  },
  methods: {
    redirectToPage (x) {
      this.$router.push('/characterview/' + x)
    }
  },
  beforeMount () {
    const savedNames = getItem('Favs')
    this.favoritos = ApiCharacters.filter(item => savedNames.includes(item.name))
  }
}
</script>

<style lang="scss" scoped>
.container{
    padding-top: 62px;
}
</style>
