import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import meet from '../assets/meet.webp';

const MembersMeetup: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col">
            <Header />
            <main className="container mx-auto p-4 flex-grow">
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow overflow-hidden">
                    <img src={meet} alt="Members Meet-up" className="w-full h-auto object-cover" />
                    <div className="p-6">
                        <h1 className="text-2xl font-bold text-barcelonaBlue mb-3">Members Meet-up</h1>
                        <p className="text-gray-700">Details about the next meet-up: time, place, and how members can join the event.</p>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MembersMeetup;
