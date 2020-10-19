export default {
    actions:{
        //ctx - context
        fetchPosts: async function(ctx, limit = 3){
            const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=" + limit);
            const posts = await response.json();
            this.posts = posts;

            //Call mutations
            ctx.commit("updatePosts", posts);
        }
    },
    mutations:{
        updatePosts: function(state, posts){
            state.posts = posts;
        },
        createPost: function(state, newPost){
            state.posts.unshift(newPost);
        }
    },
    state:{
        posts: [],
    },
    getters:{
        validPosts: function(state){
            return state.posts.filter(e => {
                return e.title
            })
        },
        allPosts: function(state){
            return state.posts;
        },
        postsCount: function (state, getters){
            return getters.validPosts.length;
        }
    },
}