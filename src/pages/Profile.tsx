import React, { useState } from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import avatarPlaceholder from '../assets/profile.webp';

const Profile: React.FC = () => {
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('john.doe@example.com');
    const [phone, setPhone] = useState('+62 812-3456-7890');
    const [address, setAddress] = useState('Barcelona, Spain');

    const handleSave = () => {
        setEditing(false);
        alert('Profile saved');
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
                <div className="w-full max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-gradient-to-b from-white to-gray-100 p-6 flex flex-col items-center">
                            <img src={avatarPlaceholder} alt="Avatar" className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-barcelonaGold object-cover" />
                            <h3 className="mt-4 text-lg font-bold text-gray-800">{name}</h3>
                            <p className="text-sm text-gray-500">Member ID: <span className="font-mono">123456789</span></p>
                            <p className="mt-2 text-sm text-green-600 font-semibold">Member</p>
                            <div className="mt-4 w-full">
                                <button
                                    onClick={() => setEditing((s) => !s)}
                                    className="w-full py-2 px-4 bg-barcelonaBlue text-white rounded-md shadow hover:opacity-90"
                                >
                                    {editing ? 'Cancel Edit' : 'Edit Profile'}
                                </button>
                            </div>
                        </div>

                        <div className="md:w-2/3 p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Details</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-gray-600">Full name</label>
                                    {editing ? (
                                        <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md" />
                                    ) : (
                                        <p className="mt-1 text-gray-700">{name}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600">Email</label>
                                    {editing ? (
                                        <input value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md" />
                                    ) : (
                                        <p className="mt-1 text-gray-700">{email}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600">Phone</label>
                                    {editing ? (
                                        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md" />
                                    ) : (
                                        <p className="mt-1 text-gray-700">{phone}</p>
                                    )}
                                </div>

                                <div>
                                    <label className="block text-sm text-gray-600">Address</label>
                                    {editing ? (
                                        <input value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 w-full px-3 py-2 border rounded-md" />
                                    ) : (
                                        <p className="mt-1 text-gray-700">{address}</p>
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
                                    <p className="text-sm text-gray-500">Last updated: 2025-10-01</p>
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