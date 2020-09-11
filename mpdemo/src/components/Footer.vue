<template>
  <div class="foot">
    <mt-tabbar fixed>
      <mt-tab-item>
        <router-link to="/">
          <img src="../assets/images/smimg/shouye.png" alt />
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/">
          <img src="../assets/images/smimg/caidan.png" alt />
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/about">
          <img src="../assets/images/smimg/gouwu.png" alt />
        </router-link>
      </mt-tab-item>
      <mt-tab-item>
        <router-link to="/mycenter">
          <img src="../assets/images/smimg/zhongxin.png" alt />
        </router-link>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<style scoped>
.foot{
  position: fixed;
  z-index: 99;
}
.mint-tabbar{
  opacity: 0.8;
}

.mint-tab-item-label img {
  width: 50px;
  height: 50px;
}
.mint-tab-item{padding: 0;}
</style>