import { Activity } from "./activity.model";
import { Customer } from "./customer.model";
import { RoomService } from "./roomservice.model";

//create interface recipt
export interface Recipt {
  id: number;
  date: Date;
  total: number;
  customer: Customer;
  roomService: RoomService;
}
//create interface reciptDetail
export interface ReciptDetail {
  id: number;
  recipt: Recipt;
  activity: Activity;
  amount: number;
  price: number;
}