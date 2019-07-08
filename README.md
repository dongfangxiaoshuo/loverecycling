## 爱回收(前端)

> 框架及插件

###### VueCli3+Scss+Vant+Router+VueX

> 页面及功能

#### 首页

###### 地理定位(百度Api)->点击跳转全国县市级手动选择定位
```var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        that.my_city=r.address.city;
          console.log(r.address.city);
          // alert('您的位置：'+r.point.lng+','+r.point.lat);
      }
      else {
          alert('failed'+this.getStatus());
      }        
    },{enableHighAccuracy: true}) ```
###### 搜索框->点击跳转搜索页面

#### 活动

###### 吸顶

#### 服务站

###### 根据本市遍历

#### 我的

###### 登陆/注册

