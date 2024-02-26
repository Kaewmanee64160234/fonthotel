import http from "./axios";

const saveBooking = () => {
    return http.post('/bookings')
}

const getBookingBybookingid = (id: number) => {
    return http.get('/booking/id' + id)
}

const getBookingByCustomerIdLastcreated= (id: number) => {
    return http.get(`booking/customer/${id}/lasted`)
}

export default {saveBooking, getBookingBybookingid, getBookingByCustomerIdLastcreated}