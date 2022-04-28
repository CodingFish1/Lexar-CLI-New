<template>
<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel" ref="canvas">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasBottomLabel">Shopping Cart</h5>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body small container">
        <div class="d-grid col-6 mx-auto">
          <router-link v-if="cartItem.length !== 0" to="/cart" class="btn btn-primary btn-content mb-3" @click="modeSwitcher">Finalize it!</router-link>
          <div v-else class="d-grid col-12 mx-auto">
            <p>Empty cart, shopping now !</p>
            <router-link to="/products?category=All" class="btn btn-primary btn-content mb-3" @click="modeSwitcher">Go shopping!</router-link>
          </div>
        </div>
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
import emitter from '@/libs/emitter'
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
    },
    getCurrRouter () {
      return this.$route.name
    },
    modeSwitcher () {
      this.canvasOn.hide()
      emitter.emit('modeSwitcher')
    }
  }
}
</script>

<style scoped>
.btn-content{
  font-size: 16px;
  color:white;
  font-family: 'Noto Sans';
}
</style>
