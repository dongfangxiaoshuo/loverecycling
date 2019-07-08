<template>
  <div class="me">

    <header>
        <h2 class="title">我的</h2>
        <a class="cart" href="javascript:;"></a>
    </header>

    <section class="top">
      <div class="login">
        <img class="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAilBMVEUAAADv7+/v7+/v7+/w8PD5+fnv7+/v7+/u7u7v7+/w8PDu7u7x8fH////u7u7u7u7v7+/v7+/v7+/w8PDw8PDy8vLv7+/y8vL////u7u6ysrLq6urc3NzR0dG1tbW6urrj4+PW1tbs7OzOzs69vb3g4ODBwcHHx8fDw8Pn5+fKysrZ2dm3t7fl5eUuCLLGAAAAGXRSTlMA0vrsTA7dw6mOY1o0A/fzyZ2CWkY6IBQFpdXemAAAA15JREFUaN7Nmut24iAUhSEx97ReWtseEmM0mmpr3//1Zo2dFbKEjbmxxu+nR9lmAydwgHXDS5NVGHDfdRzX50G4SlKPTYU3izhp4NFsAhEvDhyCOEE8TmMWPtMdnsMZG8hTwqkTPHka0nzsU2f8uLfEmlMv+Jr14X1JvVm+9+hblwbgdu3tj4gGEn2wDrwtaDCLN3aX1KURuCm7w+ucRjF/ZUZeHBqJ82JsnybAoPDq0AQ40KV0TpMwT8H4dGki3Dft/FrQZCx0My6iCYk0+YcmZabkT5cmxb3NrTg/Z9l+SGx5834hwPEghKj0zZR/Y19IYs1aPHHSsxNXDmddrPiN/ZAW/sQkMXDgJP5R5Erss4l9k5a49QC+3p6tkNxYUaKYxJePkJCOjZBIK6Q97VhJGpJGgBvtkVao9hht4nKOmexRrSi1sQzPttBkj2rTDsZuCdkVT11/5kKyrYu2FdkJxQ5KVz97aIweZBM50b79PO0Wj0RZJRpKMFIDUmhaqTPcI5+/sbz5ck63BFeHHFJoes4wpnZySkABx5NjSCdQ427ftvwooQDNwItG94vj5cYeSQ0FIjnLdAIZtcnqtj1tKijAGfOoi4C0Sdoj2UAB8lhqElDnt7Snm0DKkj4CtP/elUQ9BBK2MgoAugusWGhXIGSBXYGAcbsCnPl2BXzm2hVwmWNXwLEuYN0i6508yTCtsACfZKKdDBNtilRxLrBAOEGyyw7ClOySMQLynY/TdTpSYKdbF0lS/Svz0FUg+9Su7CQeWFrXLYG90Z6G7ZlUONwfb6RAdcqQPQVYyDREeIN8vDQC4nIE9kh2eLvsOWB0142AEJs79sh/oC4dWQAHSCsR1GeDPdDDQFm+40xzyaE9G0LEygYECFypFHtulcEGhIUdBKRN0h75ISDsVmipWn9Wsafadym58DvJQPJ1LL9b9hQ5GeBgIw7mE9pYYhJQSjAPeVhBwKUEPFLxtl9u7jExKueg3AQ3aaicgwpSODdpNmmYNS6pwdyk5jbMckBRsAK5DRQFB5Q180LJbYjZsMLsTy1EsaH7RL1Ky7iQiUvLtovjtsv7tg8obB+x2D4ksn3MZfug7v8fNY47LH2M497BB9aPdOQ+4NLA41176HFx45Gvnti/PDP++s8fvj7KvhhTDroAAAAASUVORK5CYII=" alt="">
        <div class="login_content">
          <p class="login-now">立即登录</p>
          <img src="/images/23.png" alt="">       
        </div>
      </div>
      <a href="javascript:void(0)" class="setting-container">设置</a>
    </section>

    <article>
      <section class="account">
        <div class="wallet">
          <img src="/images/24.png" alt="">
          <span class="desc">我的钱包</span>
          <span class="count">0.00</span>
        </div>
        <div class="coupon">
          <img src="/images/25.png" alt="">
          <span class="desc">券包</span>
          <span class="count">0张可用</span>
        </div>
        <div class="card">
          <img src="/images/26.png" alt="">
          <span class="desc">银行卡</span>
          <span class="count">未绑定</span>
        </div>

      </section>

      <section class="reservation">
        <p>我的预约<a>查看更多</a></p>
      </section>

      <section class="order">
        <p>我的订单<a>查看更多</a></p>
      </section>

      <section class="single-image">
        <img src="/images/27.png" alt="">
      </section>

      <section class="single-image">
        <img src="/images/28.png" alt="">
      </section>

      <section class="navgator">
        <div class="navgator-item">
          <img src="/images/29.png" alt="">
          <span>回收指南</span>
        </div>
        <div class="navgator-item">
          <img src="/images/30.png" alt="">
          <span>特权专区</span>
        </div>
        <div class="navgator-item">
          <img src="/images/31.png" alt="">
          <span>新人福利</span>
        </div>
      </section>

       <section class="single-image">
        <img src="/images/32.png" alt="">
      </section>

       <section class="navgator">
        <div class="navgator-item">
          <img src="/images/33.png" alt="">
          <span>兑换中心</span>
        </div>
      </section>

   
    </article>

    
  </div>
