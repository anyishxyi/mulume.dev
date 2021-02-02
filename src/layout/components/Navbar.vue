<template>
<div class="nav space_between flex mr-10">
  <input type="checkbox" id="nav-check">
  <router-link :to="{path: '/home'}" class="txt-deco-none">
    <div class="nav-header text-lg p-13 justify-center align-items mr-24 flex">
      <span class="icon-width icon-height">
        <figure class="pic-border">
          <img :src="jeanpaul" class="profile-pic" alt="Profile picture of Jean-Paul NGALULA (very handsome)" />
        </figure>
      </span>
      <span class="pl-5 font-bold name-size color-theme-accent">Jean-Paul NGALULA</span>
    </div>
  </router-link>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <button class="theme-switch-button mb-15" @click="toggleTheme">
      <svg v-if="!!theme" class="svg-theme-size mt-svg-theme" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
      <svg v-else class="svg-theme-size mt-svg-theme" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
    </button>
    <router-link :to="{path: '/home'}"><a class="link color-theme-accent hidden inline-block"> start </a></router-link>
    <router-link :to="{path: '/about'}"><a class="link color-theme-accent hidden inline-block"> about </a></router-link>
    <router-link :to="{path: '/contact'}"><button class="slide hidden btn-pad">Get in touch</button></router-link>
  </div>
</div>
  <!-- <div class="navbar space_between flex mr-10">
    <router-link :to="{path: '/home'}" class="txt-deco-none">
      <div class="text-lg mt-20 justify-center align-items mr-24 flex">
        <span class="ml-20 icon-width icon-height">
          <figure class="pic-border">
            <img :src="jeanpaul" class="profile-pic" alt="Profile picture of Jean-Paul NGALULA (very handsome)" />
          </figure>
        </span>
        <span class="pl-5 font-bold name-size color-theme-accent">Jean-Paul NGALULA</span>
      </div>
    </router-link>
    <div class="right-menu mr-40 justify-center vertical-middle flex align-items">
      <button class="theme-switch-button mb-15" @click="toggleTheme">
        <svg v-if="!!theme" class="svg-theme-size mt-svg-theme" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"></circle>
          <line x1="12" y1="1" x2="12" y2="3"></line>
          <line x1="12" y1="21" x2="12" y2="23"></line>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
          <line x1="1" y1="12" x2="3" y2="12"></line>
          <line x1="21" y1="12" x2="23" y2="12"></line>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
        <svg v-else class="svg-theme-size mt-svg-theme" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </button>
      <router-link :to="{path: '/home'}"><a class="link color-theme-accent hidden inline-block"> start </a></router-link>
      <router-link :to="{path: '/about'}"><a class="link color-theme-accent hidden inline-block"> about </a></router-link>
      <router-link :to="{path: '/contact'}"><button class="slide hidden btn-pad">Get in touch</button></router-link>
    </div>
  </div> -->
</template>

<script>
const jeanpaul = require('@/assets/images/png/jeanpaul_ngalula.png')
const OFFSET = 60

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      theme: '',
      jeanpaul
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

<style lang="scss" scoped>

</style>