import { defineStore } from "pinia";
import { ref } from "vue";
import bookingService from "@/service/booking";
import { Booking } from "@/model/booking.model";
import { ActivityPerBook } from "@/model/activity.model";
export const useBookingsStore = defineStore("bookings", () => {
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
        id
        : 0,
        paymentBooking: "",
        paymentCheckout: "",
        status: "",
        statusLate: "",
        total: 0,
        totalDiscount: 0,
        activityPerBooking: [],
        bookingDetail: [],
        customer: {id:0,name:"",startDate:new Date()},
        employee: {
            address: "",
            dateOfBirth: new Date(),
            dateStartWork: '',
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
            discount    : 0,
            discountPercent: 0,
            endDate: new Date(),
            id: 0,
            name: "",
        },
    });
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

    const getBookingBybookingId = async (id: number) => {
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

    const addAcitivityPerBooking = (activityPerBook:ActivityPerBook)=>{
        currentBooking.value.activityPerBooking.push(activityPerBook)
        console.log(activityPerBook)
        console.log(currentBooking.value?.activityPerBooking)
    }
    return { saveBooking, getBookingBybookingId, setBooking, getBooking,currentBooking ,addAcitivityPerBooking};

});
