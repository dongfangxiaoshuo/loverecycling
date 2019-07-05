<template>
  <div class="ofnew">
    <header>
      <h2 class="title">爱回收 0元换新机</h2>
    </header>

    <div class="swiper">
        <van-swipe :autoplay="2000" indicator-color="white">
          <van-swipe-item v-for="banner in banners" v-bind:key="banner.id"><img :src="banner.imgUrl" alt=""></van-swipe-item>
        </van-swipe>
    </div>

    <div class="hot_sales">
      <img src="/images/24.jpg" alt="">
    </div>

    <article>
      <div class="good_wrap">
        <div class="good" v-for="good in goods" v-bind:key="good.id">
          <div class="good_left">
            <img :src="good.imgUrl" alt="">
          </div>
          <div class="good_right">
            <h5>{{good.name}}</h5>
            <p>{{good.info}}</p>
            <div class="isavourable">
              <div v-if="good.isAvourable" class="good_new">
                <span class="good_new_price">换新到手价<i>￥</i><b>{{good.price}}</b></span>
                <del class="good_price">官方指导价<i>￥</i><b>{{good.price}}</b></del>                
              </div>
              <div v-else class="good_old">
                <span class="good_price">官方指导价<i>￥</i><b>{{good.price}}</b></span>
              </div>
            </div>
            <div class="iscoupon">
              <van-button type="default" round>立即换新</van-button>
              <div v-if="good.isCoupon"><img :src="good.coupon_imgUrl" alt=""></div>
            </div>
          </div>
          <div class="tig">
            <span class="tig_title">{{good.tig}}</span>
            <span class="tig_price"><i>￥</i>{{good.tig_price}}</span>
          </div>
        </div>    
      </div>

      <div class="good_area" v-for="area in areas" v-bind:key="area.id">
        <img class="good_area_banner" :src="area.imgUrl" alt="">
        <div class="good_wrap">
           <div class="good" v-for="good in area.good" v-bind:key="good.id">
            <div class="good_left">
              <img :src="good.imgUrl" alt="">
            </div>
            <div class="good_right">
              <h5>{{good.name}}</h5>
              <p>{{good.info}}</p>
              <div class="isavourable">
                <div v-if="good.isAvourable" class="good_new">
                  <span class="good_new_price">换新到手价<i>￥</i><b>{{good.price}}</b></span>
                  <del class="good_price">官方指导价<i>￥</i><b>{{good.price}}</b></del>                
                </div>
                <div v-else class="good_old">
                  <span class="good_price">官方指导价<i>￥</i><b>{{good.price}}</b></span>
                </div>
              </div>
              <div class="iscoupon">
                <van-button type="default" round>立即换新</van-button>
                <div v-if="good.isCoupon"><img :src="good.coupon_imgUrl" alt=""></div>
              </div>
            </div>
            <div class="tig">
              <span class="tig_title">{{good.tig}}</span>
              <span class="tig_price"><i>￥</i>{{good.tig_price}}</span>
            </div>
          </div> 

        </div>
       
      </div>

      <div class="about">
        <img src="/images/about.png" alt="">
        <img src="/images/about2.png" alt="">
      </div>
    </article>

    

    
  </div>
</template>

<script>


