import Vue from 'vue'
import VueRouter from 'vue-router'
import Guide from '../views/guide.vue'
// import Module from '../views/module.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'guide',
    component: Guide
  },
  {
    path: '/ModulePage',
    name: 'ModulePage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/modulePage.vue')
  },
  {//组件
    path:'/Module',
    name:'Module',
    component:() => import('../views/module')
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

