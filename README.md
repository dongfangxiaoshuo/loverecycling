## 爱回收(前端)

> 预览
https://dongfangxiaoshuo.github.io/#/

> 框架及插件

###### VueCli3+Scss+Vant+Router+VueX



> 页面及功能

#### 首页

###### 地理定位(百度)->点击跳转全国市级手动选择定位
```
 created(){
    var that = this;
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        that.my_city=r.address.city;
          console.log(r.address.city);
          // alert('您的位置：'+r.point.lng+','+r.point.lat);
      }
      else {
          alert('failed'+this.getStatus());
      }        
    },{enableHighAccuracy: true})


  }

```
#### 活动

#### 服务站

#### 我的

#### 手动选择城市
###### 点击右侧栏,左侧自动跳转对应位置
``` 
to_city(index){
      if(index==0){
        window.scrollTo(0,0);
      }
      let city_num = 0;
      //获取点击index之前所有城市的数量和标签的数量
      for(let i=1;i<this.national_cities.length;i++){
        city_num+=this.national_cities[i].lists.length;      
        if(index==i){
          city_num-=this.national_cities[i].lists.length;  
          this.scroll(city_num,i);
          return;
        }
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
 ```



