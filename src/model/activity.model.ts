import { Booking } from "./booking.model";
export interface Activity {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface ActivityPerBook {
  id: number;
  qty: number;
  total: number;
  booking: Booking;         // REFERENCES booking (id) Booking one to many ActivityPerBook 
  activities: Activity;     //REFERENCES activity (id) Activity one to ActivityPerBook many
}