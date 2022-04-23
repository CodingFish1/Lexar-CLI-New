<template>
<NavBar :is-dark="isDark"></NavBar>
<SwiperComponent></SwiperComponent>
<div class="product-layout container">
  <div class="sticky-parent">
    <SideBar></SideBar>
  </div>
  <ProductCard></ProductCard>
</div>
<FooterBar></FooterBar>
</template>

<script>
import SwiperComponent from '@/components/gadgets/SwiperComponent.vue'
import ProductCard from '@/components/gadgets/ProductCard.vue'
import SideBar from '@/components/gadgets/SideBar.vue'
export default {
  data () {
    return {
      isDark: false,
      productList: ''
    }
  },
  components: { SwiperComponent, ProductCard, SideBar },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
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
