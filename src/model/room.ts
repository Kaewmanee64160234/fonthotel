import { RoomType } from "./roomtype";

export interface Room {
    id:string;
    image:string;
    status:string;
    rooomtype:RoomType[];   // REFERENCES room_type (room_type_id) RoomType one to RoomType many
}