<template>
<nav :class="{navlight:!isDark}" id="nBar">
    <div :class="{'nav-container':true,'nav-container-dark':!isDark}">
        <div class="logo"><img src="../assets/image/lexarlogo.svg" alt="Lexar logo"></div>
        <input type="radio" name="slide" id="cancel-btn">
        <input type="radio" name="slide" id="menu-btn">
        <ul class="nav-item">
            <label for="cancel-btn" class="btn cancel-btn"><i class="bi bi-x-square"></i></label>
            <li>
              <router-link to="/products" class="routerLink">
                <a href="#" class="lightword desktop-item" @click="modeSwitcher" :class={darkword:!isDark}>Products</a>
                <input type="checkbox" id="showMega">
                <label for="showMega" class="mobile-item">Products</label>
              </router-link>
                <!-- <div class="mega-container">
                    <div class="mega-content">
                        <div class="mega-row">
                            <img src="../assets/image/SL660-PR_1.jpg" alt="">
                        </div>
                        <div class="mega-row">
                            <header>SSD</header>
                            <ul class="mega-item mega-item-1">
                                <li><a href="#">PCIe 4.0</a></li>
                                <li><a href="#">PCIe 3.0</a></li>
                                <li><a href="#">Portable</a></li>
                            </ul>
                        </div>

                        <div class="mega-row">
                            <header>Memory Card</header>
                            <ul class="mega-item">
                                <li><a href="#">2000x</a></li>
                                <li><a href="#">1066x</a></li>
                                <li><a href="#">1800x</a></li>
                                <li><a href="#">633x</a></li>
                            </ul>
                        </div>

                        <div class="mega-row">
                            <header>Memory</header>
                            <ul class="mega-item">
                                <li><a href="#">DDR4</a></li>

                                <div class="rgb">
                                    <li><a href="#">RGB DDR4</a></li>
                                </div>
                            </ul>
                        </div>

                        <div class="mega-row">
                            <header>Accessory</header>
                            <ul class="mega-item">
                                <li><a href="#">Card Reader</a></li>
                            </ul>
                        </div>
                    </div>
                </div> -->
            </li>
            <li><a href="#" class="lightword" :class={darkword:!isDark}>News</a></li>
            <li><a href="#" class="lightword" :class={darkword:!isDark}>Support</a></li>
            <li>
              <router-link to="/about" class="routerLink">
                <a href="#" class="lightword desktop-item" @click="modeSwitcher" :class={darkword:!isDark}>Lexar</a>
                <a href="#" class="lightword mobile-item" @click="modeSwitcher">Lexar</a>
                <!-- <input type="checkbox" id="showDrop"> -->
                <!-- <label for="showDrop" class="mobile-item">Lexar</label> -->
                <!-- <ul class="dd-menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul> -->
              </router-link>
            </li>
            <i class="bi bi-cart3 lightword" :class={darkword:!isDark} @click="openCart"></i>
        </ul>
        <label for="menu-btn" class="btn menu-btn"><i class="bi bi-list"></i></label>
        <span v-if="cartNum" class="badge rounded-pill bg-danger">{{cartNum}}</span>
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
      alwaysTrue: true,
      // isDark: 'true'
      cartNum: ''
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
          console.log(this.cartNum)
        })
        .catch((error) => { console.dir(error) })
    },
    modeSwitcher () {
      emitter.emit('modeSwitcher')
    }
  },
  created () {
    emitter.on('cartToggle', () => {
      this.getCart()
    })
  },
  mounted () {
    this.getCart()
  }
}
</script>

<style scoped>
.routerLink{
  text-decoration: none;
}

nav{
  z-index:10;
  background-color: rgba(255, 255, 255, 0);
  position: fixed;
  width:100%;/*Why set 100% here result .nav-container's justify-content:start*/
}

