<template>
<LoadingIt :active="isLoading"></LoadingIt>
<div>
  <div class="card-layout">
    <div class="card"  v-for="(item,index) in displayList" :key="index">
      <div class="card-head">
      <!-- <div class="card-head" :style="{backgroundImage: `url(${item.imageUrl})`}"
      style="height:250px;background-size:cover;background-position:center center"> -->
        <img :src="item.imageUrl" alt="">
      </div>
      <div class="card-body">
        <h3 class="card-title">{{item.title}}</h3>
        <p>Hot Price: ${{item.price}}</p>
        <div class="botton-group">
          <router-link :to="`/products/${item.id}`">
              <button class="learn-more">Learn More</button>
          </router-link>
          <button class="add2cart" @click="add2CartSingle(item.id)">Add Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      productList: '',
      searchResult: '',
      displayList: '',

      pagination_data: {},

      isLoading: true
    }
  },
  created () {
    emitter.on('changePage', (data) => {
      this.getProducts(data)
    })
    emitter.on('searching', (data) => {
      this.getProducts('All', data)
    })
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        if (this.$route.query.category !== undefined) {
          this.getProducts(this.$route.query.category)
        }

        if (this.$route.query.page === '1') {
          this.getProducts(parseInt(this.$route.query.page))
        }
      }
    )
  },
  mounted () {
    this.getProducts(1)
  },
  beforeUnmount () {
    // emitter.off('category')
    emitter.off('searching')
  },
  methods: {
    getProducts (category, search) {
      let url = ''
      if (category === 'All') {
        // url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=1`
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
        // this.$router.push({ path: '/products', query: { category: category } })
      }

      if (category !== 'All' && typeof (category) !== 'number') {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category}`
        this.$router.push({ path: '/products', query: { category: category } })
      }

      if (typeof (category) === 'number') {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?page=${category}`
      }

      this.$http.get(url)
        .then((res) => {
          this.productList = res.data.products
          this.displayList = res.data.products
          if (typeof (category) === 'number') {
            this.pagination_data = res.data.pagination
            emitter.emit('pagination', res.data.pagination)
          }
          if (search !== undefined) {
            this.searchProduct(search)
          }
          this.isLoading = false
        })
        .catch((error) => { console.dir(error) })
    },
    // getProductByPg (page = 1) {
    //   axios.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`)
    //     .then((res) => {
    //       console.log("Hi")
    //       this.products = res.data.products
    //       this.pagination_bg=res.data.pagination
    //                 console.log("Hi")
    //             })
    //             .catch((error)=>{console.dir(error);})},
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
              this.$swal
                .fire({
                  title: 'Item added!',
                  icon: 'success',
                  showCancelButton: false,
                  confirmButtonColor: '#128c9f',
                  confirmButtonText: 'Got it!'
                })
            })
            .catch((error) => { console.dir(error) })
        }
        )
    },
    searchProduct (input) {
      if (input === '') {
        this.getProducts(1)
      }
      const strArr = input.split(' ')
      strArr.forEach(element => {
        const temp = this.productList.filter(item => item.title.toUpperCase().includes(element.toUpperCase()) ||
        (item.description.toUpperCase().includes(element.toUpperCase())))
        this.displayList = [...new Set(temp)]
      })
      emitter.emit('pagination', false)
    }
  }
}
</script>

<style scope>
a{
  text-decoration: none;
}

p,
h3{
  font-family: 'Noto Sans';
  font-size:16px;
}
.card-layout{
  position: relative;
  margin-left:20px;
  display: flex;
  flex-flow: row wrap
}
img {
  max-width: 100%;
}
.card {
  margin:10px;
  /* padding:5px; */
  max-width: 275px;
  max-height: 600px;
  background: white;
  /* border-radius: 1em;
  overflow: hidden; */
}
.card:hover{
  box-shadow:3px 8px 16px rgb(170, 170, 170);
  border:1px solid grey;
}
.card-head {
  border-radius: 1em 1em 0 0;
}
.card-body {
  padding-top:0px;
}
.card-body h3 {
  font-size:18px;
  margin: 0;
  text-align: center;
}
.card-body p {
  font-size:18px;
  text-align: center;
}
.botton-group{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 15px;
}
.card-body button {
  margin-inline: auto;
  display: block;
}
.learn-more{
  background-color: white;
  width:96.72px;
}
.add2cart{
  background-color: black;
  color:white;
  width:96.72px;
}
@media screen and (max-width:670px) {
.card-layout{
  display: flex;
  flex-direction: column;
  align-items: center;
}
}
</style>
