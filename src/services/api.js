import axios from 'axios';

//RODAR COM IPV4 - json-server –watch -d 180 –host SEU-IP db.json

const api = axios.create({
    baseURL: 'http://10.0.0.103:3000/'
});

export default api;