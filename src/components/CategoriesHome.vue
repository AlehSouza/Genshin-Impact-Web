<template>
  <div class="container">
      <router-link to="/characters">
        <div class="characters-opacity">
          <h1>Personagens</h1>
        </div>
      </router-link>
      <router-link to="/regions">
        <div class="regions-opacity">
          <h1>Regiões</h1>
        </div>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.container{
  height: 450px;
  display: flex;
  a{
    transition: all 1s;
    color: white;
    background-image: url('../assets/images/characters.webp');
    background-size: 100%;
    background-position: center;
    width: 50%;
    text-decoration: none;
    &:nth-child(2){
      background-image: url('https://arenaesports.com.br/wp-content/uploads/2022/03/area-despenhadeiro-genshin-impact.jpg');
    }
    &:hover{
      background-size: 130%;
      h1{
        transition: all 1s;
        transform: scale(1.2);
      }
    }
  }
}
.characters-opacity{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: right;
  align-items: flex-end;
  display: flex;
}
.regions-opacity{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: left;
  align-items: flex-start;
  display: flex;
}
.characters-opacity, .regions-opacity {
  h1{
    color: white;
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 1.5px;
    padding: 30px 50px;
    margin: 0px;
  }
}
</style>
