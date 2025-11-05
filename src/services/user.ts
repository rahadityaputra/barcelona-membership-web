import api from './api';

export const getProfileService = async () => {
  try {
    const response = await api.get('/api/user/profile');
    return { success: true, data: response.data.data };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to fetch profile',
    };
  }
};

export const updateProfileService = async (formData: FormData) => {
  try {
    const response = await api.put('/api/user/profile', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return { success: true, data: response.data.data };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to update profile',
    };
  }
};
