<template>
  <div class="home">
    <!-- <div style="height:50px"></div> -->
    <!-- 滑块开始 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#e4393c">
      <van-swipe-item>
        <router-link to="/">
          <img src="../assets/images/slider1.jpg" alt="">
        </router-link>
      </van-swipe-item>
      <van-swipe-item>
        <router-link to="/">
          <img src="../assets/images/slider2.jpg" alt="">
        </router-link>
      </van-swipe-item>
      <van-swipe-item>
        <router-link to="/">
          <img src="../assets/images/slider3.jpg" alt="">
        </router-link>
      </van-swipe-item>
    </van-swipe>
    <!-- 滑块结束 -->
    <div class="conx">
      <div >
        <router-link to="/">
          <img src="../assets/images/1g.jpg" alt="">
        </router-link>
      </div>
      <div >
        <router-link to="/">
          <img src="../assets/images/2g.jpg" alt="">
        </router-link>
      </div>
      <div>
        <router-link to="/">
          <video controls="controls" src="../assets/images/3g.mp4" width="100%"></video>
        </router-link>
      </div>
      <div >
        <router-link to="/">
          <img src="../assets/images/4g.jpg" alt="">
        </router-link>
      </div>
      <div >
        <router-link to="/">
          <img src="../assets/images/5g.jpg" alt="">
        </router-link>
      </div>
      <div >
        <router-link to="/">
          <img src="../assets/images/7g.jpg" alt="">
        </router-link>
      </div>
    </div> 

  </div>
</template>
<style scoped>
  .home{padding: 50px 0 52px;}
  .van-swipe{
    width: 100%;
    height: auto;
    margin-bottom: 14px;
  }
  
  .home img{
    max-width: 100%;
    height: auto;
  }
   .van-swipe >>> .van-swipe__indicator{background-color:#443F0D;}
   .van-swipe >>> .van-swipe__indicator--active{
     background-color:#e4393c;
   }
   .conx{width: 100%;}
  /* @media (max-width:576px) {
  } */

</style>