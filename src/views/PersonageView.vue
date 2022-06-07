<template>
  <div class="container-bg" v-bind:style="{backgroundImage: 'url('+ character.bgImage +')'}">
    <div class="container-bg-opacity">
      <div class="container-character-view">
        <div class="header-character" v-bind:style="{backgroundColor: character.color}">
          <a @click="comeBack()"> Voltar</a>
          <h2>
            {{character.name}}
          </h2>
          <button @click="saveCharacter()">
            <img src="../assets/icons/star.png"/>
            <span> {{ isFavorite }}</span>
          </button>
        </div>
        <div class="introducion-character">
          <div class="image-character">
            <img :src="character.image" :alt="character.name" srcset="">
          </div>
          <div class="resume-character">
            <span>
              <b>Rank (Estrelas) : </b> {{character.stars || 'Não há registros'}}
              <b v-for="(stars, index) in character.stars" v-bind:key="index">⭐</b>
            </span>
            <span>
              <b>Nome: </b>{{ haveData(character.name) }}
            </span>
            <span>
              <b>Visão: </b> {{ haveData(character.vision) }}
            </span>
            <span>
              <b>Gênero: </b> {{ haveData(character.gender) }}
            </span>
            <span>
              <b>Constelação: </b> {{ haveData(character.constellation) }}
            </span>
            <span>
              <b>Arma: </b>  {{ haveData(character.weapon )}}
            </span>
            <span>
              <b>Aniversário: </b>  {{ haveData(character.birthday) }}
            </span>
            <span>
              <b>Região: </b> {{ haveData(character.region) }}
            </span>
          </div>

        </div>
        <div class="page-buttons">
          <button @click="page('b')" :disabled="this.character.id - 1 < 0">
            Voltar
          </button>
          <button @click="page('f')" :disabled="this.character.id + 1 >= maxPage">
            Avançar
          </button>
        </div>
        <div class="footer-character" v-bind:style="{backgroundColor: character.color}"></div>
      </div>
    </div>
    <FooterShared/>
  </div>
</template>

<script>
import ApiCharacters from '@/api/characters'
import { setItem, getItem, removeItem } from '@/utils/LocalStorage/index'
import FooterShared from '@/components/shared/FooterShared.vue'

export default {
  data () {
    return {
      character: [],
      isFavorite: '',
      setItem,
      maxPage: ApiCharacters.length
    }
  },
  components: {
    FooterShared
  },
  methods: {
    haveData (property) {
      return property || 'Não há registros'
    },
    saveCharacter () {
      const savedNames = getItem('Favs')
      if (savedNames && savedNames.includes(this.character.name)) {
        removeItem('Favs', this.character.name)
        this.isFavorite = 'Favoritar'
        return
      }
      this.isFavorite = 'Desfavoritar'
      setItem('Favs', this.character.name)
    },
    verifyCharacter () {
      const savedNames = getItem('Favs')
      // includes verifica se name existe em Favs, ex: array[1, 2, 3].includes(2);  retorna = true
      if (savedNames && savedNames.includes(this.character.name)) {
        this.isFavorite = 'Desfavoritar'
        return
      }
      this.isFavorite = 'Favoritar'
    },
    page (direction) {
      if (direction === 'f') {
        this.$router.push('/personage/' + (this.character.id + 1))
        location.reload()
        return
      }
      this.$router.push('/personage/' + (this.character.id - 1))
      location.reload()
    },
    comeBack () {
      this.$router.push('/characters/')
      location.reload()
    }
  },
  beforeMount () {
    this.character = ApiCharacters[(this.$route.params.id)]
    this.verifyCharacter()
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.container-bg {
  background-size: cover;
}

.container-bg-opacity {
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 35px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.container-character-view{
  max-width: 38vw;
  margin: auto;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  overflow: hidden;
  flex-direction: column;
  display: flex;
}

.header-character{
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 0px 30px;
  display: flex;
  h2{
    margin: 0px;
    padding: 10px;
    color: var(--white-color);
  }
  /* Button Voltar */
  a{
    text-decoration: none;
    left: 20px;
    top: 15px;
    font-weight: bold;
    color: var(--white-color);
    cursor: pointer;
  }
  /* Button Favorite */
  button{
    background-color: transparent;
    border: 0px;
    align-items: center;
    flex-direction: column;
    display: flex;
    cursor: pointer;
    img{
      width: 25px;
    }
    span{
      color: var(--white-color);
      font-weight: bold;
    }
  }
}

.introducion-character{
  width: 100%;
  margin: auto;
  flex-direction: row;
  padding: 0px;
  position: relative;
  display: flex;
  button {
    width: 50px;
    height: 50px;
    right: 0px;
    position: absolute;
    background-color: transparent;
    border: 0px;
    img {
      width: 100%;
      cursor: pointer;
    }
  }
}

.image-character{
  width: 50%;
  height: auto;
  display: flex;
  img{
    width: 100%;
  }
}

.resume-character{
  width: 50%;
  height: auto;
  background-color: var(--white-color);
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: hidden;
  span{
    text-align: left;
    padding: 10px;
  }
}

.skills-character{
  padding-bottom: 50px;
  h2{
    width: 100%;
    text-align: left;
    background-color: var(--primary-color);
    margin: 0px;
    padding: 10px;
  }
}

.skills-list{
  text-align: left;
  flex-direction: column;
  border-bottom: 1px solid #e2e2e2;
  padding-bottom: 5px;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  h3{
    margin: 0px;
    padding: 10px;
  }
  span{
    text-align: left;
  }
}

.footer-character{
  height: 50px;
}

.page-buttons{
  background-color: #c2c2c2;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  display: flex;
  bottom: 0px;
  button {
    width: 100%;
    height: 50px;
    border: 0px;
    cursor: pointer;
    letter-spacing: 0.5px;
    font-weight: bold;
    &:hover{
      background-color: #c2c2c2;
    }
  }
}

</style>
