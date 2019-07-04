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

    <!-- <div data-v-33502c9a="" class="van-tabs van-tabs--line">
      <div class="van-tabs__wrap van-hairline--top-bottom">
        <div role="tablist" class="van-tabs__nav van-tabs__nav--line" style="border-color: rgb(255, 211, 63);">
          <div role="tab" aria-selected="true" class="van-tab van-tab--active">
            <span class="van-ellipsis">推荐</span>
          </div>
          <div role="tab" class="van-tab"><span class="van-ellipsis">卖手机</span></div>
          <div role="tab" class="van-tab"><span class="van-ellipsis">卖笔记本</span></div>
          <div role="tab" class="van-tab"><span class="van-ellipsis">卖平板</span></div>
          <div class="van-tabs__line" style="background-color: rgb(255, 211, 63); width: 47px; transform: translateX(47px) translateX(-50%);"></div>
        </div>
        </div>
    </div>
       -->


    
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
  header{
    position: fixed;
    height: .5rem;
    width: 100%;
    top:0;
    left:0;
    z-index: 2000;
    background: #fff;
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
    .van-tabs{
      position: relative;
      top: .535rem;
      left:0;
       .van-tabs__wrap{ 
        position: fixed;
        top:.54rem;
        left:0;
        z-index: 2000;
      }
    }
     
    
    
    
  }
</style>
