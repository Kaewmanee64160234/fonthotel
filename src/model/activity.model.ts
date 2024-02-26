import { Booking } from "./booking.model";
export interface Activity {
  id: number;
  name: string;
  price: number;
  description: string;
  image:string;

}
export interface ActivityPerBooking {
  id: number;
  qty: number;
  activity: Activity;
  total: number;


}
