<template>
<div class="overall-layout">
    <p class="title">{{product.title}}</p>
    <div class="main-area">
        <img class="img-size" :src="product.imageUrl" alt="">
        <div class="price">
            <p>$:{{product.price}}</p>
              <div>
                <div class="input-group">
                  <input type="number" class="form-control" min="1" v-model.number="itemCounter"
                  ref="blocker" @change="filter">
                  <button type="button" class="btn btn-primary" @click="add2Cart" :disabled="isDisable">Add Cart</button>
                </div>
                {{warning}}
              </div>
            <p>Key Features</p>
            <p v-for="(item,index) in strArr" :key=index>{{item}}</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      product: '',
      itemCounter: '',

      isDisable: false,
      warning: '',

      strArr: '',
      strArr2: []
    }
  },
  created () {
    this.getCart()
    this.itemCounter = 1
  },
  mounted () {
  },
  methods: {
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${this.$route.params.id}`)
        .then((res) => {
          this.product = res.data.product
          this.contentProcessor(this.product.description)
        })
        .catch((error) => { console.dir(error) })
    },
    filter () {
      const inputNum = Number(this.$refs.blocker.value)
      if (inputNum <= 0 || inputNum === 'e' || (Math.ceil(inputNum) !== Math.floor(inputNum))) {
        this.warning = 'Invaild Number'
        this.isDisable = true
      } else {
        this.warning = ''
        this.isDisable = false
      }
    },
    contentProcessor (data) {
      this.strArr = data.split('\n')
    }
  }
}
</script>

<style scoped>
.overall-layout{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 40px;
}

.overall-layout .title{
    font-size:32px;
    font-family: 'Noto Sans';
}

.main-area{
    display: flex;
    flex-direction: row;
    align-items: center;
}

.img-size{
    width:40%;
}

.price{
  padding-left:20px;
}
</style>
