<template>
  <div class="home">
    <HeaderHome :redirect-to-page="redirectToPage"/>
    <BreakLine/>
    <IntroduceHome/>
    <BreakLine/>
    <CategoriesHome/>
    <FooterShared/>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import IntroduceHome from '@/components/IntroduceHome.vue'
import CategoriesHome from '@/components/CategoriesHome.vue'
import FooterShared from '@/components/shared/FooterShared.vue'
import { redirectToPage } from '@/utils/Pages'
import BreakLine from '@/components/shared/BreakLine.vue'

export default {
  name: 'HomeView',
  data () {
    return {
      redirectToPage
    }
  },
  components: {
    HeaderHome,
    IntroduceHome,
    CategoriesHome,
    FooterShared,
    BreakLine
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.home{
  margin: auto;
}
</style>
