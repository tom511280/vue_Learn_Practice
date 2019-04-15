<template>
   <div class="newsList">
      <ul>
        <li v-for="(item, index) of list" :key="index">
          <router-link tag="a" :to="'detail/'+item.id+'?dataName='+dataName">
            <!--detail/1?dataName=home-->
            <a href="javascript:;">
              <h2>{{item.id}}.{{item.title}}</h2>
              <p>{{item.detail}}</p>
            </a>
          </router-link>
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  props:['list','dataName']
  
}
</script>