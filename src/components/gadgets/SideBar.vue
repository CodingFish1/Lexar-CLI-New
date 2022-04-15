<template>
<div class="search-layout">
    <div class="search">
        <h3>Search</h3>
        <div class="search-group">
          <input type="text my-2" placeholder="Search Category" name="name" style="height:40px" ref="inputContent">
          <button class="btn-style" type="button" @click="searchBox">Search</button>
        </div>
    </div>
    <div class="category">
        <h3>Products</h3>
          <div class="category-item">
            <h5 @click="getQuery('all')">All</h5>
            <h5 @click="getQuery('SSD')">SDD</h5>
            <h5 @click="getQuery('Memory Card')">Memory Card</h5>
            <h5 @click="getQuery('Memory')">Memory</h5>
            <h5 @click="getQuery('USB Flash Disk')">Flash Disk</h5>
            <h5 @click="getQuery('Card Reader')">Card Reader</h5>
          </div>
    </div>
</div>
</template>

<script>
import emitter from '@/libs/emitter.js'
export default {
  data () {
    return {
      productList: ''
    }
  },
  mounted () {
  },
  methods: { // To ProductView
    getQuery (category) {
      emitter.emit('category', category)
    },
    searchBox () {
      emitter.emit('searching', this.$refs.inputContent.value)
    }
  }
}
</script>

<style scope>
h3,h5{
  font-family: 'Noto Sans';
}

.search-layout{
    position:sticky;
    top: 82.75px;
}

.search{
    display: flex;
    flex-direction: column;
    max-width:240px;
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

.category-item h5{
  padding:5px;
  margin:10px 20px 10px 0px;
  display: inline-block;
  border:1px solid black;
  white-space: nowrap;
}

}
</style>
