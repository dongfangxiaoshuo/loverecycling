<template>
  <div class="recommend">
    <section>

      <header>
        <img :src="banner.imgUrl" alt="">

        <div>
          <dl>
            <dt>
              <div class="left">
                <p>
                  <i>¥</i>
                  <span>100</span>
                </p>
              </div>

              <div class="right">
                <a href="/#/category"><p>选择机型查看优惠</p></a>
                <div>
                  <span>最高加价：</span>
                  <p>
                    <i>¥</i>
                    <span>100</span>
                  </p>
                </div>
              </div>

            </dt>

            <dd>
              <div class="countDown">
                <p>
                  <span>{{day}}</span>
                  <i>天</i>
                  <span>{{hour}}</span>
                  <i>时</i>
                  <span>{{minute}}</span>
                  <i>分</i>
                  <span>{{second}}</span>
                  <i>秒</i>
                </p>
                <i class="rule" @click="dialog"></i>
              </div>

              <div class="recoveryBtn" @click="$router.push({path:'/category'})">
                立即回收
              </div>
            </dd>
          </dl>

        </div>
      </header>

      <article>

        <div> 
          <img src="/images/1.png" alt="">
        </div>
        <div class="tag_wrap">
          <div class="tag" v-for="tag in tags" :key="tag.id">
            <img :src="tag.imgUrl" alt="">
            <span>{{tag.name}}</span>
          </div>
        </div>
        <div>
          <img src="/images/7.png" alt="" @click="$router.push({path:'/category'})">
        </div>

        <div class="main">

          <div class="ofn_service">
            <img src="/images/8.png" alt="" @click="$router.push({path:'/ofnew'})">
            <div class="ofn_service_content" @click="$router.push({path:'/ofnew'})">
              <div class="ofn_service_content_left">
                <p>旧机估价</p>
                <img src="/images/9.jpg" alt="">
                <h5>苹果 IPhone X</h5>
                <span>最高回收价 <b>￥5673</b></span>
              </div>
              <div class="ofn_service_content_right">
                <p>新机原价</p>
                <img src="/images/10.png" alt="">
                <div class="new-tag">最高省<span>150</span></div>
                <h5>苹果 IPhone XR</h5>
                <span>新机原价 <b>￥5288</b>起</span>
              </div>
              
            </div>
            <div class="ofn_service_bottom">
                <div>
                  <div class="tag-money"></div>
                  预计到店获得
                  <span>
                    <i>¥</i>
                    535
                  </span>
                </div>
                <van-button type="default" size="small">去看看</van-button>
              </div>
          </div>

          <div class="more">
            <div class="more_title">更多火爆新机</div>
            <div class="replace-list">
              <div class="replace-item" v-for="replace in replaces" v-bind:key="replace.id">
                <img :src="replace.imgUrl" alt="">
                <h5>{{replace.name}}</h5>
                <p><span>￥{{replace.price}}</span>起</p>
                <div class="replace-tag">最高省<span>{{replace.mit}}</span></div>
              </div>
            </div>   
            <div class="serve-list"><span>• 全国联保</span><span>• 省钱省心</span><span>• 不限旧机</span><span>• 闪电到货</span></div>

          </div>

          <div class="coral-text">
            <swiper :options="swiperOption" ref="mySwiper">
              <swiper-slide>北京市马先生 以￥2999 喜提荣耀20 8GB 256GB 幻夜黑 全网通</swiper-slide>
              <swiper-slide>广州市张先生 以￥2799 喜提红米 K20 Pro 8GB 128GB 冰山蓝 全网通</swiper-slide>
              <swiper-slide>南昌市张先生 以￥5488 喜提Apple iPhone XR 128GB 黑色 双卡双待</swiper-slide>
            </swiper>
          </div>

          <div class="hot_events">
            <img src="/images/15.png" alt="">
            <div>
              <img src="/images/16.png" alt="">
              <img src="/images/17.png" alt="">
            </div>
          </div>

          <div class="public_welfare">
            <img src="/images/18.png" alt="">
            <div>
              <img src="/images/19.png" alt="">   
            </div>
          </div>

          <div class="understand">
            <img src="/images/20.png" alt="">
            <img src="/images/21.png" alt="">
          </div>

          <div class="partners">
            <img src="/images/22.jpg" alt="">
          </div>

        </div>

       

      </article>

    </section>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  data(){
    return{
      banner:{
      id:1,
      imgUrl:"/images/banner.jpg"
      },
      tags:[
        {
          id:1,
          name:"卖手机",
          imgUrl:"/images/2.png"
        },
        {
          id:2,
          name:"卖笔记本",
          imgUrl:"/images/3.png"
        },
        {
          id:3,
          name:"卖平板",
          imgUrl:"/images/4.png"
        },
        {
          id:4,
          name:"摄影摄像",
          imgUrl:"/images/5.png"
        },
        {
          id:5,
          name:"智能数码",
          imgUrl:"/images/6.png"
        },
      ],
      replaces:[
        {
          id:1,
          name:"荣耀 8X",
          imgUrl:"/images/12.jpg",
          price:1399,
          mit:150
        },
        {
          id:2,
          name:"红米 Note 7",
          imgUrl:"/images/13.jpg",
          price:939,
          mit:100
        },
        {
          id:3,
          name:"荣耀 20i",
          imgUrl:"/images/12.jpg",
          price:1399,
          mit:100
        },
      ],
      swiperOption: {
        direction: 'vertical',
        speed:2000,
        autoplay:true,
        loop:true,
      },
      day:'',
      hour:'',
      minute:'',
      second:'',
      isEnd:false,//倒计时是否结束
      endTime:'2019-08-01 08:00:00',//应为接口获取到的结束时间
      
    }
  },
  mounted() {
    
  },
  created(){
     let that = this;
		that.setEndTime();
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    
  },
  methods:{
    dialog(){
     this.$dialog({
      title: '活动规则',
      message: 
      '1.活动时间：优惠领取后7日内有效，仅限在爱回收官网、门店使用；\n2.限时加价券：\n1）实际回收金额满100元，可使用5元加价券\n2）实际回收金额满500元，可使用20元加价券\n3）实际回收金额满1000元，可使用30元加价券\n4）实际回收金额满2000元，可使用50元加价券\n5）实际回收金额满4000元，可使用80元加价券\n3.加价券数量有限，先到先得\n4.限时加价券的生效时间与活动有效期一致\n5.活动最终解释权归爱回收所有'
      });
    },
    setEndTime(){
      var that = this;
      var interval = setInterval(function timestampToTime(){
        var date = (new Date(that.endTime)) - (new Date()); //计算剩余的毫秒数
        if(date == 0){
          that.isEnd = true;
          clearInterval(interval)
        }else{
          that.day = parseInt(date / 1000 / 60 / 60 / 24 , 10);
          that.hour = parseInt(date / 1000 / 60 / 60 % 24 , 10);
          if(that.hour < 10){
            that.hour = "0" +　that.hour
          }
          that.minute = parseInt(date / 1000 / 60 % 60, 10);//计算剩余的分钟
          if(that.minute < 10){
            that.minute = "0" +　that.minute
          } 
            that.second = parseInt(date / 1000 % 60, 10);//计算剩余的秒数 
            if(that.second < 10){
            that.second = "0" +　that.second
          }
          return that.day+that.hour+that.minute+that.second;	
          
        }
      },1000);
  },


  }
 
  
}
</script>


