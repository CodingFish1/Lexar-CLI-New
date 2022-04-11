<template>
<NavBar :is-dark="isDark"></NavBar>
<div class="bg-container">
    <img class="about-bg" src="../assets/image/about/About-Lexar.jpg">
    <p class="bg-title">About Lexar</p>
</div>
<div class="container intro-overall">
      <div class="intro-content">
          <p class="p1"><i class="bi bi-quote"></i>Two decades of memory, technology, and innovation<i class="bi bi-quote"></i></p>
          <p class="p2">Established in 1996, Lexar started with one goal. Under this shared dream,
            we have expanded our business worldwide and had become an unprecedented global leader in the market.</p>
      </div>
      <div class="intro-block">
          <div class="intro-block-content">
              <img class="intro-bg" src="../assets/image/about/icon_business.png">
              <p>Business strategies</p>
              <p>Our business strategy is to adopt the newest technologies to differentiate ourselves for
              the benefit of our customers, so we can offer innovative product portfolio.</p>
          </div>
          <div class="intro-block-content">
              <img class="intro-bg" src="../assets/image/about/icon_core.png">
              <p>Core strengths</p>
              <p>We believe our core strengths are well-organized business structures, comprehensive
            product developments, and high level of human resources from the world’s best Memory IDMs.</p>
          </div>
      </div>
</div>
<div class="contentwall">
  <div class="contentwall-layout">
    <p class="p3">Lexar will always be a customer driven company</p>
    <div class="contentwall-block">
      <img src="../assets/image/about/who_we_are_sec02_img.png">
      <div class="contentwall-details">
          <p class="p4">We focus all our efforts on providing the highest-quality products with an attentive after-sales services and customer support to ensure smooth communication among the distributors, resellers, retailers, and OEM customers.</p>
          <p class="p4">In order to deliver cutting-edge products and exceptional digital life experience, we invest heavily in our employees to obtain individual creativity.</p>
          <p class="p4">As a new world-class leader in the domain of memory products, Lexar is here to enrich your digital life experience.</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      isDark: false
    }
  },
  // components: { NavBar },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scope>
.bg-container{
  position: relative;
  padding:0px 0px 0px 0px;
}
.about-bg{
  object-fit:fit;
  align-items: center;
  width:100%;
}

.bg-title{
  color:red;
  position: absolute;
  top:50%;
}

/**********/
.intro-overall{
  padding:20px;
}

.intro-content .p1{
  font-family: 'Noto Sans';
  font-size:40px;
  text-align: center;
  padding:0px 45px 10px 45px;
}

.intro-content .p2{
  font-family: 'Noto Sans';
  font-size:16px;
  padding:10px 65px 10px 65px;
}

.intro-block{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding:10px 65px 10px 65px
}

.intro-block-content{
  display: flex;
  flex-direction: column;
  align-content: center;
  max-width:370px;
}

.intro-block-content img{
  margin:auto;
}

.intro-block-content p{
  text-align: center;
}

/*******/
.contentwall{
  background-color: #404953;
}

.contentwall-block{
  padding:55px 60px 60px 60px;
  display: flex;
  flex-direction: row;
}

.contentwall-block img{
  object-fit:cover;
  width:100%;
}

.contentwall-details{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left:10px;
}

.contentwall .p3{
  font-family: 'Noto Sans';
  color:white;
  font-size: 38px;
  line-height: 38px;
  text-align: center;
  padding:40px 0px 0px 0px;
}

.contentwall .p4{
  font-family: 'Noto Sans';
  color:white;
}

@media screen and (max-width:970px) {
.about-bg{
  object-fit:fit;
  width:100%;
}

.contentwall-details{
  padding:20px;
}

.contentwall-block img{
  display: none;
}

.intro-block{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  padding:10px 10px 10px 10px
}

.intro-content .p1{
  font-family: 'Noto Sans';
  font-size:40px;
  text-align: center;
  padding:0px 10px 10px 10px;
}

.intro-content .p2{
  font-family: 'Noto Sans';
  font-size:16px;
  padding:10px 10px 10px 10px;
}

}

</style>
