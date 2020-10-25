import Vue from 'vue';
import App from './App.vue';
import Store from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

Vue.config.productionTip = false

new Vue({
  store: Store,
  render: h => h(App),
}).$mount('#app')
