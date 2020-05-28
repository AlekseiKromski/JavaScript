import {Component} from '../core/component'

export class HeaderComponent extends Component {
    constructor (id){
        //Вызываем конструктор родителя
        super(id);
    }

    init(){
        /*
            Ищем кнопку по спец классу
            Добавляем обработчик событий и выполняем все в приватной функции
        */
        this.$el.querySelector('.js-header-start').addEventListener('click', buttonHandler.bind(this))
        
    }
}

//Private function 
function buttonHandler(){
    //Hide header block
    this.hide()
}