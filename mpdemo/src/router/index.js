import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Product from "../views/Product.vue" 
import Detail from "../views/Detail.vue"
import Shopcar from "../views/Shopcar.vue"
import Mycenter from "../views/Mycenter.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/mycenter',
    name: 'Mycenter',
    component: Mycenter
  },
  {
    path: '/shopcar',
    name: 'Shopcar',
    component: Shopcar
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/product',
    name: 'Product',
    component: Product
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
