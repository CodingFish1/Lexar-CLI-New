<template>
<NavBar :is-dark="isDark"></NavBar>
<!-- <FillerComponent></FillerComponent> -->
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
<div class="contact container">
  <p style="font-weight: 600; font-size:36px">Contact Us</p>
  <div class="contact-info">
      <div class="contact-detail">
        <div class="address-layout">
          <div>
            <p style="font-weight: 600;">Head Office</p>
            <p>161 Baypointe Pkwy, San Jose, CA 95134, USA</p>
          </div>
          <div>
            <p style="font-weight: 600;">China Office</p>
            <p>Room EF, 5F, Building 1, Financial Base, No.8 Kefa Road, High-Tech Park, Shenzhen, China</p>
          </div>
          <div>
            <p style="font-weight: 600;">Taiwan Office</p>
            <p>10F, No.12, Wenhu St., Neihu Dist., Taipei City 114, Taiwan</p>
          </div>
        </div>
      </div>
      <div class="map">
        <div style="width: 30% heigh:30%"><iframe width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=161%20Baypointe%20Pkwy,%20San%20Jose,%20CA%2095134,%20USA+(Lexar)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/marine-gps/">navigation gps</a></iframe></div>
      </div>
  </div>
</div>
<FooterBar></FooterBar>
</template>

<script>
// import FillerComponent from '@/components/gadgets/FillerComponent.vue'
export default {
  data () {
    return {
      isDark: false
    }
  },
  // components: { FillerComponent },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>
.bg-container{
  position: relative;
  padding:0px 0px 0px 0px;
  max-height: 350px;
}
.about-bg{
  object-fit:cover;
  width:100%;
  background-position: top left;
  max-height: 350px;
}

.bg-container::after{
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, #0a0a0a 0, rgba(255,255,255,0) 55%);
}

.bg-title{
  z-index: 8;
  color:white;
  position: absolute;
  font-size: 46px;
  font-family: 'Noto Sans';
  top:50%;
  left:10%
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
/*******Map********* */
.contact{
  font-family: 'Noto Sans';
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}

.contact-info{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.address-layout{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.contact-info{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

}

</style>
