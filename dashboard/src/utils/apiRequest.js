import axios from "axios";

const apiRequest = axios.create({
    baseURL: 'http://localhost:8000/api/v1',
    withCredentials: true,
    headers: {'content-type': "application/json"}
})

export default apiRequest