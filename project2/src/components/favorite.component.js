import {Component} from '../core/component';
import { apiService } from '../services/api.service';

export class FavoriteComponent extends Component {
    constructor(id, {loader}){
        super(id)
        this.loader = loader
    }

    init(){
        this.$el.addEventListener('click', linkClickHandler.bind(this))
    }

    onShow(){
        const favorites = JSON.parse(localStorage.getItem('favorites'))
        const html = renderList(favorites)
        this.$el.insertAdjacentHTML('afterbegin', html)
    }

    onHide(){
        this.$el.innerHTML = ''
    }
}

function renderList(list = []){
    if(list && list.length){
        return `
            <ul>
                ${
                    list.map(item => `<li><a href="#" class="js-link">${item}</a></li>`).join(' ')
                }
            </ul>
        `
    }

    return `<p class="center">Вы пока ничего не добавили</p>`
}


function renderPost(post){
    const tag = post.type === 'news' ? '<li class="tag tag-blue tag-rounded">Новость</li>' :
    '<li class="tag tag-rounded">Заметка</li>'

    return `
        <div class="panel">
        <div class="panel-head">
            <p class="panel-title">${post.title}</p>
            <ul class="tags">
            ${tag}
            </ul>
        </div>
        <div class="panel-body">
            <p class="multi-line">${post.fulltext}</p>
        </div>
        <div class="panel-footer w-panel-footer">
            <small>${post.date}</small>
        </div>
        </div>
    `
}

async function linkClickHandler(event){
    event.preventDefault()
    if(event.target.classList.contains('js-link')){
        const postID = event.target.textContent
        this.$el.innerHTML = ''
        this.loader.show()  
        const post = await apiService.fetchPostById(postID)
        this.loader.hide()
        this.$el.insertAdjacentHTML('afterbegin', renderPost(post))
    }
}