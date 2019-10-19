<template>
  <div class="banner">
    <ul class="clearfix">
      <router-link to="/Home" tag="li">
        <img src="images/qing-tou.png" alt />
      </router-link>
      <router-link to="/Compose" tag="li">
        <img src="images/qing-tou.png" alt />
      </router-link>
      <router-link to="/Set" tag="li">
        <img src="images/qing-tou.png" alt />
      </router-link>
      <router-link to="/Self" tag="li">
        <img src="images/qing-tou.png" alt />
      </router-link>
    </ul>
    <ul class="mui-slider-indicator">
      <li class="mui-indicator mui-active"></li>
      <li class="mui-indicator"></li>
      <li class="mui-indicator"></li>
    </ul>
  </div>
</template>
<script>
import $ from "jquery";
import Swipe from "../assets/js/swipe.js";

export default {
  props: ["banner"],
  mounted() {
    new Swipe($(".banner")[0], {
      auto: 2000,
      continuous: true,
      stopPropation: true,
      callback: function(index, element) {
        $(".banner ol li").removeClass("active");
        $(".banner ol li")
          .eq(index)
          .addClass("active");
      }
    });
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  z-index: 1;
}

.banner ul li {
  width: 6.4rem;
  height: 11rem;
  float: left;
  position: relative;
}

.banner ul li img {
  width: 100%;
  display: block;
}

.banner ul li .text-box {
  width: 5.8rem;
  padding: 0 0.3rem;
  height: 1.24rem;
  position: absolute;
  left: 0;
  bottom: 0;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
}

.text-box h2 {
  font-size: 0.3rem;
  font-weight: normal;
  margin-top: 0.22rem;
  line-height: 100%;
  margin-bottom: 0.22rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.text-box p {
  line-height: 100%;
}

.banner ol {
  position: absolute;
  right: 0.2rem;
  bottom: 0.2rem;
}

.banner ol li {
  width: 0.15rem;
  height: 0.15rem;
  background: #5477b2;
  float: left;
  border-radius: 50%;
  margin-right: 0.08rem;
}

.banner ol li.active {
  background: #fff;
}

.mui-slider-indicator{
    height: 10px;
    position: absolute;
    width: 55px;
    background: 0 0;
    left:0;
    right:0;
    margin:0 auto;
}

.banner .mui-slider-indicator .mui-indicator {
    display: inline-block;
    width: 6px;
    height: 6px;
    margin: 1px 6px;
    cursor: pointer;
    border-radius: 50%;
    box-shadow: 0 0 1px 1px rgba(130,130,130,.7);
}
</style>
