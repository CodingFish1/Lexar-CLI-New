<template>
<nav :class="{navlight:!isDark}" id="nBar">
    <div :class="{'nav-container':true,'nav-container-dark':!isDark}">
        <div class="logo"  @click="goFrontPage"><img src="../assets/image/lexarlogo.svg" alt="Lexar logo"></div>
        <input type="radio" name="slide" id="cancel-btn">
        <input type="radio" name="slide" id="menu-btn">
        <ul class="nav-item dd-parent">
            <label for="cancel-btn" class="btn cancel-btn"><i class="bi bi-x-square"></i></label>
            <li class="dd-toggle">
              <router-link to="/products" class="routerLink">
                <a href="#" class="lightword height-ext" @click="modeSwitcher" :class={darkword:!isDark}>Products</a>
              </router-link>
              <div id="dd-menu">
                <a href="" @click.prevent="modeSwitcher('SSD')">SSD</a>
                <a href="" @click.prevent="modeSwitcher('Memory Card')">Memory Card</a>
                <a href="" @click.prevent="modeSwitcher('Memory')">Memory</a>
                <a href="" @click.prevent="modeSwitcher('USB Flash Disk')">Flash Disk</a>
                <a href="" @click.prevent="modeSwitcher('Card Reader')">Card Reader</a>
              </div>
            </li>
            <li><a href="#" class="lightword" :class={darkword:!isDark}>News</a></li>
            <li><a href="#" class="lightword" :class={darkword:!isDark}>Support</a></li>
            <li>
              <router-link to="/about" class="routerLink">
                <a href="#" class="lightword" @click="modeSwitcher" :class={darkword:!isDark}>Lexar</a>
              </router-link>
            </li>
            <i class="bi bi-cart3 lightword" :class={darkword:!isDark} @click="openCart">
                  <span v-if="cartNum" class="badge rounded-pill bg-danger">{{cartNum}}</span>
            </i>
        </ul>

        <label for="menu-btn" class="btn menu-btn">
            <i class="bi bi-list" :class="{'bi-list-black':!isDark}"></i>
        </label>
    </div>
</nav>
<CanvasCart ref="cartdom"></CanvasCart>
</template>

<script>
import emitter from '@/libs/emitter'
import CanvasCart from '@/components/CanvasCart.vue'
export default {
  props: ['isDark'],
  data () {
    return {
      currSectionNum: '',
      cartNum: '',
      barBgColor: '',
      wordColor: ''
    }
  },
  components: {
    CanvasCart
  },
  methods: {
    openCart () {
      this.$refs.cartdom.cartShow()
    },
    getCart () {
      this.$http.get(`${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`)
        .then((res) => {
          this.cartNum = res.data.data.carts.length
        })
        .catch((error) => { console.dir(error) })
    },
    modeSwitcher (dist) {
      if (dist) {
        this.$router.push({ path: '/products', query: { category: dist } })
        emitter.emit('category', dist) // To ProductCard.vue
      }
      emitter.emit('modeSwitcher')
      // console.log(dist)
    },
    goFrontPage () {
      this.$router.go('/')
    },
    getCurrRouter () {
      return this.$route.name
    }
  },
  created () {
    emitter.on('cartToggle', () => {
      this.getCart()
    })
    if (this.getCurrRouter() !== undefined) {
      this.barBgColor = '#3f4041'
      this.wordColor = '#FFFFFF'
    } else {
      this.barBgColor = '#FFFFFF'
      this.wordColor = '#000000'
    }
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style scoped>
.logo{
  cursor: pointer;
}

.routerLink{
  text-decoration: none;
}

nav{
  z-index:10;
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  width:100%;
}

.nav-container{
  max-width:100%;
  position: relative;
  display: flex;
  align-items:center;
  justify-content: flex-start;
}

.nav-container-dark{
  box-shadow:2px 0px 3px #000;
}

.nav-container:hover{
  background-color: #3f4041;
  transition: all 0.3s ease;
}

.logo{
  max-width:100%;
  background-color: #7f7f7f;
  padding:10px;
}

.nav-item{
  display: inline-flex; /*Can I set flex here?*/
}
/*content style on Nav bar*/
.lightword{
  font-family: 'Noto Sans';
  list-style: none;
  margin-left:45px;
  color:white;
  text-decoration: none;
}

.nav-item li{
  list-style: none;
}

/***Light Background********************************************/
.navlight{
  z-index:10;
  background-color: v-bind(barBgColor);
  position: fixed;
  width:100%;/*Why set 100% here result .nav-container's justify-content:start*/
}

.darkword{
  font-family: 'Noto Sans';
  list-style: none;
  margin-left:45px;
  color:v-bind(wordColor);
  text-decoration: none;
}

.nav-container:hover li a,
.nav-container:hover i {
  font-family: 'Noto Sans';
  list-style: none;
  color:white;
  text-decoration: none;
}

.nav-container li a:hover,
.nav-container i:hover{
  font-family: 'Noto Sans';
  list-style: none;
  color:#128c9f;
  text-decoration: none;
}

.bi-cart3{
  margin-left:320px;
}

.nav-item .mobile-item{
  display: none;
}

.nav-item input,
.nav-container input{
  display:none;
  appearance: none;
}

.cancel-btn,
.menu-btn{
  color:#f2f2f2;
  font-size:20px;
  cursor:pointer;
  position: absolute;
  right:30px;
  top:10px;
  display: none;
}

/* **drop-down menu***/
#dd-menu{
  visibility: hidden;
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
  list-style: none;
  width:100%;
  left:0px;
  top:80px;
  padding:10px;
  background-color:#3f4041;
}

.dd-toggle:hover #dd-menu{
  visibility: visible;
  border-top:2px solid #7f7f7f;
  transition: all 0.3s ease;
}

#dd-menu a{
  text-decoration: none;
  display: block;
  font-family: 'Noto Sans';
  padding:0px 10px;
  color:white;
}

.height-ext{
  padding-bottom: 40px; /*height dependent on the gap you want to fill*/
}

@media screen and (max-width:970px) {

  .cancel-btn,
  .menu-btn{
  display: block;
}

  .logo{
  max-width:30%;
  max-height:30%;
  background-color: white;
  padding:10px;
}

  .logo img{
  max-width:100%;
  max-height:100%;
}
  .nav-item{
    display: block;
    position:fixed;
    height:100vh;/**Make the nav-bar as high as viewport***/
    width:100%;
    max-width:350px;
    background:#7f7f7f;
    top:0;
    left:-100%;
    line-height: 50px;
    padding:50px 10px;
    transition: all 0.3s ease;
  }

.lightword{
  font-family: 'Noto Sans';
  list-style: none;
  margin-left:0px;
  color:white;
  text-decoration: none;
}

  .bi-cart3{
  margin-left:30px;
}

  #menu-btn:checked ~ .nav-item{
    left:0%;
}

  #menu-btn:checked ~ .menu-btn{
    display: none;
}

  .nav-item::-webkit-scrollbar{
    width:0px;
  }

  .nav-item li{
    margin: 15px 10px;
  }

  .nav-item li a{
    padding:0px 20px;
    font-size: 20px;
  }

  .nav-item .mobile-item{
    display:block;
    font-size:20px;
    color: #f2f2f2;
    padding-left: 20px;
    cursor:pointer;
  }

  .nav-item input,
  .nav-container input{
  display:none;
  appearance: none;
}

  .bi-list-black{
  color:v-bind(wordColor);
}
}
</style>
