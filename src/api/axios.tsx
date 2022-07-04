import axios from 'axios';

const AxiosInstance = axios.create({
    //baseURL:"http://192.168.100.19:8080/comercio-seguro", 
    baseURL:"http://10.0.2.2:8080/comercio-seguro", //no emulador
});

export default AxiosInstance;