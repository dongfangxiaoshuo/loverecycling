<template>
  <div class="index">
    <header>
      <div>北京市<van-icon name="arrow-down"/></div>
      <Search></Search>
    </header>

    <nav>
      <van-tabs v-model="active" color="#ffd33f" sticky :offset-top="number">
        <van-tab title="推荐"><Recommend></Recommend></van-tab>
        <van-tab title="卖手机"></van-tab>
        <van-tab title="卖笔记本"></van-tab>
        <van-tab title="卖平板"></van-tab>
      </van-tabs>
    </nav>

    
  </div>
</template>

<script>
import Search from '@/components/Layouts/Search.vue'
import Recommend from '@/components/Index/Recommend.vue'

export default {
  name: 'Index',
  components: {
    Search,Recommend
  },
  data() {
    return {
      active: 0,
      banner:{
        id:1,
        imgUrl:"/images/banner.jpg"
      },
      number:50

    };
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