<style scoped lang="scss">
 
  section{
    background: #fff;
    header{
      width: 100%;
      img{
        width: 100%;
        display: block;
      }
      div{
        background-color: rgb(141, 75, 211);
        height: .7rem;
        padding: 0 .2rem;
        dl{
          position: relative;
          height: 1.3rem;
          width:100%;
          background-color: #fff;
          dt{
            background-color: #fff;
            height: .9rem;
            display: flex;
            .left{
              background-color: #fff;
              width: 1.08rem;
              height: 100%;
              background-image: url(data:image/png;base64,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);
              background-size: .66rem .56rem;
              background-position: .33rem .19rem;
              background-repeat: no-repeat;
              position: relative;
              p{
                position: absolute;
                height: .4rem;
                width: .54rem;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-pack: center;
                justify-content: center;
                color: #ff5647;
                font-size: .22rem;
                font-weight: 600;
                font-family: dinpro;
                left: .4rem;
                top: .17rem;
                i{
                  position: relative;
                  font-size: .1rem;
                  color: #ff5644;
                  font-weight: 400;
                  top: -.08rem;
                }
                span{
                  -webkit-tap-highlight-color: transparent;
                }
              }
            }
            .right{
              background-color: #fff;
              padding-top: .24rem;
              width: 2.14rem;
              -webkit-box-sizing: border-box;
              box-sizing: border-box;
              padding: .2rem .1rem .1rem 0;
              font-size:.14rem;
              a{
                padding: .01rem 0;
                p{
                  color: #68acfe;
                }
              }
              div{
                height: .28rem;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                padding-left: .01rem;
                background-color: #fff;
                span{
                  font-size: .14rem;
                  line-height: .2rem;
                  color: #333;
                }
                p{
                  font-size: .22rem;
                  font-family: dinpro;
                  line-height: .2rem;
                  color: #fc6232;
                  font-weight: 600;
                  margin-left: .05rem;
                  i{
                    font-size: .14rem;
                    margin-right: .02rem;
                  }
                  span{
                    font-size: .22rem;
                    font-family: dinpro;
                    line-height: .2rem;
                    color: #fc6232;
                    font-weight: 600;
                    margin-left: .05rem;
                  }
                }
                
                
               
              }
            }
            

          }
          dd{
            background-color: #fff;
            height: .4rem;
            position: relative;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: justify;
            justify-content: space-between;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            padding-right: .1rem;
            border-top:1px #ebebeb solid; 
            .countDown{
              background-color: #fff;
              display: flex;
              -ms-flex-align: center;
              align-items: center;
              height: 100%;
              padding-left: .1rem;  
              p{
                height: .13rem;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                span{
                  width: .17rem;
                  height: .17rem;
                  border-radius: 1px;
                  display: -ms-flexbox;
                  display: flex;
                  -ms-flex-align: center;
                  align-items: center;
                  -ms-flex-pack: center;
                  justify-content: center;
                  color: #fff;
                  background-color: #000;
                  font-size: .11rem;
                }
                i{
                  font-size: .1rem;
                  color: #333;
                  margin: 0 .06rem;
                }

              }
              .rule{
                background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB+0lEQVRIS7VW2Y7CMAx0uMR939f/fxWqQBQQZ7lFgazGUqp2SdOutFjihdgZe2xPKqSUkkLs+XzS9Xqly+VCj8eD3u83eyYSCcpkMlQoFCifz1MqlQq7goQOABfv93s6nU6hgf6DUqlEtVpNC/QBgIxXqxUZCtOCCiGo0+lwRX4LADiOQ9vtNlbWYU6NRoMqlYp37AEg8+VyGc6lEB4FoNBUYbfb9SphAATMZjNtEBqKrIrFIoEGGJp9Pp9pt9t5jQ/QIgSNRiNOiAHW67W2obh8MBhQOp3meJW1AsJkzedzbWJofKvVIuG6rpxOp1pqFJ+4GL05Ho/sh/Fst9tcEao4HA7a+PF4TMJxHLnZbLQO1WqV6vU64VxdrhwxMQDCjmDqdNZsNknYti1vt1toc5PJJL1er4/zfr9P2WyWqQXFOsvlciQsy5K6C0yzCm7BMcy2bbrf71p3JCcmk4lJLYJLIwRhBJEZDNuOX5ihR38C8M83GosGm4wB4lIEcRsOh7EyV6BMUVSTlTM0BhVgySzLMmauDrnJpjH9vZ3lcpll2zR1/hgeU9Oi/U5TTU5cGedFM0mFHwDl9no9/muxWERW4UlFlNgpEOgRmgzZgP64rmscz4DYwTNKruGDqQCAejrDED7kWjl+9cFRIF99MhXIVx99P6//8dnyA/FBcUbj1TLnAAAAAElFTkSuQmCC);
                background-size: .12rem .12rem;
                background-repeat: no-repeat;
                background-position: 50%;
                width: .18rem;
                height: 100%;
                display: inline-block;
                margin-left: -.04rem;
                text-align: left;
              }
              
            }
            .recoveryBtn{            
              font-size: .14rem;
              background-image: -webkit-gradient(linear,right top,left top,from(#ffd629),to(#fff03b));
              background-image: -webkit-linear-gradient(right,#ffd629,#fff03b);
              background-image: -o-linear-gradient(right,#ffd629,#fff03b);
              background-image: linear-gradient(-90deg,#ffd629,#fff03b);
              border-radius: .03rem;
              color: #333;
              font-weight: 700;
              height: .28rem;
              line-height: .28rem;
              width: .86rem;
              text-align: center;       
            }


          }
          &::after{
            content: "";
              background-image: url(data:image/png;base64,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);
              background-repeat: no-repeat;
              background-size: 100%;
              width: .54rem;
              height: .54rem;
              position: absolute;
              left: 0;
              top: 0;
              border-top-left-radius: .04rem;
          }

        }
      }
    }
    article{
      position: relative;
      top:.7rem;
      left:0;
      background: #fff;
      div{
        img{
          width: 100%;
          display: block;
        }
      }
      .tag_wrap{
        margin: 0 .2rem;
        display: flex;
        justify-content:space-around;
        text-align: center;

        .tag{
          width: .88rem;
          color: #666;
          font-size: .14rem;
          font-weight: 400;
          line-height: .18rem;
          display: inline-block;
          img{
            width: .6rem;
          }
        }
      }
      .main{
        background: #fff;
        .ofn_service{
          box-shadow: 0 0.02rem 0.12rem 0 hsla(195,9%,83%,.44);
          border-radius: .04rem;
          margin: 0 .15rem;
          .ofn_service_content{
            display: flex;
            padding-top:.1rem; 
            justify-content:space-around;
            .ofn_service_content_left,.ofn_service_content_right{
              margin-right: .05rem;
              width: 1.61rem;
              display: -ms-flexbox;
              display: flex;
              -ms-flex-direction: column;
              flex-direction: column;
              -ms-flex-align: center;
              align-items: center;
              padding-bottom: .15rem;
              p{
                width: .65rem;
                color: #333;
                height: .2rem;
                text-align: center;
                line-height: .2rem;
                border-bottom: .04rem solid #ddd;
                font-size:.14rem;
              }
              img{
                padding: .15rem 0;
                width: .8rem;
              }
              span{
                font-size: .12rem;
                font-weight: 400;
                color: #999;
                line-height: .14rem;
                padding-top: .05rem;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                b{
                  color: #111;
                  font-size: .14rem;
                  font-weight: 600;
                  line-height: .14rem;
                  margin: 0 .02rem;
                }
              }
              .new-tag{
                position: absolute;
                top: 3rem;
                right: .7rem;
                width: .28rem;
                height: .28rem;
                color: #fff;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFJklEQVRoQ92bW4hVVRjHf9uanBmPzkhj6EDNvNT4IBpdHrrSXWykkiYHFCG6iI00ZRFzIoWJQJjCwaaXSLpgGkEQFUkamUbSU3ZRg2iih8p80TGhuTjqrFj77H1ae52191rn0szZ58DhXNj7nPNf3/f9f+tbex1PCCGo5O3sBPx8DIZ/ghN/wF+/w5kRODsGE+Mwy4OGxty95TJovRxa26FjKbRfBbMuquSvwauIwNF/4Juv4NB++OUYnD8HngBP/ta4R3LHyFv4OCcDS66DG5fDshvg4rqyxZYn8MSf8OH7cOgLmJzMCdJ/tPraFxwck38/GIT8+8Hruc1w5yq4pxsyTSULLU3g6VOwcwd8/SVMXVCipQmMRLAI8eog1DfA3d2w8mGYXV+00OIEiinY8zG89w5MjAZfJlMwTMMYESah4XuRyIXna58nj21ZCGufhatvKUqku8Azf8P2Afj+22gaJkXJpQaNx+hpHNYqcMeD0P001F3iJNRN4G+/wktb4PTJqCmodeQ/j4mkcRAMUSowpFCoZlZtHfDUIDQvsIq0CzzyA2zth/ExBwNxSVWXNNad1yC0ZRFsGoKFbYkikwUe+RFefAHOT8ZEzkWQBReJKZqEGQHz5kPfjkSR8QJlWj7/nD1yKsd0TLjUoPH8YFB0lJg+T0Yy+2ZsupoFSkPp7YGRU0paWhAQ1k+lOKgyU2ekOpDye2VNZt82Gk+hQImC/i3wnXRLBcyRkdZmIHGYqAQH9QjHGdHtXbAmW1CPhQI/+QjeeN0QOZPrhTVSTC1qhuHKQV1YmCnq+RsHYdmtEZFRgSMjsOFxGBs1zCVd3C8pjR2cUcdMQbobTEc95tJF0P8BzG7Ii4wK3PYKHNivOaZliuWPYMwMxFQ7+ZQrg4MmswmF3vsIPLDRIPD4cdiwHsSFQKBltPSadKm3pJp2cdzEWVPgC3LuuvVTyDT7Ov6L4Kvb4fN9hmlYCZNkY+RieFgOByNYCgIiH1Y+Bvc9oQgcHYW1a+CcbHkUhyzGRSOpGjPFskZZS3UXDpoySbZXA/v8fjIXwb2fwdBQUEuKMzpDXEnnmeCgOnDh8x7pqLcFArN9cPSo1n1brN9Yg/9DP+jKQT3Vr70L1r+MJ8bHBd2rc8sMRpgn9Gj+CdPUD1o5qLRU8tjGDGw7gCcOHxZs3mzuFKw1E8M2J5NJqtOEfjBOqKleszvxxO7dgl27ElqhlHFQDUrXM3hiYEBw8KBBYEo5qAq8eRWe6O0VDA8npGgKORhO/q+8Bk+sWyc4KZci9B6sSBetJg6GWlpa8URXl0CCPi+wRjgoUzXThCc6OwVTU4ZV6CIjaGtQjQiyzJpcuokkx66TM5kVK3LfEjsDSSkH5YD7U7UkgWnnoJ+izhEsIcoz0Q+qQfFNJlZgDXDQx4Q1RVPMQR/0ocBa5OBDcqpWILCGOJh9V01RveZSzsF8u+TsotW+Lqr1g/mG12oyJSzqVkM/mF+ycI5gijgolwwH9tpmMinmYKe6bGhN0ZRxsGDht9Y42Pko3N+TW0DzY1NLHJQXQwsuvuRTtAY4aLx85uyiVc7B2AugVpNJAQfbFkPfWzGXsJ0jWKUctG5CSHM/OK/ZYRuJNUWrlINy79qm1xw2AqWRg+0d8OQgzHfZypU2Dha9GS8tHJRmUtJ2SmcXnSEONtSXuSHWajIzxMG5TRXa0uwcwWngYOMcWHI93LQcllZqU/p0c7CuDmRL4/+tYAG0XgGtbcHfCjoq/reCfwFq0Mc1bQXYsgAAAABJRU5ErkJggg==);
               background-size: 100% 100%;
                font-size: .08rem;
                -webkit-text-size-adjust: none;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-direction: column;
                flex-direction: column;
                -ms-flex-pack: center;
                justify-content: center;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
                white-space: nowrap;
                padding-top: .04rem;
                span{
                  color:#fff;
                }
              }
            }
            
          }
          .ofn_service_bottom{
            margin-top: .08rem;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-pack: justify;
            justify-content:space-around;
            -ms-flex-align: center;
            align-items: center;
            padding: .1rem;
            border-top:1px #efefef solid; 
            div{
              font-size:.15rem;
              .tag-money{
                width: .26rem;
                height: .18rem;
                margin-right: .04rem;
                display: -ms-inline-flexbox;
                display: inline-flex;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAkCAYAAADGrhlwAAAG5klEQVRYR92Zy48cVxWHv3urq/ox3eO2Z8ZjT9oex7HHY8UIsuIRskKABBskUBbZJJHYgGCFlF3IAtgiwX8QHgvkRcxDICLxkMiCiEVYRDYhOOMX7p6efrunp191LzpVPaluz0zcL4PElUajqbr31PnqnPs759Yoa61lpiHL1UwW5rlYzQzU3QFvZZ4+zWRrNiDbh9LvYeXLMzkxz8XTA/ltqPwBmjcg+0nIfhpUbJ6+TWVrOqB+A1r/gtpfwW+Bexyyn4Lkk+CkpnJk7EWmC9o7cvp0QPvmehXIX4XcS6DjY/s008ROAeKnHhOQmN27CcmnZvJxosWlN2H5C48RyPRAuxP5NPXkbgn+/TrkXgb3xKFmZku5qT2bYqE1ULgK7buQXIfVr4LSBwzND6jxN7DvQ/Pv4FfAyuZNQ/wseJuQ+gx4J6cgAfp1kFTbux2tFwFa/jzEFkdszg7UeAtaV8FtfrSzxoD6OGSeh/jao8FMB7plePAONP8BHNbQaEhvwuInwF0KhGl6IJHP0g/B+edkrU/fQOrrkHn20VDBDAutW1D5I/Sq0RrZQ0ufC9NvaEwH5O9C+Xvg7Bx0SlpDvwe+gVgMnEOKrczRX4ITXxsTCpCI3f85SKnwluH0C4fWo+mAdr4PemvUmc4elAvQrIPxo3teAo4twfGToIc2saRgxwvrl06CswzuGngbkPgY6MRBWBGE/C9g7YUj03ZyoNo18H899DCLLeWhdB9lD2a69OFB9rseKncBEkOdRK8Huy3QD3XrKg7p5yD7PMSOj4JtX4PVr8ypDkmbs/NtGCo7tngXStuB10cdIva3s4ppOHcZ4snIoUYD+t3DHXQWYe01SFyI7kuUEmfmBFS/Bv2h6DTr2Dvvg7Ghk9klaDbgQT18oFJwcg0kvSQdFahkEp58Orwno9+H8s7RbyN5Ec79KAIw7cPTcTBjspQrvgrO/cj41nVsazcAkrqnTp8JhMDe2iK4cCyLXjmJKRag1UQ5iiBKp9YhuxzZKeRBVPOQYZVGXXlzbPGYDKjwIrgD1eq24YN3sX1RNRv8tvEkzpkcfqGILVdxNs6D72Pu3AlhXB38kMrA2Y3IyVoZGpUD8m+xWC+BfnomIAtBWIfyXB4tsln5RpQq9TLkt0KQnsH2LLZr0Os5VCqBKZRxcqv0b96Bzh7aUyjPCYFE7TaeGQKqQiU/EgWrFNZzwYujN2cBkuIldSaRGw3z7gfQ/kF0rbINxbsRUNdg5ZySSBI7e4rgU0W7i3+vEGx6HbOo+ABIrFx6JurFGg1sYSv420rdcmLYmBO2am4WfemNGVKu+lYItPzFUSOicLVvRWkxHKG+wXYMdmERJfKcTqHTSfxCJdjstl5DqT56H0g8FaDBMLUGVoRB5FsgBj8qlgy6an3xZ1MC7d6A4u8kv8K2QnqkYTHefgliTmi83YJb17GyfyTdOj5WeVij0StZnOVjdN+7i1IW5XdQrkXvp1xiAc5tRkDlCrZWHYAolOOFhzjVBVNGX54k5Yxvg3ai/nb4fWB4pM5D9tmw1VAOFL4Dbi2acfNdbHsvTLuO9GhprHbRmQX0Yor+/XIAxIMGyvFRng5VbiUHS6sRUKEBfgJ0LISih/ULKOWDu4i+9MvHFKHGG9D7TWS8Xsbe2wr6NtM1mJaP3fPRuVViuRU6b99AOQadiqETocKpuAdPXQEdRtoGKlgGuwcCMJxyjofyVlEXfzIlkCw7ag/JPfkGV30F5C0Phr13E2qVMEoCJUqXXkClk4HS4UgPqcENa5Ba34CF6AxjylVspTIEIimnwTsdXjPFCVPu4S+nR6ncPkH1p2D+HL0xKaD524M68hEvUqR67Tykj0UvQ6JzuxiogHJTEFsIIZTUtTxK9lAsg9781QwRkqbssDr0YUh6UHoN9PboQ5o1KBWgvTt6XUAyJ2D5dNCgfmjGWky+AT1pDPtgZJ3UPzlahEqnHAflPYG6+PosQGOs7W5DTc5Dewcn93sgXYQcIRw3qEsPn/2lWbWFMrYqyjYq1fJ3UH/iq+HRwhbRm6K8443JWp9hm7Kf6j8GPdTbjfFMawy20AhlOhABHRRS5S6AmwkPhFK7/CJKtSD+BPrCtHVoDIdGplgfpAPv/BYe8RU46MtqTezOLqg0KiYHOyfcL/TASLQfhOknEZJbAnrmu6jMc2N7Nn2Ehh8hnUXzT9C/Dt0boE345n2D9V1MtYat1qAt3/BCZ4M9ciDd5HqYgip9GbX2TVTqytgwMnE+QI96ZL+J3f4LtvoOdvc96OTBdgZwAqAgsYRKraMyVyD7WZScg6YY/x2gA47JkUOEox3+x8IR4ZjPfy7+R0BTvPoxl/zfAf0H+pQjwjsjc0cAAAAASUVORK5CYII=);
                background-size: 100% 100%;
              }
              span{
                font-size: .22rem;
                font-family: dinpro;
                color: #fc6232;
                font-weight: 600;
                line-height: .13rem;
                margin-left: .04rem;
                i{
                  font-size: .14rem;
                }
              }
            }
            .van-button--default{
              background: linear-gradient(90deg,#fff03b,#ffd629);
              font-size: .14rem;
              font-weight: 500;
              line-height: .28rem;
              text-align: center;
              width: .8rem;
              height: .28rem;
              border-radius: .04rem;
            }
          }

        }
        .more{
          box-shadow: 0 0.02rem 0.12rem 0 hsla(195,9%,83%,.44);
          margin: .1rem .15rem 0 .15rem;
          padding: .14rem .16rem 0;
          border-radius: .04rem;
          .more_title{
            font-size: .14rem;
            color: #333;
            text-align: center;
            font-weight: 600;
          }
          .replace-list{
            display: flex;
            justify-content:space-around;
            margin-top: .15rem;
            border-bottom: 1px solid #eee;
            .replace-item{
              width: 1.03rem;
              display: -ms-flexbox;
              display: flex;
              -ms-flex-direction: column;
              flex-direction: column;
              -ms-flex-align: center;
              align-items: center;
              position: relative;
              background: #fff;
              padding: .15rem 0;
              img{
                width: .6rem;
                height: .6rem;
                display: -ms-inline-flexbox;
                display: inline-flex;
              }
              h5{
                width: 1rem;
                padding: .08rem .05rem 0;
                font-size: .12rem;
                color: #333;
                font-weight: 400;
                line-height: .16rem;
                text-align: center;
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
               
              }
              p{
                margin-top: .1rem;
                font-size: .1rem;
                color: #666;
                line-height: .14rem;
                font-weight: 400;
                span{
                  font-size: .12rem;
                  font-weight: 600;
                  line-height: .13rem;
                  margin-right: .02rem;
                }
              }
              .replace-tag{
                position: absolute;
                top: .04rem;
                right: .1rem;
                width: .28rem;
                height: .28rem;
                color: #fff;
                background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAAFJklEQVRoQ92bW4hVVRjHf9uanBmPzkhj6EDNvNT4IBpdHrrSXWykkiYHFCG6iI00ZRFzIoWJQJjCwaaXSLpgGkEQFUkamUbSU3ZRg2iih8p80TGhuTjqrFj77H1ae52191rn0szZ58DhXNj7nPNf3/f9f+tbex1PCCGo5O3sBPx8DIZ/ghN/wF+/w5kRODsGE+Mwy4OGxty95TJovRxa26FjKbRfBbMuquSvwauIwNF/4Juv4NB++OUYnD8HngBP/ta4R3LHyFv4OCcDS66DG5fDshvg4rqyxZYn8MSf8OH7cOgLmJzMCdJ/tPraFxwck38/GIT8+8Hruc1w5yq4pxsyTSULLU3g6VOwcwd8/SVMXVCipQmMRLAI8eog1DfA3d2w8mGYXV+00OIEiinY8zG89w5MjAZfJlMwTMMYESah4XuRyIXna58nj21ZCGufhatvKUqku8Azf8P2Afj+22gaJkXJpQaNx+hpHNYqcMeD0P001F3iJNRN4G+/wktb4PTJqCmodeQ/j4mkcRAMUSowpFCoZlZtHfDUIDQvsIq0CzzyA2zth/ExBwNxSVWXNNad1yC0ZRFsGoKFbYkikwUe+RFefAHOT8ZEzkWQBReJKZqEGQHz5kPfjkSR8QJlWj7/nD1yKsd0TLjUoPH8YFB0lJg+T0Yy+2ZsupoFSkPp7YGRU0paWhAQ1k+lOKgyU2ekOpDye2VNZt82Gk+hQImC/i3wnXRLBcyRkdZmIHGYqAQH9QjHGdHtXbAmW1CPhQI/+QjeeN0QOZPrhTVSTC1qhuHKQV1YmCnq+RsHYdmtEZFRgSMjsOFxGBs1zCVd3C8pjR2cUcdMQbobTEc95tJF0P8BzG7Ii4wK3PYKHNivOaZliuWPYMwMxFQ7+ZQrg4MmswmF3vsIPLDRIPD4cdiwHsSFQKBltPSadKm3pJp2cdzEWVPgC3LuuvVTyDT7Ov6L4Kvb4fN9hmlYCZNkY+RieFgOByNYCgIiH1Y+Bvc9oQgcHYW1a+CcbHkUhyzGRSOpGjPFskZZS3UXDpoySbZXA/v8fjIXwb2fwdBQUEuKMzpDXEnnmeCgOnDh8x7pqLcFArN9cPSo1n1brN9Yg/9DP+jKQT3Vr70L1r+MJ8bHBd2rc8sMRpgn9Gj+CdPUD1o5qLRU8tjGDGw7gCcOHxZs3mzuFKw1E8M2J5NJqtOEfjBOqKleszvxxO7dgl27ElqhlHFQDUrXM3hiYEBw8KBBYEo5qAq8eRWe6O0VDA8npGgKORhO/q+8Bk+sWyc4KZci9B6sSBetJg6GWlpa8URXl0CCPi+wRjgoUzXThCc6OwVTU4ZV6CIjaGtQjQiyzJpcuokkx66TM5kVK3LfEjsDSSkH5YD7U7UkgWnnoJ+izhEsIcoz0Q+qQfFNJlZgDXDQx4Q1RVPMQR/0ocBa5OBDcqpWILCGOJh9V01RveZSzsF8u+TsotW+Lqr1g/mG12oyJSzqVkM/mF+ycI5gijgolwwH9tpmMinmYKe6bGhN0ZRxsGDht9Y42Pko3N+TW0DzY1NLHJQXQwsuvuRTtAY4aLx85uyiVc7B2AugVpNJAQfbFkPfWzGXsJ0jWKUctG5CSHM/OK/ZYRuJNUWrlINy79qm1xw2AqWRg+0d8OQgzHfZypU2Dha9GS8tHJRmUtJ2SmcXnSEONtSXuSHWajIzxMG5TRXa0uwcwWngYOMcWHI93LQcllZqU/p0c7CuDmRL4/+tYAG0XgGtbcHfCjoq/reCfwFq0Mc1bQXYsgAAAABJRU5ErkJggg==);
                background-size: 100% 100%;
                font-size: .08rem;
                -webkit-text-size-adjust: none;
                display: -ms-flexbox;
                display: flex;
                -ms-flex-direction: column;
                flex-direction: column;
                -ms-flex-pack: center;
                justify-content: center;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-wrap: nowrap;
                flex-wrap: nowrap;
                white-space: nowrap;
                padding-top: .04rem;
              }

             
            }
          }
          .serve-list{
            line-height: .5rem;
            span{
              font-size: .12rem;
              color: #999;
              display: inline-block;
              width: 25%;
              text-align: center;
            }
          }
        }
        .coral-text{
          color: #333;
          font-size: .12rem;
          box-shadow: 0 0.01rem 0.2rem hsla(195,9%,83%,.3);
          border-radius: .04rem;
          overflow: hidden;
          position: relative;
          height: .32rem;
          line-height: .32rem;
          padding-left: .1rem;
          margin: .17rem .15rem 0 .15rem;
         
          &::before{
            content: "";
            position: absolute;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            width: .13rem;
            height: .14rem;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAcCAYAAAB/E6/TAAAAAXNSR0IArs4c6QAAA2NJREFUSA21Vj1oVEEQnr0oaCQxigkICUGiBAOxUtQLmiioKURt1MpOBH+KgJVgpXailjYqWGgpFmIKLQRRsAgGUioWIiYa9BQlHknujd/M7uztO3O5a1x4b/6/b2Z37yWOmlw8vX2EMr5BzP3ENEHkLrieiakmy8k1k8gzxS7ihfdUydpARPoQf6Kejk3OvVhsBqPQTBLRwk7KQBIX+mPXTR9L/dHVQFl2Ii6NdFB5bowoG8O2rfXTAFGnUvkFe3KTWtfcdp2vfi3HVZeIZ3cfxhQP8LT7rQJMFrbNtg+mJ+US5AnXN/W8HtmSW8dfd50E6iNikFgrAo5bUF0WEI9bh9AT/rDtSDWe19JsjfC34kHKKuPovqC4nHl85TEdxpI24WIUht3mydd5GnhTB/PxFkxxC77Eb70IsugibcGOJhTOVhAtXrdoKhNAuEufT6NwIBYrR0ByRmjS/AYHv+QwFfnd4FHzmswTcXZem67B0uR/zsggTMpEgZzpjHlNRiL+eWg9uhnUaSRfJ1DFcoPPTOk+AFt3cepsj2WZjERUmeuWufO3DGk2nVQoroFLrgWDz4iZ2nh2KPmB5w6d241dpYLUdi0RA89lwzBixCXlz1w9IsFIgOOZSKFUStehc2iRUPMkLg+W2Gma96bXOCRZgYArQY0/FEaRy4E34Yw5UKpnhK+kBkJjvrO0NdEtKFJsi0MKYfWMsHWZJStslYizVgXK4eVytcC/jCCJC4lNJ7KlZXVSkEzkXGcc23BUBsNA0upUT+M62XxXGq5ORLQ1bpc1qjIYti1aLT55rKOgiymPkDLwkpUQuWHv1ySvKo6+QonpJoVAltjQxVQX7Artk4gtxz/29xGXz+JrfVGdWfhCi5H+/am1ZULBFyl5YoiIultA7Cplq+64gYlpfG3L4whvweMTdWypkAUpHYqpW2d+iVlAVOhKkOq8El/zK1QoD8E7iq1zj1Ez728MgAxLgQGgEql+T0RJVkz2ZBqBzy6GK/wGwNOk4P+rMv+yi2d2XMKUo5ok2yNnKEsm1YH4nuudvO+d9d84owbLue8A3+uBFTmQBCJH1xogaDi53nXSu1rvYtNfatT23hvyfohpnqnZ4NWQSP8T3bjhAA74MgjfYpwS9De4G+eo99ipBvgx/BfXaGkdmrYXkwAAAABJRU5ErkJggg==) no-repeat;
            background-size: 100%;
          }
          .swiper-container{
              padding-left:.3rem;   
              width: 6rem;
              overflow:hidden;
              white-space: nowrap;
              text-overflow: ellipsis; 
          } 
          
          
        }
        .hot_events{
          div{
            width: 100%;
            display: flex;
            justify-content:space-around;
            img{
              height: 1.2rem;
              width: 1.85rem;
              display: block;
            }
          }
        }
        .understand{
          display: flex;
          justify-content:space-around
          ;
          img{
              height: 1.2rem;
              width: 1.85rem;
              display: block;
            }
        }
        
      } 
      
      
     
    }
  }

  
  
</style>
