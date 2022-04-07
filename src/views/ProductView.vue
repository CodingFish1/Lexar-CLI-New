<template>
<NavBar :is-dark="isDark"></NavBar>
<SwiperComponent></SwiperComponent>
<div class="product-layout">
  <div class="sticky-parent">
    <SideBar></SideBar>
  </div>
  <ProductCard></ProductCard>
</div>
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
/* body{
  background: #f4f5f6
} */
.product-layout{
  display: flex;
  flex-direction: row;
  padding:16px;
}
</style>
