<template>
<div>
  <div>User {{ $route.params.id }}</div>
  <!-- 嵌套路由 -->
  <router-view></router-view>
</div>
</template>
 
<script>
export default {
  name: 'user',
  data () {
    return {
    }
  }
}
</script>