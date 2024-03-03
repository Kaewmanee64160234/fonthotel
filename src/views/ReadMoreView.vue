<script setup lang="ts">
import ReadMore from "@/components/ReadMore.vue";
import { useRoomStore } from "@/store/room.store";
import { onMounted } from "vue";
// get Params from URL
import { useRoute } from "vue-router";
const route = useRoute();
const type = route.params.type;
const roomStore = useRoomStore();

onMounted(async () => {
   await roomStore.getTypeRoomByTypeName(type.toString());
});
const clickback = () => {
    window.location.href = '/'
}
const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
</script>

<template>
    <div class="body">
        <div class="absolute top-0 right-0 p-10"></div>
        
        <ReadMore :type="roomStore.currnentRoomType?.typeName.toUpperCase()" :description="text"
            :img="'https://i.pinimg.com/564x/18/67/30/186730dda082cd67f174c0802088d400.jpg'" :price="roomStore.currnentRoomType?.price" :rating="4.5"
            :topic="'Luxury Hotel With Golf Course in Zhejiang, Anji, China | JW Marriott'" 
            :electric="roomStore.currnentRoomType.eletricSheer" :wifi="roomStore.currnentRoomType.wifi" :water="roomStore.currnentRoomType.water" :bath="roomStore.currnentRoomType.bath" :path="'/selectguestdate'" :desk="true">
        </ReadMore>
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
