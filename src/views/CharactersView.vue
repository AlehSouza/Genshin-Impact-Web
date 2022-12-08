<template>
  <div>
    <div class="container">
      <ContainerCharacters :charactersData="characters" :name="msg"/>
      <FooterShared/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import ContainerCharacters from '@/components/ContainerCharacters.vue'
import FooterShared from '@/components/shared/FooterShared.vue'

export default {
  name: 'CharactersView',
  data () {
    return {
      msg: 'Personagens',
      characters: []
    }
  },
  components: {
    ContainerCharacters,
    FooterShared
  },
  beforeMount () {
    this.getCharacters()
  },
  methods: {
    getCharacters () {
      axios.get('https://genshin-impact-api.vercel.app/characters').then(resp => {
        this.characters = resp.data
      }).catch((err) => {
        console.log(`Houve um problema... ${err}`)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  flex-direction: column;
  display: flex;
}
</style>
