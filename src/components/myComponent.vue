<template>
<div id="myComponent">
	<table>
		<tr>
			<th colspan="2">
				子组件数据
			</th>
		</tr>
		<tr>
			<td>my name</td>
			<td>{{myName}}</td>
		</tr>
		<tr>
			<td>my age</td>
			<td>{{myAge}}</td>
		</tr>
	</table>
	<slot>如果没有分发内容，则显示slot中的内容</slot>
</div>
</template>
 
<script>
export default {
  name: 'myComponent',
  props: ['myName','myAge']
  // data () {
  //   return {
  //     myName: 'ff',
  //     myAge: 1
  //   }
  // }
}
</script>