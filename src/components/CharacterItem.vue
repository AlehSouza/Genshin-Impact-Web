<template>
  <div
    @click="redirectToPage(character._id)"
    class="container-item"
    v-bind:style="{ backgroundImage: 'url('+ character.image +')' }"
    >
    <span @click="redirectToPage(character._id)">
      {{ filterName(character.name) }}
    </span>
  </div>
</template>

<script>

import { redirectToPage } from '@/utils/Pages'

export default {
  name: 'CharacterItem',
  props: {
    character: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      name: 'CharacterView',
      redirectToPage
    }
  },
  methods: {
    filterName (str) {
      const splited = str.split(' ')
      if (splited.length > 1) {
        return splited[1]
      }
      return str
    }
  }
}
</script>

<style lang="scss" scoped>
  .container-item {
    width: 250px;
    height: 450px;
    margin: 15px;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    background-size: cover;
    flex-direction: column-reverse;
    align-items: flex-end;
    display: flex;
    user-select:none;
    cursor: pointer;
    span {
      width: 78%;
      border-radius: 50px 0px 0px 50px;
      border: 2px solid rgb(245, 216, 193);
      color: white;
      font-weight: 600;
      letter-spacing: 1px;
      border-right: 0px;
      background-image: linear-gradient(to right, #2d3343, rgba(45, 51, 67, 0.5));
      padding: 12px;
      margin-bottom: 35px;
      cursor: pointer;
      position: relative;
      transition: 0.5s;
      &:hover{
        animation: 1s pulse-line infinite ;
        &::before{
          content: ' ';
          clip-path: polygon(100% 50%, 0% 100%, 0% 0%);
          background-color:white;
          width: 12px;
          height: 12px;
          left: -18px;
          top: 18px;
          animation: 1s pulse-line infinite ;
          animation: 0.5s pulse-arrow infinite;
          position: absolute;
          display: flex;
        }
      }
    }
  }

@keyframes pulse-line {
  0% {
    box-shadow: 0 2px 10px rgba(0,0,0,0.19), 0px 0px 0px rgba(0,0,0,0.23);
  }
  50% {
    box-shadow: 0 8px 10px rgba(0,0,0,0.19), 0px 0px 0px rgba(0,0,0,0.23);
  }
  100% {
    box-shadow: 0 2px 10px rgba(0,0,0,0.19), 0px 0px 0px rgba(0,0,0,0.23);
  }
}
@keyframes pulse-arrow {
  0% {
    left: -20px;
  }
  50% {
    left: -18px;
  }
  100% {
    left: -20px;
  }
}
</style>
