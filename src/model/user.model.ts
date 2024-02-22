import { Customer } from "./customer.model";
import { Employee } from "./employee.model";

//created  interface user
export interface User {
  id: number;
  username:string;
  login: string;
  password: string;
  role: string;
  employee?:Employee;
  customer?:Customer;


}
