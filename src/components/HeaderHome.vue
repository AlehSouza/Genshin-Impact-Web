<template>
  <div class="header-container">
    <div class="header-subcontainer">
      <div class="wrapper">
        <h1>Genshin Impact</h1>
        <span>Busque por um personagem</span>
        <div class="search-container">
          <input
            v-model="search"
            type="text"
            placeholder="Ex: Kamisato Ayaka"
            v-on:keyup.enter="getIdByName(search)"
          >
          <button @click="getIdByName(search)">
            <img src="../assets/icons/search.png"/>
          </button>
        </div>
        <div class="search-error" v-if="invalidCharacter">
          <span>O nome do personagem não foi encontrado.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CharactersGenshin from '../api/index'

export default {
  data () {
    return {
      search: '',
      invalidCharacter: ''
    }
  },
  props: {
    redirectToPage: {
      type: Function,
      required: true
    }
  },
  methods: {
    getIdByName (name) {
      this.invalidCharacter = ''
      CharactersGenshin.forEach(Character => {
        if (Character.name.toUpperCase() === name.toUpperCase()) {
          this.redirectToPage(Character.id)
        }
      })
      this.invalidCharacter = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../styles/styles.scss');

.header-container{
  width: 100vw;
  height: 600px;
  background-image: url('../assets/backgrounds/bg_lumine_xiangling.webp');
  background-size: cover;
  background-position: center;
}

.header-subcontainer{
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  display: flex;
}

.wrapper{
  width: 70vw;
  max-width: 650px;
  flex-direction: column;
  display: flex;
  h1 {
    color: var(--white-color);
    font-size: 65px;
    margin: 0px;
    padding: 0px;
  }
  span {
    font-size: 20px;
    padding: 30px 15px;
    padding-top: 0px;
    font-weight: bold;
    color: var(--white-color);
  }
}

.search-container{
  border-radius: 50px;
  background-color: var(--white-color);
  overflow: hidden;
  justify-content: center;
  display: flex;
  input {
    border: 0px;
    width: 90%;
    padding: 12px;
    outline: none;
    ::placeholder{
      color: #c2c2c2;
    }
  }
  button {
    border: 0px;
    background: transparent;
    padding: 12px 22px;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    display: flex;
    img {
      width: 18px;
    }
  }
}

.search-error {
  justify-content: center;
  align-items: center;
  display: flex;
  span {
    color: var(--red-color);
    padding: 20px;
    font-size: 20px;
  }
}

</style>
