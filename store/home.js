import { HOME } from './type'
import { articleList } from '../api/common'

export const state = () => ({
    stateArticleList:[]
})
export const actions = {
    async setArticleList({commit},params){
        const res = await articleList(params);
        commit(HOME.SET_ARTICLE_LIST,res)
    }
}
export const mutations = {
    [HOME.SET_ARTICLE_LIST]({state},res){
        // console.log(res)
        state.stateArticleList = res.data
    }
}
export const getters = {
    getArticleList(){
        
    }
}
