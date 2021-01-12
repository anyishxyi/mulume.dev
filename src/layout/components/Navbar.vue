<template>
  <div class="navbar space_between flex mr-10">
    <router-link :to="{path: '/home'}">
      <div class="items-center text-lg mr-6 flex">
        <el-image :src="jeanpaul" alt="Profile picture of Jean-Paul NGALULA (very handsome)" class="w-40 object-cover h-full responsive-image-placeholder"></el-image>
        <span class="font-bold color-theme-accent">Jean-Paul NGALULA</span>
      </div>
    </router-link>
    <div class="right-menu flex">
      <button class="theme-switch-button" @click="toggleTheme">
        <svg v-if="!!theme" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
      </button>
      <!-- <router-link :to="{path: '/about'}"><a class="btn btn-1"><svg><rect x="0" y="0" fill="none" width="100%" height="100%"/></svg>about</a></router-link>
      <router-link :to="{path: '/uses'}"><a class="btn btn-1"><svg><rect x="0" y="0" fill="none" width="100%" height="100%"/></svg>uses</a></router-link>
      <router-link :to="{path: '/contact'}"><a class="btn btn-2"><svg><rect x="0" y="0" fill="none" width="100%" height="100%"/></svg>contact</a></router-link> -->

    
    <!-- <a class="btn btn-2">Hover</a>  -->

      <router-link :to="{path: '/about'}"><button class="btn btn-primary btn-ghost btn-open-line"> about </button></router-link>
      <router-link :to="{path: '/uses'}"><button class="btn btn-primary btn-ghost btn-open-line"> uses </button></router-link>
      <router-link :to="{path: '/contact'}"><button class="btn btn-primary btn-ghost"> contact </button></router-link>
    </div>
  </div>
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
.navbar {
  height: 60px;
  border: none;
  z-index: 100;
  top: 0;
  position: fixed;
  width: 100%;
  overflow:auto;

  .right-menu flex {
    float: right;
    height: 100%;
    line-height: 60px;
    margin-right: 40px;

    &:focus {
      outline: none;
    }

    .theme-switch-button {
      border: none;
      background: none;
      // cursor: pointer;
      cursor: hand;
      color: var(--text-primary-color);
      outline: 0;
      margin-top: 5px;
      // position: fixed;
      // top: 15px;
      // right: 15px;
      
      svg {
        fill: var(--text-primary-color);
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }

    .btn_connexion {
      color: blue($color: #000000);
    }
  }
}
</style>