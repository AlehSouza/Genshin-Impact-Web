<template>
  <div class="container">
    <div class="background-filter">
      <div v-if="name" class="characters-filter">
        <div class="sub-characters-filter">
          <h3>Filtro</h3>
          <select v-on:change="changeFilter($event)">
            <option value="id" selected>Nenhum</option>
            <option value="name">Nome</option>
            <option value="weapon">Arma</option>
            <option value="gender">Gênero</option>
            <option value="vision">Visão</option>
          </select>
        </div>
        <h1>{{ name }}</h1>
      </div>
    </div>
    <loading-component v-if="loading"/>
    <div v-else class="container-characters-genshin">
      <character-item v-for="(item, index) in charactersData" v-bind:key="index" :character="item"/>
    </div>
  </div>
</template>

<script>
import { redirectToPage } from '@/utils/Pages'
import LoadingComponent from './LoadingComponent.vue'
import CharacterItem from './CharacterItem.vue'

export default {
  components: {
    LoadingComponent,
    CharacterItem
  },
  data () {
    return {
      loading: true,
      filterOption: '',
      redirectToPage
    }
  },
  props: {
    charactersData: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  methods: {
    changeFilter (e) {
      this.filterOption = e.target.options[e.target.options.selectedIndex].value
      if (this.filterOption === 'id') {
        // eslint-disable-next-line vue/no-mutating-props
        this.charactersData.sort((a, b) => a._id.toString().localeCompare(b._id))
        return
      }
      // eslint-disable-next-line vue/no-mutating-props
      this.charactersData.sort((a, b) => a[e.target.value].localeCompare(b[e.target.value]))
    }
  },
  watch: {
    charactersData () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.container {
  h1 {
    margin: 0px;
    padding: 15px;
    color: var(--white-color);
  }
}
.background-filter{
  background-image: url('../assets/backgrounds/night_sky.webp');
  background-size: cover;
  background-position: center;
}
.characters-filter{
  background-color: rgba(0, 0, 0, 0.5);
  padding: 8px;
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
  width: 90vw;
  padding: 25px 0px;
  margin: auto;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
}
</style>
