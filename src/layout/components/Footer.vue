<template>
<div class="footer">
  <div class="left">
    <span><el-image :src="twitter" class="flag-size" lazy /></span>
    <span><el-image :src="github" class="flag-size" lazy /></span>
  </div>
  <div class="right">
    <span><el-image :src="france" class="flag-size" lazy /></span>
    <span>Made in France, Paris copyright Jean-Paul NGALULA 2020</span>
  </div>
</div>
</template>

<script>
const twitter = require('@/assets/images/svg/twitter.svg')
const github = require('@/assets/images/svg/github.svg')
const france = require('@/assets/images/png/france.png')

export default {
  name: 'Footer',
  data() {
    return {
      twitter,
      github,
      france,
    }
  }
}
</script>

<style lang="scss" scoped>
  span + span {
    margin-left: 10px;
  }
</style>
