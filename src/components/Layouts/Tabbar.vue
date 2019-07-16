<template>
  <div class="tabbar">
    <van-tabbar v-model="active" active-color="#7d7e80">
      <van-tabbar-item icon="home-o" to="/" >首页</van-tabbar-item>
      <van-tabbar-item icon="phone-o" to="/ofnew">换新机</van-tabbar-item>
      <van-tabbar-item icon="shop-o" to="/shop" >服务站</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/me">我的</van-tabbar-item>
    </van-tabbar>




  </div>

</template>



<script>
export default {
  name: 'tabbar',
  data() {
    return {
      active: 0
    }
  },
  created(){
    
  },
  methods:{
    
  }
 
  
}
</script>


<style scoped lang="scss">
  .tabbar{
    margin-top:1.6rem; 
  }
  
</style>
