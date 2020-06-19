<template>
<div class="home-page">
	<h1>Hello.</h1>

	<p class="name">My name is Jean-Paul NGALULA.</p>

	<p>I am student and software developer at <a href="https://ownest.io/" target="_blank">Ownest</a>. Most of my work is publicly available on <a href="https://github.com/nmcodes" target="_blank">GitHub</a>.</p>

	<p>You probably want to follow me on <a href="https://www.linkedin.com/in/jeanpaulngalula/" target="_blank">LinkedIn</a> and <a href="https://twitter.com/nmcodes" target="_blank">Twitter</a> for more up-to-date content.</p>

	<p>Outside of programming, I enjoy video games, karaoke, football and eating pondu.</p>
  
  <div data-v-21d6155b="" data-v-19c62248="" class="flow flow" style="padding-top: 10%;">
    <svg data-v-21d6155b="" width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <rect data-v-21d6155b="" width="100%" height="100%" fill="transparent"></rect>
      <g data-v-21d6155b="" style="transform: translateY(40px);">
        <path data-v-21d6155b="" fill="#1a1a1a" opacity="0.75" fill-rule="evenodd" xd="M0 150c363-106 446 114 800 0v150H0V150z" xxd="M0,0 H100 V50 H0 Z" xxxd="M0,0 C50,-50 50,50 100,0 V50 H0 Z" d="M-0,19.893982561382877 C50,41.63166447633141 50,-49.73495640345719 100,-16.652665790532563 V100 H0 Z" style="mix-blend-mode: normal;"></path>
      </g>
      <g data-v-21d6155b="" style="transform: translateY(60px);">
        <path data-v-21d6155b="" fill="#1a1a1a" opacity="0.75" fill-rule="evenodd" xd="M0 150c363-106 446 114 800 0v150H0V150z" xxd="M0,0 H100 V50 H0 Z" xxxd="M0,0 C50,-50 50,50 100,0 V50 H0 Z" d="M-0,5.509328918102256 C50,43.274879190720114 50,-13.773322295255639 100,-17.309951676288044 V100 H0 Z" style="mix-blend-mode: normal;"></path>
      </g>
    </svg>
  </div>
</div>
</template>

<script>

export default {
  name: 'HOMEPAGE',
  data(){
    return {}
  },
  async created() {
    this.init()
  },
  methods: {
    init() {}
  }
}
</script>

<style lang="scss" scoped>
.home-page{

}

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
</style>
