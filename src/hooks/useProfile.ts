import { useCallback, useState } from "react";
import { getProfileService, updateProfileService } from "../services/user";

const useProfile = () => {
    // Profile related logic here
    interface UserProfile {
        email: string;
        fullname: string;
        dateOfBirth: string;
        address: string;
        gender: string;
        profileImageUrl?: string;
        membershipId?: string;
        membershipCardImageUrl?: string;
        isMemberUser?: boolean;
    }

    const [profile, setProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProfile = useCallback(async () => {
        try {
            setLoading(true);
            const result = await getProfileService();
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

    return {
        profile,
        loading,
        error,
        fetchProfile,
        updateProfile
    };
}

export default useProfile;