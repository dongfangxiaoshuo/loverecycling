<template>
  <div class="index">
    <Index></Index>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import Index from '@/components/Index/IndexComment.vue'
import Tabbar from '@/components/Layouts/Tabbar.vue'

export default {
  name: 'home',
  components: {
    Index,
    Tabbar
  }
}
</script>
