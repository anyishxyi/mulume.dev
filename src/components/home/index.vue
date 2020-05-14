<template>
<div class="home-page">
	<h1>Hello.</h1>

	<p class="name">My name is NGALULA Jean-Paul.</p>

	<p>I am student and software developer at <a href="https://ownest.io/" target="_blank">Ownest</a>. Most of my work is publicly available on <a href="https://github.com/n19l" target="_blank">GitHub</a>.</p>

	<p>You can also find me on <a href="https://www.linkedin.com/in/jeanpaulngalula/" target="_blank">LinkedIn</a> and <a href="https://twitter.com/casison7" target="_blank">Twitter</a>.</p>

	<p>Outside of programming, I enjoy video games, karaoke, football and eating pondu.</p>
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
</style>
