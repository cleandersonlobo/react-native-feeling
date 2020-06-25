import axios from 'axios';

const baseURL = __DEV__
  ? 'http://localhost:3001/'
  : 'https://my-json-server.typicode.com/cleandersonlobo/react-native-feeling/';
const axiosInstance = axios.create({
  baseURL,
});

export const ENDPOINTS = {
  emoji: 'emoji',
};

export default axiosInstance;
