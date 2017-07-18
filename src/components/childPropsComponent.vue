<template>
	<table>
		<tr>
			<th colspan="3">子组件数据</th>
		</tr>
		<tr>
			<td>my name</td>
			<td>{{ myName }}</td>
			<td><input type="text" v-model="myName" /></td>
		</tr>
		<tr>
			<td>my age</td>
			<td>{{ myAge }}</td>
			<td><input type="text" v-model="myAge" /></td>
		</tr>
	</table>
</template>
 
<script>
export default {
  name: 'childComponent',
  props: ['myName', 'myAge']
}
</script>