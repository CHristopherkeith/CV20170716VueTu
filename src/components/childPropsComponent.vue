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
		<!-- 双向绑定手动显式触发更新事件按钮 -->
		<!-- <tr><button v-on:click="emit()"></button></tr> -->
		<!-- 单次绑定事件 -->
		<tr><button v-on:click.once="once()"></button></tr>
	</table>
</template>
 
<script>
import Vue from 'vue'
export default {
  name: 'childComponent',
  props: ['myName', 'myAge'],
  data() {
  	return{
  		// 双向绑定需添加
  	// 	emit: function(){
	  // 		this.$emit('update:myName', 'newValue')
	 	// }
	 	// 单次绑定事件
 		once: function(){
  			alert('once')
	 	}
  	}
  }
}
</script>