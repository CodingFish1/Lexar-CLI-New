<template>
<div class="my-5 row justify-content-center">
    <v-form ref="form" class="col-md-8" v-slot="{ errors }" @submit="submitOrder">
      <div class="mb-3">
        <label for="email" class="form-label">E-Mail</label>
        <v-field id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }" placeholder="" rules="email|required"
                v-model="form.user.email"
                ></v-field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <v-field id="name" name="name" type="text" class="form-control" :class="{ 'is-invalid': errors['name'] }"
                placeholder="" rules="required"
                v-model="form.user.name"></v-field>
        <error-message name="name" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">Telphone</label>
        <v-field id="tel" name="telphone" type="tel" class="form-control" :class="{ 'is-invalid': errors['telphone'] }"
                placeholder="" rules="|required|min:8|max:10"
                v-model="form.user.tel"></v-field>
        <error-message name="telphone" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">Address</label>
        <v-field id="address" name="address" type="text" class="form-control" :class="{ 'is-invalid': errors['address'] }"
                placeholder="" rules="required"
                v-model="form.user.address"></v-field>
        <error-message name="address" class="invalid-feedback"></error-message>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <textarea id="message" class="form-control" cols="30" rows="10"
        v-model="form.address"></textarea>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-primary btn-content mt-1"
        :disabled="Object.keys(errors).length>0 || cart.length===0">Place your order</button>
      </div>
    </v-form>
  </div>
</template>

<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: ''
        },
        message: ''
      },

      cart: {}
    }
  },
  methods: {
    submitOrder () {
      const order = this.form
      this.$http.post(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order`, { data: order })
        .then((res) => {
          console.log(res)
          this.$refs.form.resetForm()
          this.form.message = ''
          this.$swal
            .fire({
              title: 'Order Created',
              icon: 'success',
              showCancelButton: false,
              confirmButtonColor: '#128c9f',
              confirmButtonText: 'Okay'
            })
          emitter.emit('loadCart') // reload the cart after submit order in CartItself.vue
          emitter.emit('cartToggle')
        })
        .catch((error) => { console.dir(error) })
    }
  },
  mounted () {
  },
  created () {
    emitter.on('cartData', (data) => { // Receiving order from CartItself.vue for submiting
      this.cart = data
      console.log(this.cart)
    })
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
