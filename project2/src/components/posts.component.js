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
        console.log(posts);
        
        
    }
}