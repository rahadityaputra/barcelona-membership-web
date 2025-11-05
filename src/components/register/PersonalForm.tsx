import React from 'react';

interface PersonalFormProps {
    fullname: string;
    dateOfBirth: string;
    gender: string;
    address: string;
    setFullName: (fullname: string) => void;
    setDateOfBirth: (date: string) => void;
    setGender: (gender: string) => void;
    setAddress: (address: string) => void;
}

const PersonalForm: React.FC<PersonalFormProps> = ({
    fullname,
    dateOfBirth,
    gender,
    address,
    setFullName,
    setDateOfBirth,
    setGender,
    setAddress,
}) => {
    return (
        <div className="space-y-4">
             <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                    type="text"
                    id="fullname"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-barcelonaGold focus:border-barcelonaGold"
                    value={fullname}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                    type="date"
                    id="dob"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-barcelonaGold focus:border-barcelonaGold"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Gender</label>
                <select
                    id="gender"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-barcelonaGold focus:border-barcelonaGold"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required
                >
                    <option value="">Select Gender</option>
                    <option value="MALE">Male</option>
                    <option value="FEMALE">Female</option>
                </select>
            </div>
            <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                    id="address"
                    rows={3}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-barcelonaGold focus:border-barcelonaGold"
                    placeholder="Enter your address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                ></textarea>
            </div>
        </div>
    );
};

export default PersonalForm;