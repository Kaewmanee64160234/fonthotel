import { RoomType } from "./roomtype.model";

export interface Room{
    id:string;
    image:string;
    status:string;
    roomType:RoomType;   // REFERENCES room (id) RoomType one to RoomType many
}

