<template>
<p>HIIIIfffffffffffffffffffffffffffffffffffffffffffffIII</p>
</template>

<script>
// import SideBar from '@/components/gadgets/SideBar.vue'
// import FooterBar from '@/components/FooterBar.vue'
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      isDark: false
    }
  },
  // components: { SideBar, FooterBar },
  created () {
    console.log(this.$route.params.id)
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
.product-layout{
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

<!-- <NavBar :is-dark="isDark"></NavBar> -->
<!-- <div class="product-layout container">
  <div class="sticky-parent"> -->
    <!-- <SideBar></SideBar> -->
  <!-- </div>
</div> -->
<!-- <FooterBar></FooterBar> -->
