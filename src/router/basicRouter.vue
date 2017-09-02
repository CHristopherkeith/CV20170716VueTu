<template>
  <div id="app">
    <h1>Hello App!</h1>
    <!-- <p>
      <router-link to="/foo">foo</router-link>
      <router-link to="/bar">bar</router-link>
      <router-link to="/foobar">bar</router-link>
    </p> -->
    <p v-for="item in dynamicRouter">
      <router-link :to="item">{{item}}</router-link>
    </p>
    <router-view></router-view>
    <button @click="addRouter()">add router</button>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Foo from '../components/router/foo.vue'
import Bar from '../components/router/bar.vue'
import Foobar from '../components/router/foobar.vue'

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar },
  { path: '/foobar', component: Foobar }
]

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
// const app = new Vue({
//   router
// }).$mount('#app')

export default {
  name: 'app',
  components: {

  },
  data () {
    return {
      dynamicRouter: [
        '/foo',
        '/bar'
      ]
    }
  },
  methods: {
    addRouter(){
      this.dynamicRouter.push('/foobar')
    }
  },
  created: function() {

  },
  router
}
</script>

<style>
</style>
