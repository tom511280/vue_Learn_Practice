<template>
    <div class="home">
    <!--banner-->
    <slider></slider>
    <!--home列表-->
    <list></list>
    </div>
</template>
<script>
import slider from './slider.vue';
import list from './list.vue';

export default {
    components:{
        slider,list
    }
}
</script>