<template>
 <div>


 <div class="frame-search">
    <div class="logo"></div>
    <div class="div-search">
        <div class="btn" id="btn-search">
            <div></div>
        </div>
        <div class="text">
            <input type="text" maxlength="20" class="inputclass" id="keyvalue" placeholder="请输入手机型号或是手机品牌">
        </div>
    </div>
</div>

<mt-swipe :auto="4000" class="my-swipe">
                           
  <mt-swipe-item class="slide1" v-for="(ee,ii) in swipeList" :key="ee.id">
        
        <img  v-bind:title="ee.title" v-bind:src="'http://www.100189.com/uploadpic/'+ee.pic">
  
  </mt-swipe-item>
  <!--
  <mt-swipe-item class="slide2">2</mt-swipe-item>
  <mt-swipe-item class="slide3">3</mt-swipe-item>
  -->
</mt-swipe>


<dl class="index-mainbtn">
    <li class="bg-i1"><a href="http://www.100189.com/h5/user/recharge.htm">
        <div><label></label></div>
        <h6>充值中心</h6></a></li>
    <li class="bg-i2"><a href="output/numer_custom.php">
        <div><label></label></div>
        <h6>号码定制</h6></a></li>
    <li class="bg-i3"><a href="output/package_search.php">
        <div><label></label></div>
        <h6>套餐定制</h6></a></li>
    <li class="bg-i4"><a href="output/phone_list.php">
        <div><label></label></div>
        <h6>手机</h6></a></li>
    <li class="bg-i5"><a href="/_h5v2/getliuliang/liuliang_get.php">
        <div><label></label></div>
        <h6>流量加油</h6></a></li>
    <li class="bg-i6"><a href="feature/valuation_index.php">
        <div><label></label></div>
        <h6>估值换新</h6></a></li>
	<li class="bg-i7"><a href="lease/">
        <div><label></label></div>
        <h6>租手机</h6></a></li>
	<li class="bg-i8"><a href="stages/">
        <div><label></label></div>
        <h6>分期购</h6></a></li>
    <li class="bg-i9"><a href="http://www.100189.com/h5/activity/vip.htm">
        <div><label></label></div>
        <h6>领话费</h6></a></li>
	<li class="bg-i10"><a href="/_h5v2/packagecure/">
        <div><label></label></div>
        <h6>套餐诊断</h6></a></li>
</dl>




<div class="index-product" id="index-product">
  <div class="layers layer01">
    <div class="ad"></div>
    <div class="list">
      <div class="row1">
        <div class="col1"> <a href="http://www.100189.com/_h5v2/activity/20161117.htm"><img src="http://www.100189.com/uploadpic/20161126053831.jpg" class="lazy"></a> </div>
        <div class="col1"> <a href="http://www.100189.com/h5/user/recharge.htm"><img src="http://www.100189.com/uploadpic/20161126053838.jpg" class="lazy"></a> <a href="http://www.100189.com/_h5v2/output/phone_detail.php?product_id=2047&amp;phone_basic_id=147684269967156219&amp;color_id=10&amp;standard_id=7&amp;capacity_id=5"><img src="http://www.100189.com/uploadpic/20161126053848.jpg" class="lazy"></a> </div>
      </div>
      <div class="row2 col3"> <a href="http://www.100189.com/_h5v2/output/package_list.php?key=日租卡"><img src="http://www.100189.com/uploadpic/20161126053856.jpg" class="lazy"></a> <a href="http://www.100189.com/_h5v2/output/phone_detail.php?product_id=2048&amp;phone_basic_id=147684371993299900&amp;color_id=5&amp;standard_id=7&amp;capacity_id=5"><img src="http://www.100189.com/uploadpic/20161126053904.jpg" class="lazy"></a> <a href="http://www.100189.com/_h5v2/output/fitting_detail.php?product_id=347&amp;fitting_basic_id=147944841176712579&amp;color_id=4"><img src="http://www.100189.com/uploadpic/20161126053913.jpg" class="lazy"></a> </div>
    </div>
  </div>

</div>







<div class="footer">
	<div class="index">
		<a href="javascript:;"><img src="http://www.100189.com/_h5v2/images/images/index_53.jpg"></a>&nbsp;&nbsp;
		<a href="http://www.100189.com/_h5v2/images/yyzz.jpg"><img src="http://www.100189.com/_h5v2/images/images/index_55.jpg"></a>&nbsp;&nbsp;
		<a href="javascript:;"><img src="http://www.100189.com/_h5v2/images/images/index_57.jpg"></a>
	</div>
	<div class="link">
		<a href="http://www.100189.com/_h5v2/images/yyzz.jpg">营业执照</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="javascript:;">友情链接</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="javascript:;">合作申请</a>&nbsp;&nbsp;&nbsp;&nbsp;
		<a href="javascript:;">站长统计</a></div>
	<div class="copyright">ICP备案证书号：苏ICP备11004208号<br>经营许可证编号:苏B1-20150050
	</div>
</div>
<div style="height:60px;"></div>
<nav class="navbar navbar-default navbar-fixed-bottom bg-white">
  <div class="bottom-btn"> <a href="index.php">
    <div></div>
    <label>首页</label>
    </a> <a href="output/cart.php">
    <div><span class="cartnum bg-red">
      <label class="shrink" id="cart_count">0</label>
      </span></div>
    <label>购物车</label>
    </a> <a href="output/my-index.php">
    <div></div>
    <label>个人中心</label>
    </a> </div>
</nav>


</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';


  export default {
   data() {
      return {
        msg: "test",
        swipeList:[]
      }
    },
    created(){
        this.ajax_render();
        console.log(this.swipeList);
    },
    mounted() {
        //this.ajax_render();

    },
    methods:{
        islide:function(data){
          var _list = [];
			    $.each(data, function (i, e) {
				  _list.push({
                    "height": "100%",
                    "width": "100%",
                    "content": "<div><a href='"+e.url+"'><img src='http://www.100189.com/uploadpic/"+e.pic+"' /></a></div>"
                });
          });
          console.log(data);
          var islider = new iSlider({
                type: 'dom',
                data: _list,
                isAutoplay: true,
                dom: document.getElementById("iSlider-wrapper"),
                isLooping: true
            }); 
       },       
      
        ajax_render:function(){
                  let that=this;
                 
                  $.get("http://localhost:8080/static/fakedate/json1.json",(response)=>{                    
                    if(response.data && response.data.slide){
                           that.swipeList=response.data.slide;
                           console.log(that.swipeList);
                           //that.islide(response.data.slide);                
                           // console.log(response.data.slide);
                    }
                }); 
                
        }
    }
    
  }
</script>

<style scoped>

.my-swipe {
  height: 160px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.my-swipe img{
   width:100%;
   height:100%
}

.slide1 {
  background-color: #0089dc;
  color: #fff;
}

.slide2 {
  background-color: #ffd705;
  color: #000;
}

.slide3 {
  background-color: #ff2d4b;
  color: #fff;
}

.navbar-fixed-bottom{
    bottom: 0;
    margin-bottom: 0;
    border-width: 1px 0 0;

        position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;

}
		

.layer06,.layer05{display:none;}

   


</style>