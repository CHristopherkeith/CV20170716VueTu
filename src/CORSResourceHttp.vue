<template>
    <div id="app">
      <div id="help">
        <loading v-show="showLoading"></loading>
      </div>
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
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import filters from './components/filter.js'
// import AjaxHelper from './components/AjaxHelper.js'
import simpleGrid from './components/CORSResourceHttp/simpleGrid.vue'
import loading from './components/loadingComponent.vue'
export default {
  name: 'app',
  components: {
    simpleGrid,
    loading
  },
  data () {
    return {
      showLoading: false,
      searchQuery: '',
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
      
      Vue.http.interceptors.push((request, next) => {
        this.showLoading = true
        next((response) => {
          this.showLoading = false
          return response
        });
      });

      this.$http.get(this.apiUrl)
          .then((response) => {
              this.people = response.data;
          })
          .catch(function(response) {
              console.log(response)
          })
    },
    refreshItem: function(){
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
