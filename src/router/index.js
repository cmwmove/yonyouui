import Vue from 'vue'
import VueRouter from 'vue-router'
import Guide from '../views/guide.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    // name: 'guide',
    component: Guide,
    // meta:{
      // title: '首页',
    // }
    children: [
      {//介绍
        path:'/Introduce',
        name:'Introduce',
        component:() => import('../views/guideArc/introduce.vue')
      },
      {//设计价值观
        path:'/DesignValue',
        name:'DesignValue',
        component:() => import('../views/guideArc/designValue.vue')
      },
      {//设计原则
        path:'/DesignTenet',
        name:'DesignTenet',
        component:() => import('../views/guideArc/designTenet.vue')
      },
      
      // {//
      //   path:'/',
      //   name:'',
      //   component:() => import('../views/guideArc/.vue')
      // },
    ]
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
        component:() => import('../views/moduleArc/breadcrumb.vue'),
        // meta:{
          // title: '面包屑',
        //   keepAlive: false
        // }
      },
      {
        path:'/Dropdown',
        name:'Dropdown',
        component:() => import('../views/moduleArc/dropdown.vue'),
        // meta:{
          // title: '下拉菜单',
        //   keepAlive: false
        // }
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
      },
      {
        path:'/Checkbox',
        name:'Checkbox',
        component:() => import('../views/moduleArc/checkbox.vue')
      },
      {
        path:'/RadioButton',
        name:'RadioButton',
        component:() => import('../views/moduleArc/radioButton.vue')
      },
      {
        path:'/Chooser',
        name:'Chooser',
        component:() => import('../views/moduleArc/chooser.vue')
      },
      {
        path:'/Date',
        name:'Date',
        component:() => import('../views/moduleArc/date.vue')
      },
      {
        path:'/Form',
        name:'Form',
        component:() => import('../views/moduleArc/form.vue')
      },
      {
        path:'/InputBox',
        name:'InputBox',
        component:() => import('../views/moduleArc/inputBox.vue')
      },
      {//开关
        path:'/Switch',
        name:'Switch',
        component:() => import('../views/moduleArc/switch.vue')
      },
      {//树
        path:'/Tree',
        name:'Tree',
        component:() => import('../views/moduleArc/tree.vue')
      },
      {//穿梭框
        path:'/Transfer',
        name:'Transfer',
        component:() => import('../views/moduleArc/transfer.vue')
      },
      {//折叠面板
        path:'/Collapse',
        name:'Collapse',
        component:() => import('../views/moduleArc/collapse.vue')
      },
      {//卡片
        path:'/Card',
        name:'Card',
        component:() => import('../views/moduleArc/card.vue')
      },
      {//描述列表
        path:'/Descriptions',
        name:'Descriptions',
        component:() => import('../views/moduleArc/descriptions.vue')
      },
      {//缺省图
        path:'/Empty',
        name:'Empty',
        component:() => import('../views/moduleArc/empty.vue')
      },
      {//气泡提醒
        path:'/Popconfirm',
        name:'Popconfirm',
        component:() => import('../views/moduleArc/popconfirm.vue')
      },
      {//标签
        path:'/Tag',
        name:'Tag',
        component:() => import('../views/moduleArc/tag.vue')
      },
      {//警告提示
        path:'/Alert',
        name:'Alert',
        component:() => import('../views/moduleArc/alert.vue')
      },
      {//抽屉
        path:'/Drawer',
        name:'Drawer',
        component:() => import('../views/moduleArc/drawer.vue')
      },
      {//加载中
        path:'/Spin',
        name:'Spin',
        component:() => import('../views/moduleArc/spin.vue')
      },
      {//通知提醒
        path:'/Notification',
        name:'Notification',
        component:() => import('../views/moduleArc/notification.vue')
      },
      {//页签
        path:'/Tabs',
        name:'Tabs',
        component:() => import('../views/moduleArc/tabs.vue')
      },
      {//图表
        path:'/Chart',
        name:'Chart',
        component:() => import('../views/moduleArc/chart.vue')
      },
      {//弹框
        path:'/Popup',
        name:'Popup',
        component:() => import('../views/moduleArc/popup.vue')
      },
      {//文字提醒
        path:'/Tooltip',
        name:'Tooltip',
        component:() => import('../views/moduleArc/tooltip.vue')
      },
      // {//
      //   path:'/',
      //   name:'',
      //   component:() => import('../views/moduleArc/.vue')
      // },
      // {//
      //   path:'/',
      //   name:'',
      //   component:() => import('../views/moduleArc/.vue')
      // },
    ]
  },
  {//资源
    path:'/Resource',
    name:'Resource',
    component:() => import('../views/resource'),
    
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

