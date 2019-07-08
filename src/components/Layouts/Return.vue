<template>
  <div class="return">
    <h2 class="title">{{title}}</h2>
    <span class="back" @click="$router.go(-1)"></span>
  </div>
</template>

<script>
export default {
  name: 'return',
  props:{
    title:{
      type:String,
      default:''
    }
  }
 
  
}
</script>


<style scoped lang="scss">
  .return{
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
    background: #fff;
    box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.05);
    text-align: center;
    font-size: 0;
    .title{
      font-size: .18rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 1.8rem;
      display: inline-block;
      font-weight: 400;
    }
    .back{
      position: absolute;
      left: 0;
      top: 0;
      width: .5rem;
      height: .44rem;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAMAAADT08pnAAAAP1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzJYIvAAAAFHRSTlMA+Tzd9Oq/ZlEtE6x+HwuU0N+X0TF2eHEAAACQSURBVCjPlZNbDoUgDAWv4gvfeLv/tZryY8LUVM7nNAGmpT87bbD52IjJDxGrMA9iFmJQ3oBPnfJuKvkqmhQLvC+ZD3PBtzPzC1Z9vnaklfK+pZXm3EwrWXbTStY6q/DZ6p/54Vg9CbBCwTnKuRzP9QTZEiQmNBFtRy4MCqP1Xfl96l1ThSvWAK7eqtH1dZ1vgBEQsMaM/J8AAAAASUVORK5CYII=) no-repeat 50%;
      background-size: .12rem;
    }
  }  
</style>
