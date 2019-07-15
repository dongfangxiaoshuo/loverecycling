<template>
  <div class="sellgood">
    <section>
      <header>
        <div class="navgator">
          <div v-for="tag in msg.tab" v-bind:key="tag.active">
            <img :src="'/images/'+tag.imgUrl" alt="">
            <p>{{tag.name}}</p>
          </div>
        </div>
      </header>

      <nav>
        <img src="/images/7.png" alt="">
      </nav>

      <article>
        <img src="/images/22.png" alt="">
        <div v-for="img in msg.headlines" v-bind:key="img.id">
          <img :src="'/images/'+img.imgUrl" alt="">
        </div>
      </article> 


    </section>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: {
      msg: {
        type: Object,
        default: ""
      }
  },
  data(){
    return{

    }
  },
  mounted() {
    // console.log(this.msg)
  },
  computed: {
   
  },
  methods:{
    
  }
 
  
}
</script>


<style scoped lang="scss">
 
  section{
    background: #fff;
    img{
      width: 100%;
      display: block;
    }
    header{
      padding: .1rem .1rem;
      .navgator{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        div{
          text-align: center;
          img{
            width:.87rem;
            height: .71rem;
          }
          p{
            color: #666;
            font-size: .14rem;
            font-weight: 400;
            line-height: .18rem;
            display: inline-block;
          }
        }
      }
    }
  
  }
  .tabbar{
    margin-top:1rem; 
  }
 
  
</style>
