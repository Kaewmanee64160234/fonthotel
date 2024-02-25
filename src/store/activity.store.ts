import { defineStore } from "pinia";
import { ref } from "vue";
import activityService from "@/service/activity"; 
import { Activity } from "@/model/activity.model";

export const useActivityStore = defineStore("activityStore", () => {
    const activities = ref<Activity[]>([]);

    const getAllActivities = async () => {
        try {
            const response = await activityService.getAllActivities(); 
            console.log(response.data);
            const acts = <Activity[]>([]);
            if (response.data) {
              
                for( const activity of response.data){
                    const act:Activity = {
                        id: activity.act_id,
                        image: activity.act_img_path,
                        name: activity.act_name,
                        price: activity.act_price,
                        description: activity.act_des
                    }
                    acts.push(act);
                }
                activities.value = acts;
                // console.log(activities.value);
            } else {
                activities.value = [];
            }
        } catch (error) {
            console.log(error); 
        }
    };


    return {getAllActivities,activities};
    
});
