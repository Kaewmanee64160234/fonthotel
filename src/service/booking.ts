import http from "./axios";

const saveBooking = () => {
    return http.post('/bookings')
}

const getBookingById = (id: number) => {
    return http.get('/booking/id' + id)
}

export default {saveBooking, getBookingById}