import { RoomType } from "./roomtype.model";

//create intrface room
export interface Room {
  id: number;
  description: string;
  status: string;
  roomType: RoomType;
}
