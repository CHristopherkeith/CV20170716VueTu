<template>
<div id="dialogComponent">
	<div class="dialogs">
		<div class="dialog" v-bind:class="{ 'dialog-active': show }">
			<div class="dialog-content">
				<div class="close rotate">
					<span class="iconfont icon-close" @click="close"></span>
				</div>
				<slot name="header">这是头部</slot>
				<slot name="body"></slot>
				<slot name="footer"></slot>
			</div>
		</div>
		<div class="dialog-overlay"></div>
	</div>
</div>
</template>
 
<script>
export default {
  name: 'dialogComponent',
  props: ['show'],
  // data () {
  //   return {
  //     myName: 'ff',
  //     myAge: 1
  //   }
  // }
  methods: {
	close: function() {
		this.show = false
	}
  }
}
</script>