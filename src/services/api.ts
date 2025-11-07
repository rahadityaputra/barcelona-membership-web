// src/services/api.ts

import axios from 'axios';

const api = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const apiForRefresh = axios.create({
  baseURL: 'https://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include token in requests
api.interceptors.request.use(
  (config) => {
    const accessToken= localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle common errors
api.interceptors.response.use(
  (response) => response,
  async (error)  => {
    try {
      if (error.response?.status === 401 && error.response?.data?.message === 'Invalid or expired token') {
        // localStorage.removeItem('token');
        // window.location.href = '/login';
        console.error('Unauthorized! Redirecting to login.');
       const response = await apiForRefresh.post('/api/auth/verify-refresh-token', {
          refreshToken: localStorage.getItem('refreshToken')
        })

        localStorage.setItem('accessToken', response.data.data.accessToken);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);

        return api.request(error.config);
      }
    } catch (error) {
      console.log('Error during token refresh:', error);
    }
    return Promise.reject(error);
  }
);

export default api;