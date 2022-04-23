<template>
<div class="overall-layout">
    <p class="title">{{product.title}}</p>
    <div class="main-area">
        <!-- <img class="img-size" :src="product.imageUrl" alt=""> -->
        <div class="swiper-container">
          <swiper
            :modules='modules'
            :slides-per-view="1"
            :space-between="0"
            navigation
          >
            <swiper-slide class="img-size" v-for="(item,index) in product.imagesUrl" :key="index">
              <img :src="item" alt="">
            </swiper-slide>
          </swiper>
        </div>
        <div class="price">
            <p>$:{{product.price}}</p>
              <div>
                <div class="input-group">
                  <input type="number" class="form-control" min="1" v-model.number="itemCounter"
                  ref="blocker" @change="filter">
                  <button type="button" class="btn btn-primary" @click="add2Cart" :disabled="isDisable">{{warning}}</button>
                </div>
              </div>
            <p>Key Features</p>
            <p v-for="(item,index) in strArr" :key="index">{{item}}</p>
        </div>
    </div>
    <div>
      <p>{{product.content}}</p>
    </div>
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
      id: '',
      product: '',
      itemCounter: '',

      isDisable: false,
      warning: 'Add to Cart',

      strArr: '',
      strArr2: []
    }
  },
  created () {
    this.getCart()
    this.itemCounter = 1
  },
  mounted () {
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`)
        .then((res) => {
          this.product = res.data.product
          this.contentProcessor(this.product.description)
        })
        .catch((error) => { console.dir(error) })
    },
    filter () {
      const inputNum = Number(this.$refs.blocker.value)
      if (inputNum <= 0 || inputNum === 'e' || (Math.ceil(inputNum) !== Math.floor(inputNum))) {
        this.warning = 'Invaild Num'
        this.isDisable = true
      } else {
        this.warning = 'Add to Cart'
        this.isDisable = false
      }
    },
    contentProcessor (data) {
      this.strArr = data.split('\n')
    }
  }
}
</script>

<style scoped>
.overall-layout{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 40px;
}

.overall-layout .title{
    font-size:32px;
    font-family: 'Noto Sans';
}

.main-area{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.img-size{
    max-width:300px;
}

.price{
  padding-left:20px;
}
</style>
