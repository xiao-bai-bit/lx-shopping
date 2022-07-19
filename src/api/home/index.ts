import http from "..";

enum API {
    GET_SLIDESHOW = '/api/home/slideshow'
}

export default function getSlideshow(){
    return http.request({
        url:API.GET_SLIDESHOW,
        method:'get'
    })
}