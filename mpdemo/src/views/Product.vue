<template>
  <div class="product">
    <van-pull-refresh v-model="isLoading" :head-height="80" @refresh="onRefresh" success-text="刷新成功">
      <van-row
        infinite-scroll-distance="10"
        v-infinite-scroll="loadMore"
        infinite-scroll-disabled="busy"
        infinite-scroll-immediate-check="true"
      >
        <van-col span="12" v-for="(i,k) of pimgs" :key="k">
          <div @click="toDetail(i.xid)">
            <!-- 父传子传参跳转详情事件 -->
            <div>
              <img v-lazy="i.image1" alt />
            </div>
            <p>{{i.title}}</p>
            <p>¥{{i.price}}</p>
          </div>
        </van-col>
      </van-row>
      <p v-if="dd" style="textAlign:center;color:red;">这是我的底线咯~</p>
    </van-pull-refresh>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pimgs: [],
      page: 1,
      pagecount: 0,
      busy: false,
      dd: false,
      isLoading:false
    };
  },
  methods: {
    // 封装axios请求
    getData() {
      this.busy = true; //表示服务器繁忙,不能再次发送请求
      this.$indicator.open("加载中...");
      setTimeout(() => {
        this.axios
          .get("/pro/product", { params: { page: this.page } })
          .then((res) => {
            this.pagecount = res.data.pagecount;
            res.data.res.forEach((item) => {
              item.image1 =
                "http://localhost:3333/mpimg/product/" + item.image1;
              this.pimgs.push(item);
            });
          });
        this.busy = false; //表示服务器不忙能再次发送请求
        this.$indicator.close();
      }, 1000);
    },
    // 上拉加载更多
    loadMore: function () {
      this.page++;
      console.log(this.page);
      if (this.page <= this.pagecount) {
        this.getData();
      } else {
        this.dd = true;
      }
    },
    // 下拉刷新
    onRefresh(){
      setTimeout(()=>{
        this.isLoading=false;
        this.page=Math.ceil(Math.random()*(this.pagecount-1));
        //清空产品数组再重新加载
        this.pimgs=[];
        this.getData();
      })
    },
    // 编程式传参跳转详情
    toDetail(e) {
      // console.log(e)
      this.$router.push({path:'/detail',query:{xid:e}})
    },
  },
  mounted() {
    this.getData();
    // this.loadMore();
  },
};
</script>
<style scoped>
.product {
  padding: 50px 0 52px;
}
.van-row .van-col--12 div {
  font-size: 16px;
  color: #666666;
  padding: 5px 8px;
}
.van-row .van-col--12 div img {
  display: block;
  max-width: 100%;
  height: auto;
}
div p:nth-child(2) {
  margin-bottom: 10px;
}
.van-row .van-col--12 div p {
  margin-left: 10px;
}
</style>