<template>
	<table>
		<thead>
			<tr>
				<th v-for="col in columns">
				{{ col | capitalize}}
				</th>
			</tr>
		</thead>
		<tbody>
			<!-- <tr v-for="entry in data | filterBy filterKey"> -->
			<tr v-for="entry in data" v-if="search(entry)">
				<td v-for="col in columns">
				{{entry[col]}}
				</td>
			</tr>
		</tbody>
	</table>
</template>
 
<script>
// import Vue from 'vue'
export default {
  name: 'simpleGrid',
  props: {
	data: Array,
	columns: Array,
	filterKey: String
  },
  filters: {
    search: function (value) {
      if (value.toString().indexOf(value.toString()) === -1) return ''
      return value.toString();
    }
  },
  methods: {
  	search: function(value){
  	  var filterKey = this.filterKey.toString();
  	  for(var key in value){
  	  	if (value[key].toString().indexOf(filterKey) !== -1){
  	  		return true;
  	  	}
  	  }
      return false;
  	}
  }
}
</script>