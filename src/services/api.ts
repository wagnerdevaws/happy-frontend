import axios from 'axios';

const api = axios.create({
    baseURL: 'https://devawshappy.herokuapp.com'
})

export default api;