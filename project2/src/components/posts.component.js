import {Component} from '../core/component';
import {ApiService, apiService} from '../services/api.service'
import {TransformService} from '../services/transform.service'
export class PostsComponent extends Component {
    constructor(id){
        super(id)
    }

    async onShow(){
        const data = await apiService.fetchPosts()
        const posts = TransformService.fbObjToArr(data)
        const html = posts.map(post => renderPost(post)).join(' ')
        this.$el.insertAdjacentHTML('afterbegin',html)
        
    }

    async onHide(){
        this.$el.innerHTML = ''
        
    }
}

function renderPost(post){
    const tag = post.type === 'news' ? '<li class="tag tag-blue tag-rounded">Новость</li>' :
    '<li class="tag tag-rounded">Заметка</li>'

    const button = '<button class="buttom-round button-small button-primary">Сохранить</button>'
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
            ${button}
        </div>
        </div>
    `
}