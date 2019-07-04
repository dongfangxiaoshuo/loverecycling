<template>
  <div class="search">
    <van-search
      placeholder="搜索您要卖的品牌、机器型号"
      showAction
      shape="round"

    >
    <div slot="action"><van-icon name="cart-o" /></div>
    </van-search>
  </div>
</template>

<script>
export default {
  name: 'search',
 
  
}
</script>


<style scoped lang="scss">
  .search{
    .van-icon{
      font-size:.18rem;
     
    }
    .van-search{
      padding: 10px;
    }
    
  }
  
</style>
