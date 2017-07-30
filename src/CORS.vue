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
        <simple-grid :data-list="people" :columns="columns" :search-key="searchQuery" :apiUrl="apiUrl" v-on:refresh-item="refreshItem">
        </simple-grid>
      </div>
      <!-- table end -->
  </div>
</template>

<script>
// import Vue from 'vue'
import filters from './components/filter.js'
import AjaxHelper from './components/AjaxHelper.js'
import simpleGrid from './components/CORS/simpleGrid.vue'
// simpleGrid.$watch('show', function(newVal, oldVal){
//     if(!newVal){
//         // this.item = {}
//         console.log('22')
//     }
// })
var ajaxHelper = new AjaxHelper()
export default {
  name: 'app',
  components: {
    simpleGrid
  },
  data () {
    return {
      searchQuery: '',
      // columns: [{
      //   name: 'name',
      //   isKey: true
      // }, {
      //   name: 'age'
      // }, {
      //   name: 'sex',
      //   dataSource: ['Male', 'Female']
      // }],
      columns: [{
        name: 'customerId',
        isKey: true
      }, {
        name: 'companyName'
      }, {
        name: 'contactName'
      },{
        name: 'phone'
      }],
      people: [],
      apiUrl: 'http://211.149.193.19:8080/api/customers'
    }
  },
  methods: {
    getCustomers: function() {
        var vm = this,
            callback = function(data) {
                // console.log(data)
                // console.log(vm.columns)
                // vm.$set(vm.people,0,data[0])
                vm.people = data;
                // console.log(vm.people)
            }
            // errorCallback = function(xhr, errorType, error){
            //   alert('user defined')
            //   alert('Ajax request error, errorType: ' + errorType +  ', error: ' + error)
            // }
        ajaxHelper.get(vm.apiUrl, null, callback)
        // ajaxHelper.jsonp(vm.apiUrl, null, callback)
    },
    refreshItem: function(){
      // console.log('post success')
      this.getCustomers();
    }
  },
  created: function() {
      this.getCustomers()
  }
}
</script>

<style>
</style>
