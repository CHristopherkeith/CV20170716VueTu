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
import filters from './components/filter.js'
import simpleGrid from './components/CORSResourceTpl/simpleGrid.vue'
import loading from './components/loadingComponent.vue'
Vue.use(VueResource);
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
      apiUrl: 'http://211.149.193.19:8080/api/customers{/id}'
    }
  },
  methods: {
    getCustomers: function() {
      Vue.http.interceptors.push((request, next) => {
          this.showLoading = true;
          next((response) => {
              this.showLoading = false;
              return response
          });
      });
      var resource = this.$resource(this.apiUrl),vm = this;
      resource.get().then((response) => {
          // vm.$set('gridData', response.data)
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
