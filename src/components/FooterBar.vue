<template>
    <footer class="footer-section" >
        <img src="../assets/image/support/small_icon/logo.png">
        <p>Longsys Limited 2022. All rights reserved. Lexar and its logo are registered trademarks of Longsys Limited.
          Other products, brand names, company names and logos are trademarks of their respective owners.</p>
        <p>All images and descriptions discussed herein are for reference purposes only.</p>
        <div class="">
        </div>
        <div>
          <p>Visual representation of images of the products on any advertisement or commercial may not be identical to actual products you receive. We are not responsible for any errors, omissions or representations. All information discussed herein is subject to change without notice. Product specification, functions and appearance may vary by models and differ from country to country. Some products and configuration may not be available in all markets or launch time differs.</p>
        </div>
        <p class="filler">Demonstration only. Not for commercial using</p>
    </footer>
</template>
<script>
export default {
  created () {
  },
  mounted () {
    // if (this.isMobile === true) {
    //   this.$refs.removeAttr('data-autoplay')
    // }
  }
}
</script>
<style scoped>
.footer-section{
  padding:30px 30px 20px 30px;
  margin-top:30px;
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  background-color: #3f4041;
  width:100%;
}

.footer-section img{
  padding-bottom: 20px;
}

.footer-section p{
  margin-top:0px;

  font-family: 'Noto Sans';
  font-size: 12px;
  display: block;
  color:#989898
}

/* .filler{
  padding-bottom:20px;
} */
</style>
