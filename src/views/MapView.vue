<template>
  <div class="home">
    <embed class="map" src="https://genshin-impact-map.appsample.com/#/" style="width:100%; height: 90vh;">
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style lang="scss">
@import '../styles/styles.scss';

.map {
  margin-top: 62px;
}

</style>
