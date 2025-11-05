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
                        <h1 className="text-2xl font-bold text-barcelonaBlue mb-3">Members Meet-up — Fan & Player Gathering</h1>
                        <p className="text-gray-700 mb-4">
                            You're invited to an exclusive Members Meet-up: a casual gathering where fans get the chance to meet players,
                            hear brief talks from the coaching staff, and join a Q&A session. Come to see our hero
                        </p>

                        <div className="text-sm text-gray-700 space-y-2 mb-4">
                            <div><strong>Date:</strong> Saturday, 14 December 2025</div>
                            <div><strong>Time:</strong> 15:00 — 18:00</div>
                            <div><strong>Location:</strong> Camp Nou — Members' Lounge (Entrance Gate A)</div>
                        </div>

                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Agenda</h2>
                        <ul className="list-disc list-inside text-gray-700 mb-4">
                            <li>Welcome & opening remarks</li>
                            <li>Meet-and-greet photo session (limited slots)</li>
                            <li>Short panel with selected players</li>
                            <li>Q&A and closing</li>
                        </ul>

                        <p className="text-sm text-gray-600 mb-4">Seats are available on a first-come, first-served basis.</p>

                        
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default MembersMeetup;
