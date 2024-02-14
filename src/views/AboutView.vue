<script setup lang="ts">
// Import the TyperoomCard component
import TyperoomCard from "@/components/TyperoomCard.vue";
import ReviewComponent from "@/components/ReviewComponent.vue";
import Flowbite from 'flowbite';
import { onMounted } from "vue";

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
// initialize components based on data attribute selectors



</script>

<template>
  <!-- This example requires Tailwind CSS and Flowbite. -->
  <!-- Make sure to include Flowbite library -->
  <div id="default-carousel" class="relative" data-carousel="static">
    <!-- Carousel wrapper -->
    <div
      class="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96"
    >
      <!-- Item 1 -->
      <div class="duration-700 ease-in-out" data-carousel-item>
        <div
          class="flex justify-center items-center h-full  "
        >
          <!-- Replace with your content -->
          <ReviewComponent
            :name="'wmanee0'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
          <ReviewComponent
            :name="'Kaeanee'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
          <ReviewComponent
            :name="'Kaeanee'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
        </div>
      </div>

      <div class="duration-700 ease-in-out" data-carousel-item>
        <div
          class="flex justify-center items-center h-full bg-gray-100 space-x-4"
        >
          <!-- Replace with your content -->
          <ReviewComponent
            :name="'KKKKKKKKe1'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
          <ReviewComponent
            :name="'KKKKKKKKe1'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
          <ReviewComponent
            :name="'KKKKKKKKe1'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
        </div>
      </div>

      <div class="duration-700 ease-in-out" data-carousel-item>
        <div
          class="flex justify-center items-center h-full bg-gray-100 space-x-4"
        >
          <!-- Replace with your content -->
          <ReviewComponent
            :name="';;;;;;;;;;;ee2'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
          <ReviewComponent
            :name="';;;;;;;;;;;ee2'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
          <ReviewComponent
            :name="';;;;;;;;;;;ee2'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
        </div>
      </div>

      <div class="duration-700 ease-in-out" data-carousel-item>
        <div
          class="flex justify-center items-center h-full bg-gray-100 space-x-4"
        >
          <!-- Replace with your content -->
          <ReviewComponent
            :name="'Kaeanee'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"
          />
        </div>
      </div>
      <!-- Add additional items here -->
    </div>
    <button
      type="button"
      class="absolute top-0 left-0 z-30 p-4 text-white transition bg-black bg-opacity-50 rounded-full shadow focus:outline-none focus:ring"
      data-carousel-prev
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
      <span class="sr-only">Previous</span>
    </button>
    <button
      type="button"
      class="absolute top-0 right-0 z-30 p-4 text-white transition bg-black bg-opacity-50 rounded-full shadow focus:outline-none focus:ring"
      data-carousel-next
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
      <span class="sr-only">Next</span>
    </button>
  </div>
</template>

<style scoped>
.body {
  background-image: url("../images/image.png");
  background-size: cover; /* Cover the entire screen */
  background-position: center; /* Center the background image */
  background-repeat: no-repeat; /* Do not repeat the image */
  width: 100vw;
  height: 100vh; /* Make sure the div covers the full height of the viewport */
  position: fixed; /* Optional: Fixes the background to the viewport */
  top: 0;
  left: 0;
}
.card-style {
  width: 90vw;
  height: 75vh;
  border-radius: 30px;
  background-color: rgba(229, 229, 229, 0.758);
  /* add filter blue */
  fill-opacity: unset;
}
.bigcard {
  display: flex;
  height: 100vh;
}
/* Ensure backdrop filter is enabled in your tailwind.config.js */
</style>
