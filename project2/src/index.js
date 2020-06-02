import {HeaderComponent} from './components/header.component.js'
import {NavigationComponent} from './components/navigation.component.js'
import {CreateComponent} from './components/create.component.js'
import {FavoriteComponent} from './components/favorite.component.js'
import {PostsComponent} from './components/posts.component.js'
import { LoaderComponent } from './components/loader.compoment.js'

new HeaderComponent('header');

const navigation = new NavigationComponent('navigation');
const loader = new LoaderComponent('loader')

const posts = new PostsComponent('posts', {loader})
const create = new CreateComponent('create')
const favorite = new FavoriteComponent('favorite')

navigation.registerTabs([
    {name: "create", component: create},
    {name: "posts", component: posts},
    {name: "favorite", component: favorite},
])

