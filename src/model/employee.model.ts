//create interface employee
export interface Employee {
  id: number;
  name: string;
  position: string;
  tel: string;
  dateOfBirth: Date; //ขอยาดใส่เป็น string ก่อนจะดูความน่าจะเป็นเรื่องการเขียนอีกทีนึง
  address: string;
  email: string;
  dateStartWork: string;
  hourlyRate: number;
}
