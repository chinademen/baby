import $Axios from '~/clientHttp/config.js'

export function articleList (params){
    return $Axios('/api/webarticlelist',{
        method:'POST',
        data:params
    })
}