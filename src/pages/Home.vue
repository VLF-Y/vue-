<template>
    <div class="home">
        <Header></Header> 
        <Slider></Slider>
        <Pro></Pro>
        <List></List>
    </div>
</template>
<script>
import Header from '@/components/Header'
import Slider from '@/components/Slider.vue'
import Pro from '@/components/Pro.vue'
import List from '@/components/List.vue'
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe).use(SwipeItem);


export default {
    components:{
        Header,
        Slider,
        Pro,
        List
    }
}
</script>