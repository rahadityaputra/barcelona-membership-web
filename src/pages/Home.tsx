import React from 'react';
import fans from '../assets/fans.webp';

const Home: React.FC = () => {
    return (
        <div
            className="flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: `url(${fans})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="text-center bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-barcelonaBlue mb-4">Welcome to FC Barcelona Fan Club</h1>
                <p className="text-lg text-gray-700">Your ultimate destination for all things Barça!</p>
                <div className="mt-8 space-x-4">
                    <a href="/login" className="py-2 px-6 bg-barcelonaRed text-white font-semibold rounded-md hover:bg-barcelonaDarkRed">Login</a>
                    <a href="/register" className="py-2 px-6 border border-barcelonaBlue text-barcelonaBlue font-semibold rounded-md hover:bg-barcelonaBlue hover:text-white">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Home;