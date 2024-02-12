<script setup lang="ts">
import TyperoomCard from '@/components/TyperoomCard.vue';
</script>
<template>
      <div class="flex flex flex-row justify-center">
        <TyperoomCard :imgroom="'https://i.pinimg.com/564x/99/d0/38/99d038cc0835e3c4017a4b8b4e01b72c.jpg'" :readmore="'#'" :roomtype="'Standard Room'" :btnbooking="'#'"></TyperoomCard>
        <TyperoomCard :imgroom="'https://i.pinimg.com/564x/99/d0/38/99d038cc0835e3c4017a4b8b4e01b72c.jpg'" :readmore="'#'" :roomtype="'DELUXE ROOM'" :btnbooking="'#'"></TyperoomCard>
        <TyperoomCard :imgroom="'https://i.pinimg.com/564x/99/d0/38/99d038cc0835e3c4017a4b8b4e01b72c.jpg'" :readmore="'#'" :roomtype="'LUXURY ROOM'" :btnbooking="'#'"></TyperoomCard>

      </div>


</template>