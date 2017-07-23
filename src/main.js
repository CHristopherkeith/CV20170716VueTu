import Vue from 'vue'
import App from './App.vue'
import Dialog from './Dialog.vue'
import AdminPage from './AdminPage.vue'
// import {methods} from './App.vue'
import './AdminPage.css'
// import '../iconfont.css'
// import './dialog.css'
new Vue({
  el: '#app',
  render: h => h(AdminPage)
})
// new Vue({
//   el: '#app',
//   render: h => h(Dialog)
// })