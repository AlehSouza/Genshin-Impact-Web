<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/map">Map</router-link>
      <router-link to="/favorites">Favoritos</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style lang="scss">
@import './styles/styles.scss';

*{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html, body{
  overflow-x: hidden;
  margin: 0px;
  padding: 0px;
}
nav {
  z-index: 1;
  background-color: var(--white-color);
  box-shadow: 0 5px 10px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  width: 100%;
  position: fixed;
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 14px;
    text-decoration: none;

    &.router-link-exact-active {
      color: var(--primary-color);
    }
  }
}
</style>
