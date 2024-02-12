<script setup lang="ts">
//create props for the component
import { defineProps } from 'vue'

type Rating = {
  cleanliness: number;
  service: number;
  convenience: number;
};

const props = defineProps<{
  rating: Rating;
  name: string;
  imageUrl: string;
  roomType: string;
  date: string;
  description: string;
}>()
</script>
<template lang="">
  <div>
    <div class="flex h-screen p-4">
    <div class="w-1/2 h-1/2 bg-white rounded-xl shadow-md overflow-hidden">
      <div class="p-8 flex flex-col justify-between h-full">
        <div>
          <div class="flex flex-row items-center">
            <!-- Column 1: Profile Image -->
            <div class="flex-shrink-0">
              <img class="w-10 h-10 rounded-full mr-4" :src="props.imageUrl" alt="Profile image">
            </div>
            <!-- Column 2: Name and Type of Room -->
            <div class="flex flex-col justify-center">
              <div class="text-lg leading-tight font-medium text-black">{{props.name}}</div>
              <div class="uppercase tracking-wide text-sm text-gray-500 font-semibold">{{props.roomType}}</div>
            </div>
          </div>
          <!-- Rating -->
          <div class="flex flex-col mt-4">
            <div class="text-sm font-bold">Cleanliness <span class="text-yellow-500">{{ '★'.repeat(rating.cleanliness) }}</span></div>
            <div class="text-sm font-bold">Service <span class="text-yellow-500">{{ '★'.repeat(rating.service) }}</span></div>
            <div class="text-sm font-bold">Convenience <span class="text-yellow-500">{{ '★'.repeat(rating.convenience) }}</span></div>
          </div>
        </div>
        <p class="mt-2 text-gray-500 line-clamp-5">{{ description }}</p>
        <div class="flex justify-end items-center mt-4">
          <div class="text-sm text-gray-600">{{date}}</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang=""></style>
