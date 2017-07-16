<template>
<div id="parent">
  <div>This is a Parent component!</div>
  <childComponent></childComponent>	
</div>
  
</template>
 
<script>
import childComponent from './childComponent.vue'
export default {
  name: 'parentComponent',
  components: {
    childComponent
  }
}
</script>