<template>
  <div id="app">
    <MenuComponent/>
    <router-view/>
  </div>
</template>
<script>
import MenuComponent from '@/components/shared/MenuShared.vue'
export default {
  components: {
    MenuComponent
  }
}
</script>
<!-- #TODO adicionar uma aba de regiões, e quando vc clicar nas regiões, vc vai poder ver mais sobre aquela região, e os personagens que pertencem aquela região -->
<!-- #TODO adicionar um footer estilizado e responsívo -->
<!-- #TODO mapear responsividade de todo o site. -->

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import './styles/styles.scss';

*{
  font-family: 'Poppins', sans-serif !important;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  outline: none;
}
html, body{
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
  padding-top: 30px
}
</style>
