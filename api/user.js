import $Axios from '~/clientHttp/config.js'

export function useradd (params){
    return $Axios('/api/webuseradd',{
        method:'POST',
        data:params
    })
}