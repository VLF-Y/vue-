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
export default {
    components:{
        Header,
        Slider,
        Pro,
        List
    }
}
</script>