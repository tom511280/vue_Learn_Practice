<template>
    <div class="detail">
            <h3>我是detail組件</h3>
            接收參數 : {{$route.params.aid}}
            接收數據 : {{$route.query.data}}
        </div>
</template>
<script>
export default {
    mounted(){
        console.log(this.$route.params);
        console.log(this.$route.query);
        console.log(this.$route.path);
    }
}
</script>