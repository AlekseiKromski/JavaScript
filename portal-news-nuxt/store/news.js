export const state = () => ({
    news: null
})

export const mutations = {
    setNews: function(state, news){
        state.news = news;
    }
}

export const getters = {
    getTopNews: state => {
        return state.news
    }
}