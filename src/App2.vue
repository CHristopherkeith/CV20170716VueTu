<template>
  <div id="app1">
    <parentComponent></parentComponent>
  </div>
</template>

<script>
import parentComponent from './components/parentComponent.vue'
export default {
  name: 'app2',
  components: {
    parentComponent
  }
}
</script>

<style>
</style>
