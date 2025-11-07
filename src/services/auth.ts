// src/services/auth.ts

import api from './api';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  fullname: string
}

export const loginService = async (credentials: LoginCredentials) => {
  try {
    const response = await api.post('/api/auth/login', credentials);
    if (response.data.data.accessToken && response.data.data.user && response.data.data.refreshToken) {
      localStorage.setItem('accessToken', response.data.data.accessToken);
      localStorage.setItem('refreshToken', response.data.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }
    return { success: true, data: response.data.data};
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Login failed',
    };
  }
};

export const loginWithCardService = async (formdata: FormData) => {
  try {
    const response = await api.post('/api/auth/login-with-card', formdata, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    console.log(response);
    console.log(response.data.data.accessToken);
    console.log(response.data.data.user);
    console.log(response.data.data.refreshToken); 
    
    if (response.data.data.accessToken && response.data.data.user && response.data.data.refreshToken) {
      console.log("sudah di save");
      
      localStorage.setItem('accessToken', response.data.data.accessToken);
      localStorage.setItem('refreshToken', response.data.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }
    return { success: true, data: response.data.data};
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Login failed',
    };
  }
};

export const registerService = async (data: RegisterData) => {
  try {
    // Create FormData to handle file upload
    const formData = new FormData();
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('dateOfBirth', data.dateOfBirth);
    formData.append('gender', data.gender);
    formData.append('address', data.address);
    formData.append('fullname', data.fullname);

    const response = await api.post('/api/auth/register', {
      email: data.email,
      password: data.password,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      address: data.address,
      fullname: data.fullname,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.data.data.accessToken) {
      localStorage.setItem('accessToken', response.data.data.accessToken);
      localStorage.setItem('refreshToken', response.data.data.refreshToken);
      localStorage.setItem('user', JSON.stringify(response.data.data.user));
    }

    return { success: true, data: response.data };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Registration failed',
    };
  }
};

export const logoutService = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('user');
};