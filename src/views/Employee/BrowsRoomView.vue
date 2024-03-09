<script setup lang="ts">
// Import the TyperoomCard component
import ReviewComponent from "@/components/ReviewComponent.vue";
import TyperoomCard from "@/components/TyperoomCard.vue";
import { useUserStore } from "@/store/user.store";
import { useRoomStore } from "@/store/room.store";

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
  <div class="body">
    <div class="body overflow-y-auto dc-scroll">
      <!-- The container for the overlay and cards -->
      <div class="flex justify-center items-center bigcard mt-10">
        <!-- Added classes for centering -->

        <div class="relative card-style">
          <div class="flex flex-col justify-center items-center">
            <!-- Center alignment -->
            <div
              class="flex flex-wrap justify-between items-center pt-5 font-judson"
            >
              <p class="text-2xl mb-4 text-center">TYPE ROOM</p>
            </div>
          </div>
          <div class="flex flex-col justify-center items-center">
            <!-- Center alignment -->

            <!-- The overlay card with a semi-transparent black background and blur effect -->
            <div class="flex flex-wrap justify-center items-center gap-5">
              <!-- <div class="flex flex-wrap justify-center items-center gap-5" v-for="item of  roomStore.rooms " :key="item.id"> -->
              <!-- <TyperoomCard :imgroom="item.image"
          readmore="/readmoreview" roomtype="STANDARD ROOM" btnbooking="/selectguestdate" /> -->
              <TyperoomCard
                imgroom="https://jw-webmagazine.com/wp-content/uploads/2022/10/5-Star-Hotels-halekulani.jpg"
                readmore="/readmoreview/standard"
                roomtype="STANDARD ROOM"
                btnbooking="/selectguestdate"
              />
              <TyperoomCard
                imgroom="https://i.pinimg.com/564x/87/86/a9/8786a90fbb85f030bf7c4c957a604188.jpg"
                readmore="/readmoreview/deluxe"
                roomtype="DELUXE ROOM"
                btnbooking="/selectguestdate"
              />
              <TyperoomCard
                imgroom="https://i.pinimg.com/564x/a8/d4/10/a8d410ef0f34c531d50af45972665b34.jpg"
                readmore="/readmoreview/luxury"
                roomtype="LUXURY ROOM"
                btnbooking="/selectguestdate"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div class="flex flex-col justify-start ml-10 mt-5">
          <!-- Center alignment -->
          <div class="flex flex-wrap justify-start pt-5 font-judson">
            <p class="font-semibold text-white text-2xl mb-4 text-center">
              Review
            </p>
          </div>
        </div>
        <div class="flex flex-row ml-10 mb-7">
          <ReviewComponent
            :name="'Kaewmanee'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
          <ReviewComponent
            :name="'Kaewmanee'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
          <ReviewComponent
            :name="'Kaewmanee'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
          <ReviewComponent
            :name="'Kaewmanee'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.body {
  background-image: url("../../images/image.png");
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

.card-style2 {
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
  font-family: "Judson";
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
  background-color: #ebbd99;
  border-radius: 10px;
}
</style>
