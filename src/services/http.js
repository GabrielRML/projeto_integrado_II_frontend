import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:9000/api',
    headers: {
        'Content-type': 'application/json',
    },
});

export default axiosInstance;