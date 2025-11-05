import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginService, registerService, logoutService, loginWithCardService } from '../services/auth';
import api from '../services/api';

interface RegisterData {
  email: string;
  fullname: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  address: string;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const verifyToken = useCallback( async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      try {
        const response = await api.post('/api/user/verify-token');
        console.log(response.data.status);
        
        return response.data.status;
      } catch (error) {
        console.error('Token verification error:', error);
        return false;
      }
    }
    return false;
  }, []);

  const login = async (email: string, password: string) => {
    try {
      const result = await loginService({ email, password });
      if (result.success) {
        setIsAuthenticated(true);
        setUser(result.data.user);
        navigate('/');
        return { success: true };
      }
      return { success: false, message: result.message };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  const loginWithCard = async (membershipCard: File) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('membershipCard', membershipCard);

      // const result = await api.post('api/auth/login-with-card', formData, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // });
      const result = await loginWithCardService(formData);
      if (result.success) {
        setIsAuthenticated(true);
        setUser(result.data.user);
        // navigate('/');
        return { success: true };
      }
      return { success: false, message: result.message };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: 'An unexpected error occurred' };
    } finally {
      setLoading(false);
    }
  }

  const register = async (data: RegisterData) => {
    try {
      const result = await registerService(data);
      if (result.success) {
        setIsAuthenticated(true);
        setUser(result.data.user);
        navigate('/dashboard');
        return { success: true };
      }
      return { success: false, message: result.message };
    } catch (err) {
      console.error('Registration error:', err);
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  const logout = () => {
    logoutService();
    setIsAuthenticated(false);
    setUser(null);
    navigate('/');
  };

  return {
    isAuthenticated,
    verifyToken,
    user,
    loading,
    login,
    loginWithCard,
    register,
    logout,
  };
};

export default useAuth;