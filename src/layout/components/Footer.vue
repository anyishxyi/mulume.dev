<template>
<div class="footer">
  <div class="left">
    <el-image :src="twitter" class="flag-size" lazy />
    <el-image :src="facebook" class="flag-size icon-right" lazy />
  </div>
  <div class="right"><el-image :src="france" class="flag-size" lazy /> Made in France, Paris copyright Jean-Paul NGALULA 2020</div>
</div>
</template>

<script>

const twitter = require('@/assets/images/twitter.svg')
const facebook = require('@/assets/images/github.svg')
const france = require('@/assets/images/france.png')

export default {
  name: 'Footer',
  data() {
    return {
      twitter,
      facebook,
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
   height: 60px;
   font-size: 12px;
   bottom: 0;
  //  position: fixed; TODO in events page

    .left {
      float: left;
      width: 50%;
      padding-top: 25px;
      padding-left: 160px;
    }
    .right {
      float: right;
      width: 30%;
      padding-top: 25px;
	}
}
</style>