export default {
  name: 'Ofnew',
  components: {
    
  },
  data() {
    return {
       swiperOption: {
        speed:2000,
        autoplay:true,
        loop:true,
      },
      banners:[
        {
          id:1,
          imgUrl:"/images/banner1.jpg"
        },
        {
          id:2,
          imgUrl:"/images/banner2.jpg"
        },
        {
          id:3,
          imgUrl:"/images/banner3.jpg"
        },
        {
          id:4,
          imgUrl:"/images/banner4.jpg"
        },{
          id:5,
          imgUrl:"/images/banner5.jpg"
        }
      ],
      goods:[
        {
          id:1,
          name:"荣耀20 8GB 256GB 幻夜黑 全网通",
          info:"荣耀官方合作 同步首销",
          price:"2999",
          imgUrl:"/images/phone_1.jpg",
          tig:"换新再省",
          tig_price:"300",
          isCoupon:false,  //是否有优惠券
          isAvourable:false //是否有优惠活动
        },
        {
          id:2,
          name:"华为 P30 8GB 64GB 天空之境",
          info:"手持拍月亮神器",
          price:"3988",
          imgUrl:"/images/phone_2.jpg",
          tig:"换新补贴",
          tig_price:"300",
          isCoupon:true,
          coupon_imgUrl:"/images/coupon_100.png",
          isAvourable:false //是否有优惠活动
        },
        {
          id:3,
          name:"Apple iPhone XR 128GB 黑色 双卡双待",
          info:"性价比超高的iPhone",
          price:"6699",
          imgUrl:"/images/phone_3.jpg",
          tig:"换新再省",
          tig_price:"200",
          isCoupon:false,
          isAvourable:true,
          avourable_price:"5288"
        },
        {
          id:4,
          name:"荣耀8X 6GB+128GB 魅海蓝",
          info:"千元霸屏旗舰",
          price:"1699",
          imgUrl:"/images/phone_4.jpg",
          tig:"换新再省",
          tig_price:"150",
          isCoupon:true,
          coupon_imgUrl:"/images/coupon_80.png",
          isAvourable:false,         
        },
        {
          id:5,
          name:"华为 P30 Pro 8GB 128GB 赤茶橘",
          info:"超感光徕卡四摄",
          price:"5488",
          imgUrl:"/images/phone_5.jpg",
          tig:"换新再省",
          tig_price:"200",
          isCoupon:false,
          isAvourable:false,
        }
      ],
      areas:[
        {
          imgUrl:"/images/mi_area.jpg",
          good:[
            {
              id:1,
              name:"红米 K20 Pro 8GB 128GB 火焰红 全网通",
              info:"【新品首发】骁龙855",
              price:"2699",
              imgUrl:"/images/mi_1.jpg",
              tig:"换新再省",
              tig_price:"100",
              isCoupon:false,  //是否有优惠券
              isAvourable:true, //是否有优惠活动
              avourable_price:"2799"
            },
            {
              id:2,
              name:"红米 K20 Pro 8GB 128GB 火焰红 全网通",
              info:"【新品首发】骁龙855",
              price:"2699",
              imgUrl:"/images/mi_2.jpg",
              tig:"换新再省",
              tig_price:"100",
              isCoupon:false,  //是否有优惠券
              isAvourable:true, //是否有优惠活动
              avourable_price:"2799"
            },
            {
              id:3,
              name:"红米 K20 Pro 8GB 128GB 火焰红 全网通",
              info:"【新品首发】骁龙855",
              price:"2699",
              imgUrl:"/images/mi_3.jpg",
              tig:"换新再省",
              tig_price:"100",
              isCoupon:false,  //是否有优惠券
              isAvourable:true, //是否有优惠活动
              avourable_price:"2799"
            },
            {
              id:4,
              name:"红米 K20 Pro 8GB 128GB 火焰红 全网通",
              info:"【新品首发】骁龙855",
              price:"2699",
              imgUrl:"/images/mi_4.jpg",
              tig:"换新再省",
              tig_price:"100",
              isCoupon:true,  //是否有优惠券
              coupon_imgUrl:"/images/area_100.png",
              isAvourable:true, //是否有优惠活动
              avourable_price:"2799"
            },
          ]         
        },
        {
          imgUrl:"/images/honor_area.jpg",
          good:[
            {
              id:1,
              name:"荣耀8X 6GB+128GB 幻夜黑",
              info:"千元超大屏旗舰机",
              price:"1699",
              imgUrl:"/images/honor_1.jpg",
              tig:"换新再省",
              tig_price:"150",
              isCoupon:true,  //是否有优惠券
              coupon_imgUrl:"/images/area_80",
              isAvourable:false, //是否有优惠活动
              avourable_price:"2799"
            },
            {
              id:2,
              name:"荣耀Magic2 8GB+128GB 渐变黑",
              info:"魔法滑屏 麒麟980芯片",
              price:"2999",
              imgUrl:"/images/honor_2.jpg",
              tig:"换新再省",
              tig_price:"300",
              isCoupon:false,  //是否有优惠券
              isAvourable:false, //是否有优惠活动
            },
            {
              id:3,
              name:"Mate20 6GB+128GB 翡冷翠",
              info:"强劲续航的商务旗舰机",
              price:"3999",
              imgUrl:"/images/honor_3.jpg",
              tig:"换新补贴",
              tig_price:"400",
              isCoupon:false,  //是否有优惠券
              isAvourable:false, //是否有优惠活动
            },
            {
              id:4,
              name:"华为 P30 Pro 8GB 128GB 亮黑色",
              info:"拍照标杆旗舰",
              price:"5488",
              imgUrl:"/images/honor_4.jpg",
              tig:"换新再省",
              tig_price:"200",
              isCoupon:false,  //是否有优惠券
              isAvourable:false, //是否有优惠活动
            },
            {
              id:5,
              name:"荣耀V20 8GB+128GB 幻夜黑",
              info:"超多玩法的顶配中端机",
              price:"2899",
              imgUrl:"/images/honor_5.jpg",
              tig:"换新补贴",
              tig_price:"300",
              isCoupon:false,  //是否有优惠券
              isAvourable:false, //是否有优惠活动
            },
            {
              id:6,
              name:"荣耀10青春 6GB+64GB 渐变蓝",
              info:"2400万AI自拍神器",
              price:"1699",
              imgUrl:"/images/honor_6.jpg",
              tig:"换新再省",
              tig_price:"200",
              isCoupon:false,  //是否有优惠券
              isAvourable:false, //是否有优惠活动
            },
            {
              id:7,
              name:"Mate 20 pro 8GB+256GB 宝石蓝",
              info:"超大广角徕卡三摄",
              price:"6299",
              imgUrl:"/images/honor_7.jpg",
              tig:"换新再省",
              tig_price:"300",
              isCoupon:false,  //是否有优惠券
              isAvourable:false, //是否有优惠活动
            },
            {
              id:8,
              name:"荣耀 20i 4GB 128GB 幻夜黑",
              info:"3200万AI自拍",
              price:"1399",
              imgUrl:"/images/honor_8.jpg",
              tig:"换新再省",
              tig_price:"100",
              isCoupon:false,  //是否有优惠券
              isAvourable:false, //是否有优惠活动
            },
            {
              id:9,
              name:"华为 nova 4 6GB 128GB 亮黑色 全网通",
              info:"极点全面屏",
              price:"2499",
              imgUrl:"/images/honor_9.jpg",
              tig:"换新再省",
              tig_price:"300",
              isCoupon:false,  //是否有优惠券
              isAvourable:false, //是否有优惠活动
            },
            {
              id:10,
              name:"华为 nova 4e 6GB 128GB 雀翎蓝",
              info:"3200万美颜AI三摄",
              price:"1999",
              imgUrl:"/images/honor_10.jpg",
              tig:"换新再省",
              tig_price:"200",
              isCoupon:false,  //是否有优惠券
              isAvourable:false, //是否有优惠活动
            },
          ]         
        },
        {
          imgUrl:"/images/iphone_area.jpg",
          good:[
            {
              id:1,
              name:"Apple iPhone XR 128GB 黑色 双卡双待",
              info:"性价比超高的高端机",
              price:"6699",
              imgUrl:"/images/iphone_1.jpg",
              tig:"换新补贴",
              tig_price:"200",
              isCoupon:false,  //是否有优惠券
              isAvourable:true, //是否有优惠活动
              avourable_price:"5288"
            },
            {
              id:2,
              name:"Apple iPhone XS Max 256GB 金色 双卡双待",
              info:"双卡双待的年度机皇",
              price:"10499",
              imgUrl:"/images/iphone_2.jpg",
              tig:"换新补贴",
              tig_price:"200",
              isCoupon:false,  //是否有优惠券
              isAvourable:true, //是否有优惠活动
              avourable_price:"8588"
            },
          ]
        }
        
          
        
      ]

    }
  },
  methods:{
  }
  
}
</script>


