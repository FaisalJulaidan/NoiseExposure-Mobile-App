import axios from 'react-native-axios';

export const http = axios.create(({
    baseURL: 'http://192.168.0.87:5000/api',
    headers: {'Content-Type': 'application/json'}
}));


