import http from "./axios"

const getPromotion=() => {
    return http.get('/promotions/' )
}


export default{ getPromotion}