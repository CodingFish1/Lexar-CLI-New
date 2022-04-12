<template>
<div v-if='displayList'>
  <div class="card-layout">
    <div class="card"  v-for="(item,index) in displayList" :key="index">
      <div class="card-head">
        <img :src="item.imageUrl" alt="">
      </div>
      <div class="card-body">
        <h3 class="card-title">{{item.title}}</h3>
        <p>Hot Price: ${{item.price}}</p>
        <div class="botton-group">
          <button class="learn-more">Learn More</button>
          <button class="add2cart" @click="add2CartSingle(item.id)">Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
</div>
<p v-else>Nothing</p>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      productList: '',
      searchResult: '',
      displayList: ''
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
    this.getProducts()
  },
  methods: {
    getProducts (category) {
      console.log(this.$route.query.category)
      let url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products/all`
      if (category || this.$route.query.category) {
        url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products?category=${category || this.$route.query.category}`
      }

      this.$http.get(url)
        .then((res) => {
          this.productList = res.data.products
          this.displayList = res.data.products
        })
        .catch((error) => { console.dir(error) })
    },
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
    },
    searchProduct (input) {
      if (input === '') {
        this.getProducts()
      }
      const strArr = input.split(' ')
      strArr.forEach(element => {
        const temp = this.productList.filter(item => item.title.toUpperCase().includes(element.toUpperCase()) ||
        (item.description.toUpperCase().includes(element.toUpperCase())))
        this.displayList = [...new Set(temp)]
      })
    }

  }
}
</script>

<style scope>
p,
h3{
  font-family: 'Noto Sans';
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
  padding:5px;
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
}

.card-body button {
  margin-inline: auto;
  display: block;
}

.learn-more{
  background-color: white;
}

.add2cart{
  background-color: black;
  color:white;
}

@media screen and (max-width:670px) {
.card-layout{
  display: flex;
  flex-direction: column;
  align-items: center;
}
}
</style>
