<template>
  <div class="navbar navbar-default nav-color">
    <router-link :to="{path: '/home'}">
      <a class="flex items-center text-theme-accent font-bold text-lg mr-6">
        <div class="responsive-image-container overflow-hidden inline-block w-10 h-10 mr-2 rounded-full border-2 border-light-accent dark:border-dark-accent">
          <el-image :src="jeanpaul" alt="Profile picture of Jean-Paul NGALULA (very handsome)" class="object-cover h-full responsive-image-placeholder"></el-image>
        </div>
        <span>Jean-Paul NGALULA</span>
      </a>
    </router-link>
    <div class="right-menu">
      <el-button type="primary" class="pad" @click="toggleTheme"> theme </el-button>
      <router-link :to="{path: '/about'}"><a class=""> about </a></router-link>
      <router-link :to="{path: '/uses'}"><a class=""> uses </a></router-link>
      <router-link :to="{path: '/contact'}"><a class="bg-transparent text-light-accent dark:text-dark-accent font-semibold py-2 px-4 border-2 border-light-accent dark:border-dark-accent transition transition-all duration-300 rounded-lg hover:border-transparent hover:bg-light-accent dark-hover:bg-dark-accent hover:text-light-onAccent dark-hover:text-dark-onAccent get-in-touch text-base sm:text-base nuxt-link-exact-active nuxt-link-active" aria-current="page">Get in touch</a></router-link>
    </div>
  </div>
</template>

<script>
const sun = require('@/assets/images/svg/sun.svg')
const jeanpaul = require('@/assets/images/png/jeanpaul_ngalula.png')
const OFFSET = 60

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      theme: '',
      jeanpaul,
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

<style lang="scss" scoped>
.navbar {
  height: 60px;
  border: none;
  z-index: 100;
  transition: background-color 1s ease 0s;
  top: 0;
  position: fixed;
  width: 100%;
  background-color: var(--app-background-color);
  // display: flex;

  // .logo {
  //   width: 30px;
  // }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 60px;
    margin-right: 40px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 1.1em;
      color: white;
      // vertical-align: text-bottom;
      &.lang {
        font-size: 1.7em;
      }
      &.hover-effect {
        cursor: pointer;
        transition: background .3s;
        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
      .el-icon-s-tools {
        font-size: 1.15em;
        line-height: 3.1em;
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
.text-light-accent {
  --text-opacity: 1;
  color: #5c61ff;
  color: rgba(92,97,255,var(--text-opacity));
}
}
</style>