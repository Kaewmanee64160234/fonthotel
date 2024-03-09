import { ActivityPerBooking } from "./activity.model";
import { Brokenequipment } from "./brokenequipment.model";
import { Customer } from "./customer.model";
import { Employee } from "./employee.model";
import { Promotion } from "./promotion.model";
import { Room} from "./room.model";


export interface Booking {
    id: number;
    createDate: Date;
    cusName: string;
    cusLastName: string;
    cusTel: string;
    cusEmail: string;
    cusCountry: string;
    cusAddress: string;
    checkIn: Date;
    checkOut: Date;
    total: number;
    pledge: number;
    totalDiscount: number;
    paymentBooking: string;
    paymentCheckout: string;
    status: string;
    statusLate: string;
    adult: number;
    child: number;
    employee?: Employee;
    customer?: Customer;
    promotion: Promotion;
    createdDate:Date;
    bookingDetail: BookingDetail[];
    activityPerBooking: ActivityPerBooking[];
}

export interface BookingDetail {
    id: number;
    total: number;
    room: Room;
    brokenequipment?: Brokenequipment[];
}