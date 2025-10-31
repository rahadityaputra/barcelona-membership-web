import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Profile: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h1 className="text-2xl font-bold text-center text-barcelonaBlue mb-6">Profile</h1>
                    <div className="flex flex-col items-center mb-6">
                        <img src="https://via.placeholder.com/150" alt="Profile" className="w-24 h-24 rounded-full border-4 border-barcelonaGold" />
                        <div className="ml-4 text-center mt-4">
                            <p className="text-lg font-semibold text-gray-700">John Doe</p>
                            <p className="text-sm text-gray-500">john.doe@example.com</p>
                        </div>
                    </div>
                    <button className="w-full py-2 px-4 bg-barcelonaRed text-white font-semibold rounded-md hover:bg-barcelonaDarkRed">Edit Profile</button>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Profile;