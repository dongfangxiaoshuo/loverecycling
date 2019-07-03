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
                <a href="javascript:;"><p>选择机型查看优惠</p></a>
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
                  <span>28</span>
                  <i>天</i>
                  <span>09</span>
                  <i>时</i>
                  <span>57</span>
                  <i>分</i>
                  <span>53</span>
                  <i>秒</i>
                </p>
                <i class="rule" @click="dialog"></i>
              </div>

              <div class="recoveryBtn">
                立即回收
              </div>
            </dd>
          </dl>

        </div>
      </header>

      <article>
        <div > 
          <img src="/images/1.png" alt="">
        </div>
        <div class="tag_wrap">
          <div class="tag" v-for="tag in tags" :key="tag.id">
            <img :src="tag.imgUrl" alt="">
            <span>{{tag.name}}</span>
          </div>
        </div>
        <div>
          <img src="/images/7.png" alt="">
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
      ]
    }
  },
  mounted() {
    
  },
  methods:{
    dialog(){
     this.$dialog({
      title: '活动规则',
      message: 
      '1.活动时间：优惠领取后7日内有效，仅限在爱回收官网、门店使用；\n2.限时加价券：\n1）实际回收金额满100元，可使用5元加价券\n2）实际回收金额满500元，可使用20元加价券\n3）实际回收金额满1000元，可使用30元加价券\n4）实际回收金额满2000元，可使用50元加价券\n5）实际回收金额满4000元，可使用80元加价券\n3.加价券数量有限，先到先得\n4.限时加价券的生效时间与活动有效期一致\n5.活动最终解释权归爱回收所有'
    });
    }
  }
 
  
}
</script>


<style scoped lang="scss">
 
  section{
    header{
      width: 100%;
      img{
        width: 100%;
        display: block;
      }
      div{
        background-color: rgb(141, 75, 211);
        height: .7rem;
        width: 100%;
        dl{
          position: relative;
          margin: 0 auto;
          height: 1.3rem;
          width: 3.43rem;
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
      div{
        img{
          width: 100%;
          display: block;
        }
      }
      .tag_wrap{
        margin: 0 .3rem;
        display: flex;
        .tag{
          width: .88rem;
          color: #666;
          font-size: .14rem;
          font-weight: 400;
          line-height: .18rem;
          display: inline-block;
          text-align: center;
          img{
            width: .6rem;
          }
        }
      }
      
     
    }
  }
 
  
</style>
