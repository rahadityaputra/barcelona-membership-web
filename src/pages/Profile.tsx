import React, { useEffect, useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import useProfile from '../hooks/useProfile';
import { useNavigate } from 'react-router-dom';
import MembershipCardModal from '../components/profile/MembershipCardModal';

const Profile: React.FC = () => {
    const { fetchProfile, profile, error, loading } = useProfile();
    const navigate = useNavigate();
    const [showCard, setShowCard] = useState(false);


    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    useEffect(() => {
        if (error) {
            console.error('Error fetching profile:', error);
        }
    }, [error]);

    useEffect(() => {
        console.log('Profile data:', profile);
    }, [profile]);

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex flex-col">
                <Header />
                <main className="container mx-auto p-4 flex-grow">
                    <p>Loading profile...</p>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center text-barcelonaBlue mb-6">Profile</h1>
                    <div className="flex flex-col items-center mb-6">
                        <img
                            src={profile?.profileImageUrl || "https://via.placeholder.com/150"}
                            alt="Profile"
                            className="w-24 h-24 rounded-full border-4 border-barcelonaGold"
                        />
                        <div className="text-center mt-4">
                            <p className="text-lg font-semibold text-gray-700">{profile?.fullname}</p>
                            <p className="text-lg font-semibold text-gray-700">{profile?.address}</p>
                            <p className="text-lg font-semibold text-gray-700">{profile?.gender}</p>
                            <p className="text-lg font-semibold text-gray-700">{profile?.dateOfBirth}</p>
                            <p className="text-sm text-gray-500">{profile?.email}</p>
                        </div>
                    </div>

                    {/* Tombol Edit Profile */}
                    <button
                        onClick={() => navigate('/edit-profile')}
                        className="w-full py-2 px-4 bg-barcelonaRed text-white font-semibold rounded-md hover:bg-barcelonaDarkRed mb-4"
                    >
                        Edit Profile
                    </button>

                    {/* Kondisi Membership */}
                    {profile?.isMemberUser ? (
                        <button
                            onClick={() => setShowCard(true)}
                            className="w-full py-2 px-4 bg-barcelonaBlue text-white font-semibold rounded-md hover:bg-barcelonaDarkBlue"
                        >
                            Lihat Membership Card
                        </button>

                    ) : (
                        <button
                            onClick={() => navigate('/membership-registration')}
                            className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
                        >
                            Daftar Menjadi Member
                        </button>
                    )}

                    <MembershipCardModal
                        isOpen={showCard}
                        onClose={() => setShowCard(false)}
                        profile={{
                            fullname: profile?.fullname,
                            membershipId: profile?.membershipId,
                            membershipCardImageUrl: profile?.membershipCardImageUrl
                        }}
                    />


                </div>
            </main >
            <Footer />
        </div >
    );
};

export default Profile;
