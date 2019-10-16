<template>
  <div class="com">
		<header class="mui-bar mui-bar-nav">
		    <select class="mui-btn mui-btn-block mui-pull-left">
		    	<option>全部</option>
		    	<option>进行中</option>
		    	<option>已完成</option>
		    	<option>已终止</option>
		    </select>
		    <h1 class="mui-title">4s订单</h1>
		</header>
		<!--底部-->	
		<footer class="mui-bar mui-bar-footer" style="padding: 0;">
			<ul>
				<li>
					<a href="index.html">
						 <span class="mui-icon mui-icon-home"></span>
					</a>
				</li>
				<li class="active">
					<a href="compose.html">
						 <span class="mui-icon mui-icon-compose"></span>
					</a>
				</li>
				<li>
					<a href="self.html">
						 <span class="mui-icon mui-icon-contact"></span>
					</a>
				</li>
				<li>
					<a href="set.html">
						 <span class="mui-icon mui-icon-gear"></span>
					</a>
				</li>
			</ul>	
		</footer>
		<div class="mui-content">
		  	<ul class="list">
		        <li class="mui-col-xs-12">
						<h1>已取消</h1>	
						<dl>
							
							<dt>京密路中心店</dt>
							<dd>￥0.00</dd>
							<small>|已取消</small>
						</dl>
		        </li>
		        <li class="mui-col-xs-12">
						<h1 class="blue">待确认</h1>	
						<dl>
							
							<dt>京密路中心店</dt>
							<dd>￥0.00</dd>
							<small class="blue">|等待确认</small>
						</dl>
		        </li>
		        <li class="mui-col-xs-12">
						<h1 class="suc">已成功</h1>	
						<dl>
							
							<dt>京密路中心店</dt>
							<dd>￥0.00</dd>
							<small class="blue">|已成功</small>
						</dl>
		        </li>
		    </ul>
		</div>
	</div>
</template>
<style scoped>
.com select{ width:20%; text-align: center; background-color: #f7f7f7;color: #1ea5ff;}
.com .list { width: 94%!important; margin: 3%; padding: 0;}
.com .list li{ border-radius: 0.3em;margin-bottom: 5%; background-color: #fff; border: solid 1px #d7d7d7; overflow: hidden; }
.com .list li h1{ background-color: #d7d7d7;margin-top: 0; text-align: center; padding: 10% 0; color:#fff;font-weight: normal; font-size: 1.4em;}
.com .list li dl{ padding: 3% 2%;}
.com .list li dt{ float: left;margin-bottom: 1%;}
.com .list li dd{ float: right;}
.com .list li small{ clear: both;display: block; color: #999; }
.com .list li .blue{ color: #198AD6;}
.com .list li .suc{ background-color:  #198AD6;}
</style>