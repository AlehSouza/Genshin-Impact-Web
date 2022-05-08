<template>
  <div>
    <h2> {{character.name}}</h2>
    <br>
    <br>
    <span> Mais em breve :)</span>
  </div>
</template>

<script>
import CharactersGenshin from '../api/index'

export default {
  data () {
    return {
      character: []
    }
  },
  beforeMount () {
    this.character = CharactersGenshin[(this.$route.params.id)]
  }
}
</script>

<style>

</style>
