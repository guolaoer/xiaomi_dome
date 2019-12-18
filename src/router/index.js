import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:()=>import('@/page/Home/Home.vue'),
      meta:{falg:true}
    },
    {
      path:'/home',
      component:()=>import('@/page/Home/Home.vue'),
      meta:{falg:true}
    },
    {
      path:'/classify',
      component:()=>import('@/page/Classify/Classify.vue'),
      meta:{falg:true}
    },
    {
      path:'/person',
      component:()=>import('@/page/Person/Person.vue'),
      meta:{falg:true}
    },
    {
      path:'/shopping',
      component:()=>import('@/page/Shopping/Shopping.vue'),
      meta:{falg:true}
    },
    {
      path:'/details',
      name:'details',
      component:()=>import('@/components/Details.vue'),
      meta:{falg:false}
    },
  ]
})
