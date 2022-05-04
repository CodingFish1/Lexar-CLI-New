<template>
<div class="my-5 row justify-content-center">
    <v-form ref="form" class="col-md-8" v-slot="{ errors }" @submit="submitIt">
      <div class="mb-3">
        <label for="email" class="form-label">E-Mail</label>
        <v-field id="email" name="email" type="email" class="form-control"
                :class="{ 'is-invalid': errors['email'] }" placeholder="Your E-Mail" rules="email|required"
                v-model="form.user.email"
                ></v-field>
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="name" class="form-label">Your Name</label>
        <v-field id="name" name="name" type="text" class="form-control" :class="{ 'is-invalid': errors['name'] }"
                placeholder="Your name" rules="required"
                v-model="form.user.name"></v-field>
        <error-message name="name" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">Message</label>
        <v-field id="message" name="message" as="textarea" type="text" class="form-control" cols="30" rows="10"
                placeholder="Please leave your message" rules="required" v-model="form.message" :class="{ 'is-invalid': errors['message'] }"></v-field>
        <error-message name="message" class="invalid-feedback"></error-message>
      </div>
      <div class="text-end">
        <button type="submit" class="btn btn-primary btn-content"
        :disabled="Object.keys(errors).length>0 || cart.length===0">Submit</button>
      </div>
    </v-form>
  </div>

</template>

<script>
export default {
  data () {
    return {

      form: {
        user: {
          name: '',
          email: ''
        },
        message: ''
      },

      cart: {}

    }
  },

  methods: {
    submitIt () {
      console.log(this.form)
    }
  },

  mounted () {
  }

  // created(){
  //     cartInfo.on('cartInfo',(data)=>{
  //       this.cart=data;
  //       console.log(this.cart);
  //     })
  // },
}
</script>

<style scoped>
.btn-content{
  font-size: 16px;
  color:white;
  font-family: 'Noto Sans';
}

</style>>
