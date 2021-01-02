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
  },
  async created() {
    await this.init()
  },
  methods: {
    init() {
      // console.log('footer')
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  left: 0;
  width: 100%;
  background-color: #222020;
  color: white;
//  height: 20px;
  font-size: 12px;
  bottom: 0;
  //  position: fixed; TODO in events page

    .left {
      float: left;
      display: flex;
      width: 50%;
      padding-top: 25px;
      padding-left: 160px;
    }
    .right {
      float: right;
      display: flex;
      width: 30%;
      padding-top: 25px;
	}
}

.flag-size {
  width: 20px;
}

span + span {
  margin-left: 10px;
}
</style>
