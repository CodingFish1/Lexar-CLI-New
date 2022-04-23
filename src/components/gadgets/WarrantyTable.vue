<template>
<div class="warranty">
  <div class="warranty-overall container">
    <!-- <img src="@/assets/image/support/duration_bg.jpg"> -->
    <div class="warranty-content">
      <h3>Duration of Warranty</h3>
      <p>ALL KLEVV products are covered by the following Duration of Warranty subject to the above terms and conditions. You may apply the RMA within the applicable warranty period. The SSD is based on the TBW or Warranty period.</p>
    </div>
    <div class="table-padding">
        <table class="table-style">
            <tr>
                <th>Duration of Warranty</th>
                <th>Applicable Product Type</th>
            </tr>
            <tr>
                <td>Limited Lifetime Warranty</td>
                <td>All Memory Module series<br>All Flash Card series<br>All USB Drive series</td>
            </tr>
            <tr>
                <td>5 Years Limited Warranty</td>
                <td>NM800 series SDD<br>NM700 series SSD<br>NM620 SSD</td>
            </tr>
            <tr>
                <td>3 Years Limited Warranty</td>
                <td>NM610 SSD<br>Portable SSD</td>
            </tr>
        </table>
    </div>
  </div>
</div>
</template>

<style scoped>
.warranty{
    background: url('@/assets/image/support/duration_bg.jpg') center center no-repeat;
}

.warranty-overall{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.warranty-content{
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    max-width:700px;
    padding-right:70px;
}

.warranty-content h3{
    display: block;
    color:white;
    font-family: 'Noto Sans';
}

.warranty-content p{
    font-size:16px;
    display: block;
    color:white;
    font-family: 'Noto Sans';
}

/*******************/
.table-padding{
    padding:20px 0px 20px 0px;
}

.table-style{
    /* width:500px; */
    text-align: center;
}

.table-style th,
.table-style td{
    font-size:12px;
    color:white;
    font-family: 'Noto Sans';
    padding:20px 20px 20px 20px;
}

th{
    background:rgba(162, 162, 162, 0.3);
    border:1px solid rgb(143, 143, 143);
    border-top:0px;
}

td{
    border:1px solid rgb(143, 143, 143);
    padding:33px 0;
}

th:nth-child(1),
td:nth-child(1){
    border-left: 0px;
}

th:nth-child(2),
td:nth-child(2){
    border-right: 0px;
}

@media screen and (max-width:1210px) {

.warranty{
    background: url('@/assets/image/support/duration_bg.jpg') no-repeat center center;
}

.warranty-content{
    padding-right:40px;
}

.warranty-overall{
    display:flex;
    flex-direction: column;
    align-items: center;
}

}
</style>
