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

</script>

<template>
    <div class="body">
        <div class="absolute top-0 right-0 p-10"></div>

        <ReadMore :type="roomStore.currnentRoomType?.typeName.toUpperCase()"
            :description="roomStore.currnentRoomType.descriptions"
            :img="'https://i.pinimg.com/564x/7d/2c/19/7d2c1963c8c1883f7bcd70d6775472b5.jpg'"
            :tv="roomStore.currnentRoomType.chromeCast" :electric="roomStore.currnentRoomType.electricSheer" :bed="roomStore.currnentRoomType.bedSize"
            :wifi="roomStore.currnentRoomType.wifi" :water="roomStore.currnentRoomType.water"
            :bath="roomStore.currnentRoomType.bath"  :desk="roomStore.currnentRoomType.desk">
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

</style>