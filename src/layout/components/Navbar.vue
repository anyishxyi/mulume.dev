<template>
  <div class="navbar navbar-default nav-color">
    <router-link :to="{path: '/home'}">nmcodes</router-link>
    <div class="right-menu">
      <el-image :src="sun" class="flag-size icon-right" lazy />
      <svg-icon class="sun" icon-class="sun" @click="modalOpened = false" />
      <el-button type="primary" class="pad" @click="toggleTheme"> Accueil </el-button>
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
      if (window.pageYOffset < 0) {
        console.log('<0')
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < OFFSET) {
        return
      }
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