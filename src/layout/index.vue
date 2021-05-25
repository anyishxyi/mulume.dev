<template>
  <div class="app-wrapper">
    <Navbar />
    <app-main />
    <Footer />
  </div>
</template>
<script>
import { AppMain, Navbar, Footer } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    Navbar,
    Footer
  }
}

</script>

<style lang="scss" scoped>
  .app-wrapper {
    // @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
  }
</style>
