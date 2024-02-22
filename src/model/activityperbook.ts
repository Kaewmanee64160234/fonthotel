import { Activity } from "./activity";
import { Booking } from "./booking";

export interface ActivityPerBook {
    id: number;
    qty: number;
    total: number;
    booking: Booking[];         // REFERENCES booking (aid) Activity one to ActivityPerBook many
    activities: Activity[];     //REFERENCES activity (id) Booking one to ActivityPerBook many
}