<template>
  <div class="register">
    <div class="reg">
      <p>注册账户</p>

      <p>完整填写注册内容，了解最新优惠资讯及活动内容，尊享便捷登录。</p>
      <br />
      <p style="color:#c79c6f">*为必填</p>
      <p>手机号码*</p>
      <input type="text" v-model="phone" @blur="ph_check" />
      <br />
      <input type="text" style="width:25%;" />
      <button class="btn1">发送验证码绑定手机</button>
      <p>输入验证码*</p>
      <input type="text" />
      <p>密码*</p>
      <input type="password" placeholder="密码是8到20位数字字母组成" @blur="pwd_check" v-model="password" />
      <p>姓*</p>
      <input type="text" v-model="wname" />
      <p>性别*</p>
      <label for="man" style="margin-right:20px;">
        <input id="man" type="radio" name="sex" value="1" v-model="wsex" />
        先生
      </label>
      <label for="woman">
        <input id="woman" type="radio" name="sex" value="0" v-model="wsex" />
        女士
      </label>

      <br />
      <br />
      <button @click="register">注册</button>
      <br />
      <br />

      <router-link to="/login">
        <button>我要登录</button>
      </router-link>

      <p style="font-size:16px;">
        PORTS尊重并保护本网所有用户的个人隐私权，您的个人资料仅会被PORTS集团旗下品牌所共享。点击
        <a href="#">隐私政策</a>查阅更多详情。
      </p>
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
      wname:"",
      wsex: 2
    };
  },
  methods: {
    // 检测电话号码
    ph_check() {
      let phRegExp = /^1[3-9]\d{9}$/;
      if (phRegExp.test(this.phone)) {
        return true;
      } else {
        this.$toast({
          message: "电话号码输入有误",
          duration: "2000",
        });
        return false;
      }
    },
    // 检测密码
    pwd_check() {
      let pwdRegExp = /^[0-9A-Za-z]{8,20}$/;
      if (pwdRegExp.test(this.password)) {
        return true;
      } else {
        this.$toast({
          message: "密码格式不正确",
          duration: "2000",
        });
        return false;
      }
    },
    // 注册验证
    register() {
      // 电话查重和注册一起做
      this.axios
        .post(
          "/user/register",
          qs.stringify({ phone: this.phone, password: this.password,wname:this.wname,gender:this.wsex})
        )
        .then(
          (res) => {
            console.log(res)
            if(res.data==0){
              this.$messagebox("错误提示","用户名已存在");
              setTimeout(()=>{location.reload();},3000)
              
            }else{
              // 注册成功跳转首页并将数据缓存
              this.$router.push("/")
            }
          }

          
        );
    },
  },
  mounted(){
    // 初始页面需要选定性别,set更改选中状态
    this.$set(document.getElementById("woman"),"checked",true)
  },
};
</script>
<style scoped>
.register {
  padding: 50px 0 52px;
}
.reg {
  padding: 50px 15px 52px;
}
.reg p:first-child {
  font-size: 24px;
  font-weight: bold;
  margin: 20px 0 10px;
}
.reg p ~ p {
  font-size: 18px;
  margin: 10px 0;
}
.reg a {
  color: #333333;
}
.reg input {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.reg .btn1 {
  height: 36px;
  color: #ffffff;
  background-color: #666666;
  margin: 15px 0;
  outline: none;
  border-radius: 5px;
  border: 1px solid #666666;
}
.reg button ~ button,
.reg button:last-child {
  width: 100%;
  height: 36px;
  background-color: #000;
  color: #fff;
  outline: none;
  padding: 8px 15px;
  border-radius: 0;
  margin: 0;
}
.reg #man,
.reg #woman {
  display: inline-block;
  width: 20px;
  height: 20px;
  vertical-align: bottom;
  /* margin: 0;
  padding: 0; */
}
</style>