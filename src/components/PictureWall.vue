<template>
<section class="image-wall">
        <div>
            <div class="pic-content">
                <p class="pic-title">Lexar ARES DDR5 Desktop Memory</p>
                <p class="pic-subtitle">DDR5 Gaming Memory</p>
                <p class="pic-text">Adopting cutting-edge technology, all Lexar memory modules produced
                    by a rigorous quality control process for the best-in-class
                    performance and stable operation.
                </p>
                <button class="btn-1" role="button">Check it out !</button>
            </div>
            <img  class="img-fluid-nb" src="../assets/image/DDR5-Ares_PR_1500x1000.jpg" alt="">
        </div>
        <div>
            <div class="pic-content-2">
                <p class="pic-title">Lexar PCIe 4.0 NVMe SSD</p>
                <p class="pic-subtitle">New Benchmark For Storage</p>
                <p class="pic-text">With the latest 12nm controller and graphene heatsink, Lexar NM800
                    PCIe 4.0 SSD brings you superior performance in cold temperature. Now supports PlayStation 5!
                </p>
                <button class="btn-1" role="button">Check it out !</button>
            </div>
            <img class="img-fluid-nb" src="../assets/image/NM800-PR_1500x1000-1.jpg" alt="">
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.image-wall{
  display: flex;
  flex-direction: row;
  position: relative;
}

.img-fluid-nb{
  object-fit:cover;
  max-width:100%;
  height:100%
}

.pic-content{
  width:400px;
  display: flex;
  flex-direction: column;
  top:25%;
  left: 5%;
  position: absolute;
}

.pic-content-2{
  width:400px;
  display: flex;
  flex-direction: column;
  top:61%;
  left: 65%;
  position: absolute;
}

.pic-title{
  margin-bottom:0px; /***Apply for Bootstrap style**/
  font-size: 19px;
  font-family: 'Noto Sans';
  color:#ffffff;

}

.pic-subtitle{
  margin-bottom:0px; /***Apply for Bootstrap style**/
  font-size: 16px;
  font-family: 'Noto Sans';
  color:#b7b7b7;
  /* padding-top:4px; ***Dieable it when Bootstrap enabled** */
}

.pic-text{
  font-size: 13px;
  font-family: 'Noto Sans';
  color:#ffffff;
  line-height:26px;
}

.btn-1{
  background-color: transparent;
  border: 1px solid #ffffff;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Noto Sans';
  font-size: 16px;
  line-height: 16px;
  padding: 13px 20px;
  text-align: center;
  width: 160px;
}

.btn-1:hover{
  background-color:#128c9f;
}
</style>
