
import Vue from 'vue'
import Test from './test.vue'  // unable to write like: ./test


//import '../assets/css/bootstrap.min.css'
//import '../assets/lib/bootstrap.min.js'
//import '../assets/lib/islider.js'; //导入会有问题,直接使用外链
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);

 
new Vue({
  el: '#app',  
  template: '<Test/>',
  components: { Test }  //定义的组件给上面的template里脾模板用
})


