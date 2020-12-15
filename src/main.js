import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/common.less";
import "./style/module.less";
// antdesign
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import { Icon } from 'ant-design-vue';

// import zhZN from 'antd/es/locale/zh_CN'
// import {ConfigProvider,Table} from 'antd'

import "./static/reset.less";

// 阿里iconfont
import './assets/fonts/iconfont/iconfont.css'
import iconFont from './assets/fonts/iconfont/iconfont.js'
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: iconFont
  // scriptUrl: '//at.alicdn.com/t/font_1389343_cxas4kuody.js'
})
Vue.component('IconFont',IconFont)

// export default IconFont;


// const MyIcon = Icon.createFromIconfontCN({
//   scriptUrl: '//at.alicdn.com/t/font_1389343_cxas4kuody.js', // 在 iconfont.cn 上生成
// });
// new Vue({
//   el: '#app',
//   components: {
//     'my-icon': MyIcon,
//   },
//   template: '<my-icon type="icon-example" />',
// });


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
