<template>
  <div class="container">
    <div class="introduction-regions">
      <div class="introduction-regions-opacity">
        <div class="header">
          <img src="../assets/images/genshin_Impact_logo.png" alt=""/>
          <h1>Regiões</h1>
        </div>
      </div>
    </div>
    <img class="paimon" src="../assets/images/paimon.webp" alt="Paimon">
  </div>
</template>

<script>
export default {
  name: 'HeaderRegions'
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.paimon{
  width: 520px;
  top: 200px;
  right: 150px;
  position: absolute;
}
.introduction-regions{
  background-image: url('../assets/backgrounds/bg_porto_liyue.png');
  background-size: cover;
  background-position: center;
  overflow: hidden;
  height: 650px;
}
.introduction-regions-opacity{
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  justify-content: center;
  align-items: center;
  display: flex;
}
.header{
  padding: 40px;
  padding-top: 100px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  img{
    filter:invert(100);
  }
  p{
    width: 600px;
    margin-top: 5%;
    font-size: 24px;
    color: var(--white-color)
  }
  h1{
    color: var(--white-color);
    letter-spacing: 1.5px;
  }
}
</style>
