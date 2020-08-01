import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.6.112:8100/api/v1',
});

api.defaults.timeout = 3000;

export default api;