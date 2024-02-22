import { Customer } from "./customer";
import { Employee } from "./employee";
import { Promotion } from "./promotion";

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
    pledge: number;
    totaldiscount: number;
    paymentbooking: string;
    paymentcheckout: string;
    status: string;
    statuslate: string;
    employee: Employee[];       // REFERENCES employee (id) Employee one to many Booking
    customer: Customer[];       // REFERENCES customer (id) Customer one to many Booking
    promotion: Promotion;       // REFERENCES promotion (id) Promotion one to many Booking
}