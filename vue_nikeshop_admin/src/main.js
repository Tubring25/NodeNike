import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './utils/permission';
import * as filters from './utils/filter' // global filters

Vue.config.productionTip = false;

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
