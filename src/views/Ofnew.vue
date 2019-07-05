<template>
  <div class="index">
    <Ofnew></Ofnew>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Ofnew from '@/components/Ofnew/OfnewComment.vue'
import Tabbar from '@/components/Layouts/Tabbar.vue'

export default {
  name: 'home',
  components: {
    Ofnew,
    Tabbar
  }
}
</script>

<style scoped lang="scss">
  .tabbar{
    margin-top:.5rem; 
  }
</style>
