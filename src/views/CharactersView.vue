<template>
  <div>
    <div class="container">
      <CharactersGenshin :api="ApiCharacters" :name="msg"/>
      <FooterShared/>
    </div>
  </div>
</template>

<script>
import CharactersGenshin from '@/components/CharactersGenshin.vue'
import ApiCharacters from '@/api/characters'
import FooterShared from '@/components/shared/FooterShared.vue'

export default {
  name: 'CharactersView',
  data () {
    return {
      ApiCharacters,
      msg: 'Personagens'
    }
  },
  components: {
    CharactersGenshin,
    FooterShared
  }
}
</script>

<style lang="scss" scoped>
.container{
  flex-direction: column;
  display: flex;
}
</style>
