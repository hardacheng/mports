<template>
  <div class="login">
    <div class="logins">
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
        .then((res) => {
          if (res.data == 1) {
            this.$router.push("/");
          } else {
            this.$messagebox("错误提示", "电话号码或密码错误");
            setTimeout(() => {
              location.reload();
            }, 3000);
          }
        });
    },
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
