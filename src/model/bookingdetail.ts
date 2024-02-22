import { Booking } from "./booking";
import { Brokenequipment } from "./brokenequipment";
import { Room } from "./room";

export interface BookingDetail {
    id: number;
    total: number;
    adult: number;
    child: number;
    room: Room[];             // INTEGER REFERENCES room (id) BookingDetail many to Room one
    booking: Booking[];       // INTEGER REFERENCES booking (id) BookingDetail many to booking one
    brokenequipment: Brokenequipment[];     // INTEGER REFERENCES brokenequipment (id) BookingDetail many to brokenequipment one
}