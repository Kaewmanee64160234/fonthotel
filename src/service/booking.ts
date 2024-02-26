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

const getBooking = (time: string, status: string) => {
    return http.get(`booking/time/${time}/status/${status}`)
}

export default {saveBooking, getBookingBybookingid, getBookingByCustomerIdLastcreated, getBooking}