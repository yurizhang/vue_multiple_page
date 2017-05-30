// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Test from '../../components/test'
import router from '../../router'

//import jquery from 'jquery';
//import '../../assets/css/bootstrap.min.css'
//import './assets/lib/bootstrap.min.js'

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(MintUI);


Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router:router,
  template: '<div style="margin:20px;border:1px solid #ff0000"> <App2/> </div>',
  components: { "App2":App }  //定义的组件给上面的template里脾模板用
})
