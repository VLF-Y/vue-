<template>
<div class="bao">
	<!--顶部-->
	<header class="mui-bar mui-bar-nav you">
        <router-link tag="div" active-class="active" to="/Self">
         <a href="javascript:;" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
          <h1 class="mui-title">保险钣金喷漆</h1>
        </router-link>
	</header>
    <div class="mui-content">
	  		<ul id="OA_task_2" class="mui-table-view">
				
				<li class="mui-table-view-cell">
					<!--<div class="mui-slider-left mui-disabled">
						<a class="mui-btn mui-btn-red">编辑</a>
					</div>-->
					<div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red">删除</a>
					</div>
					<div class="mui-slider-handle">
						<img src="images/logogog.png"/>
						<p>比亚迪f0</p>
						<span class="mui-pull-right">￥999元</span>
					</div>
				</li>
				<li class="mui-table-view-cell">
					<!--<div class="mui-slider-left mui-disabled">
						<a class="mui-btn mui-btn-red">编辑</a>
					</div>-->
					<div class="mui-slider-right mui-disabled">
						<a class="mui-btn mui-btn-red">删除</a>
					</div>
					<div class="mui-slider-handle">
						<img src="images/logogog.png"/>
						<p>比亚迪f0</p>
						<span class="mui-pull-right">￥999元</span>
					</div>
				</li>
			</ul>	
			<button class="btn">
				<a href="index.html" >添加商品</a>
			</button>
	     </div>
	</div>
</template>
<style scoped>
.gouwu .mui-table-view-cell span{ padding: 2% 0; color: #ff5a00;}
.gouwu button a{color: #fff;}
.gouwu button a {
    color: #fff;
        }
.btn {
    background-color: #ff5a00;
    border: none;
    width: 30%;
    margin: 6% 30%;
    padding: 3% 5%;
    text-align: center;
}
</style>