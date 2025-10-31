import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const MembershipCard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow flex items-center justify-center">
                <div className="bg-barcelonaBlue text-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <div className="bg-barcelonaRed p-4 rounded-t-lg">
                        <h1 className="text-xl font-bold text-center">FC Barcelona Fan Club</h1>
                    </div>
                    <div className="mt-4 text-center">
                        <p className="text-lg font-semibold">Name: John Doe</p>
                        <p className="text-lg font-semibold">Membership ID: 123456789</p>
                        <p className="text-lg font-semibold">Status: Premium Member</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MembershipCard;