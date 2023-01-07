<template>
  <div>
    <div class="container-regions">
      <div
        class="region" v-for="(region, i) in ApiRegions"
        v-bind:key="i"
        v-bind:style="{ backgroundImage: 'url('+ region.bgImage +')' }"
      >
        <div class="region-opacity" @click="openDialog()">
          <div class="region-name">
            <p>
              {{region.name}}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="sub_dialog" ref="dialog" @click="closeDialog()">
      <div class="dialog" @click="closeDialog()">
        <div class="border_dialog">
          <h1>Notificação do Sistema</h1>
          <div class="break_line"></div>
          <p>
            Esse elemento ainda está em desenvolvimento!
            <br>
            Volte novamente mais tarde
            <br>
            <br>
            <img src="https://imgur.com/pKvM4Y4.png" alt="" width="140px">
          </p>
          <div class="break_line"></div>
          <div class="btn-genshin" @click="goAboutGenshin()">
            <div class="circle-container">
              <div class="circle">
                <div class="circle-inside"></div>
              </div>
            </div>
            <span>Confirmar</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'alou'
    }
  },
  props: {
    ApiRegions: {
      type: Array,
      required: true
    }
  },
  methods: {
    openDialog () {
      this.$refs.dialog.style.display = 'flex'
    },
    closeDialog () {
      this.$refs.dialog.style.display = 'none'
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('../styles/styles.scss');

.container-regions{
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0px;
  justify-content: center;
  flex-wrap: wrap;
  flex: 1 3 300px;
  display: flex;
}
.region{
  z-index: 1;
  width: 300px;
  height: 300px;
  margin: 12px;
  border-radius: 6px;
  background-size: cover;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
  overflow: hidden;
  cursor: pointer;
}
.region-opacity{
  background-color: rgba(0,0,0,0.350);
  transform: rotate(270deg);
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: flex-end;
  display: flex;
  .region-name{
    width: 100%;
    margin: 0px;
    height: 40px;
    padding: 8px 15px;
    text-align: left;
    justify-content: flex-end;
    align-items: center;
    display: flex;
    p{
      color: var(--white-color);
      letter-spacing: 1.5px;
      font-weight: 500;
      font-size: 1.5rem;
      padding: 0px;
      margin: 0px;
    }
  }
}

/* Modal */

.sub_dialog {
  position: fixed;
  z-index: 99999;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: none;
}
.dialog {
  width: auto;
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  background-color: #3e4457;
  position: relative;
  overflow: hidden;
  h1 {
    color: #cebc99;
    font-weight: 500;
  }
  p {
    width: 85%;
    font-size: 22px;
    font-weight: 500;
    color: white;
  }
}
.border_dialog {
  border-radius: 10px;
  border: 2px solid rgba(206, 188, 153, 0.386);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
}
/* btn-genshin */
.btn-genshin {
  width: 260px;
  padding: 8px;
  margin: 20px auto;
  border-radius: 50px;
  background-color: #ece5d8;
  box-shadow: 0 5px 10px rgba(0,0,0,0.1), 0 6px 6px rgba(0,0,0,0.1);
  align-items: center;
  display: flex;
  cursor: pointer;
  user-select: none;
  &:hover {
    background-color: #dad3c8;
  }
  .circle-container {
    width: 50px;
    height: 50px;
    background-color: #312f30;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .circle {
    background-color: #ceac5a;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .circle-inside {
    width: 20px;
    height: 20px;
    background-color: #312f30;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
  }
  span {
    text-align: center;
    width: 50%;
    margin: 0 auto;
    font-weight: 500;
    font-size: 24px;
  }
}
/* break line */
.break_line{
  width: 80%;
  height: 1px;
  border-radius: 10px;
  margin: 0 auto;
  background-color: rgba(206, 188, 153, 0.459);
}
</style>
