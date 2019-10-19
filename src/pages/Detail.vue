<template>
    <div class="bao">
	<!--顶部-->
	<header class="mui-bar mui-bar-nav you">
        <router-link tag="div" active-class="active" to="/Home">
         <a href="javascript:;" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
          <h1 class="mui-title">保险钣金喷漆</h1>
        </router-link>
	</header>
	<!--底部-->	
	<div class="mui-content">
		<article>边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了边想怎么做边做太痛苦了</article>
		<ul>
			<li>
				<div id="feedback" class="mui-page feedback">
						<div class="mui-page-content">
							<p>请上传车辆受损照片</p>
							<div id='image-list' class="row image-list">
							</div>
						</div>
				</div>
			</li>
		</ul>
	</div>
</div>
</template>
<style scoped>
.bao article{ color: #666; line-height: 30px; padding: 3%; text-align: justify;}
.feedback .image-list {
    width: 100%;
    height: 85px;
    background-size: cover;
    padding: 10px 10px;
    overflow: hidden;
}
.feedback .row {
    width: 100%;
    background-color: #fff;
}
.feedback .image-item input[type="file"] {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
    z-index: 0;
}
</style>