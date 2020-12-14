<template>
<div class="footer">
  <div class="left">
    <el-image :src="twitter" class="flag-size" lazy />
    <el-image :src="facebook" class="flag-size icon-right" lazy />
  </div>
  <div class="right"><el-image :src="france" class="flag-size" lazy /> Made in France, Paris copyright hand-me.fr 2020</div>
</div>
</template>

<script>

const twitter = require('@/icons/png/twitter.png')
const facebook = require('@/icons/png/facebook.png')
const france = require('@/icons/png/france.png')

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
