import { defineStore } from "pinia";
import { ref } from "vue";
import roomService from "@/service/room";
import { Room } from "@/model/room.model";
import { RoomType } from "@/model/roomtype.model";


export const useRoomStore = defineStore("roomStore", () => {
    const currentRooms = ref<Room[]>([]); // Define rooms as a ref
    const currnentRoomType = ref<RoomType>({
        id: 0,
        roomType: '',
        descriptions: '',
        price: 0,
        bedSize: 0,
        chromeCast: false,
        electricSheer: false,
        wifi: false,
        bath: false,
        water: false,
        desk: false,
        typeName: '',
        maxAdult: 0,
        maxChildren: 0,
        sleep: 0,

        
        
        
    }); // Define roomType as a ref
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
            electricSheer: false,
            wifi: false,
            bath: false,
            water: false,
            desk: false,
            typeName: '',
            bedSize: 1,
            maxAdult: 1,
            maxChildren: 1,
            sleep: 1,
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
                        electricSheer: room.roomtype.room_type_electric_sheer,
                        wifi: room.roomtype.room_type_wifi,
                        bath: room.roomtype.room_type_bath,
                        water: room.roomtype.room_type_water,
                        desk: room.roomtype.room_type_desk,
                        typeName: room.roomtype.room_type_name,
                        maxAdult: room.roomtype.max_adult,
                        maxChildren: room.roomtype.max_children,
                        sleep: room.roomtype.sleep,
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
    //getTypeRoomByTypeName
    const getTypeRoomByTypeName = async (typeName: string) => {
        try {
            const response = await roomService.getTypeRoomByTypeName(typeName);
            if (response.data) {
                currnentRoomType.value = {
                    id: response.data.room_type_id,
                    roomType: response.data.room_type,
                    descriptions: response.data.room_type_des,
                    price: response.data.room_type_price,
                    bedSize: response.data.room_type_bed_size,
                    chromeCast: response.data.room_type_chromecast,
                    electricSheer: response.data.room_type_electric_sheer,
                    wifi: response.data.room_type_wifi,
                    bath: response.data.room_type_bath,
                    water: response.data.room_type_water,
                    desk: response.data.room_type_desk,
                    typeName: response.data.room_type_name,
                    maxAdult: response.data.max_adult,
                    maxChildren: response.data.max_children,
                    sleep: response.data.sleep,
                  
                
                }
                console.log('current room type',currnentRoomType.value);
                console.log('response',response.data);
            }
            else {
                currnentRoomType.value = {
                    id: 0,
                    roomType: '',
                    descriptions: '',
                    price: 0,
                    bedSize: 0,
                    chromeCast: false,
                    electricSheer: false,
                    wifi: false,
                    bath: false,
                    water: false,
                    desk: false,
                    typeName: '',
                    maxAdult: 0,
                    maxChildren: 0,
                    sleep: 0,
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    return { currentRooms, getRooms, getRoomsByType,currentType,currentStatus, setRoom, roomDatail, toggleRoomDetail, roomDetailCard,curentRoom, setCurrentRoom ,getTypeRoomByTypeName,currnentRoomType};
});
