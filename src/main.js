import Vue from 'vue';
import App from './App.vue';
import './utils/rem'; // px换rem
import router from './routers/index.js';
import axios from 'axios';
import store from './stores';
import './plugins/vant';
import VueCompositionAPI from '@vue/composition-api';

Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.use (VueCompositionAPI);

import Loading from '@/components/Loading';
Vue.component ('Loading', Loading);
new Vue ({
  router,
  store,
  render: h => h (App),
}).$mount ('#app');