</template>

<script>


export default {
  name: 'Me',
  data() {
    return {

    }
  },
  methods:{
  }
  
}
</script>


<style scoped lang="scss">
  .me{
    img{
      width: 100%;
      display: block;
    }
    header{
      height: .44rem;
      line-height: .44rem;
      width: 100%;
      min-width: 320px;
      max-width: 750px;
      background: #fff;
      -webkit-box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.05);
      box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.05);
      text-align: center;
      font-size: 0;   
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      max-width: 750px;
      margin: 0 auto;
      z-index: 100;
      background: #fff;
      h2{
        font-size: .18rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 1.8rem;
        display: inline-block;
        font-weight: 400;
      }
      .cart{
        width: .4rem;
        margin-right: .14rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAkCAMAAADM4ogkAAAAb1BMVEUAAAASEhITExMRERERERESEhIUFBQRERETExMSEhITExMSEhISEhIRERERERESEhIVFRUSEhIRERERERERERETExMSEhIVFRUSEhISEhIRERESEhISEhISEhISEhITExMREREVFRURERETExMRERFvpkLTAAAAJHRSTlMA9jWk8dQmlV7meccO+644IOjewLZORBjp2M+6mo6AbFk9LBsQJOz0AAAAoklEQVQ4y+3SyQ6DIBCA4UHRliq4a/eV93/GTkJSYjIsPZj24H8hEz4OEABg6hKIqW41j5FPobXmVRj26KJkWRg5JP6MDMfByiCE7TKw2DhjM7gDZ2KFC8B95kxa+NvfI5m3hrg13ffwmHo7/8PzxMAyzx8F66qc7Cb4BRcwKTyUAtXEcGv8jA1OBxKO80c+4aRIWEvcGuzYC/UCsnvWXnF5AzEiUD9YF+7oAAAAAElFTkSuQmCC) no-repeat 50%;
        background-size: .2rem;
        position: absolute;
        right: 0;
        top: 0;
        height: .44rem;
      }
    }
    .top{
      box-shadow: 0 0.01rem 0.2rem hsla(195,9%,83%,.3);
      padding: .15rem 0 .2rem .14rem;
      height: .48rem;
      line-height: .48rem;
      display: flex;
      margin-top:.44rem; 
      .login{
        display: flex;
        flex: 1 1;
        overflow: hidden;
        .avatar{
          height: .48rem;
          width: .48rem;
          margin-right: .08rem;
        }
        .login_content{
          justify-content: flex-start;
          flex-direction: column;
          margin-top: -.03rem;
          flex: 1 1;
          overflow: hidden;
          display: flex;
          p{
            color: #111;
            font-size: .18rem;
            font-weight: 700;
            line-height: .25rem;
            height: .25rem;
          }
          img{  
            margin-top: .05rem;
            height: .16rem;
            width: 1.12rem;
          }
        }
       
      }
      .setting-container{
        color: #111;
        font-size: .12rem;
        float: right;
        width: .58rem;
        height: .24rem;
        margin-top: .12rem;
        background-image: -webkit-gradient(linear,right top,left top,from(#fff03b),to(#ffd629));
        background-image: -webkit-linear-gradient(right,#fff03b,#ffd629);
        background-image: -o-linear-gradient(right,#fff03b 0,#ffd629 100%);
        background-image: linear-gradient(-90deg,#fff03b,#ffd629);
        border-radius: .12rem 0 0 .12rem;
        text-align: center;
        line-height: .24rem;
        text-decoration: none;
        &::before{
          content: "";
          display: inline-block;
          width: .1rem;
          height: .1rem;
          margin-right: .02rem;
          vertical-align: -.01rem;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAflBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCtoPsAAAAKXRSTlMA2tWwfUIaFpV2bs7K9effwamaj4BqVz4eDNCfYzo2CPPyjEYvLhGgYoZefcQAAADASURBVBjTfZHbbsIwEESPnTh3riHkBqSFlnb+/wdrIfNgFXGkfRlptTOzBI6b1WpzJCbRbqeEiHxtwa5zAlmSfqef2sNeH+lXmmTAVp7G4XGNPFs4qbi0FTDega49FzphlOE515J1eDIZZtWD12TK0sqrQ6MZDiqgNiMs1kCrA9CrZPTjqZT7cbHYBTGsT2aBZXqu/zwO9TJVNekGQ635aclZydyCpYf5awfcc6C7Xgr9RjH7EPN1IXF170v+/44/cfcTAMwWDNQAAAAASUVORK5CYII=) no-repeat 50%/cover;
        }
        &::after{
          content: "";
          display: inline-block;
          width: .05rem;
          height: .08rem;
          margin-left: .04rem;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAAXNSR0IArs4c6QAAALtJREFUKBWFjqsOwkAURBdEIUFgMFUoJA6JxtZjCbofgIavQGMJAoPiA3BIVBUGAaKBhPA4ExCQm92d5LTJnUl7nHNuCylE82BxhH5sOWRQwh3y2LjL4AAvWEADvGnSrEDjPXTAmwrNBOR9hgyCGdCe4AlTqII3bZodSGUZWiYMaqBcPy/7lNsF5Cpnuf9Ff5iB3OQoV5MWlw3ISW5yNOlxKUCjOdTBZMTl9mVs2p+DfPQ1fTWYNa38gnkDV+wkpd7RRpQAAAAASUVORK5CYII=) no-repeat 50%/cover;
        }
      }
    }
    article{
      .account{
        margin-bottom: .1rem;
        overflow: hidden;
        // width: 100%;
        padding: 0 .14rem;
        div{
          width: 33.3333%;
          float: left;
          text-align: center;
          position: relative;
          padding-top: .2rem;
          text-decoration: none;
          img{
            width: .24rem;
            height: .24rem;
          }
          .desc{
            color: #111;
            font-size: .14rem;
            display: block;
            line-height: .2rem;
          }
          .count{
            color: #999;
            font-size: .12rem;
            line-height: .17rem;
            display: inline-block;
          }
          &:nth-child(1), &:nth-child(2){
            &::after{
              content: "";
              width: .01rem;
              height: .35rem;
              position: absolute;
              background-color: #e1e1e1;
              right: 0;
              top: 50%;
              margin-top: -.07rem;
            }
          }     
        }

      }
      .reservation,.order{
        color: #111;
        font-size: .16rem;
        margin: 0 .14rem .1rem;
        background-color: #fff;
        padding: .2rem .12rem 0;
        font-weight: 700;
        line-height: .22rem;
        -webkit-box-shadow: 0 0 0.24rem 0 rgba(0,0,0,.06);
        box-shadow: 0 0 0.24rem 0 rgba(0,0,0,.06);
        text-decoration: none;
        display: block;
        p{
          padding-bottom: .2rem;
          a{
            font-size: .12rem;
            color: #333;
            font-weight: 400;
            line-height: .16rem;
            float: right;
            -webkit-transform: translateY(.03rem);
            -ms-transform: translateY(.03rem);
            transform: translateY(.03rem);
            text-decoration: none;  
            &::after{
              content: "";
              display: inline-block;
              width: .06rem;
              height: .1rem;
              margin-left: .04rem;
              -webkit-transform: translateY(.01rem);
              -ms-transform: translateY(.01rem);
              transform: translateY(.01rem);
              background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAAXNSR0IArs4c6QAAALtJREFUKBWFjqsOwkAURBdEIUFgMFUoJA6JxtZjCbofgIavQGMJAoPiA3BIVBUGAaKBhPA4ExCQm92d5LTJnUl7nHNuCylE82BxhH5sOWRQwh3y2LjL4AAvWEADvGnSrEDjPXTAmwrNBOR9hgyCGdCe4AlTqII3bZodSGUZWiYMaqBcPy/7lNsF5Cpnuf9Ff5iB3OQoV5MWlw3ISW5yNOlxKUCjOdTBZMTl9mVs2p+DfPQ1fTWYNa38gnkDV+wkpd7RRpQAAAAASUVORK5CYII=) no-repeat 50%/cover;
            }
          }
        }
      }
      .navgator {
        margin: 0 .14rem .1rem;
        .navgator-item{
          width: 25%;
          display: inline-block;
          vertical-align: top;
          text-align: center;
          img{
            margin: 0 auto;
          }
          span{
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
 
</style>
