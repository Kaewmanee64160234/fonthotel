export interface Room{
    id:string;
    image:string;
    status:string;
    roomtype:RoomType;   // REFERENCES room (id) RoomType one to RoomType many
}

export interface RoomType {
    id: number;
    roomType: string;
    name: string;
    price: number;
    bedSize: number;
    chromecast: boolean;
    eletricSheer: boolean;
    wifi: boolean;
    bath: boolean;
    water: boolean;
    desk: boolean;
    typename: string;
    

  }