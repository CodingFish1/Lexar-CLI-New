<template>
<section class="container news-layout">
        <div class="news-room">
            <h3>News Room</h3>
        </div>

        <div class="news-card-layout">
            <div class="news-card" >
                <h6 class="card-date">10th November, 2021</h6>
                <p class="title-cutter card-title">Lexar New DDR5 Standard and Gaming Memory</p>
                <p class="ellipsis card-content">Lexar DDR5 memory offers assurance of QVL
                    testing with major motherboard brands’ Z690 platforms that
                    support the latest Intel 12th Generation ‘Alder Lake’ Core Processors.</p>
                <p class="card-show">SHOWMORE ></p>
            </div>

            <div class="news-card" >
                <h6  class="card-date">10th November, 2021</h6>
                <p class="title-cutter card-title">Lexar Reveals New DDR5 Standard and Gaming Memory</p>
                <p class="ellipsis card-content">Lexar DDR5 memory offers assurance of QVL
                    testing with major motherboard brands’ Z690 platforms that
                    support the latest Intel 12th Generation ‘Alder Lake’ Core Processors.</p>
                <p class="card-show">SHOWMORE ></p>
            </div>

            <div class="news-card" >
                <h6 class="card-date">10th November, 2021</h6>
                <p class="title-cutter card-title">Lexar Reveals New DDR5 Standard and Gaming Memory</p>
                <p class="ellipsis card-content">Lexar DDR5 memory offers assurance of QVL
                    testing with major motherboard brands’ Z690 platforms that
                    support the latest Intel 12th Generation ‘Alder Lake’ Core Processors.</p>
                <p class="card-show">SHOWMORE ></p>
            </div>

            <div class="news-card" >
                <h6 class="card-date">10th November, 2021</h6>
                <p class="title-cutter card-title">Lexar Reveals New DDR5 Standard and Gaming Memory</p>
                <p class="ellipsis card-content">Lexar DDR5 memory offers assurance of QVL
                    testing with major motherboard brands’ Z690 platforms that
                    support the latest Intel 12th Generation ‘Alder Lake’ Core Processors.</p>
                <p class="card-show">SHOWMORE ></p>
            </div>

            <div class="news-card" >
                <h6 class="card-date">10th November, 2021</h6>
                <p class="title-cutter card-title">Lexar Reveals New DDR5 Standard and Gaming Memory</p>
                <p class="ellipsis card-content">Lexar DDR5 memory offers assurance of QVL
                    testing with major motherboard brands’ Z690 platforms that
                    support the latest Intel 12th Generation ‘Alder Lake’ Core Processors.</p>
                <p class="card-show">SHOWMORE ></p>
            </div>

            <div class="news-card" >
                <h6 class="card-date">10th November, 2021</h6>
                <p class="title-cutter card-title">Lexar Reveals New DDR5 Standard and Gaming Memory</p>
                <p class="ellipsis card-content">Lexar DDR5 memory offers assurance of QVL
                    testing with major motherboard brands’ Z690 platforms that
                    support the latest Intel 12th Generation ‘Alder Lake’ Core Processors.</p>
                <p class="card-show">SHOWMORE ></p>
            </div>

            <div class="news-card" >
                <h6 class="card-date">10th November, 2021</h6>
                <p class="title-cutter card-title">Lexar Reveals New DDR5 Standard and Gaming Memory</p>
                <p class="ellipsis card-content">Lexar DDR5 memory offers assurance of QVL
                    testing with major motherboard brands’ Z690 platforms that
                    support the latest Intel 12th Generation ‘Alder Lake’ Core Processors.</p>
                <p class="card-show">SHOWMORE ></p>
            </div>

            <div class="news-card" >
                <h6 class="card-date">10th November, 2021</h6>
                <p class="title-cutter card-title">Lexar Reveals New DDR5 Standard and Gaming Memory</p>
                <p class="ellipsis card-content">Lexar DDR5 memory offers assurance of QVL
                    testing with major motherboard brands’ Z690 platforms that
                    support the latest Intel 12th Generation ‘Alder Lake’ Core Processors.</p>
                <p class="card-show">SHOWMORE ></p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style scoped>
.news-layout{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.news-room h3{
  margin-top: 40px;
  padding-bottom: 20px;
  color:#1a1a1a;
  text-align: center;
  font-family: 'Noto Sans';
  font-size: 36px;
  font-weight: 800;
  line-height: 32px;
}

.news-card-layout{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
}

.news-card{
  width: 250px;
  padding:20px;
}

.news-card h6{
  color:#128c9f;
  font-family: 'Noto Sans';
  font-size: 12px;
}

/*Cut the words*/
.title-cutter{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.card-date{
  padding-bottom: 10px;
}

.card-title{
  padding-bottom: 10px;
  font-size: 14px;
  font-family: 'Noto Sans';
}

.ellipsis{
  position: relative;
  line-height: 18px;
  height: 66px;
  overflow: hidden;
}

.ellipsis::after{
  content:"...";
  font-weight:bold;
  position:absolute;
  bottom:3px;
  right:6px;
  /* padding:0 20px 1px 56px; */
}

.card-content{
  font-weight: 400;
  line-height: 22px;
  font-size: 11px;
  color:#909090
}

.card-show{
  letter-spacing:2px;
  line-height: 16px;
  font-size: 11px;
  color:#909090
}

@media screen and (max-width:810px) {
.news-layout{
  position: relative;
  height: auto !important;
}

.news-card{
  max-width: 350px;
  padding:20px;
  border-top: 1px solid rgb(196, 196, 196);
}
}
</style>
