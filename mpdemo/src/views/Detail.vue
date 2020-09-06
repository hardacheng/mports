<template>
  <div class="detail">
    <!-- 路由守卫用在心选和加入购物车判断是否登录 -->
    <!-- 滑块开始 -->
    <div>
      <div @click="xinxuan" class="heart">
        <img src="../assets/images/smimg/heart.png" alt />
      </div>
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#e4393c">
        <van-swipe-item v-for="(i,k) of dswiper" :key="k">
          <router-link to="/">
            <img :src=i alt />
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>

    <div class="dtext">
      <h4>
        <p>{{pdetail.title}}</p>
        <br />
        <br />
        <p>¥&nbsp;{{pdetail.price}}</p>
      </h4>
      <hr />
    </div>
    <div class="dtext">
      <p>详情</p>
      <br />
      <strong>款号:&nbsp;{{$route.query.xid}}</strong>
      <hr />
    </div>
    <div class="dtext">
      <p style="marginBottom:10px">颜色</p>
      <div  style="display:flex;">
        <div class="dimg" v-for="(i,k) of dcolor" :key="k" >
        <img :src=i alt />
      </div>
      </div>
      
      <hr />
    </div>
    <div class="dtext">
      <div class="dsize">
        <p>尺码</p>
        <button @click="sshow=!sshow">尺码表</button>
      </div>
      <ul>
        <li v-for="(i,k) of size1" :key="k" >{{i}}</li>
      </ul>
      <hr />
    </div>
    <div v-if="sshow">
      <div class="dtext" style="display:flex;">
        <p style="marginRight:20px">尺码表</p>
        <span style="fontSize:12px">(测量单位为厘米)</span>
      </div>
      <table>
        <tr>
          <th>{{sizeth.t1}}</th>
          <th>{{sizeth.t2}}</th>
          <th>{{sizeth.t3}}</th>
          <th>{{sizeth.t4}}</th>
          <th>{{sizeth.t5}}</th>
        </tr>
        <tr v-for="(i,k) of sizetd" :key="k">
          <td>{{i.s1}}</td>
          <td>{{i.s2}}</td>
          <td>{{i.s3}}</td>
          <td>{{i.s4}}</td>
          <td>{{i.s5}}</td>
        </tr>
      </table>
      <hr />
    </div>
    <div class="dtext">
      <p>数量</p>
      <br />
      <select name="count" class="dselect">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <hr />
    </div>
    <div class="dbtn">
      <button @click="tocart">加入购物袋</button>
      <button @click="math">结算</button>
    </div>
  </div>
</template>
<script>
export default {
  // props:[xid],
  data() {
    return {
      time:0,
      time2:0,
      sshow: false,
      dshow:false,
      // 轮播图
      dswiper:[],
      // 产品信息
      pdetail:{},
      // 颜色
      dcolor:[],
      // 尺码
      size1:[],
      // 尺码头
      sizeth:{},
      // 尺码身
      sizetd:[]
    };
  },
  methods: {
    getData(v){
      // console.log(v);
      this.axios.get('/pro/detail?xid='+v).then(res=>{
        console.log(res);
        // 将数据拼接好加载到页面
        res.data.dcolor.forEach(item => {
          item.smimage="http://localhost:3333/mpimg/detail/"+item.smimage;
          this.dcolor.push(item.smimage);
        });
        res.data.dswiper.forEach(item=>{
          item.img10="http://localhost:3333/mpimg/detail/"+item.img10;
          this.dswiper.push(item.img10);
        });
        res.data.size1.forEach(item=>{
          this.size1.push(item.z1);
        })
        res.data.sizetd.forEach(item=>{
          this.sizetd.push(item);
        })
        this.sizeth=res.data.sizeth;
        this.pdetail=res.data.pdetail;
      })
    },
    
    dsele(k){
      // this.dshow=!this.dshow;
      // this.time++;
      // console.log(this.time)
      // if(this.time%2==0){
      //   // 上一次的选的k变为无
      //   let c=this.time2
      //   document.getElementById(c).className="";
      //   // 这一次选的k变为有
      //   document.getElementById(k).className="changeshow";
      // }else{
      //   document.getElementById(k).className="changeshow";
      //   // 储存这一次的k值
      //   this.time2=k;
      // }

    //   document.getElementById(k).style.backgroundColor=" #e4393c";
    //   document.getElementById(k).style.borderColor=" #666666";
      // let lis=document.getElementsByTagName("li");
      // for(let i=0;i<lis.length;i++){
      //   if(i=!k){
      //     lis[i].style.backgroundColor="#fff";
      //   }
      // }

      
    //   document.getElementsByTagName("ui").children.style.borderColor="#ccc";
    },
    // 心选
    xinxuan() {},
    // 购物车
    tocart(){},
    // 去结算页面
    math(){}
  },
  mounted(){
    // console.log(this.$route.query.xid)
    this.getData(this.$route.query.xid);
  }
};
</script>
<style scoped>
  .detail {
    padding: 50px 0 52px;
  }
  .detail > div {
    margin: 15px;
  }
  .van-swipe {
    width: 100%;
    height: auto;
    margin-bottom: 14px;
  }
  .van-swipe img {
    width: 100%;
    height: auto;
  }
  .detail div.heart {
    position: absolute;
    right: 25px;
    top: 80px;
    z-index: 66;
  }
  .van-swipe >>> .van-swipe__indicators {
    left: 90%;
  }

  .van-swipe >>> .van-swipe__indicator--active {
    background-color: #e4393c;
  }
  .detail .dtext {
    margin: 20px 15px;
  }
  .detail hr {
    background-color: #c9c9c9;
  }
  .detail div p {
    font-size: 18px;
    font-weight: bold;
  }
  .detail button,
  strong {
    font-size: 16px;
    border: 0;
  }
  .detail .dimg {
    margin: 0 12px 5px 0 ;
    width: 32px;
    height: 32px;
    border: 1px solid gray;
  }
  .detail .dimg>img:focus{
    transform: scale(2);
    background-color: #e4393c;
  }
  .detail .dsize {
    display: flex;
    justify-content: space-between;
  }
  .dsize button {
    padding: 0 15px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    background-color: #c9c9c9;
    border-radius: 5px;
  }
  .detail ul {
    display: flex;
    text-align: center;
  }
  .detail ul > li {
    display: block;
    height: 32px;
    min-width: 32px;
    line-height: 32px;
    margin: 0 12px 5px 0;
    border: 1px solid #ccc;
    font-size: 18px;
    font-weight: bold;
  }
  .detail ul > li:hover{background-color: #e4393c;border-color: #666666;}
  .detail table {
    width: 100%;
    font-size: 12px;
    border: 1px solid #e6e6e6;
  }
  table tr:nth-child(even) {
    background-color: #e6e6e6;
  }

  table tr > td,
  table tr > th {
    height: 30px;
    padding: 5px;
    text-align: center;
    line-height: 30px;
  }
  .detail .dselect {
    display: block;
    margin-left: 0;
    width: 30%;
    padding: 6px 12px;
    height: 34px;
    line-height: 1.2;
    font-size: 14px;
    color: #555;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .detail .dbtn > button {
    display: inline-block;
    margin: 5px 0;
    width: 100%;
    padding: 8px 15px;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    height: 30px;
    background-color: #000;
  }
  .detail .dbtn > button:last-child{background-color: #eb5219;}
</style>