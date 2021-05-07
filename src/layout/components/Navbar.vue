<template>
<div class="nav space_between flex mr-10">
  <input type="checkbox" id="nav-check">
  <router-link :to="{path: '/home'}" class="txt-deco-none">
    <div class="nav-header text-lg p-13 justify-center align-items mr-24 flex">
      <span class="icon-size">
        <figure class="pic-border">
          <img :src="jeanpaul" class="profile-pic" alt="Profile picture of Jean-Paul NGALULA (very handsome)" />
        </figure>
      </span>
      <span class="pl-5 font-bold name-size color-theme-accent">Jean-Paul NGALULA</span>
    </div>
  </router-link>
  <div class="right-menu flex p13">
    <!-- <button class="theme-switch-button" @click="toggleTheme">
      <svg-icon v-if="!!theme" icon-class="moon" class="mode-icon"/>
      <svg-icon v-else icon-class="sun" class="mode-icon"/>
    </button> -->

    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>
    <div class="nav-links">
      <!-- <router-link :to="{path: '/home'}"><button for="nav-check" class="close ml-20 btn-no-border btn-pad"> start </button></router-link> -->
      <router-link :to="{path: '/about'}"><button for="nav-check" class="close ml-20 btn-no-border btn-pad"> {{ $t('menu.about') }} </button></router-link>
      <!-- <router-link :to="{path: '/uses'}"><button for="nav-check" class="close ml-20 btn-no-border btn-pad"> uses </button></router-link> -->
      <router-link :to="{path: '/contact'}"><button for="nav-check" class="slide ml-20 btn-border btn-pad">{{ $t('menu.contact') }}</button></router-link>
    </div>
  </div>
</div>
</template>

<script>
const jeanpaul  = require('@/assets/images/png/jeanpaul_ngalula.png')
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
  .mode-icon {
    font-size: 36px;
    float: left;
    margin-top: -2px;
    margin-right: 15px;
    margin-left: 5px;
    svg {
      fill: black;
    }
  }
</style>