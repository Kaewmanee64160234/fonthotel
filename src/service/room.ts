import http from "./axios"

const getRooms=(status: string) => {
    return http.get('/rooms/' + status)
}

const getRoomsByType = (type: string, status: string) => {
    return http.get(`/rooms/room_status/${status}/room_type/${type}`) 
}

//get type room by type name
const getTypeRoomByTypeName = (typeName: string) => {
    return http.get(`/roomtypes/room_type/${typeName}`)
}

export default{ getRooms, getRoomsByType,getTypeRoomByTypeName}