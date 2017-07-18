<template>
  <div>
    <div id="app">
      <hello></hello>
      <my-component v-bind:my-name="name" v-bind:my-age="age"></my-component>
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
import Vue from 'vue'
import Hello from './components/Hello.vue'
import myComponent from './components/myComponent.vue'
import parentComponent from './components/parentPropsComponent.vue'
// console.log(parentComponent)
// import scriptComponent1 from './components/script.js'
// console.log(scriptComponent1)
export default {
  name: 'app',
  components: {
    Hello,
    myComponent,
    parentComponent/*,
    scriptComponent*/
  },
  data () {
    return {
      name: 'cl',
      age: 27
    }
  }
}
</script>

<style>
</style>
