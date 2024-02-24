import { defineStore } from "pinia";
import { ref } from "vue";
import roomService from "@/service/room";
import { Room } from "@/model/room.model";

export const useRoomStore = defineStore("roomStore", () => {
    const rooms = ref<Room[]>([]); // Define rooms as a ref

    const getRooms = async (status: string) => {
       try {
        const response = await roomService.getRooms(status);
        if (response.data) {
            rooms.value = response.data
        }
        else {
            rooms.value =[]
        }
        
       } catch (error) {
        console.log(error);
       }
    };

    const getRoomsByType = async (type: string, status: string) => {
        try {
            const response = await roomService.getRoomsByType(type,status);
            console.log(response.data)

        if (response.data) {
            rooms.value = response.data
        } else {
            rooms.value =[]
        }
        } catch (error) {
            console.log(error);
        }
    };

    return { rooms,getRooms, getRoomsByType };
});
