import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/home',
      component:()=>import('@/page/Home/Home.vue')
    },
    {
      path:'/classify',
      component:()=>import('@/page/Classify/Classify.vue')
    },
    {
      path:'/person',
      component:()=>import('@/page/Person/Person.vue'),
    },
    {
      path:'/shopping',
      component:()=>import('@/page/Shopping/Shopping.vue')
    },
    //收货地址
    {
      path:'/addressList',
      name:'addressList',
      component:()=>import('@/page/Person/AddressList.vue'),
    },
    //地址编辑
    {
      path:'/addressEdit',
      name:'addressEdit',
      component:()=>import('@/page/Person/AddressEdit.vue'),
    },
  ]
})
