<template>
  <div class="container">
    <div class="item">
      <router-link to="/characters">
        <h1>Personagens</h1>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/regions">
        <h1>Regiões</h1>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'asd'
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    width: 89%;
    height: 430px;
    margin: 0 auto;
    padding: 20px;
    margin-bottom: 20px;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    display: flex;
  }
  .item {
    width: 50%;
    height: 100%;
    margin: 1%;
    border-radius: 8px;
    overflow: hidden;
    background-image: url('../assets/images/characters.webp');
    background-size: cover;
    box-shadow: 0 5px 10px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
    justify-content: center;
    align-items: center;
    display: flex;
    cursor: pointer;
    a {
      letter-spacing: 1px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
      justify-content: center;
      text-decoration: none;
      align-items: center;
      display: flex;
      transition: 0.5s;
      &:hover {
        background-color: rgba(0, 0, 0, 0.7);
      }
      h1 {
        font-size: 200%;
        font-weight: 500;
        color: white;
      }
    }
    &:last-child {
      background-image: url('../assets/images/regions.jpg');
    }
  }

  @media screen and (max-width: 950px ) {
    .container {
      flex-direction: column;
    }
    .item {
      width: 100%;
    }
  }

</style>
