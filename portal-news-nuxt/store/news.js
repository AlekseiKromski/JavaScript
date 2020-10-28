export  const state = () => ({
    news: null
})

export const mutations = {
    setNews: function(state, news){
        state.news = news;
    }
}

export const getters = {
    getHeaderNew: (state) => {
        let count = 0;
        return state.news.filter(e => {
            if(count < 1){
                count++;
                return e;
            }
            count++;
        })
    }
}