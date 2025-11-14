import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NonMemberModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const NonMemberModal: React.FC<NonMemberModalProps> = ({ isOpen, onClose }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const handleRegister = () => {
        navigate('/register');
        onClose();
    };

    const handleRegularNews = () => {
        navigate('/regular-news');
        onClose();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white w-96 rounded-xl shadow-lg overflow-hidden relative">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-xl"
                >
                    &times;
                </button>

                {/* Modal Content */}
                <div className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-barcelonaBlue mb-4">Exclusive Access Required</h2>

                    <p className="text-gray-700 mb-6">
                        You need to be a registered member to access exclusive news. Please register as a member to continue.
                    </p>

                    <div className="flex flex-col gap-4">
                        <button
                            onClick={handleRegister}
                            className="bg-barcelonaBlue text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Register as Member
                        </button>

                        <button
                            onClick={handleRegularNews}
                            className="bg-barcelonaGold text-barcelonaBlue py-3 px-6 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                        >
                            View Regular News
                        </button>
                    </div>

                    {/* Accent */}
                    <div className="mt-6 bg-barcelonaRed text-white p-3 rounded-lg font-bold tracking-wide">
                        FC Barcelona Exclusive Content
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NonMemberModal;
