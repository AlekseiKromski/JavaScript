export class Component {
    constructor(id){
        //Получение компонента
        this.$el = document.getElementById(id);
        this.init();
    }

    //Инициализация компонента
    init(){}

    onShow(){

    }

    onHide(){

    }

    //Base methods
    hide(){
        //Add hide css class 
        this.$el.classList.add('hide')
        this.onHide()
    }

    show(){
        //Remove hide css class
        this.$el.classList.remove('hide')
        this.onShow()
    }

}