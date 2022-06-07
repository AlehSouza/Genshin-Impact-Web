<template>
  <div class="home">
    <HeaderHome :redirect-to-page="redirectToPage"/>
    <AboutHome/>
    <CategoriesHome/>
    <FooterShared/>
  </div>
</template>

<script>
import HeaderHome from '@/components/HeaderHome.vue'
import AboutHome from '@/components/AboutHome.vue'
import CategoriesHome from '@/components/CategoriesHome.vue'
import FooterShared from '@/components/shared/FooterShared.vue'
import { redirectToPage } from '@/utils/Pages'

export default {
  name: 'HomeView',
  data () {
    return {
      redirectToPage
    }
  },
  components: {
    HeaderHome,
    AboutHome,
    CategoriesHome,
    FooterShared
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/styles.scss';

.home{
  margin: auto;
}
</style>
