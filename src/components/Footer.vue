<template>
  <footer class="mui-bar mui-bar-footer" style="padding: 0;">
    <ul>
      <router-link tag="li" active-class="active" to="/Home">
        <a href="javascript:;">
			<span class="mui-icon mui-icon-home"></span>
		    </a>
      </router-link>
	    <router-link tag="li" active-class="active" to="/Compose">
        <a href="javascript:;">
			<span class="mui-icon mui-icon-compose"></span>
		    </a>
       </router-link>
       <router-link tag="li" active-class="active" to="/Self">
        <a href="javascript:;">
			<span class="mui-icon mui-icon-contact"></span>
	    	</a>
      </router-link>
      <router-link tag="li" active-class="active" to="/Set">
        <a href="javascript:;">
			<span class="mui-icon mui-icon-gear"></span>
		    </a>
      </router-link>
    </ul>
  </footer>
</template>
<style scoped>
.mui-bar-footer .mui-bar-tab .mui-tab-item {
  color: #fff;
}
.mui-bar-footer .mui-bar-tab .mui-active {
  background-color: #198ad6;
}
.mui-bar-footer {
  background-color: #1ea5ff !important;
}
.mui-bar-footer ul {
  width: 100%;
  display: table;
}
.mui-bar-footer ul li {
  width: 25%;
  display: table-cell;
  text-align: center;
  color: #fff;
}
.mui-bar-footer ul li a {
  color: #fff;
}
.mui-bar-footer ul .active {
  background-color: #198ad6;
}
</style>