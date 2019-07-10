<template>
  <div class="category">
    <header>
      <van-search placeholder="苹果  iPhone X" v-model="value" />
      <div class="tab">
        <van-tabs v-model="active" sticky :swipe-threshold="number" color="#ffd33f" :offset-top="top">
          <van-tab v-for="title_name in title" v-bind:key="title_name.id" :title="title_name">
            <Sidebar :msg="active"></Sidebar>
          </van-tab>
        </van-tabs>
      </div>
      
    </header>
  </div>
</template>

<script>
import Sidebar from '@/components/Layouts/Sidebar.vue'

export default {
  name: 'category',
  components: {
    Sidebar
  },
  data(){
    return{
      value:"",
      title:['卖手机','卖笔记本','卖平板','摄影摄像','智能数码'],
      active:0,
      number:5,
      top:44,
    }
  },
  
}
</script>

<style scoped lang="scss">
  .category{
    header{
      .van-search{
        margin-left:.3rem; 
        padding: .05rem 0 .05rem .3rem;
        position: fixed;
        top:0;
        left:0;
        z-index: 100;
        height: .44rem;
        .van-cell{
          z-index: 101;
          .van-cell__value{
            font-size: .12rem;
          }
          
        }
      }
      .tab{
        margin-top:.44rem; 
      }
      
    }
  }

</style>
