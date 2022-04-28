<template>
<NavBar :is-dark="isDark"></NavBar>
<!-- <FillerComponent></FillerComponent> -->
<div class="bg-container">
  <img class="support-bg" src="../components/gadgets/CartComponent/cart_head-banner.jpg">
  <p class="bg-title">Finalize your payment</p>
</div>
<div class="container">
    <div class="column row">
        <div class="row-md-12 col-lg-7">
            <CartView></CartView>
        </div>
        <div class="row-md-12 col-lg-5">
            <CartForm></CartForm>
        </div>
    </div>
</div>
<FooterBar></FooterBar>
</template>

<script>
// import FillerComponent from '@/components/gadgets/FillerComponent.vue'
import CartView from '@/components/gadgets/CartComponent/CartItself.vue'
import CartForm from '@/components/gadgets/CartComponent/CartForm.vue'
export default {
  data () {
    return {
      isDark: false,
      defaultComp: true
    }
  },
  components: { CartView, CartForm },
  methods: {
    switchComp (ToF) {
      this.defaultComp = ToF
    }
  },
  mounted () {
  }
}
</script>

<style>
.bg-container{
  position: relative;
  padding:0px 0px 0px 0px;
  max-height: 350px;
}
.support-bg{
  object-fit:cover;
  width:100%;
  background-position: top left;
  max-height: 350px;
}

.bg-title{
  z-index: 8;
  color:white;
  position: absolute;
  font-size: 46px;
  font-family: 'Noto Sans';
  top:50%;
  left:10%
}

</style>
