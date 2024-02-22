import { BookingDetail } from "./bookingdetail";

export interface ServiceRoom {
    id: number;
    type: string;
    name: string;
    price: number;
    datedel:  Date,
    status: string;
    bookingdetail:BookingDetail[] // INTEGER REFERENCES booking_detail (id) BookingDetail one to many ServiceRoom
}