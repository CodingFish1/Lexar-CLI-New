<template>
<section class="section video-container" ref="getHeight">

            <div class="video-container fp-auto-height-responsive" :class="{slide:!isMobile}">
                <div class="video-overlay">
                    <h1 class="slogan">
                        <span>Next Level Speed</span>
                        <p class="slogan-p" v-if="isMobile">Lexar Memory Kit, Quietly Fast
                        </p>
                        <p class="slogan-p" v-else>Lexar DDR4 3600Mbps Memory Kit. Blazing Fast in Low Power Consumption
                        </p>
                    </h1>
                </div>

                <video data-autoplay loop muted class="fullscreen-video" v-if="!isMobile">
                    <source src="../assets/video/memory.mp4" type="video/mp4">
                </video>
                <video poster="../assets/video/DDR4.jpg" data-autoplay loop muted class="fullscreen-video" ref="videoPause" v-else>
                    <source src="../assets/video/memory-mobile.mp4" type="video/mp4">
                </video>
            </div>

            <div class="video-container fp-auto-height-responsive" :class="{slide:!isMobile}">
                <div class="video-overlay">
                    <h1 class="slogan">
                        <span>Capture your life</span>
                        <p class="slogan-p" v-if="isMobile">Lexar 1800x Premiun SD Card
                        </p>
                        <p class="slogan-p" v-else>With Lexar 2000x Premiun SD Card. Your Fast and Reliable Partner
                        </p>
                    </h1>
                </div>

                <video data-autoplay loop muted class="fullscreen-video" ref="videoPause" v-if="!isMobile">
                    <source src="../assets/video/1667x.mp4" type="video/mp4">
                </video>
                <video poster="../assets/video/SD1800x.jpg" data-autoplay loop muted class="fullscreen-video" ref="videoPause" v-else>
                    <source src="../assets/video/1667x-mobile.mp4" type="video/mp4">
                </video>
            </div>
    </section>
</template>

<script>
import device from 'current-device'
export default {
  data () {
    return {
      isMobile: ''
    }
  },
  beforeMount () {
    if (device.mobile() === true) {
      this.isMobile = true
    } else {
      this.isMobile = false
    }
  },
  mounted () {
    if (this.isMobile === true) {
      this.$refs.removeAttr('data-autoplay')
    }
  }
}
</script>

<style scoped>
.video-container{
  position: relative;
  top:0;
}

.video-overlay{
  position: absolute;
  top:50%;
  left:5%;
  z-index: 1;
  background-color: rgba(97, 97, 97, 0.8);
  color: #fff;;
}

.slogan{
  padding:10px;
}

.slogan span{
  width: 100%;
  font-size: 80px;
  font-family: 'Anton', sans-serif;
  line-height: 1.2em;
  letter-spacing: 1px;
  font-weight: 400;
  text-shadow: 5px 1px 3px #1a1a1a;
  display:block;
  /* padding: 0 5%; */
  text-transform: uppercase
}

.slogan-p{
  font-size: 19px;
  font-family: 'Noto Sans';
}

.fullscreen-video {
  max-width: 100%;
  object-fit: cover;
}

@media screen and (max-width:970px) {
  .video-container{
  position: relative;
  top:0;
  height: auto !important;
}

  .video-overlay{
  position: absolute;
  top:25%;
  left:5%;
  z-index: 1;
  background-color: rgba(97, 97, 97, 0.8);
  color: #fff;;
}
  .slogan{
    display: block;
    position: relative;
  }

  .slogan span{
  width: 100%;
  font-size: 20px;
  font-family: 'Anton', sans-serif;
  line-height: 1.2em;
  letter-spacing: 1px;
  font-weight: 100;
  text-shadow: 5px 1px 3px #1a1a1a;
  display:block;
  /* padding: 0 5%; */
  text-transform: uppercase
}

.slogan p{
  font-size: 16px;
  padding-top: 8px;
  font-family: 'Anton', sans-serif;
}

.slogan-p{
  margin-bottom: 0px;
}

.fullscreen-video {
  max-height:100%;
  object-fit: cover;
}
}
</style>
