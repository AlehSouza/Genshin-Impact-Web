<template>
  <div class="container-character-view">
    <div class="header-character" v-bind:style="{backgroundColor: character.color}">
      <a href="/"> Voltar</a>
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
          <b>Nome: </b>{{character.name}}
        </span>
        <span>
          <b>Visão: </b> {{character.vision}}
        </span>
        <span>
          <b>Arma: </b> {{character.weapon}}
        </span>
        <span>
          <b>Aniversário: </b> {{character.birthday}}
        </span>
        <span>
          <b>Estrelas: </b> {{character.stars}}</span>
        <span>
          <b>Região: </b>{{character.region}}
        </span>

        <!-- <div class="skills-character">
          <h2 v-if="character.skills">Habilidades</h2>
          <div class="skills-list" v-for="(skill, i) in character.skills" v-bind:key="i">
            <h3>• {{skill.name}}</h3>
            <span>{{skill.desc}}</span>
          </div>
        </div> -->
      </div>
    </div>
    <div class="footer-character" v-bind:style="{backgroundColor: character.color}"></div>
  </div>
</template>

<script>
import CharactersGenshin from '../api/index'

export default {
  data () {
    return {
      character: []
    }
  },
  beforeMount () {
    this.character = CharactersGenshin[(this.$route.params.id)]
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';
body{
  background-color: #c2c2c2;
}

.container-character-view{
  max-width: 38vw;
  margin: auto;
  border-radius: 12px;
  overflow: hidden;
  flex-direction: column;
  display: flex;
}
.header-character{
  justify-content: center;
  position: relative;
  display: flex;
  h2{
    margin: 0px;
    padding: 10px;
    color: var(--white-color);
  }
  a{
    position: absolute;
    text-decoration: none;
    left: 20px;
    top: 15px;
    font-weight: bold;
    color: var(--white-color);
  }
}
.introducion-character{
  width: 100%;
  margin: auto;
  flex-direction: row;
  padding: 0px;
  display: flex;
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
</style>
