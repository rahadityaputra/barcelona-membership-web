import { useCallback, useState } from "react";
import { getProfileService, updateProfileService } from "../services/user";
import api from "../services/api";
import { useLoading } from "../contexts/LoadingContext";
import { useNavigate } from "react-router";

const useProfile = () => {
    interface UserProfile {
        email: string;
        fullname: string;
        birthDate: string;
        address: string;
        gender: string;
        profileImageUrl?: string;
        membershipId?: string;
        membershipCardImageUrl?: string;
        isMemberUser?: boolean;
        avatarUrl: string;
        lastUpdated: string;
    }

    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [error, setError] = useState<string | null>(null);
    const { loading, startLoading, stopLoading } = useLoading();
    const navigate = useNavigate();
    const fetchProfile = useCallback(async () => {
        try {
            startLoading();
            const result = await getProfileService();
            console.log(result);
            
            if (result.success) {
                setProfile(result.data);
            } else {
                setError(result.message);
            }
        } catch (error) {
            stopLoading();
            setError('Failed to fetch profile');
            console.error('Failed to fetch profile:', error);
        } finally{
            console.log("ppp");
            
            stopLoading();
        }
    }, []);

    const updateProfile = async (formData: FormData) => {
        try {
            startLoading();
            const result = await updateProfileService(formData);
            if (result.success) {
                navigate('/profile');
            } else {
                setError(result.message);
            }
        } catch (error) {
            setError('Failed to update profile');
            console.error('Failed to update profile:', error);
        } finally {
            stopLoading();
        }
    }
    const downloadMembershipCard = async () => {
        const res = await api.get("https://localhost:3000/api/user/membership-card/download", {
          responseType: 'blob',
    
        });
    
        const blob = res.data;
        const url = URL.createObjectURL(blob);
    
        const a = document.createElement("a");
        a.href = url;
        a.download = "membership-card.png";
        a.click();
      };

    const downloadIdentityCard = async () => {
        try {
            const result = await api.get("/api/user/identity-card/download", {
                responseType: 'blob'
            });
            const url = window.URL.createObjectURL(new Blob([result.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'identity-card.png');
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            setError('Failed to download idenity card');
            console.error('Failed to downlaod identity card:', error);
        } finally {
            stopLoading();
        }
    }
    return {
        profile,
        loading,
        error,
        fetchProfile,
        updateProfile,
        downloadIdentityCard,
        downloadMembershipCard
    };
}

export default useProfile;