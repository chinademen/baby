import $Axios from '~/clientHttp/index.js'

export function articleList (params){
    return $Axios.GET('',params)
}