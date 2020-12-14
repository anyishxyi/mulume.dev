<template>
  <div class="navbar navbar-default nav-color">
    <router-link :to="{path: '/home'}">
      nmcodes
    </router-link>
    <div class="right-menu">
      <!-- <el-button type="primary" class="pad">
        <router-link :to="{path: '/home'}">
          Accueil
        </router-link>
      </el-button> -->
    </div>
  </div>
</template>

<script>
const OFFSET = 60

export default {
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
      showLoginPage: false
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
    }
  }
}
</script>

<style lang="scss" scoped>

// .navbar {
//   height: 60px;
//   border: none;
//   z-index: 100;
//   transition: background-color 1s ease 0s;
//   top: 0;
//   position: fixed;
//   width: 100%;
//   background-color: #222020;
//   // display: flex;

//   .logo {
//     float: left;
//     width: 140px;
//     height: 18px;
//     line-height: 60px;
//     margin-left: 20px;
//     margin-top: 20px;
//   }

//   .right-menu {
//     float: right;
//     height: 100%;
//     line-height: 60px;
//     margin-right: 40px;

//     &:focus {
//       outline: none;
//     }

//     .right-menu-item {
//       display: inline-block;
//       padding: 0 8px;
//       height: 100%;
//       font-size: 1.1em;
//       color: white;
//       // vertical-align: text-bottom;
//       &.lang {
//         font-size: 1.7em;
//       }
//       &.hover-effect {
//         cursor: pointer;
//         transition: background .3s;
//         &:hover {
//           background: rgba(0, 0, 0, .025)
//         }
//       }
//       .el-icon-s-tools {
//         font-size: 1.15em;
//         line-height: 3.1em;
//       }
//     }

//     .avatar-container {
//       margin-right: 30px;

//       .avatar-wrapper {
//         margin-top: 5px;
//         position: relative;

//         .user-avatar {
//           cursor: pointer;
//           width: 40px;
//           height: 40px;
//           border-radius: 10px;
//         }

//         .el-icon-caret-bottom {
//           cursor: pointer;
//           position: absolute;
//           right: -20px;
//           top: 25px;
//           font-size: 12px;
//         }
//       }
//     }

//     .btn_connexion {
//       color: blue($color: #000000);
//     }
//   }
// }

// .pad {
//   padding-right: 10px;
//   padding-left: 10px;
// }
</style>
