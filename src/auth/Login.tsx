import React from 'react';
import squad from '../assets/squad.webp';

const Login: React.FC = () => {
    return (
        <div
            className="relative flex items-center justify-center min-h-screen"
            style={{
                backgroundImage: `url(${squad})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.35)' }} />
            <div className="relative z-10 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-barcelonaBlue mb-6">Login</h1>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-barcelonaGold focus:border-barcelonaGold" placeholder="Enter your email" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-barcelonaGold focus:border-barcelonaGold" placeholder="Enter your password" required />
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-barcelonaRed text-white font-semibold rounded-md hover:bg-barcelonaDarkRed">Login</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <a href="/register" className="text-barcelonaBlue hover:underline">Register here</a>
                </p>
            </div>
        </div>
    );
};

export default Login;