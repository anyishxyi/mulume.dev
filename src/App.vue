<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  metaInfo() {
    return { 
      title: "Fullstack Web Developer | Jean-Paul NGALULA",
      meta: [
        { name: 'description', content:  "Hey, I'm Jean-Paul NGALULA. I'm a full Stack JavaScript developer from D.R.C living in France. "},
        { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
        { property: 'og:site_name', content: 'Epiloge'},
        {property: 'og:type', content: 'website'},    
        {name: 'robots', content: 'index,follow'} 
      ]
    }
  }
}
</script>

<style lang="scss">
  .clickable {
    cursor: pointer;
  }
</style>
