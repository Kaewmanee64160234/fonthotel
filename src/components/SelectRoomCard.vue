<script setup lang="ts">
import { BookingDetail } from "@/model/booking.model";
import { Room } from "@/model/room.model";
import router from "@/router";
import room from "@/service/room";
import { useBookingsStore } from "@/store/booking.store";
import { useRoomStore } from "@/store/room.store";
import { useUserStore } from '@/store/user.store';
import { defineProps, ref } from "vue";
import Swal from "sweetalert2";


const userStore = useUserStore();
const roomStore = useRoomStore();
const bookingsStore = useBookingsStore();
const props = defineProps<{
  image: string;
  typename: string;
  sleep: string;
  detail: string;
  price: number;
  roomDetail: string;
  btnbooknow: string;
  room: Room;
}>();
//add bookingDeail

const addBooking = () => {
  if(userStore.currentUser.id <= 0 ) {
        router.push('/login');
  }else{
    const bookingDetail: BookingDetail = {
    id: -1,
    room: props.room,
    total: props.room.roomType.price,
  };
  checkRoomCapacity(bookingDetail);

  }

};

const clickRoomDetail = () => {
  roomStore.setCurrentRoom(props.room);
  console.log(props.room);
  roomStore.toggleRoomDetail();
};
// function checkRoomCapacity(bookingDetail: BookingDetail) {
//   console.log(props.room.roomType.maxAdult);
//   console.log(props.room.roomType.maxChildren);
// if(bookingsStore.currentBooking.bookingDetail.length > 1){
//   // total gust - total that already book
//   let totalGuest = bookingsStore.currentBooking.adult + bookingsStore.currentBooking.child;
//   let totalBooked = 0;
//   bookingsStore.currentBooking.bookingDetail.forEach((booking) => {
//     totalBooked += booking.room.roomType.maxAdult + booking.room.roomType.maxChildren;
//   });
//   if (totalGuest > totalBooked) {
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: `The selected room cannot accommodate adult: ${bookingsStore.currentBooking.adult} and children: ${bookingsStore.currentBooking.child},May I suggest you to select more room or change the room?`,
//     });
//     return;
//   } else {
//     bookingsStore.addBookingDetail(bookingDetail);
//     router.push("/activity");
//   }

// }else{
//   if (
//     props.room.roomType.maxAdult < bookingsStore.currentBooking.adult ||
//     bookingsStore.currentBooking.adult > props.room.roomType.maxChildren
//   ) {
//     // Show SweetAlert
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: `The selected room cannot accommodate adult: ${bookingsStore.currentBooking.adult} and children: ${bookingsStore.currentBooking.child},May I suggest you to select more room or change the room?`,
//     });
//     return;
//   } else {
//     bookingsStore.addBookingDetail(bookingDetail);
//     router.push("/activity");
//   }
// }
function checkRoomCapacity(bookingDetail:BookingDetail) {
  // Assuming props should be accessible or passed into this function. 
  // If not, adjust accordingly based on actual data structure.
  const maxAdult = bookingDetail.room.roomType.maxAdult;
  const maxChildren = bookingDetail.room.roomType.maxChildren;

  // Calculate the total number of guests (adults + children) for the current booking
  let totalGuest = bookingsStore.currentBooking.adult + bookingsStore.currentBooking.child;

  if (bookingsStore.currentBooking.bookingDetail.length > 0) {
    // If there are existing booking details, calculate the total booked capacity
    let totalBookedCapacity = 0;
    bookingsStore.currentBooking.bookingDetail.forEach((booking) => {
      totalBookedCapacity += booking.room.roomType.maxAdult + booking.room.roomType.maxChildren;
    });

    // Check if adding the current booking detail exceeds total booked capacity
    if (totalGuest > totalBookedCapacity + maxAdult + maxChildren) {
      // If total guests exceed the capacity including the new booking detail
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `The selected rooms cannot accommodate ${totalGuest} guests. Please select more rooms or change the room.`,
      });
      return;
    } else {
      bookingsStore.addBookingDetail(bookingDetail);
      router.push("/activity");
    }
  } else {
    // For the first booking detail, check if it can accommodate the guests
    if (bookingsStore.currentBooking.adult > maxAdult || bookingsStore.currentBooking.child > maxChildren) {
      // If either adults or children exceed the room's capacity
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `The selected room cannot accommodate ${bookingsStore.currentBooking.adult} adults and ${bookingsStore.currentBooking.child} children. Please select more rooms or change the room.`,
      });
      return;
    } else {
      bookingsStore.addBookingDetail(bookingDetail);
      router.push("/activity");
    }
  }
}


  

</script>

<template>
  <div class="mb-5">
    <div class="flex rounded-lg shadow-lg overflow-hidden" style="height: 30vh">
      <!-- Room Image -->
      <div
        class="w-1/2 py-3 pl-5 pr-10 flex"
        style="justify-content: start; background-color: white"
      >
        <img
          :src="props.image"
          alt="Room Image"
          class="rounded-lg pic-showroom"
        />
      </div>

      <!-- Room Details -->
      <div class="w-1/2 pt-3 bg-white flex flex-col justify-between">
        <div>
          <h2 class="text-base font-bold">{{ props.typename }}</h2>
          <p class="text-sm text-gray-600">Sleep {{ props.room.roomType.sleep }}</p>
          <p class="text-base text-gray-600" >Adult {{ props.room.roomType.maxAdult }} | Children {{ props.room.roomType.maxChildren }}</p>
          <p class="text-sm text-gray-600">{{ props.detail }}</p>
          <!-- <a :href="roomDetail" class="text-xs font-semibold">Room Detail</a> -->
          <button @click="clickRoomDetail()">
            <a class="text-xs font-semibold hover:text-gray-600">Room Detail</a>
          </button>
          <div class="px-5 py-2 font-bold text-base price-room">
            THB {{ props.price }}
          </div>
        </div>
        <div class="text-right px-5">
          <button class="btn-booknow mt-2 mb-3" @click.prevent="addBooking()">
            Book now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.price-room {
  text-align: end;
}

.pic-showroom {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.btn-booknow {
  background-color: #906843;
  color: white;
  padding: 10px 20px;
  box-shadow: 0px 4px 6px #805d3f;
  font-weight: medium;
  text-decoration: none;
  display: inline-block;
  width: 128px;
  border-radius: 9999px;
  text-align: center;
}

.btn-booknow:hover {
  background-color: #9e754f;
}

/* Add any additional styling you want here */
</style>
