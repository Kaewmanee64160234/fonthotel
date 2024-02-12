<script setup lang="ts"></script>
<template lang="">
  <div>
    <div class="flex h-screen p-4">
    <div class="w-1/4 h-1/2 bg-white rounded-xl shadow-md overflow-hidden">
      <div class="p-8 flex flex-col justify-between h-full">
        <div>
          <div class="flex flex-row items-center">
            <!-- Column 1: Profile Image -->
            <div class="flex-shrink-0">
              <img class="w-10 h-10 rounded-full mr-4" src="https://images.unsplash.com/photo-1682687982185-531d09ec56fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Profile image">
            </div>
            <!-- Column 2: Name and Type of Room -->
            <div class="flex flex-col justify-center">
              <div class="text-lg leading-tight font-medium text-black">Manaree Memak</div>
              <div class="uppercase tracking-wide text-sm text-gray-500 font-semibold">Luxury Room</div>
            </div>
          </div>
          <!-- Rating -->
          <div class="flex flex-col mt-4">
            <div class="text-sm font-bold">Cleanliness <span class="text-yellow-500">★★★★★</span></div>
            <div class="text-sm font-bold">Service <span class="text-yellow-500">★★★★★</span></div>
            <div class="text-sm font-bold">Convenience <span class="text-yellow-500">★★★★★</span></div>
          </div>
        </div>
        <p class="mt-2 text-gray-500 line-clamp-5">Serene Haven Hotel offers a top-notch experience from start to finish.Serene Haven Hotel offers a top-notch experience from start to finish. </p>
        <div class="flex justify-end items-center mt-4">
          <div class="text-sm text-gray-600">12/01/2024</div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style lang=""></style>
