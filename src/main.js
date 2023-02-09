import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import '@unocss/reset/tailwind.css';
import 'element-ui/lib/theme-chalk/index.css';
import 'uno.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
