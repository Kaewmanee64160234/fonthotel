import { defineStore } from "pinia";
import { ref } from "vue";
import roomService from "@/service/room";
import { Room, RoomType } from "@/model/room.model";

export const useRoomStore = defineStore("roomStore", () => {
    const currentRooms = ref<Room[]>([]); // Define rooms as a ref
    const currentType = ref<string>(''); // Define currentType as a ref
    const currentStatus = ref<string>('ready'); // Define currentStatus as a ref
    const roomDatail = ref<Room>();
    const roomDetailCard = ref(false);
    const curentRoom = ref<Room>({
       id: '',
        image: '',
        status: '',
        roomType: {
            id: 0,
            roomType: '',
            descriptions: '',
            price: 0,
   
            chromeCast: false,
            eletricSheer: false,
            wifi: false,
            bath: false,
            water: false,
            desk: false,
            typeName: '',
            bedSize: 1,
        }
    });

    function setRoom(room: Room) {
        roomDatail.value = room;
    }
    function toggleRoomDetail() {
        roomDetailCard.value = !roomDetailCard.value;
    }
    const getRooms = async (status: string) => {
        try {
            const response = await roomService.getRooms(status);
            if (response.data) {
                currentRooms.value = response.data
            }
            else {
                currentRooms.value = []
            }

        } catch (error) {
            console.log(error);
        }
    };

    const getRoomsByType = async (status: string, type: string) => {
        try {
            const response = await roomService.getRoomsByType(status, type);
            // console.log(response)
            const rooms = <Room[]>([]);
            if (response.data) {
               
                for (const room of response.data) {
                    const roomType: RoomType = {
                        id: room.roomtype.room_type_id,
                        roomType: room.roomtype.room_type,
                        descriptions: room.roomtype.room_type_des,
                        price: room.roomtype.room_type_price,
                        bedSize: room.roomtype.room_type_bed_size,
                        chromeCast: room.roomtype.room_type_chromecast,
                        eletricSheer: room.roomtype.room_type_electric_sheer,
                        wifi: room.roomtype.room_type_wifi,
                        bath: room.roomtype.room_type_bath,
                        water: room.roomtype.room_type_water,
                        desk: room.roomtype.room_type_desk,
                        typeName: room.roomtype.room_type_name,
                    }
                    const room_: Room = {
                        id: room.room_id,
                        image: room.room_img_path,
                        status: room.room_status,
                        roomType: roomType,
                    }
                    rooms.push(room_);
                }
                currentRooms.value = rooms;
                console.log('current room',currentRooms.value);
            } else {
                currentRooms.value = [];
            }
        } catch (error) {
            console.log(error);
        }
    };
    //set current room
    const setCurrentRoom = (room: Room) => {
        curentRoom.value = room;
    }

    return { currentRooms, getRooms, getRoomsByType,currentType,currentStatus, setRoom, roomDatail, toggleRoomDetail, roomDetailCard,curentRoom, setCurrentRoom };
});
