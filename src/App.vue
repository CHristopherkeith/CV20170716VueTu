<template>
  <div id="app">
    <hello></hello>
    <my-component></my-component>
    <parentComponent></parentComponent>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import myComponent from './components/myComponent.vue'
import parentComponent from './components/parentComponent.vue'
export default {
  name: 'app',
  components: {
    Hello,
    myComponent,
    parentComponent
  }
}
</script>

<style>
</style>
