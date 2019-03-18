import axios from 'react-native-axios';

export const http = axios.create(({
    baseURL: 'http://10.164.77.124:5000/api',
    headers: {'Content-Type': 'application/json'}
}));


