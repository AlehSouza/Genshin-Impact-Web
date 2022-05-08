<template>
  <div class="container-characters-genshin">
    <div class="character-item" v-for="(character, i) in characters" v-bind:key="i">
      <span>
        {{character.name}}
      </span>
      <img :src="character.image" :alt="character.name" srcset="">
      <ModalCharacter :personagem="character"/>
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
  }
}
</script>

<style lang="scss">
@import '../styles/styles.scss';

.container-characters-genshin{
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
}
.character-item{
  background-color: var(--primary-color);
  overflow: hidden;
  margin: 5px;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  span{
    padding: 12px;
  }
  img{
    width: 200px
  }
}
span{
  font-weight: bold;
}
</style>
