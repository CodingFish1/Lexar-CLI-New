<template>
<NavBar :is-dark="isDark"></NavBar>
<SwiperComponent></SwiperComponent>
<div class="product-layout container">
  <div class="sticky-parent">
    <SideBar></SideBar>
  </div>
  <ProductCart></ProductCart>
</div>
<FooterBar></FooterBar>
</template>

<script>
import SwiperComponent from '@/components/gadgets/SwiperComponent.vue'
import SideBar from '@/components/gadgets/SideBar.vue'
import ProductCart from '@/components/gadgets/ProductCart.vue'
import FooterBar from '@/components/FooterBar.vue'
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      isDark: false,
      filler: ''
    }
  },
  components: { FooterBar, ProductCart, SwiperComponent, SideBar },
  created () {
    // console.log(this.$route.params.id)
  },
  mounted () {
    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        this.filler = entry.contentRect.height + 'px'
      })
    })
    resizeObserver.observe(document.querySelector('#nBar'))
  },
  methods: {
    add2CartSingle (idIn) {
      console.log(idIn)
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then(() => {
          const data = {
            product_id: idIn,
            qty: 1
          }
          this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`, { data })
            .then((res) => {
              console.log(res)
              emitter.emit('cartToggle')
            })
            .catch((error) => { console.dir(error) })
        }
        )
    }
  }
}
</script>

<style scope>

.product-layout{
  padding-top: v-bind(filler);
  display: flex;
  flex-direction: row;
  padding:16px;
}

@media screen and (max-width:670px) {
.product-layout{
  display: flex;
  flex-direction: column;
  align-items: center;
}
}
</style>
