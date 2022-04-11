<template>
<NavBar :is-dark="isDark"></NavBar>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      isDark: false
    }
  },
  created () {
    emitter.on('category', (data) => {
      this.getProducts(data)
      console.log(data)
    })
    emitter.on('searching', (data) => {
      this.searchProduct(data)
    })
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

<style scope>
</style>
