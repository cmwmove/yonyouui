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
      {//间距
        path:'/Spacing',
        name:'Spacing',
        component:() => import('../views/guideArc/spacing.vue')
      },
      {//对齐
      path:'/Align',
        name:'Align',
      component:() => import('../views/guideArc/align.vue')
      },
      {//对比
      path:'/Contrast',
        name:'Contrast',
      component:() => import('../views/guideArc/contrast.vue')
      },
      {//重复
      path:'/Repeat',
        name:'Repeat',
      component:() => import('../views/guideArc/repeat.vue')
      },
      {//直观
      path:'/Visual',
        name:'Visual',
      component:() => import('../views/guideArc/visual.vue')
      },
      {//弹出
      path:'/Eject',
        name:'Eject',
      component:() => import('../views/guideArc/eject.vue')
      },
      {//过渡动画
      path:'/TransitionOn',
        name:'TransitionOn',
      component:() => import('../views/guideArc/transitionOn.vue')
      },
      {//及时反馈
      path:'/ReactionOn',
        name:'ReactionOn',
      component:() => import('../views/guideArc/reactionOn.vue')
      },
      {//按钮命名
      path:'/ButtonName',
        name:'ButtonName',
      component:() => import('../views/guideArc/buttonName.vue')
      },
      {//设计原则颜色
      path:'/Color',
        name:'Color',
      component:() => import('../views/guideArc/color.vue')
      },
      {//设计原则字体
      path:'/Font',
        name:'Font',
      component:() => import('../views/guideArc/font.vue')
      },
      {//设计原则图标
      path:'/IconDesign',
        name:'IconDesign',
      component:() => import('../views/guideArc/iconDesign.vue')
      },
      {//设计原则布局
      path:'/Layout',
        name:'Layout',
      component:() => import('../views/guideArc/layout.vue')
      },
      {//登录页
      path:'/LoginPage',
        name:'LoginPage',
      component:() => import('../views/guideArc/loginPage.vue')
      },
      {//门户首页
      path:'/PortalIndex',
        name:'PortalIndex',
      component:() => import('../views/guideArc/portalIndex.vue')
      },
      {//菜单
      path:'/Menu',
        name:'Menu',
      component:() => import('../views/guideArc/menu.vue')
      },
      {//功能展开
      path:'/Function',
        name:'Function',
      component:() => import('../views/guideArc/function.vue')
      },
      {//门户选项卡
      path:'/PortalTabs',
        name:'PortalTabs',
      component:() => import('../views/guideArc/portalTabs.vue')
      },
      {//政务客服
      path:'/CustomerService',
        name:'CustomerService',
      component:() => import('../views/guideArc/customerService.vue')
      },
      {//模块
      path:'/Modular',
        name:'Modular',
      component:() => import('../views/guideArc/modular.vue')
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
  {//规范一
    path:"/Standard",
    component:() => import('../view1.0/standard.vue'),
    children:[
      {//适配规则
        path:'/Adaptation',
        name:'Adaptation',
        component:() => import('../view1.0/standardContent/adaptation.vue'),
      },
    ]
  }
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

