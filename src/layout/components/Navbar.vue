<template>
  <div>
    <div class="navbar navbar-default nav-color shadow">
      <router-link :to="{path: '/home'}">
        <el-image class="logo" :src="logo" lazy />
      </router-link>
      <div class="right-menu">
        <el-button type="primary" class="pad">
          <router-link :to="{path: '/home'}">
            Accueil
          </router-link>
        </el-button>
        <el-button type="primary" class="pad">
          <router-link :to="{path: '/events'}">
            Evenements
          </router-link>
        </el-button>
        <el-button v-if="loggedIn" type="success" class="pad" plain>
          <router-link :to="{path: '/event/create'}">
            Créer Evenement
          </router-link>
        </el-button>
        <el-button v-if="!loggedIn" type="success" class="pad" @click="loginClicked" round>Connexion</el-button>
        <el-dropdown v-if="loggedIn" class="right-menu-item hover-effect pad" trigger="click">
          <i class="el-icon-s-tools" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="goToProfile">Profil</el-dropdown-item>
            <el-dropdown-item @click.native="openLogout" divided>
              <span style="display:block;">Deconnexion</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <Login
      :visibility="showLoginPage"
      @eventToggleLoginVisibility="toggleLoginVisibility"
    />
  </div>
</template>

<script>
import Login from '@/components/Auth/Login'
import { authComputed } from '@/store/helpers'
const OFFSET = 60
const logo = require('@/icons/png/handMe.png')

export default {
  components: { Login },
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      showLoginPage: false,
      logo
    }
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
  computed: {
    ...authComputed
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
    toggleLoginVisibility(value) {
      this.showLoginPage = value
      // console.log('toggleLoginVisibility')
      // console.log(this.showLoginPage)
    },
    loginClicked() {
      // console.log('clicked')
      this.showLoginPage = true
      // console.log(this.showLoginPage)
    },
    openLogout() {
      this.$confirm('Voulez vous vraiment vous deconnecter ?', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Annuler',
        type: 'warning',
        showClose: false
      }).then( async () => {
        // await this.$localforage.removeItem('userData').catch(error => console.log('error', error))
        // this.userData = null
        this.$store.dispatch('logout')
        await this.$router.replace(`/home?redirect=${this.$route.fullPath}`)
      })
    },
    goToProfile() {
      this.$router.push(`/profile?redirect=${this.$route.fullPath}`)
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
  background-color: #222020;
  // display: flex;

  .logo {
    float: left;
    width: 140px;
    height: 18px;
    line-height: 60px;
    margin-left: 20px;
    margin-top: 20px;
  }

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
}

.pad {
  padding-right: 10px;
  padding-left: 10px;
}
</style>
