import { defineStore } from "pinia";
import { ref } from "vue";
import bookingService from "@/service/booking";
import { Booking, BookingDetail } from "@/model/booking.model";
import { Employee } from "@/model/employee.model";
import { Customer } from "@/model/customer.model";
import { Promotion } from "@/model/promotion.model";
import { Room, RoomType } from "@/model/room.model";
import { ActivityPerBooking } from "@/model/activity.model";
export const useBookingsStore = defineStore("bookings", () => {
    const currentBooking = ref<Booking>();
    const bookings = ref<Booking[]>([]);

    const saveBooking = async () => {
        try {
            const response = await bookingService.saveBooking();
            if (response.data) {
                bookings.value = response.data;
            } else {
                bookings.value = [];
            }
        } catch (error) {
            console.log(error);
        }
    };

    const getBookingBybookingid = async (id: number) => {
        try {
            const response = await bookingService.getBookingBybookingid(id);
            if (response.data) {
                bookings.value = response.data;
            } else {
                bookings.value = [];
            }
        } catch (error) {
            console.log(error);
        }
    };

    function setBooking(booking: Booking) {
        currentBooking.value = { ...booking };
        return currentBooking;
    }
    function getBooking() {
        return currentBooking.value;
    }

    async function getBookingByCustomerIdLastcreated() {
        const response = await bookingService.getBookingByCustomerIdLastcreated(currentBooking.value!.customer!.id);
        if (response.data != null) {
            // booking
            const promotion: Promotion = {
                id: response.data.promotion.prom_id,
                createdDate: response.data.promotion.prom_created_date,
                endDate: response.data.promotion.prom_end_date,
                name: response.data.promotion.prom_name,
                discount: response.data.promotion.prom_discount,
                discountPercent: response.data.promotion.prom_discount_pres,
            }
            const customer: Customer = {
                id: response.data.customer.cus_id,
                name: response.data.customer.cus_name,
                startDate: response.data.customer.cus_start_date,
            }
            const employee: Employee = {
                id: response.data.employee.emp_id,
                name: response.data.employee.emp_name,
                position: response.data.employee.emp_position,
                tel: response.data.employee.emp_tel,
                dateOfBirth: response.data.employee.emp_dob,
                address: response.data.employee.emp_addr,
                email: response.data.employee.emp_email,
                dateStartWork: response.data.employee.emp_dsw,
                hourlyRate: response.data.employee.emp_hourly_wage,
            }
            const booking: Booking = {
                id: response.data.booking.booking_id,
                createDate: response.data.booking.booking_create_date,
                cusName: response.data.booking.booking_cus_name,
                cusLastName: response.data.booking.booking_cus_lastname,
                cusTel: response.data.booking.booking_cus_tel,
                cusEmail: response.data.booking.booking_cus_email,
                cusCountry: response.data.booking.booking_cus_addr,
                cusAddress: response.data.booking.booking_cus_addr_des,
                checkIn: response.data.booking.booking_checkin,
                checkOut: response.data.booking.booking_checkout,
                total: response.data.booking.booking_total,
                pledge: response.data.booking.booking_cash_pledge,
                totalDiscount: response.data.booking.booking_total_discount,
                paymentBooking: response.data.booking.booking_payment_checkout,
                paymentCheckout: response.data.booking.paymentCheckout,
                status: response.data.booking.booking_status,
                statusLate: response.data.booking.booking_status_late,
                adult: response.data.booking.booking_de_adult,
                child: response.data.booking.booking_de_child,
                employee: employee,
                customer: customer,
                promotion: promotion,
                bookingDetail: [],
                activityPerBooking: [],
            }
            if (response.data.bookingDetail) {
                for (const i in response.data.bookingDetail) {
                    const roomType: RoomType = {
                        id: response.data.bookingDetail[i].room.roomtype.room_type_id,
                        roomType: response.data.bookingDetail[i].room.rommtype.room_type,
                        typeName: response.data.bookingDetail[i].room.roomtype.room_type_name,
                        bedSize: response.data.bookingDetail[i].room.roomtype.room_type.room_type_bed_size,
                        bath: response.data.bookingDetail[i].room.roomtype.room_type_bath,
                        chromeCast: response.data.bookingDetail[i].room.rommtype.room_type_chromecast,
                        desk: response.data.bookingDetail[i].room.rommtype.room_type_desk,
                        eletricSheer: response.data.bookingDetail[i].room.roomtype.room_type_electric_sheer,
                        price: response.data.bookingDetail[i].room.roomtype.room_type_price,
                        water: response.data.bookingDetail[i].rommtype.room_type_water,
                        wifi: response.data.bookingDetail[i].room.roomtype.room_type_wifi,
                        descriptions: response.data.bookingDetail[i].roomtype.room_type_des,
                    }

                    const room: Room = {
                        id: response.data.bookingDetail[i].room.room_id,
                        image: response.data.bookingDetail[i].room.room_img_path,
                        status: response.data.bookingDetail[i].room.room_status,
                        roomType: roomType

                    }
                    const bookingDetail: BookingDetail = {
                        booking: booking,
                        id: response.data.bookingDetail[i].id,
                        room: room,
                        total: response.data.bookingDetail[i].total,
                    }
                    booking.bookingDetail?.push(bookingDetail)
                }

            }
            if (response.data.activityPerBooking) {
                for (const i in response.data.activityPerBooking) {
                    const activityPerBooking: ActivityPerBooking = {
                        id: response.data.activityPerBooking[i].id,
                        booking: response.data.activityPerBooking.bookings[i].booking,
                        activity: {
                            id: response.data.activityPerBooking[i].act_id,
                            image: response.data.activityPerBooking[i].act_img_path,
                            name: response.data.activityPerBooking[i].act_name,
                            price: response.data.activityPerBooking[i].act_price,
                            description: response.data.activityPerBooking[i].act_des,
                        },
                        total: response.data.activityPerBooking[i].total,
                        status: response.data.activityPerBooking[i].status,
                        createdate: response.data.activityPerBooking[i].createdate,
                        updatedate: response.data.activityPerBooking[i].updatedate,
                    }

                    booking.activityPerBooking?.push(activityPerBooking)


                }

            }
        }
    }



    return { bookings, saveBooking, getBookingBybookingid, setBooking, getBooking, currentBooking, getBookingByCustomerIdLastcreated };
});
