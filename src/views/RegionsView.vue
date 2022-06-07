<template>
  <div class="container">
    <HeaderRegions/>
    <RegionsGenshin :api-regions="ApiRegions"/>
    <FooterShared/>
  </div>
</template>

<script>
import HeaderRegions from '@/components/HeaderRegions.vue'
import RegionsGenshin from '@/components/RegionsGenshin.vue'
import ApiRegions from '@/api/regions'
import FooterShared from '@/components/shared/FooterShared.vue'

export default {
  name: 'RegionsView',
  data () {
    return {
      pageTitle: 'Regiões',
      ApiRegions
    }
  },
  components: {
    HeaderRegions,
    RegionsGenshin,
    FooterShared
  }
}
</script>

<style lang="scss" scoped>

</style>
