import Vue from 'vue'
import App from './App.vue'
import App2 from './App2.vue'
// import {methods} from './App.vue'
// import './main.css'
// window.App = App
console.log(new Vue({
  el: '#app',
  render: h => h(App)
  // data: App.data,
  // template: h => h(App),
  // methods: methods
}))
// new Vue({
//   el: '#app1',
//   render: h => h(App2)
//   // data: App.data,
//   // template: h => h(App),
//   // methods: methods
// })
