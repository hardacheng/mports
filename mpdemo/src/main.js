import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import Header  from "./components/Header.vue";
import Footer from "./components/Footer.vue";
axios.defaults.baseURL = 'http://127.0.0.1:3333'
Vue.prototype.axios = axios;
Vue.config.productionTip = false

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(MintUI);

import Vant from 'vant';
// import { Notify } from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

Vue.component('Header',Header);
Vue.component('Footer',Footer);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
