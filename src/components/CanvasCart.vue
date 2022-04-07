<template>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" ref="canvas">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Shopping Cart</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body small container">
        <div class="row" v-for="(item,index) in cartItem" :key="index">
          <img :src="item.product.imageUrl" class="img-thumbnail col-6 mb-3">
          <div class="col-6 col">
              <p>{{item.product.title}}</p>
              <p>Price: ${{item.product.price}}</p>
              <p>PCS: {{item.qty}}</p>
          </div>
        </div>
    </div>
</div>
</template>

<script>
// import emitter from '@/libs/emitter'
import Offcanvas from 'bootstrap/js/dist/offcanvas'
export default {
  data () {
    return {
      canvasOn: '',
      cartItem: ''
    }
  },
  created () {

  },
  mounted () {
    this.canvasOn = new Offcanvas(this.$refs.canvas)
  },
  methods: {
    cartShow () {
      this.canvasOn.show()
      this.getCart()
    },
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartItem = res.data.data.carts
        })
        .catch((error) => { console.dir(error) })
    }
  }
}
</script>

<style scoped>
</style>
