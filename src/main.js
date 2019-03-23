import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { MyCanvas } from "@/tools/myCanvas";



Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

const c = new MyCanvas('bg-canvas');
c.init();
