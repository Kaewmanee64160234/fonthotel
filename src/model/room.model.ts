export interface Room{
    id:string;
    image:string;
    status:string;
    roomType:RoomType;   // REFERENCES room (id) RoomType one to RoomType many
}

export interface RoomType {
    id: number;
    roomType: string;
    name: string;
    price: number;
    bedSize: number;
    chromeCast: boolean;
    eletricSheer: boolean;
    wifi: boolean;
    bath: boolean;
    water: boolean;
    desk: boolean;
    typename: string;
    

  }