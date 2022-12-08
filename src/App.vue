<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/characters">Personagens</router-link>
      <router-link to="/regions">Regiões</router-link>
      <router-link to="/map">Mapa</router-link>
      <router-link to="/about">Sobre</router-link>
    </nav>
    <router-view/>
  </div>
</template>
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
  padding-top: 33px
}
nav {
  z-index: 2;
  background-color: var(--white-color);
  box-shadow: 0 5px 10px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  width: 100%;
  position: fixed;
  padding: 20px;
  top: 0px;
  a {
    font-weight: 500;
    color: #2c3e50;
    font-size: 14px;
    padding: 12px;
    text-decoration: none;
    &.router-link-exact-active {
      color: var(--primary-color);
    }
  }
}
</style>
