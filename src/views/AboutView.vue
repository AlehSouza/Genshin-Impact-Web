<template>
  <div>
    <div class="about">
      <h1>Projeto sobre Genshin Impact <br> em construção com Vue.js & Node.Js</h1>
      <span> por <a href="https://alehsouza.dev/" target="_blank">Alexandre Souza</a></span>
      <br>
      <div class="flex-items">
        <img src="../assets/images/logo.png" width="150px">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" width="250px">
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
  }
}
</script>

<style lang="scss" scoped>
  .about {
    width: 80vw;
    height: 93vh;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    h1, span, a {
      font-weight: bold;
    }
  }
  span {
    font-size: 24px;
  }
  .flex-items {
    justify-content: space-around;
    align-items: center;
    display: flex;
    img {
      margin: 0px 50px;
    }
  }
</style>
