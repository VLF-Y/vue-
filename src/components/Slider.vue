<template>
  <div class="banner">
    <swipe class="my-swipe" :speed="500">
      <swipe-item class="slide">
        <img src="images/qing-tou.png" alt />
      </swipe-item>
    </swipe>
    <swipe class="my-swipe" :speed="500">
      <swipe-item class="slide">
        <img src="images/qing-tou.png" alt />
      </swipe-item>
    </swipe>
    <swipe class="my-swipe" :speed="500">
      <swipe-item class="slide">
        <img src="images/qing-tou.png" alt />
      </swipe-item>
    </swipe>
    <swipe class="my-swipe" :speed="500">
      <swipe-item class="slide">
        <img src="images/qing-tou.png" alt />
      </swipe-item>
    </swipe>
    <swipe class="my-swipe" :speed="500">
      <swipe-item class="slide">
        <img src="images/qing-tou.png" alt />
      </swipe-item>
    </swipe>
    <swipe class="my-swipe" :speed="500">
      <swipe-item class="slide">
        <img src="images/qing-tou.png" alt />
      </swipe-item>
    </swipe>
  </div>
</template>

<script>

import 'vue-swipe/dist/vue-swipe.css'
import { Swipe, SwipeItem } from 'vue-swipe';
export default {
  components: {
    'swipe': Swipe,
    'swipe-item': SwipeItem
  }
}

</script>

<style scoped>
.my-swipe {
  height: 200px;
  color: #fff;
  font-size: 30px;
  text-align: center;
}

.slide {
  height: 200px;
}
.slide img{
  height: 200px;
}

</style>