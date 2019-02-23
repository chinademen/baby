import $Axios from '~/clientHttp/config.js'

// 行业咨询
export function articleList (params){
    return $Axios('/api/webarticlelist',{
        method:'POST',
        data:params
    })
}

// 鉴定攻略
export function raiderslist (params){
    return $Axios('/api/webraiderslist',{
        method:'POST',
        data:params
    })
}

// DNA检测
export function dnalist (params){
    return $Axios('/api/webdnalist',{
        method:'POST',
        data:params
    })
}

// 成功案例
export function caselist (params){
    return $Axios('/api/webcaselist  ',{
        method:'POST',
        data:params
    })
}



