import { Booking } from "@/model/booking.model";
import http from "./axios";

const saveBooking = async (booking: Booking,customerId:number) => {
  const bookingDetailMapped = booking.bookingDetail.map(detail => ({
    booking_de_total_price: detail.total, // Uncomment and adjust if your model contains a total price for each booking detail
    roomId: detail.room.id 

  }));

  const activityBookingMapped = booking.activityPerBooking.map(activity => ({
    act_rec_qty: activity.qty, 
    act_rec_total_price: activity.total, // Assuming 'total' directly maps to act_rec_total_price
    activityId: activity.activity.id, // Adjust if your model's structure is different
  }));

  const payload = {
    customerId: customerId,
    employeeId: 1,
    booking_cus_name: booking.cusName,
    booking_cus_lastname: booking.cusLastName,
    booking_cus_tel: booking.cusTel,
    booking_cus_email: booking.cusEmail,
    booking_cus_addr: booking.cusCountry,
    booking_cus_addr_des: booking.cusAddress,
    booking_cash_pledge: booking.pledge, // Adjusted from a static value to use `booking.pledge`
    booking_total_discount: booking.totalDiscount,
    booking_payment_booking: booking.paymentBooking,
    booking_adult:booking.adult,
    booking_child:booking.child,
    booking_status: booking.status,
    bookingdetail: bookingDetailMapped, // Now uses the mapped booking details
    activity_booking: activityBookingMapped,
  };
  console.log(JSON.stringify(payload));
  return await http.post("/booking", payload);
};

const getBookingBybookingid = (id: number) => {
  return http.get("/booking/id" + id);
};

const getBookingByCustomerIdLastcreated = (id: number) => {
  return http.get(`booking/customer/${id}/lasted`);
};

export default {
  saveBooking,
  getBookingBybookingid,
  getBookingByCustomerIdLastcreated,
};
