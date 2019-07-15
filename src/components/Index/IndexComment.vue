<template>
  <div class="index">
    <header @click="$router.push({ path:'/choosecity'})">
      <div>{{my_city?my_city:"定位失败,点击获取"}}<van-icon name="arrow-down"/></div>
      <Search></Search>
    </header>

    <nav>
      <van-tabs v-model="active" color="#ffd33f" sticky :offset-top="number" >
        <van-tab title="推荐"><Recommend></Recommend></van-tab>
        <van-tab title="卖手机"><SellGood :msg="tags[0]"></SellGood></van-tab>
        <van-tab title="卖笔记本"><SellGood :msg="tags[1]"></SellGood></van-tab>
        <van-tab title="卖平板"><SellGood :msg="tags[2]"></SellGood></van-tab>
      </van-tabs>
    </nav>

    
  </div>
</template>

<script>
import Search from '@/components/Layouts/Search.vue'
import Recommend from '@/components/Index/Recommend.vue'
import SellGood from '@/components/Index/SellGood.vue'

export default {
  name: 'Index',
  components: {
    Search,Recommend,SellGood
  },
  data() {
    return {
      active: 0,
      number:50,
      tags:[],
      my_city:"",
    }
  },
  methods:{
   
  },
  mounted() {
    
  },
  created(){
    var that = this;
    //地理定位
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        that.my_city=r.address.city;
          // console.log(r.address.city);
          // alert('您的位置：'+r.point.lng+','+r.point.lat);
      }
      else {
          alert('failed'+this.getStatus());
      }        
    },{enableHighAccuracy: true})
    //Api
    this.$axios.get("get_index_informations").then(res=>{
      // console.log(res.data);  
      this.tags = res.data;
    }).catch(error=>{
      console.log(error)
    });
    

  }
  
}
</script>


<style scoped lang="scss">
  .index{
    header{
      position: fixed;
      height: .5rem;
      width: 100%;
      top:0;
      left:0;
      z-index: 2000;
      background: #fff;
      display: flex;

      div{
        font-size:.13rem;
        padding: .15rem 0 0rem .15rem;
        width:3rem;
      }
      .search{
        padding: 0;
        line-height: 100%;
        width: 10rem;
      }
    }
    nav{
      .van-tabs{
        position: relative;
        top: .5rem;
        left:0;
        .van-tabs__wrap{ 
          position: fixed;
          top:.54rem;
          left:0;
          z-index: 2000;
        }
      }     
    }
  }
  
 
</style>
