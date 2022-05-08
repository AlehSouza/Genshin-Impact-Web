<template>
  <div class="container-character-view">
    <div class="header-character">
      <a href="/"> Voltar</a>
      <h2>
        {{character.name}}
      </h2>
    </div>
    <br>
    <div class="introducion-character">
      <div class="image-character">
        <img :src="character.image" :alt="character.name" srcset="">
      </div>

      <div class="resume-character">
        <span>Nome: {{character.name}}</span>
        <span>Visão: {{character.vision}}</span>
        <span>Arma: {{character.weapon}}</span>
        <span>Aniversário: {{character.birthday}}</span>
        <span>Estrelas: {{character.stars}}</span>
        <span>Região: {{character.region}}</span>
        <span>Descrição: {{character.desc}}</span>

        <div class="skills-character">
          <h2 v-if="character.skills">Habilidades</h2>
          <div class="skills-list" v-for="(skill, i) in character.skills" v-bind:key="i">
            <h3>• {{skill.name}}</h3>
            <span>{{skill.desc}}</span>
          </div>
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
      character: []
    }
  },
  beforeMount () {
    this.character = CharactersGenshin[(this.$route.params.id)]
  }
}
</script>

<style lang="scss">
@import '../styles/styles.scss';

.container-character-view{
  width: 85vw;
  margin: auto;
}
.header-character{
  background-color: var(--primary-color);
  justify-content: center;
  position: relative;
  display: flex;
  h2{
    margin: 0px;
    padding: 10px;
  }
  a{
    position: absolute;
    text-decoration: none;
    left: 20px;
    top: 15px;
    font-weight: bold;
  }
}
.introducion-character{
  margin: auto;
  display: flex;
}
.image-character{
  img{
    max-width: 390px;
  }
}
.resume-character{
  padding: 8px;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  overflow: hidden;
  span{
    text-align: left;
    padding: 8px;
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
</style>
