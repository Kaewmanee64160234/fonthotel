import http from "./axios";

const saveBooking = () => {
    return http.post('/bookings')
}

const getBookingBybookingid = (id: number) => {
    return http.get('/booking/id' + id)
}

export default {saveBooking, getBookingBybookingid}