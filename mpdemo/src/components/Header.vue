<template>
  <div class="head">
    <van-row>
      <van-col span="8">
        <router-link to="/">
          <div style="padding:10px;">
            <img src="../assets/images/smimg/intl_logo_01.svg" width="145" alt />
          </div>
        </router-link>
      </van-col>
      <van-col span="16">
        <div style="float:right;">
          <router-link to="/">
            <img src="../assets/images/smimg/header-chat.png" alt class="chat3" />
          </router-link>
          <img @click="ssear" src="../assets/images/smimg/header-search.png" alt class="search3" />
          <img @click="sslist" src="../assets/images/smimg/header-nav.png" alt class="nav3" />
        </div>
      </van-col>
    </van-row>
    <div v-if="ssou">
      <van-search
      v-model="seaval"
      placeholder="搜商品/明星、系列"
      show-action="true"
      background="#ffffff"
      class="csea"
    >
      <template #action>
        <div class="sou">搜索</div>
      </template>
    </van-search>
    </div>
    
      
    <div class="wrapper" v-if="dslist"></div>
    <div class="dlist" v-if="dslist">
      <ul>
        <li @click="sslist">
          <router-link to="/login">分类甄选</router-link>
        </li>
        <li>
          <router-link to="/">我的账户</router-link>
        </li>
        <li>
          <router-link to="/">VIP计划</router-link>
        </li>
        <li>
          <router-link to="/">官网政策</router-link>
        </li>
        <li>
          <router-link to="/">在线客服</router-link>
        </li>
        <li>
          <router-link to="/">400 886 1961</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ssou: false,
      dslist: false,
      seaval: ""
    };
  },
  methods: {
    ssear() {
      this.ssou = !this.ssou;
    },
    sslist() {
      this.dslist = !this.dslist;
    },
  },
};
</script>
<style scoped>
/* @media (max-width：576px){
  .
} */
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 59;
  width: 100%;
  height: 550px;
  margin-top: 50px;
  background-color: #000;
  opacity: 0.5;
}

.head {
  width: 100%;
  position: fixed;
  z-index: 99;
}

.van-row {
  height: 50px;
  background-color: #000;
}
.search3,
.chat3,
.nav3 {
  width: 50px;
  height: 50px;
}
.van-search {
  padding: 5px 8px;
}
.csea {
  border: 1px solid #e0e0e0;
}
.sou {
  padding: 5px 10px;
  font-size: 12px;
  height: 20px;
  line-height: 20px;
  border: 1px solid #333;
}
.dlist {
  /* float: right; */
  position: absolute;
  left: 40%;
  top: 96%;
  z-index: 100;
  width: 60%;
  background-color: #ffffff;
}
.dlist ul > li {
  padding: 5px 20px;
  line-height: 40px;
  height: 40px;
  border-bottom: 1px solid #848484;
}
.dlist ul > li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #333333;
}
</style>