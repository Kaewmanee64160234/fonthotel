import axios from 'axios';

const http = axios.create({
  baseURL: 'http://ec2-3-238-191-52.compute-1.amazonaws.com:3000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;