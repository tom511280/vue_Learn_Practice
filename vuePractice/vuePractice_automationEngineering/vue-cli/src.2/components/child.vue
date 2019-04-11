<template>
    <div class="child">
        <h3>我是子組件</h3>
        <buycar></buycar>
    </div>
</template>
<script>
import buycar from './buycar'
export default {
    components:{
        buycar
    }
}
</script>