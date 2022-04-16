<template>
  <router-view v-if="hybridMode"></router-view>
  <FrontPage v-else></FrontPage>
</template>

<script>
import FrontPage from '@/views/FrontPage.vue'

import device from 'current-device'

import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      hybridMode: false,
      isMobile: ''
    }
  },
  components: {
    FrontPage
  },
  methods: {
  },
  created () {
    emitter.on('modeSwitcher', () => {
      this.hybridMode = true
    })
    // this.$router.afterEach((to, from, next) => {
    //   console.log(to.fullPath)
    //   if (to.fullPath === '/') {
    //     next(this.$router.go(0))
    //   } else {
    //     next()
    //   }
    // })

    // this.$router.beforeEach((to, from) => {
    //   console.log(to.fullPath)
    // }
    // )
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
