<template>
  <div>
    <!-- <div class="characters-filter">
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
    </div> -->
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
      characters: CharactersGenshin
    }
  },
  props: {
    redirectToPage: {
      type: Function,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
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
  padding: 0px 0px 50px 0px;
  justify-content: space-between;
  flex-wrap: wrap;
  display: flex;
}

.character-item{
  overflow: hidden;
  margin: 15px 9px;
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
