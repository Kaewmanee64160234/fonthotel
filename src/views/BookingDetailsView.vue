<script setup lang="ts">
import BookingDetailComponent from "@/components/BookingDetailComponent.vue";

const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
</script>

<template>
    <div class="body">

        <div class="absolute top-0 right-0 p-10"></div>

        <BookingDetailComponent type="DELUXE ROOM"
            :img="'https://i.pinimg.com/564x/f9/cd/83/f9cd83db4e00175770998abeca0f3299.jpg'"
            :date="'Tue,Dec 26 ,2023 - Wed,Dec 27,2023'" :name="' Linlada Pasukjai '" :typeroom="'  Deluxe  '"
            :guest="'   2 '" :total="' 7009.00 '" :checkin="' 1:00'" :checkout="'  7:00'" :payment="'Cardit Card'"
            :status="'Success'">



        </BookingDetailComponent>

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


