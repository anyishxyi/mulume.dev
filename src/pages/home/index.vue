<template>
    <div id="app">
        <div class="section container">
            <div class="columns is-mobile">
                <div class="column is-2">
                    <!-- dynamic logo -->
                    <a href="https://www.mynotepaper.com/" target="_blank">
                        <span v-if="darkMode === true">
                            <!-- <img alt="logo" src="./assets/images/logo-white.png"> -->
                        </span>
                        <span v-else>
                            <!-- <img alt="logo" src="./assets/images/logo-black.png"> -->
                        </span>
                    </a>
                </div>
                <div class="column is-9">
                    <!-- content -->
                </div>
                <div class="column is-1">
                    <!-- theme switcher -->
                    <input type="checkbox" id='theme-switch' class='theme-switch' v-model="darkMode"/>
                    <label for='theme-switch'>
                        <span v-if="darkMode === true">
                            <img alt="logo" src="@/assets/images/png/sun.png" width="40">
                        </span>
                        <span v-else>
                            <img alt="logo" src="@/assets/images/png/moon.png" width="40">
                        </span>
                    </label>
                </div>
            </div>

            <section class="hero is-medium has-text-centered">
                <div class="hero-body">
                    <div class="container">
                        <h1 class="title dynamic-title">
                            <span v-if="darkMode === true">Dark Theme</span>
                            <span v-else>Light Theme</span>
                        </h1>
                        <h2 class="subtitle dynamic-subtitle">Greetings from MyNotePaper!</h2>
                    </div>
                </div>
            </section>

        </div>

    </div>
</template>

<script>
// import vuejsTypist from 'vuejs-typist'

export default {
  name: 'HOMEPAGE',
  components: {
    // vuejsTypist
  },
  data(){
    return {
      words: ['Mbote', 'Bonjour', 'Hello'],
      darkMode: false,
    }
  },
  mounted() {
            // set page title
            document.title = 'Multiple Themes in Vue.js';

            // set 'app-background' class to body tag
            let bodyElement = document.body;
            bodyElement.classList.add("app-background");

            // check for active theme
            let htmlElement = document.documentElement;
            let theme = localStorage.getItem("theme");

            if (theme === 'dark') {
                htmlElement.setAttribute('theme', 'dark')
                this.darkMode = true
            } else {
                htmlElement.setAttribute('theme', 'light');
                this.darkMode = false
            }
        },
        watch: {
            darkMode: function () {
                // add/remove class to/from html tag
                let htmlElement = document.documentElement;

                if (this.darkMode) {
                    localStorage.setItem("theme", 'dark');
                    htmlElement.setAttribute('theme', 'dark');
                } else {
                    localStorage.setItem("theme", 'light');
                    htmlElement.setAttribute('theme', 'light');
                }
            }
        }
}
</script>

<style lang="scss" scoped>
  .flow {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .flow svg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .link {
    /* RESET */
    text-decoration: none;
    line-height: 1;
    position: relative;
    z-index: 0;
    display: inline-block;
    padding: 5px 5px;
    overflow: hidden;
    color: #fff;
    vertical-align: bottom;
    transition: color .3s ease-out;
  }

  .link::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    transform: translateY(calc(100% - 2px));
    width: 100%;
    height: 100%;
    background-image: linear-gradient(60deg, #3374FF 0%, #3374FF 100%);
    transition: transform .25s ease-out;
  }

  .link:hover { 
    color: #fff;
  }

  .link:hover::before {
    transform: translateY(0);
    transition: transform .25s ease-out;
  }

</style>
