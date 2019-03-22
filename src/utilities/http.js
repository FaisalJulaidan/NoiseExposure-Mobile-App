import axios from 'react-native-axios';

export const http = axios.create(({
    baseURL: 'http://10.247.39.123:5000/api',
    headers: {'Content-Type': 'application/json'}
}));


