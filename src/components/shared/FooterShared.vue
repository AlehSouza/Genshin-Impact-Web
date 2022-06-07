<!-- #TODO melhorar as informações neste footer. -->
<template>
  <div class="container">
    <div class="footer">
      <p>Site em desenvolvimento por <a href="https://alehsouza.dev/" target="_blank">Alexandre Souza</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterShared'
}
</script>

<style lang="scss" scoped>
@import '../../styles/styles.scss';

.container{
  height: 300px;
  background-image: url("../../assets/backgrounds/night_sky.webp");
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  display: flex;
}
.footer {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content:  center;
  align-items: center;
  display: flex;
  p{
    color: var(--white-color);
  }
  a{
    color: var(--white-color);
    font-weight: bold;
    text-decoration: none;
  }
}

</style>
