<template>
  <div class="choosecity">
    <section class="search">
      <van-search placeholder="请输入城市名称查询" v-model="city" />
    </section>
    
  

    <section class="indexbar">     
        <div v-for="city_list in national_cities" v-bind:key="city_list.id" class="national_cities">

          <div v-if="city_list.title!='#'" class="national_cities_list">
            <div class="national_cities_title">{{city_list.title}}</div>
            <div v-for="city_item in city_list.lists" v-bind:key="city_item.id" class="national_cities_item">{{city_item}}</div>
          </div>

          <div v-else>
            <div index="#"></div>
              <section class="hotcity">
                <div>
                  <span>热门城市</span>
                  <ul class="city_list" >
                    <li v-for="city in hot_city" v-bind:key="city.id" class="city_item">{{city.name}}市</li>
                  </ul>
                </div>
              </section>
          </div>

        </div>
        <div class="touchBar">
          <ul>
            <li v-for="(touchBar,index) in indexList" v-bind:key="touchBar.id" @click="to_city(index)">{{touchBar}}</li>
          </ul>
        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'choosecity',
  data(){
    return{
      city:"",
      sticky:false,
      hot_city:[
        {
          id:1,
          name:"上海"
        },
        {
          id:2,
          name:"北京"
        },
        {
          id:3,
          name:"成都"
        },
        {
          id:4,
          name:"重庆"
        }, 
        {
          id:5,
          name:"东莞"
        },
        {
          id:6,
          name:"福州"
        },  
        {
          id:7,
          name:"佛山"
        },
        {
          id:8,
          name:"广州"
        },
        {
          id:9,
          name:"杭州"
        },
        {
          id:10,
          name:"合肥"
        },
        {
          id:11,
          name:"昆明"
        },
        {
          id:12,
          name:"南京"
        },
          {
          id:13,
          name:"宁波"
        },
        {
          id:14,
          name:"青岛"
        },
          {
          id:15,
          name:"深圳"
        },
        {
          id:16,
          name:"苏州"
        },
          {
          id:17,
          name:"天津"
        },
        {
          id:18,
          name:"无锡"
        },
          {
          id:19,
          name:"武汉"
        },
        {
          id:20,
          name:"西安"
        },
          {
          id:21,
          name:"宜昌"
        },
        {
          id:22,
          name:"郑州"
        },
        {
          id:23,
          name:"中山"
        },
      ],
      indexList: ["#",'A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
      national_cities:[	 
        {
          "title":"#"
        },
        {

            "title":"A",
            "lists":[
            "鞍山市","安阳市","安庆市","阿坝藏族羌族自治州","安顺市","阿勒泰地区","阿克苏地区","安康市","阿里地区","阿拉尔市","阿拉善盟","阿拉山口市","澳门特别行政区"
              ]
        },
        {
            "title":"B",
            "lists":["北京市","保定市","宝鸡市","包头市","蚌埠市","北海市","本溪市","滨州市","巴音郭楞蒙古自治州","亳州市","白山市","保山市","百色市","白城市","巴中市","巴彦淖尔市","白银市","博尔塔拉蒙古自治州","北屯市","白沙黎族自治县保亭黎族苗族自治县"
              ]
        },
        {
            "title":"C",
            "lists":["成都市","重庆市","长沙市","长春市","常州市","承德市","沧州市","滁州市","常德市","潮州市","赤峰市","长治市","池州市","郴州市","昌吉回族自治州","朝阳市","崇左市","楚雄彝族自治州","昌都市","昌江黎族自治县澄迈县"
              ]
        },
        {
            "title":"D",
            "lists":["大连市","东莞市","大同市","大庆市","东营市","丹东市","大理白族自治州","德州市","迪庆藏族自治州","德阳市","达州市","大兴安岭地区德宏傣族景颇族自治州","定西市","定安县东方市","儋州市","钓鱼岛"
              ]
        },
        {
            "title":"E",
            "lists":["鄂尔多斯市","恩施土家族苗族自治州","鄂州市"]
        },
        {
            "title":"F",
            "lists":["福州市","佛山市","抚顺市","阜新市","阜阳市","抚州市","防城港市"
              ]
            
        },
        {
            "title":"G",
            "lists":["广州市","贵阳市","桂林市","赣州市","贵港市","甘孜藏族自治州","广元市","广安市","甘南藏族自治州","固原市","果洛藏族自治州"]
            
        },
        {
            "title":"H",
            "lists":["杭州","哈尔滨","合肥","海口","呼和浩特","海北","海东","海南","海西","邯郸","汉中","鹤壁","河池","鹤岗","黑河","衡水","衡阳","河源","贺州","红河","淮安","淮北","怀化","淮南","黄冈","黄南","黄山","黄石","惠州","葫芦岛","呼伦贝尔","湖州","菏泽"
              ]
        },
        {
            "title":"J",
            "lists":["济南市","嘉兴市","金华市","江门市","九江市","锦州市","济宁市","荆州市","景德镇市","揭阳市","佳木斯市","鸡西市","晋中市","荆门市","焦作市","吉安市","酒泉市","晋城市","嘉峪关市","济源市","金昌市","吉林市"
              ]
                  
        },
        {
            "title":"K",
            "lists":["昆明市","开封市","喀什地区克拉玛依市","克孜勒苏柯尔克孜自治州","可克达拉市","昆玉市"]
      
        },
        {
            "title":"L",
            "lists":["兰州市","丽江市","廊坊市","洛阳市","乐山市","连云港市","柳州市","临沂市","拉萨市","辽阳市","龙岩市","聊城市","临汾市","丽水市","凉山彝族自治州","莱芜市","泸州市","六安市","漯河市","辽源市","六盘水市","娄底市","陇南市","来宾市","临夏回族自治州","临沧市","吕梁市","临高县乐东黎族自治县林芝市"
                          ]
      
        },
        {
            "title":"M",
            "lists":["茂名市","绵阳市","梅州市","马鞍山市","牡丹江市","眉山市"]
            
        },
        {
            "title":"N",
            "lists":["南京市","宁波市","南昌市","南宁市","南通市","南平市","南阳市","宁德市","南充市","内江市","怒江傈僳族自治州","那曲市"
                          ]
        },
        {
            "title":"P",
            "lists":["盘锦市","濮阳市","莆田市","平顶山市","萍乡市","攀枝花市","平凉市","普洱市"]
      
        },
        {
            "title":"Q",
            "lists":["青岛市","泉州市","秦皇岛市","清远市","衢州市","齐齐哈尔市","黔东南苗族侗族自治州","潜江市","钦州市","曲靖市","庆阳市","七台河市","黔南布依族苗族自治州","黔西南布依族苗族自治州","琼海市"]
            
        },
        {
            "title":"R",
            "lists":["日照市"]
        },
        {
            "title":"S",
            "lists":["上海市","深圳市","苏州市","沈阳市","三亚市","石家庄市","汕头市","绍兴市","韶关市","上饶市","十堰市","宿州市","邵阳市","三明市","松原市","四平市","宿迁市","汕尾市","商丘市","石河子市","遂宁市","随州市","三门峡市","石嘴山市","朔州市","商洛市","双鸭山市","绥化市","思茅区山南市","神农架林区三沙市","双河市"
              ]
                  
        },
        {
            "title":"T",
            "lists":["天津市","太原市","台湾省台州市","唐山市","泰安市","泰州市","铁岭市","通化市","铜陵市","通辽市","天水市","塔城地区铜川市","天门市","图木舒克市","屯昌县铜仁市","铁门关市"
              ]
        },
        {
            "title":"W",
            "lists":["无锡市","武汉市","乌鲁木齐市","温州市","威海市","潍坊市","芜湖市","梧州市","渭南市","乌海市","吴忠市","武威市","文山壮族苗族自治州","乌兰察布市","万宁市","文昌市","五家渠市","五指山市"
              ]
                  
        },
        {
            "title":"X",
            "lists":["厦门市","西安市","西宁市","香港特别行政区徐州市","新乡市","邢台市","咸阳市","湘西土家族苗族自治州","许昌市","襄阳市","湘潭市","新余市","宣城市","咸宁市","信阳市","西双版纳傣族自治州","孝感市","忻州市","兴安盟","锡林郭勒盟仙桃市"
              ]
                  
        },
        {
            "title":"Y",
            "lists":["扬州市","烟台市","宜昌市","银川市","阳江市","盐城市","营口市","岳阳市","延安市","延边朝鲜族自治州","榆林市","宜宾市","云浮市","伊犁哈萨克自治州","雅安市","益阳市","玉溪市","宜春市","鹰潭市","玉林市","运城市","阳泉市","永州市","伊春市","玉树市"
              ]
            
        },
        {
            "title":"Z",
             "lists":["郑州市","珠海市","中山市","舟山市","镇江市","肇庆市","自贡市","淄博市","湛江市","张家口市","张家界市","株洲市","枣庄市","漳州市","遵义市","周口市","中卫市","驻马店市","张掖市","资阳市","昭通市"
              ]
            
        }
       ],
       key:0
    
      
    
    
    }
    
  },
  mounted() {
    

  },
  computed: {

  },
  methods:{
    to_city(index){
      if(index==0){
        window.scrollTo(0,0);
      }
      let city_num = 0;
      //获取点击index之前所有城市的数量和标签的数量
      for(let i=1;i<this.national_cities.length;i++){
         if(index==i){ 
          this.scroll(city_num,i);
          return;
        }
        city_num+=this.national_cities[i].lists.length;      
       
      }
    },
    //根据城市数量的高度和标签的高度跳转
    scroll(city_num,i){
      if(i==1){
        window.scrollTo(0,317);
      }else{
        let scroll_height = city_num*47+(i-1)*30+317;
        window.scrollTo(0,scroll_height);

      }
    
    }

    
  },
  

 
  
}
</script>


