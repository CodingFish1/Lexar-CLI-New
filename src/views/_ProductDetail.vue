<template>
<NavBar :is-dark="isDark"></NavBar>
<FillerComponent></FillerComponent>
<div class="product-layout container">
  <div class="sticky-parent">
    <SideBar></SideBar>
  </div>
  <ProductCart></ProductCart>
</div>
<FooterBar></FooterBar>
</template>

<script>
import FillerComponent from '@/components/gadgets/FillerComponent.vue'
import SideBar from '@/components/gadgets/SideBar.vue'
import ProductCart from '@/components/gadgets/ProductCart.vue'
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      isDark: false
    }
  },
  components: { ProductCart, FillerComponent, SideBar },
  created () {
    // console.log(this.$route.params.id)
  },
  mounted () {
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

<style scoped>

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
