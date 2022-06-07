<template>
  <div class="container">
    <div class="first-wrapper">
      <div class="about-images">
        <div class="about-image-item box-1">
        </div>
        <div class="about-image-item box-2">
        </div>
        <div class="about-image-item box-3">
        </div>
      </div>
      <div class="about-text">
        <h1>Olá Viajante!</h1>
        <p>
          Bem vindo a nossa aplicação sobre Genshin Impact, aqui você pode encontrar informações sobre personagens, regiões, um mapa interativo, entre outras informações.
          <br/>
          <br/>
          Todo nosso site foi desenvolvido com a tecnologia Vue.Js, ainda estamos construindo a nossa Api, mas em breve teremos algo super bacana para disponibilizar a todos! :)
        </p>
        <!-- <img src="../assets/images/yanfei.png" alt="" width="200px"> -->
      </div>
    </div>
    <hr class="hr"/>
    <div class="second-wrapp">
      <!-- #TODO Adiconar um wrapp com duas opções personages/regiões -->
      <!-- #TODO Adicionar um componente para envio de email com sugestões numa caixa de email pra sla, GenshinImpact-AlehSouza@gmail.com? -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutHome'
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.container{
  padding: 130px 50px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}
.about{
  p{
    text-align: left;
    width: 500px
  }
}
.first-wrapper{
  width: 70vw;
  justify-content: space-between;
  align-items: center;
  display: flex;
}
.about-images{
  min-width: 540px;
  height: 560px;
  position: relative;
  transform: rotate(10deg);
}
.about-image-item{
  transform: rotate(-10deg);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
}
.box-1{
  background-image: url('https://cdn.shopify.com/s/files/1/1616/0283/products/genshin-impact-1.3-hu-tao_bcdc9ba2-f1e4-43d8-a083-5c3da8cb6c95.jpg?v=1649211136');
  background-position: center;
  background-size: cover;
  border: 8px solid var(--primary-color) ;
  position: absolute;
}
.box-2{
  background-image: url('https://i.pinimg.com/originals/5e/11/49/5e11494ecc9f43552dbffbde97077873.jpg');
  background-position: center;
  background-size: cover;
  border: 8px solid var(--secondary-color) ;
  position: absolute;
  top: 20px;
  right: 0px;
}
.box-3{
  background-image: url('https://www.jugomobile.com/wp-content/uploads/2021/12/Prueba-Beta-de-Genshin-Impact-24-Explicacion-de-las-mayores.jpg');
  background-position: center;
  background-size: cover;
  border: 8px solid var(--tertiary-color) ;
  position: absolute;
  bottom: 15px;
  right: 130px;
}
.about-text{
  width: 650px;
  position: relative;
  h1{
    font-weight: 500;
    text-align: left;
  }
  p{
    text-align: left;
  }
  img{
    margin-top: 35px;
    position: absolute;
    right: 0px;
  }
}
</style>
