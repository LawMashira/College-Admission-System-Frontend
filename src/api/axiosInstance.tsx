// src/api/axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080/', //  Spring Boot API URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;
