import Vue from 'vue'
import VueRouter from 'vue-router'
import Guide from '../views/guide.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'guide',
    component: Guide
  },
  {
    path: '/Module',
    // name: 'Module',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/module.vue'),
    children: [
      {
        path:'/MoButton',
        name:'MoButton',
        component:() => import('../views/moduleArc/moButton.vue')
      },
      {
        path:'/Letter',
        name:'Letter',
        component:() => import('../views/moduleArc/letter.vue')
      },
      {
        path:'/Icon',
        name:'Icon',
        component:() => import('../views/moduleArc/icon.vue')
      },
      {
        path:'/Breadcrumb',
        name:'Breadcrumb',
        component:() => import('../views/moduleArc/breadcrumb.vue')
      },
      {
        path:'/Dropdown',
        name:'Dropdown',
        component:() => import('../views/moduleArc/dropdown.vue')
      },
      {
        path:'/Pagination',
        name:'Pagination',
        component:() => import('../views/moduleArc/pagination.vue')
      },
      {
        path:'/Steps',
        name:'Steps',
        component:() => import('../views/moduleArc/steps.vue')
      }
    ]
  },
  {//组件
    path:'/Resource',
    name:'Resource',
    component:() => import('../views/resource')
  },
]

const router = new VueRouter({
  routes
})

import store from '@/store'
Vue.use(VueRouter)
    //解决路由跳转原路由或者刷新出错
const originalReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

export default router

