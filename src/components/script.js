// <template>
//     <div id="script">
// 	</div>
// </template>

// <script>
import Vue from 'vue'
import childComponent from './childComponent.vue'
// var newCmp = new Vue({
//   el: '#app',
//   render: h => h(childComponent)
// })
export default new Vue({
  el: '#app',
  render: h => h(childComponent)
})
// </script>