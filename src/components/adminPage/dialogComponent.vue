<template>
<div id="dialogComponent">
	<div class="dialogs">
		<div class="dialog" v-bind:class="{ 'dialog-active': show }">
			<div class="dialog-content">
				<header class="dialog-header">
					<h1 class="dialog-title">{{ title }}</h1>
				</header>
				<div class="dialog-body">
					<div v-for="field in fields" class="form-group">
						<label>{{ field.name }}</label>
						<select v-if="field.dataSource" v-model="item[field.name]" :disabled="mode === 2 && field.isKey">
								<option v-for="opt in field.dataSource" :value="opt">{{ opt }}</option>
						</select>
						<input v-else type="text" v-model="item[field.name]" :disabled="mode === 2 && field.isKey">
					</div>
				</div>
				<footer class="dialog-footer">
					<div class="form-group">
						<label></label>
						<button class="btn-save" v-on:click="save">Save</button>
						<button class="btn-close" v-on:click="close">Close</button>
					</div>
				</footer>
			</div>
		</div>
		<div class="dialog-overlay"></div>
	</div>
</div>
</template>
 
<script>
export default {
  name: 'dialogComponent',
  /*
  * mode = 1是新增数据模式，mode = 2是修改数据模式
  * title表示对话框的标题内容
  * fields表示对话框要显示的数据字段数组
  * item是由simple-dialog传下来，用于绑定表单字段的
  */
  props: ['mode', 'title', 'fields', 'item', 'show'],
  data () {
    return {
      // show: false
    }
  },
  methods: {
	close: function() {
		// this.show = false
		this.$emit('update:show', false)
	},
	save: function() {
		if (this.mode === 1) {
			// 使用$dispatch调用simple-grid的create-item事件
			// this.$dispatch('create-item')
			this.$emit('create-item')
		} else if (this.mode === 2) {
			// 使用$dispatch调用simple-grid的update-item事件
			// this.$dispatch('update-item')
			this.$emit('update-item')
		}
	}
  }/*,
  events: {
	'showDialog': function(show) {
		this.show = show
	}
  }*/
}
</script>