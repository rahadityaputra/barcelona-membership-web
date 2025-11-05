import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router';
import squad from '../assets/squad.webp';


const Login: React.FC = () => {
    const [email, setEmail] = useState('rahadit.a.p123@gmail.com');
    const [password, setPassword] = useState('12345678');
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(error);
    }, [error])


    const { login } = useAuth();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        try {
            const result = await login(email, password);
            if (result.success) {
                navigate('/');
            } else {
                setError(result.message || 'Registration failed.');
            }
        } catch (err) {
            setError('An unexpected error occurred during registration.');
            console.error(err);
        }
    };

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
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-barcelonaGold focus:border-barcelonaGold" placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-barcelonaGold focus:border-barcelonaGold" placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required />
                    </div>
                    <button type="submit" onClick={handleSubmit} className="w-full py-2 px-4 bg-barcelonaRed text-white font-semibold rounded-md hover:bg-barcelonaDarkRed">Login</button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account? <a href="/register" className="text-barcelonaBlue hover:underline">Register here</a>
                </p>
                <p className="mt-4 text-center text-sm text-gray-600">
                    Using Card ? <a href="/login-with-card" className="text-barcelonaBlue hover:underline">Login By Card</a>
                </p>
            </div>
        </div>
    );
};

export default Login;