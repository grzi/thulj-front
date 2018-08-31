<template>
  <div>
    <SideNav v-bind:activeSection='"gamepad"'></SideNav>
    <TitleBar v-bind:sectionTitle='sectionTitle'></TitleBar>
    <Footer></Footer>
  </div>

</template>

<script>
  import SideNav from '@/components/thulj/commons/SideNav.vue'
  import TitleBar from '@/components/thulj/commons/TitleBar.vue'
  import Footer from '@/components/thulj/commons/Footer.vue'

  export default {
    name: 'Game',
    components: {
      SideNav,
      Footer,
      TitleBar
    },
    created () {
      document.title = 'Jeux - Thulj.fr'
    },
    data: function () {
      return {
        sectionTitle: 'Thulj > Gaming'
      }
    }
  }
</script>

<style scoped>

</style>
