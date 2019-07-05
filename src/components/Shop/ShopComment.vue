<template>
  <div class="shopcomment">
    <!-- msg值为数组(附近全部数据) -->
    <div v-if="msg.constructor === Array" >
      <div  v-for="shops in msg" v-bind:key="shops.id">
        <div class="shop_item" v-for="shop in shops.addresses" v-bind:key="shop.id">
        <div class="shop_title"><h5>{{shop.name}}</h5><van-icon name="arrow" /></div>
        <div class="shop_address"><p>{{shop.address}}</p></div>
        <span class="shop_tag" v-for="tag in shop.tag" v-bind:key="tag.id">    
          <span v-if="tag==1">回收</span>
          <span v-if="tag==2">以旧换新</span>
        </span>
        <div class="shop_actions">
          <span><van-icon name="phone-o" />联系服务站</span>
          <span><van-icon name="location-o" />查看地图</span>
        </div>
          
      </div>
      </div>
    </div>

    <!-- msg值为对象(区县数据) -->
     <div v-else >
      <div class="shop_item" v-for="shop in msg.addresses" v-bind:key="shop.id">
        <div class="shop_title"><h5>{{shop.name}}</h5><van-icon name="arrow" /></div>
        <div class="shop_address"><p>{{shop.address}}</p></div>
        <span class="shop_tag" v-for="tag in shop.tag" v-bind:key="tag.id">    
          <span v-if="tag==1">回收</span>
          <span v-if="tag==2">以旧换新</span>
        </span>
        <div class="shop_actions">
          <span><van-icon name="phone-o" />联系服务站</span>
          <span><van-icon name="location-o" />查看地图</span>
        </div>
          
      </div>
    </div>

    
    
  </div>
</template>

<script>

export default {
  name: 'shop',
   props: {
      msg: {
        
      },
     
    },
    created(){
      
    },
  data(){
    return{        
    }  
  }
  
}
</script>

<style scoped lang="scss">
  .shopcomment{
    border-top: .08rem solid #f9faff;
    div{
      .shop_item{
        display: block;
        padding: .14rem .15rem 0 .15rem;
       

        .shop_title{
          display: flex;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -ms-flex-align: center;
          align-items: center;
          padding-right: .12rem;
          background-size: .06rem .1rem;
        }
        .shop_address{
          font-size: .12rem;
          color: #666;
          margin: .04rem 0;
          padding-right: .6rem;
        }
        .shop_tag{
          span{
            font-size: .1rem;
            display: inline-block;
            color: #fff;
            height: .16rem;
            line-height: .16rem;
            padding: 0 .06rem;
            border-radius: .08rem;
            background: -webkit-gradient(linear,right top,left top,from(#ff6830),to(#ff4949));
            background: -webkit-linear-gradient(right,#ff6830,#ff4949);
            background: -o-linear-gradient(right,#ff6830 0,#ff4949 100%);
            background: linear-gradient(270deg,#ff6830,#ff4949);
            margin-left: .05rem;
          }
         
        }
        .shop_actions{
          font-size: .13rem;
          display: -ms-flexbox;
          display: flex;
          -ms-flex-pack: justify;
          justify-content: space-between;
          -ms-flex-align: center;
          align-items: center;
          border-top: 1px solid #ebebeb;
          margin-top:.1rem; 
          span{
            color: #666;
            -ms-flex: 1 1;
            flex: 1 1;
            text-align: center;
            height: .4rem;
            line-height: .4rem;
            padding-left: .18rem;
            background-size: .14rem .14rem;
          }
        }
      }
    }
   
  }

</style>
