<template>
<div id="parentPropsComponent">
	<table>
		<tr>
			<th colspan="3">父组件数据</th>
		</tr>
		<tr>
			<td>name</td>
			<td>{{ name }}</td>
			<td><input type="text" v-model="name" /></td>
		</tr>
		<tr>
			<td>age</td>
			<td>{{ age }}</td>
			<td><input type="text" v-model="age" /></td>
		</tr>
		
	</table>
<!-- 单向绑定 -->
<hello></hello>
<child-Component v-bind:my-name="name" v-bind:my-age="age"></child-Component>
<button v-on:click="showChildComponentData">显示子组件的数据</button>
<!-- 双向绑定 -->
<!-- <child-Component v-bind:my-name.sync="name" v-bind:my-age.sync="age"></child-Component> -->
<!-- 单次绑定 -->
<!-- <child-Component v-bind:my-name.once="name" v-bind:my-age.once="age"></child-Component> -->
 </div>
</template>
 
<script>
import Hello from './Hello.vue'
import childComponent from './childPropsComponent.vue'
export default {
  name: 'parentComponent',
  components: {
  	Hello,
    childComponent
  },
  data () {
    return {
      name: 'cl',
	  age: 27
    }
  },
  methods: {
	showChildComponentData: function() {
		for (var i = 0; i < this.$children.length; i++) {
			alert(this.$children[i].msg)
		}
	}
  }
}
</script>