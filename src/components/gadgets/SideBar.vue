<template>
<div class="search-layout">
    <div class="search">
        <h3>Search</h3>
        <input type="text my-2" placeholder="Input products information" name="name">
        <button class="user-btn user-btn-gray my-4 py-2" type="button">Search</button>
    </div>
    <div class="category">
        <h3>Products</h3>
        <h5 @click="getQuery()">All</h5>
        <h5 @click="getQuery('SSD')">SDD</h5>
        <h5 @click="getQuery('Memory Card')">Memory Card</h5>
        <h5 @click="getQuery('Memory')">Memory</h5>
        <h5 @click="getQuery('USB Flash Disk')">Flash Disk</h5>
        <h5 @click="getQuery('Card Reader')">Card Reader</h5>
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
  methods: {
    getQuery (category) {
      emitter.emit('category', category)
    }
  }
}
</script>

<style scope>
.search-layout{
    position:sticky;
    top: 82.75px;
}

.search{
    display: flex;
    flex-direction: column;
    width:240px;
}

.search h3{
    text-align: center;
}

.category h5{
    cursor: pointer;
}

.category{
    display: flex;
    flex-direction: column;
}
</style>
