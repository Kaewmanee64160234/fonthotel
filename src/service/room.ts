import http from "./axios"

const getRooms=(status: string) => {
    return http.get('/rooms/' + status)
}

const getRoomsByType = (type: string, status: string) => {
    return http.get(`/rooms/room_status/${status}/room_type/${type}`) 
}

export default{ getRooms, getRoomsByType}