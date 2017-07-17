<template>
  <div>
    <div id="app">
      <hello></hello>
      <my-component></my-component>
      <parentComponent></parentComponent>
    </div>
    ------------------------------
    <div id="app1">
      <parentComponent></parentComponent>
    </div>
    ------------------------------
    <div id="app2">
      <!-- <scriptComponent></scriptComponent> -->
      <!-- {{scriptComponent}} -->
    </div>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import myComponent from './components/myComponent.vue'
import parentComponent from './components/parentComponent.vue'
console.log(parentComponent)
// import scriptComponent1 from './components/script.js'
// console.log(scriptComponent1)
export default {
  name: 'app',
  components: {
    Hello,
    myComponent,
    parentComponent/*,
    scriptComponent*/
  }/*,
  data () {
    return {
      scriptComponent: scriptComponent1
    }
  }*/
}
</script>

<style>
</style>
