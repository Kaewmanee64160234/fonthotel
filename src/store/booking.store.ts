import { defineStore } from "pinia";
import { ref } from "vue";
import bookingService from "@/service/booking";
import { Booking } from "@/model/booking.model";
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
    return { bookings, saveBooking, getBookingBybookingid, setBooking, getBooking,currentBooking };
});
