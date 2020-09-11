<template>
  <div class="shopcar">
    <div class="spitem">
      <van-row>
        <van-col span="2">
          <input class="spselect" name="spsele" type="checkbox" />
        </van-col>
        <van-col span="10">
          <div style="height:auto">
            <img class="spimg" src="../assets/shop.jpg" alt />
          </div>
        </van-col>
        <van-col span="12">
          <div class="splist" style="height:auto">
            <p>女装长袖端夹克{{}}</p>
            <p>¥2999{{}}</p>
            <p>颜色:白色{{}}</p>
            <p>尺码:&nbsp;&nbsp;8{{}}</p>
            <div class="spbcount">
              <button>-</button>
              <input type="text" v-model="spcount" />
              <button>+</button>
            </div>
            <div class="spbdele">
              <span>加入收藏夹</span>
              <img src="../assets/images/smimg/delete.png" width="30" height="30" @click="spde" alt />
            </div>
          </div>
        </van-col>
      </van-row>
    </div>

    
    <!--  -->
    <div class="spsum">
      <div>
        <p>产品</p>
        <p>{{}}7&nbsp;件</p>
      </div>
      <div>
        <p>总金额</p>
        <p>¥&nbsp;224{{}}</p>
      </div>
    </div>

    <div class="spbsum">
      <button>继续购物</button>
      <button>结算</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      spcount: 0,
    };
  },
  // 计算data中的值
  computed() {},
  methods: {
    spde() {},
  },
  mounted() {},
};
</script>
<style scoped>
.shopcar {
  padding: 50px 15px 52px;
}
.shopcar .spitem {
  padding: 30px 0 20px;
  border-bottom: 2px dotted #b6b6b6;
}
.shopcar .spselect {
  margin: 2px 5px;
}
.shopcar .spimg {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.splist {
  padding: 5px 15px 15px;
}
.splist p,
span {
  font-size: 16px;
  margin-bottom: 8px;
}
.splist p:first-child {
  font-weight: bold;
}
.splist .spbcount {
  display: flex;
  justify-content: left;
}
.splist .spbcount button {
  width: 25%;
  margin: 0;
  height: 34px;
  padding: 6px 12px;
  background-color: #eee;
  border: 1px solid #ccc;
  text-align: center;
}
.splist .spbcount button:first-child {
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
}
.splist .spbcount button:last-child {
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.splist .spbcount button:focus {
  background-color: hotpink;
}
.splist .spbcount input {
  width: 30%;
  height: 30px;
  margin: 0;
  background-color: #eee;
  border: 1px solid #ccc;
  text-align: center;
}
.splist .spbdele {
  display: flex;
  justify-content: space-between;
}
.splist .spbdele > span {
  display: block;
  margin-top: 6px;
}
.spsum {
  font-size: 16px;
  margin-top: 15px;
  padding: 15px 10px 5px;
  background-color: #e8e8e8;
}
.spsum > div {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.spsum > div:last-child > P {
  font-weight: bold;
}
.spbsum button {
  display: inline-block;
  margin: 15px 0;
  width: 100%;
  padding: 6px 15px;
  text-align: center;
  color: #fff;
  height: 30px;
  background-color: #000;
  border-radius: 5px;
}
</style>