<template>
  <div style="margin-bottom:200px">
  <h1>mint-ui-example <span>{{$route.params.id}}</span></h1>
  <mt-button  type="primary"  @click.native="sheetVisible = true">
    选择操作
  </mt-button>
  <mt-actionsheet  cancel-text="取消"  :actions="actions" v-model="sheetVisible">
  </mt-actionsheet>

  </div>
</template>

<script>
  import { Toast, MessageBox } from 'mint-ui';
  export default {
    name: 'mmmm',

    data() {
      return {
        sheetVisible: false,
        actions: [{
          name: '展示 Toast',
          method: this.showToast
        }, {
          name: '展示 Message Box',
          method: this.showMsgbox
        }]
      };
    },

    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },

      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      }
    }
  };
</script>