<template>
  <div class="navbar navbar-default nav-color">
    <router-link :to="{path: '/home'}">Jean-Paul NGALULA</router-link>
    <div class="right-menu">
      <el-button type="primary" class="pad" @click="toggleTheme"> theme </el-button>
      <router-link :to="{path: '/about'}"><el-button type="primary" class="pad"> about </el-button></router-link>
      <router-link :to="{path: '/uses'}"><el-button type="primary" class="pad"> uses </el-button></router-link>
      <router-link :to="{path: '/contact'}"><el-button type="primary" class="pad"> Get in touch </el-button></router-link>
    </div>
  </div>
</template>

<script>
const sun = require('@/assets/images/svg/sun.svg')
const OFFSET = 60

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      theme: '',
      sun
    }
  },
mounted() {
  const localTheme = localStorage.getItem('theme'); //gets stored theme value if any
  document.documentElement.setAttribute('data-theme', localTheme); // updates the data-theme attribute
},
  async beforeMount () {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      if (window.pageYOffset < 0) { return }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) { return }
      this.showNavbar = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    toggleTheme() {
      this.$store.dispatch('setTheme', this.theme)
                  .then(() => {
                    this.theme = this.theme === 'darkMode' ? '' : 'darkMode'
                    document.documentElement.setAttribute('theme', this.theme)
                  })
                  .catch(error => { console.error(error) })
    }
  }
}
</script>