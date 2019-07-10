<template>
  <div class="choosecity">
    <Return></Return>
    <Category></Category>
  </div>
</template>

<script>
import Return from '@/components/Layouts/Return.vue'
import Category from '@/components/Layouts/CategoryComment.vue'


export default {
  name: 'choosecity',
  components: {
    Return,
    Category
  }
}
</script>

<style scoped lang="scss">

</style>

