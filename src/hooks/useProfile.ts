import { useCallback, useState } from "react";
import { getProfileService, updateProfileService } from "../services/user";
import api from "../services/api";

const useProfile = () => {
    // Profile related logic here
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
        avatar: string;
        lastUpdated: string;
    }

    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProfile = useCallback(async () => {
        try {
            setLoading(true);
            const result = await getProfileService();
            console.log(result);
            
            if (result.success) {
                setProfile(result.data);
            } else {
                setError(result.message);
            }
        } catch (error) {
            setLoading(false);
            setError('Failed to fetch profile');
            console.error('Failed to fetch profile:', error);
        } finally{
            setLoading(false);
        }
    }, []);

    const updateProfile = async (formData: FormData) => {
        try {
            setLoading(true);
            const result = await updateProfileService(formData);
            if (result.success) {
                setProfile(result.data);
            } else {
                setError(result.message);
            }
        } catch (error) {
            setError('Failed to update profile');
            console.error('Failed to update profile:', error);
        } finally {
            setLoading(false);
        }
    }

    const downloadIdentityCard = async () => {
        try {
            const result = await api.get("/api/user/identity-card/download", {
                responseType: 'blob'
            });
            // Buat URL object dari blob
            const url = window.URL.createObjectURL(new Blob([result.data]));
            
            // Buat link untuk trigger download
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', 'identity-card.png'); // nama file
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (error) {
            setError('Failed to download idenity card');
            console.error('Failed to downlaod identity card:', error);
        } finally {
            setLoading(false);
        }
    }
    return {
        profile,
        loading,
        error,
        fetchProfile,
        updateProfile,
        downloadIdentityCard
    };
}

export default useProfile;