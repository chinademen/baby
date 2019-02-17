import { ARTICEL } from './type'

export const state = () => ({
    articleId:null
})
export const actions = {
    saveArticleId({commit},params){
        commit(ARTICEL.SAVE_ARTICEL,params)
    }
}
export const mutations = {
    [ARTICEL.SAVE_ARTICEL](state,res){
        state.articleId = res;
    }
}
export const getters = {
    getArticleId({articleId}){
        return articleId
    }
}