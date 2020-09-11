<template>
  <div class="login">
    <div class="logins" v-if="this.$store.state.isLogin==false">
      <!--   -->
      <p>登录账户</p>

      <p>请输入注册的手机/邮箱和密码</p>
      <br />
      <p>手机号码/邮箱</p>
      <input type="text" v-model="phone" />
      <p>密码</p>
      <input type="password" v-model="password" />
      <p>
        <router-link to="/">忘记密码</router-link>
      </p>
      <br />
      <button @click="login">确认提交</button>
      <br />
      <br />
      <p>还没有账号吗？现在注册</p>
      <router-link to="/register">
        <button>注册新账户</button>
      </router-link>
    </div>
    <div v-else style="marginTop:100px">
      <p style="textAlign:center">您已经登录了~</p>
    </div>
  </div>
</template>
<script>
import qs from "qs";
export default {
  data() {
    return {
      phone: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.axios
        .post(
          "/user/login",
          qs.stringify({ phone: this.phone, password: this.password })
        )
        .then(res => {
           console.log(res)
          if (res.data.code == 1) {
            console.log(res.data.res)
            this.$store.commit('login_mutation',res.data.res)
            localStorage.setItem('isLogin',true)
            localStorage.setItem('phone',res.data.res.phone)
            localStorage.setItem('password',res.data.res.password)
            localStorage.setItem('wname',res.data.res.wname)
            this.$router.push("/");
            // 因为vue是单页面应用,登录后跳转个人中心不刷新缓存,而缓存读取需要在页面刷新一次
            // location.reload();

          } else {
            this.$messagebox("错误提示", "电话号码或密码错误");
            setTimeout(() => {
              location.reload();
            }, 3000);
          }
        });
    },
    mounted(){
      console.log(this.$store.state.isLogin)
    }
  },
};
</script>
<style scoped>
.login {
  padding: 50px 0 52px;
}
.logins {
  padding: 50px 15px 52px;
}
.logins p:first-child {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 10px;
}
.logins p ~ p {
  font-size: 18px;
  margin: 10px 0;
}
.logins a {
  color: #333333;
}
.logins input {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.logins button {
  width: 100%;
  height: 36px;
  background-color: #000;
  color: #fff;
  outline: none;
  padding: 8px 15px;
  border-radius: 0;
  margin: 0;
}
</style>
