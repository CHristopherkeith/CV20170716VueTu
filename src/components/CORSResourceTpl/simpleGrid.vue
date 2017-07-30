<template>
<div id="simpleGrid">
	<table>
		<thead>
			<tr>
				<th v-for="col in columns">
				{{ col.name | capitalize}}
				</th>
				<th>
					Delete
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(entry,index) in dataList" v-if="search(entry)">
				<td v-for="col in columns">
					<span v-if="col.isKey"><a href="javascript:void(0)" @click="openEditItemDialog(entry[col.name])">{{entry[col.name]}}</a></span>
					<span v-else>{{entry[col.name]}}</span>
				</td>
				<td class="text-center">
					<button class="btn-danger" @click="deleteItem(entry)">delete</button>
				</td>
			</tr>
		</tbody>
	</table>
	<div class="container">
		<button class="btn" @click="openNewItemDialog('Create New Item')">Create</button>
	</div>
	<modal-dialog :mode="mode" :title="title" :item="item" :fields="columns" :show.sync="show" v-on:create-item="createItem" v-on:update-item="updateItem">
	</modal-dialog>
</div>
</template>
 
<script>
import modalDialog from './dialogComponent.vue'
// import AjaxHelper from '../AjaxHelper.js'
// console.log(new AjaxHelper())
// var ajaxHelper = new AjaxHelper()
export default {
  name: 'simpleGrid',
  data: function() {
	return {
		mode: 0,
		title: '',
		keyColumn: '',
		item: {},
		show: false
	}
  },
  components: {
    modalDialog/*,
    AjaxHelper*/
  },
  props: ['dataList', 'columns', 'searchKey', 'apiUrl'],
  filters: {

  },
  methods: {
	  	search: function(value){
	  	  var searchKey = this.searchKey.toString();
	  	  for(var key in value){
	  	  	// console.log(value[key])
	  	  	if(value[key] !== null&&value[key].toString().indexOf(searchKey) !== -1){
		  	  		return true;
	  	  	}
	  	  	
	  	  }
	      return false;
	  	},
	  	openNewItemDialog: function(title) {
			// 对话框的标题
			this.title = title
			// mode = 1表示新建模式
			this.mode = 1
			// 初始化this.item
			// this.item = {}
			// 广播事件，showDialog是modal-dialog组件的一个方法，传入参数true表示显示对话框
			// this.$broadcast('showDialog', true)
			this.show = true
		},
		openEditItemDialog: function(key) {
			// 根据主键查找当前修改的数据
			var currentItem = this.findItemByKey(key)
			
			// 对话框的标题
			this.title = 'Edit Item - ' + key
			// mode = 2表示修改模式
			this.mode = 2
			// 将选中的数据拷贝到this.item
			this.item = this.initItemForUpdate(currentItem)
			// console.log(this.item)
			// console.log(currentItem)
			// 广播事件，传入参数true表示显示对话框
			// this.$broadcast('showDialog', true)
			this.show = true
		},
		// 弹出修改数据的对话框时，使用对象的深拷贝
		initItemForUpdate(p, c) {
			c = c || {};
			for(var i in p) {
				// 属性i是否为p对象的自有属性
				// if(p.hasOwnProperty(i)) {
					// 属性i是否为复杂类型
					// if(typeof p[i] === 'object') {
					// 	// 如果p[i]是数组，则创建一个新数组
					// 	// 如果p[i]是普通对象，则创建一个新对象
					// 	c[i] = Array.isArray(p[i]) ? [] : {};
					// 	// 递归拷贝复杂类型的属性
					// 	this.initItemForUpdate(p[i], c[i]);
					// } else {
						// 属性是基础类型时，直接拷贝
						c[i] = p[i];
					// }
				// }
			}
			return c;
		},
		findItemByKey: function(key){
			var keyColumn = this.keyColumn
			// console.log(keyColumn)
			for(var i = 0; i < this.dataList.length; i++){
				if(this.dataList[i][keyColumn] === key){
					return this.dataList[i]
				}
			}
		},
		itemExists: function() {
			var keyColumn = this.keyColumn
			for (var i = 0; i < this.dataList.length; i++) {
				if (this.item[keyColumn] === this.dataList[i][keyColumn])
					return true;
			}
			return false;
		},
		createItem: function() {
			var resource = this.$resource(this.apiUrl),vm = this
		    resource.save(vm.apiUrl, vm.item).then((response) => {
		           this.$emit('refresh-item');
		        })
		    this.show = false
		},
		updateItem: function() {
			var resource = this.$resource(this.apiUrl),vm = this
	        
	    	resource.update({ id: vm.item.customerId}, vm.item).then((response) => {
	            this.$emit('refresh-item')
	        })
            this.show = false
		},
		deleteItem: function(entry) {
			var resource = this.$resource(this.apiUrl),vm = this
	        
	    	resource.remove({ id: entry.customerId}, vm.item).then((response) => {
	            this.$emit('refresh-item')
	        })
		}
  },
  created: function(){
	for (var i = 0; i < this.columns.length; i++) {
		if (this.columns[i].isKey) {
			this.keyColumn = this.columns[i]['name']
			// console.log(this.keyColumn)
			break;
		}
	}
  },
  watch: {
  	show: function(newVal, oldVal){
	    if(!newVal){
	        this.item = {}
	    }
	}
  }
}
</script>