.nav-container{ /*Nav bar container*?
  /*Line 4/5/6 works together will centered the nav bar when the max-width less than 100% */
  max-width:100%; /*Why the tutorial uses 1250px here?*/
  /* padding:0px 10px; */
  /* margin: 0 auto; */
  position: relative; /***This line was added after the tutorial add the mega menu. Why?* */
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

/* .nav-item li a:hover{
  color:#128c9f;
  transition: all 0.4s ease;
} */

.nav-item li{
  list-style: none;
}

.dd-menu{
  background: #3f4041;
  width:160px;
  top:80px;
  line-height: 45px;
  position: absolute; /*Why*/
  visibility: hidden;
}

.dd-menu li a{
  width:100%;
  display: block;
  padding:0 0 0 15px;
  border-radius: 0px;
}

.nav-item li:hover .dd-menu{
  visibility: visible;
  opacity: 1;
}

/***Light Background********************************************/
.navlight{
  z-index:10;
  background-color: white;
  position: fixed;
  width:100%;/*Why set 100% here result .nav-container's justify-content:start*/
}

.darkword{
  font-family: 'Noto Sans';
  list-style: none;
  margin-left:45px;
  color:black;
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
/*******/

/***Mega***/
.mega-container{ /*If any issues, jump to lines 15**/
  position: absolute;
  border-top: 1px solid white;
  top:80px;
  left:0;
  background: #3f4041;
  width:100%;
  visibility:hidden;
}

.height-ext{
  padding-bottom: 40px; /*height dependent on the gap you want to fill*/
}

.nav-item li:hover .mega-container{
  visibility: visible;
  transition: all 4s ease-in;
}

.mega-content{
  padding:25px 20px;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.mega-row{
  width:calc(20% - 30px);
  line-height: 45px;
}

.mega-row img{
  max-width:100%;
  max-height: 100%;
  object-fit: cover;
}

.mega-row header{
  color:white;
  font-family: 'Noto Sans';
}

.mega-item{
  border-left: 2px solid white;
  height:180px; /**The height of the left side border**/
  margin-left: -20px;
}

.rgb{
  display: inline-block;
background-image: url(../assets/image/QONBQ.png);

font-weight: bold;
  animation: rgb 3s infinite;
-webkit-text-fill-color: transparent;
-webkit-background-clip: text;
  background-clip: text;

}

@keyframes rgb {
  0% {background-position: 0px 0px;}
100% {background-position: 0px 219px;}
};
/* .mega-item-1{
  margin-left: 2px;
} */

.mega-item li{
  padding: 0 10px;
}

.mega-item li a{
  padding: 0 10px;
  color: #d9d9d9;
  font-size: 17px;
  display: block;
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
  .nav-item{
    display: block;
    position:fixed;
    height:100vh;/**Make the nav-bar as high as viewport***/
    width:100%;
    max-width:350px;
    background:#7f7f7f;
    top:0;
    left:-100%;
    visibility: show; /*ON/OFF**/
    overflow-y: auto;
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

/* .darkword{
  font-family: 'Noto Sans';
  list-style: none;
  margin-left:0px;
  color:white;
  text-decoration: none;
} */

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
    /* display:block; */
    font-size: 20px;
  }

  .dd-menu{
  background: #7f7f7f;
  line-height: 45px;
  position: static; /*Why*/
  opacity:1;
  visibility: visible;
  width:100%;
  margin-left: -20px;
  top:65px;
  max-height: 0px;
  overflow: hidden;
  }

  #showDrop:checked ~ .dd-menu,
  #showMega:checked ~ .mega-container{
    max-height: 100%;
  }

  .drop-menu li{
    margin:0;
  }

  .drop-menu li a{
    font-size:18px;
    border-radius:5px;
  }

  .nav-item .mobile-item{
    display:block;
    font-size:20px;
    color: #f2f2f2;
    padding-left: 20px;
    cursor:pointer;
  }

  .nav-item .desktop-item{
    display: none;
  }

  /* .nav-item .mobile-item:hover{
    background: #3a3b3c;
  } */
.nav-item input,
.nav-container input{
  display:none;
  appearance: none;
}

.mega-container{ /*If any issues, jump to lines 15**/
  position: static;
  border-top: 1px solid white;
  top:65px;
  width:100%;
  opacity: 1;
  visibility: visible;
  background: #3f4041;
  max-height: 0px;
  overflow: hidden;
}

.mega-content{
  padding:25px 20px 0px 20px;
  display: flex;
  flex-direction: column;
}

.mega-row{
  width:100%;
  margin-bottom: 15px;
  border-top:1px solid rgba(255,255,255,0.08);
}

.mega-item{
  border-left: 0px;
  padding-left: 15px;
}

.mega-item li{
  margin:0;
}

.mega-row header{
  font-size:18px;
}

.mega-row:nth-child(1),
.mega-row:nth-child(2){
  border-top:0px;
}

.bi-list{
  color:black;
}

}

</style>
