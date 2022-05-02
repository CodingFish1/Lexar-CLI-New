<template>
    <footer class="footer-section" >
        <img src="../assets/image/support/small_icon/logo.png">
        <p>Longsys Limited 2022. All rights reserved. Lexar and its logo are registered trademarks of Longsys Limited.
          Other products, brand names, company names and logos are trademarks of their respective owners.</p>
        <p>All images and descriptions discussed herein are for reference purposes only.</p>
        <div class="">
          <p>Demonstration only. Not for commercial using</p>
        </div>
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
</style>
