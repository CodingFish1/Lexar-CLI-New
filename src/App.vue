<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <!-- <router-view/> -->
  <NavBar></NavBar>
  <div id="fullpage" class="">
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

export default {
  data () {
    return {
      isMobile: ''
    }
  },
  components: {
    VideoWall, PictureWall, NewsWall, SocialBoard, VideoModal
  },
  methods: {
  },
  beforeMount () {
    if (device.mobile() === true) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import "./assets/CSS/all";
</style>
