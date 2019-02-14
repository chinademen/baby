import $Axios from '~/clientHttp/config.js'

export function articleList (params){
    return $Axios('/api/articlelist',{
        method:'POST',
        data:params
    })
}