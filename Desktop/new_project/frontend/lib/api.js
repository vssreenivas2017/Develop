// Global API configuration
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
export const SOCKET_URL = process.env.NEXT_PUBLIC_SOCKET_URL || 'http://localhost:5000';

// Axios instance (TODO: implement)
// import axios from 'axios';
// const apiClient = axios.create({
//   baseURL: API_URL,
// });

export default { API_URL, SOCKET_URL };
