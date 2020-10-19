import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import Store from './store/store'

Vue.config.productionTip = false

new Vue({
  store: Store,
  render: h => h(App),
}).$mount('#app')
