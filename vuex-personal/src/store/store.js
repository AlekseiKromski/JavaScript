import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        dropDownState: false,
        titles: [],
        buscket: []
    },
    mutations:{
        changeDropDown: function(state){
            state.dropDownState = !state.dropDownState;
        },
        setTitlesToState: function(state, titles){
            state.titles = titles
        },
        addToBuscket: function(state, product){
            state.buscket.unshift(product);
        }
    },
    actions:{
        toogleDropDown: function(ctx){
            ctx.commit('changeDropDown');
        },
        getTitles: function(ctx){
            fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    ctx.commit('setTitlesToState', response);
                })
        },
        addToBuscket: function(ctx, product){
            ctx.commit('addToBuscket', product)
        }
    },
    getters:{
        dropDownState: function(state){
            return state.dropDownState;
        },
        getTitles: function(state){
            return state.titles;
        },
        getBuscket: function(state){
            return state.buscket;
        }
    }
});