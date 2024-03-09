import { defineStore } from "pinia";
import { ref } from "vue";
import bookingService from "@/service/booking";
import { Booking, BookingDetail } from "@/model/booking.model";
import { Employee } from "@/model/employee.model";
import { Customer } from "@/model/customer.model";
import { Promotion } from "@/model/promotion.model";
import { Room } from "@/model/room.model";
import { ActivityPerBooking } from "@/model/activity.model";
import { useUserStore } from "./user.store";
import router from "@/router";
import { RoomType } from "@/model/roomtype.model";
import Swal from "sweetalert2";

export const useBookingsStore = defineStore("bookings", () => {
  const userStore = useUserStore();
  const moreDetailCard = ref(false);
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
    pledge: 1500,
    promotion: {
      createdDate: new Date(),
      discount: 0,
      discountPercent: 0,
      endDate: new Date(),
      id: -1,
      name: "",
    },
  });
  const bookings = ref<Booking[]>([
    {
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
    },
  ]);

  const saveBooking = async () => {
    try {
      calculateInitialTotal();
      if (userStore.currentUser.role == "customer") {
        //check if total <= 0

        const response = await bookingService.saveBooking(
          currentBooking.value,
          userStore.currentUser.customer!.id!
        );
        if (response.data) {
          bookings.value = response.data;
        } else {
          bookings.value = [];
        }
      } else {
        const response = await bookingService.saveBookingEmployee(
          currentBooking.value,
          userStore.currentUser.employee!.id!
        );
        if (response.data) {
          bookings.value = response.data;
        } else {
          bookings.value = [];
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to map a single booking object
  function mapOneBooking(bookingData: any) {
    const booking: Booking = {
      id: bookingData.booking_id,
      createDate: new Date(bookingData.booking_create_date),
      cusName: bookingData.booking_cus_name,
      cusLastName: bookingData.booking_cus_lastname,
      cusTel: bookingData.booking_cus_tel,
      cusEmail: bookingData.booking_cus_email,
      cusCountry: bookingData.booking_cus_addr,
      cusAddress: bookingData.booking_cus_addr_des,
      checkIn: new Date(bookingData.booking_checkin),
      checkOut: new Date(bookingData.booking_checkout),
      total: bookingData.booking_total,
      pledge: bookingData.booking_cash_pledge,
      totalDiscount: bookingData.booking_total_discount,
      paymentBooking: bookingData.booking_payment_booking,
      paymentCheckout: bookingData.booking_payment_checkout,
      status: bookingData.booking_status,
      statusLate: bookingData.booking_status_late,
      adult: bookingData.booking_adult,
      child: bookingData.booking_child,
      createdDate: new Date(bookingData.updateDate),
      customer: bookingData.customer
        ? {
            id: bookingData.customer.cus_id,
            name: bookingData.customer.cus_name,
            startDate: new Date(bookingData.customer.cus_start_date),
          }
        : undefined,
      promotion: bookingData.promotion, // Map promotion as needed
      employee: bookingData.employee
        ? {
            id: bookingData.employee.emp_id,
            name: bookingData.employee.emp_name,
            position: bookingData.employee.emp_position,
            tel: bookingData.employee.emp_tel,
            dateOfBirth: new Date(bookingData.employee.emp_dob),
            address: bookingData.employee.emp_addr,
            email: bookingData.employee.emp_email,
            dateStartWork: bookingData.employee.emp_dsw, // Change type to string
            hourlyRate: bookingData.employee.emp_hourly_wage,
          }
        : undefined,
      bookingDetail: bookingData.bookingDetail
        ? bookingData.bookingDetail.map((detail: any) => ({
            id: detail.booking_de_id,
            room: {
              id: detail.room.room_id,
              image: detail.room.room_img_path,
              status: detail.room.room_status,
              roomType: {
                id: detail.room.roomtype.room_type_id,
                roomType: detail.room.roomtype.room_type,
                typeName: detail.room.roomtype.room_type_name,
                bedSize: detail.room.roomtype.room_type_bed_size,
              },
            },
            total: detail.total,
          }))
        : [],
      activityPerBooking: bookingData.activityPer
        ? bookingData.activityPer.map((activity: any) => ({
            id: activity.act_rec_id,
            activity: {
              id: activity.activity.act_id,
              name: activity.activity.act_name,
            },
            total: activity.act_rec_total_price,
            qty: activity.act_rec_qty,
          }))
        : [],
    };
    return booking;
  }

  const getBookingBybookingId = async (id: number) => {
    try {
      const response = await bookingService.getBookingBybookingid(id);
      if (response.data) {
        currentBooking.value = mapOneBooking(response.data);
      } else {
        bookings.value = [];
      }
    } catch (error) {
      console.log(error);
    }
  };

  function setBooking(booking: Booking) {
    currentBooking.value = { ...booking };
    calculateInitialTotal();

    return currentBooking;
  }
  function getBooking() {
    return currentBooking.value;
  }
  function toggleMoreDetail() {
    moreDetailCard.value = !moreDetailCard.value;
  }

  async function getBookingByCustomerIdLastcreated() {
    const response = await bookingService.getBookingByCustomerIdLastcreated(
      userStore.currentUser.customer!.id!
    );
    console.log("response", response.data);

    if (response.data != null) {
      currentBooking.value = mapOneBooking(response.data);
    }

    console.log("---------------------------------");
    console.log("Book", currentBooking.value);
  }

  //get bookings by employee id last created
  const getBookingByEmployeeIdLastcreated = async () => {
    const response = await bookingService.getBookingByEmployeeIdLastcreated(
      userStore.currentUser.employee!.id!
    );
    if (response.data != null) {
      currentBooking.value = mapOneBooking(response.data);
    }

    console.log("---------------------------------");
    console.log("Book", currentBooking.value);
  };

  //add bookingDetail
  const addBookingDetail = (bookingDetail: BookingDetail) => {
    currentBooking.value.bookingDetail.push(bookingDetail);
    console.log(bookingDetail);
    currentBooking.value.total =
      currentBooking.value.total + bookingDetail.room.roomType.price;
    console.log("---------------------------------");
    console.log(currentBooking.value);
    calculateInitialTotal();
  };

  const addActivityPerBooking = (activityPerBook: ActivityPerBooking) => {
    const existingActivityIndex =
      currentBooking.value.activityPerBooking.findIndex(
        (activityPerBooking) =>
          activityPerBooking.activity.id == activityPerBook.activity.id
      );
    console.log(existingActivityIndex);

    if (existingActivityIndex === -1) {
      currentBooking.value.activityPerBooking.push(activityPerBook);
    } else {
      currentBooking.value.activityPerBooking[existingActivityIndex].qty =
        activityPerBook.qty;
      currentBooking.value.activityPerBooking[existingActivityIndex].total =
        activityPerBook.qty * activityPerBook.activity.price;
    }

    calculateInitialTotal(); // Implement this function based on your booking model

    console.log("---------------------------------");
    console.log(currentBooking.value.total);
  };

  // Calculate the initial total cost of the booking
  function calculateInitialTotal() {
    currentBooking.value.total = 0;
    currentBooking.value.totalDiscount = 0;

    // Calculate the number of days in the stay
    const checkInDate = new Date(currentBooking.value.checkIn);
    const checkOutDate = new Date(currentBooking.value.checkOut);
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    const dayDiff = timeDiff / (1000 * 3600 * 24);

    // Ensure dayDiff is at least 1 to account for same-day check-in and check-out
    const numberOfDays = dayDiff > 0 ? dayDiff : 1;
    console.log("Number of days: ", numberOfDays);

    for (const bookingDetail of currentBooking.value.bookingDetail) {
      // Multiply the price by the number of days
      currentBooking.value.total += bookingDetail.total * numberOfDays;
    }
    for (const activityPerBooking of currentBooking.value.activityPerBooking) {
      currentBooking.value.total += activityPerBooking.total;
    }
    // Discount calculations
    if (currentBooking.value.promotion) {
      if (currentBooking.value.promotion.discountPercent) {
        // Apply percent discount
        currentBooking.value.total =
          currentBooking.value.total -
          (currentBooking.value.total *
            currentBooking.value.promotion.discountPercent) /
            100;
      } else if (currentBooking.value.promotion.discount) {
        // Apply flat discount
        currentBooking.value.total =
          currentBooking.value.total - currentBooking.value.promotion.discount;
      }
    }

    console.log("Total: ", currentBooking.value.total);
  }

  // Assuming bookingService.getBookings(order, status) retrieves booking data,
  // including details and associated activities (if any)

  async function getBookings(order: string, status: string) {
    try {
      const response = await bookingService.getBookings(order, status);
      const bookings_ = response.data.map((bookingData: any) => {
        // Basic booking information
        const booking = mapOneBooking(bookingData);
        return booking;
      });
      bookings.value = [];
      bookings.value.push(...bookings_);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  }

  // Note: Adapt the structure of activity mapping based on your actual response structure

  const confirmBooking = async (id: number, status: string) => {
    try {
      const response = await bookingService.confirmBooking(id, status);
      if (response.data) {
        console.log(response.data);
        getBookings("asc", "waiting");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const confirmBookingByCustomerOrEmployee = async (
    id: number,
    status: string
  ) => {
    try {
      const response = await bookingService.confirmBooking(id, status);
      if (response.data) {
        console.log("----------------------------------------------------");
        console.log(response.data);
        if (userStore.currentUser.role == "customer") {
          await getBookingByCustomerId(userStore.currentUser.customer!.id!);
        } else {
          await getBookingByEmployeeId(userStore.currentUser.employee!.id!);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeActivityPerBooking = (activityPerBooking: ActivityPerBooking) => {
    //remove activityPer
    const index = currentBooking.value.activityPerBooking.findIndex(
      (activity) => activity.id == activityPerBooking.id
    );
    currentBooking.value.activityPerBooking.splice(index, 1);
    calculateInitialTotal();
    console.log(currentBooking.value.activityPerBooking.length);
  };

  // removeRoomPerBooking
  const removeRoomPerBooking = (room: Room) => {
    // Remove room from booking
    const index = currentBooking.value.bookingDetail.findIndex(
      (booking) => booking.room.id === room.id
    );
    if (index !== -1) {
      currentBooking.value.bookingDetail.splice(index, 1);
      calculateInitialTotal();
      console.log(currentBooking.value.bookingDetail.length);
    }
  };

  const removePromotion = () => {
    currentBooking.value.promotion = {
      createdDate: new Date(),
      discount: 0,
      discountPercent: 0,
      endDate: new Date(),
      id: -1,
      name: "",
    };

    calculateInitialTotal();
  };

  // create function getBookingByCustomerId
  const getBookingByCustomerId = async (id: number) => {
    const response = await bookingService.getBookingByCustomerId(id);
    const bookings_ = response.data.map((bookingData: any) => {
      // Basic booking information
      const booking = mapOneBooking(bookingData);
      console.log(booking);
      return booking;
    });

    bookings.value.push(...bookings_);
  };

  // create function getBookingByEmployeeId
  const getBookingByEmployeeId = async (id: number) => {
    const response = await bookingService.getBookingByEmployeeId(id);
    const bookings_ = response.data.map((bookingData: any) => {
      // Basic booking information
      const booking = mapOneBooking(bookingData);
      console.log(booking);
      return booking;
    });

    bookings.value.push(...bookings_);
  };
  // set current room
  const setCurrentBooking = (booking: Booking) => {
    currentBooking.value = booking;
  };

  return {
    calculateInitialTotal,
    bookings,
    saveBooking,
    addBookingDetail,
    getBookingBybookingId,
    setBooking,
    getBookings,
    currentBooking,
    addActivityPerBooking,
    getBookingByCustomerIdLastcreated,
    confirmBooking,
    getBookingByEmployeeIdLastcreated,
    removeActivityPerBooking,
    removePromotion,
    getBookingByCustomerId,
    getBookingByEmployeeId,
    confirmBookingByCustomerOrEmployee,
    toggleMoreDetail,
    moreDetailCard,
    setCurrentBooking,
    removeRoomPerBooking,
  };
});
