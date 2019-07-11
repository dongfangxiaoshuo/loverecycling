<template>
  <div class="sidebar">
    <div class="commin">
      <div class="commin_item" v-for="model in recycled_models " v-bind:key="model.id">
        <p>
          <span>{{model.id}}</span>
          <span>{{model.model_name}}</span>
        </p>
      </div>
    </div>
    <van-sidebar v-model="activeKey" >
      <van-sidebar-item title="推荐" @click="getRecommend"></van-sidebar-item>
      <van-sidebar-item v-for="title in titles" v-bind:key="title.id"  :title="title.brand_name" @click="getBrandGood(title.id)"></van-sidebar-item>
    </van-sidebar>

    



  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
    return {
      activeKey: 0,
      titles:[],
      recycled_models:[],
    };
  },
  props:{
    msg:Number,
    default:''
  },
  methods:{
    getRecommend(){
      this.$axios.get("category/productInformation?&type="+this.msg+"&brand=0").then(res=>{
        // console.log(res);
      }).catch(error=>{
        console.log(error)
      });  
    },
    getBrandGood(id){
      this.$axios.get("category/productInformation?&type="+this.msg+"&brand="+id).then(res=>{
        this.recycled_models=res.data;
      }).catch(error=>{
        console.log(error)
      });  
    }
  },
  created(){
    this.$axios.get("category?type="+this.msg).then(res=>{
      // console.log(res);
      this.titles=res.data;
    }).catch(error=>{
      console.log(error)
    });
    this.$axios.get("category/productInformation?&type="+this.msg+"&brand=0").then(res=>{
      // console.log(res);
    }).catch(error=>{
      console.log(error)
    });  
  },
}
</script>


<style scoped lang="scss">
  .sidebar{
    .van-sidebar-item{
      text-align: center;
      

    }
    .van-sidebar-item--select{
      border-color:#ffd33f;
    }
    .commin{
      float: right;
      width: 77%;
      height: 100%;
      overflow-y: scroll;
      overflow-x: hidden;
      .commin_item{
        float: left;
        width: 100%;
        padding: .17rem 0 .17rem .13rem;
        border-bottom: 1px solid #eee;
        p{
          line-height: .2rem;
          font-size: .14rem;
          color: #111;
          span{
            margin-right: .1rem;
          }
        }
      }

    }
  }
 
</style>
