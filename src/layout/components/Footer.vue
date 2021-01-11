<template>
<div class="footer m-0 w-50">
  <div class="flex m-0 w-50">
    <svg-icon icon-class="code" />
    <el-image :src="code" class="flag-size" lazy /><span> with </span><el-image :src="heart" class="flag-size" lazy /><span> by Jean-Paul NGALULA © 2020</span>
  </div>
  <div class="flex m-0 w-50">
    <a><el-image :src="linkedin" class="flag-size" lazy /></a>
    <a><el-image :src="twitter" class="flag-size" lazy /></a>
    <a><el-image :src="github" class="flag-size" lazy /></a>
  </div>
</div>
</template>

<script>
const twitter = require('@/assets/images/svg/twitter.svg')
const github = require('@/assets/images/svg/github.svg')
const france = require('@/assets/images/png/france.png')
const linkedin = require('@/assets/images/svg/github.svg')
const code = require('@/assets/images/svg/code.svg')
const copyright = require('@/assets/images/svg/copyright-symbol.svg')
const heart = require('@/assets/images/svg/heart.svg')

export default {
  name: 'Footer',
  data() {
    return {
      twitter,
      github,
      france,
      linkedin,
      code,
      copyright,
      heart
    }
  }
}
</script>

<style lang="scss" scoped>
  .footer {
    padding-top: 40px;
    left: 0;
    background-color: transparent;
    height: 20px;
    font-size: 12px;
    bottom: 0;
  }
  span + span {
    margin-left: 10px;
  }
  el-image {
    fill: var(--textNormal);
  }
</style>
