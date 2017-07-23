<template>
    <div id="app">
      <!-- search -->
      <div class="container">
        <div class="form-group">
          <label>Search</label>
          <input type="text" class="search-input" v-model="searchQuery" />
        </div>
      </div>
      <!-- search end -->
      <!-- table -->
      <div class="container">
        <simple-grid :data-list="people" :columns="columns" :search-key="searchQuery">
        </simple-grid>
      </div>
      <!-- table end -->
  </div>
</template>

<script>
import Vue from 'vue'
import filters from './components/filter.js'
import simpleGrid from './components/adminPage/simpleGrid.vue'
export default {
  name: 'app',
  components: {
    simpleGrid
  },
  data () {
    return {
      searchQuery: '',
      columns: [{
        name: 'name',
        isKey: true
      }, {
        name: 'age'
      }, {
        name: 'sex',
        dataSource: ['Male', 'Female']
      }],
      people: [{
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
  },
  methods: {
    
  }
}
</script>

<style>
</style>
