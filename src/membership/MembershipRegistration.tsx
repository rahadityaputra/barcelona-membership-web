import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import { registerMembership } from '../services/membership';

const MembershipRegistration: React.FC = () => {
    const [identityCard, setIdentityCard] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // Check file size (max 2MB)
            if (file.size > 2 * 1024 * 1024) {
                setError('File size should not exceed 2MB');
                return;
            }
            // Check file type
            if (!file.type.includes('image/')) {
                setError('Please upload an image file');
                return;
            }
            setIdentityCard(file);
            setError(null);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!identityCard) {
            setError('Please upload your identity card');
            return;
        }

        setLoading(true);
        try {
            const result = await registerMembership(identityCard);
            if (result.success) {
                navigate('/profile');
            } else {
                setError(result.message);
            }
        } catch (err: any) {
            setError(err.message || 'Failed to register membership');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
                    <h1 className="text-2xl font-bold text-barcelonaBlue mb-6">Membership Registration</h1>

                    {error && (
                        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
                            <span className="block sm:inline">{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Upload Identity Card
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div className="space-y-1 text-center">
                                    <svg
                                        className="mx-auto h-12 w-12 text-gray-400"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 48 48"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                            strokeWidth={2}
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="identity-card"
                                            className="relative cursor-pointer bg-white rounded-md font-medium text-barcelonaBlue hover:text-barcelonaRed"
                                        >
                                            <span>Upload a file</span>
                                            <input
                                                id="identity-card"
                                                name="identity-card"
                                                type="file"
                                                className="sr-only"
                                                accept="image/*"
                                                onChange={handleFileChange}
                                            />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 2MB
                                    </p>
                                </div>
                            </div>
                            {identityCard && (
                                <p className="mt-2 text-sm text-gray-500">
                                    Selected file: {identityCard.name}
                                </p>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-barcelonaBlue hover:bg-barcelonaRed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-barcelonaBlue ${loading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                        >
                            {loading ? 'Processing...' : 'Register Membership'}
                        </button>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MembershipRegistration;