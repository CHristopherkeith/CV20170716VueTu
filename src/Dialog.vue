<template>
    <div id="app">
      <modal-dialog v-bind:show.sync="show" v-bind:class="dialogClass">
        <header class="dialog-header" slot="header">
          <h1 class="dialog-title">提示信息</h1>
        </header>

        <div class="dialog-body" slot="body">
          <p>你想在对话框中放什么内容都可以！</p>
          <p>你可以放一段文字，也可以放一些表单，或者是一些图片。</p>
        </div>

        <footer class="dialog-footer" slot="footer">
          <button class="btn" @click="closeDialog">关闭</button>
        </footer>
      </modal-dialog>

      <!-- <button class="btn btn-open" @click="openDialog">打开对话框</button> -->
        <button class="btn-info" @click="openDialog('dialog-info')">提示信息对话框</button>
        <button class="btn-success" @click="openDialog('dialog-success')">提示成功对话框</button>
        <button class="btn-warning" @click="openDialog('dialog-warning')">提示警告对话框</button>
        <button class="btn-error" @click="openDialog('dialog-error')">提示错误对话框</button>
    </div>
</template>

<script>
import Vue from 'vue'
import modalDialog from './components/dialogComponent.vue'
export default {
  name: 'app',
  components: {
    modalDialog
  },
  data () {
    return {
      show: false,
      dialogClass: 'dialog-info'
    }
  },
  methods: {
    openDialog: function(dialogClass) {
      this.show = true
      this.dialogClass = dialogClass
    },
    closeDialog: function() {
      this.show = false
    }
  }
}
</script>

<style>
</style>
