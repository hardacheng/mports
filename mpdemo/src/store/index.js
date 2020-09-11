import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogin: localStorage.getItem('isLogin') || false,
    phone: localStorage.getItem('phone') || '',
    password: localStorage.getItem('password') || '',
    wname:localStorage.getItem('wname') || ''

  },
  mutations: {
    // 登录
    login_mutation(state,selfs) {
      state.isLogin = true;
      state.wname=selfs.wname;
      console.log(selfs)
      console.log(state.wname,typeof state.wname)
    },
    // 退出登录修改state中的islogin的值并清除 localStorage
    drop_mutation(state) {
      state.isLogin = false;
      localStorage.clear();
      // localStorage.setItem('isLogin',false)
      // localStorage.removeItem('phone')
      // localStorage.removeItem('password')
      // localStorage.removeItem('wname')
    }

  },
  actions: {
    //发送请求
  },
  modules: {
    // 接收数据
  }
})
