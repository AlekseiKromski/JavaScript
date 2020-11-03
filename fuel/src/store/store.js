import Vue from 'vue';
import Vuex from 'vuex';
import consumption from './modules/consumption'
Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        consumption: consumption
    }
}) 