import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMembershipStatus } from '../services/membership';

const useMember = () => {
  const [isMember, setIsMember] = useState<boolean>(false);
  const navigate = useNavigate();


  const checkMember = async () => {
    try {
      const result = await getMembershipStatus();
      if (result.success) {
        setIsMember(true);
        navigate('/');
        return { success: true };
      }
      return { success: false, message: result.message };
    } catch (err) {
      console.error('Login error:', err);
      return { success: false, message: 'An unexpected error occurred' };
    }
  };

  
  return {
    isMember,
    checkMember,

  };
};

export default useMember;