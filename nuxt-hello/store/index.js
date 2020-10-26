export const state = () => ({
    token: null
})
export const mutations = {
    setToken(state, token){
        state.token = token;
    },
    clearToken(state, token){
        state.token = null;
    },

}
export const actions = {
    async login({commit}){
        commit('setToken', 'turetoken')
    },
    async logout({commit}){
        commit('clearToken')
    },
}

export const getters = {
    hasToken: s => !!s.token
}