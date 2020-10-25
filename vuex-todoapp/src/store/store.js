import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    //Харанение состояния данных приложения
    state: {
        listToDo:[
            {
                id: 0,
                text: 'none',
                isChange: false
            },
        ],
        lastId: 0,

    },
    //Изменить состояние можно только через мутацию 
    // - методам обязательно передавать объект state 
    // - не используються для асинхронных операций
    // - для вызова используют commit 
    mutations:{
        addNewToDo: function(state, text){
            state.listToDo.unshift({ id: state.lastId + 1, text: text, isChange: false});
            state.lastId += 1;
        },
        deleteToDo: function(state, id){
            state.listToDo = state.listToDo.filter( e => {
                if(e.id != id) return e;
            })
        }
    },
    //Запускаю мутацию 
    // - можно использовать вместе с асинхронными запросами
    actions:{

    },
    getters:{

    }
});