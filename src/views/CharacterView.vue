<template>
  <div class="container-bg" v-bind:style="{backgroundImage: 'url('+ character.bgImage +')'}">
    <loading-component v-if="loading"/>
    <div v-else class="container-bg-opacity">
      <div class="container-character-view">
        <div class="header-character" v-bind:style="{backgroundColor: character.color}">
          <a @click="$router.go(-1)"> Voltar</a>
          <h2>
            {{character.name}}
          </h2>
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
        <div class="footer-character" v-bind:style="{backgroundColor: character.color}"></div>
      </div>
    </div>
    <FooterShared/>
  </div>
</template>

<script>
import axios from 'axios'
import FooterShared from '@/components/shared/FooterShared.vue'
import LoadingComponent from '@/components/LoadingComponent.vue'

export default {
  data () {
    return {
      character: [],
      loading: true,
      maxPage: ''
    }
  },
  components: {
    FooterShared,
    LoadingComponent
  },
  methods: {
    getCharacters () {
      axios.get(`https://genshin-impact-api.vercel.app/characters/${this.$route.params.id}`).then(resp => {
        this.character = resp.data
      }).catch((err) => {
        console.log(`Houve um problema... ${err}`)
      }).finally(() => {
        this.loading = false
      })
    },
    haveData (property) {
      return property || 'Não há registros'
    }
  },
  beforeMount () {
    this.getCharacters()
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

.footer-character{
  height: 50px;
}

</style>
