import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import VueQrcodeReader from "vue-qrcode-reader";

Vue.use(VueQrcodeReader);

new Vue({
  render: h => h(App),
}).$mount('#app')
