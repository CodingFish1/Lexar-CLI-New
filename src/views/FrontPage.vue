<template>
<NavBar :is-dark="isDark"></NavBar>
<div id="fullpage" ref="fullpage">
    <VideoWall class="section"></VideoWall>
    <PictureWall class="section"></PictureWall>
    <NewsWall class="section"></NewsWall>
    <SocialBoard class="section"></SocialBoard>
</div>
<VideoModal ref="pmodal"></VideoModal>
</template>

<script>
import VideoWall from '@/components/VideoWall.vue'
import PictureWall from '@/components/PictureWall.vue'
import NewsWall from '@/components/NewsWall.vue'
import SocialBoard from '@/components/SocialBoard.vue'
import VideoModal from '@/components/VideoModal.vue'

import device from 'current-device'

import emitter from '@/libs/emitter'

export default {
  data () {
    return {
      isMobile: '',
      isDark: ''
    }
  },
  components: {
    VideoWall, PictureWall, NewsWall, SocialBoard, VideoModal
  },
  methods: {
  },
  created () {

  },
  mounted () {
    if (device.mobile() === true) {
      this.isMobile = true
      console.log(this.isMobile)
    } else {
      this.isMobile = false
    }
    emitter.emit('deviceType', this.isMobile) // To PictureWall.Vue

    emitter.on('has-scroll', (data) => {
      if (data === 2 || data === 3) {
        this.isDark = false
      } else {
        this.isDark = true
      }
    })
  }

}
</script>
