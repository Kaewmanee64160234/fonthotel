import { Booking } from "@/model/booking.model";
import http from "./axios";

const saveBooking = async (booking: Booking, customerId: number) => {
  const bookingDetailMapped = booking.bookingDetail.map((detail) => ({
    booking_de_total_price: detail.total, // Uncomment and adjust if your model contains a total price for each booking detail
    roomId: detail.room.id,
  }));

  const activityBookingMapped = booking.activityPerBooking.map((activity) => ({
    act_rec_qty: activity.qty,
    act_rec_total_price: activity.total, // Assuming 'total' directly maps to act_rec_total_price
    activityId: activity.activity.id, // Adjust if your model's structure is different
  }));

  const payload = {
    customerId: customerId,
    booking_cus_name: booking.cusName,
    booking_cus_lastname: booking.cusLastName,
    booking_cus_tel: booking.cusTel,
    booking_cus_email: booking.cusEmail,
    booking_cus_addr: booking.cusCountry,
    booking_cus_addr_des: booking.cusAddress,
    booking_cash_pledge: booking.pledge, // Adjusted from a static value to use `booking.pledge`

    booking_payment_booking: booking.paymentBooking,
    booking_adult: booking.adult,
    booking_child: booking.child,
    booking_status: booking.status,
    bookingdetail: bookingDetailMapped, // Now uses the mapped booking details
    activity_booking: activityBookingMapped,
    booking_checkin: booking.checkIn,
    booking_checkout: booking.checkOut,
    booking_total_discount: booking.totalDiscount,
    booking_total: booking.total,
  };
  console.log(JSON.stringify(payload));
  return await http.post("/booking", payload);
};

const getBookingBybookingid = (id: number) => {
  return http.get("/booking/" + id);
};

const getBookingByCustomerIdLastcreated = (id: number) => {
  return http.get(`booking/customer/${id}/lasted`);
};

const getBookings = (time: string, status: string) => {
  console.log(`/booking/time/${time}/status/${status}`);
  return http.get(`/booking/time/${time}/status/${status}`);
};

const confirmBooking = (id: number, status: string) => {
  console.log("--------------------------------");
  console.log(`/booking/${id}`);
  return http.patch(`/booking/${id}`, {
    booking_status: status,
  });
};

//create function save by employee
const saveBookingEmployee = async (booking: Booking, employeeId: number) => {
  const bookingDetailMapped = booking.bookingDetail.map((detail) => ({
    booking_de_total_price: detail.total, // Uncomment and adjust if your model contains a total price for each booking detail
    roomId: detail.room.id,
  }));

  const activityBookingMapped = booking.activityPerBooking.map((activity) => ({
    act_rec_qty: activity.qty,
    act_rec_total_price: activity.total, // Assuming 'total' directly maps to act_rec_total_price
    activityId: activity.activity.id, // Adjust if your model's structure is different
  }));

  const payload = {
    employeeId: employeeId,
    booking_cus_name: booking.cusName,
    booking_cus_lastname: booking.cusLastName,
    booking_cus_tel: booking.cusTel,
    booking_cus_email: booking.cusEmail,
    booking_cus_addr: booking.cusCountry,
    booking_cus_addr_des: booking.cusAddress,
    booking_cash_pledge: booking.pledge, // Adjusted from a static value to use `booking.pledge`
    booking_total_discount: booking.totalDiscount,
    booking_payment_booking: booking.paymentBooking,
    booking_adult: booking.adult,
    booking_child: booking.child,
    booking_status: booking.status,
    bookingdetail: bookingDetailMapped, // Now uses the mapped booking details
    activity_booking: activityBookingMapped,
    booking_checkin: booking.checkIn,
    booking_checkout: booking.checkOut,
  };
  console.log(JSON.stringify(payload));
  return await http.post("/booking/employee", payload);
};

// create getBookingByEmployeeIdLastcreated
const getBookingByEmployeeIdLastcreated = (id: number) => {
  return http.get(`booking/employee/${id}/lasted`);
};

// create getBookingByCustomerId
const getBookingByCustomerId = (id: number) => {
  return http.get(`booking/customer/${id}`);
};
// cretate getBookingByEmployeeId
const getBookingByEmployeeId = (id: number) => {
    
    return http.get(`booking/employee/${id}`);
    };
export default {
  saveBooking,
  getBookingBybookingid,
  getBookingByCustomerIdLastcreated,
  getBookings,
  confirmBooking,
  saveBookingEmployee,
  getBookingByEmployeeIdLastcreated,
  getBookingByCustomerId,
  getBookingByEmployeeId,

};
