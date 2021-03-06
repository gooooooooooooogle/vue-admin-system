import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon';

import router from './router';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.use(ElementUI);

Vue.component('v-icon', Icon);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
