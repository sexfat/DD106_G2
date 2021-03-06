import Vue from 'vue';
import App from './admin.vue';
import router from './router';
import "@/js/components";

import "@/style/main.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) { return h(App); }
}).$mount('#app');
