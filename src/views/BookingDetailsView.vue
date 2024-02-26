<script setup lang="ts">
import BookingDetailComponent from "@/components/BookingDetailComponent.vue";
import { useBookingsStore } from "@/store/booking.store";
import { onMounted, ref } from "vue";
import { Booking } from "@/model/booking.model";

const bookingStore = useBookingsStore();
const booking = ref<Booking>();

onMounted(async () => {
    await bookingStore.getBookingByCustomerIdLastcreated();
    booking.value = bookingStore.currentBooking;

    // Use the custom replacer function for logging
    // console.log(JSON.stringify(booking.value, replacer, 2));
});
</script>

<template>
    <div class="body">
        <div>
            {{ booking }}
            <!-- <BookingDetailComponent :img="`${booking.bookingDetail[0].room.image}`" 
                :date="booking!.createDate.toString()"  :name="booking!.cusName" 
                :roomType="booking!.bookingDetail![0].room.roomType.toString()"  :adult="booking!.adult"  :children="booking!.child"
                :total="booking!.total" :payment="booking!.paymentBooking" :status="booking!.status" >
            </BookingDetailComponent> -->
        </div>
        <!-- <BookingDetailComponent type="DELUXE ROOM"
            :img="'https://i.pinimg.com/564x/f9/cd/83/f9cd83db4e00175770998abeca0f3299.jpg'"
            :date="Date" :name="' Linlada Pasukjai '" :typeroom="'  Deluxe  '"
            :adult="0" :children="0" :total="7009" :checkin="' 1:00'" :checkout="'  7:00'" :payment="'Cardit Card'"
            :status="'Success'">
        </BookingDetailComponent> -->
    </div>
</template>

<style scoped>
.body {
    background-image: url("../images/image.png");
    background-size: cover;
    /* Cover the entire screen */
    background-position: center;
    /* Center the background image */
    background-repeat: no-repeat;
    /* Do not repeat the image */
    width: 100vw;
    height: 100vh;
    /* Make sure the div covers the full height of the viewport */
    position: fixed;
    /* Optional: Fixes the background to the viewport */
    top: 0;
    left: 0;
}

.card-style {
    width: 92vw;
    height: 80vh;
    border-radius: 30px;
    background-color: rgba(229, 229, 229, 0.758);
    /* add filter blue */
    fill-opacity: unset;
    display: block;
}

.bigcard {
    display: flex;
    height: 80vh;
}

.font-judson {
    font-family: "Judson";
}

.btn-booking {
    background-color: #906843;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px #805d3f;
    font-weight: medium;
    text-decoration: none;
    display: inline-block;
    width: 150px;
}
</style>


