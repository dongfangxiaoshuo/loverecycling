<template>
  <div class="login">
    <Return title="登录"></Return>
    <div class="banner">
      <img src="/images/34.png" alt="">
    </div>
    <div class="tab" id="tab">
      <span class="" @click="changeTab=1" :style="{background:(changeTab==1?'#f9e72c':'#fff')}">手机号快捷登录</span>
      <span class="" @click="changeTab=2" :style="{background:(changeTab==2?'#f9e72c':'#fff')}">账号密码登录</span>
    </div>

    <div class="input-contanier" v-show="changeTab==1" >
       <van-cell-group>
        <van-field
          v-model="phone"
          center
          clearable
          type:number
          label="手机号"
          placeholder="请输入手机号"
        >
          <van-button slot="button" size="small" type="default">获取验证码</van-button>
        </van-field>

        <van-field
          v-model="sms"
          label="验证码"
          placeholder="请输入验证码"
        />
      </van-cell-group>
    </div>

    <div class="input-contanier" v-show="changeTab==2" >
       <van-cell-group>
        <van-field
          v-model="username"
          center
          clearable
          type:number
          label="账号"
          placeholder="爱回收账号"
        >
        </van-field>

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="密码"
        />
      </van-cell-group>
    </div>
   

    <div class="add-tip">
      <van-checkbox v-model="checked" checked-color="#f9e72c">
        我已详细阅读并同意<a href="https://m.aihuishou.com/m/index.html#/help/treaty">用户协议</a>和<a href="https://m.aihuishou.com/m/index.html#/help/privacy">隐私政策</a>
      </van-checkbox>
    </div>

    <div class="sumbit" @click="toLogin()">
      <van-button type="primary" size="large">登录</van-button>
      <div class="tips">未注册过的手机号将自动创建爱回收账户</div>
    </div>
   
  </div>
</template>

<script>
import Return from '@/components/Layouts/Return.vue'


export default {
  name: 'home',
  components: {
    Return
  },
  data(){
    return{
      phone:'',
      sms:'',
      checked: false,
      username:'',
      password:'',
      changeTab:1
    }
  },
  methods:{
    toLogin(){
      if(this.changeTab==1){
        this.$axios.post("/to_login",{phone:this.phone,sms:this.sms}).then(res=>{
          console.log(res.data);  
        }).catch(error=>{
          console.log(error)
        });
      }else{
        this.$axios.post("/to_login",{username:this.username,password:this.password}).then(res=>{
          console.log(res.data);  
        }).catch(error=>{
          console.log(error)
        });
      } 
    }
  },
  
}
</script>

<style scoped lang="scss">
  .login{
    img{
      display: block;
      width: 100%;
    }
    .banner{
      margin-top:.5rem; 
      padding-bottom: .1rem;
    }
    .tab{
      width: 2.6rem;
      height: .28rem;
      border: .01rem solid #f9e72c;
      border-radius: .28rem;
      margin: 0 auto .1rem;
      overflow: hidden;
      span{
        font-size: .14rem;
        width: 50%;
        float: left;
        line-height: .28rem;
        text-align: center;
        border-radius: .28rem;  
      }
    }
    .van-button--default{
      background: #e6e6e6;
      border: .01rem solid #e6e6e6;
      color: #999;
    }
    .input-contanier{
      min-height:1rem; 
    }
    .add-tip{
      font-size: .12rem;    
      padding: .15rem 0 .15rem .15rem;
      color: #797979
    }
    .van-icon-success{
      height: .18rem;
      width: .18rem;
    }
    .van-icon-success:before{
      color:#000;      
    }
    .sumbit{
      padding:0rem .15rem; 
      .van-button--large{
        height: .38rem;
        line-height: .38rem;
        font-size: .14rem;
        color: #999;
        background: #e6e6e6;
        border: .01rem solid #e6e6e6;
        border-radius: .04rem;
      }
      .tips{
        font-size: .12rem;
        color: #666;
        padding: .1rem .14rem;
        background-color: #f9faff;
        text-align: center;
      }
    }
      
   
  }
</style>

