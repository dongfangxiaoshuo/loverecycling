<template>
  <div class="me">
    <Me></Me>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Me from '@/components/Me/MeComment.vue'
import Tabbar from '@/components/Layouts/Tabbar.vue'

export default {
  name: 'me',
  components: {
    Me,
    Tabbar
  }
}
</script>

<style scoped lang="scss">
  .tabbar{
    margin-top:1.6rem; 
  }
</style>

