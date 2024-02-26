import { defineStore } from "pinia";
import { ref } from "vue";
import roomService from "@/service/room";
import { Room, RoomType } from "@/model/room.model";

export const useRoomStore = defineStore("roomStore", () => {
    const rooms = ref<Room[]>([]); // Define rooms as a ref

    const getRooms = async (status: string) => {
        try {
            const response = await roomService.getRooms(status);
            if (response.data) {
                rooms.value = response.data
            }
            else {
                rooms.value = []
            }

        } catch (error) {
            console.log(error);
        }
    };

    const getRoomsByType = async (status: string, type: string) => {
        try {
            const response = await roomService.getRoomsByType(status, type);
            console.log(response.data)
            const rooms = <Room[]>([]);
            if (response.data == 'ready') {
                const roomType: RoomType = {
                    id: response.data.roomType.room_type_id,
                    roomType: response.data.roomType.room_type,
                    descriptions: response.data.roomType.room_type_des,
                    price: response.data.roomType.room_type_price,
                    bedSize: response.data.roomType.room_type_bed_size,
                    chromeCast: response.data.roomType.room_type_chromecast,
                    eletricSheer: response.data.roomType.room_type_electric_sheer,
                    wifi: response.data.roomType.room_type_wifi,
                    bath: response.data.roomType.room_type_bath,
                    water: response.data.roomType.room_type_water,
                    desk: response.data.roomType.room_type_desk,
                    typeName: response.data.roomType.room_type_name,
                }
                for (const room of response.data) {
                    const room_: Room = {
                        id: response.data.room.room_id,
                        image: response.data.room.room_img_path,
                        status: response.data.room.room_status,
                        roomType: response.data.roomType,
                    }
                    rooms.push(room_);
                }
                // rooms.value = rooms;
            } else {
                // rooms.value = [];
            }
        } catch (error) {
            console.log(error);
        }
    };

    return { rooms, getRooms, getRoomsByType };
});
