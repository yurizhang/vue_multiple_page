<template>
  <div id="app">
    <img src="../../assets/img/logo.png">
    <div style="padding:20px;">
        <ul>
      <li><router-link to="./">首页</router-link></li>
      <li><router-link to="/world">Test</router-link></li>
      <li><router-link to="/m">Mint UI</router-link></li>
      <li><router-link to="/m/002">还有参数{{$route.params.id}}</router-link></li>
      <li><a href="/test.htm" target="_blank">多文件配置跳走</a></li>
    </ul>
    </div>

    <router-view></router-view>
    <div>

      <button type="button" class="btn btn-primary">（首选项）Primary</button>
      <Test mes-father="message from 老爸">{{childMes}}</Test>

      

    </div>

  </div>
</template>

<script>
import bus from '../../bus/bus.js';
import Test from '../../components/test'
export default {
  name: 'app',
  data(){
    return{
      childMes:""
    }
  },
  created(){
        bus.$on("haha",(text)=>{
            alert(text);
        })
  },
  methods:{
    
  },
  //template:'<div>22222222222222222222222 <Test/> </div>',  //上面有模板标签了，这个就不起作用了
  components: {Test: Test}  

  }
</script>

<style>
/*@import '../assets/bootstrap.min.css'*/
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
