<template>
  <div class="inbox">
    <div class="header"></div>
    <header class="mui-bar mui-bar-nav">
      <select class="mui-btn mui-btn-block mui-pull-left">
        <option>北京</option>
        <option>上海</option>
        <option>广东</option>
        <option>深圳</option>
        <option>北京</option>
        <option>上海</option>
        <option>广东</option>
        <option>深圳</option>
      </select>
      <h1 class="mui-title">4s店</h1>
    </header>
  </div>
</template>
<style scoped>
.header{
  height:44px;
}
.inbox .mui-bar-nav {
  box-shadow: 0 1px 6px #d7d7d7 !important;
}
.inbox .mui-bar select {
  width: 26%;
  text-align: center;
  background-color: #f7f7f7;
  color: #1ea5ff;
}
.inbox .mui-bar h1 {
  height: 100%;
  width: 40% !important;
  margin: 0 20% !important;
  text-align: center;
  overflow: hidden;
}
.inbox .mui-bar h1 img {
  max-height: 100%;
  width: 100%;
  vertical-align: middle;
}

</style>
