import Vue from 'vue'
import App from './App'
import router from './router'
import "./mock/mockUsrLogin";
import "./mock/testUsrDetails";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts' 

Vue.config.productionTip = true;
Vue.use(ElementUI,{ size: 'medium'});
Vue.prototype.$echarts = echarts; //将echarts注册成Vue的全局属性

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
