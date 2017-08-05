<template>
  <div id="app">
    <h1>Named Routes</h1>
    <p>Current route name: {{ $route.name }}</p>
    <ul>
      <li><router-link :to="{ name: 'home' }">home</router-link></li>
      <li><router-link :to="{ name: 'foo' }">foo</router-link></li>
      <li><router-link :to="{ name: 'bar', params: { id: 123 }}">bar</router-link></li>
    </ul>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Foo from '../components/router/foo.vue'
// import Bar from '../components/router/bar.vue'
import User from '../components/router/user.vue'
const Bar = { template: '<div>This is Bar {{ $route.params.id }}</div>' }

const Home = { template: '<div>Home</div>' }

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/foo', name: 'foo' ,alias: '/',component: Foo},
    { path: '/bar/:id', name: 'bar', component: Bar }
  ]
})

// const app = new Vue({
//   router
// }).$mount('#app')

export default {
  name: 'app',
  components: {

  },
  data () {
    return {

    }
  },
  methods: {

  },
  created: function() {

  },
  router
}
</script>

<style>
</style>
