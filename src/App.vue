<template>
  <router-view v-if='false'></router-view>
  <FrontPage v-else></FrontPage>
</template>

<script>
import FrontPage from '@/views/FrontPage.vue'

import device from 'current-device'

import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      isMobile: ''
    }
  },
  components: {
    FrontPage
  },
  methods: {
  },
  created () {
  },
  mounted () {
    if (device.mobile() === true) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
    emitter.emit('deviceType', this.isMobile) // To VideoWall.Vue and PictureWall.Vue
  }
}
</script>

<style lang="scss">
@import "./assets/CSS/all";
</style>
