<template>
  <div class="container">
    <div class="characters-filter">
      <div class="sub-characters-filter">
        <h3>Filtro</h3>
        <select v-on:change="changeFilter($event)">
          <option value="id" selected>Nenhum</option>
          <option value="name">Alfabética</option>
          <option value="weapon">Arma</option>
          <option value="gender">Gênero</option>
          <option value="vision">Visão</option>
        </select>
      </div>
      <h1>Personagens</h1>
    </div>
    <div class="container-characters-genshin">
      <div class="character-item"
          v-for="(character, i) in characters"
          v-bind:key="i"
          v-bind:style="{backgroundColor: character.color}
      ">
        <span>
          {{character.name}}
        </span>
        <img @click="redirectToPage(character.id)" :src="character.image" :alt="character.name" srcset="">
        <ModalCharacter :character="character"/>
      </div>
    </div>
  </div>
</template>

<script>
import CharactersGenshin from '../api/index'
import ModalCharacter from './ModalCharacter.vue'

export default {
  components: {
    ModalCharacter
  },
  data () {
    return {
      characters: [],
      charactersDefault: CharactersGenshin,
      filterOption: ''
    }
  },
  props: {
    redirectToPage: {
      type: Function,
      required: true
    }
  },
  mounted () {
    CharactersGenshin.forEach(Character => {
      this.characters.push(Character)
    })
  },
  methods: {
    changeFilter (e) {
      this.filterOption = e.target.options[e.target.options.selectedIndex].value
      if (this.filterOption === 'id') {
        this.characters.sort((a, b) => a.id.toString().localeCompare(b.id))
        return
      }
      this.characters.sort((a, b) => a[e.target.value].localeCompare(b[e.target.value]))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.container {
  border-bottom: 35px solid var(--primary-color);
  h1 {
    margin: 0px;
    padding: 15px;
    background-color: var(--primary-color);
    color: var(--white-color);
  }
}

.characters-filter{
  background-color: var(--primary-color);
  padding: 8px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  display: flex;

  .sub-characters-filter{
    position: absolute;
    left: 10vw;
    flex-wrap: wrap;
    padding: 0px 8px;
    justify-content: center;
    display: flex;
    h3{
      margin: auto 0px;
      padding: 0px;
      padding-right: 15px;
      color: var(--white-color)
    }
    select{
      border: 0px;
      border-radius: 50px;
      width: 180px;
      padding: 8px;
      outline: none;
      cursor: pointer;
      text-align: left;
      align-items: left;
      justify-content: left;
      display: flex;
      options {
        cursor: pointer;
      }
    }
  }
}

.container-characters-genshin{
  width: 93vw;
  padding: 25px 0px;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
}

.character-item{
  overflow: hidden;
  margin: 15px;
  border-radius: 5px;
  box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  span{
    padding: 12px;
    color: var(--white-color);
  }
  img{
    width: 200px;
    cursor: pointer;
  }
}

span{
  font-weight: bold;
}

</style>