<style scoped lang="scss">
  .ofnew{
    img{
      width: 100%;
      display: block;
    }
    header{
      box-shadow: none;
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
      max-width: 750px;
      background: #fff;
      -webkit-box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.05);
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
      
    }
    .swiper{
        padding: .5rem .15rem 0 .15rem;     
    }
    .hot_sales{
      padding: .1rem 0;
    }
    article{
      .good_wrap{
        .good{
          display: flex;
          justify-content: space-around;
          padding:.2rem .1rem;
          position: relative;
          margin: .1rem 0;
          .good_left{
            height: 1.2rem;
            width: 1.2rem;
          }
          .good_right{
            h5{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 2.05rem;
              display: block;
              font-size: .16rem;
              font-weight: 700;
              margin-top:.05rem; 
            }
            p{
              font-size: .14rem;
              margin-top: .04rem;
              color: #111;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              width: 2.05rem;
              display: block;
            }
            .isavourable{          
                .good_new{
                  .good_new_price{
                    color: #ff2400;
                    font-size: .12rem;
                    display: block;
                    padding: .025rem 0;
                    b{
                      font-weight: 700;
                      font-size: .16rem;
                      font-style: normal;
                    }
                  }
                  del{
                    color: #999;
                    font-size: .12rem;
                    display: block;
                    margin: .02rem 0;

                  }
                }
                .good_old{
                  .good_price{
                    color: #777;
                    font-size: .12rem;
                    display: block;
                    margin-top: .02rem;
                    padding: .08rem 0;
                    i{
                      font-style: normal;
                    }
                    b{
                      font-size: .16rem;
                      font-weight: 700;
                      color: #111;
                    }
                  }
                }
            }          
            .iscoupon{
              display: flex;
              div{
                padding-left:.1rem; 
                img{
                height:.3rem;
                width: .9rem;
              }
              }
             
            }
          }
          .van-button--round{
            font-size: .12rem;
            width: 1rem;
            height: .3rem;
            line-height: .3rem;
            padding: 0;
            display: flex;
            -ms-flex-align: center;
            align-items: center;
            -ms-flex-pack: center;
            justify-content: center;
            text-align: center;
            background-color: #ffcd09;
            border-radius: .15rem;
            .van-button__text{
              margin-top: 0;
              color: #000;
            }
          }
          &:after{
            content: "";
            width: 100%;
            height: .1rem;
            background-color: #f5f5f5;
            position: absolute;
            left: 0;
            bottom: -.1rem;
          }
          .tig{
            font-size: .1rem;
            color: #fff;
            text-align: center;
            width: .5rem;
            height: .46rem;
            padding: .09rem 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            background: -webkit-gradient(linear,left top,right top,from(#ff4949),to(#ff6830));
            background: -webkit-linear-gradient(left,#ff4949,#ff6830);
            background: -o-linear-gradient(left,#ff4949,#ff6830);
            background: linear-gradient(90deg,#ff4949,#ff6830);
            border-radius: 0 .16rem;
            position: absolute;
            left: .14rem;
            top: .02rem;
          }
        }
      }
      .good_area{
          background:#f5f5f5;
          .good_area_banner{
            &:after{
                content: "";
                width: 100%;
                height: .1rem;
                background-color: #f5f5f5;
                position: absolute;
                left: 0;
                bottom: -.1rem;
              }
          }      
          .good_wrap{
            display:flex;
            justify-content: space-around;
            flex-wrap: wrap;
            .good{
              background: #fff;
              display: flex;
              flex-direction:column;
              margin-top:.05rem;
              width: 1.62rem;
              height: 2.9rem;
              position: relative;
              .good_left{
                height: 1.2rem;
                width: 1.2rem;
              }
              .good_right{
                h5{
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  width: 1.54rem;
                  display: block;
                  font-size: .14rem;
                  font-weight: 700;
                  margin-top:.05rem; 
                }
                p{
                  font-size: .14rem;
                  margin-top: .04rem;
                  color: #111;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  width: 1.54rem;
                  display: block;
                }
                .isavourable{          
                    .good_new{
                      .good_new_price{
                        color: #ff2400;
                        font-size: .12rem;
                        display: block;
                        padding: .025rem 0;
                        b{
                          font-weight: 700;
                          font-size: .16rem;
                          font-style: normal;
                        }
                      }
                      del{
                        color: #999;
                        font-size: .12rem;
                        display: block;
                        margin: .02rem 0;

                      }
                    }
                    .good_old{
                      .good_price{
                        color: #777;
                        font-size: .12rem;
                        display: block;
                        margin-top: .02rem;
                        padding: .08rem 0;
                        i{
                          font-style: normal;
                        }
                        b{
                          font-size: .16rem;
                          font-weight: 700;
                          color: #111;
                        }
                      }
                    }
                }          
                .iscoupon{
                  position: relative;
                  div{
                    position: absolute;
                    bottom:0;
                    right:0;
                    img{
                    height:.4rem;
                    width: .56rem;
                  }
                  }
                
                }
              }
              .van-button--round{
                font-size: .12rem;
                width: 1rem;
                height: .3rem;
                line-height: .3rem;
                padding: 0;
                display: flex;
                -ms-flex-align: center;
                align-items: center;
                -ms-flex-pack: center;
                justify-content: center;
                text-align: center;
                background-color: #ffcd09;
                border-radius: .15rem;
                .van-button__text{
                  margin-top: 0;
                  color: #000;
                }
              }
              .tig{
                font-size: .1rem;
                color: #fff;
                text-align: center;
                width: .5rem;
                height: .46rem;
                padding: .09rem 0;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
                background: -webkit-gradient(linear,left top,right top,from(#ff4949),to(#ff6830));
                background: -webkit-linear-gradient(left,#ff4949,#ff6830);
                background: -o-linear-gradient(left,#ff4949,#ff6830);
                background: linear-gradient(90deg,#ff4949,#ff6830);
                border-radius: 0 .16rem;
                position: absolute;
                left: .14rem;
                top: .02rem;
              }
            }
          }
      }
    }
  }
 
</style>
