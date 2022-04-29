<template>
<NavBar :is-dark="isDark"></NavBar>
<SwiperComponent></SwiperComponent>
<div class="product-layout container">
  <div class="sticky-parent">
    <SideBar></SideBar>
  </div>
  <div style="display:flex;flex-direction:column;align-items:center">
    <ProductCard></ProductCard>
    <Pagination style="padding-top:5px"></Pagination>
  </div>
</div>
<FooterBar></FooterBar>
</template>

<script>
import SwiperComponent from '@/components/gadgets/SwiperComponent.vue'
import Pagination from '@/components/gadgets/PaginationComponent.vue'
import ProductCard from '@/components/gadgets/ProductCard.vue'
import SideBar from '@/components/gadgets/SideBar.vue'
export default {
  data () {
    return {
      isDark: false,
      productList: '',
      pagination_bg: {}
    }
  },
  components: { SwiperComponent, ProductCard, SideBar, Pagination },
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
