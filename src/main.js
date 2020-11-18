import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/common.less";
// antdesign
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'

import "./static/reset.less";

// 阿里iconfont
import './assets/fonts/iconfont/iconfont.css'


Vue.use(Antd);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
