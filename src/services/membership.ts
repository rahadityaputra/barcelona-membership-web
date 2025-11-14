import api from './api';

export const registerMembership = async (identityCard: File) => {
  try {
    const formData = new FormData();
    formData.append('identityCard', identityCard);

    const response = await api.post('api/user/membership/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return { success: true, data: response.data };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to register membership',
    };
  }
};

export const getMembershipStatus = async () => {
  try {
    const response = await api.get('/membership/status/');
    return { success: true, data: response.data };
  } catch (error: any) {
    return {
      success: false,
      message: error.response?.data?.message || 'Failed to get membership status',
    };
  }
};