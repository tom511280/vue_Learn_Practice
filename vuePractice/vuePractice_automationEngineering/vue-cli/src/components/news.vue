<template>
    <div class="news">
            <h3> 我是news組件</h3>
            <!-- tag="li" 可以將路由解析成span標籤li 預設為<a> -->
            <!-- 有可能兩個<a>包覆會有問題 -->    
            <router-link :active-class="$style.active" tag="li" to="/news/detail/001"><a href="">列表001</a></router-link>
            <router-link :active-class="$style.active" tag="li" to="/news/detail/002?a=1&b=2">列表002</router-link>
            <router-link :active-class="$style.active" tag="li" to="/news/detail/003">列表003</router-link>
            <!-- 路由也可以使用數據綁定的方式 -->
            <router-link :active-class="$style.active" tag="li" :to="{name:'detail',params:{aid:'004'}}">列表004</router-link>
            <router-link :active-class="$style.active" tag="li" :to="{name:'detail',params:{aid:'005'}, query:{data:'ttt'}}">列表005</router-link>
            <router-view></router-view>
            <loading></loading>
        </div>
</template>
<style module>
/**解決CSS模塊化的方法**/
/**01終極解決方案 命名空間**/
.new-active{background:yellow}
/**02解決方案 模塊化 <style module>**/
.active{background:yellow}
/**03解決方案 應急 <style scoped>**/
/*.active{background:yellow}*/
</style>

