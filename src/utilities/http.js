import axios from 'react-native-axios';
// export const name = axios.defaults.headers.common['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NTM3NzU4NTksIm5iZiI6MTU1Mzc3NTg1OSwianRpIjoiOWM1ZDVmMzYtNjlmYS00ZjE5LThkNWQtYjQ4MjUwMTQxYmVhIiwiZXhwIjoxNTUzNzc2NzU5LCJpZGVudGl0eSI6eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20ifX0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.qEp5RQJ2gxgrNE_gLZ9nA92TSDE5gMVtK-T6m7d5fuI';

export const http = axios.create(({
    baseURL: 'http://10.163.79.180:5000/api',
    headers: {
        'Content-Type': 'application/json'}}
));
