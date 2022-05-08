<template>
  <div class="modais-container">
    <div class="modal-btn">
      <button @click="showCharacter(personagem)">Detalhes</button>
    </div>
    <div class="modal-container" :id="'modal'+personagem.id">
        <div class="modal-sub-container">
          <div class="modal-header">
            <span>{{personagem.name}}</span>
            <button @click="showCharacter(personagem)">X</button>
          </div>
          <div class="modal-content">
            <span>Id: {{personagem.id}}</span>
            <span>Nome: {{personagem.name}}</span>
            <span>Visão: {{personagem.vision}}</span>
            <span>Arma: {{personagem.weapon}}</span>
            <span>Aniversário: {{personagem.birthday}}</span>
            <span>Estrelas: {{personagem.stars}}</span>
            <span>Região: {{personagem.region}}</span>
          </div>
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
    personagem: {
      type: Object,
      required: true
    }
  },
  methods: {
    showCharacter (personagem) {
      this.isOpen = !this.isOpen
      if (this.isOpen) {
        document.getElementById('modal' + personagem.id).style.display = 'flex'
        document.getElementById('app').style.overflow = 'hidden'
      } else {
        document.getElementById('modal' + personagem.id).style.display = 'none'
        document.getElementById('app').style.overflow = 'auto'
      }
    }
  }
}
</script>

<style lang="scss">
@import '../styles/styles.scss';

.modal-btn{
  width: 200px;
  button{
    background-color: var(--secondary-color);
    color: var(--white-color);
    width: 100%;
    padding: 12px;
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
  padding-bottom: 15px;
  background-color: white;
  border-radius: 8px;
  flex-direction: column;
  display: flex;
  overflow: hidden;
}
.modal-header{
  padding: 12px;
  position: relative;
  background-color: var(--primary-color);
  button{
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
}
.modal-content{
  justify-content: left;
  flex-direction: column;
  display: flex;
  span{
    text-align: left;
  }
}
</style>
