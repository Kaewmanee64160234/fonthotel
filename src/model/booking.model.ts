import { Brokenequipment } from "./brokenequipment.model";
import { Customer } from "./customer.model";
import { Employee } from "./employee.model";
import { Promotion } from "./promotion.model";
import { Room} from "./room.model";


export interface Booking {
    id: number;
    createdate: Date;
    cusname: string;
    cuslastname: string;
    custel: string;
    cusemail: string;
    cuscontry: string;
    cusaddress: string;
    checkin: Date;
    checkout: Date;
    total: number;
    pledge?: number;
    totaldiscount: number;
    paymentbooking: string;
    paymentcheckout: string;
    status: string;
    statuslate: string;
    adult: number;
    child: number;
    employee?: Employee[];       // REFERENCES employee (id) Employee one to many Booking
    customer?: Customer[];       // REFERENCES customer (id) Customer one to many Booking
    promotion?: Promotion;       // REFERENCES promotion (id) Promotion one to many Booking
}

export interface BookingDetail {
    id: number;
    total: number;
    room: Room[];             // INTEGER REFERENCES room (id) BookingDetail many to Room_ one
    booking: Booking[];       // INTEGER REFERENCES booking (id) BookingDetail many to booking one
    brokenequipment: Brokenequipment[];     // INTEGER REFERENCES brokenequipment (id) BookingDetail many to brokenequipment one
}