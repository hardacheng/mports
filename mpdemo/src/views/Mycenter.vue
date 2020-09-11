<template>
  <div class="mycenter">
    <div v-if="this.$store.state.isLogin">
      <p>尊贵的【{{this.$store.state.wname}}】 欢迎您~~</p>
      <button @click="drop">退出登录</button>
    </div>
    <div v-else>
      <p>对不起,您还未登录~</p>
    </div>
    
  </div>
</template>

<script>
import {mapState} from "vuex"
export default {
  data(){
    return {
      // Login:false,
      // name:''
    }
  },
  computed:{
    // ...mapState(['isLogin','wname'])
  
  },
  mounted(){

    console.log(this.$store.state.isLogin)

    console.log(this.$store.state.wname)

   

  },
  methods:{
    drop(){
      this.$store.commit('drop_mutation')
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
  .mycenter{padding: 50px 0 52px;text-align: center;}
  .mycenter p{margin: 50px 0;}
  .mycenter button {
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