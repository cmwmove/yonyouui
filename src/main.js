import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/common.less";
import "./style/module.less";
// antdesign
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

// import zhZN from 'antd/es/locale/zh_CN'
// import {ConfigProvider,Table} from 'antd'

import "./static/reset.less";

// 阿里iconfont
import './assets/fonts/iconfont/iconfont.css'


Vue.use(Antd);

Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
