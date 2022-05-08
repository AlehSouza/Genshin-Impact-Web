<template>
  <div class="home">
    <h1>Genshin Impact - Personagens</h1>
    <CharactersGenshin/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharactersGenshin from '@/components/CharactersGenshin.vue'

export default {
  name: 'HomeView',
  components: {
    CharactersGenshin
  }
}
</script>

<style>
 .home{
   margin: auto;
 }
</style>
