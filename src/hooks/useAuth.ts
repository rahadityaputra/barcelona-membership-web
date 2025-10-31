import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface RegisterData {
  fullname: string;
  email: string;
  password: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  identityCard: File | null;
}

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  interface RegisterResponse {
    success: boolean;
    message?: string;
  }

  const register = async (data: RegisterData) :Promise<RegisterResponse> => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Registering user:', data);
        setIsAuthenticated(true);
        setUser({ email: data.email, name: 'New Member' });
        navigate('/dashboard');
        resolve({ success: true });
      }, 1000);
    });
  };

  const login = async (email: string, password: string) => {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@example.com' && password === 'password') {
          setIsAuthenticated(true);
          setUser({ email, name: 'Test User' });
          navigate('/dashboard');
          resolve({ success: true });
        } else {
          resolve({ success: false, message: 'Invalid credentials' });
        }
      }, 1000);
    });
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    navigate('/');
  };

  return { isAuthenticated, user, register, login, logout };
};

export default useAuth;