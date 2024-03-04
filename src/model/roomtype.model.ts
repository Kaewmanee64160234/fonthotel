//create interface roomtype
export interface RoomType {
  id: number;
  roomType: string;
  typeName: string;
  price: number;
  bedSize: number;
  chromeCast: boolean;
  electricSheer: boolean;
  wifi: boolean;
  bath: boolean;
  water: boolean;
  desk: boolean;
  descriptions: string;
  maxAdult: number;
  maxChildren: number;
  sleep: number;

}
