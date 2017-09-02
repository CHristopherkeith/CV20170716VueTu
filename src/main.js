import Vue from 'vue'
// import VueResource from 'vue-resource'
// import App from './App.vue'
// import Dialog from './Dialog.vue'
// import AdminPage from './AdminPage.vue'
// import Router from './router/scrollRouter.vue'
import Router from './router/basicRouter.vue'
import './css/adminPage.css'
// import '../iconfont.css'
// import './dialog.css'
// Vue.use(VueResource);
var App = new Vue({
  el: '#app',
  render: h => h(Router)
})