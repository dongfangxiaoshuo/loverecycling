<template>
  <div class="index">
    <header>
      <div>北京市<van-icon name="arrow-down"/></div>
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
      banner:{
        id:1,
        imgUrl:"/images/banner.jpg"
      },
      number:50,
      tags:[
        {
          active:1,
          name:"sellPhone",
          tab:[
            {
              id:1,
              name:"苹果",
              imgUrl:"/images/iphone.png"
            },
            {
              id:2,
              name:"小米",
              imgUrl:"/images/mi.png"
            },
            {
              id:3,
              name:"华为",
              imgUrl:"/images/huawei.png"
            },
            {
              id:4,
              name:"荣耀",
              imgUrl:"/images/honor.png"
            },
            {
              id:5,
              name:"OPPO",
              imgUrl:"/images/oppo.png"
            },
            {
              id:6,
              name:"vivo",
              imgUrl:"/images/vivo.png"
            },
            {
              id:7,
              name:"三星",
              imgUrl:"/images/samsung.png"
            },
            {
              id:8,
              name:"更多",
              imgUrl:"/images/more.png"
            },
          ],
          headlines:[
            {
              id:1,
              imgUrl:"/images/sellphone_1.jpg"
            },
            {
              id:2,
              imgUrl:"/images/sellphone_2.jpg"
            },
            {
              id:3,
              imgUrl:"/images/sellphone_3.jpg"
            },
          ]
        },
        {
          active:2,
          name:"sellNote",
          tab:[
            {
              id:1,
              name:"苹果",
              imgUrl:"/images/iphone_computer.png"
            },
            {
              id:2,
              name:"联想",
              imgUrl:"/images/lenovo_computer.png"
            },
            {
              id:3,
              name:"华硕",
              imgUrl:"/images/asus_computer.png"
            },
            {
              id:4,
              name:"戴尔",
              imgUrl:"/images/dell_computer.png"
            },
            {
              id:5,
              name:"ThinkPad",
              imgUrl:"/images/thinkpad_computer.png"
            },
            {
              id:6,
              name:"小米",
              imgUrl:"/images/mi_computer.png"
            },
            {
              id:7,
              name:"惠普",
              imgUrl:"/images/hp_computer.png"
            },
            {
              id:8,
              name:"更多",
              imgUrl:"/images/more.png"
            },
          ],
          headlines:[
            {
              id:1,
              imgUrl:"/images/sellcomputer_1.jpg"
            },
            {
              id:2,
              imgUrl:"/images/sellcomputer_2.jpg"
            },
            {
              id:3,
              imgUrl:"/images/sellcomputer_3.jpg"
            },
          ]
        },
         {
          active:3,
          name:"sellTablet",
          tab:[
            {
              id:1,
              name:"苹果",
              imgUrl:"/images/iphone_tablet.png"
            },
            {
              id:2,
              name:"小米",
              imgUrl:"/images/mi_tablet.png"
            },
            {
              id:3,
              name:"华为",
              imgUrl:"/images/huawei_tablet.png"
            },
            {
              id:4,
              name:"三星",
              imgUrl:"/images/samsung_tablet.png"
            },
            {
              id:5,
              name:"荣耀",
              imgUrl:"/images/hover_tablet.png"
            },
            {
              id:6,
              name:"联想",
              imgUrl:"/images/lenovo_tablet.png"
            },
            {
              id:7,
              name:"诺基亚",
              imgUrl:"/images/nokia_tablet.png"
            },
            {
              id:8,
              name:"更多",
              imgUrl:"/images/more.png"
            },
          ],
          headlines:[
            {
              id:1,
              imgUrl:"/images/selltablet_1.jpg"
            },
            {
              id:2,
              imgUrl:"/images/selltablet_2.jpg"
            },
            {
              id:3,
              imgUrl:"/images/selltablet_3.jpg"
            },
          ]
        }
      ]

    }
  },
  methods:{
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
