import http from "./axios";

const getAllActivities = () => {
    return http.get('/activity')

}

export default {getAllActivities}
