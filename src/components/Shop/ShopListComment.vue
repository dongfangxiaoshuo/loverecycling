<template>
  <div class="shoplist">
    <header>
      <h2 class="title">服务站</h2>
     
    </header>
     <div class="tab">
        <van-tabs v-model="active" sticky :offset-top="number">
          <van-tab  :title="'附近'+'('+ address_count+')'"><Shop :msg="area"></Shop></van-tab>
          <van-tab v-for="(address,index) in area" v-bind:key="address.id" :title="address.name+'('+address.addresses.length+')'"><Shop  :msg="area[index]"></Shop></van-tab>       
        </van-tabs>
        
      </div>
  </div>
</template>

<script>
import Shop from '@/components/Shop/ShopComment.vue'

export default {
  name: 'shoplist',
 components: {
    Shop,
  },
  data(){
    return{
      active:0,
      address_count:8,
      number:44,
      area:[
        {
          name:"东城区",
          addresses:[
            {
              id:1,
              name:"北京国瑞店",
              address:"北京市东城区崇文门外大街18号国瑞购物中心LG层京东胜道体育对面",
              tag:[1,2]
            },
            {
            id:2,
            name:"北京东方银座店",
            address:"北京市东城区东直门外大街48号银座mall地下一层（扶梯口处）",
            tag:[1,2]
            },
          ]
        },
        {
          name:"西城区",
          addresses:[
            {
              id:1,
              name:"北京宣武天虹店",
              address:"北京市西城区广安门外大街168号天虹商场一层服务台旁",
              tag:[1,2]
            },
            {
            id:2,
            name:"北京崇光百货华联店",
            address:"北京市西城区宣武门外大街8号庄胜崇光百货商场本馆地下1层（华联超市服务台旁）",
            tag:[1,2]
            },
          ]
        },
        {
          name:"朝阳区",
          addresses:[
            {
              id:1,
              name:"北京太阳宫凯德店",
              address:"北京市朝阳区太阳宫中路12号凯德mall地下一层（临近海底捞）",
              tag:[1,2]
            },
            {
            id:2,
            name:"北京金地店",
            address:"北京市朝阳区建国路91号金地中心C座地下一层（靠近地铁通道处）",
            tag:[1,2]
            },
          ]
        },
        {
          name:"丰台区",
          addresses:[
            {
              id:1,
              name:"北京丰台万达店",
              address:"北京市丰台区丰科路与五圈路交叉口万达商场B1层1003（吉野家对面、地铁9号线丰台科技园C口）",
              tag:[1,2]
            },
            {
            id:2,
            name:"北京西铁营万达店",
            address:"北京市丰台区西铁营中路1号西铁营万达2号门",
            tag:[1,2]
            },
          ]
        }
      ]
    }
     
        
      
    
  }
  
}
</script>

<style scoped lang="scss">
  .shoplist{
    header{
      box-shadow: none;
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      max-width: 750px;
      margin: 0 auto;
      z-index: 100;
      height: .44rem;
      line-height: .44rem;
      width: 100%;
      min-width: 320px;
      max-width: 750px;
      background: #fff;
      -webkit-box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.05);
      box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.05);
      text-align: center;
      font-size: 0;
      .title{
        font-size: .18rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 1.8rem;
        display: inline-block;
        font-weight: 400;
      }
      
    }
    .tab{
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
