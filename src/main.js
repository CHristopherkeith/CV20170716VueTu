import Vue from 'vue'
import App from './App.vue'
import {methods} from './App.vue'
// import './main.css'
// window.App = App
new Vue({
  el: '#app',
  render: h => h(App)
  // data: App.data,
  // template: h => h(App),
  // methods: methods
})
