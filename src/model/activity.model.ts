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
<<<<<<< HEAD
 
=======
  
>>>>>>> 702bc5c9d3699c3947db780d20319de72e86a97e
  total: number;
  activities: Activity;   
}

export interface ActivityPerBooking {
  id: number;
  booking: Booking;
  activity: ActivityPerBook[];
  total: number;
  status: string;
  createdate: Date;
  updatedate: Date;

}
