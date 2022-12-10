<template>
  <div class="container-bg" v-bind:style="{backgroundImage: 'url('+ character.bgImage +')'}">
    <loading-component v-if="loading"/>
    <div v-else class="container-bg-opacity">
      <a class="float-btn" @click="$router.go(-1)"> Voltar</a>
      <div class="image-character" v-bind:style="{backgroundImage: 'url('+ character.image +')'}"></div>
      <div class="right-character">
        <div class="head-character">
          <h1>{{ character.name }}</h1>
        </div>
        <div class="about-character">
          <div class="sub-about-character">
            <div class="box-item" v-for="(item, i) in listAboutCharacter" v-bind:key="i">
              <div class="box-item-image" v-bind:style="{backgroundImage: 'url('+ item.image +')'}"></div>
              <div class="box-item-span-container">
                <div v-if="item.title === 'Rank'">
                  <span>{{item.title}}</span>
                  <span class="box-item-span-text">
                    <font>{{item.text}}</font>
                    <b v-for="(stars, index) in character.stars" v-bind:key="index">⭐</b>
                  </span>
                </div>
                <div v-else>
                  <span>{{item.title}}</span>
                  <span>{{item.text}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      maxPage: '',
      visioImage: '',
      listAboutCharacter: [
        {
          title: 'Gênero',
          image: 'https://firebasestorage.googleapis.com/v0/b/genshinimpact-a14fb.appspot.com/o/icons%2Fgender.webp?alt=media&token=e2f7b8c9-c90c-4c64-b36b-be16d1556dfb',
          text: ''
        },
        {
          title: 'Visão',
          image: 'https://firebasestorage.googleapis.com/v0/b/genshinimpact-a14fb.appspot.com/o/icons%2Fvision.webp?alt=media&token=771ef93e-4270-4c88-a645-640b681eed9c',
          text: ''
        },
        {
          title: 'Arma',
          image: 'https://firebasestorage.googleapis.com/v0/b/genshinimpact-a14fb.appspot.com/o/icons%2Fsword.webp?alt=media&token=1353f7aa-f51b-403b-9e3f-827d9c03a471',
          text: ''
        },
        {
          title: 'Rank',
          image: 'https://firebasestorage.googleapis.com/v0/b/genshinimpact-a14fb.appspot.com/o/icons%2Frank.webp?alt=media&token=affec9e1-3fa5-48ab-a470-eb30d858173a',
          text: ''
        },
        {
          title: 'Constelação',
          image: 'https://firebasestorage.googleapis.com/v0/b/genshinimpact-a14fb.appspot.com/o/icons%2Fconstellation.webp?alt=media&token=cebdafa5-41e0-4981-ad59-83b9783db67d',
          text: ''
        },
        {
          title: 'Região',
          image: 'https://firebasestorage.googleapis.com/v0/b/genshinimpact-a14fb.appspot.com/o/icons%2Fregion.webp?alt=media&token=623b5e0a-1b97-4a23-96a1-754d4bdd1b53',
          text: ''
        },
        {
          title: 'Aniversário',
          image: 'https://firebasestorage.googleapis.com/v0/b/genshinimpact-a14fb.appspot.com/o/icons%2Fbirthday.webp?alt=media&token=93987b56-919d-458a-84f5-9f6ff2d317ca',
          text: ''
        }
      ]
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
        // manter o loading false
        this.loading = false
        this.populateList()
      })
    },
    haveData (property) {
      return property || 'Não há registros'
    },
    populateList () {
      this.listAboutCharacter[0].text = this.character.gender
      this.listAboutCharacter[1].text = this.character.vision
      this.listAboutCharacter[2].text = this.character.weapon
      this.listAboutCharacter[3].text = this.character.stars
      this.listAboutCharacter[4].text = this.character.constellation
      this.listAboutCharacter[5].text = this.character.region
      this.listAboutCharacter[6].text = this.character.birthday
    }
  },
  beforeMount () {
    this.getCharacters()
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.float-btn{
  top: 100px;
  left: 50px;
  padding: 20px;
  font-weight: bold;
  letter-spacing: 1px;
  color: white;
  position: absolute;
  cursor: pointer;
}

.container-bg {
  background-size: cover;
}

.container-bg-opacity {
  width: 100%;
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.450);
  padding: 35px;
  justify-content: center;
  align-items: center;
  display: flex;
}

.image-character{
  width: 280px;
  height: 550px;
  margin-top: 30px;
  border-radius: 8px;
  border: 2px solid rgb(245, 216, 193);
  box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  background-position: center;
  background-size: cover;
}

.right-character{
  max-width: 480px;
  margin: 20px;
  margin-top: 0px;
  h1, h2{
    width: auto;
    margin: 0px;
    padding: 20px;
    font-weight: 500;
    color: white;
    letter-spacing: 1.2px;
  }
  h2 {
    padding: 12px;
    padding-top: 0px;
  }
}

.head-character{
  border-radius: 12px;
  margin-bottom: 12px;
  background-color: rgba(0, 0, 0, 0.6);
}

.about-character {
  color: white;
  border-radius: 12px;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.6);
}

.sub-about-character {
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
}

.box-item {
  width: 100%;
  margin: 1.5%;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  display: flex;
  .box-item-image {
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    margin: 1%;
    background-size: 50%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .box-item-span-container{
    width: 100%;
    justify-content: flex-start;
    flex-direction: column;
    display: flex;
  }
  span {
    color: white;
    font-weight: 400;
    letter-spacing: 1.2px;
    text-align: left;
    padding-left: 12px;
    align-items: center;
    display: flex;
    &:first-child{
      font-weight: bold;
    }
    font {
      padding-top: 3px;
      padding-right: 6px;
      color: white;
      display: flex;
    }
  }
}
</style>
