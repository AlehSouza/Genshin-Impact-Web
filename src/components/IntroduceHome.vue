<template>
  <div class="container">
    <div class="left-wrapper">
      <h1>Olá Viajante!</h1>
      <p>
        Bem vindo a minha aplicação sobre Genshin Impact, aqui você pode encontrar informações sobre personagens, regiões, um mapa interativo bem interessante feito pelo nosso amigo <a href="https://metaplayer.gg/" target="_blank">Metaplayer</a>, entre outras informações.!
        <br/>
        <br/>
        Se você caiu aqui de paraquedas e não sabe do que estamos falando aqui, vem comigo que eu vou te mostrar o mundo de Genshin Impact!
      </p>
      <div class="btn-letsgo" @click="goAboutGenshin()">
          <div class="circle-container">
            <div class="circle">
              <div class="circle-inside"></div>
            </div>
          </div>
          <span>Vamos lá</span>
      </div>
    </div>
    <div class="right-wrapper">
      <img src="../assets/images/paimon.webp" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutHome',
  methods: {
    goAboutGenshin () {
      this.$router.push('/GenshinImpact')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.container{
  padding: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
}
.left-wrapper{
  width: 40%;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  h1{
    width: 50%;
    font-weight: 500;
  }
  p {
    width: 80%;
  }
}
.btn-letsgo {
  width: 260px;
  padding: 8px;
  margin: 20px;
  border-radius: 50px;
  background-color: #ece5d8;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #dad3c8;
  }
  .circle-container {
    width: 50px;
    height: 50px;
    background-color: #312f30;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .circle {
    background-color: #ceac5a;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .circle-inside {
    width: 20px;
    height: 20px;
    background-color: #312f30;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  span {
    text-align: center;
    width: 50%;
    margin: 0 auto;
    font-weight: bold;
    font-size: 24px;
  }
}
.right-wrapper{
  width: 20%;
  height: 500px;
  justify-content: center;
  display: flex;
  img {
    height: 100%;
  }
}

@media screen and (max-width: 1250px ) {
  .container {
    justify-content: space-between;
    flex-direction: column;
    padding: 12px;
  }
  .right-wrapper, .left-wrapper {
    width: 100%;
    background-size: cover;
    background-position: center;
    p {
      width: 80%
    }
    img {
      height: 100%;
    }
  }

  .left-wrapper {
    h1 {
      width: 90%;
    }
  }
  .right-wrapper {
    display: none;
  }
}

</style>
