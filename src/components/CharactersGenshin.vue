<template>
  <div>
    <div class="characters-filter">
      <div class="sub-characters-filter">
        <select>
          <option>Em breve</option>
          <option>Em breve</option>
          <option>Em breve</option>
          <option>Em breve</option>
          <option>Em breve</option>
          <option>Em breve</option>
        </select>
        <h3>Filtro</h3>
      </div>
    </div>
    <div class="container-characters-genshin">
      <div class="character-item" v-for="(character, i) in characters" v-bind:key="i">
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
      characters: CharactersGenshin
    }
  },
  methods: {
    redirectToPage (x) {
      this.$router.push('/characterview/' + x)
    }
  }
}
</script>

<style lang="scss">
@import '../styles/styles.scss';
.characters-filter{
  background-color: var(--secondary-color);
  padding: 8px;
  margin-bottom: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
  .sub-characters-filter{
    width: 90vw;
    flex-direction: row-reverse;
    display: flex;
    h3{
      margin: auto 0px;
      padding: 0px;
      padding-right: 15px;
      color: var(--white-color)
    }
    select{
      text-align: left;
      width: 180px;
      padding: 12px;
      cursor: pointer;
    }
  }
}
.container-characters-genshin{
  width: 90vw;
  margin: auto;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
}
.character-item{
  background-color: var(--primary-color);
  overflow: hidden;
  margin-bottom: 15px;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  span{
    padding: 12px;
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
