<template>
<NavBar :is-dark="isDark"></NavBar>
<!-- <FillerComponent></FillerComponent> -->
<div class="bg-container">
  <img class="support-bg" src="../assets/image/support/tech_head-banner.jpg">
  <p class="bg-title">Teach Support</p>
</div>
<div class="rma-layout">
  <div class="rma-group">
    <img src="../assets/image/support/rma_img.jpg">
    <div class="text">
      <h3 class="rma-title">RMA Application</h3>
      <p class="rma-content">To apply for an RMA (Return Merchandise Authorization), please contact the local reseller/distributor where the purchase was made for the necessary assistance. You may find the distributor’s contact information at where to buy. If you have trouble finding the information or are unable to reach your local distributor, please contact support@lexar.zendesk.com for further information.</p>
    </div>
  </div>
</div>
<div class="limitation">
  <h3 class="warranty-title">Limitation of warranty</h3>
  <p class="warranty-content">Lexar will not be responsible for providing a repairing/replacement service if the product
has exceeded its duration of warranty, or the product defect is caused by any of the following factors:</p>
  <div class="container icon-group">
    <div class="block-layout">
      <div class="icon-layout">
        <img src="../assets/image/support/small_icon/icon_d.png">
        <div class="text-layout">
          <p class="text-title">Damage</p>
          <p class="text-content">Damage caused by natural <br>disaster, accident, improper <br>installation, or any <br>inappropriate <br>or mishandling usage.</p>
        </div>
      </div>
    </div>
    <div class="block-layout">
      <div class="icon-layout">
        <img src="../assets/image/support/small_icon/icon_a.png">
        <div class="text-layout">
          <p class="text-title">Authorization</p>
          <p class="text-content">The product has been <br>repaired or removed <br>by an unauthorized technician.</p>
        </div>
      </div>
    </div>
    <div class="block-layout">
      <div class="icon-layout">
        <img src="../assets/image/support/small_icon/icon_c.png">
        <div class="text-layout">
          <p class="text-title">Conditions</p>
          <p class="text-content">Products used under an <br>insufficient or excessive <br>electricity supply, abnormal <br>mechanical or environmental <br>conditions.</p>
        </div>
      </div>
    </div>
    <div class="block-layout">
      <div class="icon-layout">
        <img src="../assets/image/support/small_icon/icon_w.png">
        <div class="text-layout">
          <p class="text-title">Warranty label</p>
          <p class="text-content">The warranty label has been <br>changed, damaged, or is missing.</p>
        </div>
      </div>
    </div>
    <div class="block-layout">
      <div class="icon-layout">
        <img src="../assets/image/support/small_icon/icon_u.png">
        <div class="text-layout">
          <p class="text-title">Unauthorized modification</p>
          <p class="text-content">Unauthorized modification of <br>SPD (DRAM) or firmware. <br>(SSD / microSD / USB Drives)</p>
        </div>
      </div>
    </div>
    <div class="block-layout">
      <div class="icon-layout">
        <img src="../assets/image/support/small_icon/icon_s.png">
        <div class="text-layout">
          <p class="text-title">Serial number</p>
          <p class="text-content">The product serial number does <br>not match or is not clear enough <br>to identify.</p>
        </div>
      </div>
    </div>
    <div class="block-layout">
      <div class="icon-layout">
        <img src="../assets/image/support/small_icon/icon_d2.png">
        <div class="text-layout">
          <p class="text-title">Distributor</p>
          <p class="text-content">Products purchased from <br>unauthorized resellers.</p>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="add-limitation">
  <p style="display:block">Additional limitation of warranty</p>
  <ul class="">
    <ol>Any Warranty set forth herein shall NOT be applicable to any Longsys product when it is incorporated in, installed to, or used for continuously/consecutive recording devices such as a black box or CCTV."</ol>
    <ol>Any Warranty set forth herein shall NOT be applicable to any Longsys product where breach of such Warranty could threaten injury or life, such as aviation, automotive, nuclear, medical or life support systems (or any other form of ultra-hazardous applications).</ol>
    <ol>A customer or user of Longsys product shall be responsible for saving its own data for security of such data. In any case, Longsys shall NOT be responsible for loss of or damage to data recorded in Longsys product.</ol>
  </ul>
</div>
<div class="btn-group">
  <a :class="{btn:true,selected:defaultComp}" class="btn" @click="switchComp(true)">Warranty Duration</a>
  <a :class="{btn:true,selected:!defaultComp}" @click="switchComp(false)">Disclaimer</a>
