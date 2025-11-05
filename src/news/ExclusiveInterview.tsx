import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import yamal from '../assets/yamal.webp';

const ExclusiveInterview: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
                    <img src={yamal} alt="Exclusive Interview" className="w-full h-auto object-cover" />
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-barcelonaBlue mb-3">Exclusive Interview</h1>
                        <p className="text-gray-700">An in-depth interview with the captain — insights, stories, and behind-the-scenes commentary for club members.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ExclusiveInterview;
