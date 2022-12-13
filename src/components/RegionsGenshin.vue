<template>
  <div>
    <div class="container-regions">
      <div
          class="region" v-for="(region, i) in ApiRegions"
          v-bind:key="i"
          v-bind:style="{ backgroundImage: 'url('+ region.bgImage +')' }"
          @click="alerta"
      >
        <div class="region-opacity">
          <div class="region-name">
            <p>
              {{region.name}}
            </p>
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
    alerta () {
      alert('Opa, ainda estamos desenvolvendo essa funcionalidade! Aguarde.')
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
  position: relative;
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
</style>
