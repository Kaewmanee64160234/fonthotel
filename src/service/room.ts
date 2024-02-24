import http from "./axios"

const getRooms=(status: string) => {
    return http.get('/rooms/' + status)
}

const getRoomsByType = (type: string, status: string) => {
    //param
    // console.log('/rooms/status/'+ status + '/room_type_name/' + type)
    return http.get(`/rooms/status/${status}`) 
}

export default{ getRooms, getRoomsByType}