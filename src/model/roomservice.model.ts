//create interface roomservice
export interface RoomService {
  id: number;
  type: string;
  name: string;
  price: number;
  timeDelivery: Date;
  DateDelivery: Date;
  status: string;
}
