<script setup lang="ts">
// Import the TyperoomCard component
import ReviewComponent from '@/components/ReviewComponent.vue';
import TyperoomCard from '@/components/TyperoomCard.vue';
import { useUserStore } from '@/store/user.store';
import { useRoomStore } from '@/store/room.store';
import router from '@/router';
const roomStore = useRoomStore();
const userStore = useUserStore();
type Rating = {
  cleanliness: number;
  service: number;
  convenience: number;
};
const rating: Rating = {
  cleanliness: 5,
  service: 5,
  convenience: 5,
};
</script>

<template>


  <div v-if="userStore.currentUser.role=='customer'" class="body overflow-y-auto dc-scroll">


    <!-- The container for the overlay and cards -->
    <div class="flex justify-center items-center bigcard mt-10">
      <!-- Added classes for centering -->

      <div class="relative  card-style">
        <div class="flex flex-col justify-center items-center"> <!-- Center alignment -->
          <div class="flex flex-wrap justify-between items-center pt-5 font-judson">
            <p class="text-2xl mb-4 text-center">TYPE ROOM</p>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center"> <!-- Center alignment -->

          <!-- The overlay card with a semi-transparent black background and blur effect -->
          <div class="flex flex-wrap justify-center items-center gap-5">
          <!-- <div class="flex flex-wrap justify-center items-center gap-5" v-for="item of  roomStore.rooms " :key="item.id"> -->
            <!-- <TyperoomCard :imgroom="item.image"
              readmore="/readmoreview" roomtype="STANDARD ROOM" btnbooking="/selectguestdate" /> -->
            <TyperoomCard imgroom="https://jw-webmagazine.com/wp-content/uploads/2022/10/5-Star-Hotels-halekulani.jpg"
              readmore="/readmoreview"  roomtype="STANDARD ROOM" btnbooking="/selectguestdate" />
            <TyperoomCard imgroom="https://i.pinimg.com/564x/87/86/a9/8786a90fbb85f030bf7c4c957a604188.jpg" readmore="/readmoreview"
              roomtype="DELUXE ROOM" btnbooking="/selectguestdate" />
            <TyperoomCard imgroom="https://i.pinimg.com/564x/a8/d4/10/a8d410ef0f34c531d50af45972665b34.jpg" readmore="/readmoreview"
              roomtype="LUXURY ROOM" btnbooking="/selectguestdate" />

          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="flex flex-col justify-start ml-10 mt-5"> <!-- Center alignment -->
        <div class="flex flex-wrap justify-start pt-5 font-judson">
          <p class="font-semibold text-white text-2xl mb-4 text-center">Review</p>
        </div>
      </div>

      <div class="overflow-x-auto ml-10" style="white-space: nowrap;">
        <div class="flex flex-row ml-10 mb-7">
        <ReviewComponent :name="'Kaewmanee'"
          :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          :roomType="'luxury room'" :date="'12/12/2021'"
          :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
          :rating="rating" />
          <ReviewComponent :name="'Kaewmanee'"
          :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          :roomType="'luxury room'" :date="'12/12/2021'"
          :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
          :rating="rating" />
          <ReviewComponent :name="'Kaewmanee'"
          :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          :roomType="'luxury room'" :date="'12/12/2021'"
          :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
          :rating="rating" />
          <ReviewComponent :name="'Kaewmanee'"
          :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          :roomType="'luxury room'" :date="'12/12/2021'"
          :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
          :rating="rating" />
          <ReviewComponent :name="'Kaewmanee'"
          :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          :roomType="'luxury room'" :date="'12/12/2021'"
          :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
          :rating="rating" />
          <ReviewComponent :name="'Kaewmanee'"
          :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
          :roomType="'luxury room'" :date="'12/12/2021'"
          :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
          :rating="rating" />
      </div>
      </div>

      </div>
    </div>




<!-- employee -->
<div v-else class="body  ">
  <div class="card-style2 relative">
    <div class=" mx-auto  my-8 flex justify-center">
    <div class="grid grid-cols-3 gap-4">
      <!-- First Row -->
      <router-link to="/browsesroom">
        <div class="overflow-hidden rounded-lg pointer ">
        <img src="https://i.pinimg.com/564x/9b/d6/2c/9bd62c61cf5e2a1c3a108a9cebbedb61.jpg" alt="Brows Room" class=" image-menu" />
        <p class="text-center mt-2">BROWS ROOM</p>
      </div>
      </router-link>
     
      <div class="overflow-hidden rounded-lg">
        <img src="https://i.pinimg.com/564x/90/0e/89/900e8936e256d1a5e6c1e170e80d2b40.jpg" alt="Check-In Management" class=" image-menu" />
        <p class="text-center mt-2">CHECK-IN MANAGEMENT</p>
      </div>
      <div class="overflow-hidden rounded-lg">
        <img src="https://i.pinimg.com/736x/33/be/e6/33bee69ae44b127476db0ee55c741f57.jpg" alt="Check-Out Management" class=" image-menu" />
        <p class="text-center mt-2">CHECK-OUT MANAGEMENT</p>
      </div>

      <!-- Second Row -->
      <div class="overflow-hidden rounded-lg">
        <img src="https://i.pinimg.com/564x/66/05/bd/6605bdf5bfc8f0c2b3a9436d2754cb8e.jpg" alt="Stock Management" class=" image-menu" />
        <p class="text-center mt-2">STOCK MANAGEMENT</p>
      </div>
      <div class="overflow-hidden rounded-lg">
        <img src="https://i.pinimg.com/564x/18/11/3f/18113f1ba1f4f8e18bc5d721b440c237.jpg" alt="Room Service Management" class=" image-menu" />
        <p class="text-center mt-2">ROOM SERVICE MANAGEMENT</p>
      </div>
      <div class="overflow-hidden rounded-lg">
        <img src="https://i.pinimg.com/564x/98/41/0c/98410c9514982cd16615d8ffa1b0f150.jpg" alt="Employee Management" class=" image-menu" />
        <p class="text-center mt-2">EMPLOYEE MANAGEMENT</p>
      </div>
    </div>
  </div>
  </div>
 
</div>
    

</template>

<style scoped>
.image-menu{
  width: 23vw;
  height: 27vh;
  object-fit: cover;
  border-radius: 20px;
}
.body {
  background-image: url('../images/image.png');
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

}

.card-style2{
 margin: 10px 70px;
 padding: 20px;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
  display: block;
}
.card-style {
  width: 90vw;
  height: 500px;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
  display: block;
}

.bigcard {
  display: flex;
  height: 65vh;
}
.font-judson {
  font-family: 'Judson';
}
.dc-scroll {
  max-height: 100vh;
  overflow: scroll;
}
.dc-scroll::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}
.dc-scroll::-webkit-scrollbar-thumb {
  background-color: #EBBD99;
  border-radius: 10px;
}
</style>
