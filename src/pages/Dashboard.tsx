import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const Dashboard: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold text-barcelonaBlue mb-4">Welcome to your Dashboard</h2>
                    <p className="text-gray-700">Here is a summary of your account and activities.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="bg-barcelonaBlue text-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">Membership Status</h3>
                            <p>Premium Member</p>
                        </div>
                        <div className="bg-barcelonaRed text-white p-4 rounded-lg shadow">
                            <h3 className="text-lg font-semibold">News Read</h3>
                            <p>15 Articles</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Dashboard;