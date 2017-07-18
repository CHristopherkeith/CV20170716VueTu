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

<child-Component v-bind:my-name="name" v-bind:my-age="age"></child-Component>
 </div>
</template>
 
<script>
import childComponent from './childPropsComponent.vue'
export default {
  name: 'parentComponent',
  components: {
    childComponent
  },
  data () {
    return {
      name: 'cl',
	  age: 27
    }
  }
}
</script>