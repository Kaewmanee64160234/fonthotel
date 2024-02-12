<script setup lang="ts">
<<<<<<< HEAD
import TyperoomCard from '@/components/TyperoomCard.vue';
</script>
<template>
      <div class="flex flex flex-row justify-center">
        <TyperoomCard :imgroom="'https://i.pinimg.com/564x/99/d0/38/99d038cc0835e3c4017a4b8b4e01b72c.jpg'" :readmore="'#'" :roomtype="'Standard Room'" :btnbooking="'#'"></TyperoomCard>
        <TyperoomCard :imgroom="'https://i.pinimg.com/564x/99/d0/38/99d038cc0835e3c4017a4b8b4e01b72c.jpg'" :readmore="'#'" :roomtype="'DELUXE ROOM'" :btnbooking="'#'"></TyperoomCard>
        <TyperoomCard :imgroom="'https://i.pinimg.com/564x/99/d0/38/99d038cc0835e3c4017a4b8b4e01b72c.jpg'" :readmore="'#'" :roomtype="'LUXURY ROOM'" :btnbooking="'#'"></TyperoomCard>

      </div>
=======
import ReviewComponent from '@/components/ReviewComponent.vue';
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
    <div>
        <ReviewComponent
           
           
            :name="'Kaewmanee'"
            :imageUrl="'https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'"
            :roomType="'luxury room'"
            :date="'12/12/2021'"
            :description="'The room was very clean and the service was excellent. I would definitely stay here again.'"
            :rating="rating"/>
    </div>
>>>>>>> 215ffc004bd771751b58b459cf806da1b672fcce


</template>