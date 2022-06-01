<template>
  <div class="home">
    <HeaderHome :redirect-to-page="redirectToPage"/>
    <CharactersGenshin :api="ApiGenshin" :redirect-to-page="redirectToPage" :name="msg"/>
  </div>
</template>

<script>
// @ is an alias to /src
import CharactersGenshin from '@/components/CharactersGenshin.vue'
import ApiGenshin from '@/api/index'
import HeaderHome from '@/components/HeaderHome.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      ApiGenshin,
      msg: 'Personagens'
    }
  },
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
