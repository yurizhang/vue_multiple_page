<template>
  <div style="margin:20px;border:1px solid #ff0000">
     this is a test in single file components;{{message}}
     如果父组件设置了mes-Father属性：{{mesFather}}
    <div style="margin:20px;border:1px solid blue"><router-view name="m_id"></router-view></div>
     
    <input type="text" value="12345" v-on:input="enter($event)">
     
  </div>

   

</template>

<script>
  //import { Toast, MessageBox } from 'mint-ui';
  import bus from '../bus/bus.js';
  export default {  
    props: ["mesFather"],   
    //接受从老爸那里传来的数据
    //如果在组件中属性是 - 表示，它 自动会转化成驼峰式。  传进来的数据是mes-father, 转化成mesFather
    // app.vue调用了这个此组件
    data() {
      return {
        message: "TEST"
      };
    },
  
    methods: {

         enter (event) {
            console.log('子组件输出：'+event.target.value);
            bus.$emit("haha2", event.target.value);
            
            //haha, 并携带要传递给父组件的值，
            // 如果要传递给元素很多值，这些值要作为参数依次列出 如 this.emit('haha', this.inputValue, this.msg); 
        }


    },
    components:{},
    computed:{}
  };
</script>