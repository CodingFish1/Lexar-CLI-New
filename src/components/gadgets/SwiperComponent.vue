<template>
<div class="filler">
  <swiper
    :modules='modules'
    :slides-per-view="1"
    :space-between="0"
    navigation
    autoplay
  >
    <swiper-slide>
        <img  class="img-fluid-nb" src="@/assets/swiper/CFast_Desktop_2048x.webp" alt="">
    </swiper-slide>
    <swiper-slide>
        <img  class="img-fluid-nb" src="@/assets/swiper/MicroSD_Desktop_077568c1-23df-427b-b3dd-f38863d44908_2048x.webp" alt="">
    </swiper-slide>
    <swiper-slide>
        <img  class="img-fluid-nb" src="@/assets/swiper/SDV90_Desktop_2048x.webp" alt="">
    </swiper-slide>
  </swiper>
</div>
</template>
<script>

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Navigation, Pagination, Autoplay } from 'swiper'
export default {
  components: { Swiper, SwiperSlide },
  data () {
    return {
      modules: [Navigation, Pagination, Autoplay],
      filler: ''
    }
  },
  mounted () {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        this.filler = entry.contentRect.height + 'px'
      })
    })
    resizeObserver.observe(document.querySelector('#nBar'))
  }
}
</script>

<style scope>
.img-fluid-nb{
  object-fit:cover;
  max-width:50%;
  height:50%;
}

.filler{
  padding-top: v-bind(filler);
}
</style>
