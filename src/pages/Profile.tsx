import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import useProfile from '../hooks/useProfile';
import avatarPlaceholder from '../assets/profile.webp';
import MembershipCardModal from '../components/profile/MembershipCardModal';
import AvatarEditModal from '../components/profile/AvatarEditModal';

const Profile: React.FC = () => {
    const { profile, fetchProfile, updateProfile, downloadIdentityCard } = useProfile();
    const [editing, setEditing] = useState(false);
    const [showMembershipModal, setShowMembershipModal] = useState(false);
    const [showAvatarModal, setShowAvatarModal] = useState(false);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);
    const [avatarPreview, setAvatarPreview] = useState<string>(avatarPlaceholder);
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        address: '',
        gender: '',
        birthDate: '',
    });

    useEffect(() => {

    }, [profile])

    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    useEffect(() => {
        if (profile) {
            setForm({
                fullname: profile.fullname || '',
                email: profile.email || '',
                address: profile.address || '',
                gender: profile.gender || '',
                birthDate: profile.birthDate || '',
            });
            setAvatarPreview(profile.avatar || avatarPlaceholder);
        }
    }, [profile]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSave = async () => {
        const formData = new FormData();
        Object.keys(form).forEach((key) => {
            formData.append(key, (form as any)[key]);
        });
        if (avatarFile) {
            formData.append('avatar', avatarFile);
        }
        await updateProfile(formData);
        setEditing(false);
        setAvatarFile(null); 
    };

    const handleAvatarSave = (file: File) => {
        setAvatarFile(file);
        const reader = new FileReader();
        reader.onload = () => {
            setAvatarPreview(reader.result as string);
        };
        reader.readAsDataURL(file);
    };

    const navigate = useNavigate();

    const isMember = profile?.isMemberUser || false;

    const handleMembershipClick = () => {
        if (isMember) {
            setShowMembershipModal(true);
        } else {
            navigate('/membership-registration');
        }
    };

    const handleIdentityCardClick = () => {
        downloadIdentityCard();

    }

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
                <div className="w-full max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-gradient-to-b from-white to-gray-100 p-6 flex flex-col items-center">
                            <img src={avatarPreview} alt="Avatar" className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-barcelonaGold object-cover" />
                            {editing && (
                                <button
                                    onClick={() => setShowAvatarModal(true)}
                                    className="mt-2 text-sm text-barcelonaBlue hover:underline"
                                >
                                    Edit Avatar
                                </button>
                            )}
                            <h3 className="mt-4 text-lg font-bold text-gray-800">{form.fullname}</h3>
                            <p className="mt-2 text-sm text-green-600 font-semibold">{isMember ? 'Member' : 'Non-Member'}</p>
                            <div className="mt-4 w-full">
                                <button
                                    onClick={() => setEditing((s) => !s)}
                                    className="w-full py-2 px-4 bg-barcelonaBlue text-white rounded-md shadow hover:opacity-90"
                                >
                                    {editing ? 'Cancel Edit' : 'Edit Profile'}
                                </button>
                            </div>
                            <div className="mt-3 w-full">
                                <button
                                    onClick={handleMembershipClick}
                                    className="w-full py-2 px-4 border border-barcelonaBlue text-barcelonaBlue rounded-md shadow-sm hover:bg-barcelonaBlue/5"
                                >
                                    {isMember ? 'View Membership Card' : 'Apply for Membership'}
                                </button>
                            </div>

                            {profile?.isMemberUser && (<div className="mt-3 w-full">
                                <button
                                    onClick={handleIdentityCardClick}
                                    className="w-full py-2 px-4 border border-barcelonaBlue text-barcelonaBlue rounded-md shadow-sm hover:bg-barcelonaBlue/5"
                                >
                                    Download Identity Card
                                </button>
                            </div>)}

                            {/* Membership Card Modal */}
                            <MembershipCardModal
                                isOpen={showMembershipModal}
                                onClose={() => setShowMembershipModal(false)}
                                profile={profile || {}}
                            />

                            {/* Avatar Edit Modal */}
                            <AvatarEditModal
                                isOpen={showAvatarModal}
                                onClose={() => setShowAvatarModal(false)}
                                currentAvatar={avatarPreview}
                                onSave={handleAvatarSave}
                            />
                        </div>

                        <div className="md:w-2/3 p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-600">Full name</label>
                                    {editing ? (
                                        <input name="fullname" value={form.fullname} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md" />
                                    ) : (
                                        <p className="mt-1 text-gray-700">{form.fullname}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600">Email</label>
                                    {editing ? (
                                        <input name="email" value={form.email} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md" disabled />
                                    ) : (
                                        <p className="mt-1 text-gray-700">{form.email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600">Gender</label>
                                    {editing ? (
                                        <select name="gender" value={form.gender} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md">
                                            <option value="">Select Gender</option>
                                            <option value="MALE">Male</option>
                                            <option value="FEMALE">Female</option>
                                        </select>
                                    ) : (
                                        <p className="mt-1 text-gray-700">{form.gender}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600">Date of Birth</label>
                                    {editing ? (
                                        <input name="dateOfBirth" type="date" value={form.birthDate} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md" />
                                    ) : (
                                        <p className="mt-1 text-gray-700">{form.birthDate}</p>
                                    )}
                                </div>

                                <div className="md:col-span-2">
                                    <label className="block text-sm text-gray-600">Address</label>
                                    {editing ? (
                                        <input name="address" value={form.address} onChange={handleChange} className="mt-1 w-full px-3 py-2 border rounded-md" />
                                    ) : (
                                        <p className="mt-1 text-gray-700">{form.address}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mt-6 flex items-center space-x-3">
                                {editing ? (
                                    <>
                                        <button onClick={handleSave} className="px-4 py-2 bg-barcelonaRed text-white rounded-md">Save Changes</button>
                                        <button onClick={() => setEditing(false)} className="px-4 py-2 bg-gray-200 rounded-md">Cancel</button>
                                    </>
                                ) : (
                                    <p className="text-sm text-gray-500">Last updated: {profile?.lastUpdated}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Profile;