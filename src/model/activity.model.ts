import { Booking } from "./booking.model";
export interface Activity {
  id: number;
  name: string;
  price: number;
  description: string;
  image:string;

}

export interface ActivityPerBook {
  id: number;
  qty: number;
  total:number,
  booking:Booking;
  activity:Activity;
}
