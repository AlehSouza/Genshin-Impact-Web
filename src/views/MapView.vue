<template>
  <div class="home">
    <embed class="map" src="https://genshin-impact-map.appsample.com/#/" style="width:100%; height: 90vh;">
    <span>Map is powered by <a href="https://metaplayer.gg/" target="_blank" rel="noopener noreferrer">MetaPlayer</a>.</span>
    <FooterShared/>
  </div>
</template>

<script>
import FooterShared from '@/components/shared/FooterShared.vue'

export default {
  name: 'MapView',
  components: {
    FooterShared
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.home{
  flex-direction: column;
  display: flex;
  span{
    top: 0px;
    right: 0px;
    z-index: 2;
    padding: 20px;
    color: black;
  }
}
</style>
