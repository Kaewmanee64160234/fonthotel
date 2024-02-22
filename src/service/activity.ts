import http from "./axios";

const getAllActivities = () => {
    return http.get('/activities')
}

export default {getAllActivities}
