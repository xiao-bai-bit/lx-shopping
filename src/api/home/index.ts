import http from ".."


enum API {
    GET_SLIDESHOW = '/api/home/slideshow',
    GET_SERVER = '/api/home/server'
}

export function getSlideshow(){
    return http.request({
        url:API.GET_SLIDESHOW,
        method:'get'
    })
}

export function getServer(){
    return http.request({
        url:API.GET_SERVER,
        method:'get'
    })
}