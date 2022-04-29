<template>
<div class="search-layout">
    <div class="search">
        <h3>Search</h3>
        <div class="search-group">
          <input type="text my-2" placeholder="Search Category" name="name" style="height:40px" ref="inputContent">
          <button class="btn-style" type="button" @click.prevent="searchBox">Search</button>
        </div>
    </div>
    <div class="category">
        <h3>Products</h3>
        <div class="category-item">
          <router-link :class="All" to="/products?page=1">All</router-link>
          <router-link :class="Solid" to="/products?category=SSD">SSD</router-link>
          <router-link :class="MCard" to="/products?category=Memory Card">Memory Card</router-link>
          <router-link :class="Memory" to="/products?category=Memory">Memory</router-link>
          <router-link :class="Flash" to="/products?category=USB Flash Disk">Flash Disk</router-link>
          <router-link :class="CRead" to="/products?category=Card Reader">Card Reader</router-link>
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
      target: ''
    }
  },
  mounted () {
  },
  created () {
    this.$watch(
      () => this.$route.params,
      (toParams, previousParams) => {
        if (this.$route.query.category !== undefined) {
          this.target = this.$route.query.category
        }

        if (this.$route.query.page === '1') {
          this.target = 1
          console.log(this.target)
        }
      }
    )
  },
  computed: {
    All: function () {
      if (this.target === 1) {
        return { link: true, actived: true }
      } else {
        return { link: true, actived: false }
      }
    },
    Solid: function () {
      if (this.target === 'SSD') {
        return { link: true, actived: true }
      } else {
        return { link: true, actived: false }
      }
    },
    MCard: function () {
      if (this.target === 'Memory Card') {
        return { link: true, actived: true }
      } else {
        return { link: true, actived: false }
      }
    },
    Memory: function () {
      if (this.target === 'Memory') {
        return { link: true, actived: true }
      } else {
        return { link: true, actived: false }
      }
    },
    Flash: function () {
      if (this.target === 'USB Flash Disk') {
        return { link: true, actived: true }
      } else {
        return { link: true, actived: false }
      }
    },
    CRead: function () {
      if (this.target === 'Card Reader') {
        return { link: true, actived: true }
      } else {
        return { link: true, actived: false }
      }
    }
  },
  methods: { // To ProductCard
    // getQuery (category) {
    //   emitter.emit('category', category)
    // },
    searchBox () {
      emitter.emit('searching', this.$refs.inputContent.value)
    }
  }
}
</script>

<style scoped>
a,h3,h5{
  font-family: 'Noto Sans';
}
.search-layout{
    position:sticky;
    top: 82.75px;
}
.search{
    display: flex;
    flex-direction: column;
    max-width:189.33px;
}
.search h3{
    text-align: center;
    flex-direction: column;
}
.btn-style{
  width:100%;
  margin-top: 10px;
  margin-bottom: 10px;
  padding:8px;
}

.category-item a{
  text-decoration: none;
  font-family: 'Noto Sans';
  padding-left:5px;
  font-size:20px;
  display: block;
  color:black;
  white-space: nowrap;
}

.actived{
  border-left: 3px solid #128c9f;
}
@media screen and (max-width:670px) {
.search-layout{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.search-group{
  display: flex;
  flex-direction: row;
  justify-content:space-evenly;
  align-items: center;
  margin-left: 10px;
}
.search-group button{
  margin-left: 10px;
}
.category{
  display:flex;
  flex-direction: column;
  align-items: center;
}
 .category-item{
  max-width:400px;
  display:flex;
  flex-direction: row;
  overflow: scroll;
}
::-webkit-scrollbar {
  display: none;
}
/* .category-item h5{
  padding:5px;
  margin:10px 20px 10px 0px;
  display: inline-block;
  border:1px solid black;
  white-space: nowrap;
} */

.category-item .link{
  padding:5px;
  margin:10px 20px 10px 0px;
  display: inline-block;
  border:1px solid black;
  white-space: nowrap;
}
}
</style>
