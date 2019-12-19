import Vue from 'vue'
import Router from 'vue-router'

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
