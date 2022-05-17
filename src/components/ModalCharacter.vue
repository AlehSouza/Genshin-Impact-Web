<template>
  <div class="modais-container">
    <div class="modal-btn">
      <button @click="showCharacter(character)" v-bind:style="{backgroundColor: character.color}">Resumo</button>
    </div>
    <div class="modal-container" :id="'modal'+character.id">
        <div class="modal-sub-container">
          <div class="modal-header" v-bind:style="{backgroundColor: character.color}">
            <span>{{character.name}}</span>
            <button @click="showCharacter(character)">X</button>
          </div>
          <div class="modal-content">
            <span>Nome: {{character.name}}</span>
            <span>Visão: {{character.vision}}</span>
            <span>Arma: {{character.weapon}}</span>
            <span>Aniversário: {{character.birthday}}</span>
            <span>Estrelas: {{character.stars}}</span>
            <span>Região: {{character.region}}</span>
          </div>
          <button class="modal-details" @click="redirectToPage(character.id)">Ver mais detalhes</button>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isOpen: false
    }
  },
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  methods: {
    showCharacter (character) {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        document.getElementById('modal' + character.id).style.display = 'flex'
        document.getElementById('app').style.overflow = 'hidden'
      } else {
        document.getElementById('modal' + character.id).style.display = 'none'
        document.getElementById('app').style.overflow = 'auto'
      }
    },
    redirectToPage (x) {
      this.$router.push('/characterview/' + x)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.modal-btn{
  width: 200px;
  button{
    color: var(--white-color);
    width: 100%;
    padding: 15px;
    border-radius: 0px;
    border: 0px;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
  }
}
.modais-container{
  overflow: hidden;
}
.modal-container{
  display: none;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.50);
  overflow: hidden;
}
.modal-sub-container{
  width: 500px;
  background-color: var(--white-color);
  border-radius: 8px;
  flex-direction: column;
  display: flex;
  overflow: hidden;
}
.modal-header{
  padding: 12px;
  position: relative;
  button{
    color: var(--white-color);
    height: 100%;
    top: 0px;
    right: 2px;
    min-width: 40px;
    position: absolute;
    font-weight: bold;
    background-color: transparent;
    border: 0px;
    cursor: pointer;
  }
  span{
    font-weight: bold;
    color:var(--white-color)
  }
}
.modal-content{
  justify-content: left;
  flex-direction: column;
  display: flex;
  span{
    text-align: left;
    padding: 12px;
  }
}
.modal-details{
  padding: 12px;
  background-color: var(--tertiary-color);
  color: var(--white-color);
  text-transform: uppercase;
  border: 0px;
  cursor: pointer;
  font-weight: bold;
}
</style>
