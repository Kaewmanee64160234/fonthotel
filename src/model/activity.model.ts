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
  booking: Booking;
  activity: Activity;
  total: number;
  createdate: Date;
  updatedate: Date;

}
