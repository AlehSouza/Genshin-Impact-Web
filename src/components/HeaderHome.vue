<template>
  <div class="header-container">
    <div class="header-subcontainer">
      <div class="wrapper">
        <img src="../assets/images/genshin_Impact_logo.png" alt="">
        <span>Busque por um personagem</span>
        <div class="search-container">
          <input
            v-model="search"
            type="text"
            placeholder="Ex: Kamisato Ayaka"
            v-on:keyup.enter="getIdByName(search)"
          >
          <button @click="getIdByName(search)">
            <img class="search-icon" src="../assets/icons/search.png"/>
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
import axios from 'axios'

export default {
  data () {
    return {
      search: '',
      invalidCharacter: '',
      characters: []
    }
  },
  props: {
    redirectToPage: {
      type: Function,
      required: true
    }
  },
  beforeMount () {
    this.getCharacters()
  },
  methods: {
    getIdByName (name) {
      this.invalidCharacter = ''
      this.characters.forEach(Character => {
        if (Character.name.toUpperCase() === name.toUpperCase()) {
          this.redirectToPage(Character._id)
        }
      })
      this.invalidCharacter = true
    },
    getCharacters () {
      axios.get('https://genshin-impact-api.vercel.app/characters').then(resp => {
        this.characters = resp.data
      }).catch((err) => {
        console.log(`Houve um problema... ${err}`)
      }).finally(() => {
        this.loading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import url('../styles/styles.scss');

.header-container{
  width: 100vw;
  height: 650px;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  display: flex;
  /* h1 {
    color: var(--white-color);
    font-size: 65px;
    margin: 0px;
    padding: 0px;
  } */
  img{
    width: 500px;
    filter:invert(100);
  }
  span {
    font-size: 20px;
    padding: 30px 15px;
    font-weight: 450;
    color: var(--white-color);
  }
}

.search-container{
  width: 33vw;
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
.search-icon{
  filter:invert(0);
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

@media screen and (max-width: 1250px ) {
  .wrapper {
    width: 85vw;
    max-width: unset;
    img {
      width: 100%;
      max-width: 500px;
    }
  }
  .search-container {
    width: 100%;
  }
}

</style>
