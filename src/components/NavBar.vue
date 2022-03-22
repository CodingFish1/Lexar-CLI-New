<template>
<nav :class="{navlight:!isDark}">
    <div class="nav-container">
        <div class="logo"><img src="../assets/image/lexarlogo.svg" alt="Lexar logo"></div>
        <ul class="nav-item">
            <li>
                <a href="#" class="height-ext lightword" :class={darkword:!isDark}>Products</a>
                <div class="mega-container">
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
                </div>
            </li>
            <li><a href="#" class="lightword" :class={darkword:!isDark}>News</a></li>
            <li><a href="#" class="lightword" :class={darkword:!isDark}>Support</a></li>
            <li><a href="#" class="lightword" :class={darkword:!isDark}>Shop</a></li>
            <li>
                <a href="#" class="height-ext lightword" :class={darkword:!isDark}>Lexar</a>
                <ul class="dd-menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </li>
        </ul>
    </div>
</nav>
</template>

<script>
import emitter from '@/libs/emitter'
export default {
  data () {
    return {
      currSectionNum: '',
      isDark: 'true'
    }
  },
  methods: {
  },
  mounted () {
    emitter.on('has-scroll', (data) => {
      if (data === 2 || data === 3) {
        this.isDark = false
      } else {
        this.isDark = true
      }
      console.log(this.isDark)
    })
  }
}
</script>

<style scoped>
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
  padding-left:45px;
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
  padding-left:45px;
  color:black;
  text-decoration: none;
}

.nav-container:hover li a{
  font-family: 'Noto Sans';
  list-style: none;
  color:white;
  text-decoration: none;
}

.nav-container li a:hover{
  font-family: 'Noto Sans';
  list-style: none;
  color:#128c9f;
  text-decoration: none;
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

@media screen and (max-width:970px) {
  .nav-item{
    display: block;
    position:fixed;
    height:100vh;/**Make the nav-bar as high as viewport***/
    width:100%;
    max-width:350px;
    background:#7f7f7f;
    top:0;
    left:0;
    visibility: hidden; /*ON/OFF**/
    /* overflow-y: auto; */
    line-height: 50px;
    padding:50px 10px;
  }

  .nav-item li{
    margin: 15px 10px;
  }

  .nav-item li a{
    padding:0 20px;
    display:block;
    font-size: 20px;
  }

  .dd-menu{
  background: #3f4041;
  line-height: 45px;
  position: static; /*Why*/
  opacity:1;
  visibility: hidden;
  width:100%;
  padding-left: 20px;
  top:65px;
  }
  .drop-menu li{
    margin:0;
  }

  .drop-menu li a{
    font-size:18px;
    border-radius:5px;
  }
}

</style>
