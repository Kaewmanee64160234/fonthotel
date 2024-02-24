import { defineStore } from "pinia";
import { ref } from "vue";
import activityService from "@/service/activity"; 

export const useActivityStore = defineStore("activityStore", () => {
    const activities = ref([]);

    const getAllActivities = async () => {
        try {
            const response = await activityService.getAllActivities(); 
            if (response.data) {
                activities.value = response.data;
            } else {
                activities.value = [];
            }
        } catch (error) {
            console.log(error); 
        }
    };

    return {getAllActivities};
});
