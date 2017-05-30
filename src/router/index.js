import Vue from 'vue'
import Router from 'vue-router'
/*
import Hello from '@/components/Hello'
import World from '@/components/World'
import M from '@/components/m'
*/
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: resolve => require(['../components/Hello.vue'], resolve) //Hello 如果用懒加载，就直接写上 hello，前面导进来
    },
     {
      path: '/world',
      name: 'World',
      component: resolve => require(['../components/World.vue'], resolve) //World
    },
    {
      path: '/m',
      name: 'mmmm',      
      component: resolve => require(['../components/m.vue'], resolve) //M
    },
    {
      path: '/m/:id',
      name: 'mmmm2',      
      components: {  //注意是components，如果匹配这个路由，将把m.vue渲染到 router-view name="m_id"></router-view> 这个定义在test.vue里
        m_id: resolve => require(['../components/m.vue'], resolve)
      
       } //M
    }
  ]
})
