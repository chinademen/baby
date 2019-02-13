import { articleList } from '~api/common'

const type = {
    SET_ARTICLE_LIST:'SET_ARTICLE_LIST'   // 文章列表
}

export const state = () => ({
    stateArticleList:[]
})

export const actions = () => ({
   async setArticleList(context,params){
        const res = await articleList(params);
        context.commit(type.SET_ARTICLE_LIST,res)
   }
})

export const mutations = () => ({
   [type.SET_ARTICLE_LIST](state,res){
        console.log(res)
   }
})

export const getters  = () => ({
   
})