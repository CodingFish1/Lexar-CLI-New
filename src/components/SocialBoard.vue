<template>
<section class="grid-layout fp-auto-height">
    <div class="container">
         <div>
            <div>
                <h3 class="stay">Stay Connected</h3>
            </div>
            <div>
                <p class="stay-connect">Connect with Lexar via official
                Facebook, YouTube, Instagram, and more!</p>
            </div>
        </div>
        <div class="grid-system">

            <div class="box-section1 box-overlay"
                v-for="(item, index) in arr"
                :key="index"
                :class="['box-section'+(index+1)]">
                <a :href="item.url" @click.prevent="openModal(item.url)">
                  <img :class="{'img-fluid-nb':item.style,'img-fluid-car':!(item.style)}" :src="require(`../assets/videowall/${item.fileName}`)">
                </a>
            </div>
        </div>
    </div>
    <FooterBar></FooterBar>
    </section>

</template>

<script>
import emitter from '@/libs/emitter'
export default {
  components: {},
  data () {
    return {
      arr: [
        { fileName: 'photog.jpg', url: 'https://www.youtube.com/embed/by2sDDVTTYY', style: true },
        { fileName: 'switch.jpg', url: 'https://www.youtube.com/embed/kvNM_t5n8HU', style: true },
        { fileName: 'memorycard.jpg', url: 'https://www.youtube.com/embed/GIuyLvcIVLQ', style: true },
        { fileName: 'travel.jpg', url: 'https://www.youtube.com/embed/BkFS0IBlgzA', style: true },
        { fileName: 'car.jpg', url: 'https://www.youtube.com/embed/E6o-TaVoN5Q', style: false }
      ]
    }
  },
  mounted () {
  },
  methods: {
    openModal (url) {
      emitter.emit('openModal', url)
    }
  }
}
</script>

<style scoped>
.img-fluid-nb{
  object-fit:cover;
  max-width:100%;
  height:100%
}

.img-fluid-car{
  object-fit:cover;
  width:100%;
  height:100%;
}

.stay{
  color:#1a1a1a;
  text-align: center;
  font-family: 'Noto Sans';
  font-size: 36px;
  font-weight: 800;
  line-height: 32px;
}
.stay-connect{
  max-width:500px;
  text-align: center;
  padding-top: 10px;
  font-family: 'Noto Sans';
  font-size: 19px;
  font-weight: 300;
  line-height: 27px;
}

.grid-layout{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.grid-system{
  display:grid;
  max-width:900px;
  max-height:300px;
  grid-row-gap: 5px;
  grid-column-gap: 5px;

  grid-template-rows: 150px 150px;
  grid-template-columns: repeat(6 1fr);
  grid-template-areas: 'box1 box1 box2 box3 box4 box4'
                        'box1 box1 box5 box5 box4 box4'
  ;
}

.box-section1{
  grid-area:box1
}
.box-section2{
  grid-area:box2
}
.box-section3{
  grid-area:box3
}
.box-section4{
  grid-area:box4
}
.box-section5{
  grid-area:box5
}

.grid-system div{
  border:1px solid black;

}

.grid-system img:hover{
  transform: scale(1.1);
  transition:all 0.3s;
}

.box-overlay{
  position: relative;
  overflow: hidden;
}

.box-overlay::before{
  position: absolute;
  content:'';
  z-index: 88;
  background: url(../assets/video/play-button.png) no-repeat;
  background-size: contain;
  width:10%;
  height: 20%;
}
</style>
