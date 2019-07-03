<template>
  <div class="index">
    <header>
      <div>北京市<van-icon name="arrow-down"/></div>
      <Search></Search>
    </header>

    <nav>
      <van-tabs v-model="active" color="#ffd33f">
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
      }

    };
  }
  
}
</script>


<style scoped lang="scss">
  header{
    position: relative;
    top:0;
    left:0;
    div{
      font-size:.13rem;
      padding: .15rem;
    }
    .search{
      position: absolute;
      padding: 0;
      top:0;
      right: .1rem;
      width: 3rem;
    }
  }
  nav{
    position: relative;
    top:0;
    left:0;
  }
</style>
