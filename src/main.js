import Vue from 'vue'
// import VueResource from 'vue-resource'
// import App from './App.vue'
// import Dialog from './Dialog.vue'
// import AdminPage from './AdminPage.vue'
import CORS from './CORSResourceHttp.vue'
import './adminPage.css'
// import '../iconfont.css'
// import './dialog.css'
// Vue.use(VueResource);
var App = new Vue({
  el: '#app',
  render: h => h(CORS)
})