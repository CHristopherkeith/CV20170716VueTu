<template>
  <div>
    <div id="app">
    ---------------table---------------
      <div id="searchBar">
        Search <input type="text" v-model="searchQuery" />
      </div>
      <simple-grid :data="gridData" :columns="gridColumns" :filter-key="searchQuery">
      </simple-grid>
    ----------------hello--------------
      <hello></hello>
    -----------------my-component-------------
      <my-component v-bind:my-name="name" v-bind:my-age="age">
      <h1>slot将会显示的内容</h1>  
      </my-component>
    ----------------app parentComponent--------------
      <parentComponent></parentComponent>
    </div>

    <!-- <div id="app1">
      <parentComponent></parentComponent>
    </div> -->
  </div>
</template>

<script>
import Vue from 'vue'
import filters from './components/filter.js'
console.log(filters)
import Hello from './components/Hello.vue'
import myComponent from './components/myComponent.vue'
import parentComponent from './components/parentPropsComponent.vue'
import simpleGrid from './components/simpleGrid.vue'
export default {
  name: 'app',
  components: {
    simpleGrid,
    Hello,
    myComponent,
    parentComponent/*,
    scriptComponent*/
  },
  data () {
    return {
      name: 'cl',
      age: 27,
      searchQuery: '',
      gridColumns: ['name', 'age', 'sex'],
      gridData: [{
        name: 'Jack',
        age: 30,
        sex: 'Male'
      }, {
        name: 'Bill',
        age: 26,
        sex: 'Male'
      }, {
        name: 'Tracy',
        age: 22,
        sex: 'Female'
      }, {
        name: 'Chris',
        age: 36,
        sex: 'Male'
      }]
    }
  }
}
</script>

<style>
</style>
