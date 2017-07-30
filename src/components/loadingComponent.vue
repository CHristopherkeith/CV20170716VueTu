<template id="loading-template">
    <div class="loading-overlay">
        <div class="sk-three-bounce">
            <div class="sk-child sk-bounce1"></div>
            <div class="sk-child sk-bounce2"></div>
            <div class="sk-child sk-bounce3"></div>
        </div>
    </div>
</template>
 
<script>
import modalDialog from './dialogComponent.vue'
export default {
  name: 'loadingComponent',
  data: function() {
	return {
		
	}
  }
}
</script>