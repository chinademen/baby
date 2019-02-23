import { COMMON } from './type'
import { articleList,raiderslist,dnalist,caselist } from '../api/common'

export const state = () => ({
    stateArticleList: null,
    stateRaiderslist: null,
    stateDnalist: null,
    stateCaselist: null,
})
export const actions = {
    // 行业咨询
    async setArticleList({ commit }, params) {
        const res = await articleList(params);
        commit(COMMON.SET_ARTICLE_LIST, res)
    },
    // 验血攻略
    async setRaiderslist({ commit }, params) {
        const res = await raiderslist(params);
        commit(COMMON.SET_RAIDERS_LIST, res)
    },
    // DNA检测
    async setDnalist({ commit }, params) {
        const res = await dnalist(params);
        commit(COMMON.SET_DNA_LIST, res)
    },
    // 成功案例
    async setCaselist({ commit }, params) {
        const res = await caselist(params);
        commit(COMMON.SET_CASELIST, res)
    },
}
export const mutations = {
    [COMMON.SET_ARTICLE_LIST](state, res) {
        state.stateArticleList = res.data;
    },
    [COMMON.SET_RAIDERS_LIST](state, res) {
        state.stateRaiderslist = res.data;
    },
    [COMMON.SET_DNA_LIST](state, res) {
        state.stateDnalist = res.data;
    },
    [COMMON.SET_CASELIST](state, res) {
        state.stateCaselist = res.data;
    }
}
export const getters = {
    getArticleList({ stateArticleList }) {
        return stateArticleList
    },
    getRaiderslist({ stateRaiderslist }) {
        return stateRaiderslist
    },
    getDnalist({ stateDnalist }) {
        return stateDnalist
    },
    getCaselist({ stateCaselist }) {
        return stateCaselist
    },

}
