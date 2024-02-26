export interface Room{
    id:string;
    image:string;
    status:string;
    roomType:RoomType;   // REFERENCES room (id) RoomType one to RoomType many
}

export interface RoomType {
    id: number;
    roomType: string;
    typeName: string;
    price: number;
    bedSize: number;
    chromeCast: boolean;
    eletricSheer: boolean;
    wifi: boolean;
    bath: boolean;
    water: boolean;
    desk: boolean;
    descriptions:string;

    

  }