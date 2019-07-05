<template>
  <div class="shop">
    <ShopList></ShopList>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import ShopList from '@/components/Shop/ShopListComment.vue'
import Tabbar from '@/components/Layouts/Tabbar.vue'

export default {
  name: 'home',
  components: {
    ShopList,
    Tabbar
  }
}
</script>

<style scoped lang="scss">
  .tabbar{
    margin-top:.1rem; 
  }
</style>