</div>
<!-- <router-view></router-view> -->
<WarrantyTable v-if="defaultComp"></WarrantyTable>
<DisclaimerContent v-else></DisclaimerContent>
<div class='contact-form'>
  <p class="warranty-title">Contact Us</p>
  <p class="contact-content">If you have any questions, please contact us. We will be in touch with you shortly</p>
  <ContactForm></ContactForm>
</div>
<FooterBar></FooterBar>
</template>

<script>
import WarrantyTable from '../components/gadgets/WarrantyTable.vue'
import DisclaimerContent from '../components/gadgets/DisclaimerContent.vue'
import ContactForm from '../components/gadgets/ContactForm.vue'
// import FillerComponent from '@/components/gadgets/FillerComponent.vue'
export default {
  data () {
    return {
      isDark: false,
      defaultComp: true
    }
  },
  components: { WarrantyTable, DisclaimerContent, ContactForm },
  methods: {
    switchComp (ToF) {
      this.defaultComp = ToF
    }
  },
  mounted () {
  }
}
</script>

<style scoped>
li::marker {
    unicode-bidi: isolate;
    font-variant-numeric: tabular-nums;
    text-transform: none;
    text-indent: 0px !important;
    text-align: start !important;
    text-align-last: start !important;
}

.add-limitation{
  padding:0px 40px 0px 40px;
}

/************/

.bg-container{
  position: relative;
  padding:0px 0px 0px 0px;
  max-height: 350px;
}
.support-bg{
  object-fit:cover;
  width:100%;
  background-position: top left;
  max-height: 350px;
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

/***************/
.rma-layout{
  background: linear-gradient(rgba(242,242,242,0) 0%, rgba(242,242,242,0) 50%, rgb(197, 202, 208,1) 50%, rgb(197, 202, 208) 100%);
  position: relative;
  max-height: 450px;
  padding-top:30px;
}

.rma-group{
  display:flex;
  flex-direction: row;
  transform: translateY(0%);
}

.rma-layout img{
  object-fit:cover;
  max-width:100%;
  height:100%;
  padding-left: 50px;
  padding-bottom: 20px;
}

.text{
  padding-left:50px;
}

.rma-title{
  margin-top:70px;
  padding-bottom: 110px;
  color: #475360;
  font-family: 'Noto Sans';
  font-weight: 700;
  font-size: 28px;
}

.rma-content{
  font-size: 16px;
  color:#474747;
  font-family: 'Noto Sans';
  line-height:27px;
  padding-right:40px;
}
/*****************/

.warranty-title{
  text-align: center;
  margin-top:30px;
  padding-bottom: 20px;
  color: #475360;
  font-family: 'Noto Sans';
  font-size: 28px;
  font-weight: 700;
}

.warranty-content{
  font-size: 16px;
  color:#343434;
  font-family: 'Noto Sans';
  line-height:27px;
  padding-right:40px;
  padding:0px 200px 20px 200px;
}

.icon-group{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.block-layout{
  max-width:350px;
  padding:10px;
}

.icon-layout{
  display: flex;
  flex-direction: row;
}

.icon-layout img{
  object-fit:cover;
  max-width:100%;
  height:100%;
  padding-right:10px;
}

.text-layout{
  display: flex;
  flex-direction: column;
}

.text-title{
  font-family:'Noto Sans';
  font-size:18px;
  line-height:16px;
  font-weight:700;
}

.text-content{
  font-family:'Noto Sans';
  font-size:12px
}

.btn-group{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding:0px 20px
}

.btn{
  text-decoration: none;
  background-color: transparent;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  font-family: 'Noto Sans';
  font-size: 16px;
  line-height: 16px;
  padding: 13px 20px;
  margin:20px;
  text-align: center;
  width: 160px;
}

.selected{
  background-color:#128c9f;
  color:white;
}

/**********/
.contact-content{
  text-align: center;
  font-size: 16px;
  color:#343434;
  font-family: 'Noto Sans';
  line-height:27px;
  padding-right:40px;
  padding:0px 200px 20px 200px;
}

@media screen and (max-width:1045px) {
.rma-layout{
  padding-top: 10px;
  background: linear-gradient(rgba(242,242,242,0) 0%, rgba(242,242,242,0) 50%, rgb(197, 202, 208,1) 50%, rgb(197, 202, 208) 100%);
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.rma-layout img{
  display:none;
}

.rma-title{
  text-align: center;
  padding-bottom: 20px;
  color: #475360;
  font-family: 'Noto Sans';
  font-weight: 700;
}

/******************/

}
</style>
