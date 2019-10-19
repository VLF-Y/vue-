<template>
  <div class="mui-content">
    <!--顶部-->
    <header class="self-header">
      <figure>
        <img src="images/qing-tou.png" />
      </figure>
      <figcaption>
        <h3>甄小喵</h3>
        <p>账号：zk02564</p>
      </figcaption>
      <button type="button">
        <span>签到</span>
      </button>
      <ul>
        <li>
          <a href="integral.html">积分：20000</a>
        </li>
        <li>
          <a href="#">引荐人数：1200</a>
        </li>
      </ul>
    </header>
    <section class="self-con">
      <ul class="mui-table-view mui-table-view-chevron">
        <router-link
          tag="div"
          active-class="active"
          class="mui-table-view-cell mui-media"
          to="/Mycar"
        >
          <a class="mui-navigate-right" href="javascript:;"></a>
          <img class="mui-media-object mui-pull-left" src="images/acar.png" />
          <p class="car">我的车</p>
        </router-link>
        <router-link
          tag="div"
          active-class="active"
          class="mui-table-view-cell mui-media"
          to="/Gowu"
        >
          <a class="mui-navigate-right" href="javascript:;"></a>
          <img class="mui-media-object mui-pull-left" src="images/sdasa.png" />
          <p class="car">购物车</p>
        </router-link>
      </ul>
    </section>
  </div>
</template>
<style scoped>
.self-header {
  width: 100%;
  overflow: hidden;
  background-color: #0867cb;
  padding-top: 2%;
}
.self-header figure {
  width: 20%;
  overflow: hidden;
  height: 0;
  padding-bottom: 20%;
  border-radius: 50%;
  margin-top: 7%;
  margin-left: 6%;
  margin-right: 4%;
  margin-bottom: 8%;
  float: left;
}
.self-header figure img {
  width: 130%;
}
.self-header figcaption {
  margin-right: 3%;
  width: 45%;
  float: left;
  color: #fff;
  margin-top: 10%;
}
.self-header figcaption h3 {
  font-weight: normal;
  font-size: 1.3em;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
}
.self-header figcaption p {
  font-size: 1em;
  line-height: 1.9;
  text-overflow: ellipsis;
  white-space: nowrap;
  word-break: keep-all;
  overflow: hidden;
  color: #fff;
}
.self-header button {
  width: 12%;
  border: solid 1px #fff;
  border-radius: 0.2em;
  background: none;
  margin-top: 13%;
  padding: 1% 1%;
  padding-left: 7%;
  background-image: url(../../public/images/self-icon001.png);
  background-repeat: no-repeat;
  background-size: 26%;
  background-position: 12%;
}
.self-header button span {
  color: #fff;
  font-size: 1.1em;
}
.self-header ul {
  width: 100%;
  padding: 4% 0;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.2);
  border-top: solid 1px rgba(255, 255, 255, 0.3);
  display: table;
}
.self-header ul li {
  display: table-cell;
  text-align: center;
  color: #fff;
  font-size: 1.1em;
  overflow: hidden;
  white-space: nowrap;
  word-break: keep-all;
}
.self-header ul li a {
  color: #fff;
  width: 100%;
}
.chebox .mui-bar-nav {
  box-shadow: 0 1px 6px #d7d7d7 !important;
}
.chebox .mui-bar select {
  width: 26%;
  text-align: center;
  background-color: #f7f7f7;
  color: #1ea5ff;
}

.self-con .mui-navigate-right {
  font-size: 1.8em;
}
.self-con .mui-navigate-right p {
  font-size: 70%;
  color: #333;
  padding: 5% 0;
  margin: 0 16%;
}

.self-con .car{
	font-size: 70%;
    color: #333;
    padding: 5% 0;
    margin: 0 16%;
}
.mui-navigate-right:after, .mui-push-left:after, .mui-push-right:after {
    font-family: Muiicons;
    font-size: inherit;
    line-height: 1;
    position: absolute;
    top: 50%;
    display: inline-block;
    transform: translateY(-50%);
    text-decoration: none;
    color: #bbb;
}
</style>