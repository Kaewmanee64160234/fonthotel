import { defineStore } from "pinia";
import { ref } from "vue";
import bookingService from "@/service/booking";
import { Booking, BookingDetail } from "@/model/booking.model";
import { Employee } from "@/model/employee.model";
import { Customer } from "@/model/customer.model";
import { Promotion } from "@/model/promotion.model";
import { Room, RoomType } from "@/model/room.model";
import { ActivityPerBooking } from "@/model/activity.model";
import { useUserStore } from "./user.store";

export const useBookingsStore = defineStore("bookings", () => {
  const userStore = useUserStore();
  const currentBooking = ref<Booking>({
    adult: 0,
    checkIn: new Date(),
    checkOut: new Date(),
    child: 0,
    createDate: new Date(),
    cusAddress: "",
    cusCountry: "",
    cusEmail: "",
    cusLastName: "",
    cusName: "",
    cusTel: "",
    createdDate: new Date(),

    id: 0,
    paymentBooking: "",
    paymentCheckout: "",
    status: "",
    statusLate: "",
    total: 0,
    totalDiscount: 0,
    activityPerBooking: [],
    bookingDetail: [],
    customer: { id: 0, name: "", startDate: new Date() },
    employee: {
      address: "",
      dateOfBirth: new Date(),
      dateStartWork: "",
      email: "",
      hourlyRate: 0,
      id: 0,
      name: "",
      position: "",
      tel: "",
    },
    pledge: 0,
    promotion: {
      createdDate: new Date(),
      discount: 0,
      discountPercent: 0,
      endDate: new Date(),
      id: 0,
      name: "",
    },
  });
  const bookings = ref<Booking[]>([]);

  const saveBooking = async () => {
    try {
      const response = await bookingService.saveBooking(
        currentBooking.value,
        userStore.currentUser.customer!.id!
      );
      if (response.data) {
        bookings.value = response.data;
      } else {
        bookings.value = [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBookingBybookingId = async (id: number) => {
    try {
      const response = await bookingService.getBookingBybookingid(id);
      if (response.data) {
        const booking: Booking = {
          id: response.data.booking_id,
          createDate: response.data.booking_create_date,
          cusName: response.data.booking_cus_name,
          cusLastName: response.data.booking_cus_lastname,
          cusTel: response.data.booking_cus_tel,
          cusEmail: response.data.booking_cus_email,
          cusCountry: response.data.booking_cus_addr,
          cusAddress: response.data.booking_cus_addr_des,
          checkIn: response.data.booking_checkin,
          checkOut: response.data.booking_checkout,
          total: response.data.booking_total,
          pledge: response.data.booking_cash_pledge,
          totalDiscount: response.data.booking_total_discount,
          paymentBooking: response.data.booking_payment_checkout,
          paymentCheckout: response.data.paymentCheckout,
          status: response.data.booking_status,
          statusLate: response.data.booking_status_late,
          adult: response.data.booking_de_adult,
          child: response.data.booking_de_child,

          employee: {
            address: "",
            dateOfBirth: new Date(),
            dateStartWork: "",
            email: "",
            hourlyRate: 0,
            id: -1,
            name: "",
            position: "",
            tel: "",
          },
          customer: {
            id: -1,
            name: "",
            startDate: new Date(),
          },
          promotion: {
            createdDate: new Date(),
            discount: 0,
            discountPercent: 0,
            endDate: new Date(),
            id: -1,
            name: "",
          },
          createdDate: new Date(response.data.booking_create_date),
          bookingDetail: [],
          activityPerBooking: [],
        };
        if (response.data != null) {
          // booking
          if (response.data.promotion != null) {
            const promotion: Promotion = {
              id: response.data.promotion.prom_id,
              createdDate: response.data.promotion.prom_created_date,
              endDate: response.data.promotion.prom_end_date,
              name: response.data.promotion.prom_name,
              discount: response.data.promotion.prom_discount,
              discountPercent: response.data.promotion.prom_discount_pres,
            };
            booking.promotion = promotion;
          }
          if (response.data.promotion != null) {
            const customer: Customer = {
              id: response.data.customer.cus_id,
              name: response.data.customer.cus_name,
              startDate: response.data.customer.cus_start_date,
            };
            booking.customer = customer;
          }
          if (response.data.promotion != null) {
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
            };
            booking.employee = employee;
          }

          if (response.data.bookingDetail) {
            for (const i in response.data.bookingDetail) {
              console.log(response.data.bookingDetail[i]);
              const roomType: RoomType = {
                id: response.data.bookingDetail[i].room.roomtype.room_type_id,
                roomType:
                  response.data.bookingDetail[i].room.roomtype.room_type,
                typeName:
                  response.data.bookingDetail[i].room.roomtype.room_type_name,
                bedSize:
                  response.data.bookingDetail[i].room.roomtype
                    .room_type_bed_size,
                bath: response.data.bookingDetail[i].room.roomtype
                  .room_type_bath,
                chromeCast:
                  response.data.bookingDetail[i].room.roomtype
                    .room_type_chromecast,
                desk: response.data.bookingDetail[i].room.roomtype
                  .room_type_desk,
                eletricSheer:
                  response.data.bookingDetail[i].room.roomtype
                    .room_type_electric_sheer,
                price:
                  response.data.bookingDetail[i].room.roomtype.room_type_price,
                water:
                  response.data.bookingDetail[i].room.roomtype.room_type_water,
                wifi: response.data.bookingDetail[i].room.roomtype
                  .room_type_wifi,
                descriptions:
                  response.data.bookingDetail[i].room.roomtype.room_type_des,
              };

              const room: Room = {
                id: response.data.bookingDetail[i].room.room_id,
                image: response.data.bookingDetail[i].room.room_img_path,
                status: response.data.bookingDetail[i].room.room_status,
                roomType: roomType,
              };
              const bookingDetail: BookingDetail = {
                id: response.data.bookingDetail[i].id,
                room: room,
                total: response.data.bookingDetail[i].total,
              };
              booking.bookingDetail?.push(bookingDetail);
            }
          }
          if (response.data.activityPerBooking) {
            for (const i in response.data.activityPerBooking) {
              const activityPerBooking: ActivityPerBooking = {
                id: response.data.activityPerBooking[i].id,
                // booking: response.data.activityPerBooking.bookings[i].booking,
                activity: {
                  id: response.data.activityPerBooking[i].act_id,
                  image: response.data.activityPerBooking[i].act_img_path,
                  name: response.data.activityPerBooking[i].act_name,
                  price: response.data.activityPerBooking[i].act_price,
                  description: response.data.activityPerBooking[i].act_des,
                },
                total: response.data.activityPerBooking[i].total,
                // createdate: response.data.activityPerBooking[i].createdate,
                // updatedate: response.data.activityPerBooking[i].updatedate,
                qty: response.data.activityPerBooking[i].qty,
              };

              booking.activityPerBooking?.push(activityPerBooking);
            }
          }
          currentBooking.value = booking;
          setBooking(booking);
          console.log("---------------------------------");
          console.log("Book", currentBooking.value);
        }
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
    const response = await bookingService.getBookingByCustomerIdLastcreated(userStore.currentUser.customer!.id!);
    console.log(response);
    const booking: Booking = {
      id: response.data.booking_id,
      createDate: response.data.booking_create_date,
      cusName: response.data.booking_cus_name,
      cusLastName: response.data.booking_cus_lastname,
      cusTel: response.data.booking_cus_tel,
      cusEmail: response.data.booking_cus_email,
      cusCountry: response.data.booking_cus_addr,
      cusAddress: response.data.booking_cus_addr_des,
      checkIn: response.data.booking_checkin,
      checkOut: response.data.booking_checkout,
      total: response.data.booking_total,
      pledge: response.data.booking_cash_pledge,
      totalDiscount: response.data.booking_total_discount,
      paymentBooking: response.data.booking_payment_booking,
      paymentCheckout: response.data.paymentCheckout,
      status: response.data.booking_status,
      statusLate: response.data.booking_status_late,
      
      adult: response.data.booking_adult,
      child: response.data.booking_child,

      employee: {
        address: "",
        dateOfBirth: new Date(),
        dateStartWork: "",
        email: "",
        hourlyRate: 0,
        id: -1,
        name: "",
        position: "",
        tel: "",
      },
      customer: {
        id: -1,
        name: "",
        startDate: new Date(),
      },
      promotion: {
        createdDate: new Date(),
        discount: 0,
        discountPercent: 0,
        endDate: new Date(),
        id: -1,
        name: "",
      },
      createdDate: new Date(response.data.booking_create_date),
      bookingDetail: [],
      activityPerBooking: [],
    };
    if (response.data != null) {
      // booking
      if (response.data.promotion != null) {
        const promotion: Promotion = {
          id: response.data.promotion.prom_id,
          createdDate: response.data.promotion.prom_created_date,
          endDate: response.data.promotion.prom_end_date,
          name: response.data.promotion.prom_name,
          discount: response.data.promotion.prom_discount,
          discountPercent: response.data.promotion.prom_discount_pres,
        };
        booking.promotion = promotion;
      }
      if (response.data.promotion != null) {
        const customer: Customer = {
          id: response.data.customer.cus_id,
          name: response.data.customer.cus_name,
          startDate: response.data.customer.cus_start_date,
        };
        booking.customer = customer;
      }
      if (response.data.promotion != null) {
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
        };
        booking.employee = employee;
      }

      if (response.data.bookingDetail) {
        for (const i in response.data.bookingDetail) {
          console.log(response.data.bookingDetail[i]);
          const roomType: RoomType = {
            id: response.data.bookingDetail[i].room.roomtype.room_type_id,
            roomType: response.data.bookingDetail[i].room.roomtype.room_type,
            typeName:
              response.data.bookingDetail[i].room.roomtype.room_type_name,
            bedSize:
              response.data.bookingDetail[i].room.roomtype.room_type_bed_size,
            bath: response.data.bookingDetail[i].room.roomtype.room_type_bath,
            chromeCast:
              response.data.bookingDetail[i].room.roomtype.room_type_chromecast,
            desk: response.data.bookingDetail[i].room.roomtype.room_type_desk,
            eletricSheer:
              response.data.bookingDetail[i].room.roomtype
                .room_type_electric_sheer,
            price: response.data.bookingDetail[i].room.roomtype.room_type_price,
            water: response.data.bookingDetail[i].room.roomtype.room_type_water,
            wifi: response.data.bookingDetail[i].room.roomtype.room_type_wifi,
            descriptions:
              response.data.bookingDetail[i].room.roomtype.room_type_des,
          };

          const room: Room = {
            id: response.data.bookingDetail[i].room.room_id,
            image: response.data.bookingDetail[i].room.room_img_path,
            status: response.data.bookingDetail[i].room.room_status,
            roomType: roomType,
          };
          const bookingDetail: BookingDetail = {
            id: response.data.bookingDetail[i].id,
            room: room,
            total: response.data.bookingDetail[i].total,
          };
          booking.bookingDetail?.push(bookingDetail);
        }
      }
      if (response.data.activityPerBooking) {
        for (const i in response.data.activityPerBooking) {
          const activityPerBooking: ActivityPerBooking = {
            id: response.data.activityPerBooking[i].id,
            // booking: response.data.activityPerBooking.bookings[i].booking,
            activity: {
              id: response.data.activityPerBooking[i].act_id,
              image: response.data.activityPerBooking[i].act_img_path,
              name: response.data.activityPerBooking[i].act_name,
              price: response.data.activityPerBooking[i].act_price,
              description: response.data.activityPerBooking[i].act_des,
            },
            total: response.data.activityPerBooking[i].total,
            // createdate: response.data.activityPerBooking[i].createdate,
            // updatedate: response.data.activityPerBooking[i].updatedate,
            qty: response.data.activityPerBooking[i].qty,
          };

          booking.activityPerBooking?.push(activityPerBooking);
        }
      }
      currentBooking.value = booking;
      setBooking(booking);
      console.log("---------------------------------");
      console.log("Book", currentBooking.value);
    }
  }

  //add bookingDetail
  const addBookingDetail = (bookingDetail: BookingDetail) => {
    currentBooking.value.bookingDetail.push(bookingDetail);
    console.log(bookingDetail);
    console.log("---------------------------------");
    console.log(currentBooking.value);
  };

  const addAcitivityPerBooking = (activityPerBook: ActivityPerBooking) => {
    currentBooking.value.activityPerBooking.push(activityPerBook);
    console.log(activityPerBook);
    console.log("---------------------------------");
    console.log(currentBooking.value);
  };

//   async function getBookings() {
//     try {
//         const response = await bookingService.getBookings('asc','Not Comfrim');
//         console.log(response);

//         const booking: Booking = {
//             id: response.data.booking_id,
//             createDate: new Date(response.data.booking_create_date),
//             cusName: response.data.booking_cus_name,
//             cusLastName: response.data.booking_cus_lastname,
//             cusTel: response.data.booking_cus_tel,
//             cusEmail: response.data.booking_cus_email,
//             cusCountry: response.data.booking_cus_addr,
//             cusAddress: response.data.booking_cus_addr_des,
//             checkIn: new Date(response.data.booking_checkin),
//             checkOut: new Date(response.data.booking_checkout),
//             total: response.data.booking_total,
//             pledge: response.data.booking_cash_pledge,
//             totalDiscount: response.data.booking_total_discount,
//             paymentBooking: response.data.booking_payment_booking,
//             paymentCheckout: response.data.booking_payment_checkout,
//             status: response.data.booking_status,
//             statusLate: response.data.booking_status_late,
//             adult: response.data.booking_de_adult,
//             child: response.data.booking_de_child,
//             createdDate: new Date(response.data.booking_create_date),
//             bookingDetail: [],
//             activityPerBooking: [],
//             customer: {
//                 id: -1,
//                 name: "",
//                 startDate: new Date(),
//             },
//             promotion: {
//                 createdDate: new Date(),
//                 discount: 0,
//                 discountPercent: 0,
//                 endDate: new Date(),
//                 id: -1,
//                 name: "",
//             },
//             employee: {
//                 address: "",
//                 dateOfBirth: new Date(),
//                 dateStartWork: "",
//                 email: "",
//                 hourlyRate: 0,
//                 id: -1,
//                 name: "",
//                 position: "",
//                 tel: "",
//             },
//         }
//         if (response.data != null) {
//             // booking
//             if (response.data.promotion != null) {
//                 const promotion: Promotion = {
//                     id: response.data.promotion.prom_id,
//                     createdDate: response.data.promotion.prom_created_date,
//                     endDate: response.data.promotion.prom_end_date,
//                     name: response.data.promotion.prom_name,
//                     discount: response.data.promotion.prom_discount,
//                     discountPercent: response.data.promotion.prom_discount_pres,
//                 }
//                 booking.promotion = promotion
//             }
//             if (response.data.promotion != null) {
//                 const customer: Customer = {
//                     id: response.data.customer.cus_id,
//                     name: response.data.customer.cus_name,
//                     startDate: response.data.customer.cus_start_date,
//                 }
//                 booking.customer = customer
//             }
//             if (response.data.promotion != null) {
//                 const employee: Employee = {
//                     id: response.data.employee.emp_id,
//                     name: response.data.employee.emp_name,
//                     position: response.data.employee.emp_position,
//                     tel: response.data.employee.emp_tel,
//                     dateOfBirth: response.data.employee.emp_dob,
//                     address: response.data.employee.emp_addr,
//                     email: response.data.employee.emp_email,
//                     dateStartWork: response.data.employee.emp_dsw,
//                     hourlyRate: response.data.employee.emp_hourly_wage,
//                 }
//                 booking.employee = employee
//             }

//             if (response.data.bookingDetail) {
//                 for (const i in response.data.bookingDetail) {
//                     console.log(response.data.bookingDetail[i])
//                     const roomType: RoomType = {
//                         id: response.data.bookingDetail[i].room.roomtype.room_type_id,
//                         roomType: response.data.bookingDetail[i].room.roomtype.room_type,
//                         typeName: response.data.bookingDetail[i].room.roomtype.room_type_name,
//                         bedSize: response.data.bookingDetail[i].room.roomtype.room_type_bed_size,
//                         bath: response.data.bookingDetail[i].room.roomtype.room_type_bath,
//                         chromeCast: response.data.bookingDetail[i].room.roomtype.room_type_chromecast,
//                         desk: response.data.bookingDetail[i].room.roomtype.room_type_desk,
//                         eletricSheer: response.data.bookingDetail[i].room.roomtype.room_type_electric_sheer,
//                         price: response.data.bookingDetail[i].room.roomtype.room_type_price,
//                         water: response.data.bookingDetail[i].room.roomtype.room_type_water,
//                         wifi: response.data.bookingDetail[i].room.roomtype.room_type_wifi,
//                         descriptions: response.data.bookingDetail[i].room.roomtype.room_type_des,
//                     }

//                     const room: Room = {
//                         id: response.data.bookingDetail[i].room.room_id,
//                         image: response.data.bookingDetail[i].room.room_img_path,
//                         status: response.data.bookingDetail[i].room.room_status,
//                         roomType: roomType

//                     }
//                     const bookingDetail: BookingDetail = {
//                         id: response.data.bookingDetail[i].id,
//                         room: room,
//                         total: response.data.bookingDetail[i].total,

//                     }
//                     booking.bookingDetail?.push(bookingDetail)
//                 }

//             }
//             if (response.data.activityPerBooking) {
//                 for (const i in response.data.activityPerBooking) {
//                     const activityPerBooking: ActivityPerBooking = {
//                         id: response.data.activityPerBooking[i].id,
//                         // booking: response.data.activityPerBooking.bookings[i].booking,
//                         activity: {
//                             id: response.data.activityPerBooking[i].act_id,
//                             image: response.data.activityPerBooking[i].act_img_path,
//                             name: response.data.activityPerBooking[i].act_name,
//                             price: response.data.activityPerBooking[i].act_price,
//                             description: response.data.activityPerBooking[i].act_des,
//                         },
//                         total: response.data.activityPerBooking[i].total,
//                         createdate: response.data.activityPerBooking[i].createdate,
//                         updatedate: response.data.activityPerBooking[i].updatedate,
//                     }

//                     booking.activityPerBooking?.push(activityPerBooking)
//                 }

//             }
//             currentBooking.value = booking;
//             setBooking(booking)
//             console.log('Book', currentBooking.value)

//         }

//     } catch (error) {
//         console.log(error);
//     }

    
// }

  return {
    bookings,
    saveBooking,
    addBookingDetail,
    getBookingBybookingId,
    setBooking,
    //getBookings,
    currentBooking,
    addAcitivityPerBooking,
    getBookingByCustomerIdLastcreated,
  };
});