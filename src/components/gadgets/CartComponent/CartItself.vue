<template>
  <table class="table align-middle mt-5">
    <thead>
      <tr>
        <th></th>
        <th>Item</th>
        <th style="width: 150px">PCS</th>
        <th>Item Price</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart">
        <tr v-for="item in cart" :key=item.product.id>
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="delItem(item.id)">
              <i class="fas fa-pulse" :class="{'fa-spinner':isDeleting===item.id}"></i>
              x
            </button>
          </td>
          <td>
            {{item.product.title}}
          </td>
          <td>
            <div class="input-group input-group-sm">
              <div class="input-group mb-3">
                <select id="" class="form select" v-model="item.qty" @change="updateCart(item)" :disabled="isLoading===item.id">
                  <option :value="num" v-for="num in 20"
                    :key="num">
                    {{num}}
                  </option>
                </select>
                <span class="input-group-text" id="basic-addon2">{{ item.product.unit }}</span>
              </div>
            </div>
          </td>
          <td class="">
            <small>$:</small>
            {{ item.product.price }}
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">Total Price:</td>
        <td class="text-end">{{cart.final_total}}</td>
      </tr>
    </tfoot>
  </table>
  <div class="text-start">
    <button class="btn btn-outline-danger btn-content" type="button" @click="delCart"
    :disabled="cart.length===0">Clean Cart</button>
  </div>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      cart: {},
      isLoading: '',
      isDeleting: ''
    }
  },

  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data.carts
          emitter.emit('cartData', this.cart) // Send order to form.js for submitting
        })
        .catch((error) => { console.dir(error) })
    },

    delCart () {
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/carts`)
        .then((res) => {
          this.getCart()
        })
        .catch((error) => { console.dir(error) })
    },

    delItem (id) {
      this.isDeleting = id
      console.log(id)
      this.$http.delete(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`)
        .then((res) => {
          this.getCart()
          this.isDeleting = ''
        })
        .catch((error) => { console.dir(error) })
    },

    updateCart (item) {
      this.isLoading = item.id
      const data = {
        product_id: item.id,
        qty: item.qty
      }

      this.$http.put(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          console.log(res)
          this.isLoading = ''
          this.getCart()
        })
        .catch((error) => { console.dir(error) })
    }

  },
  created () {
    emitter.on('loadCart', (data) => {
      this.getCart()
    })
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style scoped>
.btn-content{
  font-size: 16px;
  font-family: 'Noto Sans';
}
</style>
