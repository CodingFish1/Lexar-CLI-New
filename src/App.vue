<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
  <!-- </nav> -->
  <!-- <router-view/> -->
  <NavBar></NavBar>
  <div id="fullpage">
    <VideoWall class="section"></VideoWall>
    <PictureWall class="section"></PictureWall>
    <NewsWall class="section"></NewsWall>
    <SocialBoard class="section"></SocialBoard>
  </div>
</template>

<script>
import VideoWall from '@/components/VideoWall.vue'
import PictureWall from '@/components/PictureWall.vue'
import NewsWall from '@/components/NewsWall.vue'
import SocialBoard from '@/components/SocialBoard.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    VideoWall, PictureWall, NewsWall, SocialBoard
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap'
</style>
