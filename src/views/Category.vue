<template>
  <div class="category">
    <Return></Return>
    <Category></Category>
  </div>
</template>

<script>
import Return from '@/components/Layouts/Return.vue'
import Category from '@/components/Layouts/CategoryComment.vue'


export default {
  name: 'category',
  components: {
    Return,
    Category
  }
}
</script>

<style scoped lang="scss">

</style>

