<template>
  <div class="inbox">
    <div class="mui-slider" id="slider">
      <ul class="mui-slider-group mui-slider-loop">
        <li class="mui-slider-item">
          <a href="#">
            <img src="images/qing-tou.png" />
          </a>
        </li>
        <li class="mui-slider-item">
          <a href="#">
            <img src="images/qing-tou.png" />
          </a>
        </li>
        <li class="mui-slider-item">
          <a href="#">
            <img src="images/qing-tou.png" />
          </a>
        </li>
        <li class="mui-slider-item">
          <a href="#">
            <img src="images/qing-tou.png" />
          </a>
        </li>
        <li class="mui-slider-item">
          <a href="#">
            <img src="images/qing-tou.png" />
          </a>
        </li>
      </ul>
      <ul class="mui-slider-indicator">
        <li class="mui-indicator mui-active"></li>
        <li class="mui-indicator"></li>
        <li class="mui-indicator"></li>
      </ul>
    </div>  
  </div>
</template>
<style>
.inbox .mui-slider {
  width: 100%;
  height: 8em;
  overflow: hidden;
}
.inbox .mui-slider .mui-slider-group {
  width: 100%;
}
.inbox .mui-slider ul li img {
  width: 100%;
  min-height: 100%;
}


</style>
<script>
import $ from 'jquery';
import Swipe from '../assets/js/swipe.js';

export default {
  props:['slider'],
  mounted(){   // 钩子函数：渲染完毕后再控制
    new Swipe($('#slider mui-slider-item')[0],{
      auto:2000,
      continuous:true,
      stopPropation:true,
      callback:function (index,element){
        $('#slider mui-slider-item').removeClass('active');
        $('#slider mui-slider-item').eq(index).addClass('active');
      }
    })

  },
}


</script>