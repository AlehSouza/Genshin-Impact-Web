<template>
  <div class="home">
    <HeaderHome :redirect-to-page="redirectToPage"/>
    <CharactersGenshin :redirect-to-page="redirectToPage"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharactersGenshin from '@/components/CharactersGenshin.vue'
import HeaderHome from '@/components/HeaderHome.vue'

export default {
  name: 'HomeView',
  components: {
    HeaderHome,
    CharactersGenshin
  },
  methods: {
    redirectToPage (x) {
      this.$router.push('/characterview/' + x)
    }
  }
}
</script>

<style>
@import '../styles/styles.scss';

 .home{
   margin: auto;
 }
</style>