<style scoped lang="scss">
  .choosecity{
    margin-top:.44rem; 
    .search{
      width: 100%;
      max-width: 750px;
      position: fixed;
      top: .44rem;
      left: 0;
      right: 0;
      margin: 0 auto;
      z-index: 3;
      .van-search{
        background: #d8d8d8!important;
        padding: 8px 16px;
        .van-search__content{
          border-radius:.04rem;
        }
        .van-cell{
          padding: 3px 10px 3px 0;
        }
      }
    }
    .hotcity{
      width: 100%;
      background-color: #f2f2f2;
      div{
        padding:.13rem .15rem;
        span{
        color: #ccc;
        font-size:.14rem;
       }
       .city_list{
        color: #333;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: wrap;
        .city_item{
          height: .33rem;
          width: .7rem;
          border: 1px solid #e6e6e6;
          background-color: #fff;
          margin-top: .1rem;
          margin-right: .1rem;
          line-height: .33rem;
          text-align: center;
          font-size:.14rem;
        }
       }
      }
    
    }
    .indexbar{
      margin-top:.9rem; 
      .national_cities{
        width: 100%;
        background: #fff;
        .national_cities_title{
          height: .3rem;
          line-height: .3rem;
          padding: 0 .15rem;
          display: block;
          background-color: #f2f2f2
        }
        .national_cities_item{
          color: #333;
          font-size: .14rem;
          height: .46rem;
          line-height: .46rem;
          padding: 0 .15rem;
          border-bottom: 1px solid #f2f2f2;
        }
      }
      .touchBar{
        position: fixed;
        top: 0;
        right: 0;
        margin: 1rem 0 .15rem;
        width: .16rem;
        background-color: #fff;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        height: 100%;
        ul{
          li{
            display: block;
            width: .16rem;
            height: .22rem;
            text-align: center;
            line-height: .21rem;
            color: #333;
            font-size:.14rem;
          }
        }
      }
        
      }
    }

   
    

    
    
</style>
