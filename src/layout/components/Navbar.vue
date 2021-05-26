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
        <span class="pl-5 font-bold name-size color-theme-accent">nmcodes</span>
      </div>
    </router-link>
    <div class="right-menu flex p13">
      <span class="theme-switch-button" @click="toggleTheme">
        <img :src=sunny v-if="!!theme" alt="sunny" class="mode-icon"/>
        <img :src=moon v-else alt="moon" class="mode-icon"/>
      </span>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      <div class="nav-links">
        <!-- <router-link :to="{path: '/home'}"><button for="nav-check" class="close ml-20 btn-no-border btn-pad"> start </button></router-link> -->
        <router-link :to="{path: '/about'}"><button for="nav-check" class="close ml-20 btn-no-border btn-pad"> {{ $t('layout.navbar.about') }} </button></router-link>
        <!-- <router-link :to="{path: '/uses'}"><button for="nav-check" class="close ml-20 btn-no-border btn-pad"> uses </button></router-link> -->
        <router-link :to="{path: '/contact'}"><button for="nav-check" class="slide ml-20 btn-border btn-pad">{{ $t('layout.navbar.contact') }}</button></router-link>
      </div>
    </div>
  </div>
  </template>
  
  <script>
    const OFFSET    = 60
    const jeanpaul  = require('@/assets/images/png/jeanpaul_ngalula.png')
    const moon      = require('@/assets/images/svg/moon.svg')
    const sunny     = require('@/assets/images/svg/sunny.svg')
  
    export default {
      data() {
        return {
          showNavbar: true,
          lastScrollPosition: 0,
          theme: '',
          jeanpaul,
          moon,
          sunny
        }
      },
      mounted() {
        this.$store.dispatch('getTheme').catch(error => { console.error(error) })
        const themeSaved = this.$store.state.nm_theme
        this.theme = themeSaved === 'darkMode' ? 'darkMode' : ''
        document.documentElement.setAttribute('theme', this.theme); // updates the data-theme attribute
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
          this.theme = this.theme === 'darkMode' ? '' : 'darkMode'
          document.documentElement.setAttribute('theme', this.theme)
          this.$store.dispatch('setTheme', this.theme).catch(error => { console.error(error) })
        },
        setLanguage() {
          // Cookies.set('name', 'value');
        }
      }
    }
  </script>