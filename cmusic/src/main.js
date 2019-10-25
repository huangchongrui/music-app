// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'

// 引入vant部分功能模块样式
import 'vant/lib/tab/style'
import 'vant/lib/tabs/style'
import 'vant/lib/popup/style'
import 'vant/lib/swipe/style'
import 'vant/lib/swipe-item/style'
import 'vant/lib/lazyload/style'
import 'vant/lib/index-bar/style'
import 'vant/lib/index-anchor/style'
import 'vant/lib/cell/style'
Vue.use(Tab,).use(Tabs).use(Popup).use(Swipe).use(SwipeItem).use(Lazyload, {lazyComponent: true}).use(IndexBar).use(IndexAnchor).use(Cell);

//引入mint-ui组件库
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

import axios from "axios"
axios.defaults.baseURL="http://127.0.0.1:4000/";
axios.defaults.withCredentials=true;
Vue.prototype.axios = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
