import { defineStore } from "pinia";
import { ref } from "vue";

export const useRoomStore = defineStore("roomStore", () => {
    const rooms = ref([]); // Define rooms as a ref

    const getRooms = () => {
        // Return the value of the rooms ref
        return rooms.value;
    };

    const getRoomsByType = (id:number) => {
        // Filter rooms by type and return the filtered array
        return rooms.value;
    };

    return { getRooms, getRoomsByType };
});
