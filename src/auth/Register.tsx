import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import AccountForm from '../components/register/AccountForm';
import PersonalForm from '../components/register/PersonalForm';
import PhotoUploadForm from '../components/register/PhotoUploadForm';

const Register: React.FC = () => {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState('');
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [gender, setGender] = useState('');
    const [address, setAddress] = useState('');
    const [identityCard, setIdentityCard] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);

    const { register } = useAuth();
    // const navigate = useNavigate();

    const nextStep = () => {
        setError(null);
        if (step === 1) {
            if (!email || !password || !confirmPassword) {
                setError('Please fill in all account details.');
                return;
            }
            if (password !== confirmPassword) {
                setError('Passwords do not match.');
                return;
            }
        } else if (step === 2) {
            if (!dateOfBirth || !gender || !address) {
                setError('Please fill in all personal details.');
                return;
            }
        }
        setStep((prev) => prev + 1);
    };

    const prevStep = () => {
        setError(null);
        setStep((prev) => prev - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        if (!identityCard) {
            setError('Please upload your face photo.');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match.');
            return;
        }

        try {
            const registrationData = {
                email,
                password,
                fullname,
                dateOfBirth,
                gender,
                address,
                identityCard,
            };

            const result = await register(registrationData);
            if (result.success) {
                // Redirection handled by useAuth hook
            } else {
                setError(result.message || 'Registration failed.');
            }
        } catch (err) {
            setError('An unexpected error occurred during registration.');
            console.error(err);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <AccountForm
                        email={email}
                        password={password}
                        confirmPassword={confirmPassword}
                        setEmail={setEmail}
                        setPassword={setPassword}
                        setConfirmPassword={setConfirmPassword}
                    />
                );
            case 2:
                return (
                    <PersonalForm
                        fullname={fullname}
                        dateOfBirth={dateOfBirth}
                        gender={gender}
                        address={address}
                        setFullName={setFullname}
                        setDateOfBirth={setDateOfBirth}
                        setGender={setGender}
                        setAddress={setAddress}
                    />
                );
            case 3:
                return (
                    <PhotoUploadForm
                        identityCard={identityCard}
                        setIdentityCard={setIdentityCard}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-barcelonaBlue">
            <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                <h1 className="text-2xl font-bold text-center text-barcelonaBlue mb-6">Register for Membership</h1>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                        <strong className="font-bold">Error!</strong>
                        <span className="block sm:inline"> {error}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    {renderStep()}

                    <div className="flex justify-between mt-6">
                        {step > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="py-2 px-4 bg-gray-300 text-gray-800 font-semibold rounded-md hover:bg-gray-400"
                            >
                                Previous
                            </button>
                        )}
                        {step < 3 && (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="py-2 px-4 bg-barcelonaBlue text-white font-semibold rounded-md hover:bg-barcelonaRed ml-auto"
                            >
                                Next
                            </button>
                        )}
                        {step === 3 && (
                            <button
                                type="submit"
                                className="w-full py-2 px-4 bg-barcelonaRed text-white font-semibold rounded-md hover:bg-barcelonaDarkRed"
                            >
                                Register
                            </button>
                        )}
                    </div>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Already have an account? <a href="/" className="text-barcelonaBlue hover:underline">Login here</a>
                </p>
            </div>
        </div>
    );
};

export default Register;