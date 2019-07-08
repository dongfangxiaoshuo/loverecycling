<template>
  <div class="choosecity">
    <Return title="选择城市"></Return>
    <Choosecity></Choosecity>
  </div>
</template>

<script>
import Return from '@/components/Layouts/Return.vue'
import Choosecity from '@/components/Index/ChoosecityComment.vue'


export default {
  name: 'choosecity',
  components: {
    Choosecity,
    Return
  }
}
</script>

<style scoped lang="scss">

</style>

