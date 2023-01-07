<template>
  <div class="menu_container">
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/characters">Personagens</router-link>
      <router-link to="/regions">Regiões</router-link>
      <router-link to="/map">Mapa</router-link>
      <router-link to="/about">Sobre</router-link>
    </div>
    <div class="menu_mobile" >
      <div class="menu_mobile_icon" @click="isOpen()">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="menu_mobile_options" ref="mobileOptions">
        <router-link to="/" @click="changeRoute()">Home</router-link>
        <router-link to="/characters">Personagens</router-link>
        <router-link to="/regions">Regiões</router-link>
        <router-link to="/map">Mapa</router-link>
        <router-link to="/about">Sobre</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mobile: true
    }
  },
  methods: {
    isOpen () {
      if (this.mobile) {
        this.$refs.mobileOptions.style.display = 'flex'
      } else {
        this.$refs.mobileOptions.style.display = 'none'
      }
      this.mobile = !this.mobile
    },
    changeRoute () {
      console.log('chamou porra')
      this.$refs.mobileOptions.style.display = 'none'
    }
  },
  watch: {
    '$route' () {
      this.$refs.mobileOptions.style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
.menu_container{
  box-shadow: 0 5px 10px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  background-color: white;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 2;
}
.menu {
  background-color: var(--white-color);
  box-shadow: 0 5px 10px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  width: 100%;
  padding: 20px 0px;
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
.menu_mobile {
  margin: 5px 0px;
  flex-direction: column;
  display: none;
}
.menu_mobile_icon {
  width: 35px;
  margin: 10px;
  margin-left: 15px;
  flex-direction: column;
  display: flex;
  cursor: pointer ;
  span {
    height: 6px;
    margin: 5%;
    background-color: white;
    border-radius: 5px;
    &:nth-child(1){
      background-color: #4285F4;
    }
    &:nth-child(2){
      background-color: #DE3E35;
    }
    &:nth-child(3){
      background-color: #F7C223;
    }
  }
}
.menu_mobile_options {
  flex-direction: column;
  display: none;
  a{
    font-weight: 500;
    color: #2c3e50;
    font-size: 14px;
    padding: 10px 0px;
    padding-left: 18px;
    margin: 1% 0px;
    text-decoration: none;
    text-align: left;
    &.router-link-exact-active {
      color: var(--primary-color);
    }
    &:hover{
      background-color: rgba(0, 0, 0, 0.030)
    }
  }
}
@media screen and (max-width: 550px ) {
  .menu {
    display: none;
  }
  .menu_mobile {
    display: flex;
  }
}
</style>
