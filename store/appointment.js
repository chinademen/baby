import { APPOINTMENT } from './type'
import { useradd } from '../api/user'

export const state = () => ({
    isUserAdd:false    // 用户是否添加成功
})
export const actions = {
    async setUserAdd({commit},params){
        const res = await useradd(params);
        commit(APPOINTMENT.SET_USER_ADD,res)
    }
}
export const mutations = {
    [APPOINTMENT.SET_USER_ADD](state,res){
       if(res.data.status == 1){
           state.isUserAdd = true
       }
    }
}
export const getters = {
    getIsUserAdd({isUserAdd}){
        return isUserAdd
    }
}
